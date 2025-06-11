import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/App';
import LoginPage from '@/pages/login';
import MyPage from '@/pages/mypage';
import ProductDetailPage from '@/pages/product/ProductDetailPage';
import RegisterPage from '@/pages/register';
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
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },

      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        path: '/detailPage/:id',
        element: <ProductDetailPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
