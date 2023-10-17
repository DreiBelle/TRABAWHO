import { defineStore } from 'pinia';
import { db } from '@/firebaseDB';
import { doc, updateDoc } from 'firebase/firestore';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        formData: {
            pic: "",
            bacpic: "",
            noofempl: "",
            loc: "",
            mv: "",
            yearsofest: "",
            founders: "",
            facebook: "",
            twitter: "",
            instagram: "",

        },
    }),
    actions: {
        setFormData(data) {
            this.formData = { ...data };
        },
        // setfounders(founders) {
        //     this.formData.founders = founders;
        // },
        // setsocialMedia(socmed) {
        //     this.formData.socialMedia = socmed;
        // },
        // getfounders() {
        //     return this.formData.founders;
        // },
        // getsocialMedia() {
        //     return this.formData.socialMedia;
        // },
        async updateData(userid) {
            try {
                const userRef = doc(db, 'users', userid);
                await updateDoc(userRef, this.formData);
                console.log("User updated successfully!");
                // Reset the form data after registration if needed
                this.formData = {
                    pic: "",
                    bacpic: "",
                    noofempl: "",
                    loc: "",
                    mv: "",
                    yearsofest: "",
                    founders: "",
                    facebook: "",
                    twitter: "",
                    instagram: "",
                };
            } catch (error) {
                console.error('Error updating data:', error);
            }
        },
    },
});
