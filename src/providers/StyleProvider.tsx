import { css, Global } from '@emotion/react';

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
    <>
      <Global styles={ResetCSS} />
      <Global styles={GlobalStyle} />
      {children}
    </>
  );
};

export default StyleProvider;
