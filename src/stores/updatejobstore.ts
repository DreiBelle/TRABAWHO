import { defineStore } from 'pinia';
import { db } from '@/firebaseDB';
import { doc, updateDoc } from 'firebase/firestore';

export const useJobStore = defineStore('jobStore', {
    state: () => ({
        formData: {
            pic: "",
            jobname: "",
            jobtype: "",
            jobdes: "",
            positionlvl: "",
            salary: "",
            noofempl: "",
            yearsofexp: "",
            reqeduc: "",
            loc: "",
            chosenInterests: [],
            isactive: "",
            creator: "",
            classification: "",
            subclassification: "",
        },
    }),
    actions: {
        setFormData(data) {
            this.formData = { ...data };
        },
        setChosenInterests(interests) {
            this.formData.chosenInterests = interests;
        },
        getChosenInterests() {
            return this.formData.chosenInterests;
        },
        async updateData(jobPostId) {
            try {
                const jobPostRef = doc(db, 'jobpost', jobPostId);
                await updateDoc(jobPostRef, this.formData);
                console.log("jobpost updated successfully!");
                // Reset the form data after registration if needed
                this.formData = {
                    pic: "",
                    jobname: "",
                    jobtype: "",
                    jobdes: "",
                    positionlvl: "",
                    salary: "",
                    noofempl: "",
                    yearsofexp: "",
                    reqeduc: "",
                    loc: "",
                    chosenInterests: [],
                    isactive: "",
                    creator: "",
                    classification: "",
                    subclassification: "",
                    hours: "",
                };
            } catch (error) {
                console.error('Error updating data:', error);
            }
        },
    },
});
