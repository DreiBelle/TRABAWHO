<template>
  <IonPage>
    <IonContent>
      <div class="LoginBackground" name="centercontents">
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
              <IonInput class="LogIn-Input" label="Password" labelPlacement="floating" 
                :type="showPassword ? 'text' : 'password'" placeholder="Enter Password" required v-model="Password">
              </IonInput>
              <!-- <IonButton class="TogglePasswordButton" @click="togglePasswordVisibility"></IonButton> -->
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="LogIn-FlexCenter">
              <IonButton class="LogInButtonActions" expand="block" @click="handleUserLogin">
                Login
              </IonButton>
            </IonCol>
          </IonRow>
          Or
          <IonRow>
            <IonCol class="LogIn-FlexCenter">
              <IonButton class="LogInButtonActions" expand="block" @click="signInWithGoogle">
                Continue With Google
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol style="text-align: center">
              <IonText class="LogIn-SignUpCancel">Don't have an account?</IonText>
              <a class="LogIn-SignUpCancel" style="color: lightblue" @click="GoRegister">Sign Up</a>
              <IonText>|</IonText>
              <a class="LogIn-SignUpCancel" style="color: red" @click="GoHome">Cancel</a>
            </IonCol>
          </IonRow>
        </IonGrid>
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
} from "@ionic/vue";
import "./Login.css";
import { GoRegister, GoHome, GoHomeSwipeJobSeekers } from "./Login-Controller";
import { UserLogin } from "./Login-Model";
import { checkgoogle } from "./Login-Model";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebaseDB";
</script>

<script lang="ts">
import { ref } from "vue";
const Username = ref("");
const Password = ref("");
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

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
</script>
