import React, { useState } from "react";
import './FavoritesPage.css';

function FavoritesPage({ favorites }) {
    const [notes, setNotes] = useState(Array(favorites.length).fill(''));

    const handleNoteChange = (index, newNote) => {
        const newNotes = [...notes];
        newNotes[index] = newNote;
        setNotes(newNotes);
    };

    return (
        <div className="favorites-page">
            <h2 id="favorites-title">Favorites Page</h2>
            <div className="favorites-header">
                <h3>Product Name</h3>
                
            </div>
            {favorites.map((favorite, index) => (
                <div key={index} className="favorite-item">
                    <p>{favorite.product_name}</p>
                    <textarea
                    rows="2"
                    placeholder="Add note..."
                    value={notes[index]}
                    onChange={e => handleNoteChange(index, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
}

export default FavoritesPage;