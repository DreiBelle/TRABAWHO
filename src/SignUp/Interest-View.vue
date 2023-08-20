<template>
  <IonPage>
    <IonContent>
      <div
        class="SignUpBackground"
        name="centercontents"
        style="
          justify-content: center;
          align-items: center;
          display: flex;
          height: 100vh;
        "
      >
        <IonCard
          style="width: 90vw; height: 95vh; padding: 10px; text-align: center"
        >
          <IonText style="font-size: 25px"> REGISTER </IonText>

          <IonRow>
            <IonCol>
              <IonRow>
                <IonButton
                  style="height: 40px; width: 100px"
                  @click="openModal"
                >
                  +
                </IonButton>
              </IonRow>
            </IonCol>
          </IonRow>

          <IonRow v-for="choice in chosenChoices" :key="choice.id">
            <IonCol> Chosen Choice: {{ choice.label }} </IonCol>
          </IonRow>
        </IonCard>
      </div>

      <IonModal :is-open="modalOpen" @did-dismiss="closeModal">
        <choice-modal
          :choices="modalChoices"
          @choice-selected="handleChoiceSelected"
        />
      </IonModal>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonText,
  IonCard,
  IonCheckbox,
  IonModal,
} from "@ionic/vue";
import "./SignUp.css";
</script>

<script lang="ts">
import ChoiceModal from "./InterestModal-View.vue";

export default {
  components: {
    IonModal,
    IonPage,
    IonContent,
    IonRow,
    IonCol,
    IonButton,
    ChoiceModal,
  },
  data() {
    return {
      modalOpen: false,
      modalChoices: [
        { id: 1, label: "Choice 1" },
        { id: 2, label: "Choice 2" },
        { id: 3, label: "Choice 3" },
        // Add more choices as needed
      ],
      chosenChoices: [],
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    handleChoiceSelected(choice) {
      this.chosenChoices.push(choice); // Add the choice to the chosenChoices array
      this.modalOpen = false;
    },
  },
};
</script>
