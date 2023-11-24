import React from 'react';
import Image from "../../assets/Images/Group 167.png"

const Bookings = () => {
    return (
        <section className="inter py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 justify-center items-center md:gap-x-12 lg:gap-x-24">
            <div className="flex items-center justify-center w-full my-6 md:mt-0">
                <img className="w-full h-full" src={Image} alt="bannerImg" />
            </div>

            <div className="max-w-sm mx-auto p-6 bg-white shadow-2xl overflow-hidden rounded-md">
                <div className='mb-6'>
                    <h2 className="text-2xl font-extrabold text-black mb-2">Book Now</h2>
                    <p className="text-[#282828] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>

                <div className='pt-6'>
                    <label className="block text-xs font-semibold text-black pb-1.5 uppercase">City</label>
                    <input type="text" placeholder='Placeholder' className="w-full text-sm bg-[#F3F3F3] py-3 px-3 mb-4 rounded-md focus:outline-none focus:shadow-outline-blue" />
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <label className="block text-xs font-semibold text-black pb-1.5 uppercase">Arrival</label>
                            <input type="text" placeholder='10 October' className="w-full text-sm bg-[#F3F3F3] py-3 px-3 mb-4 rounded-md focus:outline-none focus:shadow-outline-blue" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-black pb-1.5 uppercase">Departure</label>
                            <input type="text" placeholder='11 October' className="w-full text-sm bg-[#F3F3F3] py-3 px-3 mb-4 rounded-md focus:outline-none focus:shadow-outline-blue" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-black pb-1.5 uppercase">Star</label>
                            <input type="text" placeholder='4' className="w-full text-sm bg-[#F3F3F3] py-3 px-3 mb-4 rounded-md focus:outline-none focus:shadow-outline-blue" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-black pb-1.5 uppercase">Room</label>
                            <input type="text" placeholder='1' className="w-full text-sm bg-[#F3F3F3] py-3 px-3 mb-4 rounded-md focus:outline-none focus:shadow-outline-blue" />
                        </div>
                    </div>
                </div>
                <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-slate-800 focus:outline-none focus:shadow-outline-blue mt-6">Book Now</button>
            </div>
        </section>
    );
};

export default Bookings;