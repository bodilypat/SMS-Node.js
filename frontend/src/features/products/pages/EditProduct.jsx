//src/features/products/pages/EditProduct.jsx 

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, updateProduct } from '../product.api';
import ProductForm from '../components/ProductForm';

const EditProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProductById(productId);
            setProduct(data);
        };
        fetchProduct();
    }, [productId]);

    const handleUpdateProduct = async (updatedProduct) => {
        await updateProduct(productId, updatedProduct);
        alert('Product updated successfully!');
    };

    const handleDeleteProduct = async () => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await updateProduct(productId, { ...product, isDeleted: true });
            alert('Product deleted successfully!');
        }
    };

    const handleRestoreProduct = async () => {
        await updateProduct(productId, { ...product, isDeleted: false });
        alert('Product restored successfully!');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        Object.fromEntries(formData.entries());
        const updatedProduct = {
            name: formData.get('name'),
            description: formData.get('description'),
            price: parseFloat(formData.get('price')),
            stock: parseInt(formData.get('stock'), 10),
        };
        await handleUpdateProduct(updatedProduct);
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="edit-product">
            <h2>Edit Product</h2>
            <ProductForm product={product} onSubmit={handleSubmit} onDelete={handleDeleteProduct} onRestore={handleRestoreProduct} />
        </div>
    );
};
export default EditProduct;

