//src/featrues/products/pages/ProductList.jsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../product.api';

function ProductList() {
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };
    useEffect(() => {
        loadProducts();
    }, []);

    const handleDelete = async (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await fetch(`/api/products/${productId}`, {
                method: 'DELETE',
            });
            loadProducts();
        }
    };

    return (
        <div>
            <h1>Product List</h1>
            <Link to="/products/new" className="btn btn-primary mb-3">
                Add New Product
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Bread</th>
                        <th>SKU</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.bread}</td>
                            <td>{product.sku}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Link
                                    to={`/products/edit/${product.id}`}
                                    className="btn btn-sm btn-warning me-2"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(product.id)}
                                    className="btn btn-sm btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;

