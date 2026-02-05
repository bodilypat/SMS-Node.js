//src/utils/formatters.js 

export const formatCurrency = (amount, currency = 'USD') => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);

export const formatDate = (date, locale = 'en-US') =>
    new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date));

export const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

export const truncateString = (string, maxLength) =>
    string.length > maxLength ? string.slice(0, maxLength) + '...' : string;
export const formatPercentage = (value) =>
    `${(value * 100).toFixed(2)}%`;

export const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return null;
};

export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs > 0 ? hrs + 'h ' : ''}${mins > 0 ? mins + 'm ' : ''}${secs}s`;
};

export const formatOrdinal = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = number % 100;
    return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};

export const formatHexColor = (hex) => {
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
        throw new Error('Invalid HEX color.');
    }
    return hex.toUpperCase();
};

export const formatSlug = (string) =>
    string
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, '-')
        .replace(/^-+|-+$/g, '');
        
export const formatFileSize = (sizeInBytes) => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let size = sizeInBytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }
    return `${size.toFixed(2)} ${units[unitIndex]}`;
};
