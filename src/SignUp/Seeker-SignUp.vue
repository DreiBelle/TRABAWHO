<template>
  <IonPage>
    <IonContent>
      <div class="SignUpBackground" name="centercontents">
        <IonCard class="SignUpJobSeeker-ioncard">
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
                  label="First Name"
                  labelPlacement="floating"
                  placeholder="Enter First Name"
                  v-model="formData.firstName"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="SignUpJobSeeker-input"
                  label="Middle Name"
                  labelPlacement="floating"
                  placeholder="Enter Middle Name"
                  v-model="formData.middleName"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="SignUpJobSeeker-input"
                  label="Last Name"
                  labelPlacement="floating"
                  placeholder="Enter Last Name"
                  v-model="formData.lastName"
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
                  label="Suffix"
                  labelPlacement="floating"
                  placeholder="Enter Suffix"
                  v-model="formData.suffix"
                  required
                >
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
                <IonInput
                  class="SignUpJobSeeker-input"
                  label="Email"
                  labelPlacement="floating"
                  placeholder="Enter Email"
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
                  <a href="/TermsandConditions"> terms and conditions</a>
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
import { useSignupStore } from "@/stores/signupstore";
import { Firestore } from "firebase/firestore";
const signupStore = useSignupStore();
const formData = {
  firstName: "",
  middleName: "",
  lastName: "",
  suffix: "",
  email: "",
  password: "",
};
const submitForm = async () => {
  // Submit logic, then update the store with the form data
  signupStore.setFormData(formData);

  GoRegister2();
};
</script>

<script lang="ts"></script>
