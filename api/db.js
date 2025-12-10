
const admin = require('firebase-admin');

// Prevent multiple initializations
if (!admin.apps.length) {
    try {
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
    } catch (error) {
        console.log('Firebase admin initialization error', error.stack);
    }
}

const db = admin.firestore();

module.exports = { db };
