// stores/signupstore.ts
import { defineStore } from "pinia";
import { db } from "@/firebaseDB"; // Import your Firebase Firestore instance
import { addDoc, collection } from "firebase/firestore";

import { JobpostModel } from "@/Dashboard/Dashboard-Model";

export const useadminaddjob = defineStore("adminjob", {
  state: () => ({
    formData: {
      pic: "",
      jobname: "",
      jobtype: "",
      jobdes: "",
      positionlvl: "",
      salary: "",
      yearsofexp: "",
      reqeduc: "",
      loc: "",
      dateCreated: "",
      chosenInterests: [],
      company: "",
      noofempl: "",
      isactive: "",
      creator: "",
      likes: 0,
      views: 0,
      classification: "",
      subclassification: "",
      hours: "",
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

    async postjob() {

      this.formData.dateCreated = new Date().toISOString();
      this.formData.likes = 0;
      this.formData.views = 0;

      try {
        const usersCollection = collection(db, "jobpost");
        await addDoc(usersCollection, this.formData);
        console.log("jobpost registered successfully!");

        this.formData = {
          pic: "",
          jobname: "",
          jobtype: "",
          jobdes: "",
          positionlvl: "",
          salary: "",
          yearsofexp: "",
          reqeduc: "",
          loc: "",
          dateCreated: "",
          chosenInterests: "",
          company: "",
          noofempl: "",
          isactive: "",
          creator: "",
          likes: 0,
          views: 0,
          classification: "",
          subclassification: "",
          hours: "",
        };
      } catch (error) {
        console.error("Error registering jobpost:", error);
      }
    },
  },
});