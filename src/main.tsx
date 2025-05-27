import { createRoot } from 'react-dom/client';

import { StyleProvider } from './providers';
import Router from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StyleProvider>
    <Router />
  </StyleProvider>,
);
