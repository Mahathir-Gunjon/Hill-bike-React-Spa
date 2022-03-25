import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    const removeFromCart = () => {
        console.log('sdfsfsadf');
    }

    if(cart.length > 4){
        return (
            <div className="cart-container">
                <div className="card border-0 shadow rounded-3">
                    <div className="card-body">
                        <h5 className="card-title">You have reached the maximum number of bikes in your cart</h5>
                        <p className="card-text">Please remove some bikes to add more</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='container text-dark bg-danger p-3 rounded-3'>
            <div>
                <h3 className='text-center'>Cart</h3>
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
                                <button onClick={removeFromCart} className='btn btn-close'></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;