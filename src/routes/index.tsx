import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/App';
import LoginPage from '@/pages/login';
import SignupPage from '@/pages/signup';

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
      {
        path: '/signup',
        element: <SignupPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
