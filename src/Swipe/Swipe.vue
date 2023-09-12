<template>
  <IonPage>
    <IonHeader class="Swipe-Header">
      <IonGrid style="height: 100%; padding: 0;">
        <IonRow style="height: 100%;">
          <IonCol class="Swipe-FlexCenter" size="1.5">

          </IonCol>
          <IonCol class="Swipe-FlexCenter">

          </IonCol>
          <IonCol class="Swipe-FlexCenter" size="1.5">
            <IonIcon :icon="settingsOutline"></IonIcon>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>
    <IonGrid style="height: 100%; width: 100%; background-color: #f3f2ee">
      <IonRow style="height: 100%">
        <IonCol>
          <div class="Swipe-Background">
            <SwipeableCard
              v-if="currentCardIndex < cards.length"
              :item="cards[currentCardIndex]"
              @swipeLeft="handleSwipeLeft"
              @swipeRight="handleSwipeRight"
              style="z-index: 2"
            />
            <div v-else class="Swipe-NoMore">No more jobs</div>
            <!-- <IonCard
              style="position: absolute; z-index: 1; height: 95%; width: 80%"
            >
              asd
            </IonCard> -->
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
    <!-- <FloatingButtons style="z-index: 3;"/> -->
  </IonPage>
</template>

<script lang="ts">
import SwipeableCard from "./Swipe-Tinder.vue";
import FloatingButtons from "./Swipe-FloatingButtons.vue"
import NavBar from "../NavBar/NavBar.vue";
import "./Swipe.css";
import { settingsOutline } from "ionicons/icons";
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
    IonLabel
},
  setup() {
    return { settingsOutline };
  },
  data() {
    return {
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
      this.cards = this.cards.filter((card) => card.id);
      this.showNextCard();

      console.log("swipeLeft");
    },
    handleSwipeRight() {
      this.cards = this.cards.filter((card) => card.id);
      this.showNextCard();

      console.log("swipeRight");
    },
    showNextCard() {
      this.currentCardIndex++;
    },
  },
};
</script>

<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
