import { defineStore } from 'pinia';
import { db } from "@/firebaseDB";
import { addDoc, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';

export const useupdatebookmark = defineStore('bookmarkjob', {
    state: () => ({
        formData: {
            bookmarks: ""
        },
    }),
    actions: {
        setbookmarks(data) {
            this.formData.bookmarks = data;
        },
        async updatebookmarks(jobid) {
            try {
                const jobRef = doc(db, 'jobpost', jobid);
                await updateDoc(jobRef, this.formData);
                console.log("bookmark successfully!");
                // Reset the form data after registration if needed
                this.formData = {
                    bookmarks: ""
                };
            } catch (error) {
                console.error('Error add data:', error);
            }
        },
    },
});
