import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAa4RnFsiy0-ZLEgCxqUBQyzM5k7AzhdOo",
  authDomain: "hallrousell.firebaseapp.com",
  projectId: "hallrousell",
  storageBucket: "hallrousell.appspot.com",
  messagingSenderId: "243439961330",
  appId: "1:243439961330:web:4b75de046edb6a6ef2bc6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();