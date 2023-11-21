import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseDB";
import { GoHomeSwipeJobSeekers, GoEmployerDashboard, GoHome, Goadmin } from "./Login-Controller";
import { onAuthStateChanged, signOut, sendPasswordResetEmail  } from "firebase/auth";
import { auth } from "@/firebaseDB";
import { ref, onMounted } from "vue";
import { GoEmployerHome } from "@/Dashboard/Employer-Dashboard-Controller";

const isLoggedIn = ref(false);

onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
});

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
      else if(storedtype === "admin"){
        console.log("Succesfully login");
        Goadmin();
      }
    }
  } else {
    alert("Email not found");
    GoHome
  }
}

async function checkgoogle_(email) {
  const usersRef = collection(db, "users");

  const q = query(usersRef, where("email", "==", email));
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
    alert('Email not found in Firestore.');
    GoEmployerHome
    signOut(auth).then(() => {
      
    });
  }
}

async function getuser_(Username) {
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

async function updatePassword_(Username) {
  const usersRef = collection(db, "users");

  const q = query(usersRef, where("email", "==", Username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const userDoc = docSnap.data();

    try {
      // Send a password reset email to the user
      await sendPasswordResetEmail(auth, Username);

      console.log("Password reset email sent successfully");
      alert("Password reset email sent successfully");
      return userDoc;
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert(error);
      throw error;
    }
  } else {
    console.log("Email not found");
    alert("Email not found");
    return null;
  }
}




export const UserLogin = UserLogin_;
export const checkgoogle = checkgoogle_;
export const getuser = getuser_;
export const updatePassword = updatePassword_;