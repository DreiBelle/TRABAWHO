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
import { defineStore } from "pinia";
</script>

<script lang="ts"></script>
