import { defineStore } from 'pinia';
import { db } from "@/firebaseDB";
import { addDoc, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';

export const useSwipejob = defineStore('swipejob', {
    state: () => ({
        formData: {
            swiperjob: [],
        },
    }),
    actions: {
        setjobswipe(data) {
            this.formData.swiperjob = data;
        },
        async updateuserswipedata(userid) {
            try {
                const userRef = doc(db, 'users', userid);
                await updateDoc(userRef, this.formData);
                console.log("swipe post successfully!");
                // Reset the form data after registration if needed
                this.formData = {
                    swiperjob: [],
                };
            } catch (error) {
                console.error('Error add data:', error);
            }
        },
    },
});
