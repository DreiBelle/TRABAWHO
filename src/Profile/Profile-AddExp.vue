<template>
  <IonModal
    :initial-breakpoint="0.3"
    :breakpoints="[0.3, 0.3, 0.8, 0.8]"
    :is-open="isAddexp"
    @did-dismiss="closeExpmodal()"
  >
    <div>
      <div
        class="flexcenter"
        style="margin-top: 20px; font-family: BebasNeue-Regular"
      >
        <IonText style="font-size: 25px"> ADD EXPERIENCES </IonText>
      </div>
      <div style="width: 100%">
        <div class="flexcenter" style="width: 100%; margin-bottom: -10px">
          <IonInput
            mode="md"
            class="jprofile-modal-inputs3"
            label="Job Title"
            placeholder="Enter Job title"
            labelPlacement="stacked"
            fill="outline"
            v-model="JobTitle"
            required
          >
          </IonInput>
        </div>
        <div class="flexcenter" style="width: 100%; margin-bottom: -10px">
          <IonInput
            mode="md"
            class="jprofile-modal-inputs3"
            label="Company Name"
            placeholder="Enter past Company Name of experience"
            labelPlacement="stacked"
            fill="outline"
            v-model="CompanyName"
            required
          >
          </IonInput>
        </div>
        <div class="flexcenter" style="width: 100%; margin-bottom: -10px">
          <IonInput
            mode="md"
            class="jprofile-modal-inputs3"
            label="Start Date"
            placeholder="Enter Start Date"
            labelPlacement="stacked"
            fill="outline"
            type="date"
            v-model="StartDate"
            required
          >
          </IonInput>
          -
          <IonInput
            mode="md"
            class="jprofile-modal-inputs3"
            label="End Date"
            placeholder="Enter End Date"
            labelPlacement="stacked"
            fill="outline"
            type="date"
            v-model="EndDate"
            required
          >
          </IonInput>
        </div>
        <div class="flexcenter" style="width: 100%; margin-bottom: -10px;s">
          <IonTextarea
            mode="md"
            class="jprofile-modal-inputs2"
            label="Responsibilities and Duties"
            placeholder="Enter Responsibilities and Duties of experience"
            labelPlacement="stacked"
            fill="outline"
            v-model="ResDuty"
            required
          >
          </IonTextarea>
        </div>
        <div class="flexcenter" style="width: 100%; margin-bottom: -10px">
          <IonInput
            mode="md"
            class="jprofile-modal-inputs3"
            label="Skills"
            placeholder="Enter Skills seperated by ','"
            labelPlacement="stacked"
            fill="outline"
            v-model="Skills"
            required
          >
          </IonInput>
        </div>
        <div class="flexcenter">
          <IonButton
            @click="handleSaveexp"
            class="jprofile-modal-button-add-experience"
          >
            SAVE
          </IonButton>
        </div>
      </div>
    </div>
    <IonModal class="jprofile-modal-alert" :is-open="isAlert" @did-dismiss="modalAlert(false,'')">
      <div class="flexcenter" style="height: 100%; font-size: 20px;">
        <IonText>{{ this.isAlertmessage }}</IonText>
      </div>
      <div>
        <IonButton expand="block" class="jprofile-modal-buttons-alert" @click="modalAlert(false,'')">Ok</IonButton>
      </div>
    </IonModal>
  </IonModal>
</template>
<script lang="ts">
import {
  IonButton,
  IonChip,
  IonIcon,
  IonInput,
  IonModal,
  IonText,
  IonTextarea,
} from "@ionic/vue";
import ChoiceModal from "../SignUp/Seeker-InterestModal.vue";
import { close, addCircleOutline } from "ionicons/icons";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebaseDB";

export default {
  components: {
    IonModal,
    IonInput,
    ChoiceModal,
    IonButton,
    IonIcon,
    IonChip,
    IonText,
    IonTextarea,
  },
  props: {
    isAddexp: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      UserEmail: localStorage.getItem("email"),
      isModalinterest: false,
      modalChoices: [],
      chosenChoices: [],
      JobTitle: "",
      CompanyName: "",
      StartDate: "",
      EndDate: "",
      ResDuty: "",
      Skills: "",
      isAlert: false,
      isAlertmessage: ""
    };
  },
  setup() {
    return {
      close,
      addCircleOutline,
    };
  },
  methods: {
    modalAlert(x, message) {
      this.isAlert = x;
      this.isAlertmessage = message;
    },
    async handleSaveexp() {
      if (
        this.UserEmail &&
        this.JobTitle &&
        this.CompanyName &&
        this.StartDate &&
        this.EndDate &&
        this.ResDuty &&
        this.Skills
      ) {
        const docRef = await addDoc(collection(db, "Experiences"), {
          SeekerId: this.UserEmail,
          JobTitle: this.JobTitle,
          CompanyName: this.CompanyName,
          StartDate: this.StartDate,
          EndDate: this.EndDate,
          ResDuty: this.ResDuty,
          Skills: this.Skills,
          DateCreated: serverTimestamp(),
          Removed: false,
        });
        console.log("Document written with ID: ", docRef.id);
        this.closeExpmodal();
      } else {
        this.modalAlert(true, "Fill all Fields!")
      }
    },
    closeExpmodal() {
      this.$emit("close-exp-modal");
    },
    modalInterest(x) {
      this.isModalinterest = x;
    },
    handleChoiceSelected(choice) {
      this.chosenChoices.push(choice);
      this.isModalinterest = false;
    },
    removeChoice(choiceId) {
      this.chosenChoices = this.chosenChoices.filter(
        (choice) => choice.id !== choiceId
      );
    },
  },
};
</script>
