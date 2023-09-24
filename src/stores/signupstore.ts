// stores/signupstore.ts
import { defineStore } from "pinia";
import { db } from "@/firebaseDB"; // Import your Firebase Firestore instance
import { addDoc, collection } from "firebase/firestore";

import { SignupModel } from "@/SignUp/Seeker-Model";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    formData: {
      firstName: "",
      middleName: "",
      lastName: "",
      suffix: "",
      email: "",
      password: "",
      acceptTerms: false,
      elementary: "",
      juniorhigh: "",
      seniorhigh: "",
      college: "",
      othereduc: "",
      workexp: "",
      dateCreated: "",
      chosenInterests: [], // Add this property
      type: "",
    },
  }),
  actions: {
    setFormData(data: SignupModel) {
      this.formData = { ...data };
      delete this.formData.password;
    },
    setChosenInterests(interests) {
      this.formData.chosenInterests = interests;
    },
    getChosenInterests() {
      return this.formData.chosenInterests;
    },
    setGoogle(email, firstName) {
      this.formData.email = email;
      this.formData.firstName = firstName;
    },
    
    async registerUser() {

      // Set the current date as the dateCreated
      this.formData.dateCreated = new Date().toISOString();
      this.formData.type = "jobseeker";
      this.formData.acceptTerms = true;

      try {
        const usersCollection = collection(db, "users"); // "users" is the name of the Firestore collection
        await addDoc(usersCollection, this.formData);
        console.log("User registered successfully!");
        // Reset the form data after registration if needed
        this.formData = {
          firstName: "",
          middleName: "",
          lastName: "",
          suffix: "",
          email: "",
          password: "",
          elementary: "",
          juniorhigh: "",
          seniorhigh: "",
          college: "",
          othereduc: "",
          workexp: "",
          dateCreated: "",
          chosenInterests: [],
          type: "",
        };
      } catch (error) {
        console.error("Error registering user:", error);
      }
    },
  },
});