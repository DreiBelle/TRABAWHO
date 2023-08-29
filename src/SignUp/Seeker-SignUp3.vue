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
          <IonButton @click="handleSubmit">Register</IonButton>
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
import { useSignupStore } from "@/stores/signupstore"
import { ref } from "vue"; // Import the ref function
import ChoiceModal from "./Seeker-InterestModal.vue";
const signupStore = useSignupStore();
const sharedFormData = signupStore.formData;
  console.log("Page 3");
  console.log(sharedFormData.firstName);
  console.log(sharedFormData.middleName);
  console.log(sharedFormData.lastName);
  console.log(sharedFormData.suffix);
  console.log(sharedFormData.email);
  console.log(sharedFormData.password);
  console.log(sharedFormData.elementary);
  console.log(sharedFormData.juniorhigh);
  console.log(sharedFormData.seniorhigh);
  console.log(sharedFormData.college);
  console.log(sharedFormData.othereduc);
  console.log(sharedFormData.workexp);
</script>

<script lang="ts">
import { goLogin} from '@/SignUp/SignUp-Controller';
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
    async handleSubmit() {
      const signupStore = useSignupStore();
      signupStore.setChosenInterests(this.chosenChoices);
      console.log("Chosen Choices:", this.chosenChoices);
      await signupStore.registerUser(); // Register the user
      // GoHomeSwipeJobSeekers()
      goLogin()
    },
  },
};
</script>
