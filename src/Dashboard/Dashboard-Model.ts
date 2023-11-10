import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  doc,
  getDoc,
} from "firebase/firestore";
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

async function getJobPostings_(Username, companyname, id) {
  try {
    const userDoc = await getDashboardProfile_(Username);

    if (userDoc && userDoc.businessname === companyname) {
      const jobPostingsRef = collection(db, "jobpost");
      const q = query(jobPostingsRef, where("company", "==", id));

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

async function getjobs_(id) {
  try {
      const jobPostingsRef = collection(db, "jobpost");
      const q = query(jobPostingsRef, where("company", "==", id));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        console.log("there is job posting ");
        return querySnapshot.docs.map((doc) => doc.data());
      } else {
        console.log("No job postings found for company");
        return [];
      }
  } catch (error) {
    console.error("Error fetching job postings:", error);
    return [];
  }
}

async function getlikes_(id) {
  try {


      const likesRef = collection(db, "likes");
      const q = query(likesRef, where("creator", "==", id));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        console.log("there is likes");
        return querySnapshot.docs.map((doc) => doc.data());
      } else {
        console.log("No likes postings found");
        return [];
      }
  } catch (error) {
    console.error("Error fetching likes:", error);
    return [];
  }
}

async function getviews_(id) {
  try {


      const viewsRef = collection(db, "views");
      const q = query(viewsRef, where("creator", "==", id));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        console.log("there is views");
        return querySnapshot.docs.map((doc) => doc.data());
      } else {
        console.log("No views postings found");
        return [];
      }
  } catch (error) {
    console.error("Error fetching views:", error);
    return [];
  }
}

// emman
async function getMessages_(Sender, Receiver) {
  try {
    const userDoc = await getDashboardProfile_(Sender);

    if (userDoc.email === Sender) {
      const messagesRef = collection(db, "Messages");
      const q = query(
        messagesRef,
        where("receiverEmail", "==", Receiver),
        where("senderEmail", "==", Sender),
        // orderBy("dateSent", "asc"),
        limit(100)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        console.log("there are messages");
        return querySnapshot.docs.map((doc) => doc.data());
      } else {
        console.log("No messages");
        return [];
      }
    } else {
      console.log("none");
    }
  } catch (error) {
    console.error("Error", error);
  }
}

async function getReceives_(Sender, Receiver) {
  try {
    const userDoc = await getDashboardProfile_(Sender);

    if (userDoc.email === Sender) {
      const messagesRef = collection(db, "Messages");
      const q = query(
        messagesRef,
        where("receiverEmail", "==", Sender),
        where("senderEmail", "==", Receiver),
        // orderBy("dateSent", "asc"),
        limit(100)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        console.log("there are messages received");
        return querySnapshot.docs.map((doc) => doc.data());
      } else {
        console.log("No messages received");
        return [];
      }
    } else {
      console.log("none");
    }
  } catch (error) {
    console.error("Error", error);
  }
}

async function getSwipedpostings_(id) {
  const jobDocRef = doc(db, "jobpost", id);

  try {
    const docSnap = await getDoc(jobDocRef);
    if (docSnap.exists()) {
      const jobDoc = docSnap.data();
      jobDoc.id = docSnap.id;
      return jobDoc;
    } else {
      console.log("Document not found");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
}

async function getswiperProfile_(id) {
  const userDocRef = doc(db, "users", id);
  try {
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        const userDoc = docSnap.data();
        userDoc.id = docSnap.id;
        return userDoc;
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
}

export const getDashboardProfile = getDashboardProfile_;
export const getJobPostings = getJobPostings_;
export const getMessages = getMessages_;
export const getReceives = getReceives_;
export const getSwipedpostings = getSwipedpostings_;
export const getswiperProfile = getswiperProfile_;
export const getlikes = getlikes_;
export const getviews = getviews_;
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
