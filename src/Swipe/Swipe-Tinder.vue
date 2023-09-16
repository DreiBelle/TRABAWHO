<template>
  <div
    class="Swipe-Swipeable"
    :class="{ 'Swipe-Swipeable--animated': position !== 0 }"
    :style="{ transform: `translateX(${position}px)` }"
    @mousedown="startSwipe"
    @mousemove="swipe"
    @mouseup="endSwipe"
    @touchstart="startSwipe"
    @touchmove="swipe"
    @touchend="endSwipe"
  >
    <div class="Swipe-CardContent" id="card">
      <IonGrid style="height: 100%">
        <IonRow style="height: 10%">
          <IonCol>
            Job Name
            {{ item.content }}
          </IonCol>
        </IonRow>
        <IonRow style="height: 30%">
          <IonCol> Picture </IonCol>
        </IonRow>
        <IonRow style="height: 10%">
          <IonCol> Job Type </IonCol>
        </IonRow>
        <IonRow style="height: 50%">
          <IonCol> Job Description </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  </div>
</template>

<script lang="ts">
import { IonCard, IonCol, IonGrid, IonRow } from "@ionic/vue";
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
      const swipeThreshold = 100;

      if (this.position > swipeThreshold) {
        this.position = 300;
        this.$emit("swipeRight", this.item);

        setTimeout(() => {
          this.position = 0;
        }, 500);
      } else if (this.position < -swipeThreshold) {
        this.position = -300;
        this.$emit("swipeLeft", this.item);
        setTimeout(() => {
          this.position = 0;
        }, 500);
      } else {
        this.position = 0;
      }
    },
  },
  components: { IonGrid, IonRow, IonCol, IonCard },
};
</script>

<style>
/* ion-col {
  border: 1px solid black !important;
} */
</style>
