import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseDB";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebaseDB";
import { ref, onMounted } from "vue";

async function checkifregisteredgoogle_(email) {
  const usersRef = collection(db, "users");

  const q = query(usersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const userDoc = docSnap.data();

    alert("Unable to create multiple accounts in one email, but you will continue to log in");
    return true;
  }
}
export const checkifregisteredgoogle = checkifregisteredgoogle_;

export interface SignupModel {
  fullname: string;
  email: string;
  password: string;
  acceptTerms: boolean;
  elementary: string;
  juniorhigh: string;
  seniorhigh: string;
  college: string;
  masteral: string;
  yearsofexp: string;
  jobtype: string;
  salary: string;
  loc: string;
  dateCreated: string;
  // chosenInterest: any[];
  type: string;
  bday: string,
  contactno: string
  gender: string
  province: string
  citown: string
  district: string
  street: string
  pic: string
}
