import { useState } from 'react';

import InputAddressModal from '@/components/account/inputAddressModal';
import useUserSignup from '@/hooks/apis/users/useUserSignup';

import { useModalStore } from '@/store/useModalStore';
import { fromValidate } from '@/utils/formValidate';
import { emailRegex, phoneNumberRegex } from '@/utils/regExp';

const useSignup = () => {
  const { openModal } = useModalStore();

  const [isPasswordType, setIsPasswordType] = useState(true);
  const [address, setAddress] = useState('');
  const [errorState, setErrorState] = useState<{ [key: string]: string }>({
    email: '',
    password: '',
    userName: '',
    phoneNumber: '',
    address: '',
  });

  const { mutate: userSignup } = useUserSignup({
    onSuccess: () => {
      // toast 들어가야함
      console.log('성공');
    },
  });

  const onClickChangePasswordType = () => {
    setIsPasswordType(!isPasswordType);
  };

  const onClickOpenModal = () => {
    openModal(<InputAddressModal setAddress={setAddress} />);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const userName = formData.get('name') as string;
    const phoneNumber = formData.get('phoneNumber') as string;

    const validations = {
      email: {
        value: email,
        validate: (value: string) => !emailRegex.test(value),
        errorText: '이메일 형식에 맞게 입력해주세요.',
      },
      password: {
        value: password,
        validate: (value: string) => value.length < 8,
        errorText: '8글자 이상 입력해주세요.',
      },
      userName: {
        value: userName,
        validate: (value: string) => !value,
        errorText: '이름을 입력해주세요.',
      },
      phoneNumber: {
        value: phoneNumber,
        validate: (value: string) => !phoneNumberRegex.test(value),
        errorText: '전화번호 형식에 맞게 입력해주세요.',
      },
      address: {
        value: address,
        validate: (value: string) => !value,
        errorText: '주소를 입력해주세요.',
      },
    };

    const errorValidate = fromValidate(validations);

    setErrorState(errorValidate.errors);

    if (!errorValidate.hasError) {
      console.log('회원가입 API 호출 함수가 들어갈 부분');

      userSignup({ email, password, name: userName, phoneNum: phoneNumber, address });

      e.currentTarget.reset();
    }
  };

  return { isPasswordType, address, errorState, onClickChangePasswordType, onClickOpenModal, handleSubmit };
};

export default useSignup;
