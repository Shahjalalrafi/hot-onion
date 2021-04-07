import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FakeData from '../../Fakedata/Fakedata.json'
import FoodDetails from '../FoodDetails';

const Home = () => {
    const [allData, setallData] = useState(FakeData)

    return (
        <div>
            {
                allData.map(data => <FoodDetails details={data} />)
            }
        </div>
    );
};

export default Home;