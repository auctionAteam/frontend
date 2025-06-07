import { useState } from 'react';

import { ACCESS_TOKEN } from '@/constants/token';
import useUserLogin from '@/hooks/apis/users/useUserLogin';
import { fromValidate } from '@/utils/formValidate';
import { emailRegex } from '@/utils/regExp';

const useLogin = () => {
  const [isPasswordType, setIsPasswordType] = useState(true);
  const [errorState, setErrorState] = useState<{ [key: string]: string }>({ email: '', password: '' });

  const { mutate: userLogin } = useUserLogin({
    onSuccess: (response) => {
      localStorage.setItem(ACCESS_TOKEN, response.token);

      window.location.href = '/';
    },
  });

  const onClickChangePasswordType = () => {
    setIsPasswordType(!isPasswordType);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const validations = {
      email: {
        value: email,
        validate: (value: string) => !emailRegex.test(value),
        errorText: '올바른 형식의 이메일 주소를 입력해주세요.',
      },
      password: {
        value: password,
        validate: (value: string) => value.length < 8,
        errorText: '8글자 이상 입력해주세요.',
      },
    };

    const errorValidate = fromValidate(validations);

    setErrorState(errorValidate.errors);

    if (!errorValidate.hasError) {
      userLogin({ email, password });

      e.currentTarget.reset();
    }
  };

  return { errorState, handleSubmit, isPasswordType, onClickChangePasswordType };
};

export default useLogin;
