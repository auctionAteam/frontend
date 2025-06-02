import styled from '@emotion/styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useModalStore } from '@/store/useModalStore';

const Modal = () => {
  const { isOpen, children, closeModal } = useModalStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <StyledModal onClick={closeModal}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>{children}</StyledModalContent>
    </StyledModal>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default Modal;

const StyledModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  position: relative;
`;
