//src/services/product.service.js 

import Product from '../models/product.model.js';

export const getAllProducts = async () => {
    return await Product.find();
};

export const getProductById = async (id) => {
    return await Product.findById(id);
};

export const createProduct = async (productData) => {
    const product = new Product(productData);
    return await product.save();
};

export const updateProduct = async (id, productData) => {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
};

export const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

export const getProductsByCategory = async (category) => {
    return await Product.find({ category });
};

export const getProductsByPriceRange = async (minPrice, maxPrice) => {
    return await Product.find({
        price: { $gte: minPrice, $lte: maxPrice }
    });
};

export const searchProductsByName = async (name) => {
    return await Product.find({
        name: { $regex: name, $options: 'i' }
    });
};

export const getFeaturedProducts = async () => {
    return await Product.find({ isFeatured: true });
};

export const getProductsSortedByPrice = async (order = 'asc') => {
    const sortOrder = order === 'asc' ? 1 : -1;
    return await Product.find().sort({ price: sortOrder });
};

export const getProductsWithLowStock = async (threshold) => {
    return await Product.find({ stock: { $lt: threshold } });
};

export const getTopRatedProducts = async (minRating) => {
    return await Product.find({ rating: { $gte: minRating } });
};

export const getProductsAddedInLastDays = async (days) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return await Product.find({ createdAt: { $gte: date } });
};

export const getProductsBySupplier = async (supplierId) => {
    return await Product.find({ supplier: supplierId });
};

export const getProductsOnSale = async () => {
    return await Product.find({ isOnSale: true });
};

export const getProductsByTag = async (tag) => {
    return await Product.find({ tags: tag });
};

export const getProductsByMultipleCategories = async (categories) => {
    return await Product.find({ category: { $in: categories } });
};

export const getProductsByRatingRange = async (minRating, maxRating) => {
    return await Product.find({
        rating: { $gte: minRating, $lte: maxRating }
    });
};

export const getProductsByAvailability = async (isAvailable) => {
    return await Product.find({ isAvailable });
};

export const getProductsByColor = async (color) => {
    return await Product.find({ color });
};

export const getProductsBySize = async (size) => {
    return await Product.find({ size });
};

export const getProductsByMaterial = async (material) => {
    return await Product.find({ material });
};

export const getProductsByBrand = async (brand) => {
    return await Product.find({ brand });
};

export const getProductsByDiscountPercentage = async (minDiscount) => {
    return await Product.find({ discountPercentage: { $gte: minDiscount } });
};

export const getProductsByWeightRange = async (minWeight, maxWeight) => {
    return await Product.find({
        weight: { $gte: minWeight, $lte: maxWeight }
    });
};

export const getProductsByDimensions = async (minDimensions, maxDimensions) => {
    return await Product.find({
        dimensions: { $gte: minDimensions, $lte: maxDimensions }
    });
};

export const getProductsByReleaseDate = async (startDate, endDate) => {
    return await Product.find({
        releaseDate: { $gte: startDate, $lte: endDate }
    });
};

export const getProductsByWarrantyPeriod = async (minWarranty, maxWarranty) => {
    return await Product.find({
        warrantyPeriod: { $gte: minWarranty, $lte: maxWarranty }
    });
};

