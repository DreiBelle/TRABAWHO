<template>
  <div
    class="Swipe-Swipeable"
    :class="{ 'Swipe-Swipeable--animated': position !== 0 }"
    :style="{ transform: `translateX(${position}px)` }"
  >
    <div class="Swipe-CardContent" id="card">
      <div class="swipe-container1" id="fakepicture">
        <div style="height: calc(100% - 75px)"></div>
        <div class="swipe-text-preview-container">
          <div>
            <IonText class="swipe-text-preview"> Name </IonText>
          </div>
          <div>
            <IonText class="swipe-text-preview"> TYPE </IonText>
          </div>
          <div>
            <IonText class="swipe-text-preview"> POSITION LVL </IonText>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IonText, IonCard, IonCol, IonGrid, IonRow } from "@ionic/vue";
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
    getPicture() {
      const picture1 = document.getElementById("fakepicture");
      const imageUrl = this.item.picture;
      picture1.style.backgroundImage = `url(${imageUrl})`;
      picture1.style.backgroundSize = "cover";
      picture1.style.backgroundPosition = "center";
    },
  },
  mounted() {
    this.getPicture();
  },
  components: { IonText, IonGrid, IonRow, IonCol, IonCard },
};
</script>

<style>
/* ion-col {
  border: 1px solid black !important;
} */
</style>
