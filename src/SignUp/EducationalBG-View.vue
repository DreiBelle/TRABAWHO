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
              <IonCol size="3">
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
                <IonText style="font-size: 20px"> BACKGROUND </IonText>
              </IonCol>
              <IonCol size="3"> </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonInput
                  class="text"
                  label="Elementary"
                  labelPlacement="floating"
                  placeholder="Enter Elementary School"
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
                  label="Junior High"
                  labelPlacement="floating"
                  placeholder="Enter Junior High School "
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
                  label="Senior High"
                  labelPlacement="floating"
                  placeholder="Enter Senior High School"
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
                  label="College"
                  labelPlacement="floating"
                  placeholder="Enter College School"
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
                  label="Other"
                  labelPlacement="floating"
                  placeholder="Enter other education attainment"
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
                  label="Work Experience"
                  labelPlacement="floating"
                  placeholder="Enter Work Experience"
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
                <IonButton
                  class="SignUpButtonActions"
                  expand="block"
                  fill="outline"
                  @click="GoRegister3"
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
} from "@ionic/vue";
import "./SignUp.css";
import { GoRegister3, goBack } from "./SignUp-Controller";

import { useStore } from './SignUp-View.vue'
import { computed } from 'vue'

const store = useStore()

const getName = computed(() => {
  return store.name
})

console.log(getName.value)
</script>

<script lang="ts">

</script>