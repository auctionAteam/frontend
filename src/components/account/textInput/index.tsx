import { Flex, Input } from '@/components/common';

type TextInputProps = {
  label: string;
  name: string;
  errorText?: string;
  placeholder?: string;
};

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
