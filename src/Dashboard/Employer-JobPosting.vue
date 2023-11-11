<template>
  <IonContent style="--background: none;">
    <div class="dashboard-content-jobposting"
      v-if="user && (user.founders && user.businessname && user.email && user.loc && user.number && user.pic && user.bacpic && user.yearsofest)">
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
    <div class="flexcenter" style="height: 100%" v-else>
      <div>
        <div class="flexcenter">
          <IonText class="eprofie-text-startbuilding">
            START BUILDING <br />
            YOUR PROFILE
          </IonText>
        </div>
        <div class="flexcenter">
          <IonButton @click="ocModal(true)" fill="outline" class="eprofile-button-edit2">
            <IonIcon style="padding-right: 5px" :icon="pencil"></IonIcon>
            EDIT PROFILE
          </IonButton>
        </div>
      </div>
    </div>

    <AddModal :isAddmodal="isAddOpen" @open-profile-modal="addModal(false)"></AddModal>
    <ProfileModal :isProfilemodal="isProfileOpen" @close-profile-modal="addModal(false)" />
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
  IonText,
} from "@ionic/vue";
import { addCircleOutline } from "ionicons/icons";
import JobPostings from "./Employer-Postings.vue";
import Archive from "./Employer-Archive.vue";
import AddModal from "./Employer-Dashboard-Modal-AddPostings.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { getDashboardProfile } from "./Dashboard-Model";
import ProfileModal from "./Dashboard-Modals/Profile-Edit.vue";
import {
  pencil,
  logoFacebook,
  logoGoogle,
  logoTwitter,
  logoInstagram,
  eye,
  thumbsUp,
  bookmark,
  chevronForward,
} from "ionicons/icons";
import { collection, onSnapshot, query, where } from "@firebase/firestore";
import { db } from "@/firebaseDB";

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
    IonLabel,
    ProfileModal,
    IonText,
  },
  setup() {
    const user = ref(null);
    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      user.value = await getDashboardProfile(userEmail);

      const userQuery = query(
        collection(db, "users"),
        where("email", "==", userEmail)
      );
      const userUnsubscribe = onSnapshot(userQuery, (snapshot) => {
        user.value = snapshot.docs[0]?.data();
      });
    });
    return {
      addCircleOutline,
      user,
      pencil,
    };
  },
  data() {
    return {
      searchTerm: "",
      Views: "JobPostings",
      isProfileOpen: false,
      isAddOpen: false,
    };
  },
  methods: {
    ShowTabs(View) {
      this.Views = View;
    },
    ocModal(x) {
      this.isProfileOpen = x;
    },
    addModal(x) {
      this.isAddOpen = x;
    },
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
