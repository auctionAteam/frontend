import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import { emailRegex } from '@/utils/regExp';

const useLogin = () => {
  const [isPasswordType, setIsPasswordType] = useState(true);
  const [errorState, setErrorState] = useState({ id: '', password: '' });

  const onClickChangePasswordType = () => {
    setIsPasswordType(!isPasswordType);
  };

  const InputIcon = isPasswordType ? IoMdEyeOff : IoMdEye;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const id = formData.get('id') as string;
    const password = formData.get('password') as string;

    if (!emailRegex.test(id)) {
      setErrorState((prevState) => ({ ...prevState, id: '올바른 형식의 이메일 주소를 입력해주세요.' }));
    } else {
      setErrorState((prevState) => ({ ...prevState, id: '' }));
    }

    if (password.length < 8) {
      setErrorState((prevState) => ({ ...prevState, password: '8글자 이상 입력해주세요.' }));
    } else {
      setErrorState((prevState) => ({ ...prevState, password: '' }));
    }

    if (emailRegex.test(id) && !(password.length < 8)) {
      console.log('로그인 API 호출 함수가 들어갈 부분');
    }
  };

  return { errorState, handleSubmit, isPasswordType, InputIcon, onClickChangePasswordType };
};

export default useLogin;
