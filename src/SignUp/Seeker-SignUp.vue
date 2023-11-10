<template>
  <IonPage class="signup-ionpage">
    <!-- <IonContent style="--background: none;"> -->
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
                  <IonInput mode="md" type="text" placeholder="FirstName/MiddleName/LastName" fill="outline"
                    labelPlacement="stacked" label="Full Name" class="signup-inputs-mobile" v-model="formData.fullname"
                    required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="email" placeholder="Valid Email Address" fill="outline" labelPlacement="stacked"
                  label="Email" class="signup-inputs-mobile" v-model="formData.email" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" placeholder="Password" type="password" fill="outline" labelPlacement="stacked"
                    label="Password" class="signup-inputs-mobile" v-model="formData.password" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonCheckbox style="margin-left: 5px;" v-model="formData.acceptTerms"></IonCheckbox>
                  <IonText class="signup-text-terms">
                    I have read and accept the
                    <a @click="modalTerms(true)" style="color: #262c5c;"> terms and conditions</a>
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
    <!-- </IonContent> -->
    <terms :is-termsmodal="isTerms" @close-terms-modal="modalTerms(false)"></terms>

    <IonAlert mode="ios" :is-open="isAlert" header="Alert" :message=alertMessage :buttons="alertButtons"
      @didDismiss="alertbox(false, '')"></IonAlert>
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
  IonSelect,
  IonSelectOption,
  IonModal,
  IonAlert,
} from "@ionic/vue";
import "./SignUp.css";
import terms from './Seeker-Terms.vue'
import { GoBasic, GoRegister2, goBack, goTermsandCondition, goLogin } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore";
import { Firestore } from "firebase/firestore";
import { checkifregisteredgoogle } from "./Seeker-Model";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseDB';
import { GoSwipe, GoHome, } from "@/NavBar/NavBar-Controller";
import { logoGoogle } from "ionicons/icons";
import { ref } from 'vue';
import { checkgoogle, UserLogin, updatePassword } from "@/Login/Login-Model";

export default {
  components: {
    terms,
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
    IonSelect,
    IonSelectOption,
    IonModal,
    IonAlert
  },
  data() {
    return {
      isTerms: false,
    }
  },
  setup() {
    const alertButtons = ['OK'];
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
      higheduc: "",
      yearsofexp: "",
      jobtype: "",
      salary: "",
      loc: "",
      dateCreated: "",
      // chosenInterest: [],
      type: "",
      bday: "",
      contactno: "",
      gender: "",
      province: "",
      citown: "",
      district: "",
      street: "",
      pic: "",
      classification: "",
      subclassification: "",

    };

    const isAlert = ref(false);
    const alertMessage = ref('');

    const alertbox = (x, message) => {
      isAlert.value = x;
      alertMessage.value = message;
    }

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
          signupStore.setjobswipe({ jobdid: "" });
          await signupStore.registerUser();
          localStorage.setItem("email", email);
          GoSwipe();
        }
      } catch (error) {
        // console.error('Google Sign-In Error:', error);
        alertbox(true, error)
      }
    };

    const submitForm = async () => {
      const requiredFields = ['fullname', 'email', 'password'];
      let isFormValid = true;

      for (const field of requiredFields) {
        if (!formData[field]) {
          isFormValid = false;
          alertbox(true, `Please fill in the ${field} field.`)
          break;
        }
      }
      if (!isFormValid) {
        alertbox(true, `Fill in all the required fields to continue.`)
        return;
      }
      if (!formData.acceptTerms) {
        isFormValid = false;
        alertbox(true, `Accept the terms and conditions to continue.`)
      }

      if (isFormValid) {
        try {
          const credential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
          console.log(credential.user);
          signupStore.setFormData(formData);
          GoBasic();
        } catch (error) {
          alertbox(true, error.message)

        }
      }
      else {
        alertbox(true, `Fill all the Field to continue`)

      }
    }

    return {
      signInWithGoogle,
      submitForm,
      logoGoogle,
      formData,
      alertButtons,
      isAlert, alertMessage,
      alertbox,
    }
  },
  methods: {
    GoHome,
    goLogin,
    GoRegister2,
    modalTerms(x) {
      this.isTerms = x;
      this.formData.acceptTerms = true;
    }
  }
}
</script>

<!-- <style>
ion-col {
  border: 1px solid black;
}
</style> -->
