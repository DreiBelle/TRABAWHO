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
                  labelPlacement="stacked" class="signup-inputs-mobile" v-model="formData.fullname" required>
                  <div slot="label">Full Name <ion-text color="danger">*</ion-text></div>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput mode="md" type="email" placeholder="Valid Email Address" fill="outline" labelPlacement="stacked"
                  class="signup-inputs-mobile" v-model="formData.email" required>
                  <div slot="label">Email <ion-text color="danger">*</ion-text></div>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput mode="md" placeholder="Password" :type="showPassword ? 'text' : 'password'" fill="outline" labelPlacement="stacked"
                  class="signup-inputs-mobile" v-model="check"  @input="checkpass" required>
                  <div slot="label">Password <ion-text color="danger">*</ion-text></div>
                      <ion-button class="seepass" fill="clear" slot="end" @click="togglePasswordVisibility">
                        <ion-icon :icon="showPassword ? eyeOffOutline : eyeOutline"></ion-icon>
                      </ion-button>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow v-if="check">
              <IonCol class="flexcenter">
                <IonText :style="{ color: passwordColor }">
                  Password: {{ valid }}
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCheckbox class="signup-text-terms" style="margin-left: 5px;" v-model="formData.acceptTerms"></IonCheckbox>
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
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../firebaseDB';
import { GoSwipe, GoHome, } from "@/NavBar/NavBar-Controller";
import { logoGoogle } from "ionicons/icons";
import { ref } from 'vue';
import { checkgoogle, UserLogin, updatePassword } from "@/Login/Login-Model";
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

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
      check: null,
      valid: null,
      isAlert: false,
      alertMessage: "",
      showPassword: false,
      eyeOutline,
      eyeOffOutline,
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
      masteral: "",
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
      pwd: "",

    };
    
    return {
      logoGoogle,
      formData,
      alertButtons,
      signupStore,
    }
  },
  computed: {
    passwordColor() {
      return this.valid === 'VALID' ? 'green' : this.valid === 'NOT VALID' ? 'red' : 'black';
    },
  },
  methods: {
    togglePasswordVisibility(){
      this.showPassword = !this.showPassword;
    },
    GoHome,
    goLogin,
    GoRegister2,
    alertbox(x, message) {
      this.isAlert = x;
      this.alertMessage = message;
    },
    modalTerms(x) {
      this.isTerms = x;
      this.formData.acceptTerms = true;
    },
    async signInWithGoogle(){
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
          this.signupStore.setGoogle(email, name);
          this.signupStore.setjobswipe({ jobdid: "" });
          await this.signupStore.registerUser();
          localStorage.setItem("email", email);
          GoSwipe();
        }
      } catch (error) {
        // console.error('Google Sign-In Error:', error);
        this.alertbox(true, error)
      }
    },
    async submitForm(){
      const requiredFields = ['fullname', 'email', 'password'];
      let isFormValid = true;
      this.formData.password = this.check

      function isValidPassword(password) {
        // For example, require at least 8 characters and a mix of letters, numbers, and symbols
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_\-])[A-Za-z\d@$!%*#?&_\-]{8,}$/;

        return passwordRegex.test(password);
      }

      for (const field of requiredFields) {
        if (!this.formData[field]) {
          isFormValid = false;
          this.alertbox(true, `Please fill in the ${field} field.`)
          break;
        }
      }
      if (!isFormValid) {
        this.alertbox(true, `Fill in all the required fields to continue.`)
        return;
      }
      if (!this.formData.acceptTerms) {
        isFormValid = false;
        this.alertbox(true, `Accept the terms and conditions to continue.`)
      }

      if (isFormValid) {
        try {
          if (isValidPassword(this.formData.password)) {

            const credential = await createUserWithEmailAndPassword(auth, this.formData.email, this.formData.password);
            console.log(credential.user);

            await sendEmailVerification(credential.user);
            this.alertbox(true, 'Verification email sent');

            this.signupStore.setFormData(this.formData);
            GoBasic();
          }
          else {
            this.alertbox(true, `Invalid password. Password must require at least 8 characters and a mix of letters, numbers, and symbols.`)
          }
        } catch (error) {
          this.alertbox(true, error.message)

        }
      }
      else {
        this.alertbox(true, `Fill all the Field to continue`)

      }
    },
    checkpass(){
      function isValidPassword(password) {
        // For example, require at least 8 characters and a mix of letters, numbers, and symbols
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_\-])[A-Za-z\d@$!%*#?&_\-]{8,}$/;

        return passwordRegex.test(password);
      }
      if(isValidPassword(this.check)){
        this.valid = "VALID"
      }
      else{
        this.valid = "NOT VALID"
      }
    }
  }
}
</script>

<!-- <style>
ion-col {
  border: 1px solid black;
}
</style> -->
