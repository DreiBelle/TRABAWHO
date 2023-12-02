// stores/signupstore2.ts
import { defineStore } from "pinia";
import { db } from "@/firebaseDB"; // Import your Firebase Firestore instance
import { addDoc, collection } from "firebase/firestore";

export const uselike = defineStore("likes", {
  state: () => ({
    formData: {
      creator: "",
      job: "",
      swiper: "",
      name: "",
      pic: "",
      dateCreated: "",
    },
  }),
  actions: {
    setFormData(data) {
      this.formData = { ...data };
    },
    async registerlike() {

      // Set the current date as the dateCreated
      this.formData.dateCreated = new Date().toISOString()

      try {
        const likesCollection = collection(db, "likes");
        await addDoc(likesCollection, this.formData);
        console.log("like added succesfully");
        // Reset the form data after registration if needed
        this.formData = {
            creator: "",
            job: "",
            swiper: "",
            name: "",
            pic: "",
            dateCreated: "",
        };
      } catch (error) {
        console.error("Error registering like:", error);
      }
    },
  },
});
