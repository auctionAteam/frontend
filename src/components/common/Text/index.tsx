import styled from '@emotion/styled';
import { forwardRef, type HTMLAttributes, type Ref } from 'react';

import { type ColorKeysType, colors, type FontKeysType, fonts } from '@/styles';

type TextProps = {
  font?: FontKeysType;
  color?: ColorKeysType;
  children: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

const Text = forwardRef(
  ({ font = 'subTitle1', color = 'black', children, ...props }: TextProps, ref: Ref<HTMLSpanElement>) => {
    return (
      <StyledText ref={ref} font={font} color={color} {...props}>
        {children}
      </StyledText>
    );
  },
);

export default Text;

const StyledText = styled.span<Omit<TextProps, 'children'>>`
  color: ${({ color }) => color && colors[color]};
  ${({ font }) => font && fonts[font]};
`;
