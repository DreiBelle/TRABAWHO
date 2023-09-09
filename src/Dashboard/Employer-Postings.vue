<template>
    <ion-content>
        <div class="job-postings-container" v-if="jobPostings.length > 0">
            <div v-for="(job, index) in jobPostings" :key="index" class="job-item">
                <!-- Job Title -->
                <div class="job-title">
                    <h2>{{ job ? job.jobname : "Loading..." }}</h2>
                </div>
                <!-- Job Picture -->
                <div class="job-picture">
                    <img :src="job ? job.pic : 'loading.png'" alt="Job Picture" />
                </div>
                <!-- Job Description -->
                <div class="job-description">
                    <div class="Dashboard-Overflow-Postings">
                        {{ job ? job.jobdes : "Loading..." }}
                    </div>
                </div>
                <!-- Like, Bookmarks, and Additional Actions -->
                <div class="job-actions">
                    Like
                    Bookmarks
                    <!-- Additional columns or actions here -->
                </div>
            </div>
        </div>
        <div v-else>
            No job postings available for your company.
        </div>
    </ion-content>
</template>
<style scoped>
.job-postings-container {
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling if needed */
}

.job-item {
  margin: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 300px; /* Adjust as needed */
  margin-right: 20px; /* Adjust spacing between job postings */
}

.job-title h2 {
  font-size: 1.5rem;
  margin: 0;
}

.job-picture img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.job-description {
  margin-top: 10px;
}

.job-actions {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
}

ion-icon {
  margin-right: 5px;
  font-size: 1.2rem;
}
</style>
<script lang="ts">
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/vue';
import { getJobPostings } from '@/Dashboard/Dashboard-Model';
import { getDashboardProfile } from "./Dashboard-Model"
import { ref, onMounted } from "vue";
export default {
    components: { IonCard, IonGrid, IonRow, IonCol, IonText },
    methods: {
        images() {
            const pictureElement = document.getElementById("picture");
            var picturelink = 'url("../assets-public/companybackground.jpg")'
            // pictureElement.style.backgroundImage = picturelink;
            // pictureElement.style.backgroundSize = 'cover';
        }
    },
    setup() {

        const user = ref(null);
        const jobPostings = ref([]);

        onMounted(async () => {
            const userEmail = localStorage.getItem("email");
            // const userPassword = localStorage.getItem("password");
            user.value = await getDashboardProfile(userEmail);

            jobPostings.value = await getJobPostings(userEmail, user.value.businessname);
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