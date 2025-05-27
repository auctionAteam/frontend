import { css, Global, ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import React from 'react';

import { theme } from './../src/styles';
import { ResetCSS } from './../src/styles/reset';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const GlobalStyle = css`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard';
  }
`;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={ResetCSS} />
      <Global styles={GlobalStyle} />
      <Story />
    </ThemeProvider>
  ),
];

export { preview };
