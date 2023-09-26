<template>
  <RouterView></RouterView>
  <IonGrid class="dashboard-navbar-container">
    <IonRow>
      <IonCol
        @click="GoEmployerHome"
        class="dashboard-navbar-flexcenter dashboard-navbar-cols"
      >
        <IonIcon class="dashboard-navbar-icons" :icon="homeOutline"></IonIcon>
        <IonText class="dashboard-navbar-navigations">Home</IonText>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol
        @click="GoEmployerProfile"
        class="dashboard-navbar-flexcenter dashboard-navbar-cols"
      >
        <IonIcon class="dashboard-navbar-icons" :icon="personOutline"></IonIcon>
        <IonText class="dashboard-navbar-navigations">Profile</IonText>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol
        @click="GoEmployerJobPostings"
        class="dashboard-navbar-flexcenter dashboard-navbar-cols"
      >
        <IonIcon
          class="dashboard-navbar-icons"
          :icon="documentOutline"
        ></IonIcon>
        <IonText class="dashboard-navbar-navigations">Job Postings</IonText>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol
        @click="GoEmployerDataAnalytics"
        class="dashboard-navbar-flexcenter dashboard-navbar-cols"
      >
        <IonIcon
          class="dashboard-navbar-icons"
          :icon="analyticsOutline"
        ></IonIcon>
        <IonText class="dashboard-navbar-navigations">Data Analytics</IonText>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol
        @click="GoEmployerNotification"
        class="dashboard-navbar-flexcenter dashboard-navbar-cols"
      >
        <IonIcon
          class="dashboard-navbar-icons"
          :icon="notificationsOutline"
        ></IonIcon>
        <IonText class="dashboard-navbar-navigations">Notification</IonText>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol
        @click="GoEmployerMessage"
        class="dashboard-navbar-flexcenter dashboard-navbar-cols"
      >
        <IonIcon
          class="dashboard-navbar-icons"
          :icon="chatboxEllipsesOutline"
        ></IonIcon>
        <IonText class="dashboard-navbar-navigations">Messages</IonText>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol
        @click="GoHome"
        class="dashboard-navbar-flexcenter dashboard-navbar-cols"
        style="position: absolute; bottom: 10px"
      >
        <IonIcon class="dashboard-navbar-icons" :icon="logOutOutline"></IonIcon>
        <IonText class="dashboard-navbar-navigations">Logout</IonText>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>
<script lang="ts">
import {
  IonButton,
  IonCard,
  IonCol,
  IonGrid,
  IonPage,
  IonRow,
  IonRouterOutlet,
  IonIcon,
  IonText,
  IonSearchbar,
} from "@ionic/vue";
import {
  homeOutline,
  personOutline,
  documentOutline,
  analyticsOutline,
  notificationsOutline,
  logOutOutline,
  chatboxEllipsesOutline,
} from "ionicons/icons";
import "./Employer-Dashboard.css";
import {
  GoEmployerProfile,
  GoEmployerDataAnalytics,
  GoEmployerHome,
  GoEmployerJobPostings,
  GoEmployerNotification,
  GoEmployerMessage,
  GoHome,
} from "./Employer-Dashboard-Controller";
export default {
  components: {
    IonCol,
    IonGrid,
    IonPage,
    IonRow,
    IonRouterOutlet,
    IonIcon,
    IonText,
    IonSearchbar,
    IonCard,
  },
  setup() {
    return {
      homeOutline,
      personOutline,
      documentOutline,
      analyticsOutline,
      notificationsOutline,
      logOutOutline,
      chatboxEllipsesOutline,
      GoEmployerProfile,
      GoEmployerDataAnalytics,
      GoEmployerHome,
      GoEmployerJobPostings,
      GoEmployerNotification,
      GoEmployerMessage,
      GoHome,
    };
  },
};
</script>
<style>
/* ion-col {
    border: 1px solid black;
} */
</style>
