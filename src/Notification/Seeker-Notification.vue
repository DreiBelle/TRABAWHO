<template>
  <IonPage>
    <IonProgressBar style="z-index:;" v-if="isLoading" type="indeterminate"></IonProgressBar>
    <IonHeader mode="md" style="height: 50px">
      <IonToolbar style="height: 100%; --background: #262c5c">
        <IonButtons style="padding-left: 10px" slot="start">
          <div>
            <img
              style="height: 30px"
              src="../assets/logo/whitefilllogo.png"
              alt="logo"
            />
          </div>
        </IonButtons>
        <IonTitle mode="ios">
          <IonText class="jnotif-header-title"> NOTIFICATION </IonText>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonRefresher
        style="background: none; z-index: 4"
        slot="fixed"
        @ionRefresh="handleRefresh($event)"
      >
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <div
        class="flexcenter jnotif-list-container"
        v-for="notifs in notification"
      >
        <IonIcon
          style="width: 100px"
          class="jnotif-icons"
          :icon="mail"
        ></IonIcon>
        <IonText @click="goMessage()">
          You can now message with <b> {{ notifs.data.EmployerName }} </b> about
          their job post you applied <b>{{ notifs.data.JobSwipe }}!</b>
        </IonText>
      </div>
    </IonContent>
  </IonPage>
</template>
<script lang="ts">
import {
  IonHeader,
  IonPage,
  IonContent,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonText,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
IonProgressBar,
} from "@ionic/vue";
import "./Seeker-Notification.css";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  limit,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebaseDB";
import { mail, notifications } from "ionicons/icons";
import router from "@/router";

export default {
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonText,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonButton,
    IonRefresher,
    IonRefresherContent,
    IonProgressBar
},
  setup() {
    return { mail };
  },
  data() {
    return {
      user: localStorage.getItem("email"),
      notification: [],
      isLoading: true,
    };
  },
  methods: {
    handleRefresh(event: CustomEvent<RefresherEventDetail>) {
      this.checkNotif();
      setTimeout(() => {
        event.detail.complete();
      }, 500);
    },
    goMessage() {
      router.push("/Seeker-Message");
    },
    checkNotif() {
      this.isLoading = true;
      const q = query(
        collection(db, "MessagesUsers"),
        where("SeekerEmail", "==", this.user),
        where("SeekerActive", "==", true)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        this.notification = []; // Clear existing data

        snapshot.forEach((doc) => {
          this.notification.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        this.isLoading = false;
      });

      
      // onUnmounted(unsubscribe);
    },
  },
  mounted() {
    this.checkNotif();
  },
};
</script>
<style></style>
