import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from '@/pages/main';

import DefaultLayout from './default';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
