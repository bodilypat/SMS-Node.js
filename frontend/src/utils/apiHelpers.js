//src/utils/apiHelpers.js 

export const handleApiError = (error) => {
    if (error.response) {
        return error.response.data.message || 'An error occurred while processing your request.';
    } else if (error.request) {
        return 'No response received from the server. Please check your network connection.';
    } else {
        return 'An unexpected error occurred: ' + error.message;
    }
};

export const buildQueryParams = (params) => {
    return Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
};

export const parseJsonResponse = async (response) => {
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to parse JSON response: ' + error.message);
    }
};

