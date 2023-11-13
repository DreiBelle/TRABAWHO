<template>
  <IonModal
    :initial-breakpoint="0.5"
    :breakpoints="[0.3, 0.5, 0.5, 1]"
    :is-open="isAddaward"
    @did-dismiss="closeExpmodal()"
  >
    <div>
      <div
        class="flexcenter"
        style="margin-top: 20px; font-family: BebasNeue-Regular"
      >
        <IonText style="font-size: 25px"> ADD AWARDS </IonText>
      </div>
      <div style="width: 100%">
        <div class="flexcenter" style="width: 100%; margin-bottom: -10px">
          <IonInput
            mode="md"
            class="jprofile-modal-inputs3"
            label="Award Name"
            placeholder="Enter the name of the award"
            labelPlacement="stacked"
            fill="outline"
            v-model="AwardName"
            required
          >
          </IonInput>
        </div>
        <div class="flexcenter" style="width: 100%; margin-bottom: -10px">
          <IonInput
            mode="md"
            class="jprofile-modal-inputs3"
            label="Where"
            placeholder="place you got the award from"
            labelPlacement="stacked"
            fill="outline"
            v-model="AwardWhere"
            required
          >
          </IonInput>
        </div>
        <div class="flexcenter" style="width: 100%; margin-bottom: -10px">
          <IonInput
            mode="md"
            class="jprofile-modal-inputs3"
            label="When"
            placeholder="the date you got the award"
            labelPlacement="stacked"
            fill="outline"
            type="date"
            v-model="AwardWhen"
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
    isAddaward: {
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
      isAlertmessage: "",

      AwardName: "",
      AwardWhere: "",
      AwardWhen: "",
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
      if (this.AwardName && this.AwardWhere && this.AwardWhen) {
        const docRef = await addDoc(collection(db, "Awards"), {
          SeekerId: this.UserEmail,
          AwardName: this.AwardName,
          AwardWhere: this.AwardWhere,
          AwardWhen: this.AwardWhen,
          DateCreated: serverTimestamp(),
          Removed: false,
        });
        console.log("Document written with ID: ", docRef.id);
        this.AwardName = "";
        this.AwardWhere = "";
        this.AwardWhen = "";
        this.closeExpmodal();
      } else {
        this.modalAlert(true, "Fill all Fields!");
      }
    },
    closeExpmodal() {
      this.$emit("close-award-modal");
    },
  },
};
</script>
