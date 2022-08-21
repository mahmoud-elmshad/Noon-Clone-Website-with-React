import { initializeApp, firebase } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR-qee74S_udgMExZCSwjtWIdmXVkusck",
  authDomain: "admindashboard-adfd3.firebaseapp.com",
  projectId: "admindashboard-adfd3",
  storageBucket: "admindashboard-adfd3.appspot.com",
  messagingSenderId: "108491565372",
  appId: "1:108491565372:web:50a2b7598f59d6be151639",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
