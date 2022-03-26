import React from 'react';
import Bikes from '../Bikes/Bikes';
import './Cart.css';

const Cart = ({ cart, randomChosenBike }) => {

    const errorMsg = "You can't add more than 4 items to the cart."
    if (cart.length > 4) {
        return (
            <div className="cart-container">
                <h2>Your Cart is full</h2>
                <div className="cart-error">
                    <p>{errorMsg}</p>
                </div>
            </div>
        )
    }
    
    return (
        <div className='container text-dark fixed-cart bg-danger p-3 rounded-3'>
            <div>
                <h3 className='text-center fw-bold text-white mb-3'>Your Cart</h3>
                {
                    cart.map(bike =>
                        <div className="d-flex bd-highlight cart-item my-2">
                            <div class="p-2 w-100 bd-highlight">
                                <div className="d-flex">
                                    <div>
                                        <img className='img-fluid card-img' src={bike.picture} alt="" />
                                    </div>
                                    <div>
                                        <h5 className="card-title ms-3">{bike.cycle}</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 flex-shrink-1 bd-highlight">
                                <button onClick='' className='btn btn-close'></button>
                            </div>
                        </div>
                    )
                    
                }
                <div className="d-flex pt-3">
                    <div className="mx-2">
                    <button onClick='' className='btn btn-outline-light'>Reset Cart</button>
                    </div>
                    <div className="mx-2">
                    <button onClick={() => randomChosenBike(Bikes)} className='btn btn-outline-light'>Chose One</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;