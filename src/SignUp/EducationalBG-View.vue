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
          <IonText style="font-size: 25px"> REGISTER </IonText>

          <IonGrid>
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
                <IonButton expand="block" fill="outline" @click="GoRegister3"> Continue </IonButton>
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
import {GoRegister3} from "./SignUp-Controller"
</script>

<style lang=""></style>
