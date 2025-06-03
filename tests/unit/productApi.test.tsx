import productApi from '../../src/api/productApi';

describe('productApi', () => {
    beforeEach(() => { });

    it('fetches all products', async () => {
        const products = await productApi.getAll();
        expect(Array.isArray(products)).toBe(true);
    });

    it('adds a product', async () => {
        const newProductData = {
            description: 'Test Product',
            price: 9.99,
            stock: 10,
            categories: ['test-category']
        };
        const newProduct = await productApi.add(newProductData);
        expect(newProduct).toMatchObject(newProductData);
        expect(newProduct.id).toBeDefined();
    });

    it('updates a product', async () => {
        const products = await productApi.getAll();
        const product = products[0];
        const updated = { ...product, description: 'Updated desc' };
        await productApi.update(updated);
        const productsAfter = await productApi.getAll();
        expect(productsAfter.find(p => p.id === product.id)?.description).toBe('Updated desc');
    });

    it('deletes a product', async () => {
        const products = await productApi.getAll();
        const product = products[0];
        await productApi.delete(product.id);
        const productsAfter = await productApi.getAll();
        expect(productsAfter.find(p => p.id === product.id)).toBeUndefined();
    });
});
