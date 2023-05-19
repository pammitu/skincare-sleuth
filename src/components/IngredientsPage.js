import React, { useState } from "react";
import {  Link } from 'react-router-dom'
import { getProductsData } from "../services/apiService";
import './IngredientsPage.css';

const IngredientsPage = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);

const fetchData = async () => {
    try {
        console.log('Search Term: ', search);
        const data = await getProductsData(search);
        console.log('Data:', data);
        if (data && data.products) {
            setProducts(data.products);
        } else {
            console.log('No Products Found', data);
        } 
    }catch (err) {
            setError(err.message);
        }

}

   const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
   };

    return (
        <div>
            <h2 id="search-title">Search for Product Ingredients </h2>
            <div className="search-container">
                <div className="search-box">
                 <form onSubmit={handleSubmit}>
                 <input
                type="text"
                placeholder="search.."
                value={search}
                onChange={e => setSearch(e.target.value)}
                /> 
                  <button type="submit" className="fas fa-search">Search</button>
                  </form>
                </div>
            </div>
            {products.map((product, index) => (
                <div key={product.id || index}> 
                    <h3>{product.product_name}</h3> 
                    <p className="product-text">{product.ingredients_text} || 'No Ingredients'</p> 
                    <Link to={`/product/${product.id || '0'}`} className="view-button">View Details</Link> 
                    </div>
            ))}
        </div>
    );
}

export default IngredientsPage;