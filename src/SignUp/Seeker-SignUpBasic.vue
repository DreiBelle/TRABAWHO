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
                <ion-radio-group v-model="formData.pwd">
                  <ion-radio value="PWD" style="margin-right: 20px;">PWD</ion-radio>
                  <ion-radio value="NOT PWD">NOT PWD</ion-radio>
                </ion-radio-group>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput mode="md" type="date" placeholder="Date of Birth" fill="outline" labelPlacement="stacked"
                  class="signup-inputs-mobile" v-model="formData.bday" required>
                  <div slot="label">Birthday <ion-text color="danger">*</ion-text></div>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput mode="md" type="number" placeholder="Phone Number" fill="outline" labelPlacement="stacked"
                  class="signup-inputs-mobile" v-model="formData.contactno" required>
                  <div slot="label">Contact Number <ion-text color="danger">*</ion-text></div>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonSelect mode="md" placeholder="Select Gender" label-placement="stacked" interface="popover"
                  fill="outline" class="signup-inputs-mobile" v-model="formData.gender" required>
                  <div slot="label">Gender<ion-text color="danger">*</ion-text></div>
                  <IonSelectOption value="Male">Male</IonSelectOption>
                  <IonSelectOption value="Female">Female</IonSelectOption>
                </IonSelect>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonSelect mode="md" placeholder="Select Province" label-placement="stacked" interface="popover"
                  fill="outline" class="signup-inputs-mobile" v-model="formData.province" required>
                  <div slot="label">Province<ion-text color="danger">*</ion-text></div>
                  <IonSelectOption value="Cagayan">Cagayan</IonSelectOption>
                  <IonSelectOption value="Isabela">Isabela</IonSelectOption>
                  <IonSelectOption value="Nueva Vizcaya">Nueva Vizcaya</IonSelectOption>
                  <IonSelectOption value="Quirino">Quirino</IonSelectOption>
                </IonSelect>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonSelect mode="md" placeholder="Select City/Town" label-placement="stacked" interface="popover"
                  fill="outline" class="signup-inputs-mobile" v-model="formData.citown" required>
                  <div slot="label">City/Town<ion-text color="danger">*</ion-text></div>
                  <IonSelectOption value="Tuguegarao City">Tuguegarao City</IonSelectOption>
                  <IonSelectOption value="Aparri">Aparri</IonSelectOption>
                  <IonSelectOption value="Lal-lo">Lal-lo</IonSelectOption>
                  <IonSelectOption value="Gattaran">Gattaran</IonSelectOption>
                  <IonSelectOption value="Penablanca">Penablanca</IonSelectOption>
                  <IonSelectOption value="Ilagan City">Ilagan City </IonSelectOption>
                  <IonSelectOption value="Cauayan City">Cauayan City</IonSelectOption>
                  <IonSelectOption value="Santiago City">Santiago City</IonSelectOption>
                  <IonSelectOption value="Alicia">Alicia</IonSelectOption>
                  <IonSelectOption value="Roxas">Roxas</IonSelectOption>
                  <IonSelectOption value="Cabagan">Cabagan</IonSelectOption>
                  <IonSelectOption value="Bayombong">Bayombong</IonSelectOption>
                  <IonSelectOption value="Solano">Solano</IonSelectOption>
                  <IonSelectOption value="Bagabag">Bagabag</IonSelectOption>
                  <IonSelectOption value="Bambang">Bambang</IonSelectOption>
                  <IonSelectOption value="Cabarroguis">Cabarroguis</IonSelectOption>
                  <IonSelectOption value="Maddela">Maddela</IonSelectOption>
                  <IonSelectOption value="Aglipay">Aglipay</IonSelectOption>
                </IonSelect>
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
                  class="signup-inputs-mobile" v-model="formData.street" required>
                  <div slot="label">Street<ion-text color="danger">*</ion-text></div>
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
  IonToggle,
  IonRadio,
  IonRadioGroup,
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
  pwd: "NOT PWD",
};

const isAlert = ref(false);
const alertMessage = ref('');

const alertbox = (x, message) => {
  isAlert.value = x;
  alertMessage.value = message;
}

// const handlepwd = () => {
//   if (checkpwd == true) {
//     formData.pwd = 'pwd'
//   }
//   else {
//     formData.pwd = 'not pwd'
//   }
// }

const submitForm = async () => {
  const requiredFields = ['bday', 'contactno', 'gender', 'province', 'citown', 'street'];
  let isFormValid = true;

  const biday = formData.bday;
  const today = new Date();
  const birthDate = new Date(biday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

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

  if (age >= 18) {
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
        pwd: formData.pwd,
      });

      GoRegister2()
    }
    else {
      alertbox(true, `Fill all the Field to continue`)
    }
  }
  else {
    // alertbox(true, `Unfortunately Only 18 Above is allowed to use the system`)
    alert("You are under 18")
    GoHome()
  }

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
console.log(sharedFormData.elementary);
console.log(sharedFormData.juniorhigh);
console.log(sharedFormData.seniorhigh);
console.log(sharedFormData.college);
console.log(sharedFormData.yearsofexp);
console.log(sharedFormData.jobtype);
console.log(sharedFormData.salary);
console.log(sharedFormData.loc);
console.log(sharedFormData.classification);
console.log(sharedFormData.subclassification);


</script>
  
  <!-- <style>
  ion-col {
    border: 1px solid black;
  }
  </style> -->
  