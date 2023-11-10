// stores/signupstore2.ts
import { defineStore } from "pinia";
import { db } from "@/firebaseDB"; // Import your Firebase Firestore instance
import { addDoc, collection } from "firebase/firestore";

export const useview = defineStore("views", {
  state: () => ({
    formData: {
      creator: "",
      job: "",
      swiper: "",
      dateCreated: "",
    },
  }),
  actions: {
    setFormData(data) {
      this.formData = { ...data };
    },
    async registerview() {

      // Set the current date as the dateCreated
      this.formData.dateCreated = new Date().toISOString()

      try {
        const viewsCollection = collection(db, "views");
        await addDoc(viewsCollection, this.formData);
        console.log("view added succesfully");
        // Reset the form data after registration if needed
        this.formData = {
            creator: "",
            job: "",
            swiper: "",
            dateCreated: "",
        };
      } catch (error) {
        console.error("Error registering view:", error);
      }
    },
  },
});
