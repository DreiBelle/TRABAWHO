import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyDwXEGcMXBfj1uUgFRLrLX-5htev98ULic",
//   authDomain: "trabawho-b9748.firebaseapp.com",
//   projectId: "trabawho-b9748",
//   storageBucket: "trabawho-b9748.appspot.com",
//   messagingSenderId: "144140714751",
//   appId: "1:144140714751:web:466cdfe2257b6b1bcc42ca",
//   measurementId: "G-0XR8966ZN7",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBYjQ9yYMaAU4-lJ6MR1Vwl76Svh9Zk3Ks",
  authDomain: "trabawho-c6f61.firebaseapp.com",
  projectId: "trabawho-c6f61",
  storageBucket: "trabawho-c6f61.appspot.com",
  messagingSenderId: "185236926649",
  appId: "1:185236926649:web:289ebb5ae21a906ee62b68",
  measurementId: "G-H6SK4S9NHM"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export const db = getFirestore(app);
export const dbImage = storage;
export const auth = getAuth(app);