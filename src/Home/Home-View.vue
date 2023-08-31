<template>
  <IonPage>
    <IonContent>
      <div class="HomeJobSeekerBackground" name="centercontents">
        <IonGrid>
          <IonRow>
            <IonCol class="Home-FlexCenter">
              <img
                class="Home-Logo"
                src="../assets/logosample.jpg"
                alt="logo"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="Home-FlexCenter">
              <IonButton
                class="HomeJobSeekerButtonActions"
                fill="outline"
                @click="Login"
                style="margin-top: 100px"
              >
                Login
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="Home-FlexCenter">
              <IonButton
                class="HomeJobSeekerButtonActions"
                fill="outline"
                @click="Register"
              >
                Register
              </IonButton>
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
  IonImg,
} from "@ionic/vue";
import "./Home.css";
import { GoEmployer, GoRegister, GoLogin, GoLoginComputer } from "./Home-Controller";
</script>

<script lang="ts">
function Register() {
  if (window.innerWidth <= 768) {
    GoRegister();
  } else {
    GoEmployer();
  }
}

function Login() {
  if (window.innerWidth <= 768) {
    GoLogin();
  } else {
    GoLoginComputer();
  }
}

console.log("hello po");
</script>

<style lang=""></style>
