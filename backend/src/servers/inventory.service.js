//src/services/inventory.service.js 

import Product from '../models/product.model.js';
import InventoryLog from '../models/inventoryLog.model.js';

const logInventory = async ({
    productId,
    action,
    before,
    change,
    after,
    userId,
    referenceId,
    note,
}) => {
   await InventoryLog.create({
        product: productId,
        action,
        quantityBefore: before,
        quantityChange: change,
        quantityAfter: after,
        performedBy: userId,
        reference: referenceId,
        note,
    });
}

export const StockIn = async (productId, quantity, userId, note) => {
    const product = await Product.findById(productId);

    if (!product) throw new Error('Product not found');

    const beforeQuantity = product.stockQuantity;
    product.stockQuantity += quantity;
    await product.save();

    await logInventory({
        productId,
        action: 'STOCK_IN',
        before: beforeQuantity,
        change: quantity,
        after: product.stockQuantity,
        userId,
        note,
    });

    return product;
};

export const StockOut = async (productId, quantity, userId, note) => {
    const product = await Product.findById(productId);

    if (!product) throw new Error('Product not found');

    if (product.stockQuantity < quantity) {
        throw new Error('Insufficient stock for the operation');
    }

    const beforeQuantity = product.stockQuantity;
    product.stockQuantity -= quantity;
    await product.save();

    await logInventory({
        productId,
        action: 'STOCK_OUT',
        before: beforeQuantity,
        change: -quantity,
        after: product.stockQuantity,
        userId,
        note,
    });

    return product;
};

export const AdjustStock = async (productId, newQuantity, userId, note) => {
    const product = await Product.findById(productId);

    if (!product) throw new Error('Product not found');
    const beforeQuantity = product.stockQuantity;
    const change = newQuantity - beforeQuantity;
    product.stockQuantity = newQuantity;
    await product.save();

    await logInventory({
        productId,
        action: 'ADJUST_STOCK',
        before: beforeQuantity,
        change,
        after: newQuantity,
        userId,
        note,
    });
    return product;
};

export const GetInventoryLogs = async (productId, { page = 1, limit = 10 }) => {
    const logs = await InventoryLog.find({ product: productId })
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate('performedBy', 'username email')
        .populate('reference', 'orderNumber');
    return logs;
};

export const GetInventoryLogById = async (logId) => {
    const log = await InventoryLog.findById(logId)
        .populate('product', 'name sku')
        .populate('performedBy', 'username email')
        .populate('reference', 'orderNumber');
    if (!log) throw new Error('Inventory log not found');
    return log;
};

export const DeleteInventoryLog = async (logId) => {
    const log = await InventoryLog.findByIdAndDelete(logId);
    if (!log) throw new Error('Inventory log not found');
    return log;
};

export const ClearInventoryLogs = async (productId) => {
    const result = await InventoryLog.deleteMany({ product: productId });
    return result;
};

