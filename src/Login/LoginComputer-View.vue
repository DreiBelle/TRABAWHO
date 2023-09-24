<template>
  <IonPage>
    <IonContent>
      <div class="LoginBackground" name="centercontents">
        <IonCard class="LogIn-Card">
          <IonGrid>
            <IonRow>
              <IonCol class="LogIn-FlexCenter">
                <img class="LogIn-Logo" src="../assets/logosample.jpg" alt="logo" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="LogIn-FlexCenter">
                <IonInput label="Username" labelPlacement="floating" placeholder="Enter Username" class="LogIn-Input"
                  v-model="Username" required style="margin-top: 50px">
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="LogIn-FlexCenter">
                <IonInput class="LogIn-Input" label="Password" labelPlacement="floating" type="password"
                  placeholder="Enter Password" required v-model="Password">
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="login-nopadding">
                <a class="login-button-forgotpassword" style="color: rgb(5, 94, 248)" @click="resetPassword">Forgot Password</a>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="LogIn-FlexCenter">
                <IonButton class="LogInButtonActions" expand="block" @click="handleUserLogin">
                  Login
                </IonButton>
              </IonCol>
              <IonCol size=".5" class="LogIn-FlexCenter" style="padding-top: 50px;">
                or
              </IonCol>
              <IonCol class="LogIn-FlexCenter">
                <IonButton class="LogInButtonActions" expand="block" @click="signInWithGoogle">
                  Google Signin
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol style="text-align: center">
                <IonText class="LogIn-SignUpCancel">Don't have an account?</IonText>
                <a class="LogIn-SignUpCancel" style="color: lightblue" @click="GoEmployer">Sign Up</a>
                <IonText>|</IonText>
                <a class="LogIn-SignUpCancel" style="color: red" @click="GoHome">Cancel</a>
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
} from "@ionic/vue";
import "./Login.css";
import { GoRegister, GoHome, GoEmployer, GoEmployerDashboard } from "./Login-Controller";
import { checkgoogle, UserLogin, updatePassword } from "./Login-Model";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebaseDB";
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
ion-col{
  border: 1px solid black;
}
</style>
