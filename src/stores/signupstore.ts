// stores/signupstore.ts
import { defineStore } from "pinia";
import { db } from "@/firebaseDB"; // Import your Firebase Firestore instance
import { addDoc, collection } from "firebase/firestore";

import { SignupModel } from "@/SignUp/Seeker-Model";

export const useSignupStore = defineStore("signup", {
  state: () => ({
    formData: {
      fullname: "",
      email: "",
      password: "",
      acceptTerms: false,
      elementary: "",
      juniorhigh: "",
      seniorhigh: "",
      college: "",
      masteral: "",
      higheduc: "",
      yearsofexp: "",
      jobtype: "",
      salary: "",
      loc: "",
      dateCreated: "",
      chosenInterests: [],
      type: "",
      swiperjob: [],
      bday: "",
      contactno: "",
      gender: "",
      province: "",
      citown: "",
      district: "",
      street: "",
      pic: "",
      classification: [],
      subclassification: [],
      aprooved: null,
      pwd: "",
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
    setjobswipe(data) {
      this.formData.swiperjob = data;
    },

    async registerUser() {

      // Set the current date as the dateCreated
      this.formData.dateCreated = new Date().toISOString();
      this.formData.type = "jobseeker";
      this.formData.acceptTerms = true;
      this.formData.aprooved = true;

      try {
        const usersCollection = collection(db, "users");
        await addDoc(usersCollection, this.formData);
        console.log("User registered successfully!");
        // Reset the form data after registration if needed
        this.formData = {
          fullname: "",
          email: "",
          password: "",
          elementary: "",
          juniorhigh: "",
          seniorhigh: "",
          college: "",
          masteral: "",
          higheduc: "",
          yearsofexp: "",
          jobtype: "",
          salary: "",
          loc: "",
          dateCreated: "",
          chosenInterests: [],
          type: "",
          swiperjob: [],
          age: "",
          dateofb: "",
          address: "",
          bday: "",
          contactno: "",
          gender: "",
          province: "",
          citown: "",
          district: "",
          street: "",
          pic: "",
          classification: [],
          subclassification: [],
          pwd: "",
        };
      } catch (error) {
        console.error("Error registering user:", error);
      }
    },
  },
});