import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);



    
    return (
        <header className='bg-[#1C2B35] sticky top-0 z-10'>
             <span onClick={() => setOpen(!open) } className='md:hidden text-white absolute right-5 top-3 cursor-pointer'>
                {
                    open===true? <XMarkIcon className='w-8'/> :<Bars3Icon className='w-8'/>
                }
             </span>
            <div className="Navbar md:flex md:justify-between container mx-auto text-white py-5 ">
                <div className="logo">
                    <img className='md:w-2/4' src="../../../src/assets/Logo.svg" alt="" />
                </div>
                <div className={`nav ${open === true? "block" : "hidden md:block"}`}>
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