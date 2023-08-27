<template>
  <div
    class="swipeable-card"
    :style="{ transform: `translateX(${position}px)` }"
    @mousedown="startSwipe"
    @mousemove="swipe"
    @mouseup="endSwipe"
    @touchstart="startSwipe"
    @touchmove="swipe"
    @touchend="endSwipe"
  >
    <div class="card-content">{{ item.content }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      isSwiping: false,
      startX: 0,
      currentPosition: 0,
      position: 0,
    };
  },
  methods: {
    startSwipe(event) {
      this.isSwiping = true;
      this.startX = event.clientX || event.touches[0].clientX;
      this.currentPosition = this.position;
    },
    swipe(event) {
      if (!this.isSwiping) return;
      const currentX = event.clientX || event.touches[0].clientX;
      const deltaX = currentX - this.startX;
      this.position = this.currentPosition + deltaX;
    },
    endSwipe() {
      if (!this.isSwiping) return;
      this.isSwiping = false;
      const swipeThreshold = 200;
      if (this.position > swipeThreshold) {
        this.$emit('swipeRight', this.item);
      } else if (this.position < -swipeThreshold) {
        this.$emit('swipeLeft', this.item);
      }

      this.position = this.currentPosition
    },
  },
};
</script>

<style scoped>
.swipeable-card {
  width: 300px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-out;
  user-select: none;
}

.card-content {
  padding: 16px;
  text-align: center;
}
</style>
