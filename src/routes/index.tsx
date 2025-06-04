import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/App';

import DefaultLayout from './default';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
