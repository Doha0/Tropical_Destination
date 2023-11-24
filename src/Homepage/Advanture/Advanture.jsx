import React from 'react';
import img1 from '../../assets/Images/Rectangle 25.png'
import img2 from '../../assets/Images/Rectangle 26.png'
import img3 from '../../assets/Images/Rectangle 27.png'


const Advanture = () => {

    return (
        <section className='max-w-[1090px] mx-auto py-16 md:py-24 grid grid-cols-1 md:grid-cols-2
        justify-center items-center inter gap md:gap-x-24 lg:gap-x-48'>
            <div className='flex flex-col space-y-4 md:space-y-8 lg:space-y-12 mb-16 md:mb-0'>
                <div className='max-w-[360px] overflow-hidden flex p-6 bg-white rounded-md shadow-xl gap-3'>
                    <img src={img1} className="max-w-full rounded-full w-20 h-20" />
                    <div>
                        <h4 className='font-medium text-lg poppins'>Jenny Wilson</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                    </div>
                </div>
                <div className='max-w-[360px] overflow-hidden flex p-6 bg-white rounded-md shadow-xl gap-3'>
                    <img src={img2} className="max-w-full rounded-full w-20 h-20" />
                    <div>
                        <h4 className='font-medium text-lg poppins'>Jenny Wilson</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                    </div>
                </div>
                <div className='max-w-[360px] overflow-hidden flex p-6 bg-white rounded-md shadow-xl gap-3'>
                    <img src={img3} className="max-w-full rounded-full w-20 h-20" />
                    <div>
                        <h4 className='font-medium text-lg poppins'>Jenny Wilson</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                    </div>
                </div>
            </div>

            <div className='justify-center flex-col'>
                <h2 className='text-2xl mb-3 font-semibold'>
                    <span className='font-bold text-4xl'>Tropical Adventure</span>
                    <br />
                    for Students.
                </h2>
                <h4 className='font-semibold text-xl mb-5'>Student Tropical Vacation: Relax and Recharge</h4>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Sed suspendisse id in ultrices</li>
                <li>Massa quis natoque sit quam</li>
                <li>Eros non pellentesque elit</li>
                <li>tortor id euismod habitant</li>
                <button className='bg-[#F27A44] text-white px-12 py-4 rounded-[30px] mt-14'>
                    Explore More
                </button>
            </div>
        </section>
    );
};

export default Advanture;