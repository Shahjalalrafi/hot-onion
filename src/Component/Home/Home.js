import React from 'react';
import { useState } from 'react';
import FakeData from '../../Fakedata/Fakedata.json'
import FoodDetails from '../FoodDetails';
import Category from './Category';

const allCategories = ['All', ...new Set(FakeData.map(item => item.category))]

const Home = () => {
    const [allData, setallData] = useState(FakeData)
    const [categories, setCategories] = useState(allCategories)
    
    const filterItems = (category) => {
        if(category == 'All') {
            setallData(FakeData)
            return
        }
        const newItem = FakeData.filter((item) => {
            return item.category == category
        })
        setallData(newItem)
    }

    return (
        <div className='menu-section'>
            <div className='title'>
                <h2>Our Menu</h2>
                <div className='underline'></div>
            </div>
            <Category categories= {categories} filterItems={filterItems}/>
            <FoodDetails items={allData}/>
        </div>
    );
};

export default Home;