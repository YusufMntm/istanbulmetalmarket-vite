import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Foooter';

const Layout = ({ children }) => {
  return (
    <div className='font-poppins'>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;