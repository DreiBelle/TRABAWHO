<template>
  <IonPage>
    <IonContent>
      <Navbar />
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
        eto na yung swipe swipe
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
import "./Swipe.css";
import Navbar from "../NavBar/NavBar.vue";
</script>

<style lang=""></style>
