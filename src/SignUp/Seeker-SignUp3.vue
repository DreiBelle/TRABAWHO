<template>
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
                  <IonInput mode="md" fill="outline" placeholder="Input Preffered Salary based on skills"
                    class="signup-inputs-mobile" label="Preffered Salary" label-placement="stacked" type="number"
                    v-model="formData.salary" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonSelect mode="md" label="years of experience" placeholder="Select years of working experience"
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
                  <IonSelect mode="md" class="signup-inputs-mobile" label="Job Type" label-placement="stacked"
                    interface="popover" fill="outline" placeholder="Select Preffered Job Type" v-model="formData.jobtype"
                    :multiple="true" required>
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
                  <IonSelect mode="md" class="signup-inputs-mobile" label="Location" label-placement="stacked"
                    interface="popover" fill="outline" placeholder="Select Preffered Work Set up" v-model="formData.loc"
                    required>
                    <IonSelectOption value="Within the province">Within the province</IonSelectOption>
                    <IonSelectOption value="Outside of the province">Outside of the province</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <div class="flexcenter" style="width: 100%;">
                <div style="width: 100%;">
                  <NewTags v-on:chosen-special="updateChosenspecial" @chosen-subspecial="updatesubChosenspecial"></NewTags>
                </div>
              </div>
              <IonRow style="border-bottom: 1px solid black; padding: 10px;">
                <IonCol>
                  <div>
                    <IonText>
                      Specialized Fields:
                    </IonText>
                  </div>
                  <div class="jsignup-container-tags" v-if="chosenChoices.length > 0">
                    <IonChip v-for="choice in chosenChoices" :key="choice.id">
                      {{ choice.label }}
                      <IonIcon class="signup-addjobpost-icon" @click="removeChoice(choice.id)" :icon="close"></IonIcon>
                    </IonChip>
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

    <IonAlert mode="ios" :is-open="isAlert" header="Alert" :message=alertMessage :buttons="alertButtons"
      @didDismiss="alertbox(false, '')"></IonAlert>
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
  IonAlert,
} from "@ionic/vue";
import "./SignUp.css";
import { goBack, GoSwipe, GoSignupPicture } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore";
import { ref } from "vue";
import ChoiceModal from "@/SignUp/Seeker-InterestModal.vue";
import { goLogin } from '@/SignUp/SignUp-Controller';
import { addCircleOutline, arrowBackOutline, close } from "ionicons/icons";
import NewTags from "./Mobile-SpecializedField.vue";


export default {
  components: {
    NewTags,
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
    IonAlert
  },

  setup() {
    const signupStore = useSignupStore();
    const sharedFormData = signupStore.formData;
    const alertButtons = ['OK'];

    const formData = {
      yearsofexp: "",
      jobtype: "",
      salary: "",
      loc: "",
      classification: "",
      subclassification: "",
    };

    console.log("Page 4");
    console.log(sharedFormData.fullname);
    console.log(sharedFormData.email);
    console.log(sharedFormData.bday);
    console.log(sharedFormData.contactno);
    console.log(sharedFormData.gender);
    console.log(sharedFormData.province);
    console.log(sharedFormData.citown);
    console.log(sharedFormData.district);
    console.log(sharedFormData.street);
    console.log(sharedFormData.elementary);
    console.log(sharedFormData.juniorhigh);
    console.log(sharedFormData.seniorhigh);
    console.log(sharedFormData.college);
    console.log(sharedFormData.masteral);
    console.log(sharedFormData.higheduc);

    return {
      addCircleOutline,
      close,
      arrowBackOutline,
      GoSwipe,
      formData,
      alertButtons,
    }
  },

  data() {
    return {
      modalOpen: false,
      modalChoices: [],
      chosenChoices: [],
      userswipej: [],
      isAlert: false,
      alertMessage: "",
      prefferedClassification: "",
      subclassificationClassification: "",
    };
  },
  methods: {
    updateChosenspecial(PC) {
      this.prefferedClassification = PC
      console.log(this.prefferedClassification)
      this.formData.classification = this.prefferedClassification
    },
    updatesubChosenspecial(PC) {
      this.subclassificationClassification = PC
      console.log(this.subclassificationClassification)
      this.formData.subclassification = this.subclassificationClassification
    },
    alertbox(x, message) {
      this.isAlert = x
      this.alertMessage = message
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
    async handleSubmit() {
      const requiredFields = ['yearsofexp', 'jobtype', 'salary', 'loc', 'classification', 'subclassification'];
      let isFormValid = true;

      for (const field of requiredFields) {
        if (!this.formData[field]) {
          isFormValid = false;
          this.alertbox(true, `Please fill in the ${field} field.`)
          break;
        }
      }
      if (!isFormValid) {
        this.alertbox(true, `Fill in all the required fields to continue.`)

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
          yearsofexp: this.formData.yearsofexp,
          jobtype: this.formData.jobtype,
          salary: this.formData.salary,
          loc: this.formData.loc,
          classification: this.formData.classification,
          subclassification: this.formData.subclassification,
        });

        console.log("Chosen Choices:", this.chosenChoices);
        // await signupStore.registerUser();
        GoSignupPicture();

      }
      else {
        this.alertbox(true, `Fill all the Field to continue`)
      }
    },
    goBack,
    GoSignupPicture,
  },
};
</script>

<style>
/* ion-col {
  border: 1px solid black
} */
</style>
