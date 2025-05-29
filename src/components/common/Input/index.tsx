import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, type InputHTMLAttributes, type Ref, useId } from 'react';

import { colors } from '@/styles';

const InputStyle = {
  small: css`
    font-size: 14px;
    height: 38px;
  `,
  medium: css`
    font-size: 16px;
    height: 42px;
  `,
  large: css`
    font-size: 18px;
    height: 48px;
  `,
};

const InputIconStyle = {
  small: css`
    width: 18px;
    height: 18px;
  `,
  medium: css`
    width: 21px;
    height: 21px;
  `,
  large: css`
    width: 24px;
    height: 24px;
  `,
};

const LabelAndErrorStyle = {
  small: css`
    font-size: 13px;
    line-height: 110%;
  `,
  medium: css`
    font-size: 14px;
    line-height: 120%;
  `,
  large: css`
    font-size: 16px;
    line-height: 120%;
  `,
};

type InputSizeType = 'small' | 'medium' | 'large';

type InputProps = {
  label?: string;
  size?: InputSizeType;
  inputIcon?: React.ReactNode;
  errorText?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

const Input = forwardRef(
  (
    { label, size = 'medium', inputIcon, errorText, type, ...props }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const inputId = useId();

    return (
      <StyledInputContainer>
        {label && (
          <StyledInputLabel size={size} htmlFor={inputId}>
            {label}
          </StyledInputLabel>
        )}
        <StyledInputWrapper hasError={!!errorText}>
          <StyledInput id={inputId} ref={ref} type={type || 'text'} $size={size} {...props} />
          {inputIcon && <StyledInputIcon size={size}>{inputIcon}</StyledInputIcon>}
        </StyledInputWrapper>
        {errorText && <StyledErrorText size={size}>{errorText}</StyledErrorText>}
      </StyledInputContainer>
    );
  },
);

export default Input;

const StyledInputContainer = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  gap: 7px;
`;

const StyledInputLabel = styled.label<{ size: InputSizeType }>`
  color: ${colors.gray250};
  width: fit-content;
  ${({ size }) => LabelAndErrorStyle[size]};
`;

const StyledInputWrapper = styled.div<{ hasError?: boolean }>`
  display: flex;
  border-radius: 8px;
  border: 1px solid ${({ hasError }) => (hasError ? colors.error : colors.gray200)};
  transition: 0.1s ease-in-out;

  &:focus-within {
    border-color: ${({ hasError }) => (hasError ? colors.error : colors.primary)};
  }
`;

const StyledInput = styled.input<{ $size: InputSizeType }>`
  width: 100%;
  border: transparent;
  padding: 0 12px 0 16px;
  ${({ $size }) => InputStyle[$size]};
  border-radius: 8px;
  color: ${colors.gray300};

  &:focus {
    outline: transparent;
  }
`;

const StyledInputIcon = styled.div<{ size: InputSizeType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.gray200};
  border-radius: 8px;

  svg {
    padding-right: 8px;
    ${({ size }) => InputIconStyle[size]};
  }
`;

const StyledErrorText = styled.div<{ size: InputSizeType }>`
  color: ${colors.error};
  ${({ size }) => LabelAndErrorStyle[size]};
`;
