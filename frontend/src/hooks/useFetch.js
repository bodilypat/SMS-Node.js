//src/hooks/useFetch.js 

import { useCallback, useEffect, useState } from "react";

const useFetch = (asyncFunction, immediate = true) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const excute = useCallback(async (...params) => {
        setLoading(true);
        setError(null);
        try {
            const result = await asyncFunction(...params);
            setData(result);
        } catch (err) {
            setError(err.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    }, [asyncFunction]);

    useEffect(() => {
        if (immediate) {
            excute();
        }
    }, [excute, immediate]);

    return { data, loading, error, excute };
};

export default useFetch;    

