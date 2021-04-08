import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import Fakedata from '../../Fakedata/Fakedata.json'

const CheckOut = () => {
    const { id } = useParams()
    const [allData, setAllData] = useState(Fakedata)
    const [myData, setMyData] = useState('')
    console.log(allData)


    const matchData = allData.find(data => {
        return data.id == id
    })

    // useEffect(() => {
    //     fetch(allData)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             const myData = data.find(pd => {
    //                 return pd.id === id
    //             })
    //             console.log(myData)
    //             // setProduct(myData)
    //         })
    //         .catch(err => console.log(err))
    // }, [])
    const { name, description, price, image } = matchData

    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <h1>{price}</h1>
            </div>
            <div>
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default CheckOut;