<template>
  <IonPage class="signup-ionpage">
    <IonGrid class="signup-grid">
      <IonRow style="height: 100%;">
        <IonCol class="flexcenter">
          <IonGrid>
            <IonRow>
              <IonCol class="flexcenter">
                <IonIcon @click="goBack()" class="signup-back-mobile" :icon="arrowBackOutline"></IonIcon>
                <IonText class="signup-title-mobile">
                  EDUCATION
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput mode="md" type="text" placeholder="Elementary" fill="outline" labelPlacement="stacked"
                  label="Elementary" class="signup-inputs-mobile" v-model="Elementary" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput v-if="Elementary" mode="md" type="text" placeholder="Junior High School" fill="outline"
                  labelPlacement="stacked" label="High School" class="signup-inputs-mobile" v-model="Juniorhigh" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput v-if="Juniorhigh" mode="md" type="text" placeholder="Senior High School" fill="outline"
                  labelPlacement="stacked" label="Senior High School" class="signup-inputs-mobile" v-model="Seniorhigh"
                  required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonSelect v-if="Seniorhigh" mode="md" label="College" placeholder="Select"
                  label-placement="stacked" interface="popover" fill="outline" class="signup-inputs-mobile"
                  v-model="College" required>
                  <IonSelectOption value="">None</IonSelectOption>
                  <IonSelectOption value="Undergraduate">Undergraduate</IonSelectOption>
                  <IonSelectOption value="Gradauate">Gradauate</IonSelectOption>
                  <IonSelectOption value="Masteral">Masteral</IonSelectOption>
                </IonSelect>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput v-if="College" mode="md" type="text" placeholder="College School" fill="outline"
                  labelPlacement="stacked" label="College School" class="signup-inputs-mobile" v-model="Collegeschool" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol v-if="College == 'Masteral'" class="flexcenter">
                <IonInput mode="md" type="text" placeholder="Input masteral degree and School Name" fill="outline"
                  labelPlacement="stacked" label="Masteral" class="signup-inputs-mobile" v-model="Masteral" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonButton @click="submitForm()" class="signup-button-email-mobile">
                  Continue
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>
    </IonGrid>

    <!-- <IonAlert mode="ios" :is-open="isAlert" header="Alert" :message=alertMessage :buttons="alertButtons"
      @didDismiss="alertbox(false, '')"></IonAlert> -->
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
  IonInput,
  IonText,
  IonCard,
  IonCheckbox,
  IonLabel,
  IonIcon,
  IonAlert,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import "./SignUp.css";
import { GoRegister3, goBack } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore"
import { SignupModel } from "@/SignUp/Seeker-Model";
import { arrowBackOutline } from "ionicons/icons";
import { ref } from 'vue';
export default {
  components: {
    IonButton,
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonText,
    IonCard,
    IonCheckbox,
    IonLabel,
    IonIcon,
    IonAlert,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    const alertButtons = ['OK'];
    const signupStore = useSignupStore();
    const formData = {
      elementary: "",
      juniorhigh: "",
      seniorhigh: "",
      college: "",
      yearsofexp: "",
      jobtype: "",
      salary: "",
      loc: "",
      masteral: "",
      higheduc: "",
    };


    const isAlert = ref(false);
    const alertMessage = ref('');

    const alertbox = (x, message) => {
      isAlert.value = x;
      alertMessage.value = message;
    }

    const sharedFormData = signupStore.formData;

    console.log(sharedFormData.fullname);
    console.log(sharedFormData.email);
    console.log(sharedFormData.bday);
    console.log(sharedFormData.contactno);
    console.log(sharedFormData.gender);
    console.log(sharedFormData.province);
    console.log(sharedFormData.citown);
    console.log(sharedFormData.district);
    console.log(sharedFormData.street);

    return {
      formData,
      isAlert,
      alertMessage,
      arrowBackOutline,
      alertButtons,
    }
  },
  data() {
    return {
      Elementary: "",
      Juniorhigh: "",
      Seniorhigh: "",
      College: "",
      Collegeschool: "",
      Masteral: "",
      Courses: "",
    }
  },
  methods: {
    goBack,
    alertbox(x, message) {
      this.isAlert.value = x;
      this.alertMessage.value = message;
    },
    async submitForm() {
      const requiredFields = [];
      const signupStore = useSignupStore();
      const sharedFormData = signupStore.formData;

      let isFormValid = true;

      if (!this.Elementary && !this.Juniorhigh && !this.Seniorhigh && !this.College) {
        this.Courses = "None";
      }
      else if (!this.Juniorhigh && !this.Seniorhigh && !this.College) {
        this.Elementary = this.Elementary;
        this.formData.elementary = this.Elementary;
        this.Courses = this.Elementary + " Elementary";
      }
      else if (!this.Seniorhigh && !this.College) {
        this.Elementary = this.Elementary;
        this.Juniorhigh = this.Juniorhigh;
        this.formData.elementary = this.Elementary;
        this.formData.juniorhigh = this.Juniorhigh;
        this.Courses = this.Juniorhigh + " Juniorhigh";
      }
      else if (!this.College) {
        this.Elementary = this.Elementary;
        this.Juniorhigh = this.Juniorhigh;
        this.Seniorhigh = this.Seniorhigh;
        this.formData.elementary = this.Elementary;
        this.formData.juniorhigh = this.Juniorhigh;
        this.formData.seniorhigh = this.Seniorhigh;
        this.Courses = this.Seniorhigh + " Seniorhigh";
      }
      else if (!this.Masteral) {
        this.Elementary = this.Elementary;
        this.Juniorhigh = this.Juniorhigh;
        this.Seniorhigh = this.Seniorhigh;
        this.College = this.College;
        this.formData.elementary = this.Elementary;
        this.formData.juniorhigh = this.Juniorhigh;
        this.formData.seniorhigh = this.Seniorhigh;
        this.formData.college = this.College + " " + this.Collegeschool;
        this.Courses = this.College + " " + this.Collegeschool;
      }
      else{
        this.Elementary = this.Elementary;
        this.Juniorhigh = this.Juniorhigh;
        this.Seniorhigh = this.Seniorhigh;
        this.formData.elementary = this.Elementary;
        this.formData.juniorhigh = this.Juniorhigh;
        this.formData.seniorhigh = this.Seniorhigh;
        this.formData.college = this.College + " " + this.Collegeschool;
        this.formData.masteral = this.Masteral;
        this.Courses = this.Masteral;
      }

      if (this.College && !this.Collegeschool) {
        alert("Please Enter your College School");
      }
      else if(this.College == 'Masteral' && !this.Masteral){
        alert("Please Enter your Masteral Degree and  School");
      }
      else {
        // this.Elementary = this.Elementary;
        // this.Juniorhigh = this.Juniorhigh;
        // this.Seniorhigh = this.Seniorhigh;
        // this.College = this.College;
        // this.formData.elementary = this.Elementary;
        // this.formData.juniorhigh = this.Juniorhigh;
        // this.formData.seniorhigh = this.Seniorhigh;
        // this.formData.college = this.College;
        this.formData.higheduc = this.Courses;
        signupStore.setFormData({
          ...sharedFormData,
          elementary: this.formData.elementary,
          juniorhigh: this.formData.juniorhigh,
          seniorhigh: this.formData.seniorhigh,
          college: this.formData.college,
          masteral: this.formData.masteral,
          higheduc: this.formData.higheduc,
          dateCreated: "",
          // chosenInterest: [],
          type: "",
        });

        GoRegister3();
      }
    }
  }
}
</script>
