<template>
  <IonModal
    :initial-breakpoint="0.5"
    :breakpoints="[0.3, 0.5, 0.5, 1]"
    :is-open="isEditaward"
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
    isEditaward: {
      type: Boolean,
      required: true,
    },
    passAwardName: {
      type: String,
      required: true,
    },
    passAwardWhere: {
      type: String,
      required: true,
    },
    passAwardWhen: {
      type: String,
      required: true,
    },
    passAwardId: {
      type: String,
      required: true,
    },
  },
  watch: {
    passAwardName: function (value) {
      if (value) {
        this.AwardName = this.passAwardName;
        this.AwardWhere = this.passAwardWhere;
        this.AwardWhen = this.passAwardWhen;
        console.log("pass");
      } else if (!value) {
        console.log("none");
      }
    },
  },
  data() {
    return {
      AwardName: "",
      AwardWhere: "",
      AwardWhen: "",
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
      this.AwardName = "";
      this.AwardWhen = "";
      this.AwardWhere = "";
    },
    async handleRemove() {
      const updateFields = doc(db, "Awards", this.passAwardId);

      await updateDoc(updateFields, {
        Removed: true,
      });

      this.clearFields();
      this.$emit("close-award-edit-modal");
    },
    async handleEdit() {
      if (
        this.AwardName &&
        this.AwardWhere &&
        this.AwardWhen
      ) {
        const updateFields = doc(db, "Awards", this.passAwardId);

        await updateDoc(updateFields, {
            AwardName: this.AwardWhen,
            AwardWhere: this.AwardWhere,
            AwardWhen: this.AwardWhen,
        });

        this.clearFields();
        this.$emit("close-award-edit-modal");
      } else {
        this.modalAlert(true, "Fill all fields!");
      }
    },
    closeExpmodal() {
      this.clearFields();
      this.$emit("close-award-edit-modal");
    },
  },
};
</script>
