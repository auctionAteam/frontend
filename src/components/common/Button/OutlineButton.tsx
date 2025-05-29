import styled from '@emotion/styled';
import { forwardRef, type Ref } from 'react';

import { colors } from '@/styles';

import { type ButtonProps, buttonSizeStyle } from '.';

const OutlineButton = forwardRef(
  ({ children, size, type = 'button' }: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <StyledOutlineButton type={type} ref={ref} size={size}>
        {children}
      </StyledOutlineButton>
    );
  },
);

export default OutlineButton;

const StyledOutlineButton = styled.button<ButtonProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0px 16px;
  background-color: white;
  cursor: pointer;
  ${({ size }) => size && buttonSizeStyle[size]};
  border: 1px solid ${colors.gray250};

  &:hover {
    background-color: ${colors.gray100};
  }
`;
