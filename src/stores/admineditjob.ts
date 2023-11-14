import { defineStore } from 'pinia';
import { db } from '@/firebaseDB';
import { doc, updateDoc } from 'firebase/firestore';

export const useadmineditjob = defineStore('editadminjob', {
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
            province: "",
            citown: "",
            district: "",
            hours: "",
            street: "",
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
            console.log("update")
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
                    province: "",
                    citown: "",
                    district: "",
                    street: "",
                    hours: "",
                    classification: "",
                    subclassification: "",
                };
            } catch (error) {
                console.error('Error updating data:', error);
            }
        },
    },
});
