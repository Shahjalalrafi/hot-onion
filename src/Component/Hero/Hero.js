import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
            <div className='hero-section text-center' >
                <h2>Best food waiting for your belly</h2>
                <div className="input-section">
                    <input type="text" placeholder='search your food' />
                    <input type="button" value='search' />
                </div>
            </div>
    );
};

export default Hero;