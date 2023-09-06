<template>
  <IonGrid style="height: 100%; width: 100%">
    <IonRow style="height: 12%">
      <IonCol size="1" class="Dashboard-FlexCenter"></IonCol>
      <IonCol size="10" class="Dashboard-FlexCenter"> Add Job Posting </IonCol>
      <IonCol size="1" class="Dashboard-FlexCenter">
        <IonButton @click="closeOther" class="Dashboard-Modal-Button-Cancel" fill="clear"
          >x</IonButton
        >
      </IonCol>
    </IonRow>
    <IonRow style="height: 22%">
      <IonCol class="Dashboard-FlexCenter">
        <IonCard class="Dashboard-Modal-Picture"> + </IonCard>
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%">
      <IonCol class="Dashboard-FlexCenter">
        <IonInput
          class="Dashboard-Modal-Input"
          label="Job Name"
          labelPlacement="stacked"
          fill="outline"
        >
        </IonInput>
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%">
      <IonCol class="Dashboard-FlexCenter">
        <IonInput
          class="Dashboard-Modal-Input"
          label="Job Type"
          labelPlacement="stacked"
          fill="outline"
        ></IonInput>
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%">
      <IonCol class="Dashboard-FlexCenter">
        <IonInput
          class="Dashboard-Modal-Input"
          label="Job Description"
          labelPlacement="stacked"
          fill="outline"
        ></IonInput>
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%">
      <IonCol class="Dashboard-FlexCenter">
        <IonInput
          class="Dashboard-Modal-Input"
          label="Additional Information"
          labelPlacement="stacked"
          fill="outline"
        ></IonInput>
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%">
      <IonCol
        class="Dashboard-FlexCenter"
        style="justify-content: left !important"
        ><IonButton class="Dashboard-Modal-Button-SameColor" fill="outline"
          >ADD FILTER</IonButton
        >
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%">
      <IonCol class="Dashboard-FlexCenter">
        <IonButton
          class="Dashboard-Modal-Button-SameColor"
          fill="outline"
          style="width: 100%"
        >
          POST
        </IonButton>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>
<script lang="ts">
import {
  IonButton,
  IonCard,
  IonCol,
  IonGrid,
  IonInput,
  IonRow,
  modalController,
} from "@ionic/vue";

export default {
  components: { IonGrid, IonRow, IonCol, IonCard, IonInput, IonButton },
  methods: {
    closeOther(){
      modalController.dismiss();
    }
  },
};
</script>
<style>
ion-col {
  border: 1px solid black;
}
</style>
