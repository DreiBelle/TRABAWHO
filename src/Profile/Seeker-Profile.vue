<template>
  <IonPage class="jprofile-contents" ref="page">
    <IonAlert
      mode="ios"
      trigger="signOut"
      header="Log Out"
      :buttons="alertButtons"
    ></IonAlert>

    <IonHeader mode="md" style="height: 50px">
      <IonToolbar style="height: 50px; --background: #262c5c">
        <IonButtons style="padding-left: 10px" slot="start">
          <div>
            <img
              style="height: 30px"
              src="../assets/logo/whitefilllogo.png"
              alt="logo"
            />
          </div>
        </IonButtons>
        <IonTitle class="jprofile-header-title" mode="ios"> PROFILE </IonTitle>
        <IonButtons style="padding-right: 10px" slot="end">
          <div id="signOut">
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
          <IonCard class="flexcenter jprofile-cards"> {{ age }} y/o </IonCard>
          <IonCard class="flexcenter jprofile-cards">
            {{ user ? `${user.gender}` : "..." }}
          </IonCard>
        </div>
        <div class="flexcenter">
          <IonCard class="flexcenter jprofile-cards">
            {{ user ? `${user.street}` : "..." }},
            {{ user ? `${user.district}` : "..." }},
            {{ user ? `${user.citown}` : "..." }},
            {{ user ? `${user.province}` : "..." }}
          </IonCard>
        </div>
        <div class="flexcenter">
          <IonCard class="flexcenter jprofile-cards">
            {{ user ? `${user.contactno}` : "..." }}
          </IonCard>
        </div>
        <div class="flexcenter">
          <IonCard class="flexcenter jprofile-cards">
            {{ user ? `${user.yearsofexp}` : "..." }} years of experience
          </IonCard>
        </div>
      </div>
      <!-- <div v-if="adPremium" class="flexcenter">
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
      </div> -->
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
            <IonText class="jprofile-cards-education-text"> Salary </IonText>
            <IonCard class="jprofile-cards-education">
              {{ user ? `${user.salary}` : 0 }}
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
              {{ user ? `${user.loc}` : "..." }}
            </IonCard>
          </div>
        </IonCard>
      </div>

      <div class="flexcenter">
        <IonCard class="jprofile-cards">
          <div class="flexcenter">
            <div style="width: 100%">
              <IonText
                class="flexcenter jprofile-modal-field-text jprofile-title"
                style="
                  border-radius: 100px 0 0 100px;
                  width: 100%;
                  padding-left: 50px;
                "
              >
                EXPERIENCES
              </IonText>
            </div>
            <div
              @click="addExpmodal(true)"
              class="flexcenter jprofile-avatar-add-experience"
            >
              <IonIcon
                class="jprofile-icon-add-experience"
                :icon="add"
              ></IonIcon>
            </div>
          </div>
          <div
            style="
              display: flex;
              height: fit-content;
              overflow-x: auto;
              width: 100%;
              white-space: nowrap;
            "
          >
            <IonCard
              v-for="experience in experiences"
              style="
                min-width: 300px;
                width: fit-content;
                height: fit-content;
                flex: 1 0 auto;
                margin: 5px;
                padding: 0;
              "
              @click="
                editExpmodal(
                  true,
                  experience.data.JobTitle,
                  experience.data.CompanyName,
                  experience.data.StartDate,
                  experience.data.EndDate,
                  experience.data.ResDuty,
                  experience.data.Skills,
                  experience.id
                )
              "
            >
              <div
                class="flexcenter"
                style="background-color: #515782; color: white; height: 30px"
              >
                <IonText
                  style="font-size: 20px; font-family: BebasNeue-Regular"
                >
                  {{ experience.data.JobTitle }}
                </IonText>
              </div>
              <div style="padding: 5px">
                <IonText style="color: black">
                  <p
                    style="margin-top: 5px"
                    class="jprofile-text-margin-bottom"
                  >
                    <b>Company Name: </b> {{ experience.data.CompanyName }}
                  </p>

                  <p class="jprofile-text-margin-bottom">
                    <b>Date of Employment: </b>
                    {{ experience.data.StartDate }} to
                    {{ experience.data.EndDate }}
                  </p>

                  <p class="jprofile-text-margin-bottom">
                    <b>Responsibilities and Duties: </b>
                    {{ experience.data.ResDuty }}
                  </p>

                  <p
                    class="jprofile-text-margin-bottom"
                    style="padding-bottom: 10px"
                  >
                    <b>Skills Utilized: </b> {{ experience.data.Skills }}
                  </p>
                </IonText>
              </div>
            </IonCard>
          </div>
        </IonCard>
      </div>

      <div class="flexcenter">
        <IonCard class="jprofile-cards">
          <div class="flexcenter">
            <div style="width: 100%">
              <IonText
                class="flexcenter jprofile-modal-field-text jprofile-title"
                style="
                  border-radius: 100px 0 0 100px;
                  width: 100%;
                  padding-left: 50px;
                "
              >
                AWARDS
              </IonText>
            </div>
            <div
              @click="addAwardsmodal(true)"
              class="flexcenter jprofile-avatar-add-experience"
            >
              <IonIcon
                class="jprofile-icon-add-experience"
                :icon="add"
              ></IonIcon>
            </div>
          </div>
          <div
            style="
              display: flex;
              height: fit-content;
              overflow-x: auto;
              width: 100%;
              white-space: nowrap;
            "
          >
            <IonCard
              v-for="award in awards"
              style="
                min-width: 300px;
                width: fit-content;
                height: fit-content;
                flex: 1 0 auto;
                margin: 5px;
                padding: 0;
              "
              @click="
                editAwardmodal(
                  true,
                  award.data.AwardName,
                  award.data.AwardWhere,
                  award.data.AwardWhen,
                  award.id
                )
              "
            >
              <div
                class="flexcenter"
                style="background-color: #515782; color: white; height: 30px"
              >
                <IonText
                  style="font-size: 20px; font-family: BebasNeue-Regular"
                >
                  {{ award.data.AwardName }}
                </IonText>
              </div>
              <div style="padding: 5px">
                <IonText style="color: black">
                  <p
                    style="margin-top: 5px"
                    class="jprofile-text-margin-bottom"
                  >
                    <b>Where: </b> {{ award.data.AwardWhere }}
                  </p>
                  <p
                    class="jprofile-text-margin-bottom"
                    style="padding-bottom: 10px"
                  >
                    <b>When: </b> {{ award.data.AwardWhen }}
                  </p>
                </IonText>
              </div>
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
            <div>
              <IonText class="jprofile-cards-education-text">
                <b>Preffered Classification </b> 
              </IonText>
              <IonCard class="jprofile-cards-education">
                {{ user ? `${user.classification}` : "..." }}
              </IonCard>
            </div>
            <div>
              <IonText class="jprofile-cards-education-text">
                <b>Sub-Classification</b>
              </IonText>
              <IonCard class="jprofile-cards-education">
                {{ user ? `${user.subclassification}` : "..." }}
              </IonCard>
            </div>
            <IonChip
              v-if="user && user.chosenInterests"
              v-for="interest in user.chosenInterests"
              :key="interest"
            >
              {{ interest }}
            </IonChip>
          </div>
        </IonCard>
      </div>
    </IonContent>

    <profileModal
      v-if="user"
      :is-profile-editmodal="isEditprofile"
      @close-profile-edit-modal="closeEditProfileModal"
      @open-profile-edit-modal="openEditProfileModal"
      :user-data="user"
    />

    <Expmodal
      @close-exp-modal="addExpmodal(false)"
      :is-addexp="isAddexp"
    ></Expmodal>

    <Awardmodal
      @close-award-modal="addAwardsmodal(false)"
      :is-addaward="isAddaward"
    ></Awardmodal>

    <EditExpmodal
      @close-exp-edit-modal="editExpmodal(false, '', '', '', '', '', '', '')"
      :is-editexp="isEditexp"
      :pass-company-name="CompanyName"
      :pass-end-date="EndDate"
      :pass-job-title="JobTitle"
      :pass-res-duty="ResDuty"
      :pass-skills="Skills"
      :pass-start-date="StartDate"
      :pass-expid="ExpId"
    ></EditExpmodal>

    <EditAwardmodal
      @close-award-edit-modal="editAwardmodal(false, '', '', '', '')"
      :is-editaward="isEditaward"
      :pass-award-name="AwardName"
      :pass-award-when="AwardWhen"
      :pass-award-where="AwardWhere"
      :pass-award-id="AwardId"
    ></EditAwardmodal>
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
  IonAlert,
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
  add,
} from "ionicons/icons";
import router from "@/router";
import { settings } from "ionicons/icons";
import ChoiceModal from "@/SignUp/Seeker-InterestModal.vue";
import { getDashboardProfile } from "@/Dashboard/Dashboard-Model";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebaseDB";
import profileModal from "./EditProfile-Modal.vue";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseDB";
import Expmodal from "./Profile-AddExp.vue";
import Awardmodal from "./Profile-AddAward.vue";
import EditExpmodal from "./Profile-EditExp.vue";
import EditAwardmodal from "./Profile-EditAward.vue";

export default {
  components: {
    EditAwardmodal,
    Awardmodal,
    EditExpmodal,
    Expmodal,
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
    IonAlert,
  },
  setup() {
    const user = ref(null);
    const age = ref(0);

    const alertButtons = [
      {
        text: "Cancel",
        role: "cancel",
      },
      {
        text: "OK",
        role: "confirm",
        handler: () => {
          signOut(auth).then(() => {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            GoHome();
          });
        },
      },
    ];

    const calculateAge = (birthdate) => {
      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return age;
    };

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

      age.value = calculateAge(user.value.bday);
    });

    return {
      alertButtons,
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
      age,
      add,
    };
  },
  data() {
    return {
      loggedUser: localStorage.getItem("email"),
      isEditprofile: false,
      editedUserData: null,
      presentingElement: null,
      isModalinterest: false,
      adPremium: true,
      aged: 0,
      isAddexp: false,
      isEditexp: false,
      experiences: [],
      JobTitle: "",
      CompanyName: "",
      StartDate: "",
      EndDate: "",
      ResDuty: "",
      Skills: "",
      ExpId: "",

      isAddaward: false,
      isEditaward: false,
      awards: [],
      AwardName: "",
      AwardWhere: "",
      AwardWhen: "",
      AwardId: "",
    };
  },
  methods: {
    addAwardsmodal(x) {
      this.isAddaward = x;
    },
    getExperiences() {
      const q = query(
        collection(db, "Experiences"),
        where("SeekerId", "==", this.loggedUser),
        where("Removed", "==", false)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        this.experiences = [];
        querySnapshot.forEach((doc) => {
          this.experiences.push({ id: doc.id, data: doc.data() });
        });
      });
    },
    getAwards() {
      const q = query(
        collection(db, "Awards"),
        where("SeekerId", "==", this.loggedUser),
        where("Removed", "==", false)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        this.awards = [];
        querySnapshot.forEach((doc) => {
          this.awards.push({ id: doc.id, data: doc.data() });
        });
      });
    },
    editExpmodal(x, title, name, start, end, res, skill, idexp) {
      this.JobTitle = title;
      this.CompanyName = name;
      this.StartDate = start;
      this.EndDate = end;
      this.ResDuty = res;
      this.Skills = skill;
      this.ExpId = idexp;
      this.isEditexp = x;
      console.log("printing" + this.JobTitle);
    },
    editAwardmodal(x, name, where, when, id) {
      this.AwardName = name;
      this.AwardWhere = where;
      this.AwardWhen = when;
      this.AwardId = id;
      this.isEditaward = x;
    },
    addExpmodal(x) {
      this.isAddexp = x;
    },
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
  mounted() {
    this.getExperiences();
    this.getAwards();
  },
};
</script>

<style scoped></style>
