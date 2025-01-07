// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkcHcCWGR9vHn3V9CXco1h_hNCRgbk7gQ",
    authDomain: "ai-travel-planner-32420.firebaseapp.com",
    projectId: "ai-travel-planner-32420",
    storageBucket: "ai-travel-planner-32420.firebasestorage.app",
    messagingSenderId: "908348018063",
    appId: "1:908348018063:web:e80ceb403323569a2b4ffa",
    measurementId: "G-TNFNC98LGV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// const analytics = getAnalytics(app);