<template>
  <IonPage>
    <IonContent>
      <div class="SignUpBackground" name="centercontents">
        <IonCard class="SignUpEmployer-IonCard">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton class="SignUpJobSeeker-Back" @click="goBack" fill="clear">
                  back
                </IonButton>
              </IonCol>
              <IonCol size="6" class="SignUpJobSeeker-FlexCenter">
                <IonText style="font-size: 25px"> REGISTER </IonText>
              </IonCol>
              <IonCol> </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Email" labelPlacement="floating"
                  placeholder="Enter valid email address" type="email" v-model="formData.email" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Contact Person Name" labelPlacement="floating"
                  placeholder="Enter Full Name" v-model="formData.contactpn" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Contact Number" labelPlacement="floating"
                  placeholder="Enter Contact Number" v-model="formData.number" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Registered Business Name" labelPlacement="floating"
                  placeholder="Enter Business Name" v-model="formData.businessname" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Password" labelPlacement="floating"
                  placeholder="Enter Password" type="password" v-model="formData.password" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol style="text-align: right" size="2">
                <IonCheckbox v-model="formData.acceptTerms"></IonCheckbox>
              </IonCol>
              <IonCol style="text-align: left" size="10">
                <IonText>
                  I have read and accept the
                  <a href="/TermsandConditionsEmployer">
                    terms and conditions</a>
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton class="SignUpButtonActions" expand="block" fill="outline" @click="signInWithGoogle"
                  style="color: black; --border-color: black">
                  Or Signin With Google?
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton class="SignUpButtonActions" expand="block" fill="outline" @click="submitForm"
                  style="color: black; --border-color: black">
                  Continue
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </div>
    </IonContent>
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
      // Email is already registered, show a message or handle it as needed.
      GoEmployerDashboard();
    } else {
      // Email is not registered, proceed with registration.
      signupStore2.setGoogle(email, name);
      await signupStore2.registerUser();
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
