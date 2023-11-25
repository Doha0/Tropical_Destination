import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <section className='max-w-[1512px] mx-auto'>
            <div className='max-w-[1274px] mx-auto overflow-hidden px-4 xl:px-0'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </section>
    );
};

export default Main;