import axios from "axios";

const BASE_URL = 'https://world.openfoodfacts.org/data';

//fetch data for certain product
export const getProductData = async (productID) => {
    try {
        const response = await axios.get(`${baseURL}${productId}.json`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
//function to fetch info for set of products

export const getProductsData = async (searchQuery) => {
    try {
        const response = await axios.get(`${baseURL}?search_terms=${searchQuery}&search_simple=1&action=process&json=1`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`); 
    }
}