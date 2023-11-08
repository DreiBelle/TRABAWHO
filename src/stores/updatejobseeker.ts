import { defineStore } from 'pinia';
import { db } from '@/firebaseDB';
import { doc, updateDoc } from 'firebase/firestore';

export const useUserjStore = defineStore('userjstore', {
    state: () => ({
        formData: {
            pic: "",
            fullname: "",
            bday: "",
            gender: "",
            province: "",
            citown: "",
            district: "",
            street: "",
            elementary: "",
            juniorhigh: "",
            seniorhigh: "",
            college: "",
            yearsofexp: "",
            salary: "",
            jobtype: "",
            loc: "",
            chosenInterests: [],

        },
    }),
    actions: {
        setFormData(data) {
            this.formData = { ...data };
        },
        setChosenInterests(interests) {
            this.formData.chosenInterests = interests;
        },
        async updateData(userid) {
            try {
                const userRef = doc(db, 'users', userid);
                await updateDoc(userRef, this.formData);
                console.log("User updated successfully!");
                // Reset the form data after registration if needed
                this.formData = {
                    pic: "",
                    fullname: "",
                    bday: "",
                    gender: "",
                    province: "",
                    citown: "",
                    district: "",
                    street: "",
                    elementary: "",
                    juniorhigh: "",
                    seniorhigh: "",
                    college: "",
                    yearsofexp: "",
                    salary: "",
                    jobtype: "",
                    loc: "",
                    chosenInterests: [],
                };
            } catch (error) {
                console.error('Error updating data:', error);
            }
        },
    },
});
