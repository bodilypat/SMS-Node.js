//src/services/supplierService.js 

import apit from './api';

const supplierService = {
    getSuppliers: async () => {
        try {
            const response = await apit.get('/suppliers');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getSupplierById: async (id) => {
        try {
            const response = await apit.get(`/suppliers/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    createSupplier: async (supplierData) => {
        try {
            const response = await apit.post('/suppliers', supplierData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateSupplier: async (id, supplierData) => {
        try {
            const response = await apit.put(`/suppliers/${id}`, supplierData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    deleteSupplier: async (id) => {
        try {
            const response = await apit.delete(`/suppliers/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default supplierService;
