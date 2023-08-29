// stores/signupstore2.ts
import { defineStore } from "pinia";
import { db } from "@/firebaseDB"; // Import your Firebase Firestore instance
import { addDoc, collection } from "firebase/firestore";

import { SignupModel } from "@/SignUp/Employer-Model";

export const useSignupStore2 = defineStore("signup2", {
  state: () => ({
    formData: {
        email: "",
        contactpn: "",
        number: "",
        businessname: "",
        password: "",
        dateCreated: "",
        type: "",
    },
  }),
  actions: {
    setFormData(data: SignupModel) {
      this.formData = { ...data };
    },
    
    async registerUser() {

      // Set the current date as the dateCreated
      this.formData.dateCreated = new Date().toISOString();
      this.formData.type = "employer";

      try {
        const usersCollection = collection(db, "users"); // "users" is the name of the Firestore collection
        await addDoc(usersCollection, this.formData);
        console.log("User registered successfully!");
        // Reset the form data after registration if needed
        this.formData = {
            email: "",
            contactpn: "",
            number: "",
            businessname: "",
            password: "",
            dateCreated: "",
            type: "",
        };
      } catch (error) {
        console.error("Error registering user:", error);
      }
    },
  },
});
