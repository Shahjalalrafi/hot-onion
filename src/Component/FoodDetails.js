import React from 'react';

const FoodDetails = ({details}) => {
    const {name, price, description, image} = details
    return (
        <div>
            <img src={image} alt=""/>
            <h1>{name}</h1>
            <h1>{price}</h1>
        </div>
    );
};

export default FoodDetails;