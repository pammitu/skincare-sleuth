import React, { useState } from "react";
import {  Link } from 'react-router-dom'
import { getProductsData } from "../services/apiService";
import './IngredientsPage.css';

const IngredientsPage = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

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
    }catch (error) {
            console.error('Error fetching products', error);
        }

}

   const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
   };

    return (
        <div>
            <h1>Ingredients Page</h1>
            <p>This is the ingredient page </p>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search.."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
            </form>
            {products.map((product, index) => (
                <div key={product.id || index}> 
                    <h2>{product.product_name}</h2> 
                    <p>{product.ingredients_text} || 'No Ingredients'</p> 
                    <Link to={`/product/${product.id || '0'}`}>View Details</Link> 
                    </div>
            ))}
        </div>
    );
}

export default IngredientsPage;