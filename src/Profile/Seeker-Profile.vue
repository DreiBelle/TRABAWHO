<template>
  <IonPage>
    <IonContent>
      <IonGrid style="height: 100vh">
        <IonRow>
          <IonCol class="Seeker-Profile-Picture-Container">
            <img
              class="Seeker-Profile-Picture"
              src="../assets/logosample.jpg"
              alt="profile"
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="Seeker-Profile-Name-Container">
            <IonText> First Name, Middle Name, Last Name, Suffix </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol
            size="4"
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
          <IonCol
            size="4"
            class="Seeker-Profile-Tabs-Container"
            id="Educational"
          >
            <IonButton
              class="Seeker-Profile-Buttons"
              fill="clear"
              expand="block"
              @click="ShowTabs('Educational')"
            >
              Educational
            </IonButton>
          </IonCol>
          <IonCol size="4" class="Seeker-Profile-Tabs-Container" id="Skills">
            <IonButton
              class="Seeker-Profile-Buttons"
              fill="clear"
              expand="block"
              @click="ShowTabs('Skills')"
            >
              Skills
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow style="background-color: #f9f6ee">
          <IonCol class="Seeker-Profile-Information-Container">
            <component :is="ShowComponents" />
          </IonCol>
        </IonRow>
        <Navbar />
      </IonGrid>
    </IonContent>
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
import "./Seeker-Profile.css";

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
      } else if (this.Tabs === "Educational") {
        document.getElementById("Experience").style.background = "white";
        document.getElementById("Educational").style.background = "#F9F6EE";
        document.getElementById("Skills").style.background = "white";
      } else if (this.Tabs === "Skills") {
        document.getElementById("Experience").style.background = "white";
        document.getElementById("Educational").style.background = "white";
        document.getElementById("Skills").style.background = "#F9F6EE";
      }
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
      }
    },
  },
};
</script>

<style></style>
