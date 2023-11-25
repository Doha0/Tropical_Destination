import React, { useState } from "react";
import logo from "../../assets/Images/logo.png";

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const navItems = ["Home", "About", "Schedules", "Membership", "Pricing"];

    return (
        <nav className="bg-white py-4">
            <div className="container mx-auto flex justify-between items-center">

                <div className="flex items-center">

                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-700 focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>


                    <div className="hidden md:flex items-center md:gap-4 lg:gap-10 font-medium">
                        <figure className="flex flex-row items-center mr-4">
                            <img src={logo} alt="logo" className="w-14" />
                            <h1 className="font-extrabold ml-2 text-base  lg:text-2xl uppercase Inter">Tour</h1>
                        </figure>
                        {navItems.map((item, index) => (
                            <div key={index} className="text-slate-900 hover:text-slate-950">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>


                <div className="flex items-center gap-2 md:gap-6 lg:gap-10 font-medium">
                    <button className="text-gray-700 ml-2">Offers</button>
                    <button className="my-btn">
                        Courses
                    </button>
                </div>


                {isSidebarOpen && (
                    <div className="md:hidden fixed inset-0 bg-[#F27A44] z-50">
                        <div className="flex justify-end p-4">
                            <button
                                type="button"
                                className="text-white focus:outline-none"
                                onClick={toggleSidebar}
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col items-start p-4 space-y-4">
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-white hover:text-gray-300 cursor-pointer"
                                    onClick={toggleSidebar}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;