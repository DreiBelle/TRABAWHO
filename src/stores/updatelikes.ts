import { defineStore } from 'pinia';
import { db } from "@/firebaseDB";
import { addDoc, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';

export const useupdatelike = defineStore('likejob', {
    state: () => ({
        formData: {
            likes: ""
        },
    }),
    actions: {
        setlikes(data) {
            this.formData.likes = data;
        },
        async updatelikes(jobid) {
            try {
                const jobRef = doc(db, 'jobpost', jobid);
                await updateDoc(jobRef, this.formData);
                console.log("like successfully!");
                // Reset the form data after registration if needed
                this.formData = {
                    likes: ""
                };
            } catch (error) {
                console.error('Error add data:', error);
            }
        },
    },
});
