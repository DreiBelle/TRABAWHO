<template>
  <div
    class="Swipe-Swipeable"
    :style="{ transform: `translateX(${position}px)` }"
    @mousedown="startSwipe"
    @mousemove="swipe"
    @mouseup="endSwipe"
    @touchstart="startSwipe"
    @touchmove="swipe"
    @touchend="endSwipe"
  >
    <div class="Swipe-CardContent">
      <IonGrid>
        <IonRow>
          <IonCol>
            {{ item.content }}
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            Name
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  </div>
</template>

<script lang="ts">
import { IonCol, IonGrid, IonRow } from "@ionic/vue";
import "./Swipe.css";

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
      const swipeThreshold = 300;
      if (this.position > swipeThreshold) {
        this.$emit("swipeRight", this.item);
      } else if (this.position < -swipeThreshold) {
        this.$emit("swipeLeft", this.item);
      }
      this.position = this.currentPosition;
    },
  },
  components: { IonGrid, IonRow, IonCol },
};
</script>

<style scoped></style>
