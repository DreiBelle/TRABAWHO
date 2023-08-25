<template>
    <IonFooter>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonButton @click="GoMessage" expand="block"> Message </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton @click="GoSwipe" expand="block"> Home </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton @click="GoProfile" expand="block"> Profile </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonFooter>
</template>
<script setup lang="ts">
import {
  IonButton,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
  IonPage,
  IonContent,
} from "@ionic/vue";
import { GoSwipe, GoMessage, GoProfile } from "./NavBar-Controller";
</script>
