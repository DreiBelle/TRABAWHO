import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseDB";
import { GoHomeSwipeJobSeekers, GoEmployerDashboard } from "./Login-Controller";

async function UserLogin_(Username) {
  const usersRef = collection(db, "users");

  const q = query(usersRef, where("email", "==", Username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const userDoc = docSnap.data();
    const storedtype = userDoc.type;


    if (window.innerWidth <= 768) {
      if (storedtype === "jobseeker") {
        console.log("Succesfully login");
        GoHomeSwipeJobSeekers();
      }
    }
    else {
      if (storedtype === "employer") {
        console.log("Succesfully login");
        GoEmployerDashboard();
      }
    }
  } else {
    console.log("Username not found");
  }
}


export const UserLogin = UserLogin_;