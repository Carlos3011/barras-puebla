import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpEmAlaD350UZfVFlyIjVsZn6CxHoRuMc",
  authDomain: "barras-puebla.firebaseapp.com",
  projectId: "barras-puebla",
  storageBucket: "barras-puebla.appspot.com",
  messagingSenderId: "935629327368",
  appId: "1:935629327368:web:14b02f27c1429dc46955bd"
};

export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);