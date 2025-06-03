import {
    FETCH_PRODUCTS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from './productTypes';

import { Product } from '../../types/product';

export const fetchProducts = (products: Product[]) => ({
    type: FETCH_PRODUCTS,
    payload: products
});

export const addProduct = (product: Product) => ({
    type: ADD_PRODUCT,
    payload: product
});

export const updateProduct = (product: Product) => ({
    type: UPDATE_PRODUCT,
    payload: product
});

export const deleteProduct = (id: string) => ({
    type: DELETE_PRODUCT,
    payload: id
});