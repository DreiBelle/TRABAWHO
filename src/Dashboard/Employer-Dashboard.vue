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
  <IonPage class="dashboard-home-Container">
    <IonGrid style="height: 100%; width: 100%; padding-left: 255px;">
      <IonRow>
        <IonCol>
          helloooooooooooooooooooo
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          helloooooooooooooooooooo
        </IonCol>
        <IonCol>
          helloooooooooooooooooooo
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
import "./Employer-Dashboard.css";
import Postings from "./Employer-Postings.vue";
import Description from "./Employer-Description.vue";
import DataAnalytics from "./Employer-DataAnalytics.vue";
import SideBar from "./Employer-Sidebar.vue";
import AddModal from "./Employer-Dashboard-Modal-AddPostings.vue";
import { getDashboardProfile } from "./Dashboard-Model"
import { ref, onMounted, computed } from "vue";
import { addCircleOutline, chatboxEllipsesOutline } from 'ionicons/icons'
import { GoEmployerMessage, GoEmployerHome } from "./Employer-Dashboard-Controller"

export default {
  components: {
    SideBar,
    DataAnalytics,
    Description,
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
    Postings,
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
    });

    return {
      user, addCircleOutline, chatboxEllipsesOutline
    };
  },
  methods: {
    closeModal() {
      modalController.dismiss();
    },
    GoEmployerMessage,
    GoEmployerHome,
  },
};
</script>

<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
