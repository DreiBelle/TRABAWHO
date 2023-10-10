<template>
 <IonPage style="background: linear-gradient(to bottom right, white, #a6aad4)">
    <HomeBar />

    <div class="flexcenter" style="height: 100%">
      <IonCard class="signup-card">
        <IonGrid style="height: 100%; width: 100%; padding: 0">
          <IonRow style="height: 100%">
            <IonCol size="5.5" style="border-right: 1px solid black">
              <IonGrid>
                <IonRow>
                  <IonCol style="color: black">
                    <div class="flexcenter">Start Creating an Accounts</div>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput
                      class="signup-inputs"
                      fill="outline"
                      label="Email"
                      labelPlacement="stacked"
                      placeholder="Enter valid email address"
                      type="email"
                      v-model="formData.email"
                      required
                    >
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput
                      class="signup-inputs"
                      fill="outline"
                      label="Contact Person Name"
                      labelPlacement="stacked"
                      placeholder="Enter Full Name"
                      v-model="formData.contactpn"
                      required
                    >
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput
                      fill="outline"
                      class="signup-inputs"
                      label="Contact Number"
                      labelPlacement="stacked"
                      placeholder="Enter Contact Number"
                      v-model="formData.number"
                      required
                    >
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput
                      fill="outline"
                      class="signup-inputs"
                      label="Registered Business Name"
                      labelPlacement="stacked"
                      placeholder="Enter Business Name"
                      v-model="formData.businessname"
                      required
                    >
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput
                      fill="outline"
                      class="signup-inputs"
                      label="Password"
                      labelPlacement="stacked"
                      placeholder="Enter Password"
                      type="password"
                      v-model="formData.password"
                      required
                    >
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol class="flexcenter">
                    <IonCheckbox v-model="formData.acceptTerms"></IonCheckbox>
                    <IonText class="signup-text-terms">
                      I have read and accept the
                      <a href="/TermsandConditionsEmployer">
                        terms and conditions</a
                      >
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow style="border-bottom: 1px solid black">
                  <IonCol>
                    <IonButton
                      class="signup-buttons"
                      expand="block"
                      fill="outline"
                      @click="submitForm"
                      style="color: black; --border-color: black"
                    >
                      SIGN-IN
                    </IonButton>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton
                      class="signup-buttons"
                      expand="block"
                      @click="signInWithGoogle"
                      style="--background: black; color: white"
                    >
                      GOOGLE SIGN-IN
                    </IonButton>
                    <div
                      class="flexcenter"
                      style="font-size: 11px; padding-left: 5px"
                    >
                      Already have an Account? <a href="/Logincomputer" class="signup-a">Log In</a> | <a class="signup-a" style="color: red" href="/home">Cancel</a>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
            <IonCol size="6.5"> <img class="login-logo" src="../assets/logo/logo1.png" alt="logo" /> </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    </div>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonText,
  IonCard,
  IonCheckbox,
  IonModal,
} from "@ionic/vue";
import "./SignUp.css";
import { GoRegister2, goBack, goTermsandCondition } from "./SignUp-Controller";
import { useSignupStore2 } from "@/stores/signupstore2";
import { Firestore } from "firebase/firestore";
import { checkifregisteredgoogle } from "./Employer-Model";
import router from "../router";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebaseDB';
import { GoEmployerDashboard } from "@/Login/Login-Controller";
import HomeBar from "../Home/Home-TopBar.vue"
const signupStore2 = useSignupStore2();
const formData = {
  email: "",
  contactpn: "",
  number: "",
  businessname: "",
  password: "",
  dateCreated: "",
  type: "",
  acceptTerms: false,
};
const signInWithGoogle = async() => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const email = user.email;
    const name = user.displayName;
    const isRegistered = await checkifregisteredgoogle(email);
    if (isRegistered) { // checks if google already signed in
      localStorage.setItem("email", email);
      GoEmployerDashboard();
    } else {
      // Email is not registered, proceed with registration.
      signupStore2.setGoogle(email, name);
      await signupStore2.registerUser();
      localStorage.setItem("email", email);
      GoEmployerDashboard();
    }
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    alert(error);
  }
};
const submitForm = async () => {
  const requiredFields = ['email', 'contactpn', 'number', 'businessname', 'password', 'dateCreated'];
  let isFormValid = true;

  for (const field of requiredFields) {
    if (!formData[field]) {
      isFormValid = false;
      break; // Exit the loop if any required field is empty
    }
  }
  if (formData.acceptTerms) {
    isFormValid = true;
  }
  else {
    isFormValid = false;
    alert("Accept terms and conditions")
  }

  if (isFormValid) {
    try {
      const credential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log(credential.user);
      signupStore2.setFormData(formData);
      await signupStore2.registerUser();
      router.push("/LoginComputer");
      alert("Succesfully Registered");
    } catch (error) {
      alert(error.message);
    }
  }
  else {
    alert("Fill all the Field to continue")
  }
};

</script>

<script lang="ts"></script>

<style></style>
