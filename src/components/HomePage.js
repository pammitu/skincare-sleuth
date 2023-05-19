import React from "react";
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-container">
           <div className="block-container">
            <Link to="/ingredients" className="navigation-block">Browse Ingredients</Link>
            <Link to="/routine" className="navigation-block">Create A Routine</Link>
            <Link to="/favorites" className="navigation-block">Favorites</Link>
           </div>
  
        </div>
    );
}

export default HomePage;