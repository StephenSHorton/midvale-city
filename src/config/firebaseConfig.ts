import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQtC6kKIWC_jnJrK4r_I94ov0vQ1vDDHI",
  authDomain: "midvale-city.firebaseapp.com",
  projectId: "midvale-city",
  storageBucket: "midvale-city.appspot.com",
  messagingSenderId: "55729723313",
  appId: "1:55729723313:web:eb2b21ef1f5b485d764f90",
  measurementId: "G-L052DDNNR2",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);
