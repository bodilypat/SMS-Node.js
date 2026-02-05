//src/utils/helpers.js 

export const capitalize = (str) => { str.charAt(0).toUpperCase() + str.slice(1); };

export const slugify = (str) => {
    str
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .replace(/--+/g, '-')
};

export const generateRandomId = (length = 8) => 
    Math.random().toString(36).substr(2, length);

export const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${(d.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
};

export const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

export const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

export const isEmptyObject = (obj) => 
    obj && Object.keys(obj).length === 0 && obj.constructor === Object;

export const mergeObjects = (target, source) => {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], mergeObjects(target[key], source[key]));
        }
    }
    return { ...target, ...source };
};

export const pick = (obj, keys) =>
    keys.reduce((result, key) => {
        if (key in obj) {
            result[key] = obj[key];
        }
        return result;
    }, {});

export const omit = (obj, keys) =>
    Object.keys(obj).reduce((result, key) => {
        if (!keys.includes(key)) {
            result[key] = obj[key];
        }
        return result;
    }, {});
export const groupBy = (array, key) =>
    array.reduce((result, item) => {
        const groupKey = item[key];
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
export const uniqueArray = (array) => [...new Set(array)];
export const flattenArray = (array) => array.reduce((acc, val) => acc.concat(val), []);
export const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};
export const range = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};


