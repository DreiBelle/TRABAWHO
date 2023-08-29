<template>
  <IonPage>
    <IonContent>
      <div class="SignUpBackground" name="centercontents">
        <IonCard class="SignUpJobSeeker-ioncard">
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <IonButton
                  class="SignUpJobSeeker-Back"
                  @click="goBack"
                  fill="clear"
                >
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
                <IonInput
                  class="SignUpJobSeeker-input"
                  label="Elementary"
                  labelPlacement="floating"
                  placeholder="Enter Elementary School"
                  v-model="formData.elementary"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="SignUpJobSeeker-input"
                  label="Junior High"
                  labelPlacement="floating"
                  placeholder="Enter Junior High School "
                  v-model="formData.juniorhigh"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="SignUpJobSeeker-input"
                  label="Senior High"
                  labelPlacement="floating"
                  placeholder="Enter Senior High School"
                  v-model="formData.seniorhigh"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="SignUpJobSeeker-input"
                  label="College"
                  labelPlacement="floating"
                  placeholder="Enter College School"
                  v-model="formData.college"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="SignUpJobSeeker-input"
                  label="Other"
                  labelPlacement="floating"
                  placeholder="Enter other education attainment"
                  v-model="formData.othereduc"
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
                  label="Work Experience"
                  labelPlacement="floating"
                  placeholder="Enter Work Experience"
                  v-model="formData.workexp"
                  required
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  class="SignUpButtonActions"
                  expand="block"
                  fill="outline"
                  @click="submitForm"
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
} from "@ionic/vue";
import "./SignUp.css";
import { GoRegister3, goBack } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore"
import { SignupModel } from "@/SignUp/Seeker-Model";


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
  signupStore.setFormData({
    ...sharedFormData,
    elementary: formData.elementary,
    juniorhigh: formData.juniorhigh,
    seniorhigh: formData.seniorhigh,
    college: formData.college,
    othereduc: formData.othereduc,
    workexp: formData.workexp,
  });

  // await signupStore.registerUser();

  // Log the form data values
  console.log(formData.elementary);
  console.log(formData.juniorhigh);
  console.log(formData.seniorhigh);
  console.log(formData.college);
  console.log(formData.othereduc);
  console.log(formData.workexp);

  GoRegister3()
}

const sharedFormData = signupStore.formData;
  console.log(sharedFormData.firstName);
  console.log(sharedFormData.middleName);
  console.log(sharedFormData.lastName);
  console.log(sharedFormData.suffix);
  console.log(sharedFormData.email);
  console.log(sharedFormData.password);

</script>

<script lang="ts"></script>
