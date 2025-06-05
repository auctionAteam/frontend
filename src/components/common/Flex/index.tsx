import styled from '@emotion/styled';
import { type CSSProperties, forwardRef, type HTMLAttributes, type Ref } from 'react';

type FlexProps = {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  basis?: CSSProperties['flexBasis'];
  shrink?: CSSProperties['flexShrink'];
  grow?: CSSProperties['flexGrow'];
  direction?: CSSProperties['flexDirection'];
  gap?: CSSProperties['gap'];
  children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Flex = forwardRef(
  (
    { children, align, justify, wrap, basis, shrink, grow, direction, gap, ...props }: FlexProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <StyledFlex
        ref={ref}
        align={align}
        justify={justify}
        wrap={wrap}
        basis={basis}
        shrink={shrink}
        grow={grow}
        direction={direction}
        gap={gap}
        {...props}
      >
        {children}
      </StyledFlex>
    );
  },
);

export default Flex;

const StyledFlex = styled.div<Omit<FlexProps, 'children'>>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-wrap: ${({ wrap }) => wrap};
  flex-basis: ${({ basis }) => basis};
  flex-shrink: ${({ shrink }) => shrink};
  flex-grow: ${({ grow }) => grow};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
`;
