//src/utils/constants.js 

export const ROLES = {
    ADMIN: 'admin',
    MANAGER: 'manager',
    STAFF: 'staff',
}

export const STATUS = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    PENDING: 'pending',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled',
};

export const API_ENDPOINTS = {
    LOGIN: "/auth/login",
    PRODUCTS: "/api/products",
    CUSTOMER: "/api/customers",
    INVENTORY: "/api/inventory",
    SALES: "/api/sales",
    SUPPLIERS: "/api/suppliers",
    REPORTS: "/api/reports",
    DASHBOARD: "/api/dashboard",
    USERS: "/api/users",
    SETTINGS: "/api/settings",
};

export const DATE_FORMATS = {
    SHORT: 'MM/DD/YYYY',
    LONG: 'MMMM D, YYYY',
    TIME: 'hh:mm A',
    FULL: 'MMMM D, YYYY hh:mm A',
};
export const CURRENCY = {
    SYMBOL: '$',
    CODE: 'USD',
    DECIMAL_PLACES: 2,
    THOUSAND_SEPARATOR: ',',
    DECIMAL_SEPARATOR: '.',
};

export const NOTIFICATION_TYPES = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
};
export const PAGINATION = {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
};
export const SORT_ORDERS = {
    ASCENDING: 'asc',
    DESCENDING: 'desc',
};
export const FILE_TYPES = {
    CSV: 'text/csv',
    PDF: 'application/pdf',
    EXCEL: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    IMAGE_JPEG: 'image/jpeg',
    IMAGE_PNG: 'image/png',
    JSON: 'application/json',
    TEXT: 'text/plain',
};
