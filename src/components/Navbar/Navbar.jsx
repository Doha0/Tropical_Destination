import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = <>
        <div className="nav-items-list font-medium">
            <Link className="nav-items">
                Home
            </Link>
            <Link className="nav-items">
                About
            </Link>
            <Link className="nav-items">
                Schedules
            </Link>
            <Link className="nav-items">
                Membership
            </Link>
            <Link className="nav-items">
                Pricing
            </Link>
        </div>

        <div className="nav-items-list">
            <Link className="nav-items text-[#7D7D7D]">
                offers
            </Link>
            <Link className="nav-items">
                <button className='primary-button'>
                    courses
                </button>
            </Link>
        </div>
    </>

    return (
        <nav x-data={{ isOpen }} className="relative bg-white">
            <div className="px-6  mx-auto md:flex">
                <div className="flex items-center justify-between">
                    <Link>
                        <img className="w-full h-12" src={logo} alt="logo" />
                    </Link>


                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} md:translate-x-0 md:flex md:items-center md:justify-between`}
                >
                    {
                        navItems
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
