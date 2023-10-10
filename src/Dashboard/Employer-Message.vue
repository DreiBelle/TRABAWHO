<template>
  <IonGrid style="height: 100%; width: 100%; padding: 0">
    <IonRow style="height: 100%">
      <IonCol class="emessage-container" size="3">
        <IonRow>
          <IonCol>
            <IonSearchbar></IonSearchbar>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonList>
              <IonItem class="emessage-persons-tabs">
                <IonAvatar class="emessage-avatar flexcenter">
                  <img class="emessage-avatar-image" src=https://ionicframework.com/docs/img/demos/avatar.svg
                  alt="picture" />
                </IonAvatar>
                <IonText class="flexcenter"> Andrei Emmanuel L Yu </IonText>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>
      </IonCol>
      <IonCol size="9" style="padding: 0">
        <IonRow style="height: 60px" class="emessage-container2">
          <IonCol class="flexcenter" style="justify-content: left">
            <div>
              <IonAvatar class="emessage-avatar">
                <img src=https://ionicframework.com/docs/img/demos/avatar.svg
                alt="picture" />
              </IonAvatar>
            </div>
            <div>Andrei Emmanuel L. Yu</div>
            <!-- <IonIcon :icon=""></IonIcon> -->
          </IonCol>
        </IonRow>
        <IonRow style="height: calc(100% - 120px)">
          <IonCol style="padding: 10px">
            <div class="emessage-receiver-container">
              <IonAvatar class="emessage-avatar-inside">
                <img src=https://ionicframework.com/docs/img/demos/avatar.svg
                alt="picture" />
              </IonAvatar>
              <IonText class="emessage-receiver-message"> 
                hello
              </IonText>
            </div>
            <div class="emessage-receiver-container">
              <IonAvatar class="emessage-avatar-inside">
                <img src=https://ionicframework.com/docs/img/demos/avatar.svg
                alt="picture" />
              </IonAvatar>
              <IonText class="emessage-receiver-message"> 
                hello
              </IonText>
            </div>
            <div class="emessage-receiver-container">
              <IonAvatar class="emessage-avatar-inside">
                <img src=https://ionicframework.com/docs/img/demos/avatar.svg
                alt="picture" />
              </IonAvatar>
              <IonText class="emessage-receiver-message"> 
                hello
              </IonText>
            </div>
            <div class="emessage-receiver-container">
              <IonAvatar class="emessage-avatar-inside">
                <img src=https://ionicframework.com/docs/img/demos/avatar.svg
                alt="picture" />
              </IonAvatar>
              <IonText class="emessage-receiver-message"> 
                hello
              </IonText>
            </div>
          </IonCol>
        </IonRow>
        <IonRow class="flexcenter" style="height: 50px">
          <IonInput
            fill="outline"
            placeholder="Aa"
            class="emessage-input-message"
          >
          </IonInput>
          <IonIcon class="emessage-icon-send" :icon="send"> </IonIcon>
        </IonRow>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>
<script lang="ts">
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonList,
  IonItem,
  IonAvatar,
  IonText,
  IonIcon,
  IonInput,
} from "@ionic/vue";
import "./message.css";
import { send } from "ionicons/icons";
export default {
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonList,
    IonItem,
    IonAvatar,
    IonText,
    IonIcon,
    IonInput,
  },
  setup() {
    return {
      send,
    };
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
