import styled from '@emotion/styled';
import { forwardRef, type Ref } from 'react';

import { colors } from '@/styles';

import { type ButtonProps, buttonSizeStyle } from '.';

const GhostButton = forwardRef(
  ({ children, size, disabled, type = 'button' }: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <StyledGhostButton type={type} ref={ref} size={size} disabled={disabled}>
        {children}
      </StyledGhostButton>
    );
  },
);

export default GhostButton;

const StyledGhostButton = styled.button<ButtonProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0px 16px;
  background-color: white;
  cursor: pointer;
  ${({ size }) => size && buttonSizeStyle[size]};
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${({ disabled }) => !disabled && colors.gray150};
  }
`;
