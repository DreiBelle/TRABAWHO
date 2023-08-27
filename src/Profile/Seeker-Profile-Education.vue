<template>
  <div>
   <IonGrid style="width: 100vw;">
    <IonRow>
      <IonCol class="Seeker-Profile-Educational-Header">
        Educational Background
      </IonCol>
    </IonRow>
    <IonRow class="Seeker-Profile-Educational-Table">
      <IonCol >
        Elementary: 
      </IonCol>
      <IonCol>
        Central
      </IonCol>
    </IonRow>
    <IonRow class="Seeker-Profile-Educational-Table">
      <IonCol>
        Junior HighSchool: 
      </IonCol>
      <IonCol>
        Saint Mary's
      </IonCol>
    </IonRow>
    <IonRow class="Seeker-Profile-Educational-Table">
      <IonCol>
        Senior HighSchool: 
      </IonCol>
      <IonCol>
        Saint Mary's
      </IonCol>
    </IonRow>
    <IonRow class="Seeker-Profile-Educational-Table">
      <IonCol>
        College: 
      </IonCol>
      <IonCol>
        Saint Mary's
      </IonCol>
    </IonRow>
    <IonRow class="Seeker-Profile-Educational-Table">
      <IonCol>
        Other Education: 
      </IonCol>
      <IonCol>
        etc.
      </IonCol>
    </IonRow>
   </IonGrid>
    
  </div>   
</template>
<script lang="ts">
import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/vue";
import "./Seeker-Profile.css";

export default {
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol
},
};
</script>
