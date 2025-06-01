import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/App';
import LoginPage from '@/pages/login';

import DefaultLayout from './default';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
