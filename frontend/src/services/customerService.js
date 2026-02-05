//src/services/customerService.js 

import api from './api';

const customerService = {
    getCustomers: async () => {
        try {
            const response = await api.get('/customers');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getCustomerById: async (id) => {
        try {
            const response = await api.get(`/customers/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    createCustomer: async (customerData) => {
        try {
            const response = await api.post('/customers', customerData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateCustomer: async (id, customerData) => {
        try {
            const response = await api.put(`/customers/${id}`, customerData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    deleteCustomer: async (id) => {
        try {
            const response = await api.delete(`/customers/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default customerService;

