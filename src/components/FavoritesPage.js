import React from "react";
import './FavoritesPage.css';

function FavoritesPage({ favorites }) {

    return (
        <div>
            <h2 id="favorites-title">Favorites Page</h2>
            <ul className="favorites-list">
            {favorites.map((favorite, index) => (
                <li key={index}>{favorite.product_name}</li>
            ))}
            </ul>
        </div>
    );
}

export default FavoritesPage;