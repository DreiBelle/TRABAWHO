import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseDB";

async function getJobs_(chosenInterest, hours, jobtype, loc, yearsofexp, salary) {
    try {
        const jobpostCollection = collection(db, "jobpost"); 

        const q = query(jobpostCollection, 
            where("chosenInterests", "array-contains-any", chosenInterest),
            where("hours", "==", hours),
            where("jobtype", "==", jobtype),
            where("loc", "==", loc),
            where("yearsofexp", "==", yearsofexp),
            where("salary", "==", salary),
            );

        // const q = query(jobpostCollection);

        // Retrieve the documents that match the query
        const querySnapshot = await getDocs(q);

        const jobs = [];

        // Loop through the documents and push the data to the jobs array
        querySnapshot.forEach((doc) => {
            if (doc.exists) {
                const data = doc.data();
                jobs.push(data);
            }
        });

        console.log(jobs);

        return jobs;
    } catch (error) {
        console.error("Error getting jobs: ", error);
        throw error; // You can handle the error as needed in your application
    }
}

export const getJobs = getJobs_;
