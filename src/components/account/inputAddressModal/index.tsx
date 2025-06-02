import styled from '@emotion/styled';
import type { SetStateAction } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';

import { useModalStore } from '@/store/useModalStore';
import type { DaumAddressType } from '@/types/daumAddress';

type InputAddressModalProps = {
  setAddress: React.Dispatch<SetStateAction<string>>;
};

const InputAddressModal = ({ setAddress }: InputAddressModalProps) => {
  const { closeModal } = useModalStore();

  const handleComplete = (data: DaumAddressType) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddress(fullAddress);
    closeModal();
  };

  return (
    <StyledInputAddressModal>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </StyledInputAddressModal>
  );
};

export default InputAddressModal;

const StyledInputAddressModal = styled.div`
  width: 380px;
  height: 100%;
`;
