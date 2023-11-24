import React from 'react';
import bannerImage from '../../assets/Images/banner.png'

const Banner = () => {
    return (
        <section className="container px-6 py-16 mx-auto inter">
            <div className="grid md:grid-cols-2 items-center">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-7xl">
                        <p className='mb-2 font-semibold text-xl'>Discover the beauty of the tropics</p>
                        <div className='space-y-12 py-6 poppins '>
                            <h1 className="font-bold black-text-color text-3xl lg:text-[80px]">Tropical</h1>
                            <h1 className="font-bold black-text-color text-3xl lg:text-[80px]">Destinations</h1>
                            <h2 className='font-medium black-text-color text-3xl lg:text-[80px]'>For Student</h2>
                        </div>
                        <p className="my-4 lg:my-12 text-gray-600 ">Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
                        <button className='bg-[#F27A44] text-white px-12 py-4 rounded-[30px] uppercase'>
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img className="w-full h-full lg:max-w-3xl" src={bannerImage} alt="bannerImg" />
                </div>
            </div>
        </section >
    );
};

export default Banner;