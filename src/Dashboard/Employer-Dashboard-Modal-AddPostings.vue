<template>
  <IonGrid style="height: 100%; width: 100%; background-color: #f3f2ee;">
    <IonRow style="height: 12%">
      <IonCol size="1" class="Dashboard-FlexCenter"></IonCol>
      <IonCol size="10" class="Dashboard-FlexCenter"> Add Job Posting </IonCol>
      <IonCol size="1" class="Dashboard-FlexCenter">
        <IonButton
          @click="closeOther"
          class="Dashboard-Modal-Button-Cancel"
          fill="clear"
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
    <IonRow style="height: 11%; overflow-x: auto; background-color: white;  ">
      <IonCol size="3"
        class="Dashboard-FlexCenter"
        style="justify-content: left !important;"
        ><IonButton
          @click="openModal"
          class="Dashboard-Modal-Button-SameColor"
          fill="outline"
          >ADD FILTER</IonButton
        >
      </IonCol>
      <IonCol
        v-for="choice in chosenChoices"
        :key="choice.id"
        style="padding: 0px; background-color: white;"
        class="Dashboard-FlexCenter"
      >
        <IonButton
          class="JobPostings-ChosenInterest"
          fill="outline"
          size="small"
          @click="removeChoice(choice.id)"
        >
          {{ choice.label }}
        </IonButton>
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

  <IonModal :is-open="modalOpen" @did-dismiss="closeModal">
    <ChoiceModal
      :choice="modalChoices"
      @choice-selected="handleChoiceSelected"
    />
  </IonModal>
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
  IonPage,
  IonContent,
  IonModal,
} from "@ionic/vue";
import ChoiceModal from "@/SignUp/Seeker-InterestModal.vue";

export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonInput,
    IonButton,
    IonPage,
    IonContent,
    IonModal,
    ChoiceModal,
  },
  data() {
    return {
      modalOpen: false,
      modalChoices: [],
      chosenChoices: [],
    };
  },
  methods: {
    closeOther() {
      modalController.dismiss();
    },
    removeChoice(choiceId) {
      this.chosenChoices = this.chosenChoices.filter(
        (choice) => choice.id !== choiceId
      );
    },
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    handleChoiceSelected(choice) {
      this.chosenChoices.push(choice);
      this.modalOpen = false;
    },
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
