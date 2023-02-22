// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



import {getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcTfTgTKd3gxvo1Jp-UCSJ24aErLkltmI",
  authDomain: "delifood-8f689.firebaseapp.com",
  projectId: "delifood-8f689",
  storageBucket: "delifood-8f689.appspot.com",
  messagingSenderId: "412385712179",
  appId: "1:412385712179:web:1860258942df1bb40eab46",
  measurementId: "G-P473XFPTJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
