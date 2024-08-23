// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADlXy4OTrL6X1rbLxAql2O-iKbWutvrAo",
  authDomain: "milindubooklanka.firebaseapp.com",
  projectId: "milindubooklanka",
  storageBucket: "milindubooklanka.appspot.com",
  messagingSenderId: "793398999124",
  appId: "1:793398999124:web:a22ccbe832172370fd55c1",
  measurementId: "G-76ZR4506J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export default app;