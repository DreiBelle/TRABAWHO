import { defineStore } from 'pinia';
import { db } from '@/firebaseDB';
import { doc, updateDoc } from 'firebase/firestore';

export const useadmineditj = defineStore('admineditj', {
    state: () => ({
        formData: {
            fullname: "",
            elementary: "",
            juniorhigh: "",
            seniorhigh: "",
            college: "",
            masteral: "",
            salary: "",
            yearsofexp: "",
            jobtype: "",
            loc: "",
            bday: "",
            contactno: "",
            gender: "",
            province: "",
            citown: "",
            district: "",
            street: "",
            classification: "",
            subclassification: "",
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
                    fullname: "",
                    elementary: "",
                    juniorhigh: "",
                    seniorhigh: "",
                    college: "",
                    masteral: "",
                    salary: "",
                    yearsofexp: "",
                    jobtype: "",
                    loc: "",
                    bday: "",
                    contactno: "",
                    gender: "",
                    province: "",
                    citown: "",
                    district: "",
                    street: "",
                    classification: "",
                    subclassification: "",
                    chosenInterests: [],
                };
            } catch (error) {
                console.error('Error updating data:', error);
            }
        },
    },
});
