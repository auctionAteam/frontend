import styled from '@emotion/styled';
import { forwardRef, type Ref } from 'react';

import { colors } from '@/styles';

import { type ButtonProps, buttonSizeStyle } from '.';

const PrimaryButton = forwardRef(
  ({ children, size, disabled, type = 'button' }: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <StyledPrimaryButton type={type} ref={ref} size={size} disabled={disabled}>
        {children}
      </StyledPrimaryButton>
    );
  },
);

export default PrimaryButton;

const StyledPrimaryButton = styled.button<ButtonProps>`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0px 16px;
  color: white;
  background-color: ${({ disabled }) => (disabled ? colors.primaryDisabled : colors.primary)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  ${({ size }) => size && buttonSizeStyle[size]};
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${({ disabled }) => !disabled && colors.primaryHover};
  }
`;
