<template>
  <IonPage class="signup-ionpage">
    <!-- <IonContent style="--background: none;"> -->
      <IonGrid class="signup-grid">
        <IonRow style="height: 100%;">
          <IonCol class="flexcenter">
            <IonGrid>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonIcon @click="goBack()" class="signup-back-mobile" :icon="arrowBackOutline"></IonIcon>
                  <IonText class="signup-title-mobile">
                    BASICS
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="date" placeholder="Date of Birth" fill="outline" labelPlacement="stacked"
                    label="Birthday" class="signup-inputs-mobile" v-model="formData.bday" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="number" placeholder="Phone Number" fill="outline" labelPlacement="stacked"
                    label="Contact Number" class="signup-inputs-mobile" v-model="formData.contactno" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonSelect mode="md" label="Gender" placeholder="Select Gender" label-placement="stacked"
                    interface="popover" fill="outline" class="signup-inputs-mobile" v-model="formData.gender" required>
                    <IonSelectOption value="male">Male</IonSelectOption>
                    <IonSelectOption value="female">Female</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="text" placeholder="Province" fill="outline" labelPlacement="stacked"
                    label="Province" class="signup-inputs-mobile" v-model="formData.province" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="text" placeholder="City/Town" fill="outline" labelPlacement="stacked"
                    label="City/Town" class="signup-inputs-mobile" v-model="formData.citown" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="text" placeholder="District" fill="outline" labelPlacement="stacked"
                    label="District" class="signup-inputs-mobile" v-model="formData.district" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="text" placeholder="Street" fill="outline" labelPlacement="stacked"
                    label="Street" class="signup-inputs-mobile" v-model="formData.street" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div class="flexcenter">
                    <IonButton @click="submitForm()" class="signup-button-email-mobile">
                      Continue
                    </IonButton>
                  </div>
                  <div class="flexcenter">
                    <IonText class="signup-text-alreadyhave">
                      Already have an account? <a @click="goLogin()" style="color: #262c5c;">Login</a> | <a
                        @click="GoHome()" style="color: red;">Cancel</a>
                    </IonText>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCol>
        </IonRow>
      </IonGrid>
    <!-- </IonContent> -->
  </IonPage>
</template>
  
<script setup lang="ts">
import {
  IonCheckbox,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonText,
  IonProgressBar,
  IonButton,
  IonIcon,
  IonContent,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import "./SignUp.css";
import { GoRegister2, goBack, goLogin } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore";
import { GoHome } from "@/NavBar/NavBar-Controller";
import { arrowBackOutline } from "ionicons/icons";
import { ref } from 'vue';

const signupStore = useSignupStore();
const formData = {
  bday: "",
  contactno: "",
  gender: "",
  province: "",
  citown: "",
  district: "",
  street: "",
};

const isAlert = ref(false);
const alertMessage = ref('');

const alertbox = (x, message) => {
  isAlert.value = x;
  alertMessage.value = message;
}

const submitForm = async () => {
  const requiredFields = ['bday', 'contactno', 'gender', 'province','citown', 'district','street' ];
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
      bday: formData.bday,
      contactno: formData.contactno,
      gender: formData.gender,
      province: formData.province,
      citown: formData.citown,
      district: formData.district,
      street: formData.street,
    });

    GoRegister2()
  }
  else {
    alertbox(true, `Fill all the Field to continue`)
  }
}


const sharedFormData = signupStore.formData;

console.log(sharedFormData.fullname);
console.log(sharedFormData.email);


</script>
  
  <!-- <style>
  ion-col {
    border: 1px solid black;
  }
  </style> -->
  