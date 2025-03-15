import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

let app;
const service_key = JSON.parse(process.env.FIREBASE_SERVICE_KEY);

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(service_key),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);
const adminAuth = getAuth(app);

export { adminDb, adminAuth };
