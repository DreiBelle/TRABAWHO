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
      noofempl: "",
      likes: 0,
      views: 0,
      bookmarks: 0,
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

      this.formData.dateCreated = new Date().toISOString();
      this.formData.likes = 0;
      this.formData.views = 0;
      this.formData.bookmarks = 0;

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
          hours: "",
          yearsofexp: "",
          reqeduc: "",
          loc: "",
          dateCreated: "",
          chosenInterests: [],
          company: "",
          noofempl: "",
          likes: 0,
          views: 0,
          bookmarks: 0,
        };
      } catch (error) {
        console.error("Error registering jobpost:", error);
      }
    },
  },
});