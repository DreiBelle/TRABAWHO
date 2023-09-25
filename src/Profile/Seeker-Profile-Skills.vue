<template>
  <IonCard class="Seeker-Profile-Experience-Card">
    <IonGrid style="padding: 0; height: 100%;">
      <IonRow style="height: 100%;">
        <IonCol size="2" class="Seeker-Profile-FlexCenter">
          <IonIcon size="small" :icon="flagOutline"></IonIcon>
        </IonCol>
        <IonCol class="Seeker-Profile-FlexCenter" style="justify-content: left;">
          eto yung skills tas clickable dn
        </IonCol>
        <IonCol size="2" class="Seeker-Profile-FlexCenter">
          <IonIcon size="small" :icon="chevronForwardOutline"></IonIcon>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonCard>

  <IonButton fill="outline" class="Seeker-Profile-AddButton">
    <IonIcon :icon="add"></IonIcon>
  </IonButton>
</template>
<script lang="ts">
import { IonContent, IonCard, IonGrid, IonRow, IonCol, IonIcon, IonButton } from "@ionic/vue";
import "./Seeker-Profile.css";
import { add, flagOutline, chevronForwardOutline } from "ionicons/icons"


export default {
  components: {
    IonContent, IonCard, IonGrid, IonRow, IonCol, IonIcon, IonButton
  }, setup() {
    return {
      add, flagOutline, chevronForwardOutline
    }
  }
};
</script>
  