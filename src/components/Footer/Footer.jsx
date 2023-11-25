import React from 'react';

const Footer = () => {
    return (
        <section className="flex flex-col justify-center items-center px-4 py-12 md:py-24 lg:mt-28">
            <div className="text-lg md:text-4xl font-bold text-black text-center">
                <p>Student Special: Discounted rates</p>
                <p>on tropical getaways!</p>
            </div>
            <div className="text-black font-medium text-center py-6 md:py-8">
                <p> Let&apos;s embody your beautiful ideas together, simplify the</p>
                <p>way you visualize your next big things.</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4 lg:gap-16">
                <p className="text-[#2D2E2E]">Privacy Policy</p>
                <p className="text-[#2D2E2E]">Terms of Use</p>
                <p className="text-[#2D2E2E]">Sales and Refunds</p>
                <p className="text-[#2D2E2E]">Legal</p>
                <p className="font-medium">About</p>
                <p className="font-medium">Schedules</p>
                <p className="font-medium">Pricing</p>
                <p className="font-medium">Membership</p>
                <p className="font-medium">Joins</p>
                <p>|</p>
            </div>
        </section>
    );
};

export default Footer;