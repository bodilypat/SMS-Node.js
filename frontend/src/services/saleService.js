//src/services/saleService.js 

import api from './api';

const saleService = {
    createSale: async (saleData) => {
        try {
            const response = await api.post('/sales', saleData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getSales: async () => {
        try {
            const response = await api.get('/sales');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getSaleById: async (id) => {
        try {
            const response = await api.get(`/sales/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateSale: async (id, saleData) => {
        try {
            const response = await api.put(`/sales/${id}`, saleData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    deleteSale: async (id) => {
        try {
            const response = await api.delete(`/sales/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default saleService;

