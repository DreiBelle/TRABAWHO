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
                  label="Elementary" class="signup-inputs-mobile" v-model="formData.elementary" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput mode="md" type="text" placeholder="High School" fill="outline" labelPlacement="stacked"
                  label="High School" class="signup-inputs-mobile" v-model="formData.juniorhigh" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput mode="md" type="text" placeholder="Senior High School" fill="outline" labelPlacement="stacked"
                  label="Senior High School" class="signup-inputs-mobile" v-model="formData.seniorhigh" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput mode="md" type="text" placeholder="College" fill="outline" labelPlacement="stacked"
                  label="College" class="signup-inputs-mobile" v-model="formData.college" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput mode="md" type="text" placeholder="Masteral" fill="outline" labelPlacement="stacked"
                  label="Masteral" class="signup-inputs-mobile" v-model="formData.masteral">
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonButton @click="submitForm" class="signup-button-email-mobile">
                  Continue
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>
    </IonGrid>

    <IonAlert mode="ios" :is-open="isAlert" header="Alert" :message=alertMessage :buttons="alertButtons"
      @didDismiss="alertbox(false, '')"></IonAlert>
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
  IonInput,
  IonText,
  IonCard,
  IonCheckbox,
  IonLabel,
  IonIcon,
  IonAlert,
} from "@ionic/vue";
import "./SignUp.css";
import { GoRegister3, goBack } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore"
import { SignupModel } from "@/SignUp/Seeker-Model";
import { arrowBackOutline } from "ionicons/icons";
import { ref } from 'vue';


const alertButtons = ['OK'];
const signupStore = useSignupStore();
const formData = {
  elementary: "",
  juniorhigh: "",
  seniorhigh: "",
  college: "",
  masteral: "",
  yearsofexp: "",
  jobtype: "",
  salary: "",
  loc: "",
};

const isAlert = ref(false);
const alertMessage = ref('');

const alertbox = (x, message) => {
  isAlert.value = x;
  alertMessage.value = message;
}

const submitForm = async () => {
  const requiredFields = ['elementary', 'juniorhigh', 'seniorhigh', 'college'];
  let isFormValid = true;

  for (const field of requiredFields) {
    if (!formData[field]) {
      isFormValid = false;
      alertbox(true, `Please fill in the ${field} field.`)
      break;
    }
  }
  if (!isFormValid) {
    alertbox(true, `Fill in all the required fields to continue.`)
    return;
  }

  if (isFormValid) {
    signupStore.setFormData({
      ...sharedFormData,
      elementary: formData.elementary,
      juniorhigh: formData.juniorhigh,
      seniorhigh: formData.seniorhigh,
      college: formData.college,
      masteral: formData.masteral,
      dateCreated: "",
      // chosenInterest: [],
      type: "",
    });

    GoRegister3()
  }
  else {
    alertbox(true, `Fill all the Field to continue`)
  }

  // await signupStore.registerUser();

  // Log the form data values
  console.log(formData.elementary);
  console.log(formData.juniorhigh);
  console.log(formData.seniorhigh);
  console.log(formData.college);
  console.log(formData.masteral);

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

</script>

<script lang="ts">
</script>
