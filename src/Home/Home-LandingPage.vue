<template>
  <IonGrid class="landingpage-contents">
    <IonRow style="height: 100%">
      <IonCol class="flexcenter" style="margin: 0">
        <div>
          <IonText>
            <h1 class="landingpage-text-title">TRABAWHO</h1>
            <p class="landingpage-text-description">Effortlessly discover a diverse pool of talented candidates and
              find your next ideal hire with ease.</p>
          </IonText>
          <IonButton expand="block" fill="outline" class="landingpage-buttons-Getstarted">
            GET STARTED
          </IonButton>
        </div>
      </IonCol>
      <IonCol>
        <IonGrid style="height: 100%;">
          <IonRow style="height: 6%;">
            <IonCol size="8">

            </IonCol>
            <IonCol size="2">
              <IonButton expand="block">
                LOG IN
              </IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton expand="block" fill="outline">
                GET STARTED
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow style="height: 94%;">
            <IonCol class="flexcenter" style="justify-content: left;">
              <div class="landingpage-square landingpage-square-first">

              </div>
              <div class="landingpage-square landingpage-square-second">

              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCol>
    </IonRow>
  </IonGrid>

  <IonGrid class="landingpage-mininavbar">
    <IonRow style="height: 60px">
      <IonCol class="flexcenter">
        <img class="landingpage-logo" alt="logo" src="../assets/logo/whitefilllogo.png">
      </IonCol>
    </IonRow>
    <IonRow style="height: calc(85% - 60px)">
      <IonCol> </IonCol>
    </IonRow>
    <IonRow style="height: 5%">
      <IonCol class="flexcenter">
        <IonIcon class="landingpage-icons" :icon="logoFacebook"></IonIcon>
      </IonCol>
    </IonRow>
    <IonRow style="height: 5%">
      <IonCol class="flexcenter">
        <IonIcon class="landingpage-icons" :icon="logoTwitter"></IonIcon>
      </IonCol>
    </IonRow>
    <IonRow style="height: 5%">
      <IonCol class="flexcenter">
        <IonIcon class="landingpage-icons" :icon="informationCircleOutline"></IonIcon>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>
<script lang="ts">
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/vue";
import "./Home.css";
import {
  logoFacebook,
  informationCircleOutline,
  logoTwitter,
} from "ionicons/icons";
export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    IonContent,
    IonIcon,
    IonText,
    IonButton,
    IonAvatar
  },
  setup() {
    return {
      logoFacebook,
      informationCircleOutline,
      logoTwitter,
    };
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
