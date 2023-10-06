<template>
  <IonPage style="background: linear-gradient(to bottom right, white, #a6aad4)">
    <IonGrid style="height: 100%; width: 100%">
      <IonRow style="height: 100%">
        <IonCol class="flexcenter">
          <IonGrid>
            <IonRow>
              <IonCol class="flexcenter">
                <img
                  src="../assets/logo/blacklogo.png"
                  alt="logo"
                  class="signup-logo"
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter signup-title">
                CREATE AN ACCOUNT!
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonButton
                  class="signup-button"
                  style="--background: none; color: #262c5c; margin-top: 100px"
                  fill="outline"
                  @click="signInWithGoogle"
                >
                  <IonIcon
                    style="padding-right: 10px"
                    :icon="logoGoogle"
                  ></IonIcon>
                  Continue with Google
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol
                style="border-bottom: 1px solid black; margin-bottom: 11px"
              ></IonCol>
              <IonCol class="flexcenter" size="2" style="font-size: 12px"
                >OR</IonCol
              >
              <IonCol
                style="border-bottom: 1px solid black; margin-bottom: 11px"
              ></IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonButton @click="GoSignUp()" class="signup-button">
                  <IonIcon
                    style="padding-right: 10px"
                    :icon="logoGoogle"
                  ></IonIcon>
                  Continue with Email
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
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
} from "@ionic/vue";
import "./SignUp.css";
import { logoGoogle } from "ionicons/icons";
import { GoSignUp, GoSwipe } from "../SignUp/SignUp-Controller";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { checkifregisteredgoogle } from "./Seeker-Model";
import { auth } from "../firebaseDB";
import { useSignupStore } from "@/stores/signupstore";

export default {
  components: { IonPage, IonButton, IonGrid, IonCol, IonRow, IonIcon },
  setup() {
    const signupStore = useSignupStore();

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
    return {
      logoGoogle,
      signInWithGoogle,
    };
  },
  methods: {
    GoSignUp,
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
