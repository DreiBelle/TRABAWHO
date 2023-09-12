<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>
      <IonTabBar slot="bottom">

        <!-- change this button later -->
        <IonTabButton class="NavBar-Buttons" tab="Logout" href="/home">
          <IonIcon :icon="logOutOutline"></IonIcon>
          <IonLabel>Logout</IonLabel>
        </IonTabButton>

        <IonTabButton class="NavBar-Buttons" tab="Message" href="/Seeker-Message">
          <IonIcon :icon="chatbubblesOutline"></IonIcon>
          <IonLabel>Message</IonLabel>
        </IonTabButton>

        <IonTabButton class="NavBar-Buttons" tab="Home" href="/Swipe">
          <IonIcon :icon="homeOutline"></IonIcon>
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton class="NavBar-Buttons" tab="Notification">
          <IonIcon :icon="notificationsOutline"></IonIcon>
          <IonLabel>Notification</IonLabel>
        </IonTabButton>

        <IonTabButton class="NavBar-Buttons" tab="Profile" href="/Seeker-Profile">
          <IonIcon :icon="personOutline"></IonIcon>
          <IonLabel>Profile</IonLabel>
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>

<script lang="ts">
import {
  IonButton,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
  IonPage,
  IonContent,
  IonCard,
  IonTabs,
  IonTabBar,
  IonRouterOutlet,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/vue";
import { GoSwipe, GoMessage, GoProfile } from "./NavBar-Controller";
import "./NavBar.css";
import { chatbubblesOutline, homeOutline, notificationsOutline, logOutOutline, personOutline } from "ionicons/icons";

export default {
  components: {
    IonButton,
    IonFooter,
    IonGrid,
    IonRow,
    IonCol,
    IonToolbar,
    IonPage,
    IonContent,
    IonCard,
    IonTabs,
    IonTabBar,
    IonRouterOutlet,
    IonTabButton,
    IonIcon,
    IonLabel,
  },
  setup() {
    return { chatbubblesOutline, homeOutline, notificationsOutline, logOutOutline, personOutline };
  },
};
</script>

<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
