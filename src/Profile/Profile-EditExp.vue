<template>
  <IonModal
    :initial-breakpoint="0.3"
    :breakpoints="[0.3, 0.3, 0.8, 0.8]"
    :is-open="isEditexp"
    @did-dismiss="closeExpmodal()"
  >
    <div>
      <div
        class="flexcenter"
        style="margin-top: 20px; font-family: BebasNeue-Regular"
      >
        <IonText style="font-size: 25px"> EDIT EXPERIENCES </IonText>
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

        <div class="flexcenter" style="width: 100%">
          <div style="width: 100%">
            <div class="flexcenter" style="width: 100%">
              <IonButton
                @click="handleEdit"
                class="jprofile-modal-button-add-experience"
              >
                SAVE
              </IonButton>
            </div>
            <div class="flexcenter" style="width: 100%">
              <IonButton
                @click="handleRemove"
                style="--background: darkred"
                class="jprofile-modal-button-add-experience"
              >
                DELETE
              </IonButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <IonModal
      class="jprofile-modal-alert"
      :is-open="isAlert"
      @did-dismiss="modalAlert(false, '')"
    >
      <div class="flexcenter" style="height: 100%; font-size: 20px">
        <IonText>{{ this.isAlertmessage }}</IonText>
      </div>
      <div>
        <IonButton
          expand="block"
          class="jprofile-modal-buttons-alert"
          @click="modalAlert(false, '')"
          >Ok</IonButton
        >
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
import { close, addCircleOutline, trash } from "ionicons/icons";
import { doc, updateDoc } from "firebase/firestore";
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
    isEditexp: {
      type: Boolean,
      required: true,
    },
    passJobTitle: {
      type: String,
      required: true,
    },
    passCompanyName: {
      type: String,
      required: true,
    },
    passStartDate: {
      type: String,
      required: true,
    },
    passEndDate: {
      type: String,
      required: true,
    },
    passResDuty: {
      type: String,
      required: true,
    },
    passSkills: {
      type: String,
      required: true,
    },
    passExpid: {
      type: String,
      required: true,
    },
  },
  watch: {
    passJobTitle: function (value) {
      if (value) {
        this.JobTitle = this.passJobTitle;
        this.CompanyName = this.passCompanyName;
        this.StartDate = this.passStartDate;
        this.EndDate = this.passEndDate;
        this.ResDuty = this.passResDuty;
        this.Skills = this.passSkills;
        console.log("pass");
      } else if (!value) {
        console.log("none");
      }
    },
  },
  data() {
    return {
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
    };
  },
  setup() {
    return {
      close,
      addCircleOutline,
      trash,
    };
  },
  methods: {
    modalAlert(x, message) {
      this.isAlert = x;
      this.isAlertmessage = message;
    },
    clearFields() {
      this.JobTitle = "";
      this.CompanyName = "";
      this.StartDate = "";
      this.EndDate = "";
      this.ResDuty = "";
      this.Skills = "";
    },
    async handleRemove() {
      const updateFields = doc(db, "Experiences", this.passExpid);

      await updateDoc(updateFields, {
        Removed: true,
      });

      this.clearFields();
      this.$emit("close-exp-edit-modal");
    },
    async handleEdit() {
      if (this.CompanyName && this.JobTitle && this.StartDate && this.EndDate && this.ResDuty && this.Skills) {
        const updateFields = doc(db, "Experiences", this.passExpid);

        await updateDoc(updateFields, {
          CompanyName: this.CompanyName,
          JobTitle: this.JobTitle,
          StartDate: this.StartDate,
          EndDate: this.EndDate,
          ResDuty: this.ResDuty,
          Skills: this.Skills,
        });

        this.clearFields();
        this.$emit("close-exp-edit-modal");
      } else {
        this.modalAlert(true, "Fill all fields!")
      }
    },
    closeExpmodal() {
      this.clearFields();
      this.$emit("close-exp-edit-modal");
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
