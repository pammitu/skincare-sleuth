import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
    <header>
        <h1>Skincare Sleuth</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ingredients">Ingredients</Link></li>
                <li><Link to="/routine">Routine</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
            </ul>
        </nav>
    </header>    
    );
}

export default Header;