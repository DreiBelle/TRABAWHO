import { defineStore } from 'pinia';
import { db } from "@/firebaseDB";
import { addDoc, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';

export const useupdateview = defineStore('viewjob', {
    state: () => ({
        formData: {
            views: ""
        },
    }),
    actions: {
        setviews(data) {
            this.formData.views = data;
        },
        async updateviews(jobid) {
            try {
                const jobRef = doc(db, 'jobpost', jobid);
                await updateDoc(jobRef, this.formData);
                console.log("view successfully!");
                // Reset the form data after registration if needed
                this.formData = {
                    views: ""
                };
            } catch (error) {
                console.error('Error add data:', error);
            }
        },
    },
});
