//src/features/pages/components/ProductForm.jsx 
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import Loader from '../../../components/common/Loader';

const ProductForm = ({
    form,
    categories = [],
    brands = [],
    errors = {},
    loading = false,
    isEdit = false,
    onChange,
    onSubmit,
    onCancel
}) => {
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        onChange(name, files ? files[0] : value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };
    
    return (
        <Card title={isEdit ? "Edit Product" : "Add Product"}>
            {loading && <Loader />}
            {!loading &&
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                
                {/* Product Name */}
                <div>
                    <label className="block mb-1 font-medium" htmlFor="name">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* SKU */}
                <div>
                    <label className="block mb-1 font-medium" htmlFor="sku">
                        SKU 
                    </label>
                    <input
                        type="text"
                        id="sku"
                        name="sku"
                        value={form.sku}
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.sku ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.sku && <p className="text-red-500 text-sm mt-1">{errors.sku}</p>}
                </div>

                {/* Category */}
                <div>
                    <label className="block mb-1 font-medium" htmlFor="category">
                        Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>
                {/* Brand */}

                <div>
                    <label className="block mb-1 font-medium" htmlFor="brand">
                        Brand
                    </label>
                    <select
                        id="brand"
                        name="brand"
                        value={form.brand}
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.brand ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value="">Select Brand</option>
                        {brands.map((brand) => (
                            <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                    {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand}</p>}
                </div>
               
                {/* Price */}
                <div>
                    <label className="block mb-1 font-medium" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>

                {/* Tax */}
                <div>
                    <label className="block mb-1 font-medium" htmlFor="tax">
                        Tax
                    </label>
                    <input
                        type="number"
                        id="tax"
                        name="tax"
                        value={form.tax}
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.tax ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.tax && <p className="text-red-500 text-sm mt-1">{errors.tax}</p>}
                </div>

                {/* Quantity */}
                <div>
                    <label className="block mb-1 font-medium" htmlFor="quantity">
                        Quantity
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.quantity ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
                </div>

                {/* Image */}
                <div>
                    <label className="block mb-1 font-medium" htmlFor="image">
                        Product Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        className={`w-full border p-2 rounded ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                </div>
                {/* Actions */}
                <div className="flex space-x-4 mt-4">
                    <Button type="submit" variant="primary">
                        {isEdit ? "Update Product" : "Add Product"}
                    </Button>
                    <Button type="button" variant="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                </div>

            </form>
            }
        </Card>
    );
};

export default ProductForm;
