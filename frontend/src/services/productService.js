//src/services/productService.js 
import api from './api';

const productService = {
    getProducts: async () => {
        try {
            const response = await api.get('/products');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getProductById: async (id) => {
        try { 
            const response = await api.get(`/products/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    createProduct: async (productData) => {
        try {
            const response = await api.post('/products', productData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateProduct: async (id, productData) => {
        try {
            const response = await api.put(`/products/${id}`, productData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    deleteProduct: async (id) => {
        try {
            const response = await api.delete(`/products/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default productService;

