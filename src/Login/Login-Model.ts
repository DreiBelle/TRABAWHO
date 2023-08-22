import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseDB";
import { GoHomeSwipeJobSeekers } from "./Login-Controller";

async function UserLogin_(Username, Password) {
  const docSnap = await getDoc(doc(db, "Users", Username));
  console.log("calling function")
  console.log(Username)

  if (docSnap.exists()) {
    var UN = docSnap.data().Username;
    var P = docSnap.data().Password;
    console.log("user found");
    if (Username == UN && Password == P) {
      GoHomeSwipeJobSeekers();
    } else {  
      console.log("wrong password");
    }
  }
  else{
    console.log("no username")
  }
}

export const UserLogin = UserLogin_

