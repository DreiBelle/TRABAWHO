<template>
  <IonPage class="signup-ionpage">
    <IonContent style="--background: none;">
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
                  <IonInput mode="md" type="date" placeholder="Date of Birth" fill="outline" labelPlacement="stacked" label="Birthday"
                    class="signup-inputs-mobile" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="number" placeholder="Phone Number" fill="outline" labelPlacement="stacked" label="Contact Number"
                    class="signup-inputs-mobile" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonSelect mode="md" label="Gender" placeholder="Select Gender" label-placement="stacked" interface="popover"
                    fill="outline" class="signup-inputs-mobile" required>
                    <IonSelectOption value="male">Male</IonSelectOption>
                    <IonSelectOption value="female">Female</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="text" placeholder="Province" fill="outline" labelPlacement="stacked" label="Province"
                    class="signup-inputs-mobile" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="text" placeholder="City/Town" fill="outline" labelPlacement="stacked" label="City/Town"
                    class="signup-inputs-mobile" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="text" placeholder="District" fill="outline" labelPlacement="stacked" label="District"
                    class="signup-inputs-mobile" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonInput mode="md" type="text" placeholder="Street" fill="outline" labelPlacement="stacked" label="Street"
                    class="signup-inputs-mobile" required>
                  </IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div class="flexcenter">
                    <IonButton @click="GoRegister2" class="signup-button-email-mobile">
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
    </IonContent>
  </IonPage>
</template>
  
<script lang="ts">
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
import { GoRegister2, goBack, goTermsandCondition, goLogin } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore";
import { Firestore } from "firebase/firestore";
import { checkifregisteredgoogle } from "./Seeker-Model";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebaseDB';
import { GoSwipe, GoHome, } from "@/NavBar/NavBar-Controller";
import { logoGoogle, arrowBackOutline } from "ionicons/icons";

export default {
  components: {
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
  },
  methods: {
    GoHome,
    goLogin,
    GoRegister2,
    goBack,
  },
  setup() {
    return{
      arrowBackOutline
    }
  }
}
</script>
  
  <!-- <style>
  ion-col {
    border: 1px solid black;
  }
  </style> -->
  