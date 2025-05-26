import { css } from '@emotion/react';

import Container from './Container';
import Wrapper from './Wrapper';

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const PageWrapper = ({ children, ...props }: PageWrapperProps) => {
  return (
    <Wrapper css={wrapperStyle}>
      <Container css={containerStyle} {...props}>
        {children}
      </Container>
    </Wrapper>
  );
};

export default PageWrapper;

const wrapperStyle = css`
  min-height: calc(100dvh - 100px);
`;

const containerStyle = css`
  padding-top: 80px;
`;
