import { Product } from '../../types/product';
import { FETCH_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actions/productTypes';

const initialState: Product[] = [];

const productReducer = (state = initialState, action: any): Product[] => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload;
        case ADD_PRODUCT:
            return [...state, action.payload];
        case UPDATE_PRODUCT:
            return state.map(prod =>
                prod.id === action.payload.id ? action.payload : prod
            );
        case DELETE_PRODUCT:
            return state.filter((p) => p.id !== action.payload);
        default:
            return state;
    }
};

export default productReducer;