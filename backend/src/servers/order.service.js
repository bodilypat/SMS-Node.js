//src/services/order.service.js 

import mongoose from 'mongoose';
import Order from '../models/order.model.js';
import Product from '../models/product.model.js';
import InventoryLog from '../models/inventoryLog.model.js';

export const createOrder = async (data, user) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        let totalAmount = 0;

        for (const item of data.items) {
            const product = await Product.findById(item.productId).session(session);

            if (!product || product.quantity < item.quantity) 
                throw new Error(`Insufficient stock for product ID: ${item.productId}`);

            product.quantity -= item.quantity;
            await product.save({ session });

            totalAmount += product.price * item.quantity;

            await InventoryLog.create(
                [
                    {
                        product: product._id,
                        action: "SALE",
                        quantityBefore: product.quantity + item.quantity,
                        quantityAfter: product.quantity,
                        changedBy: user._id,
                    },
                ],
                { session }
            );
        }

        const order = new Order.create(
            [
                {
                    ...data,
                    totalAmount: totalAmount,
                    grandTotal: totalAmount - (data.discount || 0) + (data.tax || 0),
                    createdBy: user._id,
                },
            ],
            { session }
        );

        await session.commitTransaction();
        session.endSession();
        return order;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    } finally {
        session.endSession();
    }   
};

export const getOrders = async (filter, options) => {
    const orders = await Order.find(filter)
        .skip(options.skip || 0)
        .limit(options.limit || 10)
        .sort(options.sort || { createdAt: -1 });
    return orders;
};

export const getOrderById = async (id) => {
    const order = await Order.findById(id);
    return order;
};

export const updateOrderById = async (id, updateData) => {
    const order = await Order.findByIdAndUpdate(id, updateData, { new: true });
    return order;
};

export const deleteOrderById = async (id) => {
    const order = await Order.findByIdAndDelete(id);
    return order;
};

export const getOrderStats = async (startDate, endDate) => {
    const stats = await Order.aggregate([
        { $match: { createdAt: { $gte: startDate, $lte: endDate } } },
        {
            $group: {
                _id: null,
                totalOrders: { $sum: 1 },
                totalRevenue: { $sum: "$grandTotal" },
                averageOrderValue: { $avg: "$grandTotal" },
            },
        },
    ]);
    return stats[0] || { totalOrders: 0, totalRevenue: 0, averageOrderValue: 0 };
};

export const getMonthlySales = async (year) => {
    const sales = await Order.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: new Date(`${year}-01-01`),
                    $lt: new Date(`${year + 1}-01-01`),
                },
            },
        },
        {
            $group: {
                _id: { $month: "$createdAt" },
                totalSales: { $sum: "$grandTotal" },
            },
        },
    ]);
    return sales;
};

export const getTopSellingProducts = async (limit = 5) => {
    const topProducts = await Order.aggregate([
        { $unwind: "$items" },
        {
            $group: {
                _id: "$items.productId",
                totalSold: { $sum: "$items.quantity" },
            },
        },
        { $sort: { totalSold: -1 } },
        { $limit: limit },
    ]);
    return topProducts;
};

export const getCustomerOrders = async (customerId, options) => {
    const orders = await Order.find({ customer: customerId })
        .skip(options.skip || 0)
        .limit(options.limit || 10)
        .sort(options.sort || { createdAt: -1 });
    return orders;
};

export const cancelOrderById = async (id, user) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const order = await Order.findById(id).session(session);
        if (!order) throw new Error('Order not found');
        if (order.status === 'CANCELLED') throw new Error('Order is already cancelled');

        order.status = 'CANCELLED';
        await order.save({ session });  
        for (const item of order.items) {
            const product = await Product.findById(item.productId).session(session);
            if (product) {
                product.quantity += item.quantity;
                await product.save({ session });
                await InventoryLog.create(
                    [
                        {
                            product: product._id,
                            action: "RESTOCK",
                            quantityBefore: product.quantity - item.quantity,
                            quantityAfter: product.quantity,
                            changedBy: user._id,
                        },
                    ],
                    { session }
                );
            }   
        }

        await session.commitTransaction();
        session.endSession();
        return order;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    } finally {
        session.endSession();
    }
};

export const getOrdersWithPagination = async (filter, page, limit, sort) => {
    const skip = (page - 1) * limit;
    const orders = await Order.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort || { createdAt: -1 });
    const totalOrders = await Order.countDocuments(filter);
    return {
        orders,
        totalOrders,
        totalPages: Math.ceil(totalOrders / limit),
        currentPage: page,
    };
};

export const getOrdersByDateRange = async (startDate, endDate, options) => {
    const orders = await Order.find({
        createdAt: { $gte: startDate, $lte: endDate },
    })
        .skip(options.skip || 0)
        .limit(options.limit || 10)
        .sort(options.sort || { createdAt: -1 });
    return orders;
};

export const refundOrderById = async (id, refundData, user) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const order = await Order.findById(id).session(session);
        if (!order) throw new Error('Order not found');
        if (order.status !== 'COMPLETED') throw new Error('Only completed orders can be refunded');
        order.status = 'REFUNDED';
        order.refundAmount = refundData.amount;
        order.refundReason = refundData.reason;
        await order.save({ session });
        for (const item of order.items) {
            const product = await Product.findById(item.productId).session(session);
            if (product) {
                product.quantity += item.quantity;
                await product.save({ session });
                await InventoryLog.create(
                    [   
                        {
                            product: product._id,
                            action: "REFUND_RESTOCK",   
                            quantityBefore: product.quantity - item.quantity,
                            quantityAfter: product.quantity,
                            changedBy: user._id,
                        },
                    ],
                    { session }
                );
            }   
        }

        await session.commitTransaction();
        session.endSession();
        return order;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    } finally {
        session.endSession();
    }
};

export const getOrdersByStatus = async (status, options) => {
    const orders = await Order.find({ status: status })
        .skip(options.skip || 0)
        .limit(options.limit || 10)
        .sort(options.sort || { createdAt: -1 });
    return orders;
};

export const getDailySales = async (date) => {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);
    const sales = await Order.aggregate([
        {
            $match: {
                createdAt: { $gte: start, $lte: end },
            },
        },
        {
            $group: {
                _id: null,
                totalSales: { $sum: "$grandTotal" },
            },
        },
    ]);
    return sales[0] || { totalSales: 0 };
};

