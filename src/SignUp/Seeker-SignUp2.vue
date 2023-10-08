<template>
  <!-- <IonPage>
    <IonContent>
      <div class="SignUpBackground" name="centercontents">
        <IonCard class="SignUpJobSeeker-ioncard">
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <IonButton class="SignUpJobSeeker-Back" @click="goBack" fill="clear">
                  back
                </IonButton>
              </IonCol>
              <IonCol size="6" class="SignUpJobSeeker-FlexCenter">
                <IonText style="font-size: 20px"> BACKGROUND </IonText>
              </IonCol>
              <IonCol size="3"> </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Elementary" labelPlacement="floating"
                  placeholder="Enter Elementary School" v-model="formData.elementary" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Junior High" labelPlacement="floating"
                  placeholder="Enter Junior High School " v-model="formData.juniorhigh" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Senior High" labelPlacement="floating"
                  placeholder="Enter Senior High School" v-model="formData.seniorhigh" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="College" labelPlacement="floating"
                  placeholder="Enter College School" v-model="formData.college" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Other" labelPlacement="floating"
                  placeholder="Enter other education attainment" v-model="formData.othereduc" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <hr style="border: 0.5px solid black" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput class="SignUpJobSeeker-input" label="Work Experience" labelPlacement="floating"
                  placeholder="Enter Work Experience" v-model="formData.workexp" required>
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton class="SignUpButtonActions" expand="block" fill="outline" @click="submitForm">
                  Continue
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </div>
    </IonContent>
  </IonPage> -->

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
                <IonInput placeholder="Elementary" fill="outline" labelPlacement="stacked" label="Elementary"
                  class="signup-inputs-mobile">
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput placeholder="High School" fill="outline" labelPlacement="stacked" label="High School"
                  class="signup-inputs-mobile">
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput placeholder="Senior High School" fill="outline" labelPlacement="stacked" label="Senior High School"
                  class="signup-inputs-mobile">
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput placeholder="College" fill="outline" labelPlacement="stacked" label="College"
                  class="signup-inputs-mobile">
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonInput placeholder="Masteral" fill="outline" labelPlacement="stacked" label="Masteral"
                  class="signup-inputs-mobile">
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonButton @click="GoRegister3" class="signup-button-email-mobile">
                  Continue
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>
    </IonGrid>
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
} from "@ionic/vue";
import "./SignUp.css";
import { GoRegister3, goBack } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore"
import { SignupModel } from "@/SignUp/Seeker-Model";
import { arrowBackOutline } from "ionicons/icons";


const signupStore = useSignupStore();
const formData = {
  elementary: "",
  juniorhigh: "",
  seniorhigh: "",
  college: "",
  othereduc: "",
  workexp: "",
};

const submitForm = async () => {
  const requiredFields = ['elementary', 'juniorhigh', 'seniorhigh', 'college', 'othereduc', 'workexp'];
  let isFormValid = true;

  for (const field of requiredFields) {
    if (!formData[field]) {
      isFormValid = false;
      break; // Exit the loop if any required field is empty
    }
  }

  if (isFormValid) {
    signupStore.setFormData({
      ...sharedFormData,
      elementary: formData.elementary,
      juniorhigh: formData.juniorhigh,
      seniorhigh: formData.seniorhigh,
      college: formData.college,
      othereduc: formData.othereduc,
      workexp: formData.workexp,
      dateCreated: "",
      // chosenInterest: [],
      type: "",

    });
  }
  else {
    alert("Fill all the Field to continue")
  }

  // await signupStore.registerUser();

  // Log the form data values
  console.log(formData.elementary);
  console.log(formData.juniorhigh);
  console.log(formData.seniorhigh);
  console.log(formData.college);
  console.log(formData.othereduc);
  console.log(formData.workexp);

}


const sharedFormData = signupStore.formData;
console.log(sharedFormData.firstName);
console.log(sharedFormData.middleName);
console.log(sharedFormData.lastName);
console.log(sharedFormData.suffix);
console.log(sharedFormData.email);
console.log(sharedFormData.password);

</script>


