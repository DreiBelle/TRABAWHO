<template>
  <div class="Swipe-Swipeable" :class="{ 'Swipe-Swipeable--animated': position !== 0 }"
    :style="{ transform: `translateX(${position}px)` }" @mousedown="startSwipe" @mousemove="swipe" @mouseup="endSwipe"
    @touchstart="startSwipe" @touchmove="swipe" @touchend="endSwipe">
    <div class="Swipe-CardContent" id="card">
      <IonGrid @click="viewSwipe(true)" class="swipe-container">
        <IonRow class="swipe-container-title">
          <IonCol>
            <IonText>
              <b>{{ item.content.toUpperCase() }}</b>
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow style="height: 105px;">
          <IonCol class="flexcenter" style="padding: 0;">
            <img class="swipe-picture" :src="item.picture" alt="">
          </IonCol>
        </IonRow>
        <IonRow style="height: 30px">
          <IonCol class="swipe-text">
            <b>DESCRIPTION</b>
          </IonCol>
        </IonRow>
        <IonRow style="height: calc(100% - 195px);">
          <IonCol>
            <IonContent style="--background: none">
              <IonText class="swipe-description">{{ item.jobdescription }}</IonText>
            </IonContent>
          </IonCol>
        </IonRow>
        <IonRow class="swipe-moreinformation">
          <IonCol class="flexcenter">
            CLICK FOR MORE INFORMATION
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>

    <div class="flexcenter">
      <IonModal class="swipe-view-modal" :is-open="openView" @did-dismiss="viewSwipe(false)">
        <IonContent style="--background: snow">
          <IonGrid style="padding: 0;">
            <IonRow class="swipe-container-title">
              <IonCol size="1">

              </IonCol>
              <IonCol class="flexcenter">
                <b>{{ item.content.toUpperCase() }}</b>
              </IonCol>

              <IonCol class="flexcenter" size="1">
                <IonIcon @click="viewSwipe(false)" :icon="close"></IonIcon>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol style="margin: 0; padding: 0;" class="flexcenter">
                <img class="swipe-picture" :src="item.picture" alt="">
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal">
                    COMPANY:
                  </IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow style="background-color: rgb(224, 222, 222);">
              <IonCol>
                <IonText class="swipe-label-modal flexcenter">
                  INFORMATION
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal">
                    JOB TYPE:
                  </IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal">
                    POSITION LEVEL:
                  </IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal">
                    DESCRIPTION:
                  </IonText>
                  <div>
                    <IonText style="padding-left: 10px;">
                      {{ item.jobdescription }}
                    </IonText>
                  </div>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal">
                    SALARY:
                  </IonText>
                </IonCard>
              </IonCol>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal">
                    HOURS:
                  </IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal">
                    LOCATION:
                  </IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow style="background-color: rgb(224, 222, 222);">
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
                    YEARS OF EXPERIENCE:
                  </IonText>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol class="flexcenter">
                <IonCard class="swipe-card-modal">
                  <IonText class="swipe-label-modal">
                    EDUCATION ATTAINMENT:
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
import { IonCard, IonCol, IonContent, IonGrid, IonIcon, IonModal, IonRow, IonText } from "@ionic/vue";
import { close } from "ionicons/icons"
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
      openView: false,
    };
  },
  methods: {
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
  components: { IonGrid, IonRow, IonCol, IonCard, IonText, IonContent, IonModal, IonIcon },
  setup() {
    return {
      close,
    }
  }
};
</script>

<style>
/* ion-col {
  border: 1px solid black !important;
} */
</style>
