<template>
    <div class="Swipe-Swipeable" :class="{ 'Swipe-Swipeable--animated': position !== 0 }"
      :style="{ transform: `translateX(${position}px)` }">
      <div class="Swipe-CardContent" id="card">
        <IonGrid style="height: 100%">
          <IonRow style="height: 10%">
            <IonCol>
              Job Name
              {{ item.content }}
            </IonCol>
          </IonRow>
          <IonRow style="height: 30%">
            <IonCol> Picture </IonCol>
          </IonRow>
          <IonRow style="height: 10%">
            <IonCol> Job Type </IonCol>
          </IonRow>
          <IonRow style="height: 50%">
            <IonCol> Job Description </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { IonCard, IonCol, IonGrid, IonRow } from "@ionic/vue";
  import "./Swipe.css";
  
  export default {
    props: {
      item: Object,
    },
    data() {
      return {
        isSwiping: false,
        startX: 0,
        currentPosition: 0,
        position: 0,
      };
    },
    methods: {

    },
    components: { IonGrid, IonRow, IonCol, IonCard },
  };
  </script>
  
  <style>
  /* ion-col {
    border: 1px solid black !important;
  } */
  </style>
  