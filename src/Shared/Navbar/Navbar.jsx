import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='bg-[#1C2B35] '>
            <div className="Navbar md:flex md:justify-between container mx-auto text-white py-5 ">
                <div className="logo">
                    <img className='md:w-2/4' src="../../../src/assets/Logo.svg" alt="" />
                </div>
                <div className="nav">
                    <ul className='md:flex gap-3 '>
                        <li className='py-3 md:py-0 px-3 md:px-0 text-xl md:text-sm'><Link to="/">Shop</Link></li>
                        <li className='py-3 md:py-0 px-3 md:px-0 text-xl md:text-sm' ><Link to="/orderReview">Order Review</Link></li>
                        <li className='py-3 md:py-0 px-3 md:px-0 text-xl md:text-sm' ><Link to="/manageInventory">Manage Inventory</Link></li>
                        <li className='py-3 md:py-0 px-3 md:px-0 text-xl md:text-sm' ><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;