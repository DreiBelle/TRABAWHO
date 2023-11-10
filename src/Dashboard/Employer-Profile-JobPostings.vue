<template>
    <div id="myElement" v-if="jobPostings.length > 0">
        <IonCard class="dashboard-postedjobs-jobposting" v-for="(job, index) in jobPostings" :key="index"
            @click="OpenViewModal(index)">
            <IonGrid style="height: 100%; padding: 0">
                <IonRow style="height: 100%">
                    <IonCol class="flexcenter" style="padding: 0; justify-content: left">
                        <img class="Dashboard-AddJobPostings-Card-Picture" :src="job ? job.pic : ''" alt="" />
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
                        <IonIcon class="postings-arhive-button flexcenter" :icon="chevronForward"></IonIcon>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    </div>
    <div v-else>No job postings available for your company.</div>

    <ViewModal :is-viewmodal="isViewmodal" @close-view-modal="CloseViewModal" @open-view-modal="OpenViewModal"
        :is-open="isViewmodal" :job-posting="selectedJobPosting" />
        
</template>
<script lang="ts">
import { IonCard, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/vue';
import { chevronForward, eyeSharp, thumbsUp } from 'ionicons/icons';
import { ref, onMounted, onUnmounted } from "vue";
import { getDashboardProfile } from "./Dashboard-Model";
import { getJobPostings } from "@/Dashboard/Dashboard-Model";
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
    components: { IonCard, IonGrid, IonRow, IonCol, IonIcon, ViewModal },
    data() {
        return {
            isLoading: true,
            isViewmodal: false,
            selectedJobPosting: null,
        };
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
        });

        return {
            user, // Expose user ref to the template
            jobPostings,
            eyeSharp,
            thumbsUp,
            close,
            filterjobPostings,
            chevronForward,
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
    }
}
</script>