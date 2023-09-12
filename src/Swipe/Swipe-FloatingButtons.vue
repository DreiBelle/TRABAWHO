<template>
  <div class="Swipe-Buttons">
    <IonGrid style="width: 100%">
      <IonRow>
        <IonCol class="Swipe-FloatingButtons-Dislike">
          <IonButton fill="outline" class="Swipe-IonButton">
            <IonIcon :icon="thumbsDown"></IonIcon>
          </IonButton>
        </IonCol>
        <IonCol class="Swipe-FloatingButtons-Like">
          <IonButton fill="outline" class="Swipe-IonButton">
            <IonIcon :icon="thumbsUp"></IonIcon>
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol> </IonCol>
        <IonCol class="Swipe-FloatingButtons-Bookmark">
          <IonButton fill="outline" class="Swipe-IonButton">
            <IonIcon :icon="bookmark"></IonIcon>
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  </div>
</template>
<script lang="ts">
import {
  IonButton,
  IonCard,
  IonCol,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
} from "@ionic/vue";
import "./Swipe.css";
import { thumbsUp, thumbsDown, bookmark } from "ionicons/icons";

export default {
  components: { IonPage, IonButton, IonGrid, IonRow, IonCol, IonCard, IonIcon },
  setup() {
    return { thumbsUp, thumbsDown, bookmark };
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
