// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRkzJJ_h9J1mrZ38W7M3JYEzobYmYVn9E",
  authDomain: "brand-shop-client-8fc69.firebaseapp.com",
  projectId: "brand-shop-client-8fc69",
  storageBucket: "brand-shop-client-8fc69.appspot.com",
  messagingSenderId: "606937174495",
  appId: "1:606937174495:web:b685712f73636e259a746a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;