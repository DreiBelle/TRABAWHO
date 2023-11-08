<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>
      <IonTabBar class="navbar-container" slot="bottom">
        <IonTabButton class="NavBar-Buttons" tab="Logout" href="/Seeker-List">
          <IonIcon :icon="list"></IonIcon>
          <IonLabel>List</IonLabel>
        </IonTabButton>

        <IonTabButton class="NavBar-Buttons" tab="Message" href="/Seeker-Message">
          <IonIcon :icon="chatbubbles"></IonIcon>
          <IonLabel>Message</IonLabel>
        </IonTabButton>

        <IonTabButton class="NavBar-Buttons" tab="Home" href="/Swipe">
          <IonIcon :icon="home"></IonIcon>
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton class="NavBar-Buttons" tab="Notification" href="/Seeker-Notification">
          <IonIcon :icon="notifications"></IonIcon>
          <IonLabel>Notification</IonLabel>
        </IonTabButton>

        <IonTabButton class="NavBar-Buttons" tab="Profile" href="/Seeker-Profile">
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
  IonAlert,
  IonText,
} from "@ionic/vue";
import { GoSwipe, GoMessage, GoProfile, GoHome } from "./NavBar-Controller";
import "./NavBar.css";
import "../Swipe/Swipe.css";
import '../Message/Seeker-Message.css'

import {
  chatbubbles,
  home,
  notifications,
  logOut,
  person,
  settings,
  bookmark,
  list,
} from "ionicons/icons";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebaseDB";
import { ref, onMounted } from "vue";

const isLoggedIn = ref(false);

export default {
  components: {
    IonText,
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
    IonAlert,
  },
  setup() {
    const alertButtons = [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          signOut(auth).then(() => {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            GoHome();
          });
        },
      },
    ];

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          isLoggedIn.value = true;
        } else {
          isLoggedIn.value = false;
        }
      });
    });
    return { alertButtons, list, bookmark, chatbubbles, home, notifications, logOut, person, settings };
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
