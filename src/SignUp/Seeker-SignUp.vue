<template>
  <!-- <IonPage>
    <IonContent>
      <div class="SignUpBackground" name="centercontents">
        <IonCard class="SignUpJobSeeker-ioncard">
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
                <IonInput class="SignUpJobSeeker-input" label="First Name" labelPlacement="floating"
                  placeholder="Enter First Name" v-model="formData.firstName" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Middle Name" labelPlacement="floating"
                  placeholder="Enter Middle Name" v-model="formData.middleName" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Last Name" labelPlacement="floating"
                  placeholder="Enter Last Name" v-model="formData.lastName" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Suffix" labelPlacement="floating"
                  placeholder="Enter Suffix" v-model="formData.suffix" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <hr style="border: 0.5px solid black" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Email" labelPlacement="floating" placeholder="Enter Email"
                  type="email" v-model="formData.email" required>
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
                  <a href="/TermsandConditions"> terms and conditions</a>
                </IonText>
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
            <IonRow>
              <IonCol>
                <IonButton class="SignUpButtonActions" expand="block" fill="outline" @click="signInWithGoogle"
                  style="color: black; --border-color: black">
                  Or Sign in With Google
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </div>
    </IonContent>
  </IonPage> -->
  <IonPage style="background: linear-gradient(to bottom right, white, #a6aad4)">
    <IonGrid style="height: 100%; width: 100%">
      <IonRow style="height: 100%">
        <IonCol class="flexcenter">
          <IonGrid>
            <IonRow>
              <IonCol class="flexcenter"> Sign Up </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonAvatar style="--background: black" >
                  <img
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    alt=""
                  /> </IonAvatar
              ></IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  labelPlacement="stacked"
                  type="email"
                  label="Email"
                  fill="outline"
                  class="signup-inputs"
                  placeholder="Enter valid email"
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  labelPlacement="stacked"
                  type="password"
                  label="Password"
                  fill="outline"
                  class="signup-inputs-mobile"
                  placeholder="Enter valid password"
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton class="signup-button"> Sign Up</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>
    </IonGrid>
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
  IonAvatar,
} from "@ionic/vue";
import "./SignUp.css";
import { GoRegister2, goBack, goTermsandCondition } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore";
import { Firestore } from "firebase/firestore";
import { checkifregisteredgoogle } from "./Seeker-Model";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseDB";
import { GoSwipe } from "@/NavBar/NavBar-Controller";

const signupStore = useSignupStore();
const formData = {
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

    if (isRegistered) {
      // checks if google already signed in
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
    console.error("Google Sign-In Error:", error);
    alert(error);
  }
};

const submitForm = async () => {
  const requiredFields = [
    "firstName",
    "middleName",
    "lastName",
    "suffix",
    "email",
    "password",
  ];
  let isFormValid = true;

  for (const field of requiredFields) {
    if (!formData[field]) {
      isFormValid = false;
      break; // Exit the loop if any required field is empty
    }
  }
  if (formData.acceptTerms) {
    isFormValid = true;
  } else {
    isFormValid = false;
    alert("Accept terms and conditions");
  }

  if (isFormValid) {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(credential.user);
      signupStore.setFormData(formData);
      GoRegister2();
    } catch (error) {
      alert(error.message);
    }
  } else {
    alert("Fill all the Field to continue");
  }
};
</script>

<script lang="ts"></script>

<style>
ion-col {
  border: 1px solid black;
}
</style>
