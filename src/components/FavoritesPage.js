import React from "react";


function FavoritesPage({ favorites }) {

    return (
        <div>
            <h1>Favorite Page</h1>
            <p>List your favorite items here!</p>
            {favorites.map((favorite, index) => (
                <p key={index}>{favorite.name}</p>
            ))}
        </div>
    );
}

export default FavoritesPage;