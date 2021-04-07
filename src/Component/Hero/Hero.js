import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='section-center hero-background'>
            <div className='hero-section' >
                <h2>Best food waiting for your belly</h2>
                <div>
                    <input type="text" placeholder='search your food' />
                    <input type="button" value='search' />
                </div>
            </div>
        </div>
    );
};

export default Hero;