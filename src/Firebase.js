// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnaYki6RbSTaGyBrnsN3absvTLkq_RDK8",
  authDomain: "metrbooking.firebaseapp.com",
  projectId: "metrbooking",
  storageBucket: "metrbooking.appspot.com",
  messagingSenderId: "654912151861",
  appId: "1:654912151861:web:16525deebbf9986d5d2c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
export default app;