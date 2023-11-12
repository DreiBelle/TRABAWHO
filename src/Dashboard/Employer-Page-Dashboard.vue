<template>
  <div v-if="isLoading == true">
    <div class="flexcenter" style="height: 100vh; width: 100vw; background: linear-gradient(to bottom right, white, #a6aad4)">
      <div>
        <div class="flexcenter">
          <img class="dashboard-TrabaWho-Logo" src="../assets/logo/blackfilllogo.png">
          <IonText class="dashboard-TrabaWho-text">
            TRABAWHO
          </IonText>
        </div>
        <div class="flexcenter">
          <IonSpinner class="dashboard-Loading" name="crescent"></IonSpinner>
        </div>
      </div>
    </div>
  </div>
  <IonPage v-else-if="isLoading == false" style="background-color: rgb(236, 228, 228); color: black">
    <IonGrid style="height: 10%; width: 100%; padding: 0px 0px 0px 250px">
      <IonRow style="height: 30px; background: #202651">
        <IonCol>
          <IonText style="color: white; justify-content: right; display: flex">
            Welcome Back!
            {{ user ? `${user.businessname}` : "Loading..." }}
            <IonIcon style="padding-left: 5px" :icon="personOutline"></IonIcon>
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow style="height: 20%;">
        <IonCol class="flexcenter">
          <IonCard class="flexcenter dashboard-minidataanalytics-card">
            <div>
              <div class="flexcenter">
                <IonText class="flexcenter dashboard-minicard-title">
                  <IonIcon class="dashboard-minicard-icon" :icon="thumbsUp"></IonIcon>
                  LIKES
                </IonText>
              </div>
              <div class="flexcenter">
                <IonText class="flexcenter dashboard-minicard-number">
                  {{ likes }}
                </IonText>
              </div>
            </div>
          </IonCard>
        </IonCol>
        <IonCol class="flexcenter">
          <IonCard class="flexcenter dashboard-minidataanalytics-card">
            <div>
              <div class="flexcenter">
                <IonText class="flexcenter dashboard-minicard-title">
                  <IonIcon class="dashboard-minicard-icon" :icon="eye"></IonIcon>
                  VIEWS
                </IonText>
              </div>
              <div class="flexcenter">
                <IonText class="flexcenter dashboard-minicard-number">
                  {{ views }}
                </IonText>
              </div>
            </div>
          </IonCard>
        </IonCol>
        <IonCol class="flexcenter">
          <IonCard class="flexcenter dashboard-minidataanalytics-card">
            <div>
              <div class="flexcenter">
                <IonText class="flexcenter dashboard-minicard-title">
                  <IonIcon class="dashboard-minicard-icon" :icon="briefcase"></IonIcon>
                  POSTINGS
                </IonText>
              </div>
              <div class="flexcenter">
                <IonText class="flexcenter dashboard-minicard-number">
                  {{ jobPostings.length }}
                </IonText>
              </div>
            </div>
          </IonCard>
        </IonCol>
      </IonRow>
      <IonRow class="page-components-container">
        <IonCol class="flexcenter">
          <IonCard style="height: 100%; width: 100%; background-color: azure">
            <component @go-to-posting="goPosting" :is="Views" @clear-all="clearAll()" v-bind:pass-id="passId"
              v-bind:pass-email="passEmail" v-bind:pass-job="passJob" v-bind:passTorF="ArchiveorNot"
              v-bind:pass-name="passName" v-bind:pass-pic="passPicture" @go-messages="goMessages"
              @go-messages-data="getMessagedata" />
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>

    <!-- navbar to -->
    <IonGrid class="dashboard-navbar-container">
      <IonRow>
        <IonCol class="dashboard-navbar-flexcenter dashboard-navbar-cols" style="height: 70px">
          <img class="dashboard-navbar-logo" src="../assets/logo/whitefilllogo.png" alt="logo" />
          <p style="justify-content: end" class="dashboard-navbar-text-trabawho">
            TRABAWHO
          </p>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol @click="ShowTabs('Home')" class="dashboard-navbar-flexcenter dashboard-navbar-cols">
          <IonIcon class="dashboard-navbar-icons" :icon="homeOutline"></IonIcon>
          <IonText class="dashboard-navbar-navigations">Home</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol @click="ShowTabs('Profile')" class="dashboard-navbar-flexcenter dashboard-navbar-cols">
          <IonIcon class="dashboard-navbar-icons" :icon="personOutline"></IonIcon>
          <IonText class="dashboard-navbar-navigations">Profile</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol @click="ShowTabs('JobPostings')" class="dashboard-navbar-flexcenter dashboard-navbar-cols">
          <IonIcon class="dashboard-navbar-icons" :icon="briefcaseOutline"></IonIcon>
          <IonText class="dashboard-navbar-navigations">Job Postings</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol @click="ShowTabs('DataAnalytics')" class="dashboard-navbar-flexcenter dashboard-navbar-cols">
          <IonIcon class="dashboard-navbar-icons" :icon="analyticsOutline"></IonIcon>
          <IonText class="dashboard-navbar-navigations">Data Analytics</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol @click="ShowTabs('Notifications')" class="dashboard-navbar-flexcenter dashboard-navbar-cols">
          <IonIcon class="dashboard-navbar-icons" :icon="notificationsOutline"></IonIcon>
          <IonText class="dashboard-navbar-navigations">Notification</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol @click="ShowTabs('Messages')" class="dashboard-navbar-flexcenter dashboard-navbar-cols">
          <IonIcon class="dashboard-navbar-icons" :icon="chatboxEllipsesOutline"></IonIcon>
          <IonText class="dashboard-navbar-navigations">Messages</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol @click="ShowTabs('Audit')" class="dashboard-navbar-flexcenter dashboard-navbar-cols">
          <IonIcon class="dashboard-navbar-icons" :icon="documentOutline"></IonIcon>
          <IonText class="dashboard-navbar-navigations">Recent Activities</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol @click="handleSignout" class="dashboard-navbar-flexcenter dashboard-navbar-cols"
          style="position: absolute; bottom: 10px">
          <IonIcon class="dashboard-navbar-icons" :icon="logOutOutline"></IonIcon>
          <IonText class="dashboard-navbar-navigations">Logout</IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonPage>
</template>

<script lang="ts">
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenu,
  IonMenuToggle,
  IonModal,
  modalController,
  IonPage,
  IonRow,
  IonSearchbar,
  IonText,
  IonIcon,
  IonSpinner,
} from "@ionic/vue";
import {
  homeOutline,
  personOutline,
  documentOutline,
  analyticsOutline,
  notificationsOutline,
  logOutOutline,
  chatboxEllipsesOutline,
  person,
  thumbsUp,
  briefcaseOutline,
  eye,
  briefcase,
} from "ionicons/icons";
import "./Employer-Dashboard.css";
import SideBar from "./Employer-Sidebar.vue";
import JobPostings from "./Employer-JobPosting.vue";
import DataAnalytics from "./Employer-DataAnalytics.vue";
import Messages from "./Employer-Message.vue";
import Profile from "./Employer-Profile.vue";
import Home from "./Employer-Home.vue";
import Notifications from "./Employer-Notification.vue";
import Audit from './Employer-Audit.vue'
import AddModal from "./Employer-Dashboard-Modal-AddPostings.vue";
import { getDashboardProfile, getJobPostings } from "./Dashboard-Model";
import { ref, onMounted } from "vue";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebaseDB";
import { GoHome } from "./Employer-Dashboard-Controller";
const isLoggedIn = ref(false);

export default {
  components: {
    Audit,
    Home,
    Profile,
    Notifications,
    Messages,
    DataAnalytics,
    JobPostings,
    SideBar,
    IonContent,
    IonPage,
    IonHeader,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonButton,
    IonCard,
    IonText,
    IonMenu,
    IonMenuToggle,
    IonModal,
    AddModal,
    IonIcon,
    IonSpinner
  },
  setup() {
    const user = ref(null);
    const jobPostings = ref([]);
    let likes = ref(0);
    let views = ref(0);
    const isLoading = ref(true);

    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      try {
        isLoading.value = true

        setTimeout(() => {
          document.querySelector('.dashboard-TrabaWho-Logo')?.classList.add('dashboard-loaded');
          document.querySelector('.dashboard-TrabaWho-text')?.classList.add('dashboard-loaded');
        }, 1);

        // const userPassword = localStorage.getItem("password");
        user.value = await getDashboardProfile(userEmail);

        jobPostings.value = await getJobPostings(
          userEmail,
          user.value.businessname,
          user.value.id
        );

        jobPostings.value.forEach((jobPosting) => {
          likes.value += jobPosting.likes;
          views.value += jobPosting.views;
        });

        isLoading.value = false;
      } catch (error) {
        console.error("Error fetching data:", error);
        isLoading.value = false;
      }

      onAuthStateChanged(auth, (user) => {
        if (user) {
          isLoggedIn.value = true;
        } else {
          isLoggedIn.value = false;
        }
      });
    });

    return {
      homeOutline,
      personOutline,
      documentOutline,
      analyticsOutline,
      notificationsOutline,
      logOutOutline,
      chatboxEllipsesOutline,
      user,
      jobPostings,
      likes,
      views,
      person,
      thumbsUp,
      briefcaseOutline,
      eye,
      briefcase,
      isLoading,
    };
  },
  emits: ['go-to-posting'],
  data() {
    return {
      Views: "JobPostings",
      passName: "",
      passJob: "",
      passPicture: "",
      passEmail: "",
      passId: "",
      ArchiveorNot: true,
    };
  },
  methods: {
    clearAll() {
      this.passName = ""
      this.passJob = ""
      this.passPicture = ""
      this.passEmail = ""
      this.passId = ""
    },
    getMessagedata(name, job, picture, email, id) {
      this.passName = name
      this.passJob = job
      this.passPicture = picture
      this.passEmail = email
      this.passId = id
    },
    goMessages(x) {
      this.Views = "Messages"
      if (x == null) {
        this.ArchiveorNot = true
      } else if (x != null) {
        this.ArchiveorNot = x
      }
    },
    goPosting() {
      this.Views = "JobPostings"
    },
    closeModal() {
      modalController.dismiss();
    },
    ShowTabs(View) {
      setTimeout(() => {
        this.Views = View;
      }, 100);
    },
    handleSignout() {
      signOut(auth).then(() => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        GoHome();
      });
    },
  },
};
</script>

<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
