// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDByMvZX8HFREyHrd-2gUaUdfKCUBXWuMQ",
  authDomain: "inventory-manager-13d3b.firebaseapp.com",
  projectId: "inventory-manager-13d3b",
  storageBucket: "inventory-manager-13d3b.appspot.com",
  messagingSenderId: "84460530746",
  appId: "1:84460530746:web:0519cdf6ed39e3be8f9903",
  measurementId: "G-FZHTE64CRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}