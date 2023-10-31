<template>
  <IonPage style="background-color: rgb(236, 228, 228); color: black">
    <IonGrid style="height: 10%; width: 100%; padding: 0px 0px 0px 250px">
      <IonRow style="height: 30px; background: #202651;">
        <IonCol>
          <IonText style="color: white; justify-content: right; display: flex;"> 
            Welcome Back! 
            {{ user ? `${user.businessname}` : "Loading..." }}
            <IonIcon style="padding-left: 5px;" :icon="personOutline"></IonIcon>
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow style="height: 20%; padding-top: 10px;">
        <IonCol class="flexcenter">
          <IonCard class="dashboard-minidataanalytics-card"> likes </IonCard>
        </IonCol>
        <IonCol class="flexcenter">
          <IonCard class="dashboard-minidataanalytics-card"> views </IonCard>
        </IonCol>
        <IonCol class="flexcenter">
          <IonCard class="dashboard-minidataanalytics-card">
            bookmarks
          </IonCard>
        </IonCol>
      </IonRow>
      <IonRow class="page-components-container">
        <IonCol class="flexcenter">
          <IonCard style="height: 100%; width: 100%; background-color: azure;">
            <component :is="Views"/>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>

    <!-- navbar to -->
    <IonGrid class="dashboard-navbar-container">
      <IonRow>
        <IonCol
          class="dashboard-navbar-flexcenter dashboard-navbar-cols"
          style="height: 70px"
        >
          <img
            class="dashboard-navbar-logo"
            src="../assets/logo/whitefilllogo.png"
            alt="logo"
          />
          <p
            style="justify-content: end"
            class="dashboard-navbar-text-trabawho"
          >
            TRABAWHO
          </p>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol class="dashboard-navbar-flexcenter dashboard-navbar-cols">
          <IonIcon class="dashboard-navbar-icons" :icon="homeOutline"></IonIcon>
          <IonText class="dashboard-navbar-navigations">Home</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol
          @click="ShowTabs('Profile')"
          class="dashboard-navbar-flexcenter dashboard-navbar-cols"
        >
          <IonIcon
            class="dashboard-navbar-icons"
            :icon="personOutline"
          ></IonIcon>
          <IonText class="dashboard-navbar-navigations">Profile</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol
          @click="ShowTabs('JobPostings')"
          class="dashboard-navbar-flexcenter dashboard-navbar-cols"
        >
          <IonIcon
            class="dashboard-navbar-icons"
            :icon="documentOutline"
          ></IonIcon>
          <IonText class="dashboard-navbar-navigations">Job Postings</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol
          @click="ShowTabs('DataAnalytics')"
          class="dashboard-navbar-flexcenter dashboard-navbar-cols"
        >
          <IonIcon
            class="dashboard-navbar-icons"
            :icon="analyticsOutline"
          ></IonIcon>
          <IonText class="dashboard-navbar-navigations">Data Analytics</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol
          @click="ShowTabs('Notifications')"
          class="dashboard-navbar-flexcenter dashboard-navbar-cols"
        >
          <IonIcon
            class="dashboard-navbar-icons"
            :icon="notificationsOutline"
          ></IonIcon>
          <IonText class="dashboard-navbar-navigations">Notification</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol
          @click="ShowTabs('Messages')"
          class="dashboard-navbar-flexcenter dashboard-navbar-cols"
        >
          <IonIcon
            class="dashboard-navbar-icons"
            :icon="chatboxEllipsesOutline"
          ></IonIcon>
          <IonText class="dashboard-navbar-navigations">Messages</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol
          @click="handleSignout"
          class="dashboard-navbar-flexcenter dashboard-navbar-cols"
          style="position: absolute; bottom: 10px"
        >
          <IonIcon
            class="dashboard-navbar-icons"
            :icon="logOutOutline"
          ></IonIcon>
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
} from "@ionic/vue";
import {
  homeOutline,
  personOutline,
  documentOutline,
  analyticsOutline,
  notificationsOutline,
  logOutOutline,
  chatboxEllipsesOutline,
} from "ionicons/icons";
import "./Employer-Dashboard.css";
import SideBar from "./Employer-Sidebar.vue";
import JobPostings from "./Employer-JobPosting.vue";
import DataAnalytics from "./Employer-DataAnalytics.vue";
import Messages from "./Employer-Message.vue";
import Profile from "./Employer-Profile.vue";
import Notifications from "./Employer-Notification.vue";
import AddModal from "./Employer-Dashboard-Modal-AddPostings.vue";
import { getDashboardProfile } from "./Dashboard-Model";
import { ref, onMounted } from "vue";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebaseDB";
import { GoHome } from "./Employer-Dashboard-Controller";
const isLoggedIn = ref(false);

export default {
  components: {
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
  },
  setup() {
    const user = ref(null);

    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");
      user.value = await getDashboardProfile(userEmail);

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
    };
  },
  data() {
    return {
      Views: "JobPostings",
    };
  },
  methods: {
    closeModal() {
      modalController.dismiss();
    },
    ShowTabs(View) {
      this.Views = View;
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
