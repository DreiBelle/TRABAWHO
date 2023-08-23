<template>
  <IonPage>
    <IonContent>
      <div class="SignUpBackground" name="centercontents">
        <IonCard class="SignUpJobSeeker-ioncard">
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <IonButton
                  class="SignUpJobSeeker-Back"
                  @click="goBack"
                  fill="clear"
                >
                  back
                </IonButton>
              </IonCol>
              <IonCol size="6" class="SignUpJobSeeker-FlexCenter">
                <IonText style="font-size: 25px"> INTEREST </IonText>
              </IonCol>
              <IonCol size="3">
                <IonButton
                  class="SignUpJobSeeker-AddInterest"
                  @click="openModal"
                  fill="outline"
                >
                  +
                </IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonRow>
                  <IonCol
                    v-for="choice in chosenChoices"
                    :key="choice.id"
                    style="padding: 0px"
                  >
                    <IonButton
                      class="SignUpJobSeeker-ChosenInterest"
                      fill="outline"
                      size="small"
                      @click="removeChoice(choice.id)"
                    >
                      {{ choice.label }}
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </div>

      <IonModal :is-open="modalOpen" @did-dismiss="closeModal">
        <ChoiceModal
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
  IonText,
  IonCard,
  IonModal,
} from "@ionic/vue";
import "./SignUp.css";
import { goBack } from "./SignUp-Controller";
</script>

<script lang="ts">
import ChoiceModal from "./InterestModal-View.vue";

export default {
  data() {
    return {
      modalOpen: false,
      modalChoices: [],
      chosenChoices: [],
    };
  },
  methods: {
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
