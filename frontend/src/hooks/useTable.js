//src/hooks/useTable.js 

import { useState, useMemo } from 'react';

const useTable = (data, rowsPerPage = 10) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const currentData = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage;
        return data.slice(start, start + rowsPerPage);
    }, [data, currentPage, rowsPerPage]);

    const nextData = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return {
        currentData,
        currentPage,
        totalPages,
        nextData,
        prevPage,
        setCurrentPage,
    };
};
export default useTable;
