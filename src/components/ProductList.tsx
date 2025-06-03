import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productApi from '../api/productApi';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../redux/actions/productActions';
import { Product } from '../types/product';
import { RootState } from '../redux/store';
import ProductForm from './ProductForm';

const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products);

    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [adding, setAdding] = useState(false);

    useEffect(() => {
        productApi.getAll().then((data) => dispatch(fetchProducts(data)));
    }, [dispatch]);

    const handleSave = (productData: Omit<Product, 'id'>, id?: string) => {
        if (id) {
            const updatedProduct: Product = { id, ...productData };
            productApi.update(updatedProduct).then(() => {
                dispatch(updateProduct(updatedProduct));
                setEditingProduct(null);
            });
        } else {
            productApi.add(productData).then((newProd) => {
                dispatch(addProduct(newProd));
                setAdding(false);
            });
        }
    };

    const handleDelete = (id: string) => {
        if (!window.confirm('Are you sure you want to delete this product?')) return;

        productApi.delete(id).then(() => {
            dispatch({ type: 'DELETE_PRODUCT', payload: id });
        });
    };

    if (products.length === 0 && !adding)
        return (
            <div>
                <p>No products available.</p>
                <button onClick={() => setAdding(true)}>Add Product</button>
            </div>
        );

    return (
        <div>
            <h2>Products</h2>

            {adding && (
                <ProductForm
                    onSave={handleSave}
                    onCancel={() => setAdding(false)}
                />
            )}

            <ul>
                {products.map((prod: Product) => (
                    <li key={prod.id}>
                        <strong>{prod.description}</strong><br />
                        Price: ${prod.price.toFixed(2)} | Stock: {prod.stock} | Categories: {prod.categories.join(', ')}{' '}
                        <button onClick={() => setEditingProduct(prod)}>Edit</button>
                        <button onClick={() => handleDelete(prod.id)} style={{ marginLeft: '0.5rem', color: 'red' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {editingProduct && (
                <ProductForm
                    product={editingProduct}
                    onSave={handleSave}
                    onCancel={() => setEditingProduct(null)}
                />
            )}

            {!adding && (
                <button onClick={() => setAdding(true)} style={{ marginTop: '1rem' }}>
                    Add Product
                </button>
            )}
        </div>
    );
};

export default ProductList;
