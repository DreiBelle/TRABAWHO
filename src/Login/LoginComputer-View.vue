<template>
  <IonPage style="background: linear-gradient(to bottom right, white, #a6aad4)">
    <HomeBar />

    <div class="flexcenter" style="height: 100%">
      <IonCard class="signup-card">
        <IonGrid style="height: 100%; width: 100%; padding: 0">
          <IonRow style="height: 100%">
            <IonCol class="flexcenter" size="5.5" style="border-right: 1px solid black">
              <IonGrid>
                <IonRow>
                  <IonCol class="flexcenter" style="font-size: 20px; color: black">
                    WELCOME BACK!
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol style="padding-top: 30px">
                    <IonInput class="signup-inputs" fill="outline" label="Email" labelPlacement="stacked"
                      placeholder="Enter Email Address" type="email" v-model="Username" required>
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol style="padding-top: 10px">
                    <IonInput class="signup-inputs" fill="outline" label="Password" labelPlacement="stacked"
                      placeholder="Enter Password" type="password" v-model="Password" required>
                    </IonInput>
                    <div class="login-a-forgotpassword">
                      <a @click="resetPassword">Forgot Password?</a>
                    </div>
                  </IonCol>
                </IonRow>
                <IonRow style="border-bottom: 1px solid black">
                  <IonCol>
                    <IonButton class="signup-buttons" expand="block" fill="outline" @click="handleUserLogin" style="
                        color: #262c5c;
                        --border-color: #262c5c;
                        padding-top: 40px;
                      ">
                      LOG-IN
                    </IonButton>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton class="signup-buttons" expand="block" @click="signInWithGoogle"
                      style="--background: #262c5c; color: white">
                      GOOGLE LOG-IN
                    </IonButton>
                    <div class="flexcenter" style="font-size: 11px; padding-left: 5px">
                      Dont have an Account?
                      <a href="/SignUpEmployer1" class="signup-a">Sign In</a> |
                      <a class="signup-a" style="color: red" href="/home">Cancel</a>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
            <IonCol size="6.5"> </IonCol>
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
} from "@ionic/vue";
import "./Login.css";
import { GoRegister, GoHome, GoEmployer, GoEmployerDashboard } from "./Login-Controller";
import { checkgoogle, UserLogin, updatePassword } from "./Login-Model";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebaseDB";
import HomeBar from "../Home/Home-TopBar.vue"
import "../SignUp/SignUp.css"
</script>

<script lang="ts">
import { ref } from "vue";
const Username = ref("");
const Password = ref("");

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const email = user.email;
    const name = user.displayName;

    checkgoogle(email);
    localStorage.setItem("email", email);

  } catch (error) {
    console.error('Google Sign-In Error:', error);
    alert(error);
  }
};

const handleUserLogin = () => {
  signInWithEmailAndPassword(auth, Username.value, Password.value)
    .then(() => {
      localStorage.setItem("email", Username.value);

      UserLogin(Username.value);

      Username.value = "";
      Password.value = "";
    })
    .catch((error) => {
      console.error(error);
      alert(error);
    });
};

const resetPassword = async () => {
  updatePassword(Username.value);
};
</script>

<style>
/* ion-col{
  border: 1px solid black;
} */
</style>
