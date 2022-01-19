import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDEaC2ChV-oPvj1rr4-JadyjYKHxpq0SJQ",
    authDomain: "ecommerce-coder19770.firebaseapp.com",
    projectId: "ecommerce-coder19770",
    storageBucket: "ecommerce-coder19770.appspot.com",
    messagingSenderId: "113021964946",
    appId: "1:113021964946:web:62eadf26eeabce20974c4b"
  };

  const app = initializeApp(firebaseConfig)

  export const data = getFirestore(app)