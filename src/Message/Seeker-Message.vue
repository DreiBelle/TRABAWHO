<template>
  <IonPage>
    <IonHeader class="SeekerMessage-Header">
      <IonGrid style="height: 100%; padding: 0;">
        <IonRow style="height: 100%">
          <IonCol class="SeekerMessage-FlexCenter" size="1.5"> 
            <IonIcon size="medium" :icon="settingsOutline"></IonIcon>
          </IonCol>
          <IonCol class="SeekerMessage-FlexCenter"> </IonCol>
          <IonCol class="SeekerMessage-FlexCenter" size="1.5">
            <IonIcon :icon="optionsOutline"></IonIcon>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>

    <IonGrid class="SeekerMessage-IonGrid">
      <IonRow style="height: 100%">
        <IonCol>
          <IonItem @click="gotoMessage" style="border-radius: 10px">
            <IonGrid>
              <IonRow>
                <IonCol size="3"> picture </IonCol>
                <IonCol>
                  <IonRow>
                    <IonCol> Name </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> current message </IonCol>
                  </IonRow>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonPage>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonIcon,
  IonHeader,
} from "@ionic/vue";
import Navbar from "../NavBar/NavBar.vue";
import "./Seeker-Message.css";
import { gotoMessage } from "./Message-Controller";
import { settingsOutline, optionsOutline } from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonContent,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    Navbar,
    IonIcon,
    IonHeader,
  },
  data(){
    return{ settingsOutline, optionsOutline}
  },
  methods: {
    gotoMessage,
  },
};
</script>

<style>
ion-col {
  border: 1px solid black;
}
</style>
