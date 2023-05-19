import axios from "axios";

const BASE_URL = 'https://world.openfoodfacts.org/';

//fetch data for certain product
export const getProductData = async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}api/v0/product/${productId}.json`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
//function to fetch info for set of products

export const getProductsData = async (searchQuery) => {
    try {
        const response = await axios.get(`${BASE_URL}/cgi/search.pl?search_terms=${searchQuery}&search_simple=1&action=process&json=1`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`); 
    }
}