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
    <div v-else>
      <div id="myElement" v-if="jobPostings.length > 0">
        <IonCard
          class="dashboard-postedjobs-jobposting"
          v-for="(job, index) in filteredJobPostings"
          :key="index"
          @click="OpenViewModal(index)"
        >
          <IonGrid style="height: 100%; padding: 0">
            <IonRow style="height: 100%">
              <IonCol
                class="flexcenter"
                style="padding: 0; justify-content: left"
              >
                <img
                  class="Dashboard-AddJobPostings-Card-Picture"
                  :src="job ? job.pic : ''"
                  alt=""
                />
              </IonCol>
              <IonCol class="flexcenter" style="justify-content: left" size="8">
                {{ job ? job.jobname : "Loading..." }}
              </IonCol>
              <IonCol class="flexcenter">
                <IonIcon style="padding-right: 5px" :icon="eyeSharp"></IonIcon> {{ job ? job.views : "Loading..." }}
              </IonCol>
              <IonCol class="flexcenter">
                <IonIcon style="padding-right: 5px" :icon="thumbsUp"></IonIcon> {{ job ? job.likes : "Loading..." }}
              </IonCol>
              <IonCol class="flexcenter postings-arhive-container">
                <IonIcon
                  class="postings-arhive-button flexcenter"
                  :icon="chevronForward"
                ></IonIcon>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </div>
      <div v-else>No job postings available for your company.</div>
    </div>
  
    <ViewModal
      :is-viewmodal="isViewmodal"
      @close-view-modal="CloseViewModal"
      @open-view-modal="OpenViewModal"
      :is-open="isViewmodal"
      :job-posting="selectedJobPosting"
    />
  
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
  
      const updateJobPostings = (snapshot) => {
        jobPostings.value = snapshot.docs.map((doc) => doc.data());
      };
  
      onMounted(async () => {
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
          where("isactive", "==", "notactivate")
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
        isLoading: true,
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
        required: true,
        type: String,
      },
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  };
  </script>
  
  <style>
  /* ion-col {
    border: 1px solid black;
  } */
  </style>
  