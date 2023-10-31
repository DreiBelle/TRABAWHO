import { defineStore } from 'pinia';
import { db } from "@/firebaseDB"; 
import { addDoc, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';

export const useSwipedata = defineStore('swipe', {
    state: () => ({
        formData: {
            swiperuser: [],
            swiperjob: [],
        },
    }),
    actions: {
        setswipedata(data) {
            this.formData.swiperuser = data;
        },
        setjobdata(data) {
            this.formData.swiperjob = data;
        },
        async updateswipedata(userid) {
            try {
                const userRef = doc(db, 'users', userid);
                await updateDoc(userRef, this.formData);
                console.log("swipe post successfully!");
                // Reset the form data after registration if needed
                this.formData = {
                    swiperuser: [],
                    swiperjob: [],
                };
            } catch (error) {
                console.error('Error add data:', error);
            }
        },
    },
});
