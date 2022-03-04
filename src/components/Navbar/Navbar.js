import React from 'react';
import { navbarItems  } from './navbarItems';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="nav-container">
                <div>Item One</div>
                <div>Item Two</div>
                <div>Item Three</div>
                <div>Item Four</div>
            </div>
        </nav>
        );
};

export default Navbar;