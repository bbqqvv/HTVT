// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/products'; // Thay đổi URL theo cấu hình API của bạn

export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
