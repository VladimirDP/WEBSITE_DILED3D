// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkS_vGg1NYmYbX65SICiplulWYOp1cBIk",
    authDomain: "diled3d.firebaseapp.com",
    projectId: "diled3d",
    storageBucket: "diled3d.firebasestorage.app",
    messagingSenderId: "865222162188",
    appId: "1:865222162188:web:bac621e54f7e0e419ebb29"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);