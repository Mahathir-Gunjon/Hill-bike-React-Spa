import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Bikes from '../Bikes/Bikes';
import './Shop.css';

const Shop = () => {

    const [bikes, setBikes] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);

    const addToCart = (bike) => {
        const newCart = [...cart, bike];
        setCart(newCart)
    }
    const removeToCart = () => {
        setCart([]);
    }

    return (
        <div className='mt-5'>
            <div className="text-center py-5">
                <h1 className='display-4 fw-bold text-dark'>Hill Bikes</h1>
                <h1><i class="fa-regular fa-cart-plus"></i></h1>
                <p className='text-muted fs-5'>Take you to the next level of adventure</p>
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
                        removeToCart={removeToCart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;