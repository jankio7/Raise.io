// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL_6c_iu0Umku7cFCUF_PCMNa2FrUNfWs",
  authDomain: "raise-io-44d35.firebaseapp.com",
  projectId: "raise-io-44d35",
  storageBucket: "raise-io-44d35.firebasestorage.app",
  messagingSenderId: "1015454773990",
  appId: "1:1015454773990:web:c25ee855836a40bb2ac127",
  measurementId: "G-2XNGKBG71F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore()