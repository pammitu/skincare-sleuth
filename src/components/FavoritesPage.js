import React from "react";
import IngredientsPage from "./IngredientsPage";

function FavoritesPage() {

    return (
        <div>
            <h1>Favorite Page</h1>
            <p>List your favorite items here!</p>
        </div>
    );
}


const [favorites, setFavorites] = useState([]);

const addToFavorites = ingredient => {
    setFavorites([...favorites, ingredient]);
}

favorites.map(favorite => (
    <p>{favorite.name}</p>
))

export default FavoritesPage;