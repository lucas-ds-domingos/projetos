
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWQyj67DUEXMOQRO4HO0NZJ9BTwfndSsQ",
  authDomain: "reactlinks-6f156.firebaseapp.com",
  projectId: "reactlinks-6f156",
  storageBucket: "reactlinks-6f156.firebasestorage.app",
  messagingSenderId: "218423691785",
  appId: "1:218423691785:web:f7aa7526264f6a873746d8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth , db};