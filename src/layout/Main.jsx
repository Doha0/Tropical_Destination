import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <section className='max-w-[1512px] mx-auto'>
            <div className='max-w-[1274px] mx-auto'>
                <Navbar />
                <Outlet />
            </div>
        </section>
    );
};

export default Main;