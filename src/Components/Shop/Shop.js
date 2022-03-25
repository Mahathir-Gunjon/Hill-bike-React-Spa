import React, { useEffect, useState } from 'react';
import Bikes from '../Bikes/Bikes';
import './Shop.css';

const Shop = () => {

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);

    return (
        <div>
            <div className="text-center">
                <h1>Hill Bikes</h1>
                <p>take you to the next level of adventure</p>
            </div>
            <div className='shop-container'>
                <div className="card-container container">
                    {
                        bikes.map(bike => <Bikes
                            bike={bike}
                            key={bike.id}
                        ></Bikes>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;