// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl4Xd846-aC3kMNb7IUb-ucbox6ATCOGs",
  authDomain: "austinloh-4966e.firebaseapp.com",
  projectId: "austinloh-4966e",
  storageBucket: "austinloh-4966e.firebasestorage.app",
  messagingSenderId: "1082936790330",
  appId: "1:1082936790330:web:4eff04d4823e6255cd9403",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
