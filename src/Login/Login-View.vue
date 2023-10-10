<template>
  <IonPage style="background: linear-gradient(to bottom right, white, #a6aad4); color: black;">
    <IonGrid style="height: 100%; width: 100%; max-width: 350px">
      <IonRow style="height: 100%">
        <IonCol class="flexcenter">
          <IonGrid>
            <IonRow>
              <IonCol class="flexcenter">
                <img class="login-logo" src="../assets/logo/logo1.png" alt="logo" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonText class="login-title"> WELCOME BACK! </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput label="Email" labelPlacement="stacked" placeholder="Enter Email" fill="outline"
                  class="login-input" required v-model="Username" style="margin-top: 30px">
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <div>
                  <div>
                    <IonInput label="Password" labelPlacement="stacked" placeholder="Enter Password" fill="outline"
                      class="login-input" type="password" required v-model="Password">
                    </IonInput>
                  </div>
                  <div>
                    <a @click="resetPassword" class="login-a-forgotpassword">Forgot Password?</a>
                  </div>
                </div>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <div>
                  <div class="flexcenter">
                    <IonButton @click="handleUserLogin" class="login-button">
                      LOGIN
                    </IonButton>
                  </div>
                  <div class="flexcenter">
                    <IonText class="login-text-haveanccount">
                      Don't have an account?
                      <a @click="GoRegister" style="color: #262c5c">Sign up</a>
                      | <a @click="GoHome" style="color: red">Cancel</a>
                    </IonText>
                  </div>
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
                <IonAvatar @click="signInWithGoogle" fill="outline" class="flexcenter login-avatar-google">
                  <IonIcon class="login-icon-google" :icon="logoGoogle"></IonIcon>
                </IonAvatar>
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
  IonAvatar,
  IonIcon,
} from "@ionic/vue";
import "./Login.css";
import {
  GoRegister,
  GoHome,
  GoEmployer,
  GoEmployerDashboard,
} from "./Login-Controller";
import { checkgoogle, UserLogin, updatePassword } from "./Login-Model";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/firebaseDB";
logoGoogle;
</script>

<script lang="ts">
import { ref } from "vue";
import { logoGoogle } from "ionicons/icons";

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
    console.error("Google Sign-In Error:", error);
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
/* ion-col {
  border: 1px solid black;
} */
</style>
