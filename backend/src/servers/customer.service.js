//src/services/customer.service.js 

import Customer from '../models/customer.model.js';

export const createCustomer = async (customerData) => {
    const customer = new Customer(customerData);
    return await customer.save();
};

export const getCustomerAll = async () => {
    return Customer.find().sort({ createdAt: -1 });
};

export const getCustomerById = async (customerId) => {
    return Customer.findById(customerId);
};

export const updateCustomerById = async (customerId, updateData) => {
    return Customer.findByIdAndUpdate(customerId, updateData, { new: true });
};

export const deleteCustomerById = async (customerId) => {
    return Customer.findByIdAndDelete(customerId);
};

export const getCustomersByStatus = async (status) => {
    return Customer.find({ status: status }).sort({ createdAt: -1 });
};

export const getCustomersByEmailDomain = async (domain) => {
    const regex = new RegExp(`@${domain}$`, 'i');
    return Customer.find({ email: { $regex: regex } }).sort({ createdAt: -1 });
};

export const countCustomersByStatus = async () => {
    return Customer.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);
};

export const getRecentCustomers = async (days) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return Customer.find({ createdAt: { $gte: date } }).sort({ createdAt: -1 });
};

export const searchCustomersByName = async (name) => {
    const regex = new RegExp(name, 'i');
    return Customer.find({ name: { $regex: regex } }).sort({ createdAt: -1 });
};  

export const paginateCustomers = async (page, limit) => {
    const skip = (page - 1) * limit;
    return Customer.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
};

export const getCustomersByAgeRange = async (minAge, maxAge) => {
    return Customer.find({ age: { $gte: minAge, $lte: maxAge } }).sort({ createdAt: -1 });
};

export const updateCustomerStatusById = async (customerId, status) => {
    return Customer.findByIdAndUpdate(customerId, { status: status }, { new: true });
};

export const getCustomersByLocation = async (location) => {
    return Customer.find({ location: location }).sort({ createdAt: -1 });
};

export const bulkUpdateCustomerStatus = async (customerIds, status) => {
    return Customer.updateMany(
        { _id: { $in: customerIds } },
        { $set: { status: status } }
    );
};

export const deleteCustomersByStatus = async (status) => {
    return Customer.deleteMany({ status: status });
};

export const getCustomerStatistics = async () => {
    const totalCustomers = await Customer.countDocuments();
    const activeCustomers = await Customer.countDocuments({ status: 'active' });
    const inactiveCustomers = await Customer.countDocuments({ status: 'inactive' });
    return {
        totalCustomers,
        activeCustomers,
        inactiveCustomers
    };
};

export const getCustomersCreatedBetween = async (startDate, endDate) => {
    return Customer.find({
        createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) }
    }).sort({ createdAt: -1 });
};

export const getTopNCustomersByPurchases = async (n) => {
    return Customer.find().sort({ totalPurchases: -1 }).limit(n);
};

export const updateCustomerEmailById = async (customerId, email) => {
    return Customer.findByIdAndUpdate
    (customerId, { email: email }, { new: true });
};

