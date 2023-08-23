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
                  @click="GoRegister3"
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
</script>

<script lang="ts"></script>
