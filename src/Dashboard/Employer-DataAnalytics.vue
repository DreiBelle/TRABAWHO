<template>
  <IonGrid style="height: 100%; width: 100%;"> 
    <IonRow style="height: 100%;">
      <IonCol class="flexcenter">
        <IonCard class="dashboard-minidataanalytics-card">
          likes
        </IonCard>
      </IonCol>
      <IonCol class="flexcenter">
        <IonCard class="dashboard-minidataanalytics-card">
          views
        </IonCard>
      </IonCol>
      <IonCol class="flexcenter">
        <IonCard class="dashboard-minidataanalytics-card">
          bookmarks
        </IonCard>
      </IonCol>
      <IonCol class="flexcenter">
        <IonCard class="dashboard-minidataanalytics-card">
          bookmarks
        </IonCard>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>
<script lang="ts">
import { IonCard, IonCol, IonGrid, IonRow } from "@ionic/vue";

export default {
  components: { IonCard, IonGrid, IonRow, IonCol },
};
</script>
<style lang=""></style>