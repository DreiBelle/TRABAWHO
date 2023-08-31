// stores/signupstore2.ts
import { defineStore } from "pinia";
import { db } from "@/firebaseDB"; // Import your Firebase Firestore instance
import { addDoc, collection } from "firebase/firestore";

import { SignupModel } from "@/SignUp/Employer-Model";
import { ProfileModel } from "@/Login/Login-Model";

export const UseProfileStore = defineStore("profile", {
  state: () => ({
    formData: {
        email: "",
        password: "",
    },
  }),
  actions: {
    setFormData(data: ProfileModel) {
      this.formData = { ...data };
    },
  },
});
