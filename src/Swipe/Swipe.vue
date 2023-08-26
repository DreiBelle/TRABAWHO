<template>
  <div class="app">
    <SwipeableCard
      v-if="currentCardIndex < cards.length"
      :item="cards[currentCardIndex]"
      @swipeLeft="handleSwipeLeft"
      @swipeRight="handleSwipeRight"
    />
    <div v-else class="no-more-cards">
      No more cards to show.
    </div>
  </div>
</template>

<script>
import SwipeableCard from "./Swipe-Tinder.vue";

export default {
  components: {
    SwipeableCard,
  },
  data() {
    return {
      currentCardIndex: 0,
      cards: [
        { id: 1, content: "Card 1" },
        { id: 2, content: "Card 2" },
        { id: 3, content: "Card 3" },
        // Add more card objects as needed
      ],
    };
  },
  methods: {
    handleSwipeLeft(item) {
      this.cards = this.cards.filter(card => card.id !== item.id);
      this.showNextCard();
    },
    handleSwipeRight(item) {
      this.cards = this.cards.filter(card => card.id !== item.id);
      this.showNextCard();
    },
    showNextCard() {
      this.currentCardIndex++;
    },
  },
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.no-more-cards {
  text-align: center;
  font-size: 18px;
  color: gray;
}
</style>
