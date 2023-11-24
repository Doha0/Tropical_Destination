import React from 'react';
import bannerImage from '../../assets/Images/banner.png'

const Banner = () => {
    return (
        <section className="container px-6 py-16 mx-auto inter max-h-screen  mb-10 lg:mb-40">
            <div className="md:flex items-center justify-center md:gap-x-12 lg:gap-x-24">

                <div className="w-full md:w-1/2 order-last md:order-first">
                    <div className="md:max-w-xl">
                        <p className='mb-1 font-semibold text-sm md:text-xl'>Discover the beauty of the tropics</p>
                        <div className='space-y-2 lg:space-y-6 py-4 md:py-6 poppins'>
                            <h1 className="font-bold black-text-color text-4xl md:text-5xl lg:text-[80px]">Tropical</h1>
                            <h1 className="font-bold black-text-color text-4xl md:text-5xl lg:text-[80px]">Destinations</h1>
                            <h2 className='font-medium black-text-color text-4xl md:text-5xl lg:text-[80px]'>For Student</h2>
                        </div>
                        <p className="my-4 lg:my-12 text-gray-600 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
                        <button className='bg-[#F27A44] text-white px-12 py-4 rounded-[30px] uppercase'>
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 md:w-1/2 order-first md:order-last">
                    <img className="w-full h-full md:max-w-xl" src={bannerImage} alt="bannerImg" />
                </div>
            </div>
        </section >
    );
};

export default Banner;