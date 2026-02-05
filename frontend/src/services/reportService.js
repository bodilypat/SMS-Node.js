//src/services/reportService.js 

import api from './api';

const reportService = {
    // Sale Reports
    getSalesReport: (params = {}) => 
        api.get('/reports/sales', { params }),

    // Inventory Reports
    getInventoryReport: (params = {}) =>
        api.get('/reports/inventory', { params }),

    // Customer Reports
    getCustomerReport: (params = {}) =>
        api.get('/reports/customers', { params }),

    // Supplier Reports
    getSupplierReport: (params = {}) =>
        api.get('/reports/suppliers', { params }),

    // Dashboard summary (KPIs)
    getDashboardSummary: () =>
        api.get('/reports/dashboard-summary'),

    // Export reports (CSV / PDF / Excel)
    exportReport: (reportType, params = {}) =>
        api.get(`/reports/export/${reportType}`, { params, responseType: 'blob' }),
};

export default reportService;

