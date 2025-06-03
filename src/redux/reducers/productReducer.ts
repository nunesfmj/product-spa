import {
    FETCH_PRODUCTS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from '../actions/productTypes';

import { Product } from '../../types/product';

type Action =
    | { type: typeof FETCH_PRODUCTS; payload: Product[] }
    | { type: typeof ADD_PRODUCT; payload: Product }
    | { type: typeof UPDATE_PRODUCT; payload: Product }
    | { type: typeof DELETE_PRODUCT; payload: string };

const initialState: Product[] = [];

const productReducer = (state = initialState, action: Action): Product[] => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload;
        case ADD_PRODUCT:
            return [...state, action.payload];
        case UPDATE_PRODUCT:
            return state.map((p) => (p.id === action.payload.id ? action.payload : p));
        case DELETE_PRODUCT:
            return state.filter((p) => p.id !== action.payload);
        default:
            return state;
    }
};

export default productReducer;