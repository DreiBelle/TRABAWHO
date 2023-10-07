<template>
  <!-- <IonPage>
    <IonContent>
      <div class="SignUpBackground" name="centercontents">
        <IonCard class="SignUpJobSeeker-ioncard">
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <IonButton class="SignUpJobSeeker-Back" @click="goBack" fill="clear">
                  back
                </IonButton>
              </IonCol>
              <IonCol size="6" class="SignUpJobSeeker-FlexCenter">
                <IonText style="font-size: 25px"> INTEREST </IonText>
              </IonCol>
              <IonCol size="3">
                <IonButton class="SignUpJobSeeker-AddInterest" @click="openModal" fill="outline">
                  +
                </IonButton>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonRow>
                  <IonCol v-for="choice in chosenChoices" :key="choice.id" style="padding: 0px">
                    <IonButton class="SignUpJobSeeker-ChosenInterest" fill="outline" size="small"
                      @click="removeChoice(choice.id)">
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
        <ChoiceModal :choices="modalChoices" @choice-selected="handleChoiceSelected" />
      </IonModal>

    </IonContent>
  </IonPage> -->
  <IonPage class="signup-ionpage">
    <IonContent style="--background: none">
      <IonGrid class="signup-grid">
        <IonRow style="height: 100%;">
          <IonCol class="flexcenter">
            <IonGrid style="max-width: 100%;">
              <IonRow>
                <IonCol class="flexcenter">
                  <IonIcon @click="goBack()" class="signup-back-mobile" :icon="arrowBackOutline"></IonIcon>
                  <IonText class="signup-title-mobile">
                    PREFERENCES
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput label="Preffered Hours" placeholder="Enter Preffered hours of work" label-placement="stacked"
                    fill="outline" class="signup-inputs-mobile"></IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput label="years of experience" placeholder="Enter years of experience" label-placement="stacked"
                    fill="outline" class="signup-inputs-mobile"></IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonSelect class="signup-inputs-mobile" label="Preffered Salary" label-placement="stacked"
                    interface="popover" fill="outline" placeholder="Select Preffered Salary based on skills" required>
                    <IonSelectOption value="0php - 5000php">0php - 5,000php</IonSelectOption>
                    <IonSelectOption value="6000php - 10000php">6,000php - 10,000php</IonSelectOption>
                    <IonSelectOption value="11000php - 50000php">11,000php - 50,000php</IonSelectOption>
                    <IonSelectOption value="51000php - 100000php">51,000php - 100,000php</IonSelectOption>
                    <IonSelectOption value="100000php and above">100,000php and above</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonSelect class="signup-inputs-mobile" label="Job Type" label-placement="stacked" interface="popover"
                    fill="outline" placeholder="Select Preffered Job Type" required :multiple="true">
                    <IonSelectOption value="Full Time">Full Time</IonSelectOption>
                    <IonSelectOption value="Part Time">Part Time</IonSelectOption>
                    <IonSelectOption value="Contract">Contract</IonSelectOption>
                    <IonSelectOption value="Temporary">Temporary</IonSelectOption>
                    <IonSelectOption value="Internship">Internship</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonSelect class="signup-inputs-mobile" label="Location" label-placement="stacked" interface="popover"
                    fill="outline" placeholder="Select Preffered Location" required :multiple="true">
                    <IonSelectOption value="Full Time">Work from home</IonSelectOption>
                    <IonSelectOption value="Part Time">Within the province</IonSelectOption>
                    <IonSelectOption value="Contract">Outside of the province</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow style="border-bottom: 1px solid black;">
                <IonCol>
                  <div>
                    <IonText>
                      Specialized Fields:
                    </IonText>
                  </div>
                  <div>
                    <IonChip v-for="choice in chosenChoices" :key="choice.id">
                      {{ choice.label }}
                      <IonIcon class="signup-addjobpost-icon" @click="removeChoice(choice.id)" :icon="close"></IonIcon>
                    </IonChip>
                  </div>
                  <div v-if="chosenChoices.length > 0">
                    <IonIcon @click="openModal" size="large" :icon="addCircleOutline" class="signup-addjobpost-addicon">
                    </IonIcon>
                  </div>
                  <div v-else>
                    <IonButton @click="openModal" class="signup-button-button-tags" fill="outline"
                      style="border-radius: 100%">
                      Add Specialized Fields
                    </IonButton>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton @click="GoSwipe()" class="signup-button-email-mobile"> Register </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>

  <IonModal :is-open="modalOpen" @did-dismiss="closeModal">
    <ChoiceModal style="border: 1px solid black" :choice="modalChoices" @choice-selected="handleChoiceSelected" />
  </IonModal>
</template>

<script lang="ts">
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
  IonChip,
  IonIcon,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import "./SignUp.css";
import { goBack, GoSwipe } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore"
import { ref } from "vue"; // Import the ref function
import ChoiceModal from "./Seeker-InterestModal.vue";
import { goLogin } from '@/SignUp/SignUp-Controller';
import { addCircleOutline, arrowBackOutline, close } from "ionicons/icons";

export default {
  components: {
    IonSelect,
    IonSelectOption,
    ChoiceModal,
    IonChip,
    IonIcon,
    IonButton,
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonCard,
    IonModal,
    IonInput
  },
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

      if (this.chosenChoices.length > 0) {
        const signupStore = useSignupStore();
        signupStore.setChosenInterests(this.chosenChoices);
        console.log("Chosen Choices:", this.chosenChoices);
        await signupStore.registerUser(); // Register the user
        // GoHomeSwipeJobSeekers()
        goLogin();
        alert("Succesfully Registered");
      }
      else {
        alert("Fill all the Field to continue")
      }
    },

    goBack,
  },
  setup() {
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
    return {
      addCircleOutline,
      close,
      arrowBackOutline,
      GoSwipe,
    }
  }
};
</script>

<style>
/* ion-col {
  border: 1px solid black
} */
</style>
