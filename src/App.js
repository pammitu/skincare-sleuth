import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import IngredientsPage from './components/IngredientsPage';
import RoutinePage from './components/RoutinePage';
import FavoritesPage from './components/FavoritesPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import Header from './components/Header';

function App() {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = product => {
        console.log('Adding to favorites:', product);
        setFavorites([...favorites, product]);
    }

    useEffect(() => {
        console.log(favorites);
        }, [favorites]);

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/ingredients" element={<IngredientsPage />} />
                <Route path="/routine" element={<RoutinePage/>} />
                <Route path="/favorites" element={<FavoritesPage favorites={favorites} />} />
                <Route path="/product/:id" element={<ProductDetailsPage addToFavorites={addToFavorites} />} />
            </Routes>
        </Router>
    );
}

export default App;