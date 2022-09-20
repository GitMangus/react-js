// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD45i71fKqJYBbdLpucgu2YP1QggDtT8W4",
    authDomain: "rj-puppis.firebaseapp.com",
    projectId: "rj-puppis",
    storageBucket: "rj-puppis.appspot.com",
    messagingSenderId: "151236260755",
    appId: "1:151236260755:web:4ae2c1606056a17777ae66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)