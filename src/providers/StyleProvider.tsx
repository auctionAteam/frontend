import { css, Global } from '@emotion/react';

import { Motion } from '@/components/common';
import { ResetCSS } from '@/styles/reset';

const GlobalStyle = css`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard';
  }
`;

interface StyleProviderProps {
  children: React.ReactNode;
}

const StyleProvider = ({ children }: StyleProviderProps) => {
  return (
    <Motion>
      <Global styles={ResetCSS} />
      <Global styles={GlobalStyle} />
      {children}
    </Motion>
  );
};

export default StyleProvider;
