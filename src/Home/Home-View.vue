<template>
  <IonPage>
    <IonContent>
      <div
        class="HomeJobSeekerBackground"
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
                style="border-radius: 50px; height: auto; width: 150px; border: 2px solid black;"
                src="../assets/logosample.jpg"
                alt="logo"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                class="HomeJobSeekerButtonActions"
                expand="block"
                fill="outline"
                style="color: black; --border-color: black; margin-top: 100px;"
                @click="GoLogin"  
              >
                Login
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                class="HomeJobSeekerButtonActions"
                expand="block"
                fill="outline"
                style="color: black; --border-color: black"
                @click="GoRegister"  
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
import {GoRegister, GoLogin} from './Home-Controller';
</script>

<style lang=""></style>
