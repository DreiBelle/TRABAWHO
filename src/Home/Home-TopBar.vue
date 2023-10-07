<template>
    <IonHeader class="landingpage-header">
      <IonGrid style="height: 100%; width: 100%; padding: 0">
        <IonRow style="height: 100%">
          <IonCol size="3">
            <div
              @click="GoLandingPage"
              class="flexcenter landingpage-container-logo"
              style="justify-content: left"
            >
              <img
                class="landingpage-logo"
                alt="logo"
                src="../assets/logo/whitefilllogo.png"
              />
              <IonText  class="landingpage-logo-name"> TRABAWHO </IonText>
            </div>
          </IonCol>
          <IonCol size="3"></IonCol>
          <IonCol size="1.5" class="flexcenter">
            <a class="landingpage-navigations">ABOUT</a>
          </IonCol>
          <IonCol size="1.5" class="flexcenter">
            <a class="landingpage-navigations">DEVELOPERS</a>
          </IonCol>
          <IonCol size="1.5" class="flexcenter">
            <a class="landingpage-navigations">CONTACTS</a>
          </IonCol>  
          <IonCol size="1.5" class="flexcenter">
            <a class="landingpage-navigations">TUTORIALS</a>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>
  </template>
  <script lang="ts">
  import { IonGrid, IonRow, IonCol, IonText, IonHeader } from "@ionic/vue";
  import { GoLandingPage } from "../SignUp/SignUp-Controller";
  import "./Home.css"
  export default {
    components: {
      IonGrid,
      IonRow,
      IonCol,
      IonText,
      IonHeader,
    },
    setup() {
      return {
        GoLandingPage,
      };
    },
  };
  </script>
  <style>
  /* ion-col{
    border: 1px solid black
  } */
  </style>
   