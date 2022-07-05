import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_egw543eOkjizxBG2adEMgDe9ATvuMW0",
  authDomain: "stenbrottsvagen-e88eb.firebaseapp.com",
  databaseURL: "https://stenbrottsvagen-e88eb-default-rtdb.firebaseio.com",
  projectId: "stenbrottsvagen-e88eb",
  storageBucket: "stenbrottsvagen-e88eb.appspot.com",
  messagingSenderId: "220547020978",
  appId: "1:220547020978:web:57314018fc4dfd12c431ab",
  measurementId: "G-0E45XDSGEE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const firebaseDB = getDatabase(firebaseApp);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {firebaseDB, provider, auth, analytics}