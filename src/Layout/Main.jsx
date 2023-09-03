import React from 'react';
import FirstNavbar from '../Shared/FirstNavbar';
import SecondNavbar from '../Shared/SecondNavbar';
import ThirdNavbar from '../Shared/ThirdNavbar';
import { Outlet  } from "react-router-dom";
import Footer from '../Shared/Footer';
const Main = () => {
    return (
        <div>
      <FirstNavbar>  </FirstNavbar>
      <SecondNavbar></SecondNavbar>
  <div className='hidden md:block lg-block'>    <ThirdNavbar></ThirdNavbar></div>
      <Outlet></Outlet>
      <Footer></Footer>
              </div>
    );
};

export default Main;