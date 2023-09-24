<template>
    <IonGrid style="height: 100%;">
        <IonRow style="height: 100%;">
            <IonCol class="flexcenter">
                <IonCard class="dashboard-listofjobposting-card">
                    <IonContent>
                        <div class="Dashboard-Container-EmployerPosting" id="myElement" v-if="jobPostings.length > 0">
                            <IonCard class="Dashboard-Card-Postings" v-for="(job, index) in jobPostings" :key="index">
                                <IonGrid style="height: 100%;">
                                    <IonRow style="height: 12%;">
                                        <!-- <IonCol size="2.5" class="Dashboard-AddJobPostings-Card-Container flexcenter">
                                            <img class="Dashboard-AddJobPostings-Card-Picture" :src="job ? job.pic : ''"
                                                alt="">
                                        </IonCol> -->
                                        <IonCol style="padding: 0;">
                                            <IonRow style="height: 100%;">
                                                <IonCol size="10.5">
                                                    <IonRow style="height: 40%;">
                                                        <IonCol>
                                                            {{ job ? job.jobname : "Loading..." }}
                                                        </IonCol>
                                                    </IonRow>
                                                    <IonRow style="height: 60%;">
                                                        <IonCol>
                                                            <IonContent>
                                                                {{ job ? job.jobdes : "Loading..." }}
                                                            </IonContent>
                                                        </IonCol>
                                                    </IonRow>
                                                </IonCol>
                                                <IonCol>
                                                    <IonRow style="height: 33%;">
                                                        <IonCol>
                                                            views
                                                        </IonCol>
                                                    </IonRow>
                                                    <IonRow style="height: 33%;">
                                                        <IonCol>
                                                            likes
                                                        </IonCol>
                                                    </IonRow>
                                                    <IonRow style="height: 33%;">
                                                        <IonCol>
                                                            bookmark
                                                        </IonCol>
                                                    </IonRow>
                                                </IonCol>
                                            </IonRow>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCard>
                        </div>
                        <div v-else>
                            No job postings available for your company.
                        </div>
                    </IonContent>
                </IonCard>
            </IonCol>
        </IonRow>
    </IonGrid>
</template>

<script lang="ts">
import { IonCard, IonCol, IonGrid, IonRow, IonText, IonContent, IonPage, IonInfiniteScroll } from '@ionic/vue';
import { getJobPostings } from '@/Dashboard/Dashboard-Model';
import { getDashboardProfile } from "./Dashboard-Model"
import { ref, onMounted, onUnmounted } from "vue";
import { collection, onSnapshot, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseDB";

export default {
    components: { IonCard, IonGrid, IonRow, IonCol, IonText, IonContent, IonPage, IonInfiniteScroll },
    methods: {
        images() {
            const pictureElement = document.getElementById("picture");
            var picturelink = 'url("../assets-public/companybackground.jpg")'
            // pictureElement.style.backgroundImage = picturelink;
            // pictureElement.style.backgroundSize = 'cover';
        },
    },
    setup() {

        const user = ref(null);
        const jobPostings = ref([]);

        const updateJobPostings = (snapshot) => {
            jobPostings.value = snapshot.docs.map((doc) => doc.data());
        };

        onMounted(async () => {
            const userEmail = localStorage.getItem("email");
            // const userPassword = localStorage.getItem("password");
            user.value = await getDashboardProfile(userEmail);

            jobPostings.value = await getJobPostings(userEmail, user.value.businessname);


            const jobPostingsRef = collection(db, "jobpost");
            const q = query(jobPostingsRef, where("company", "==", user.value.businessname));

            // Set up a real-time listener for job postings
            const unsubscribe = onSnapshot(q, (snapshot) => {
                updateJobPostings(snapshot);
            });

            // Remember to unsubscribe when the component is unmounted
            // onUnmounted(unsubscribe);
            //para san to? -emman may vue warn kasi
        });


        return {
            user, // Expose user ref to the template
            jobPostings,
        };
    },
    async mounted() {
        this.images();
    }
}
</script>

<style>
/* ion-col {
    border: 1px solid black;
} */
</style>