import { collection, query, where, getDocs, doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseDB";

async function getJobs_(chosenInterest, jobtype, loc, yearsofexp) {
    try {
        const jobpostCollection = collection(db, "jobpost"); 

        const q = query(jobpostCollection, 
            where("chosenInterests", "array-contains-any", chosenInterest),
            where("jobtype", "in", jobtype),
            where("loc", "in", loc),
            where("yearsofexp", "==", yearsofexp),
            );

        // const q = query(jobpostCollection);

        // Retrieve the documents that match the query
        const querySnapshot = await getDocs(q);

        const jobs = [];

        // Loop through the documents and push the data to the jobs array
        querySnapshot.forEach((doc) => {
            if (doc.exists) {
                const jobdata = doc.data();
                jobdata.id = doc.id;
                jobs.push(jobdata);
            }
        });

        console.log(jobs);

        return jobs;
    } catch (error) {
        console.error("Error getting jobs: ", error);
        throw error; // You can handle the error as needed in your application
    }
}

async function getjobownerProfile_(id) {
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

async function deleteBlank_(id) {
    const userDocRef = doc(db, 'users', id);

    try {
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();

            if (Array.isArray(userData.swiperjob)) {
                const filteredSwiperJob = userData.swiperjob.filter(job => job.jobdid !== '');

                if (filteredSwiperJob.length < userData.swiperjob.length) {
                    await updateDoc(userDocRef, { swiperjob: filteredSwiperJob });
                    console.log(`Blank jobdid maps removed from user document with ID `);
                } else {
                    console.log(`No blank jobdid maps found in the user document with ID `);
                }
            } else {
                console.log(`No swiperjob array found in the user document with ID `);
            }
        } else {
            console.log(`Document with ID  does not exist.`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function deleteBlank1_(id) {
    const userDocRef = doc(db, 'users', id);

    try {
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();

            if (Array.isArray(userData.swiperuser)) {
                const filteredSwiperUser = userData.swiperuser.filter(user => user.swipedid !== '');

                if (filteredSwiperUser.length < userData.swiperuser.length) {
                    await updateDoc(userDocRef, { swiperuser: filteredSwiperUser });
                    console.log(`Blank swipedid maps removed from user document with ID `);
                } else {
                    console.log(`No blank swipedid maps found in the user document with ID `);
                }
            } else {
                console.log(`No swiperjob array found in the user document with ID `);
            }
        } else {
            console.log(`Document with ID  does not exist.`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getJobs = getJobs_;
export const getjobownerProfile = getjobownerProfile_;
export const deleteBlank = deleteBlank_;
export const deleteBlank1 = deleteBlank1_;
