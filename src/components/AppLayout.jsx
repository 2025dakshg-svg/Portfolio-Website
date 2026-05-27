import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import AboutNavbar from './AboutNavbar';
import Footer from './Footer';
import AppRoutes from '../routes/AppRoutes';

const AppLayout = () => {
  const { pathname } = useLocation();
  const isAboutPage = pathname === '/about';

  return (
    <div className="App">
      {isAboutPage ? <AboutNavbar /> : <Navbar />}
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default AppLayout;
