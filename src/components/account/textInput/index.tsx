import { Flex, Input } from '@/components/common';
import type { AccountInputType } from '@/types/account';

type TextInputProps = AccountInputType;

const TextInput = ({ label, name, errorText, placeholder }: TextInputProps) => {
  return (
    <Flex direction="column" gap="10px">
      <Input
        label={label}
        name={name}
        errorText={errorText}
        placeholder={placeholder ? placeholder : `${label}를 입력해주세요.`}
      />
    </Flex>
  );
};

export default TextInput;
