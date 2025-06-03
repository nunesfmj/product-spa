import React from 'react';
import ProductList from './components/ProductList';

const App: React.FC = () => {
    return (
        <div style={{ padding: '1rem' }}>
            <h1>Product Manager</h1>
            <ProductList />
        </div>
    );
};

export default App;
