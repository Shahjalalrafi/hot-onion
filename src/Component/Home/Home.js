import React from 'react';
import FoodSection from '../FoodSection/FoodSection';
import Navbar from '../Header/Navbar';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <FoodSection />
        </div>
    );
};

export default Home;