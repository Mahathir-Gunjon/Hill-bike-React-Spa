import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Bikes from '../Bikes/Bikes';
import './Shop.css';
import Faq from '../Faq/Faq';

const Shop = () => {

    const [bikes, setBikes] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRamdom] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);

    const addToCart = (bike) => {
        const newCart = [...cart, bike];
        setCart(newCart)
    }

    const randomChosenBike = () => {
        const bikes = random[Math.floor(Math.random() * random.length)];
        setRamdom(bikes);

    }

    return (
        <div className='mt-5'>
            <div className="text-center py-5">
                <h1 className='display-4 fw-bold text-dark'>Hill Bikes</h1>
                <h1><i class="fa-regular fa-cart-plus"></i></h1>
                <p className='text-muted fs-5'>take you to the next level of adventure</p>
            </div>
            <div className='shop-container'>
                <div className="card-container container">
                    {
                        bikes.map(bike => <Bikes
                            bike={bike}
                            key={bike.id}
                            addToCart={addToCart}
                        ></Bikes>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        randomChosenBike={randomChosenBike}
                    ></Cart>
                </div>
            </div>
            <Faq></Faq>
        </div>
    );
};

export default Shop;