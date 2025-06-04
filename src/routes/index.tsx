import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/App';
import MyPage from '@/pages/mypage';
import RegisterPage from '@/pages/register';

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
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/registerpage',
        element: <RegisterPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
