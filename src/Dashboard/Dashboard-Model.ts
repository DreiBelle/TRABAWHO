import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseDB";

async function getDashboardProfile_(Username) {
  const usersRef = collection(db, "users");

  const q = query(usersRef, where("email", "==", Username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    const userDoc = docSnap.data();
    userDoc.id = docSnap.id;
    return userDoc;

  } else {
    console.log("Username not found");
  }
}

async function getJobPostings_(Username, companyname) {
  try {
    const userDoc = await getDashboardProfile_(Username);

    if (userDoc && userDoc.businessname === companyname) {
      const jobPostingsRef = collection(db, "jobpost");
      const q = query(jobPostingsRef, where("company", "==", companyname));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        console.log("there is job posting ", companyname);
        return querySnapshot.docs.map((doc) => doc.data());
      } else {
        console.log("No job postings found for company", companyname);
        return [];
      }
    } else {
      console.log("User is not associated with company", companyname);
      return [];
    }
  } catch (error) {
    console.error("Error fetching job postings:", error);
    return [];
  }
}

export const getDashboardProfile = getDashboardProfile_;
export const getJobPostings = getJobPostings_;
export interface JobpostModel {
  jobname: string;
  jobtype: string;
  jobdes: string;
  dateCreated: "";
  chosenInterests: any[];
  company: string;
  positionlvl: string;
  salary: string;
  hours: string;
  yearsofexp: string;
  reqeduc: string;
  loc: string;
  noofempl: string;
}
export interface additionalprof {
  pic: string;
  bacpic: string;
  noofempl: string;
  loc: string;
  mv: string;
  yearsofest: string;
}