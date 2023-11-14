<template>
  <IonPage>
    <div v-if="isLoading"></div>
    <IonContent v-else-if="!isLoading" class="custom-scrollbar">
      <div class="audit-text-main">AUDIT LOG</div>
      <IonCard
        class="flexcenter audit-cards"
        v-for="Log in Logs"
        style="justify-content: left"
      >
        <div class="flexcenter">
          <div>
            <IonIcon style="margin-right: 20px;" :icon="chevronForward"></IonIcon>
          </div>
          <div>
            <div>
              <b>{{ Log.data.Action }}</b>
            </div>
            <div>
              {{ formatTimestamp(Log.data.DateCreated) }}
            </div>
          </div>
        </div>
      </IonCard>
    </IonContent>
  </IonPage>
</template>
<script lang="ts">
import { IonCard, IonContent, IonIcon, IonPage } from "@ionic/vue";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebaseDB";
import "./Employer-Audit.css";
import { chevronForward } from "ionicons/icons";

export default {
  components: { IonPage, IonContent, IonCard, IonIcon },
  data() {
    return {
      Logs: [],
      loggedUser: localStorage.getItem("email"),
      isLoading: false,
    };
  },
  setup() {
    return {
      chevronForward,
    };
  },
  methods: {
    formatTimestamp(timestamp) {
      const date = new Date(timestamp.seconds * 1000);
      return this.formatDate(date);
    },
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      return date.toLocaleDateString("en-US", options);
    },
    getAudits() {
      const q = query(
        collection(db, "Logs"),
        where("EmployerEmail", "==", this.loggedUser)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        this.Logs = [];
        querySnapshot.forEach((doc) => {
          this.Logs.push({ id: doc.id, data: doc.data() });
        });
      });
      this.isLoading = false;
    },
  },
  mounted() {
    this.getAudits();
  },
};
</script>
