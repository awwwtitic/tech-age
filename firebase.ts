import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZCOdhyFgpd0U8Z52eOtubUL269RgVsL8",
  authDomain: "tech-age-computers.firebaseapp.com",
  projectId: "tech-age-computers",
  storageBucket: "tech-age-computers.firebasestorage.app",
  messagingSenderId: "655730391859",
  appId: "1:655730391859:web:b777ea6c91c699bc2a5c46",
  measurementId: "G-7HEVQLTLV7",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
