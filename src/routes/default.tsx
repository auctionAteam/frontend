import { Outlet } from 'react-router-dom';

import Modal from '@/components/common/Modal';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Modal />
    </>
  );
};

export default DefaultLayout;
