import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "../services/apiService";
import './ProductDetailsPage.css';

const ProductDetailsPage = ({ addToFavorites }) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
   

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProductData(id);
            console.log('Fetched Data:');
            if (data && data.product) {
            setProduct(data.product);
        } else {
            console.error('Product not found');
        }
    };
        fetchData();
    }, [id]);
    
console.log('Product:', product);
    return (
        <div className="product-details">
            <h2 className="product-name">{product.product_name}</h2>
            <p id="ingredient-list">{product.ingredients_text}</p>
            <button className="view-button" onClick={() => addToFavorites(product)}> Add to Favorites</button>
        </div>
    );
};

export default ProductDetailsPage;