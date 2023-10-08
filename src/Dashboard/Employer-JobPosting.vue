<template>
  <div class="dashboard-content-jobposting">
    <IonGrid style="height: 100%; width: 100%; padding: 0">
      <IonRow class="dashboard-search-jobposting">
        <IonCol size="10" class="flexcenter">
          <IonSearchbar class="dashboard-navbar-topbar-searchbar" v-model="searchTerm"></IonSearchbar>
        </IonCol>
        <IonCol size="2" id="open-modal" class="Dashboard-Card-JobPosting flexcenter" style="justify-content: right">
          <IonButton style="--background: #262c5c; width: 100%">
            <IonIcon :icon="addCircleOutline"></IonIcon>Add
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <JobPostings :searchTerm="searchTerm" />
        </IonCol>
      </IonRow>
    </IonGrid>
  </div>

  <AddModal trigger="open-modal"></AddModal>

  <!-- <IonModal
    ref="modal"
    trigger="open-modal"
    class="modal-addjobpost"
  >
    <IonContent>
      <AddModal />
    </IonContent>
  </IonModal> -->
</template>
<script lang="ts">
import {
  IonModal,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonCard,
  IonIcon,
  IonButton,
  IonSearchbar,
} from "@ionic/vue";
import { addCircleOutline } from "ionicons/icons";
import JobPostings from "./Employer-Postings.vue";
import AddModal from "./Employer-Dashboard-Modal-AddPostings.vue";

export default {
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    JobPostings,
    IonCard,
    IonIcon,
    IonModal,
    AddModal,
    IonButton,
    IonSearchbar,
  },
  setup() {
    return {
      addCircleOutline,
    };
  },
  methods: {},
  data() {
    return {
      searchTerm: "",
    }
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
