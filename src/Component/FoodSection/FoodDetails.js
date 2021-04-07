import React from 'react';

const FoodDetails = ({ items }) => {
    return (
        <div className='section-center'>
            {
                items.map(item => {
                    const { name, price, description, image, id } = item
                    return (
                        <div key={id} className='menu-item'>
                            <img src={image} className='photo' alt="" />
                            <div className="item-info">
                                <header>
                                    <h4>{name}</h4>
                                    <h4 className="price">{price}</h4>
                                </header>
                                <p className='item-text'>{description}</p>
                                <button className='filter-btn'>Check Out</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default FoodDetails;