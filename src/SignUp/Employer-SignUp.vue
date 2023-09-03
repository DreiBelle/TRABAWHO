<template>
  <IonPage>
    <IonContent>
      <div class="SignUpBackground" name="centercontents">
        <IonCard class="SignUpEmployer-IonCard">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  class="SignUpJobSeeker-Back"
                  @click="goBack"
                  fill="clear"
                >
                  back
                </IonButton>
              </IonCol>
              <IonCol size="6" class="SignUpJobSeeker-FlexCenter">
                <IonText style="font-size: 25px"> REGISTER </IonText>
              </IonCol>
              <IonCol> </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonInput
                  class="SignUpJobSeeker-input"
                  label="Email"
                  labelPlacement="floating"
                  placeholder="Enter valid email address"
                  v-model="formData.email"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="SignUpJobSeeker-input"
                  label="Contact Person Name"
                  labelPlacement="floating"
                  placeholder="Enter Full Name"
                  v-model="formData.contactpn"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="SignUpJobSeeker-input"
                  label="Contact Number"
                  labelPlacement="floating"
                  placeholder="Enter Contact Number"
                  v-model="formData.number"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="SignUpJobSeeker-input"
                  s
                  label="Registered Business Name"
                  labelPlacement="floating"
                  placeholder="Enter Business Name"
                  v-model="formData.businessname"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="SignUpJobSeeker-input"
                  s
                  label="Password"
                  labelPlacement="floating"
                  placeholder="Enter Password"
                  v-model="formData.password"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol style="text-align: right" size="2">
                <IonCheckbox></IonCheckbox>
              </IonCol>
              <IonCol style="text-align: left" size="10">
                <IonText>
                  I have read and accept the
                  <a href="/TermsandConditionsEmployer">
                    terms and conditions</a
                  >
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  class="SignUpButtonActions"
                  expand="block"
                  fill="outline"
                  @click="submitForm"
                  style="color: black; --border-color: black"
                >
                  Continue
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </div>
    </IonContent>
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
  IonModal,
} from "@ionic/vue";
import "./SignUp.css";
import { GoRegister2, goBack, goTermsandCondition } from "./SignUp-Controller";
import { useSignupStore2 } from "@/stores/signupstore2";
import { Firestore } from "firebase/firestore";
import router from "../router";
const signupStore2 = useSignupStore2();
const formData = {
  email: "",
  contactpn: "",
  number: "",
  businessname: "",
  password: "",
  dateCreated: "",
  type: "",
};
const submitForm = async () => {
  // Submit logic, then update the store with the form data
  signupStore2.setFormData(formData);

  await signupStore2.registerUser();

  router.push("/LoginComputer")
};

</script>

<script lang="ts"></script>
