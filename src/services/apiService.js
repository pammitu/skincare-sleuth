import axios from "axios";

const BASE_URL = 'https://world.openfoodfacts.org/';


export const getProductData = async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}api/v0/product/${productId}.json`);
        return response.data;
    } catch (error) {
        throw new Error("An error occurred while fetching product data.")
    }
}


export const getProductsData = async (searchQuery) => {
    try {
        const response = await axios.get(`${BASE_URL}cgi/search.pl?search_terms=${searchQuery}&search_simple=1&action=process&json=1`);
        return response.data;
    } catch (error) {
       throw new Error("An error occurred while fetching products data.")
    }
}