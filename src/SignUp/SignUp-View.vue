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
                  label="First Name"
                  labelPlacement="floating"
                  placeholder="Enter First Name"
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
                <hr style="border: .5px solid black"/>
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
} from "@ionic/vue";
import "./SignUp.css";
</script>

<style lang=""></style>
