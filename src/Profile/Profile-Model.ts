import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseDB";

async function getUserProfile_(Username) {
    const usersRef = collection(db, "users");
  
    const q = query(usersRef, where("email", "==", Username));
    const querySnapshot = await getDocs(q);
  
    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const userDoc = docSnap.data();
    return userDoc;
     
    } else {
      console.log("Username not found");
    }
  }


  
  export const getUserProfile = getUserProfile_;