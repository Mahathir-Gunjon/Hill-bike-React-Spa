import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart.cycle);
    let name = '';
    for (const bike of cart) {
        name += bike.cycle;
    }

    return (
        <div className='container bg-danger fixed-cart p-3 rounded-3'>
            <h1>{cart.cycle}</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default Cart;