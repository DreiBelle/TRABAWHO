<template>
  <IonPage>
    <IonHeader class="Swipe-Header">
      <IonGrid style="height: 100%; padding: 0">
        <IonRow style="height: 100%">
          <IonCol class="Swipe-FlexCenter" size="1.5"> </IonCol>
          <IonCol class="Swipe-FlexCenter"> </IonCol>
          <IonCol class="Swipe-FlexCenter" size="1.5">
            <IonIcon :icon="settingsOutline"></IonIcon>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>
    <IonGrid style="height: 100%; width: 100%; background-color: #f3f2ee">
      <IonRow style="height: 100%">
        <IonCol>
          <div class="Swipe-Background" v-if="nextCardIndex < cards.length">
            <SwipeableCard :item="cards[currentCardIndex]" @swipeLeft="handleSwipeLeft" @swipeRight="handleSwipeRight"
              style="z-index: 2" id="mainswiper" class="asd" />
            <FakeSwipeableCard :item="cards[nextCardIndex]" />
          </div>
          <div class="Swipe-Background" v-else-if="currentCardIndex < cards.length">
            <SwipeableCard :item="cards[currentCardIndex]" @swipeLeft="handleSwipeLeft" @swipeRight="handleSwipeRight"
              style="z-index: 2" id="mainswiper" class="asd" />
            <IonCard class="Swipe-Swipeable">
              no more available jobs
            </IonCard>
          </div>
          <div class="Swipe-Background" v-else>
            <IonCard class="Swipe-Swipeable">
              no more available jobs
            </IonCard>
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
import { car, settingsOutline } from "ionicons/icons";
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
    return { settingsOutline };
  },
  data() {
    return {
      nextCardIndex: 1,
      currentCardIndex: 0,
      cards: [
        { id: 1, content: "Card 1" },
        { id: 2, content: "Card 2" },
        { id: 3, content: "Card 3" },
        { id: 4, content: "Card 4" },
      ],
    };
  },
  methods: {
    handleSwipeLeft() {
      const swiper = document.getElementById("mainswiper")

      setTimeout(() => {
        swiper.style.display = 'none';
      }, 100);

      setTimeout(() => {
        swiper.style.display = 'inline';
      }, 500);

      console.log("swipe left");
      this.showNextCard();
    },

    handleSwipeRight() {
      const swiper = document.getElementById("mainswiper")

      setTimeout(() => {
        swiper.style.display = 'none';
      }, 100);

      setTimeout(() => {
        swiper.style.display = 'inline';
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
  // mounted() {
  //   this.showNextCard();
  // },
};
</script>

<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
