import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseDB";

async function getJobs_() {
    try {
        const jobpostCollection = collection(db, "jobpost"); // Replace "jobpost" with your actual collection name

        // Create a query to get all documents in the "jobpost" collection
        const q = query(jobpostCollection);

        // Retrieve the documents that match the query
        const querySnapshot = await getDocs(q);

        const jobs = [];

        // Loop through the documents and push the data to the jobs array
        querySnapshot.forEach((doc) => {
            if (doc.exists()) {
                const data = doc.data();
                jobs.push(data);
            }
        });

        return jobs;
    } catch (error) {
        console.error("Error getting jobs: ", error);
        throw error; // You can handle the error as needed in your application
    }
}

export const getJobs = getJobs_;
