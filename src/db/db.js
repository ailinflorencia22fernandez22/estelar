import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP0PA7pdJGhFMIuiRDgj8sg15PDRW5l64",
  authDomain: "ecommerce-2024-b8c75.firebaseapp.com",
  projectId: "ecommerce-2024-b8c75",
  storageBucket: "ecommerce-2024-b8c75.appspot.com",
  messagingSenderId: "689564136370",
  appId: "1:689564136370:web:ade2fcfeb782bd73ea6aab"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db