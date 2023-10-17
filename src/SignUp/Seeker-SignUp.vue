<template>
  <IonPage class="signup-ionpage">
    <IonGrid class="signup-grid">
      <IonRow style="height: 100%;">
        <IonCol class="flexcenter">
          <IonGrid>
            <IonRow>
              <IonCol class="flexcenter">
                <IonText class="signup-title-mobile">
                  Sign Up
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput placeholder="Full Name" fill="outline" labelPlacement="stacked" label="Username"
                  class="signup-inputs-mobile" v-model="formData.fullname" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput placeholder="Valid Email" fill="outline" labelPlacement="stacked" label="Email"
                  class="signup-inputs-mobile" v-model="formData.email" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput placeholder="Password" type="password" fill="outline" labelPlacement="stacked" label="Password"
                  class="signup-inputs-mobile" v-model="formData.password" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCheckbox style="margin-left: 5px;" v-model="formData.acceptTerms"></IonCheckbox>
                <IonText class="signup-text-terms">
                  I have read and accept the
                  <a href="/TermsandConditions" style="color: #262c5c;"> terms and conditions</a>
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <div class="flexcenter">
                  <IonButton @click="submitForm" class="signup-button-email-mobile">
                    Continue
                  </IonButton>
                </div>
                <div class="flexcenter">
                  <IonText class="signup-text-alreadyhave">
                    Already have an account? <a @click="goLogin()" style="color: #262c5c;">Login</a> | <a
                      @click="GoHome()" style="color: red;">Cancel</a>
                  </IonText>
                </div>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol style="border-bottom: 1px solid black; margin-bottom: 11px"></IonCol>
              <IonCol class="flexcenter" size="2" style="font-size: 12px">OR</IonCol>
              <IonCol style="border-bottom: 1px solid black; margin-bottom: 11px"></IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonButton @click="signInWithGoogle()" class="signup-button-google">
                  <IonIcon :icon="logoGoogle"> </IonIcon>
                  <IonText style="padding-left: 5px;">
                    Google
                  </IonText>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonPage>
</template>

<script lang="ts">
import {
  IonCheckbox,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonText,
  IonProgressBar,
  IonButton,
  IonIcon,
  IonContent,
} from "@ionic/vue";
import "./SignUp.css";
import { GoRegister2, goBack, goTermsandCondition, goLogin } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore";
import { Firestore } from "firebase/firestore";
import { checkifregisteredgoogle } from "./Seeker-Model";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebaseDB';
import { GoSwipe, GoHome, } from "@/NavBar/NavBar-Controller";
import { logoGoogle } from "ionicons/icons";

export default {
  components: {
    IonCheckbox,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonText,
    IonProgressBar,
    IonButton,
    IonIcon,
    IonContent
  },
  setup() {
    const signupStore = useSignupStore();
    const formData = {
      fullname: "",
      email: "",
      password: "",
      acceptTerms: false,
      elementary: "",
      juniorhigh: "",
      seniorhigh: "",
      college: "",
      masteral: "",
      hours: "",
      yearsofexp: "",
      jobtype: "",
      salary: "",
      loc: "",
      dateCreated: "",
      // chosenInterest: [],
      type: "",

    };

    const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const email = user.email;
        const name = user.displayName;
        const isRegistered = await checkifregisteredgoogle(email);

        if (isRegistered) { // checks if google already signed in
          localStorage.setItem("email", email);
          GoSwipe();
        } else {
          // Email is not registered, proceed with registration.
          signupStore.setGoogle(email, name);
          await signupStore.registerUser();
          localStorage.setItem("email", email);
          GoSwipe();
        }
      } catch (error) {
        console.error('Google Sign-In Error:', error);
        alert(error);
      }
    };

    const submitForm = async () => {
      const requiredFields = ['fullname', 'email', 'password'];
      let isFormValid = true;

      for (const field of requiredFields) {
        if (!formData[field]) {
          isFormValid = false;
          alert(`Please fill in the ${field} field.`);
          break;
        }
      }
      if (!isFormValid) {
        alert("Fill in all the required fields to continue.");
        return;
      }
      if (!formData.acceptTerms) {
        isFormValid = false;
        alert("Accept the terms and conditions to continue.");
      }

      if (isFormValid) {
        try {
          const credential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
          console.log(credential.user);
          signupStore.setFormData(formData);
          GoRegister2();
        } catch (error) {
          alert(error.message);
        }
      }
      else {
        alert("Fill all the Field to continue")
      }
    }

    return {
      signInWithGoogle,
      submitForm,
      logoGoogle,
      formData,
    }
  },
  methods: {
    GoHome,
    goLogin,
    GoRegister2,
  }
}
</script>

<!-- <style>
ion-col {
  border: 1px solid black;
}
</style> -->
