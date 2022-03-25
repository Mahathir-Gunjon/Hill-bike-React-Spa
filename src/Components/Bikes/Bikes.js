import React from 'react';
import './Bikes.css';

const Bikes = (props) => {
    console.log(props);
    const { cycle, picture, price } = props.bike;
    return (
            <div >
            <div className="card">
                <img src={picture} className="card-img-top fit-img img-fluid" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{cycle}</h5>
                        <p className="card-text">${price}</p>
                        <button className='btn btn-danger'>Add to cart</button>
                    </div>
            </div>
        </div>
    );
};

export default Bikes;