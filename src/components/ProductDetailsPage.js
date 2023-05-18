import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "../services/apiService";

const ProductDetailsPage = ({ addToFavorites }) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProductData(id);
            setProduct(data.product);
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <h1>{product.product_name}</h1>
            <p>{product.ingredients_text}</p>
            <button onClick={() => addToFavorites(product)}> Add to Favorites</button>
        </div>
    );
};

export default ProductDetailsPage;