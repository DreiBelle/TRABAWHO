<template>
  <IonPage>
    <IonContent>
      <div class="LoginBackground" name="centercontents">
        <IonCard class="LogIn-Card">
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
                  type="password"
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
                  class="LogInButtonActions"
                  expand="block"
                  @click="handleUserLogin"
                >
                  Login
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol style="text-align: center">
                <IonText class="LogIn-SignUpCancel"
                  >Don't have an account?</IonText
                >
                <a
                  class="LogIn-SignUpCancel"
                  style="color: lightblue"
                  @click="GoEmployer"
                  >Sign Up</a
                >
                <IonText>|</IonText>
                <a class="LogIn-SignUpCancel" style="color: red" @click="GoHome"
                  >Cancel</a
                >
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
