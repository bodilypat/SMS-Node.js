//src/utils/validators.js 

export const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isStrongPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

export const isPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phoneNumber);
};

export const isValidURL = (url) => {
    try {
        new URL(url);
        return true;
    }
    catch (_) {
        return false;
    }
};

export const isNonEmptyString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
};

export const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
};

export const isDate = (date) => {
    return !isNaN(Date.parse(date));
};

export const isAlphabetic = (str) => {
    const alphaRegex = /^[A-Za-z]+$/;
    return alphaRegex.test(str);
};
export const isAlphanumeric = (str) => {
    const alphaNumRegex = /^[A-Za-z0-9]+$/;
    return alphaNumRegex.test(str);
};



