/* eslint-disable react-refresh/only-export-components */
import { css } from '@emotion/react';
import { type ButtonHTMLAttributes, forwardRef, type Ref } from 'react';

import { fonts } from '@/styles';

import GhostButton from './GhostButton';
import OutlineButton from './OutlineButton';
import PrimaryButton from './PrimaryButton';

export const BUTTON_STYLE_KEYS = {
  PRIMARY: 'primary',
  OUTLINE: 'outline',
  GHOST: 'ghost',
} as const;

export const buttonSizeStyle = {
  small: css`
    ${fonts.subTitle2};
    height: 40px;
  `,
  medium: css`
    ${fonts.subTitle2};
    height: 45px;
  `,
  large: css`
    ${fonts.subTitle1};
    height: 50px;
  `,
};

type ButtonStyleType = (typeof BUTTON_STYLE_KEYS)[keyof typeof BUTTON_STYLE_KEYS];
type ButtonSizeType = 'small' | 'medium' | 'large';

export type ButtonProps = {
  styleType?: ButtonStyleType;
  size?: ButtonSizeType;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef(
  (
    { styleType = 'primary', size = 'medium', children, ...props }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const buttonProps = { ref, size, children, ...props };

    switch (styleType) {
      case 'primary':
        return <PrimaryButton {...buttonProps} />;
      case 'outline':
        return <OutlineButton {...buttonProps} />;
      case 'ghost':
        return <GhostButton {...buttonProps} />;
      default:
        return <PrimaryButton {...buttonProps} />;
    }
  },
);

export default Button;
