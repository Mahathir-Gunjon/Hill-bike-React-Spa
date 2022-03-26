import React from 'react';
import './Bikes.css';

const Bikes = (props) => {

    const { cycle, picture, price } = props.bike;

    return (
        <div >
            <div className="card border-0 shadow rounded-3">
                <img src={picture} className="card-img-top fit-img img-fluid" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{cycle}</h5>
                    <p className="card-text">${price}</p>
                    <button onClick={() => props.addToCart(props.bike)} className='btn btn-danger shadow'>
                        Add to cart
                        <i className="fas fa-shopping-cart "></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bikes;