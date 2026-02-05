//src/services/supplier.service.js 

import Supplier from '../models/supplier.model.js';

export const createSupplier = async (supplierData) => {
    const supplier = new Supplier(supplierData);
    return await supplier.save();
};

export const getAllSuppliers = async () => {
    return await Supplier.find();
};

export const getSupplierById = async (id) => {
    return await Supplier.findById(id);
};

export const updateSupplier = async (id, supplierData) => {
    return await Supplier.findByIdAndUpdate(id, supplierData, { new: true });
};

export const deleteSupplier = async (id) => {
    return await Supplier.findByIdAndDelete(id);
};

export const findSuppliersByName = async (name) => {
    return await Supplier.find({ name: new RegExp(name, 'i') });
};

export const findSuppliersByLocation = async (location) => {
    return await Supplier.find({ location: new RegExp(location, 'i') });
};

export const countSuppliers = async () => {
    return await Supplier.countDocuments();
};

export const getSuppliersWithPagination = async (page, limit) => {
    const skip = (page - 1) * limit;
    return await Supplier.find().skip(skip).limit(limit);
};

export const getSuppliersByCategory = async (category) => {
    return await Supplier.find({ category: category });
};

export const getTopRatedSuppliers = async (minRating) => {
    return await Supplier.find({ rating: { $gte: minRating } });
};

export const getSuppliersAddedAfterDate = async (date) => {
    return await Supplier.find({ createdAt: { $gt: date } });
};

export const getSuppliersByProductType = async (productType) => {
    return await Supplier.find({ productTypes: productType });
};

export const getSuppliersByCertification = async (certification) => {
    return await Supplier.find({ certifications: certification });
};

export const getSuppliersByDeliveryOptions = async (deliveryOption) => {
    return await Supplier.find({ deliveryOptions: deliveryOption });
};

export const getSuppliersByPaymentMethods = async (paymentMethod) => {
    return await Supplier.find({ paymentMethods: paymentMethod });
};

export const getSuppliersByIndustry = async (industry) => {
    return await Supplier.find({ industry: industry });
};

export const getSuppliersBySize = async (size) => {
    return await Supplier.find({ size: size });
};

export const getSuppliersBySustainabilityPractices = async (practice) => {
    return await Supplier.find({ sustainabilityPractices: practice });
};

export const getSuppliersByCustomerReviews = async (minReviews) => {
    return await Supplier.find({ customerReviewsCount: { $gte: minReviews } });
};

export const getSuppliersByReturnPolicy = async (policy) => {
    return await Supplier.find({ returnPolicy: policy });
};

export const getSuppliersByWarrantyOptions = async (warranty) => {
    return await Supplier.find({ warrantyOptions: warranty });
};

export const getSuppliersBySupportServices = async (service) => {
    return await Supplier.find({ supportServices: service });
};

