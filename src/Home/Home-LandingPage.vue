<template>
  <IonPage style="background: linear-gradient(to bottom right, white, #a6aad4); color: black;">
    <HomeBar />
    <div style="height: 100%;">
      <IonGrid style="height: 100%; width: 100%; padding: 0">
        <IonRow style="height: 100%">
          <IonCol class="flexcenter" size="5.5">
            <div class="landingpage-maintitle-container">
              <div style="padding-left: 40px; padding-right: 40px">
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <div class="landingpage-text-subtitle">
                        A Job Posting and Matching Application
                      </div>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <div class="landingpage-text-maintitle">TRABAWHO</div>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <div class="landingpage-text-description">
                        Post jobs and connect with candidates smoothly. Your
                        next perfect hire is just a click away. Start your
                        journey now!
                      </div>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonButton
                        @click="GoLoginComputer"
                        fill="outline"
                        expand="block"
                        class="landingpage-buttons"
                      >
                        LOG IN
                      </IonButton>
                    </IonCol>
                    <IonCol>
                      <IonButton
                        @click="GoEmployer"
                        style="--background: #262c5c; color: white"
                        expand="block"
                        class="landingpage-buttons"
                      >
                        SIGN UP
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </div>
          </IonCol>
          <IonCol> </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  </IonPage>
</template>
<script lang="ts">
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/vue";
import "./Home.css";
import { GoEmployer, GoLoginComputer } from "./Home-Controller";
import HomeBar from "../Home/Home-TopBar.vue";
import {
  logoFacebook,
  informationCircleOutline,
  logoTwitter,
} from "ionicons/icons";
export default {
  components: {
    HomeBar,
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    IonContent,
    IonIcon,
    IonText,
    IonButton,
    IonAvatar,
    IonHeader,
  },
  setup() {
    return {
      logoFacebook,
      informationCircleOutline,
      logoTwitter,
      GoEmployer,
      GoLoginComputer,
    };
  },
  methods: {},
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
