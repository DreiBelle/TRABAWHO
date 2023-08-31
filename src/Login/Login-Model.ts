import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseDB";
import { GoHomeSwipeJobSeekers, GoEmployerDashboard } from "./Login-Controller";

async function UserLogin_(Username, Password) {
  const usersRef = collection(db, "users");

  const q = query(usersRef, where("email", "==", Username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const userDoc = docSnap.data();
    
    const storedPassword = userDoc.password;
    const storedtype = userDoc.type;
    
    if (Password === storedPassword) {
      if(storedtype === "jobseeker"){
        console.log("Succesfully login");
        GoHomeSwipeJobSeekers();
      }
      else if(storedtype === "employer"){
        console.log("Succesfully login");
        GoEmployerDashboard();
      }
      else{
        console.log("Succesfully login");
        console.log("Admin view")
      }
    } else {
      console.log("Wrong password");
    }
  } else {
    console.log("Username not found");
  }
}

export interface ProfileModel {
  email: string;
  password: string;
}

export const UserLogin = UserLogin_;