import { Button, Flex, Input } from '@/components/common';

type AddressInputProps = {
  label: string;
  name: string;
  address: string;
  errorText?: string;
  onClick?: () => void;
};

const AddressInput = ({ label, name, address, errorText, onClick }: AddressInputProps) => {
  return (
    <Flex direction="column" gap="10px">
      <Flex align="flex-end" gap="8px">
        <Input
          label={label}
          name={name}
          defaultValue={address}
          placeholder={`${label}를 입력해주세요.`}
          style={{ width: '250px' }}
          errorText={errorText}
          readOnly
        />
        <Button onClick={onClick}>주소 찾기</Button>
      </Flex>
    </Flex>
  );
};

export default AddressInput;
