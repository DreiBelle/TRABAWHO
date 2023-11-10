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
                <IonSelect mode="md" label="Highest Education Attainment" placeholder="Select" label-placement="stacked"
                  interface="popover" fill="outline" class="signup-inputs-mobile" v-model="formData.higheduc" required>
                  <IonSelectOption value="Bachelor of Science in Computer Science">Bachelor of Science in Computer Science</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Information Technology">Bachelor of Science in Information Technology</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Nursing">Bachelor of Science in Nursing</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Biology">Bachelor of Science in Biology</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Chemistry">Bachelor of Science in Chemistry</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Physics">Bachelor of Science in Physics</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Mathematics">Bachelor of Science in Mathematics</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Psychology">Bachelor of Science in Psychology</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Environmental Science">Bachelor of Science in Environmental Science</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Electrical Engineering">Bachelor of Science in Electrical Engineering</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Mechanical Engineering">Bachelor of Science in Mechanical Engineering</IonSelectOption>
                  <IonSelectOption value="Bachelor of Arts in English">Bachelor of Arts in English</IonSelectOption>
                  <IonSelectOption value="Bachelor of Arts in History">Bachelor of Arts in History</IonSelectOption>
                  <IonSelectOption value="Bachelor of Arts in Sociology">Bachelor of Arts in Sociology</IonSelectOption>
                  <IonSelectOption value="Bachelor of Arts in Political Science">Bachelor of Arts in Political Science</IonSelectOption>
                  <IonSelectOption value="Bachelor of Arts in Economics">Bachelor of Arts in Economics</IonSelectOption>
                  <IonSelectOption value="Bachelor of Arts in Psychology">Bachelor of Arts in Psychology</IonSelectOption>
                  <IonSelectOption value="Bachelor of Arts in Anthropology">Bachelor of Arts in Anthropology</IonSelectOption>
                  <IonSelectOption value="Bachelor of Business Administration">Bachelor of Business Administration</IonSelectOption>
                  <IonSelectOption value="Bachelor of Commerce">Bachelor of Commerce</IonSelectOption>
                  <IonSelectOption value="Bachelor of Economics">Bachelor of Economics</IonSelectOption>
                  <IonSelectOption value="Bachelor of Finance">Bachelor of Finance</IonSelectOption>
                  <IonSelectOption value="Bachelor of Marketing">Bachelor of Marketing</IonSelectOption>
                  <IonSelectOption value="Bachelor of Management">Bachelor of Management</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Public Health">Bachelor of Science in Public Health</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Healthcare Administration">Bachelor of Science in Healthcare Administration</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Physical Therapy">Bachelor of Science in Physical Therapy</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Occupational Therapy">Bachelor of Science in Occupational Therapy</IonSelectOption>
                  <IonSelectOption value="Bachelor of Education">Bachelor of Education</IonSelectOption>
                  <IonSelectOption value="Bachelor of Arts in Elementary Education">Bachelor of Arts in Elementary Education</IonSelectOption>
                  <IonSelectOption value="Bachelor of Science in Special Education">Bachelor of Science in Special Education</IonSelectOption>
                  <IonSelectOption value="Bachelor of Physical Education">Bachelor of Physical Education</IonSelectOption>
                  <IonSelectOption value="Bachelor of Fine Arts">Bachelor of Fine Arts</IonSelectOption>
                  <IonSelectOption value="Bachelor of Music">Bachelor of Music</IonSelectOption>
                  <IonSelectOption value="Bachelor of Film and Media Studies">Bachelor of Film and Media Studies</IonSelectOption>
                  <IonSelectOption value="Bachelor of Graphic Design">Bachelor of Graphic Design</IonSelectOption>
                  <IonSelectOption value="Bachelor of Theater Arts">Bachelor of Theater Arts</IonSelectOption>
                  <IonSelectOption value="Bachelor of Social Work">Bachelor of Social Work</IonSelectOption>
                  <IonSelectOption value="Bachelor of Philosophy">Bachelor of Philosophy</IonSelectOption>
                  <IonSelectOption value="Bachelor of Theology">Bachelor of Theology</IonSelectOption>
                  <IonSelectOption value="Bachelor of Communication Studies">Bachelor of Communication Studies</IonSelectOption>
                  <IonSelectOption value="Bachelor of Sociology">Bachelor of Sociology</IonSelectOption>
                  <IonSelectOption value="Bachelor of International Relations">Bachelor of International Relations</IonSelectOption>
                  <IonSelectOption value="Bachelor of Engineering">Bachelor of Engineering</IonSelectOption>
                  <IonSelectOption value="Bachelor of Aerospace Engineering">Bachelor of Aerospace Engineering</IonSelectOption>
                  <IonSelectOption value="Bachelor of Civil Engineering">Bachelor of Civil Engineering</IonSelectOption>
                  <IonSelectOption value="Bachelor of Environmental Engineering">Bachelor of Environmental Engineering</IonSelectOption>
                  <IonSelectOption value="Bachelor of Materials Science">Bachelor of Materials Science</IonSelectOption>
                  <IonSelectOption value="Bachelor of Environmental Science">Bachelor of Environmental Science</IonSelectOption>
                  <IonSelectOption value="Bachelor of Environmental Studies">Bachelor of Environmental Studies</IonSelectOption>
                  <IonSelectOption value="Bachelor of Sustainable Agriculture">Bachelor of Sustainable Agriculture</IonSelectOption>
                  <IonSelectOption value="Bachelor of Arts in Linguistics">Bachelor of Arts in Linguistics</IonSelectOption>
                  <IonSelectOption value="Bachelor of Modern Languages">Bachelor of Modern Languages</IonSelectOption>
                  <IonSelectOption value="Bachelor of Translation and Interpretation">Bachelor of Translation and Interpretation</IonSelectOption>
                </IonSelect>
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
  IonSelect,
  IonSelectOption,
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
  yearsofexp: "",
  jobtype: "",
  salary: "",
  loc: "",
  higheduc: "",
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
      higheduc: formData.higheduc,
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
