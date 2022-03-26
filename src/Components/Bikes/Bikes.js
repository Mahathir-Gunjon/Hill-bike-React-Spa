import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import './Bikes.css';

const Bikes = (props) => {

    const { cycle, picture, price } = props.bike;

    return (
        <div >
            <div className="card border-0 shadow rounded-3">
                <img src={picture} className="card-img-top fit-img img-fluid" alt="" />
                <div className="card-body">
                    <h3 className="card-title fw-bold">{cycle}</h3>
                    <p className="card-text">Price: ${price}</p>
                    <button onClick={() => props.addToCart(props.bike)} className='btn btn-danger shadow'>
                        Add to cart <HiShoppingCart/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bikes;