const fs = require('fs');
const path = require('path');

// Read products from JSON file
function getProducts() {
    const productsPath = path.join(process.cwd(), 'data', 'products.json');
    const data = fs.readFileSync(productsPath, 'utf-8');
    return JSON.parse(data);
}

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { query } = req;

        if (!query.id) {
            return res.status(400).json({ message: 'Product ID is required' });
        }

        const products = getProducts();
        const productId = parseInt(query.id);
        const product = products.find(p => p.id === productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const newProduct = {
            ...product,
            id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
            name: product.name + ' (Copy)',
            createdAt: new Date().toISOString()
        };

        // WARNING: This won't persist in serverless environment
        products.push(newProduct);

        return res.status(201).json({
            ...newProduct,
            warning: 'Product duplicated but changes may not persist. Use a database for production.'
        });

    } catch (error) {
        console.error('Error in duplicate API:', error);
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};
