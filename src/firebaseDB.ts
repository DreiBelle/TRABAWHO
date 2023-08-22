import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDwXEGcMXBfj1uUgFRLrLX-5htev98ULic",
  authDomain: "trabawho-b9748.firebaseapp.com",
  projectId: "trabawho-b9748",
  storageBucket: "trabawho-b9748.appspot.com",
  messagingSenderId: "144140714751",
  appId: "1:144140714751:web:466cdfe2257b6b1bcc42ca",
  measurementId: "G-0XR8966ZN7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
