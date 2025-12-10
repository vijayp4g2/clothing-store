const { db } = require('../api/db');
const { products } = require('../api/_data');

async function seedDatabase() {
    const collectionRef = db.collection('products');

    console.log(`Starting to seed ${products.length} products...`);

    try {
        const batch = db.batch();

        products.forEach(product => {
            // Use product.id as the document ID for consistency
            const docRef = collectionRef.doc(product.id.toString());
            batch.set(docRef, product);
        });

        await batch.commit();
        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
