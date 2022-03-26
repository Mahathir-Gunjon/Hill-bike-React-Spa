import React from 'react';
// navbar
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div className="container">
                    <p className="navbar-brand fw-bold text-danger fs-3" href="#">Hill Bikes</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <i className="nav-link active" aria-current="page" href="#">Shop</i>
                            </li>
                            <li className="nav-item">
                                <i className="nav-link" href="#">Pricing</i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;