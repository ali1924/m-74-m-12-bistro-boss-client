import React from 'react';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { AiFillBook, AiOutlineMenu, AiTwotoneMail, AiTwotoneShopping } from 'react-icons/ai';
import {  } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side border bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard/user-home'><FaHome />User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt />Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/payment'><FaWallet />Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/my-cart"><FaShoppingCart />My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/review'>Add Review</NavLink></li>
                    <li><NavLink to='/dashboard/booking'><AiFillBook/>My Booking</NavLink></li>
                    <div className='divider'></div>
                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'><AiOutlineMenu/>Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><AiTwotoneShopping/>Order Food</NavLink></li>
                    <li><NavLink to='/dashboard/contact'><AiTwotoneMail/>Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;