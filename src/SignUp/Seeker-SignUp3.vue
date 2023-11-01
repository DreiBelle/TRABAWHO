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
                  <IonSelect label="Preffered Hours" placeholder="Select Preffered hours of work"
                    label-placement="stacked" interface="popover" fill="outline" class="signup-inputs-mobile"
                    v-model="formData.hours" required>
                    <IonSelectOption value="4">4hrs</IonSelectOption>
                    <IonSelectOption value="8">8hrs</IonSelectOption>
                    <IonSelectOption value="12">12hrs</IonSelectOption>
                    <IonSelectOption value="16">16hrs</IonSelectOption>
                    <IonSelectOption value="20">20hrs</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonSelect label="years of experience" placeholder="Select years of experience"
                    label-placement="stacked" interface="popover" fill="outline" class="signup-inputs-mobile"
                    v-model="formData.yearsofexp" required>
                    <IonSelectOption value="0">0</IonSelectOption>
                    <IonSelectOption value="1-5">1-5</IonSelectOption>
                    <IonSelectOption value="6-10">6-10</IonSelectOption>
                    <IonSelectOption value="11-15">11-15</IonSelectOption>
                    <IonSelectOption value="16-20">16-20</IonSelectOption>
                    <IonSelectOption value="21-23">21-23</IonSelectOption>
                    <IonSelectOption value="24+">24+</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonSelect class="signup-inputs-mobile" label="Preffered Salary" label-placement="stacked"
                    interface="popover" fill="outline" placeholder="Input Preffered Salary based on skills"
                    v-model="formData.salary" required>
                    <IonSelectOption value="0php - 5,000php">0php - 5,000php</IonSelectOption>
                    <IonSelectOption value="6,000php - 10,000php">6,000php - 10,000php</IonSelectOption>
                    <IonSelectOption value="11,000php - 50,000php">11,000php - 50,000php</IonSelectOption>
                    <IonSelectOption value="51,000php - 100,000php">51,000php - 100,000php</IonSelectOption>
                    <IonSelectOption value="100,000php and above">100,000php and above</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonSelect class="signup-inputs-mobile" label="Job Type" label-placement="stacked" interface="popover"
                    fill="outline" placeholder="Select Preffered Job Type" v-model="formData.jobtype" :multiple="true" required>
                    <IonSelectOption value="Full-Time">Full-Time</IonSelectOption>
                    <IonSelectOption value="Part-Time">Part-Time</IonSelectOption>
                    <IonSelectOption value="Contract">Contract</IonSelectOption>
                    <IonSelectOption value="Temporary">Temporary</IonSelectOption>
                    <IonSelectOption value="Internship">Internship</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonSelect class="signup-inputs-mobile" label="Location" label-placement="stacked" interface="popover"
                    fill="outline" placeholder="Select Preffered Location" v-model="formData.loc" required>
                    <IonSelectOption value="Work From Home">Work from home</IonSelectOption>
                    <IonSelectOption value="Within the province">Within the province</IonSelectOption>
                    <IonSelectOption value="Outside of the province">Outside of the province</IonSelectOption>
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
                  <IonButton @click="handleSubmit" class="signup-button-email-mobile"> Register </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>

    <IonModal :is-open="modalOpen" @did-dismiss="closeModal">
      <ChoiceModal style="border: 1px solid black" :choice="modalChoices" @choice-selected="handleChoiceSelected" />
    </IonModal>
  </IonPage>
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
import { useSignupStore } from "@/stores/signupstore";
import { ref } from "vue"; // Import the ref function
import ChoiceModal from "@/SignUp/Seeker-InterestModal.vue";
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
    IonInput,
  },

  setup() {
    const signupStore = useSignupStore();
    const sharedFormData = signupStore.formData;

    const formData = {
      hours: "",
      yearsofexp: "",
      jobtype: "",
      salary: "",
      loc: "",
    };

    console.log("Page 3");
    console.log(sharedFormData.fullname);
    console.log(sharedFormData.email);
    console.log(sharedFormData.elementary);
    console.log(sharedFormData.juniorhigh);
    console.log(sharedFormData.seniorhigh);
    console.log(sharedFormData.college);
    console.log(sharedFormData.masteral);

    return {
      addCircleOutline,
      close,
      arrowBackOutline,
      GoSwipe,
      formData,
    }
  },

  data() {
    return {
      modalOpen: false,
      modalChoices: [],
      chosenChoices: [],
      userswipej: [],
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
      const requiredFields = ['hours', 'yearsofexp', 'jobtype', 'salary', 'loc'];
      let isFormValid = true;

      for (const field of requiredFields) {
        if (!this.formData[field]) {
          isFormValid = false;
          alert(`Please fill in the ${field} field.`);
          break;
        }
      }
      if (!isFormValid) {
        alert("Fill in all the required fields to continue.");
        return;
      }

      if (this.chosenChoices.length > 0) {
        const signupStore = useSignupStore();
        const sharedFormData = signupStore.formData;
        this.userswipej.push({ jobdid: "" }); 
        signupStore.setChosenInterests(this.chosenChoices);
        signupStore.setjobswipe(this.userswipej);
        signupStore.setFormData({
          ...sharedFormData,
          hours: this.formData.hours,
          yearsofexp: this.formData.yearsofexp,
          jobtype: this.formData.jobtype,
          salary: this.formData.salary,
          loc: this.formData.loc,
        });

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
};
</script>

<style>
/* ion-col {
  border: 1px solid black
} */
</style>
