
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database'; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgKVTkOvEAFmD3klMdspSYCyhFjUdAY38",
  authDomain: "finalproject-e37f8.firebaseapp.com",
  projectId: "finalproject-e37f8",
  storageBucket: "finalproject-e37f8.firebasestorage.app",
  messagingSenderId: "808649889195",
  appId: "1:808649889195:web:ff8db9950953f9f00a2eee",
  measurementId: "G-PHFHQW640Y"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const firestore = getFirestore(app);
const database = getDatabase(app);


export { app, analytics, auth , firestore, storage, database};