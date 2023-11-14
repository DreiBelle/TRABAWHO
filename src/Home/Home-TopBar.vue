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
            <IonText class="landingpage-logo-name"> TRABAWHO </IonText>
          </div>
        </IonCol>
        <IonCol size="9" style="height: 100%">
          <div
            class="flexcenter"
            style="justify-content: right; height: 100%; margin-right: 20px"
          >
            <a href="/AboutUs" style="color: white; letter-spacing: 1px; text-decoration: none;" class="aboutus-big"
              >ABOUT US</a
            >
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonHeader>
</template>
<script lang="ts">
import { IonGrid, IonRow, IonCol, IonText, IonHeader } from "@ionic/vue";
import { GoLandingPage } from "../SignUp/SignUp-Controller";
import "./Home.css";
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
