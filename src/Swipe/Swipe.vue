<template>
  <div class="Swipe-Background">
    <SwipeableCard
      v-if="currentCardIndex < cards.length"
      :item="cards[currentCardIndex]"
      @swipeLeft="handleSwipeLeft"
      @swipeRight="handleSwipeRight"
    />
    <div v-else class="Swipe-NoMore">No more jobs</div>
    <NavBar/>
  </div>
</template>

<script lang="ts">
import SwipeableCard from "./Swipe-Tinder.vue";
import NavBar from "../NavBar/NavBar.vue";
import "./Swipe.css";

export default {
  components: {
    SwipeableCard,
    NavBar,
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


