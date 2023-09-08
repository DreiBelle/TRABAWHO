<template>
  <IonPage>
      <IonGrid style="height: 100%;  width: 100%;;background-color: #f3f2ee">
        <IonRow style="height: 8%">
          <IonCol> </IonCol>
        </IonRow>
        <IonRow style="height: 78%">
          <IonCol>
            <div class="Swipe-Background">
              <SwipeableCard
                v-if="currentCardIndex < cards.length"
                :item="cards[currentCardIndex]"
                @swipeLeft="handleSwipeLeft"
                @swipeRight="handleSwipeRight"
              />
              <div v-else class="Swipe-NoMore">No more jobs</div>
            </div>
          </IonCol>
        </IonRow>
        <IonRow style="height: 10%">
          <IonCol>
            <NavBar />
          </IonCol>
        </IonRow>
      </IonGrid>
  </IonPage>
</template>

<script lang="ts">
import SwipeableCard from "./Swipe-Tinder.vue";
import NavBar from "../NavBar/NavBar.vue";
import "./Swipe.css";
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/vue";

export default {
  components: {
    SwipeableCard,
    NavBar,
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    IonContent,
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
