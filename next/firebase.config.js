// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "anji-d89e3.firebaseapp.com",
    projectId: "anji-d89e3",
    storageBucket: "anji-d89e3.appspot.com",
    messagingSenderId: "569986520921",
    appId: "1:569986520921:web:9cb8f65507ef1b9724de48",
    measurementId: "G-8SKPXXT6K2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);