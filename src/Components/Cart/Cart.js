import React from 'react';
// import Bikes from '../Bikes/Bikes';
import { HiTrash } from "react-icons/hi";
import './Cart.css';

const Cart = ({ cart }) => {

    const errorMsg = "You can't add more than 4 items to the cart."
    if (cart.length > 4) {
        alert(errorMsg)
    }
    
    // const randomItem = () =>{
    //     const randomCart = cart[Math.floor(Math.random() * cart.length)];
    //     setRandom(randomCart);
    // }
    
    return (
        <div className='container text-dark fixed-cart bg-danger p-3 rounded-3'>
            <div>
                <h3 className='text-center fw-bold text-white mb-3'>Your Cart</h3>
                {
                    cart.map(bike =>
                        <div className="d-flex bd-highlight cart-item my-2 text-white">
                            <div class="p-2 w-100 bd-highlight">
                                <div className="d-flex">
                                    <div>
                                        <img className='img-fluid card-img' src={bike.picture} alt="" />
                                    </div>
                                    <div className='ms-3'>
                                        <h5 className="card-title fw-normal">{bike.cycle}</h5>
                                        <p className="text-lite">Price: ${bike.price}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 flex-shrink-1 bd-highlight">
                                <button className='btn btn-outline-light rounded-circle fs-6'><HiTrash/></button>
                            </div>
                        </div>
                    )
                    
                }
                <div className="d-flex pt-3">
                    <div className="mx-2">
                    <button onClick={() => cart.removeToCart(cart.bike)} className='btn btn-outline-light'>Reset Cart {' '}</button>
                    </div>
                    <div className="mx-2">
                    <button className='btn btn-outline-light'>Chose One</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;