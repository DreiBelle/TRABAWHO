<template>
  <IonPage>
    <IonContent>
      <div class="LoginBackground" name="centercontents">
        <IonGrid>
          <IonRow>
            <IonCol class="LogIn-FlexCenter">
              <img
                class="LogIn-Logo"
                src="../assets/logosample.jpg"
                alt="logo"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="LogIn-FlexCenter">
              <IonInput
                label="Username"
                labelPlacement="floating"
                placeholder="Enter Username"
                class="LogIn-Input"
                v-model="Username"
                required
                style="margin-top: 50px"
              >
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="LogIn-FlexCenter">
              <IonInput
                class="LogIn-Input"
                label="Password"
                labelPlacement="floating"
                placeholder="Enter Password"
                required
                v-model="Password"
              >
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="LogIn-FlexCenter">
              <IonButton
                fill="outline"
                class="LogInButtonActions"
                expand="block"
                @click="handleUserLogin"
              >
                Login
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol style="text-align: center; margin-top: -15px">
              <IonText>Don't have an account?</IonText>
              <IonButton
                fill="clear"
                class="LogIn-SignUpCancel"
                style="color: lightblue"
                @click="GoRegister"
                >Sign Up</IonButton
              >
              <IonText>|</IonText>
              <IonButton
                class="LogIn-SignUpCancel"
                fill="clear"
                style="color: red"
                @click="GoHome"
                >Cancel</IonButton
              >
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
</script>

<script lang="ts">
import { ref } from "vue";

const Username = ref("");
const Password = ref("");

const handleUserLogin = () => {
  UserLogin(Username.value, Password.value);
};
</script>
