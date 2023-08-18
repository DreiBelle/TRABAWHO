<template>
  <IonPage>
    <IonContent>
      <div
        class="LoginBackground"
        name="centercontents"
        style="
          justify-content: center;
          align-items: center;
          display: flex;
          height: 100vh;
        "
      >
        <IonGrid>
          <IonRow>
            <IonCol
              style="
                align-items: center;
                justify-content: center;
                display: flex;
              "
            >
              <img
                style="
                  border-radius: 30px;
                  height: auto;
                  width: 100px;
                  border: 2px solid black;
                "
                src="../assets/logosample.jpg"
                alt="logo"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol style="display: flex; justify-content: center; align-items: center;">
              <IonInput
                class="text"
                label="Username"
                labelPlacement="floating"
                placeholder="Enter Username"
                required
                style="margin-top: 30px;
                border-bottom: 1px solid black;
                width: 90vw;"
              >
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol style="display: flex; justify-content: center; align-items: center;">
              <IonInput
                class="text"
                label="Password"
                labelPlacement="floating"
                placeholder="Enter Password"
                required
                style="margin-top: 10px;
                 border-bottom: 1px solid black;
                 width: 90vw;"
              >
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                fill="outline"
                class="LoginJobSeekerButtonLogin"
                expand="block"
                style="color: black; --border-color: black; margin-top: 30px;"
              >
                Login
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol style="text-align: center; margin-top: -15px;">
              <IonText>Don't have an account?</IonText>
              <IonButton
                fill="clear"
                style="
                  font-size: 15px;
                  margin-top: -5px;
                  margin-left: -5px;
                  margin-left: -5px;
                  color: lightblue;
                "
                @click="GoRegister"
                >Sign Up</IonButton
              >
              <IonText>|</IonText>
              <IonButton
                fill="clear"
                style="
                  font-size: 15px;
                  color: red;
                  margin-top: -5px;
                  margin-left: -5px;
                "
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
import {GoRegister, GoHome} from "./Login-Controller"
</script>

<style lang=""></style>
