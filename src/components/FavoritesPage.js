import React from "react";
import IngredientsPage from "./IngredientsPage";

function FavoritesPage() {
const [favorite, setFavorites] = useState([]);

const addToFavorites = ingredient => {
    setFavorites([...favorites, ingredient]);
}

    return (
        <div>
            <h1>Favorite Page</h1>
            <p>List your favorite items here!</p>
            {favorite.map(favorite => (
                <p>{favorite.name}</p>
            ))}
        </div>
    );
}

export default FavoritesPage;