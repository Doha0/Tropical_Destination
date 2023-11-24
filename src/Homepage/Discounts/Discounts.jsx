import React from 'react';
import Image from '../../assets/Images/Mask group.png'

const Discounts = () => {
    return (
        <section className="inter py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 justify-center items-center md:gap-x-12 lg:gap-x-24">
            <div className='order-last md:order-first'>
                <div className='justify-center flex-col'>
                    <p className='mb-3 font-medium text-sm md:text-base lg:text-xl'>Get 20% off for student</p>
                    <h2 className='font-medium md:text-xl lg:text-3xl mb-5'>
                        <span className='font-bold  lg:text-[40px]'>Student discounts available.</span>
                        <br />
                        Get ready for some fun in the sun!
                    </h2>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Sed suspendisse id in ultrices</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit</li>
                    <li>tortor id euismod habitant</li>
                    <button className='bg-[#F27A44] text-white px-12 py-4 rounded-[30px] mt-14'>
                        Explore More
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center w-full my-6 md:mt-0 order-first md:order-last">
                <img className="w-full h-full" src={Image} alt="bannerImg" />
            </div>
        </section>
    );
};

export default Discounts;