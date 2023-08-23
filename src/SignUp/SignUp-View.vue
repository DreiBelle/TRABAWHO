<template>
  <IonPage>
    <IonContent>
      <div
        class="SignUpBackground"
        name="centercontents"
        style="
          justify-content: center;
          align-items: center;
          display: flex;
          height: 100vh;
        "
      >
        <IonCard
          style="width: 90vw; height: 95vh; padding: 10px; text-align: center"
        >
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  style="
                    min-height: 20px;
                    min-width: 20px;
                    border-radius: 20px;
                    font-size: 14px;
                    color: black;
                  "
                  @click="goBack"
                  fill="clear"
                >
                  back
                </IonButton>
              </IonCol>
              <IonCol
                size="6"
                style="
                  align-items: center;
                  justify-content: center;
                  display: flex;
                "
              >
                <IonText style="font-size: 25px"> REGISTER </IonText>
              </IonCol>
              <IonCol> </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonInput
                  class="text"
                  label="First Name"
                  labelPlacement="floating"
                  placeholder="Enter First Name"
                  v-model="FirstName"
                  required
                  style="
                    margin-top: 10px;
                    min-height: 40px;
                    height: 45px;
                    border-bottom: 1px solid black;
                    text-align: left;
                    background: snow;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                  "
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="text"
                  label="Middle Name"
                  labelPlacement="floating"
                  placeholder="Enter Middle Name"
                  required
                  style="
                    min-height: 40px;
                    height: 45px;
                    border-bottom: 1px solid black;
                    text-align: left;
                    background: snow;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                  "
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="text"
                  label="Last Name"
                  labelPlacement="floating"
                  placeholder="Enter Last Name"
                  required
                  style="
                    min-height: 40px;
                    height: 45px;
                    border-bottom: 1px solid black;
                    text-align: left;
                    background: snow;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                  "
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="text"
                  label="Suffix"
                  labelPlacement="floating"
                  placeholder="Enter Suffix"
                  required
                  style="
                    min-height: 40px;
                    height: 45px;
                    border-bottom: 1px solid black;
                    text-align: left;
                    background: snow;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                  "
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
                  class="text"
                  label="Email"
                  labelPlacement="floating"
                  placeholder="Enter Email"
                  required
                  style="
                    min-height: 40px;
                    height: 45px;
                    border-bottom: 1px solid black;
                    text-align: left;
                    background: snow;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                  "
                >
                </IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonInput
                  class="text"
                  label="Password"
                  labelPlacement="floating"
                  placeholder="Enter Password"
                  required
                  style="
                    min-height: 40px;
                    height: 45px;
                    border-bottom: 1px solid black;
                    text-align: left;
                    background: snow;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                  "
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
                  @click="GoRegister2" 
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
import { defineStore } from 'pinia'
</script>

<script lang="ts">
import {ref} from "vue"

const FirstName = ref("")

var passme = FirstName.value

  export const useStore = defineStore('storeId', {
    state: () => {
      return {
        name: passme,
      }
    },
  })
</script>
