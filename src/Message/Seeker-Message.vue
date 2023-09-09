<template>
  <IonPage>
    <IonContent style="--background: #f3f2ee">
      <IonGrid style="height: 100%; width: 100%">
        <IonRow style="height: 8%">
          <IonCol class="SeekerMessage-FlexCenter" style="font-size: 20px">
            <IonText> MESSAGES </IonText>
          </IonCol>
        </IonRow>
        <IonRow style="height: 81%">
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
        <IonRow style="height: 10%">
          <IonCol style="padding: 0;">
            <Navbar />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
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
} from "@ionic/vue";
import Navbar from "../NavBar/NavBar.vue";
import "./Seeker-Message.css";
import { gotoMessage } from "./Message-Controller"

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
  },
  methods:{
    gotoMessage
  }
}
</script>

<style>
ion-col {
  border: 1px solid black;
}
</style>
