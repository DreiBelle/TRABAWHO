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

async function getJobPostings_() {
    try {
        const jobPostingsRef = collection(db, "jobpost");
        const q = query(jobPostingsRef);

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("there is job posting ");
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            console.log("No job postings");
            return [];
        }
    } catch (error) {
        console.error("Error fetching job postings:", error);
        return [];
    }
}

async function getusers_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef);

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("there is users ");
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            console.log("No users found ");
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getemployers_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "employer")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("there is users ");
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            console.log("No users found ");
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

async function getjobseekers_() {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef,
            where("type", "==", "jobseeker")
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            console.log("there is users ");
            return querySnapshot.docs.map((doc) => doc.data());
        } else {
            console.log("No users found ");
            return [];
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export const getJobPostings = getJobPostings_;
export const getusers = getusers_;
export const getemployers = getemployers_;
export const getjobseekers = getjobseekers_;