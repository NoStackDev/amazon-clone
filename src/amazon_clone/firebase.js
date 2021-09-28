import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDKxs_xyNcIpN1rEBPK1gYJcC9G67fLHuw",
  authDomain: "stacksagar.firebaseapp.com",
  projectId: "stacksagar",
  storageBucket: "stacksagar.appspot.com",
  messagingSenderId: "771346616933",
  appId: "1:771346616933:web:23e608e2b0ef48a2e4ec8c",
  measurementId: "G-XYS5Y8TM0C",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
export { db, auth }; 










