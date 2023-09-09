<template>
  <IonPage>
    <IonGrid
      style="height: 100%; color: black; background-color: #f3f2ee; width: 100%"
    >
      <IonRow style="height: 20%">
        <IonCol class="Seeker-Profile-Picture-Container">
          <img
            style="border: 1px solid black"
            class="Seeker-Profile-Picture"
            src="../assets/logosample.jpg"
            alt="profile"
          />
        </IonCol>
      </IonRow>
      <IonRow style="height: 5%">
        <IonCol class="Seeker-Profile-Name-Container">
          <IonText>
            {{
              user
                ? `${user.firstName} ${user.middleName} ${user.lastName} ${user.suffix}`
                : "Loading..."
            }}
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow style="height: 7%">
        <IonCol
          size="3"
          class="Seeker-Profile-Tabs-Container"
          id="Experience"
          style="background-color: #f9f6ee"
        >
          <IonButton
            class="Seeker-Profile-Buttons"
            fill="clear"
            expand="block"
            @click="ShowTabs('Experience')"
          >
            Experience
          </IonButton>
        </IonCol>
        <IonCol size="3" class="Seeker-Profile-Tabs-Container" id="Educational">
          <IonButton
            class="Seeker-Profile-Buttons"
            fill="clear"
            expand="block"
            @click="ShowTabs('Educational')"
          >
            Educational
          </IonButton>
        </IonCol>
        <IonCol size="3" class="Seeker-Profile-Tabs-Container" id="Skills">
          <IonButton
            class="Seeker-Profile-Buttons"
            fill="clear"
            expand="block"
            @click="ShowTabs('Skills')"
          >
            Skills
          </IonButton>
        </IonCol>
        <IonCol size="3" class="Seeker-Profile-Tabs-Container" id="Settings">
          <IonButton
            class="Seeker-Profile-Buttons"
            fill="clear"
            expand="block"
            @click="ShowTabs('Settings')"
          >
            Settings
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow style="background-color: #f9f6ee; height: 54%">
        <IonCol class="Seeker-Profile-Information-Container">
          <IonContent class="Seeker-Profile-IonContent">
            <component :is="ShowComponents" />  
          </IonContent>
        </IonCol>
      </IonRow>
      <IonRow style="height: 10%">
        <IonCol>
          <Navbar/>
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
  },
  setup() {
    const user = ref(null);

    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");
      user.value = await getUserProfile(userEmail);
    });

    return {
      user, // Expose user ref to the template
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
        document.getElementById("Experience").style.background = "#F9F6EE";
        document.getElementById("Educational").style.background = "white";
        document.getElementById("Skills").style.background = "white";
        document.getElementById("Settings").style.background = "white";
      } else if (this.Tabs === "Educational") {
        document.getElementById("Experience").style.background = "white";
        document.getElementById("Educational").style.background = "#F9F6EE";
        document.getElementById("Skills").style.background = "white";
        document.getElementById("Settings").style.background = "white";
      } else if (this.Tabs === "Skills") {
        document.getElementById("Experience").style.background = "white";
        document.getElementById("Educational").style.background = "white";
        document.getElementById("Skills").style.background = "#F9F6EE";
        document.getElementById("Settings").style.background = "white";
      } else if (this.Tabs === "Settings") {
        document.getElementById("Experience").style.background = "white";
        document.getElementById("Educational").style.background = "white";
        document.getElementById("Skills").style.background = "white";
        document.getElementById("Settings").style.background = "#F9F6EE";
      }
    },
    logout() {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      GoLogin();
    },
  },
  computed: {
    ShowComponents() {
      if (this.Tabs === "Experience") {
        return "Experience";
      } else if (this.Tabs === "Educational") {
        return "EducationalBackground";
      } else if (this.Tabs === "Skills") {
        return "Skills";
      } else if (this.Tabs === "Settings") {
        return "Settings";
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
