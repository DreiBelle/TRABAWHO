<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>
      <IonTabBar class="navbar-container" slot="bottom">
        <!-- change this button later -->
        <IonTabButton
          class="NavBar-Buttons"
          tab="Logout"
          @click="handleSignout"
        >
          <IonIcon :icon="logOut"></IonIcon>
          <IonLabel>Logout</IonLabel>
        </IonTabButton>

        <IonTabButton
          class="NavBar-Buttons"
          tab="Message"
          href="/Seeker-Message"
        >
          <IonIcon :icon="chatbubbles"></IonIcon>
          <IonLabel>Message</IonLabel>
        </IonTabButton>

        <IonTabButton class="NavBar-Buttons" tab="Home" href="/Swipe">
          <IonIcon :icon="home"></IonIcon>
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton class="NavBar-Buttons" tab="Notification">
          <IonIcon :icon="notifications"></IonIcon>
          <IonLabel>Notification</IonLabel>
        </IonTabButton>

        <IonTabButton
          class="NavBar-Buttons"
          tab="Profile"
          href="/Seeker-Profile"
        >
          <IonIcon :icon="person"></IonIcon>
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
  IonHeader,
} from "@ionic/vue";
import { GoSwipe, GoMessage, GoProfile, GoHome } from "./NavBar-Controller";
import "./NavBar.css";
import "../Swipe/Swipe.css";

import {
  chatbubbles,
  home,
  notifications,
  logOut,
  person,
  settings,
} from "ionicons/icons";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebaseDB";
import { ref, onMounted } from "vue";

const isLoggedIn = ref(false);

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
    IonHeader,
  },
  setup() {
    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          isLoggedIn.value = true;
        } else {
          isLoggedIn.value = false;
        }
      });
    });
    return { chatbubbles, home, notifications, logOut, person, settings };
  },
  methods: {
    handleSignout() {
      signOut(auth).then(() => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        GoHome();
      });
    },
  },
};
</script>

<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
