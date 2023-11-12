<template>
  <div v-if="isLoading">
    <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
      <IonGrid style="height: 100%; padding: 0">
        <IonRow style="height: 100%">
          <IonCol class="flexcenter" style="padding: 0; justify-content: left">
            <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
    <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
      <IonGrid style="height: 100%; padding: 0">
        <IonRow style="height: 100%">
          <IonCol class="flexcenter" style="padding: 0; justify-content: left">
            <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
    <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
      <IonGrid style="height: 100%; padding: 0">
        <IonRow style="height: 100%">
          <IonCol class="flexcenter" style="padding: 0; justify-content: left">
            <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
    <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
      <IonGrid style="height: 100%; padding: 0">
        <IonRow style="height: 100%">
          <IonCol class="flexcenter" style="padding: 0; justify-content: left">
            <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
    <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
      <IonGrid style="height: 100%; padding: 0">
        <IonRow style="height: 100%">
          <IonCol class="flexcenter" style="padding: 0; justify-content: left">
            <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
    <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
      <IonGrid style="height: 100%; padding: 0">
        <IonRow style="height: 100%">
          <IonCol class="flexcenter" style="padding: 0; justify-content: left">
            <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  </div>
  <div v-else-if="!isLoading">
    <div id="myElement" v-if="jobPostings.length > 0">
      <IonCard class="dashboard-postedjobs-jobposting" v-for="(job, index) in filteredJobPostings" :key="index"
        @click="OpenViewModal(index)">
        <div class="flexcenter" style="height: 100%; width: 100%;">
          <div style="width: 150px; height: 100%;">
            <img class="Dashboard-AddJobPostings-Card-Picture" :src="job ? job.pic : ''" alt="" />
          </div>
          <div style="width: calc(100% - 390px); padding-left: 20px; font-weight: bold;">
            {{ job ? job.jobname : "Loading..." }} 
          </div>
          <div class="flexcenter" style="width: 70px;">
            <IonIcon style="padding-right: 5px; font-size: 19px;" :icon="eyeSharp"></IonIcon> 
            <IonText style="font-size: 15px;">{{ job ? job.views : "Loading..." }}</IonText>
          </div>
          <div  class="flexcenter" style="width: 70px;">
            <IonIcon style="padding-right: 5px; font-size: 19px;" :icon="thumbsUp"></IonIcon>
            <IonText style="font-size: 15px;">{{ job ? job.likes : "Loading..." }}</IonText>
          </div>
          <div class="flexcenter postings-arhive-container" style="width: 100px; height: 100%;">
            <IonIcon class="postings-arhive-button flexcenter" :icon="chevronForward"></IonIcon>
          </div>
        </div>
      </IonCard>
    </div>
    <div v-else class="flexcenter">
      <IonText class="postings-noposting-text" style="margin-top: 50px;">
        NO POSTINGS
      </IonText>
    </div>
  </div>

  <ViewModal :is-viewmodal="isViewmodal" @close-view-modal="CloseViewModal" @open-view-modal="OpenViewModal"
    :is-open="isViewmodal" :job-posting="selectedJobPosting" />

  <!-- <IonModal
    ref="modal"
    :is-open="Editmodal"
    @close="CloseEditModal"
    style="--height: 600px; --width: 500px; --border-radius: 20px"
  >
    <IonContent>
      <ViewModal />
    </IonContent>
  </IonModal> -->
</template>

<script lang="ts">
import {
  IonCard,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
  IonContent,
  IonPage,
  IonInfiniteScroll,
  IonIcon,
  IonSkeletonText,
  IonCardHeader,
  IonModal,
} from "@ionic/vue";
import { eyeSharp, thumbsUp, bookmark, close, archive, chevronForward } from "ionicons/icons";
import { getJobPostings } from "@/Dashboard/Dashboard-Model";
import { getDashboardProfile } from "./Dashboard-Model";
import { ref, onMounted, onUnmounted } from "vue";
import EditModal from "./Dashboard-Modals/Dashboard-EditJobPosting.vue";
import ViewModal from "./Dashboard-Modals/Dashboard-ViewJobPosting.vue";

import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebaseDB";

export default {
  components: {
    ViewModal,
    EditModal,
    IonSkeletonText,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonContent,
    IonPage,
    IonInfiniteScroll,
    IonIcon,
    IonCardHeader,
    IonModal,
  },
  setup() {
    const user = ref(null);
    const jobPostings = ref([]);
    const filterjobPostings = ref([]);
    const isLoading = ref(true)

    const updateJobPostings = (snapshot) => {
      jobPostings.value = snapshot.docs.map((doc) => doc.data());
    };

    onMounted(async () => {
      isLoading.value = true

      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");
      user.value = await getDashboardProfile(userEmail);

      jobPostings.value = await getJobPostings(
        userEmail,
        user.value.businessname,
        user.value.id,
      );

      console.log(jobPostings.value.length);

      const jobPostingsRef = collection(db, "jobpost");
      const q = query(jobPostingsRef,
        where("company", "==", user.value.id),
        where("isactive", "==", "activate")
      );

      // Set up a real-time listener for job postings
      const unsubscribe = onSnapshot(q, (snapshot) => {
        updateJobPostings(snapshot);
        jobPostings.value = snapshot.docs.map((doc) => ({
          documentID: doc.id, // Add the document ID to each job posting
          ...doc.data(), // Include other document data
        }));
      });

      // Remember to unsubscribe when the component is unmounted
      // onUnmounted(unsubscribe);
      //para san to? -emman may vue warn kasi
      isLoading.value = false
    });

    return {
      user, // Expose user ref to the template
      jobPostings,
      eyeSharp,
      thumbsUp,
      bookmark,
      close,
      filterjobPostings,
      archive,
      chevronForward,
      isLoading,
    };
  },
  computed: {
    filteredJobPostings() {
      return this.jobPostings.filter((job) => {
        return job.jobname
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
  },
  data() {
    return {
      isViewmodal: false,
      selectedJobPosting: null,
    };
  },
  methods: {
    OpenViewModal(index) {
      this.isViewmodal = true;
      console.log(index);
      this.selectedJobPosting = this.jobPostings[index];
      console.log("Document ID:", this.selectedJobPosting.documentID);
      // document.addEventListener("click", this.handleClickOutside);
    },
    CloseViewModal() {
      this.isViewmodal = false;
      // document.removeEventListener("click", this.handleClickOutside);
    },
    handleClickOutside(event) {
      const modal = this.$refs.modal.$el;
      if (modal && !modal.contains(event.target)) {
        this.CloseViewModal();
      }
    },
  },
  props: {
    searchTerm: {
      type: String,
    },
  },
};
</script>

<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
