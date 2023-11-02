<template>
  <div class="Swipe-Swipeable" :class="{ 'Swipe-Swipeable--animated': position !== 0 }"
    :style="{ transform: `translateX(${position}px)` }" @mousedown="startSwipe" @mousemove="swipe" @mouseup="endSwipe"
    @touchstart="startSwipe" @touchmove="swipe" @touchend="endSwipe" @click="viewSwipe(true)">
    <div class="Swipe-CardContent" id="card">
      <div class="swipe-container1">
        <div class="swipe-image-container">
          <img id="picture" class="swipe-image" :src="item.pic" />
        </div>
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

    <div class="flexcenter">
      <IonModal mode="ios" class="swipe-modal" :is-open="openView" @did-dismiss="viewSwipe(false)">
        <IonContent style="--background: white">
          <div class="flexcenter">
            <IonCard class="swipe-modal-card-company">
              {{ item.creator }}
            </IonCard>
          </div>
          <div class="swipe-modal-picture">
            <div class="swipe-gradient"></div>
            <img class="swipe-modal-picture" :src="item.pic" />
            <div>
              <IonIcon @click="viewSwipe(false)" class="swipe-modal-icon" :icon="chevronBack"></IonIcon>
            </div>
          </div>
          <div style="margin-top: 410px;">
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px;">
                <b class="flexcenter" style="font-size: 18px; color: black;"> {{ item.jobname.charAt(0).toUpperCase() +
                  item.jobname.slice(1) }} </b>
                <p class="swipe-modal-text-p">Job Type: {{ item.jobtype }}</p>
                <p class="swipe-modal-text-p">Position Level: {{ item.positionlvl }}</p>
                <p class="swipe-modal-text-p">Needed Employees: {{ item.noofempl }}</p>
                <p class="swipe-modal-text-p">Salary: {{ item.salary }}</p>
              </IonText>
            </IonCard>
          </div>
          <div>
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px;">
                <b class="flexcenter" style="font-size: 18px; color: black;">Requirements</b>
                <p class="swipe-modal-text-p">Education: {{ item.reqeduc }}</p>
                <p class="swipe-modal-text-p">Years of Experience: {{ item.yearsofexp }}</p>
              </IonText>
            </IonCard>
          </div>
          <div>
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px;">
                <b class="flexcenter" style="font-size: 18px; color: black;">Description</b>
                <p class="swipe-modal-text-p" style="line-height: 18px; text-align: center;">{{ item.jobdes }}</p>
              </IonText>
            </IonCard>
          </div>
          <div>
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px;">
                <b class="flexcenter" style="font-size: 18px; color: black;">Location</b>
                <p>Location: {{ item.loc }}</p>
              </IonText>
            </IonCard>
          </div>
          <div class="flexcenter">
            <div class="flexcenter">
              <IonAvatar @click="dislike()" class="flexcenter swipe-modal-buttons">
                <IonIcon :icon="close">

                </IonIcon>
              </IonAvatar>
              <IonAvatar @click="like()" class="flexcenter swipe-modal-buttons">
                <IonIcon style="color: lightblue;" :icon="heart">

                </IonIcon>
              </IonAvatar>
            </div>
          </div>
        </IonContent>
      </IonModal>
    </div>
  </div>
</template>

<script lang="ts">
import {
  IonAvatar,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonModal,
  IonRow,
  IonText,
} from "@ionic/vue";
import { chevronBack, close, heart, bookmark } from "ionicons/icons";
import "./Swipe.css";
import { doc } from "firebase/firestore";

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
      openView: false,
      imageUrl: ""
    };
  },
  methods: {
    dislike() {
      this.openView = false
      setTimeout(() => {
        this.$emit("swipeLeft", this.item);
      }, 100);
    },
    like() {
      this.openView = false
      setTimeout(() => {
        this.$emit("swipeRight", this.item);
      }, 100);
    },
    bookmark() {

    },
    // getPicture() {
    //   const picture1 = document.getElementById("picture");
    //   // this.imageUrl = this.item.pic;
    //   // picture1.style.background = `linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent), url(${this.imageUrl})`; picture1.style.backgroundSize = "cover";
    //   picture1.style.objectFit= "cover"
    // },
    viewSwipe(x) {
      this.openView = x;
    },
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
      const swipeThreshold = 50;

      if (this.position > swipeThreshold) {
        this.position = 300;
        this.$emit("swipeRight", this.item);
        this.imageUrl = "";

        setTimeout(() => {
          this.position = 0;
        }, 500);
      } else if (this.position < -swipeThreshold) {
        this.position = -300;
        this.$emit("swipeLeft", this.item);
        this.imageUrl = "";

        setTimeout(() => {
          this.position = 0;
        }, 500);
      } else {
        this.position = 0;
      }
    },
  },
  // mounted() {
  //   this.getPicture();
  // },
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonText,
    IonContent,
    IonModal,
    IonIcon,
    IonAvatar
  },
  setup() {
    return {
      close, chevronBack, heart, bookmark
    };
  },
};
</script>

<style>
/* ion-col {
  border: 1px solid white !important;
  color: white;
} */
</style>
