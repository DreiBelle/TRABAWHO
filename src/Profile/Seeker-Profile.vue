<template>
  <IonPage class="jprofile-contents" ref="page">
    <IonHeader style="height: 50px">
      <IonToolbar style="height: 50px; --background: #262c5c">
        <IonButtons slot="start">
          <div>
            <img
              style="height: 30px"
              src="../assets/logo/whitefilllogo.png"
              alt="logo"
            />
          </div>
        </IonButtons> 
        <IonTitle style="text-align: center; color: white;">
          PROFILE
        </IonTitle>
        <IonButtons slot="end">
          <div>
            <IonIcon
              style="height: 30px; width: 30px; color: white"
              id="showLogout"
              :icon="logOut"
            ></IonIcon>
          </div>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <div class="flexcenter jprofile-avatar-div">
        <div>
          <div class="flexcenter">
            <IonButton class="jprofile-button-editprofile">
              <IonIcon
                style="position: absolute; font-size: 16px"
                :icon="pencilOutline"
              ></IonIcon>
            </IonButton>
            <IonAvatar @click="openEditProfileModal" class="jprofile-avatar">
              <img
                :src="
                  user
                    ? user.pic
                    : 'https://ionicframework.com/docs/img/demos/avatar.svg'
                "
                alt="image"
              />
            </IonAvatar>
          </div>
          <div class="flexcenter jprofile-text-name">
            <IonText>
              {{ user ? `${user.fullname}` : "..." }}
            </IonText>
          </div>
        </div>
      </div>
      <div>
        <div class="flexcenter">
          <IonCard class="flexcenter jprofile-cards">
            {{ user ? `${user.age}` : "..." }}
          </IonCard>
          <IonCard class="flexcenter jprofile-cards">
            {{ user ? `${user.gender}` : "..." }}
          </IonCard>
        </div>
        <div class="flexcenter">
          <IonCard class="flexcenter jprofile-cards">
            {{ user ? `${user.loc}` : "..." }}
          </IonCard>
        </div>
        <div class="flexcenter">
          <IonCard class="flexcenter jprofile-cards">
            {{ user ? `${user.contactno}` : "..." }}
          </IonCard>
        </div>
        <div class="flexcenter">
          <IonCard class="flexcenter jprofile-cards">
            {{ user ? `${user.yearsofexp}` : "..." }}
          </IonCard>
        </div>
      </div>
      <div v-if="adPremium" class="flexcenter">
        <IonCard class="jprofile-cards-ads">
          <IonText
            @click="closeads"
            style="position: absolute; top: 10px; right: 10px"
            >x</IonText
          >
          <IonText
            class="flexcenter"
            style="
              height: 100%;
              color: black;
              font-weight: bold;
              font-size: 20px;
              text-align: center;
            "
          >
            SOME ADS TO AVAIL PREM
          </IonText>
        </IonCard>
      </div>
      <div class="flexcenter">
        <IonCard class="jprofile-cards">
          <div>
            <IonText
              class="flexcenter jprofile-modal-field-text jprofile-title"
            >
              EDUCATION
            </IonText>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text">
              Elementary
            </IonText>
            <IonCard class="jprofile-cards-education">
              {{ user ? `${user.elementary}` : "..." }}
            </IonCard>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text">
              Highschool
            </IonText>
            <IonCard class="jprofile-cards-education">
              {{ user ? `${user.juniorhigh}` : "..." }}
            </IonCard>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text">
              Senior Highschool
            </IonText>
            <IonCard class="jprofile-cards-education">
              {{ user ? `${user.seniorhigh}` : "..." }}
            </IonCard>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text"> College </IonText>
            <IonCard class="jprofile-cards-education">
              {{ user ? `${user.college}` : "..." }}
            </IonCard>
          </div>
        </IonCard>
      </div>
      <div class="flexcenter">
        <IonCard class="jprofile-cards">
          <div>
            <IonText
              class="flexcenter jprofile-modal-field-text jprofile-title"
            >
              PREFERENCES
            </IonText>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text">
              Hours of Work
            </IonText>
            <IonCard class="jprofile-cards-education"> ano to?? </IonCard>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text"> Salary </IonText>
            <IonCard class="jprofile-cards-education">
              {{ user ? `${user.asd}` : "..." }}
            </IonCard>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text"> Job type </IonText>
            <IonCard class="jprofile-cards-education">
              {{ user ? `${user.jobtype}` : "..." }}
            </IonCard>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text"> Location </IonText>
            <IonCard class="jprofile-cards-education">
              {{ user ? `${user.street}` : "..." }}
              {{ user ? `${user.district}` : "..." }}
              {{ user ? `${user.citown}` : "..." }}
              {{ user ? `${user.province}` : "..." }}
            </IonCard>
          </div>
        </IonCard>
      </div>
      <div class="flexcenter">
        <IonCard class="jprofile-cards">
          <div>
            <IonText
              class="flexcenter jprofile-modal-field-text jprofile-title"
            >
              SPECIALTY
            </IonText>
          </div>
          <div>
            <template v-if="user && user.chosenInterests">
              <IonChip v-for="interest in user.chosenInterests" :key="interest">
                {{ interest.label }}
              </IonChip>
            </template>
            <template v-else>
              <!-- Handle the case when user or user.chosenInterests is not defined -->
            </template>
          </div>
        </IonCard>
      </div>
    </IonContent>

    <profileModal v-if="user" :is-profile-editmodal="isEditprofile" @close-profile-edit-modal="closeEditProfileModal"
      @open-profile-edit-modal="openEditProfileModal" :user-data="user" />
  </IonPage>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonHeader,
  IonIcon,
  IonAvatar,
  IonModal,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonCard,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonChip,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";
import Navbar from "../NavBar/NavBar.vue";
import "./Seeker-Profile.css";
import { getUserProfile } from "./Profile-Model";
import { ref, onMounted, computed } from "vue";
import { GoLogin, GoHome } from "./Profile-Controller";
import {
  logOut,
  close,
  pricetagOutline,
  addCircleOutline,
  filterOutline,
  informationCircleOutline,
  pencilOutline,
  person,
  phonePortraitOutline,
  schoolOutline,
  settingsOutline,
} from "ionicons/icons";
import router from "@/router";
import { settings } from "ionicons/icons";
import ChoiceModal from "@/SignUp/Seeker-InterestModal.vue";
import { getDashboardProfile } from "@/Dashboard/Dashboard-Model";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebaseDB";
import profileModal from "./EditProfile-Modal.vue";

export default {
  components: {
    profileModal,
    IonChip,
    ChoiceModal,
    IonSelect,
    IonSelectOption,
    IonPage,
    IonContent,
    IonGrid,
    Navbar,
    IonRow,
    IonCol,
    IonText,
    IonButton,
    IonHeader,
    IonIcon,
    IonAvatar,
    IonModal,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonCard,
    IonInput,
    IonCardTitle,
    IonCardContent,
  },
  setup() {
    const user = ref(null);

    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      user.value = await getDashboardProfile(userEmail);

      const userQuery = query(
        collection(db, "users"),
        where("email", "==", userEmail)
      );
      const userUnsubscribe = onSnapshot(userQuery, (snapshot) => {
        user.value = snapshot.docs[0]?.data();
      });
    });

    return {
      logOut,
      settings,
      pencilOutline,
      schoolOutline,
      phonePortraitOutline,
      filterOutline,
      informationCircleOutline,
      person,
      pricetagOutline,
      addCircleOutline,
      close,
      user,
    };
  },
  data() {
    return {
      isEditprofile: false,
      editedUserData: null,
      presentingElement: null,
      isModalinterest: false,
      adPremium: true,
    };
  },
  methods: {
    closeads() {
      this.adPremium = false;
    },
    modalInterest(x) {
      this.isModalinterest = x;
    },
    openEditProfileModal() {
      // Set editedUserData to the current user data
      this.editedUserData = this.user;
      this.isEditprofile = true;
      console.log(this.editedUserData);
    },
    closeEditProfileModal() {
      // Set editedUserData to the current user data
      this.isEditprofile = false;
    },

    logout() {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      GoLogin();
    },
  },
};
</script>

<style scoped></style>
