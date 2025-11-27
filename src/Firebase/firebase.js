// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMiOFP2o2E2ZZ52pUORPoRCGb6PgEabIM",
  authDomain: "shopora-7fc88.firebaseapp.com",
  projectId: "shopora-7fc88",
  storageBucket: "shopora-7fc88.firebasestorage.app",
  messagingSenderId: "136602770712",
  appId: "1:136602770712:web:21adf48ca594157ccd526d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
