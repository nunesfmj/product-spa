import { AnyAction } from 'redux';
import { Product } from '../../types/product';

const initialState: Product[] = [];

export const productReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return [...action.payload];

        case 'ADD_PRODUCT':
            return [...state, action.payload];

        case 'DELETE_PRODUCT':
            return state.filter(product => product.id !== action.payload);

        case 'EDIT_PRODUCT':
            return state.map(product =>
                product.id === action.payload.id ? action.payload : product
            );

        default:
            return state;
    }
};
