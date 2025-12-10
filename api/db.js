const admin = require('firebase-admin');

let db = null;

try {
    // Prevent multiple initializations
    if (!admin.apps.length) {
        let credential;

        if (process.env.FIREBASE_SERVICE_ACCOUNT) {
            // Production/Vercel: Use environment variable
            const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
            credential = admin.credential.cert(serviceAccount);
        } else {
            // Local Development: Use default credentials (file fallback)
            credential = admin.credential.applicationDefault();
        }

        admin.initializeApp({ credential });
    }

    db = admin.firestore();
    console.log('Firebase initialized successfully');
} catch (error) {
    console.error('Firebase initialization failed:', error.message);
    // Proceed without DB - db remains null
}

module.exports = { db };
