import React from 'react';
import { useState } from 'react/cjs/react.development';
import FakeData from '../../Fakedata/Fakedata.json'
import Category from './Category';
import FoodDetails from './FoodDetails';


const allCategories = ['All', ...new Set(FakeData.map(item => item.category))]

const FoodSection = () => {
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

export default FoodSection;