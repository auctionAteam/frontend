import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import { Flex, Input } from '@/components/common';

type PasswordInputProps = {
  isPasswordType: boolean;
  errorText?: string;
  onClickChangePasswordType: () => void;
};

const PasswordInput = ({ isPasswordType, errorText, onClickChangePasswordType }: PasswordInputProps) => {
  const InputIcon = isPasswordType ? IoMdEyeOff : IoMdEye;

  return (
    <Flex direction="column" gap="10px">
      <Input
        type={isPasswordType ? 'password' : 'text'}
        inputIcon={
          <InputIcon onClick={onClickChangePasswordType} style={{ marginRight: '5px', cursor: 'pointer' }} />
        }
        errorText={errorText}
        placeholder="비밀번호를 입력해주세요."
        label="비밀번호"
        name="password"
      />
    </Flex>
  );
};

export default PasswordInput;
