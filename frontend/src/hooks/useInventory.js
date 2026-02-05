//src/hooks/useInventory.js 

import { useState } from 'react';
import { InventoryContext } from '../context/InventoryContext';


const useInventory = () => {
    const context = useContext(InventoryContext);

    if (!context) {
        throw new Error('useInventory must be used within an InventoryProvider');
    }
    return context;
};

export default useInventory;
