const fs = require('fs');
const path = require('path');

// Read products from JSON file
function getProducts() {
    // In Vercel, use path relative to the project root
    const productsPath = path.join(__dirname, '..', 'data', 'products.json');
    const data = fs.readFileSync(productsPath, 'utf-8');
    return JSON.parse(data);
}

// Note: In serverless environment, file writes won't persist
// To persist data, use Vercel KV, database, or other storage
// For now, this works for read-only operations

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const products = getProducts();
        const { method, query } = req;

        // GET /api/products - List all products
        // GET /api/products?id=X - Get single product
        if (method === 'GET') {
            if (query.id) {
                const product = products.find(p => p.id === parseInt(query.id));
                if (!product) {
                    return res.status(404).json({ message: 'Product not found' });
                }
                return res.status(200).json(product);
            }
            return res.status(200).json(products);
        }

        // POST /api/products - Create new product
        if (method === 'POST') {
            const { name, price, category, image, description, sizes, colors } = req.body;

            if (!name || !price || !category) {
                return res.status(400).json({ message: 'Name, price, and category are required' });
            }

            const newProduct = {
                id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
                name,
                price: parseFloat(price),
                category,
                image: image || 'https://via.placeholder.com/400x500?text=Product+Image',
                description: description || '',
                sizes: sizes || ['S', 'M', 'L', 'XL'],
                colors: colors || ['Black', 'White'],
                createdAt: new Date().toISOString()
            };

            // WARNING: This won't persist in serverless environment
            // You need to use a database or Vercel KV for persistence
            products.push(newProduct);

            return res.status(201).json({
                ...newProduct,
                warning: 'Product created but changes may not persist. Use a database for production.'
            });
        }

        // PUT /api/products?id=X - Update product
        if (method === 'PUT') {
            if (!query.id) {
                return res.status(400).json({ message: 'Product ID is required' });
            }

            const productId = parseInt(query.id);
            const productIndex = products.findIndex(p => p.id === productId);

            if (productIndex === -1) {
                return res.status(404).json({ message: 'Product not found' });
            }

            const { name, price, category, image, description, sizes, colors } = req.body;

            products[productIndex] = {
                ...products[productIndex],
                name: name || products[productIndex].name,
                price: price ? parseFloat(price) : products[productIndex].price,
                category: category || products[productIndex].category,
                image: image || products[productIndex].image,
                description: description !== undefined ? description : products[productIndex].description,
                sizes: sizes || products[productIndex].sizes,
                colors: colors || products[productIndex].colors,
                updatedAt: new Date().toISOString()
            };

            return res.status(200).json({
                ...products[productIndex],
                warning: 'Product updated but changes may not persist. Use a database for production.'
            });
        }

        // DELETE /api/products - Bulk delete
        if (method === 'DELETE') {
            const { ids } = req.body;

            if (!Array.isArray(ids) || ids.length === 0) {
                return res.status(400).json({ message: 'No product IDs provided' });
            }

            let deletedCount = 0;
            ids.forEach(id => {
                const index = products.findIndex(p => p.id === parseInt(id));
                if (index !== -1) {
                    products.splice(index, 1);
                    deletedCount++;
                }
            });

            return res.status(200).json({
                message: `${deletedCount} products deleted`,
                warning: 'Deletion may not persist. Use a database for production.'
            });
        }

        return res.status(405).json({ message: 'Method not allowed' });

    } catch (error) {
        console.error('Error in products API:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};
