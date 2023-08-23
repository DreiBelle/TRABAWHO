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
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <IonButton
                  style="
                    min-height: 20px;
                    min-width: 20px;
                    border-radius: 20px;
                    font-size: 14px;
                    color: black;
                  "
                  @click="goBack"
                  fill="clear"
                >
                  back
                </IonButton>
              </IonCol>
              <IonCol
                size="6"
                style="
                  align-items: center;
                  justify-content: center;
                  display: flex;
                "
              >
                <IonText style="font-size: 25px"> INTEREST </IonText>
              </IonCol>
              <IonCol size="3">
                <IonButton
                  class="SignUpButtonActions"
                  style="
                    min-height: 20px;
                    min-width: 20px;
                    border-radius: 20px;
                    color: black;
                    --border-color: black;
                  "
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
                      class="SignUpButtonActions"
                      fill="outline"
                      size="small"
                      style="
                        height: 40px;
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        color: black;
                        --border-color: black;
                      "
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
      this.chosenChoices = this.chosenChoices.filter(choice => choice.id !== choiceId);
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
