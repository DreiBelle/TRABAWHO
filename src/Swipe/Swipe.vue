<template>
  <IonPage>
    <IonHeader class="Swipe-Header">
      <IonGrid style="height: 100%; padding: 0">
        <IonRow style="height: 100%">
          <IonCol class="Swipe-FlexCenter" size="2">
            <img
              class="swipe-logo"
              src="../assets/logo/whitefilllogo.png"
              alt="logo"
            />
          </IonCol>
          <IonCol class="Swipe-FlexCenter"> </IonCol>
          <IonCol class="Swipe-FlexCenter" size="2">
            <IonIcon class="swipe-icon" :icon="settings"></IonIcon>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>
    <IonGrid style="height: 100%; width: 100%; background: whitesmoke">
      <IonRow style="height: 100%">
        <IonCol>
          <div class="Swipe-Background" v-if="nextCardIndex < cards.length">
            <SwipeableCard
              :item="cards[currentCardIndex]"
              @swipeLeft="handleSwipeLeft"
              @swipeRight="handleSwipeRight"
              style="z-index: 2"
              id="mainswiper"
              class="asd"
            />
            <FakeSwipeableCard :item="cards[nextCardIndex]" />
          </div>
          <div
            class="Swipe-Background"
            v-else-if="currentCardIndex < cards.length"
          >
            <SwipeableCard
              :item="cards[currentCardIndex]"
              @swipeLeft="handleSwipeLeft"
              @swipeRight="handleSwipeRight"
              style="z-index: 2"
              id="mainswiper"
              class="asd"
            />
            <IonCard class="Swipe-Swipeable"> no more available jobs </IonCard>
          </div>
          <div class="Swipe-Background" v-else>
            <IonCard class="Swipe-Swipeable"> no more available jobs </IonCard>
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
    <!-- <FloatingButtons style="z-index: 3;"/> -->
  </IonPage>
</template>

<script lang="ts">
import SwipeableCard from "./Swipe-Tinder.vue";
import FakeSwipeableCard from "./FakeSwipe-Tinder.vue";
import FloatingButtons from "./Swipe-FloatingButtons.vue";
import NavBar from "../NavBar/NavBar.vue";
import "./Swipe.css";
import { car, settings } from "ionicons/icons";
import { getJobs } from "./Swipe-Model";
import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/vue";
import { dbImage } from "@/firebaseDB";
import { getDownloadURL, ref } from "firebase/storage";
import { ref as asd, onMounted } from "vue";
import { getUserProfile } from "../Profile/Profile-Model";
export default {
  components: {
    FakeSwipeableCard,
    FloatingButtons,
    SwipeableCard,
    NavBar,
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    IonContent,
    IonCard,
    IonHeader,
    IonTabBar,
    IonTabs,
    IonTabButton,
    IonIcon,
    IonRouterOutlet,
    IonLabel,
  },
  setup() {
    return { settings };
  },
  data() {
    return {
      nextCardIndex: 1,
      currentCardIndex: 0,
      cards: [],
    };
  },
  methods: {
    handleSwipeLeft() {
      const swiper = document.getElementById("mainswiper");

      setTimeout(() => {
        swiper.style.display = "none";
      }, 100);

      setTimeout(() => {
        swiper.style.display = "inline";
      }, 500);

      console.log("swipe left");
      this.showNextCard();
    },

    handleSwipeRight() {
      const swiper = document.getElementById("mainswiper");

      setTimeout(() => {
        swiper.style.display = "none";
      }, 100);

      setTimeout(() => {
        swiper.style.display = "inline";
      }, 500);

      console.log("swipe right");
      this.showNextCard();
    },

    showNextCard() {
      this.currentCardIndex++;
      setTimeout(() => {
        this.nextCardIndex++;
      }, 501);
    },
  },

  async mounted() {
    try {
      const user = asd(null);
      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");
      user.value = await getUserProfile(userEmail);

      const chosenInterest = Array.from(user.value.chosenInterests);
      // console.log("chosen interest:" + chosenInterest.values);

      const jobs = await getJobs(chosenInterest); // this function fetches jobs from Firestore

      // Fetch image URLs from Firebase Storage for each job
      const jobsWithImages = await Promise.all(
        jobs.map(async (job) => {
          const imageUrl = await getDownloadURL(ref(dbImage, job.pic));
          return {
            content: job.jobname,
            picture: imageUrl, // Now `picture` contains the image URL
            jobtype: job.jobtype,
            jobdescription: job.jobdes,
          };
        })
      );

      this.cards = jobsWithImages;
      this.showNextCard();
    } catch (error) {
      console.error("Error fetching jobs: ", error);
    }
  },

  // mounted() {
  //   this.showNextCard();
  // },
};
</script>

<style>
ion-col {
  border: 1px solid black;
}
</style>
