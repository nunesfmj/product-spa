import React, { useState } from 'react';
import { Product } from '../types/product';

interface ProductFormProps {
    product?: Product;
    onSave: (productData: Omit<Product, 'id'>, id?: string) => void;
    onCancel?: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSave, onCancel }) => {
    const [description, setDescription] = useState(product?.description || '');
    const [price, setPrice] = useState(product?.price.toString() || '');
    const [stock, setStock] = useState(product?.stock.toString() || '');
    const [categories, setCategories] = useState(product?.categories.join(', ') || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!description || !price || !stock) {
            alert('Please fill all required fields.');
            return;
        }

        const productData: Omit<Product, 'id'> = {
            description,
            price: parseFloat(price),
            stock: parseInt(stock, 10),
            categories: categories.split(',').map(c => c.trim()).filter(c => c !== ''),
        };

        onSave(productData, product?.id);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
            <div>
                <label htmlFor="description">Description:</label><br />
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label><br />
                <input
                    id="price"
                    type="number"
                    step="0.01"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="stock">Stock:</label><br />
                <input
                    id="stock"
                    type="number"
                    value={stock}
                    onChange={e => setStock(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="categories">Categories (comma separated):</label><br />
                <input
                    id="categories"
                    type="text"
                    value={categories}
                    onChange={e => setCategories(e.target.value)}
                />
            </div>
            <button type="submit">{product ? 'Update' : 'Add'} Product</button>
            {onCancel && <button type="button" onClick={onCancel} style={{ marginLeft: '0.5rem' }}>Cancel</button>}
        </form>
    );
};

export default ProductForm;
