import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';
import { thunk, ThunkMiddleware } from 'redux-thunk';
import { productReducer } from './reducers/productReducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    products: productReducer
});

const isDev = process.env.NODE_ENV === 'development';

const composeEnhancers =
    ((isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose) || ((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk as ThunkMiddleware))
);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
