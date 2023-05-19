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
        <div>
            <h1>{product.product_name}</h1>
            <p>{product.ingredients_text}</p>
            <button onClick={() => addToFavorites(product)}> Add to Favorites</button>
        </div>
    );
};

export default ProductDetailsPage;