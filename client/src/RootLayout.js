import React from 'react';
// import Navigation from './navbar/Navigation';
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';
// import Footer from './footer/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar /> 
      <div style={{minHeight:'90vh'}}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default RootLayout;