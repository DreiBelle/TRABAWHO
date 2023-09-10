<template>
   <IonPage>
    <IonContent style="--background: #f3f2ee">
      <IonGrid style="height: 100%; width: 100%">
        <IonRow style="height: 7%">
          <IonCol class="SeekerMessage-FlexCenter" size="1.5">
            <IonText> back </IonText>
          </IonCol>
          <IonCol class="SeekerMessage-FlexCenter" size="1.5">
            <IonText> picture </IonText>
          </IonCol>
          <IonCol class="SeekerMessage-FlexCenter">
            <IonText> name  </IonText>
          </IonCol>
        </IonRow>
        <IonRow style="height: 85%">
          <IonCol>
            the chat
          </IonCol>
        </IonRow>
        <IonRow style="height: 8%">
          <IonCol>
            the chat
          </IonCol>
          <IonCol size="2">
            send button
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>
<script lang="ts">
import { IonGrid, IonPage, IonContent, IonRow, IonCol, IonItem, IonText } from '@ionic/vue';
import "./Seeker-Message.css"
export default {
    components: { IonPage, IonGrid, IonContent, IonCol, IonRow, IonItem, IonText}
}
</script>
<style>
    ion-col{
        border: 1px solid black
    }
</style>