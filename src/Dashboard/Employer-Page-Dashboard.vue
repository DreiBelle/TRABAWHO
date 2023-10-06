<!-- <template>
  <IonPage class="Dashboard-Page" id="main-content">
    <IonHeader class="Dashboard-Header">
      <div name="header">
        <IonGrid>
          <IonRow>
            <IonCol class="Dashboard-FlexCenter" size=".5">
              <IonMenuToggle>
                <img class="Dashboard-HeaderButtons" src="../assets/logosample.jpg" alt="logo" />
              </IonMenuToggle>
            </IonCol>
            <IonCol size=".5"> </IonCol>
            <IonCol size="3"> </IonCol>
            <IonCol class="Dashboard-FlexCenter" size="4">
              <IonSearchbar style="height: 10px;"> </IonSearchbar>
            </IonCol>
            <IonCol size="3"> </IonCol>
            <IonCol class="Dashboard-FlexCenter Dashboard-Icon-Message" size=".5">
              <IonIcon @click="GoEmployerMessage" :icon="chatboxEllipsesOutline"></IonIcon>
            </IonCol>
            <IonCol class="Dashboard-FlexCenter" size=".5">
              <img class="Dashboard-HeaderButtons" src="../assets/logosample.jpg" alt="profile" @click="GoEmployerHome"/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonHeader>

    <IonGrid class="Dashboard-Contents">
      <IonRow class="Dashboard-FirstRow">
        <IonCol size="10">
          <IonRow style="height: 40%">
            <IonCol class="Dashboard-FlexCenter">
              <IonRow style="height: 100%; width: 100%">
                <IonCol class="Dashboard-Container-Profile">
                  <img class="Dashboard-Profile" src="../assets/logosample.jpg" alt="profile" />
                </IonCol>
                <IonCol class="Dashboard-Container-Name"> {{ user ? `${user.businessname}` : "Loading..." }} </IonCol>
              </IonRow>
            </IonCol>
            <IonCol class="Dashboard-Container-Picture">
              <IonRow style="height: 100%; width: 100%">
                <IonCol class="Dashboard-Container-Profile">
                  <img class="Dashboard-Picture" src="../assets/companybackground.jpg" alt="picture" />
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow style="height: 60%">
            <IonCol class="Dashboard-Container-Description">
              <Description></Description>
            </IonCol>
            <IonCol class="Dashboard-FlexCenter">
              <DataAnalytics></DataAnalytics>
            </IonCol>
          </IonRow>
        </IonCol>
        <IonCol size="2">
          <IonRow style="height: 100%">
            <IonCol class="Dashboard-FlexCenter">
              <IonCard class="Dashboard-Card"> recent activities </IonCard>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
      <IonRow class="Dashboard-SecondRow">
        <IonCol>
          <IonRow style="height: 100%">
            <IonCol class="Dashboard-AddJobPostings">
              <IonCard class="Dashboard-OuterCard-JobPosting">
                <Postings></Postings>
                <IonCard id="open-modal" class="Dashboard-Card-JobPosting">
                  <IonIcon :icon="addCircleOutline"></IonIcon>
                </IonCard>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonPage>

  <IonMenu content-id="main-content">
    <IonContent>
      <IonMenuToggle>
        <SideBar />
      </IonMenuToggle>
    </IonContent>
  </IonMenu>

  <IonModal ref="modal" trigger="open-modal" style="--height: 80%; --border-radius: 20px;">
    <IonContent>
      <AddModal />
    </IonContent>
  </IonModal>
</template> -->

<template>
  <IonGrid style="height: 10%; width: 100%; padding-left: 255px">
    <IonRow style="height: 20%">
      <IonCol class="flexcenter">
        <IonCard class="dashboard-minidataanalytics-card"> likes </IonCard>
      </IonCol>
      <IonCol class="flexcenter">
        <IonCard class="dashboard-minidataanalytics-card"> views </IonCard>
      </IonCol>
      <IonCol class="flexcenter">
        <IonCard class="dashboard-minidataanalytics-card"> bookmarks </IonCard>
      </IonCol>
      <IonCol class="flexcenter">
        <IonCard class="dashboard-minidataanalytics-card"> bookmarks </IonCard>
      </IonCol>
    </IonRow>
    <IonRow style="height: 80%">
      <IonCol class="flexcenter">
        <IonCard style="height: 100%; width: 100%">
          <IonContent>
            <component :is="ShowView" />
          </IonContent>
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
        <p style="justify-content: end" class="dashboard-navbar-text-trabawho">
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
        <IonIcon class="dashboard-navbar-icons" :icon="personOutline"></IonIcon>
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
        <IonIcon class="dashboard-navbar-icons" :icon="logOutOutline"></IonIcon>
        <IonText class="dashboard-navbar-navigations">Logout</IonText>
      </IonCol>
    </IonRow>
  </IonGrid>
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
  computed: {
    ShowView() {
      if (this.Views === "DataAnalytics") {
        return "DataAnalytics";
      } else if (this.Views === "JobPostings") {
        return "JobPostings";
      } else if (this.Views === "Notifications") {
        return "Notifications";
      } else if (this.Views === "Messages") {
        return "Messages";
      } else if (this.Views === "Profile") {
        return "Profile";
      }
    },
  },
};
</script>

<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
