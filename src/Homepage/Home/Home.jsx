import React from 'react';
import Banner from '../Banner/Banner';
import Advanture from '../Advanture/Advanture';
import Discounts from '../Discounts/Discounts';
import Bookings from '../Bookings/Bookings';

const Home = () => {
    return (
        <section>
            <Banner />
            <Advanture />
            <Discounts />
            <Bookings />
        </section>
    );
};

export default Home;