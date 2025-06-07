import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import { StyleProvider } from './providers';
import TanstackQueryProvider from './providers/TanstackQueryProvider.tsx';
import Router from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StyleProvider>
    <TanstackQueryProvider>
      <Router />
      <Toaster position="top-right" />
    </TanstackQueryProvider>
  </StyleProvider>,
);
