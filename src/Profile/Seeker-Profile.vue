<template>
  <IonPage>
    <IonHeader class="Seeker-Profile-Header">
      <IonGrid style="height: 100%; width: 100%; padding: 0">
        <IonRow style="height: 45%">
          <IonCol class="Seeker-Profile-FlexCenter" size="1.5">P</IonCol>
          <IonCol
            class="Seeker-Profile-FlexCenter"
            style="justify-content: left"
          >
            <IonText>
              {{
                user
                  ? `${user.firstName} ${user.middleName} ${user.lastName} ${user.suffix}`
                  : "Loading..."
              }}
            </IonText>
          </IonCol>
          <IonCol class="Seeker-Profile-FlexCenter" size="1.5">
            <IonIcon onclick="GoHome()" :icon="settingsOutline"></IonIcon>
          </IonCol>
        </IonRow>
        <IonRow style="height: 20%; width: 100%">
          <IonCol class="Seeker-Profile-Tabs-Container" id="Experience">
            <IonButton
              class="Seeker-Profile-Buttons"
              fill="clear"
              expand="block"
              @click="ShowTabs('Experience')"
              id="ExperienceButton"
            >
              Experience
            </IonButton>
          </IonCol>
          <IonCol class="Seeker-Profile-Tabs-Container" id="Educational">
            <IonButton
              class="Seeker-Profile-Buttons"
              fill="clear"
              expand="block"
              @click="ShowTabs('Educational')"
              id="EducationalButton"
            >
              Educational
            </IonButton>
          </IonCol>
          <IonCol class="Seeker-Profile-Tabs-Container" id="Skills">
            <IonButton
              class="Seeker-Profile-Buttons"
              fill="clear"
              expand="block"
              @click="ShowTabs('Skills')"
              id="SkillsButton"
            >
              Skills
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>

    <IonGrid
      style="height: 100%; color: black; background-color: #f3f2ee; width: 100%"
    >
      <IonRow style="background-color: #f9f6ee; height: 100%">
        <IonCol class="Seeker-Profile-Information-Container">
          <IonContent class="Seeker-Profile-IonContent">
            <component :is="ShowComponents" />
          </IonContent>
        </IonCol>
      </IonRow>
    </IonGrid>
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
} from "@ionic/vue";
import Navbar from "../NavBar/NavBar.vue";
import EducationalBackground from "./Seeker-Profile-Education.vue";
import Experience from "./Seeker-Profile-Experience.vue";
import Skills from "./Seeker-Profile-Skills.vue";
import Settings from "./Seeker-Profile-Settings.vue";
import "./Seeker-Profile.css";
import { getUserProfile } from "./Profile-Model";
import { ref, onMounted, computed } from "vue";
import { GoLogin } from "./Profile-Controller";
import { settingsOutline } from "ionicons/icons";
import router from "@/router";

export default {
  components: {
    IonPage,
    IonContent,
    IonGrid,
    Navbar,
    IonRow,
    IonCol,
    IonText,
    EducationalBackground,
    Experience,
    Skills,
    IonButton,
    Settings,
    IonHeader,
    IonIcon,
  },
  setup() {
    const user = ref(null);

    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");
      user.value = await getUserProfile(userEmail);

      document
          .getElementById("ExperienceButton")
          .classList.add("Seeker-Profile-Tabs-Button");
    });

    return {
      user, // Expose user ref to the template
      settingsOutline,
    };
  },
  data() {
    return {
      Tabs: "Experience",
    };
  },
  methods: {
    ShowTabs(tab) {
      this.Tabs = tab;

      if (this.Tabs === "Experience") {
        document
          .getElementById("ExperienceButton")
          .classList.add("Seeker-Profile-Tabs-Button");
        document
          .getElementById("EducationalButton")
          .classList.remove("Seeker-Profile-Tabs-Button");
        document
          .getElementById("SkillsButton")
          .classList.remove("Seeker-Profile-Tabs-Button");
      } else if (this.Tabs === "Educational") {
        document
          .getElementById("ExperienceButton")
          .classList.remove("Seeker-Profile-Tabs-Button");
        document
          .getElementById("EducationalButton")
          .classList.add("Seeker-Profile-Tabs-Button");
        document
          .getElementById("SkillsButton")
          .classList.remove("Seeker-Profile-Tabs-Button");
      } else if (this.Tabs === "Skills") {
        document
          .getElementById("ExperienceButton")
          .classList.remove("Seeker-Profile-Tabs-Button");
        document
          .getElementById("EducationalButton")
          .classList.remove("Seeker-Profile-Tabs-Button");
        document
          .getElementById("SkillsButton")
          .classList.add("Seeker-Profile-Tabs-Button");
      }
    },
    logout() {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      GoLogin();
    },
    GoHome(){
      router.push("./home")
    }
  },
  computed: {
    ShowComponents() {
      if (this.Tabs === "Experience") {
        return "Experience";
      } else if (this.Tabs === "Educational") {
        return "EducationalBackground";
      } else if (this.Tabs === "Skills") {
        return "Skills";
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
