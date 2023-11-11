<template>
  <div class="Fake-Swipe-Swipeable" :class="{ 'Swipe-Swipeable--animated': position !== 0 }"
    :style="{ transform: `translateX(${position}px)` }">
    <div class="Swipe-CardContent" id="card">
      <div class="swipe-container1" id="fakepicture">
        <div class="swipe-image-container">
          <img class="swipe-image" :src="item.pic" />
        </div>
        <div style="height: calc(100% - 75px)"></div>
        <div class="swipe-text-preview">
          <div>
            <IonText class="swipe-text-stroke" style="font-size: 35px;"> {{ item.jobname.toUpperCase() }} </IonText>
          </div>
          <div>
            <IonText class="swipe-text-stroke2" style="font-size: 19px;"> Type: {{ item.jobtype }} </IonText>
          </div>
          <div>
            <IonText class="swipe-text-stroke2" style="font-size: 19px;"> Position: {{ item.positionlvl }} </IonText>
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
    // getPicture() {
    //   const picture1 = document.getElementById("fakepicture");
    //   const imageUrl = this.item.pic;
    //   console.log(imageUrl)
    //   picture1.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent), url(${imageUrl})`; picture1.style.backgroundSize = "cover";
    //   picture1.style.backgroundSize = "cover";
    //   picture1.style.backgroundPosition = "center";
    // },
  },
  mounted() {
    // this.getPicture();
  },
  components: { IonText, IonGrid, IonRow, IonCol, IonCard },
};
</script>

<style>
/* ion-col {
  border: 1px solid black !important;
} */
</style>
