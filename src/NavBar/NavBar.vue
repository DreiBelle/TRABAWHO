<template>
  <div class="NavBar-Toolbar">
    <IonGrid>
      <IonRow>
        <IonCol size="4" class="NavBar-FlexCenter">
          <IonButton
            class="NavBar-Buttons"
            expand="block"
            router-link="/Seeker-Message"
          >
            <img class="NavBar-Icons" src="../assets/chat.png" alt="chat" />
          </IonButton>
        </IonCol>
        <IonCol size="4" class="NavBar-FlexCenter">
          <IonButton
            class="NavBar-Buttons"
            expand="block"
            router-link="/Swipe"
          >
            <img class="NavBar-Icons" src="../assets/home.png" alt="home" />
          </IonButton>
        </IonCol>
        <IonCol size="4" class="NavBar-FlexCenter">
          <IonButton
            class="NavBar-Buttons"
            expand="block"
            router-link="/Seeker-Profile"
          >
            <img class="NavBar-Icons" src="../assets/user.png" alt="profile" />
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  </div>
</template>
<script setup lang="ts">
import {
  IonButton,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
  IonPage,
  IonContent,
} from "@ionic/vue";
import { GoSwipe, GoMessage, GoProfile } from "./NavBar-Controller";
import "./NavBar.css";
</script>

<script lang="ts"></script>

<style></style>
