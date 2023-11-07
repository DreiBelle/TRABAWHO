<template>
  <IonPage class="jprofile-contents" ref="page">
    <IonHeader style="z-index: 1;" class="jprofile-header">

    </IonHeader>

    <IonContent>
      <div class="flexcenter jprofile-avatar-div">
        <div>
          <div class="flexcenter">
            <IonButton class="jprofile-button-editprofile">
              <IonIcon style="position: absolute; font-size: 16px;" :icon="pencilOutline"></IonIcon>
            </IonButton>
            <IonAvatar @click="modalEditprofile(true)" class="jprofile-avatar">
              <img :src="user ? user.pic : 'https://ionicframework.com/docs/img/demos/avatar.svg'" alt="image" />
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
          <IonText @click="closeads" style="position: absolute; top: 10px; right: 10px;">x</IonText>
          <IonText class="flexcenter"
            style="height: 100%; color: black; font-weight: bold; font-size: 20px; text-align: center;">
            SOME ADS TO AVAIL PREM
          </IonText>
        </IonCard>
      </div>
      <div class="flexcenter">
        <IonCard class="jprofile-cards">
          <div>
            <IonText class="flexcenter jprofile-modal-field-text jprofile-title">
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
            <IonText class="jprofile-cards-education-text">
              College
            </IonText>
            <IonCard class="jprofile-cards-education">
              {{ user ? `${user.college}` : "..." }}
            </IonCard>
          </div>
        </IonCard>
      </div>
      <div class="flexcenter">
        <IonCard class="jprofile-cards">
          <div>
            <IonText class="flexcenter jprofile-modal-field-text jprofile-title">
              PREFERENCES
            </IonText>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text">
              Hours of Work
            </IonText>
            <IonCard class="jprofile-cards-education">
              ano to??
            </IonCard>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text">
              Salary
            </IonText>
            <IonCard class="jprofile-cards-education">
              {{ user ? `${user.asd}` : "..." }}
            </IonCard>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text">
              Job type
            </IonText>
            <IonCard class="jprofile-cards-education">
              {{ user ? `${user.jobtype}` : "..." }}
            </IonCard>
          </div>
          <div>
            <IonText class="jprofile-cards-education-text">
              Location
            </IonText>
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
            <IonText class="flexcenter jprofile-modal-field-text jprofile-title">
              SPECIALTY
            </IonText>
          </div>
          <div>
            <template v-if="user && user.chosenInterests">
              <IonChip v-for="interest in user.chosenInterests" :key="interest"> {{ interest.label }} </IonChip>
            </template>
            <template v-else>
              <!-- Handle the case when user or user.chosenInterests is not defined -->
            </template>
          </div>

        </IonCard>
      </div>
    </IonContent>

    <IonModal mode="ios" :is-open="isEditprofile" @did-dismiss="modalEditprofile(false)"
      :presenting-element="presentingElement">

      <IonHeader>
        <IonToolbar>
          <IonTitle style="font-size: 15px;">
            EDIT PROFILE
          </IonTitle>
          <IonButtons slot="end">
            <IonButton style="--color: #262c5c;" @click="modalEditprofile(false)">Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div>
          <div class="flexcenter jprofile-avatar-modal-div">
            <IonAvatar class="jprofile-modal-avatar">
              <img :src=formData.pic alt="image" />
            </IonAvatar>
          </div>
          <div class="flexcenter">
            <input id="fileInput" type="file" accept="image/jpeg" ref="myfile" style="display: none" />
            <label for="fileInput" class="jprofile-button-picture">
              <IonIcon style="margin-bottom: -2px;" :icon="person"></IonIcon>
              Change Profile
            </label>
          </div>
        </div>
        <div>
          <IonCard class="jprofile-modal-cards" style=" border-top: 0px;">
            <IonInput mode="md" class="jprofile-modal-inputs" label="Name" placeholder="Enter full name"
              labelPlacement="stacked" fill="outline" v-model="formData.fullname" required>
            </IonInput>
          </IonCard>
        </div>
        <div>
          <IonCard class="jprofile-modal-cards">
            <IonText class="jprofile-modal-field-text">
              <IonIcon style="margin-bottom: -4px;" :icon="informationCircleOutline"></IonIcon>

              BASIC
            </IonText>
            <IonInput type="number" mode="md" class="jprofile-modal-inputs" label="Age" placeholder="Enter Age"
              labelPlacement="stacked" fill="outline" required>
            </IonInput>
            <IonInput type="date" mode="md" class="jprofile-modal-inputs" label="Birthday" placeholder="Enter Birthday"
              labelPlacement="stacked" fill="outline" v-model="formData.bday" required>
            </IonInput>
            <IonInput mode="md" class="jprofile-modal-inputs" label="Address" placeholder="Enter Address"
              labelPlacement="stacked" fill="outline" v-model="formData.address" required>
            </IonInput>
            <IonSelect mode="md" label="Gender" placeholder="Select gender" label-placement="stacked" interface="popover"
              fill="outline" class="jprofile-modal-inputs" v-model="formData.gender" required>
              <IonSelectOption value="Male">Male</IonSelectOption>
              <IonSelectOption value="Female">Female</IonSelectOption>
            </IonSelect>
          </IonCard>
        </div>
        <div>
          <IonCard class="jprofile-modal-cards">
            <IonText class="jprofile-modal-field-text">
              <IonIcon style="margin-bottom: -3px;" :icon="schoolOutline"></IonIcon>
              LOCATION
            </IonText>
            <IonInput mode="md" class="jprofile-modal-inputs" label="Province" placeholder="Province"
              labelPlacement="stacked" fill="outline" v-model="formData.province" required>
            </IonInput>
            <IonInput mode="md" class="jprofile-modal-inputs" label="City/Town" placeholder="City or Town"
              labelPlacement="stacked" fill="outline" v-model="formData.citown" required>
            </IonInput>
            <IonInput mode="md" class="jprofile-modal-inputs" label="District" placeholder="District - Purok"
              labelPlacement="stacked" fill="outline" v-model="formData.district" required>
            </IonInput>
            <IonInput mode="md" class="jprofile-modal-inputs" label="Street" placeholder="Street" labelPlacement="stacked"
              fill="outline" v-model="formData.street" required>
            </IonInput>
          </IonCard>
        </div>
        <div>
          <IonCard class="jprofile-modal-cards">
            <IonText class="jprofile-modal-field-text">
              <IonIcon style="margin-bottom: -3px;" :icon="phonePortraitOutline"></IonIcon>
              ACCOUNT
            </IonText>
            <IonInput type="email" mode="md" class="jprofile-modal-inputs" label="Email" placeholder="Enter Valid email"
              labelPlacement="stacked" fill="outline" required>
            </IonInput>
            <IonInput type="password" mode="md" class="jprofile-modal-inputs" label="Password"
              placeholder="Enter valid password" labelPlacement="stacked" fill="outline" required>
            </IonInput>
          </IonCard>
        </div>
        <div>
          <IonCard class="jprofile-modal-cards">
            <IonText class="jprofile-modal-field-text">
              <IonIcon style="margin-bottom: -3px;" :icon="schoolOutline"></IonIcon>
              EDUCATION
            </IonText>
            <IonInput mode="md" class="jprofile-modal-inputs" label="Elementary" placeholder="Elementary School"
              labelPlacement="stacked" fill="outline" v-model="formData.elementary" required>
            </IonInput>
            <IonInput mode="md" class="jprofile-modal-inputs" label="Junior Highschool"
              placeholder="Elementary Highschool" labelPlacement="stacked" fill="outline" v-model="formData.juniorhigh"
              required>
            </IonInput>
            <IonInput mode="md" class="jprofile-modal-inputs" label="Senior Highschool" placeholder="Senior Highschool"
              labelPlacement="stacked" fill="outline" v-model="formData.seniorhigh" required>
            </IonInput>
            <IonInput mode="md" class="jprofile-modal-inputs" label="College" placeholder="College University"
              labelPlacement="stacked" fill="outline" v-model="formData.college" required>
            </IonInput>
          </IonCard>
        </div>
        <div>
          <IonCard class="jprofile-modal-cards">
            <IonText class="jprofile-modal-field-text">
              <IonIcon style="margin-bottom: -3px;" :icon="filterOutline"></IonIcon>

              PREFERENCES
            </IonText>
            <IonSelect mode="md" label="Preffered Hours" placeholder="Select Preffered hours of work"
              label-placement="stacked" interface="popover" fill="outline" class="jprofile-modal-inputs" required>
              <IonSelectOption value="4">4hrs</IonSelectOption>
              <IonSelectOption value="8">8hrs</IonSelectOption>
              <IonSelectOption value="12">12hrs</IonSelectOption>
              <IonSelectOption value="16">16hrs</IonSelectOption>
              <IonSelectOption value="20">20hrs</IonSelectOption>
            </IonSelect>
            <IonSelect mode="md" label="years of experience" placeholder="Select years of experience"
              label-placement="stacked" interface="popover" fill="outline" class="jprofile-modal-inputs"
              v-model="formData.yearsofexp" required>
              <IonSelectOption value="0">0</IonSelectOption>
              <IonSelectOption value="1-5">1-5</IonSelectOption>
              <IonSelectOption value="6-10">6-10</IonSelectOption>
              <IonSelectOption value="11-15">11-15</IonSelectOption>
              <IonSelectOption value="16-20">16-20</IonSelectOption>
              <IonSelectOption value="21-23">21-23</IonSelectOption>
              <IonSelectOption value="24+">24+</IonSelectOption>
            </IonSelect>
            <IonSelect mode="md" class="jprofile-modal-inputs" label="Preffered Salary" label-placement="stacked"
              interface="popover" fill="outline" placeholder="Input Preffered Salary based on skills"
              v-model="formData.salary" required>
              <IonSelectOption value="0php - 5,000php">0php - 5,000php</IonSelectOption>
              <IonSelectOption value="6,000php - 10,000php">6,000php - 10,000php</IonSelectOption>
              <IonSelectOption value="11,000php - 50,000php">11,000php - 50,000php</IonSelectOption>
              <IonSelectOption value="51,000php - 100,000php">51,000php - 100,000php</IonSelectOption>
              <IonSelectOption value="100,000php and above">100,000php and above</IonSelectOption>
            </IonSelect>
            <IonSelect mode="md" class="jprofile-modal-inputs" label="Job Type" label-placement="stacked"
              interface="popover" fill="outline" placeholder="Select Preffered Job Type" :multiple="true"
              v-model="formData.jobtype" required>
              <IonSelectOption value="Full-Time">Full-Time</IonSelectOption>
              <IonSelectOption value="Part-Time">Part-Time</IonSelectOption>
              <IonSelectOption value="Contract">Contract</IonSelectOption>
              <IonSelectOption value="Temporary">Temporary</IonSelectOption>
              <IonSelectOption value="Internship">Internship</IonSelectOption>
            </IonSelect>
            <IonSelect mode="md" class="jprofile-modal-inputs" label="Location" label-placement="stacked"
              interface="popover" fill="outline" placeholder="Select Preffered Location" v-model="formData.loc" required>
              <IonSelectOption value="Work From Home">Work from home</IonSelectOption>
              <IonSelectOption value="Within the province">Within the province</IonSelectOption>
              <IonSelectOption value="Outside of the province">Outside of the province</IonSelectOption>
            </IonSelect>
          </IonCard>
        </div>
        <div>
          <IonCard class="jprofile-modal-cards" style="border-bottom: 0px;">
            <IonText class="jprofile-modal-field-text">
              <IonIcon style="margin-bottom: -3px;" :icon="pricetagOutline"></IonIcon>
              TAGS
            </IonText>
            <div class="jprofile-container-tags" v-if="chosenChoices.length > 0">
              <IonChip v-for="choice in chosenChoices" :key="choice.id">
                {{ choice.label }}
                <IonIcon class="jprofile-icon-removechoice" @click="removeChoice(choice.id)" :icon="close"></IonIcon>
              </IonChip>
              <IonIcon @click="modalInterest(true)" size="large" :icon="addCircleOutline" class="jprofile-icon-addfilter">
              </IonIcon>
            </div>
            <div v-else>
              <IonButton @click="modalInterest(true)" class="jprofile-button-addtags" fill="outline"
                style="border-radius: 100%">
                Add Specialized Fields
              </IonButton>
            </div>
          </IonCard>
        </div>
        <div>
          <IonButton expand="block" class="jprofile-modal-button-save">SAVE</IonButton>
        </div>
      </IonContent>
    </IonModal>

    <IonModal :is-open="isModalinterest" @did-dismiss="modalInterest(false)">
      <ChoiceModal style="border: 1px solid black" @choice-selected="handleChoiceSelected" />
    </IonModal>
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
import { close, pricetagOutline, addCircleOutline, filterOutline, informationCircleOutline, pencilOutline, person, phonePortraitOutline, schoolOutline, settingsOutline } from "ionicons/icons";
import router from "@/router";
import { settings } from 'ionicons/icons'
import ChoiceModal from "@/SignUp/Seeker-InterestModal.vue";
import { getDashboardProfile } from "@/Dashboard/Dashboard-Model";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebaseDB";


export default {
  components: {
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
    IonCardContent
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

    const formData = computed(() => ({
      pic: user.value?.pic || "",
      fullname: user.value?.fullname || "",
      bday: user.value?.bday || "",
      address: user.value?.address || "",
      gender: user.value?.gender || "",
      province: user.value?.province || "",
      citown: user.value?.citown || "",
      district: user.value?.district || "",
      street: user.value?.street || "",
      elementary: user.value?.elementary || "",
      juniorhigh: user.value?.juniorhigh || "",
      seniorhigh: user.value?.seniorhigh || "",
      college: user.value?.college || "",
      yearsofexp: user.value?.yearsofexp || "",
      salary: user.value?.salary || "",
      jobtype: user.value?.jobtype || "",
      loc: user.value?.loc || "",
    }));

    return {
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
      formData,

    }
  },
  data() {
    return {
      isEditprofile: false,
      presentingElement: null,
      isModalinterest: false,
      chosenChoices: [],
      adPremium: true,
    }
  },
  props: {
    userprof: {
      type: Object,
      default: null,
    },
  },
  methods: {
    closeads() {
      this.adPremium = false
    },
    removeChoice(choiceId) {
      this.chosenChoices = this.chosenChoices.filter(
        (choice) => choice.id !== choiceId
      );
    },
    modalInterest(x) {
      this.isModalinterest = x
    },
    handleChoiceSelected(choice) {
      this.chosenChoices.push(choice);
      this.isModalinterest = false;
    },
    modalEditprofile(x) {
      this.isEditprofile = x
    },

    logout() {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      GoLogin();
    },
  },
  mounted() {
    `this.presentingElement = this.$refs.page.$el;`
  },
};
</script>

<style scoped></style>
