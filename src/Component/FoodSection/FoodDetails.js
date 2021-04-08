import React from 'react';
import { Link } from 'react-router-dom';

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
                                <Link to={`/check-out/${id}`}><button className='filter-btn'>Check Out</button></Link>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default FoodDetails;