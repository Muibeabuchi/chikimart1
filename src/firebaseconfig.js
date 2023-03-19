// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAefuNl_KKuROKoklH5uQ0O3iieuXMymkk",
  authDomain: "ecommerce-store-muhib.firebaseapp.com",
  projectId: "ecommerce-store-muhib",
  storageBucket: "ecommerce-store-muhib.appspot.com",
  messagingSenderId: "838190983416",
  appId: "1:838190983416:web:dff1f43f1d70cd5c49330d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
