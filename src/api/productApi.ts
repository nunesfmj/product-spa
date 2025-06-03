import { Product } from '../types/product';
import { v4 as uuidv4 } from 'uuid';

let products: Product[] = [
    {
        id: uuidv4(),
        stock: 10,
        description: 'Test Product A',
        categories: ['category-a'],
        price: 19.99
    },
    {
        id: uuidv4(),
        stock: 5,
        description: 'Test Product B',
        categories: ['category-b'],
        price: 29.99
    }
];

const simulateDelay = <T>(response: T): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(response), 500));

const productApi = {
    getAll: (): Promise<Product[]> => simulateDelay([...products]),
    add: (product: Omit<Product, 'id'>): Promise<Product> => {
        const newProduct = { ...product, id: uuidv4() };
        products.push(newProduct);
        return simulateDelay(newProduct);
    },
    update: (updatedProduct: Product): Promise<Product> => {
        products = products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p));
        return simulateDelay(updatedProduct);
    },
    delete: (id: string): Promise<string> => {
        products = products.filter((p) => p.id !== id);
        return simulateDelay(id);
    }
};

export default productApi;
