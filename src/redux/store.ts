import { createStore, combineReducers } from 'redux';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
    products: productReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
