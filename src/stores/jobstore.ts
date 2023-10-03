// stores/signupstore.ts
import { defineStore } from "pinia";
import { db } from "@/firebaseDB"; // Import your Firebase Firestore instance
import { addDoc, collection } from "firebase/firestore";

import { JobpostModel } from "@/Dashboard/Dashboard-Model";

export const useJobStore = defineStore("jobpost", {
  state: () => ({
    formData: {
      pic: "",
      jobname: "",
      jobtype: "",
      jobdes: "",
      positionlvl: "",
      salary: "",
      hours: "",
      yearsofexp: "",
      reqeduc: "",
      loc: "",
      dateCreated: "",
      chosenInterests: [],
      company: "",
    },
  }),
  actions: {
    setFormData(data: JobpostModel) {
      this.formData = { ...data };
    },
    setChosenInterests(interests) {
      this.formData.chosenInterests = interests;
    },
    getChosenInterests() {
      return this.formData.chosenInterests;
    },

    async postjob() {

      // Set the current date as the dateCreated
      this.formData.dateCreated = new Date().toISOString();

      try {
        const usersCollection = collection(db, "jobpost"); // "jobpost" is the name of the Firestore collection
        await addDoc(usersCollection, this.formData);
        console.log("jobpost registered successfully!");
        // Reset the form data after registration if needed
        this.formData = {
          pic: "",
          jobname: "",
          jobtype: "",
          jobdes: "",
          positionlvl: "",
          salary: "",
          hours: "",
          yearsofexp: "",
          reqeduc: "",
          loc: "",
          dateCreated: "",
          chosenInterests: [],
          company: "",
        };
      } catch (error) {
        console.error("Error registering jobpost:", error);
      }
    },
  },
});