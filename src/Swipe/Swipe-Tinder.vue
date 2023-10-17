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
    @click="viewSwipe(true)"
  >
    <div class="Swipe-CardContent" id="card">
      <div class="swipe-container1" id="picture">
        <div style="height: calc(100% - 75px)"></div>
        <div class="swipe-text-preview-container">
          <div>
            <IonText class="swipe-text-preview"> {{ item.jobname }} </IonText>
          </div>
          <div>
            <IonText class="swipe-text-preview"> {{ item.jobtype }} </IonText>
          </div>
          <div>
            <IonText class="swipe-text-preview"> {{ item.positionlvl }} </IonText>
          </div>
        </div>
      </div>
    </div>

    <div class="flexcenter">
      <IonModal :is-open="openView" @did-dismiss="viewSwipe(false)">
        <IonContent style="--background: snow">
          <div @click="viewSwipe(false)" class="swipe-container2">
            <div class="swipe-icons-container flexcenter">
              <IonIcon @click="viewSwipe(false)" :icon="close"></IonIcon>
              <IonText>CLOSE</IonText>
            </div>
            <div style="height: calc(100vh - 70px)">
              <img class="swipe-picture" :src="item.pic" alt="" />
            </div>
            <div class="swipe-text-preview-container flexcenter">
              <div>
                <div>
                  <IonText class="swipe-text-preview">
                    {{ item.jobname.toUpperCase() }}
                  </IonText>
                </div>
                <div>
                  <IonText class="swipe-text-preview"> {{ item.jobtype }} </IonText>
                </div>
                <div>
                  <IonText class="swipe-text-preview"> {{ item.positionlvl }} </IonText>
                </div>
              </div>
            </div>
          </div>

          <IonGrid style="padding: 0">
            <IonRow>
              <IonCol style="margin: 0; padding: 0" class="flexcenter">
                <!-- <img class="swipe-picture" :src="item.picture" alt="" /> -->
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal"> COMPANY: {{ item.company }}</IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow style="background-color: rgb(224, 222, 222)">
              <IonCol>
                <IonText class="swipe-label-modal flexcenter">
                  INFORMATION
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal"> JOB TYPE: {{ item.jobtype }}</IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal"> POSITION LEVEL: {{ item.positionlvl }} </IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal"> DESCRIPTION: {{ item.jobdes }} </IonText>
                  <div>
                    <IonText style="padding-left: 10px">
                      {{ item.jobdescription }}
                    </IonText>
                  </div>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal"> SALARY: {{ item.salary }} </IonText>
                </IonCard>
              </IonCol>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal"> HOURS: {{ item.hours }} </IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal"> LOCATION: {{ item.loc }} </IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow style="background-color: rgb(224, 222, 222)">
              <IonCol>
                <IonText class="swipe-label-modal flexcenter">
                  REQUIREMENTS
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal">
                    YEARS OF EXPERIENCE: {{ item.yearsofexp }}
                  </IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal">
                    EDUCATION ATTAINMENT: {{ item.reqeduc }}
                  </IonText>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </div>
  </div>
</template>

<script lang="ts">
import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonModal,
  IonRow,
  IonText,
} from "@ionic/vue";
import { close } from "ionicons/icons";
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
    };
  },
  methods: {
    getPicture() {
      const picture1 = document.getElementById("picture");
      const imageUrl = this.item.pic;
      picture1.style.backgroundImage = `url(${imageUrl})`;
      picture1.style.backgroundSize = "cover";
      picture1.style.backgroundPosition = "center";
    },
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
  mounted() {
    this.getPicture();
  },
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonText,
    IonContent,
    IonModal,
    IonIcon,
  },
  setup() {
    return {
      close,
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
