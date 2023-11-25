import React from 'react';
import Banner from '../Banner/Banner';
import Advanture from '../Advanture/Advanture';
import Discounts from '../Discounts/Discounts';
import Bookings from '../Bookings/Bookings';
import Testimonials from '../Testimonials/Testimonials';
import Destination from '../Destination/Destination';

const Home = () => {
    return (
        <section>
            <Banner />
            <Advanture />
            <Destination/>
            <Discounts />
            <Bookings />
            <Testimonials />
        </section>
    );
};

export default Home;