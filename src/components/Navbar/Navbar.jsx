import React, { useState } from "react";

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const navItems = ["Home", "About", "Schedules", "Membership", "Pricing"];

    return (
        <nav className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Navbar items on the left side */}
                <div className="flex items-center space-x-4">
                    {/* Hamburger menu for small screens */}
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

                    {/* Navbar items for medium and large screens */}
                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item, index) => (
                            <div key={index} className="text-gray-800 hover:text-gray-900">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buttons on the right side */}
                <div className="flex items-center space-x-4">
                    <button className="text-gray-600">Offers</button>
                    <button className="my-btn">
                        Courses
                    </button>
                </div>

                {/* Sidebar for small screens */}
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