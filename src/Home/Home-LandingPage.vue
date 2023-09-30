<template>
  <IonGrid class="landingpage-contents">
    <IonRow style="height: 100%">
      <IonCol class="flexcenter" style="margin: 0">
        <IonRow>
          <IonCol class="flexcenter landingpage-text-title">
             TRABAWHO
          </IonCol>
          <IonCol class="flexcenter landingpage-text-description">
              Effortlessly discover a diverse pool of talented candidates and
              find your next ideal hire with ease.
          </IonCol>
        </IonRow>
      </IonCol>
      <IonCol>
        <IonButton>
          Login
        </IonButton>
      </IonCol>
    </IonRow>
  </IonGrid>

  <IonGrid class="landingpage-mininavbar">
    <IonRow style="height: 10%">
      <IonCol> logo </IonCol>
    </IonRow>
    <IonRow style="height: 60%">
      <IonCol> </IonCol>
    </IonRow>
    <IonRow style="height: 10%">
      <IonCol class="flexcenter">
        <IonIcon class="landingpage-icons" :icon="logoFacebook"></IonIcon>
      </IonCol>
    </IonRow>
    <IonRow style="height: 10%">
      <IonCol class="flexcenter">
        <IonIcon class="landingpage-icons" :icon="logoTwitter"></IonIcon>
      </IonCol>
    </IonRow>
    <IonRow style="height: 10%">
      <IonCol class="flexcenter">
        <IonIcon
          class="landingpage-icons"
          :icon="informationCircleOutline"
        ></IonIcon>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>
<script lang="ts">
import {
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
    IonButton
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
ion-col {
  border: 1px solid black;
}
</style>
