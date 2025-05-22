
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIdZKMBT0P1tEfvr4j8I0tEj97H87tJHg",
  authDomain: "my-portfolio-28073.firebaseapp.com",
  projectId: "my-portfolio-28073",
  storageBucket: "my-portfolio-28073.firebasestorage.app",
  messagingSenderId: "970093305639",
  appId: "1:970093305639:web:e558cf4bbcd13415c81302",
  measurementId: "G-RLJTS621VJ"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);