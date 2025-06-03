import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import ProductList from '../../src/components/ProductList';
import '@testing-library/jest-dom';

jest.mock('../../src/api/productApi', () => ({
    getAll: jest.fn().mockResolvedValue([]),
    save: jest.fn(),
}));

jest.mock('uuid', () => ({
    v4: () => 'mocked-uuid-1234',
}));

const mockStore = configureStore([]);

describe('ProductList', () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({
            products: []
        });
    });

    it('renders empty message and Add button', () => {
        render(
            <Provider store={store} >
                <ProductList />
            </Provider>
        );

        expect(screen.getByText((content) => content.includes('No products available'))).toBeInTheDocument();
        expect(screen.getByText('Add Product')).toBeInTheDocument();
    });

    it('opens add product form on Add button click', () => {
        render(
            <Provider store={store} >
                <ProductList />
            </Provider>
        );

        fireEvent.click(screen.getByText('Add Product'));
        expect(screen.getByLabelText('Description:')).toBeInTheDocument();
    });
});
