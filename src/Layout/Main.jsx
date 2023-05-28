import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';


const Main = () => {
    // purpose login path
    const location = useLocation();
    // console.log(location);
    //return false
    const noHeaderFooter = location.pathname.includes('login');
    // console.log(noHeaderFooter);
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;