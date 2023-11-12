<template>
  <IonContent style="--background: none;">
    <div class="dashboard-content-jobposting">
      <IonGrid style="height: 100%; width: 100%; padding: 0">
        <IonRow>
          <IonCol>
            <IonSegment mode="ios" color="light" class="page-jobposting-segments" value="Active">
              <IonSegmentButton class="page-jobposting-segments-buttons" @click="ShowTabs('JobPostings')" value="Active">
                <IonLabel class="label">Active</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton class="page-jobposting-segments-buttons" @click="ShowTabs('Archive')" value="Archive">
                <IonLabel class="label">Archive</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonCol>
        </IonRow>
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
          <IonCol v-if="Views == 'JobPostings'">
            <JobPostings :searchTerm="searchTerm" />
          </IonCol>
          <IonCol v-else-if="Views == 'Archive'">
            <Archive :searchTerm="searchTerm" />
            <!-- dito yung mga nakaarchive -->
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>

    <AddModal trigger="open-modal"></AddModal>
  </IonContent>
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
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/vue";
import { addCircleOutline } from "ionicons/icons";
import JobPostings from "./Employer-Postings.vue";
import Archive from "./Employer-Archive.vue";
import AddModal from "./Employer-Dashboard-Modal-AddPostings.vue";

export default {
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    JobPostings,
    Archive,
    IonCard,
    IonIcon,
    IonModal,
    AddModal,
    IonButton,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonLabel
  },
  setup() {
    return {
      addCircleOutline,
    };
  },
  data() {
    return {
      searchTerm: "",
      Views: "JobPostings",
    };
  },
  methods: {
    ShowTabs(View) {
      this.Views = View;
    },
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
