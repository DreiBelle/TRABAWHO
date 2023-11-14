<template>
    <div class="flexcenter">
        <IonSearchbar class="dashboard-navbar-topbar-searchbar" v-model="searchTerm"></IonSearchbar>
    </div>
    <div class="flexcenter">
        <IonButton @click="addjobModal(true)" class="admin-adduser">Add Jobpost</IonButton>
    </div>
    <div style="height: 90%;">
        <IonContent class="custom-scrollbar">
            <div class="admin-manageuser-cards-container">
                <IonCard v-for="job in filteredSearch" class="flexcenter admin-manageuser-card"
                    @click="viewjobModal(true, job.documentID)">
                    <IonGrid style="height: 100%; padding: 0;">
                        <IonRow style="height: 100%;">
                            <IonCol size="2" style="padding: 0;">
                                <img class="admin-manageuser-picture" v-if="job.pic" :src="job.pic" alt="picture">
                                <img class="admin-manageuser-picture" v-if="!job.pic"
                                    src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="picture">
                            </IonCol>
                            <IonCol size="9.3">
                                <IonRow style="height: 33%;">
                                    <IonCol class="admin-manageuser-borderbottom" style="border-top: 1px solid grey;">
                                        <IonText class="admin-manageuser-text" v-if="job.jobname">
                                            <b>Name:</b> {{ job.jobname }}
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                                <IonRow style="height: 33%;">
                                    <IonCol class="admin-manageuser-borderbottom">
                                        <IonText class="admin-manageuser-text">
                                            <b>Created by:</b> {{ job.creator }}
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                                <IonRow style="height: 33%;">
                                    <IonCol class="admin-manageuser-borderbottom">
                                        <IonText class="admin-manageuser-text">
                                            <b>Date Created:</b> {{ job.dateCreated }}
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol size=".7" class="flexcenter admin-manageuser-icons admin-manageuser-open">
                                <IonIcon :icon="chevronForward">

                                </IonIcon>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
            </div>
        </IonContent>
    </div>

    <addjob :is-addjobmodal="isjob" @close-add-job="addjobModal(false)"></addjob>

    <viewjob :pass-id="passID" :is-viewmodal="isviewJob" @close-view-modal="viewjobModal(false, '')"></viewjob>
</template>
<script lang="ts">
import { IonCard, IonContent, IonList, IonSearchbar, IonPage, IonGrid, IonRow, IonCol, IonIcon, IonText, IonModal, IonSelect, IonSelectOption, IonButton } from '@ionic/vue';
import './admin.css'
import { chevronForward, filter } from 'ionicons/icons';
import {
    collection,
    onSnapshot,
    query,
    orderBy,
    where,
} from "firebase/firestore";
import { db } from "@/firebaseDB";
import { ref, onMounted } from 'vue';
import addjob from './adminModal-Addjobpost.vue'
import viewjob from './adminModal-Viewjob.vue'
import { getJobPostings } from './admin-Model';

export default {
    components: { IonPage, IonSearchbar, IonList, IonCard, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonText, IonModal, IonSelect, IonSelectOption, IonButton, addjob, viewjob },
    setup() {
        const jobPostings = ref([]);
        onMounted(async () => {
            const updateJobPostings = (snapshot) => {
                jobPostings.value = snapshot.docs.map((doc) => doc.data());
            };

            const jobPostingsRef = collection(db, "jobpost");
            const q = query(jobPostingsRef,where("isactive", "!=", "Removed"));

            const unsubscribe = onSnapshot(q, (snapshot) => {
                updateJobPostings(snapshot);
                jobPostings.value = snapshot.docs.map((doc) => ({
                    documentID: doc.id,
                    ...doc.data(),
                }));
            });

            
        });

        return {
            jobPostings,
            filter,
            chevronForward,
        }
    },
    data() {
        return {
            searchTerm: "",
            filterJobtype: "",
            isfilterModal: false,
            isviewJob: false,
            isjob: false,
            passID: "",
        }
    },
    methods: {
        viewjobModal(x, id) {
            this.isviewJob = x
            this.passID = id
        },
        addjobModal(x) {
            this.isjob = x
        },
    },
    computed: {
        filteredSearch() {
            console.log(this.jobPostings)
            return this.jobPostings.filter((job) => {
                console.log(job.documentID)
                const searchTermLower = this.searchTerm.toLowerCase();
                return (
                    (job.dateCreated && job.dateCreated.toLowerCase().includes(searchTermLower)) ||
                    (job.creator && job.creator.toLowerCase().includes(searchTermLower)) ||
                    (job.jobname && job.jobname.toLowerCase().includes(searchTermLower))
                );
            });
        }

    },
}
</script>
