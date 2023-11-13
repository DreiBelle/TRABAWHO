<template>
  <div class="Swipe-Swipeable" :class="{
    'Swipe-Swipeable--animated': position !== 0,
    'Swipe-Swipeable--stop': position === 0,
  }" :style="{ transform: `translateX(${position}px)` }" @mousedown="startSwipe" @mousemove="swipe" @mouseup="endSwipe"
    @touchstart="startSwipe" @touchmove="swipe" @touchend="endSwipe" @click="viewSwipe(true)">
    <div class="Swipe-CardContent" id="card">
      <div class="swipe-container1">
        <div class="swipe-image-container">
          <img id="picture" class="swipe-image" :src="item.pic" />
        </div>
        <div class="swipe-text-preview">
          <div :class="{
            'Swipe-Swipeable--text': position !== 0,
            'Swipe-Swipeable--text-stop': position === 0,
          }">
            <div>
              <IonText class="swipe-text-stroke" style="font-size: 35px">
                {{ item.jobname.toUpperCase() }}
              </IonText>
            </div>
            <div>
              <IonText class="swipe-text-stroke2" style="font-size: 19px">
                Type: {{ item.jobtype }}
              </IonText>
            </div>
            <div>
              <IonText class="swipe-text-stroke2" style="font-size: 19px">
                Position: {{ item.positionlvl }}
              </IonText>
            </div>
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

          <div style="margin-top: 410px">
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px">
                <b class="flexcenter" style="font-size: 18px; color: black">
                  {{
                    item.jobname.charAt(0).toUpperCase() + item.jobname.slice(1)
                  }}
                </b>
              </IonText>
            </IonCard>
          </div>

          <div>
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px">
                <p class="swipe-modal-text-title">
                  <IonIcon class="swipe-modal-icon-information" :icon="briefcase"></IonIcon>
                  Job Information
                </p>
                <p class="swipe-modal-text-p">
                  <b>Job Type:</b> {{ item.jobtype }}
                </p>
                <p class="swipe-modal-text-p">
                  <b>Position Level:</b> {{ item.positionlvl }}
                </p>
                <p class="swipe-modal-text-p">
                  <b>Needed Employees:</b> {{ item.noofempl }}
                </p>
                <p class="swipe-modal-text-p">
                  <b>Salary:</b> {{ item.salary }}
                </p>
              </IonText>
            </IonCard>
          </div>

          <div>
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px">
                <p class="swipe-modal-text-title">
                  <IonIcon class="swipe-modal-icon-information" :icon="document"></IonIcon>
                  Description
                </p>
                <p class="swipe-modal-text-p" style="line-height: 18px; text-align: center">
                  {{ item.jobdes }}
                </p>
              </IonText>
            </IonCard>
          </div>

          <div>
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px">
                <p class="swipe-modal-text-title">
                  <IonIcon class="swipe-modal-icon-information" :icon="alert"></IonIcon>
                  Requirements
                </p>
                <p class="swipe-modal-text-p">
                  <b>Education:</b> {{ item.reqeduc }}
                </p>
                <p class="swipe-modal-text-p">
                  <b>Years of Experience:</b> {{ item.yearsofexp }} years of
                  experience
                </p>
                <p class="swipe-modal-text-p"><b>Age:</b> {{ item.age }}</p>
              </IonText>
            </IonCard>
          </div>

          <div>
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px">
                <p class="swipe-modal-text-title">
                  <IonIcon class="swipe-modal-icon-information" :icon="location"></IonIcon>
                  Work Location
                </p>
                <p class="swipe-modal-text-p">
                  <b>Province:</b> {{ item.province }}
                </p>
                <p class="swipe-modal-text-p">
                  <b>City/Town:</b> {{ item.citown }}
                </p>
                <p class="swipe-modal-text-p">
                  <b>District</b> {{ item.district }}
                </p>
                <p class="swipe-modal-text-p">
                  <b>Street</b> {{ item.street }}
                </p>
              </IonText>
            </IonCard>
          </div>

          <div v-for="info in employerInfo">
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px">
                <p class="flexcenter swipe-modal-text-title">
                  <IonIcon class="swipe-modal-icon-information" :icon="information"></IonIcon>
                  Company Information
                </p>
                <p class="swipe-modal-text-p">
                  <b>Company Type:</b> {{ info.companytype }} wala to
                </p>
                <p class="swipe-modal-text-p">
                  <b>Location</b> {{ info.loc }} wala to
                </p>
                <p class="swipe-modal-text-p">
                  <b>Mision/Vision</b> {{ info.mv }}
                </p>
                <p v-if="info.facebook || info.twitter || info.instagram" class="swipe-modal-text-title"
                  style="font-size: 20px">
                  Social Media
                </p>
                <p v-if="info.facebook" class="swipe-modal-text-p">
                  <b>Facebook:</b> {{ info.facebook }}
                </p>
                <p v-if="info.twitter" class="swipe-modal-text-p">
                  <b>Twitter</b> {{ info.twitter }}
                </p>
                <p v-if="info.instagram" class="swipe-modal-text-p">
                  <b>Instagram</b> {{ info.instagram }}
                </p>
              </IonText>
            </IonCard>
          </div>

          <div v-for="spe in item.chosenInterests">
            <IonChip> {{spe}} </IonChip>
          </div>

          <div class="flexcenter">
            <div class="flexcenter">
              <IonAvatar style="background-color: #ff6961" @click="dislike()" class="flexcenter swipe-modal-buttons">
                <IonIcon style="color: white" :icon="thumbsDown"> </IonIcon>
              </IonAvatar>
              <IonAvatar style="background-color: #60a05b" @click="like()" class="flexcenter swipe-modal-buttons">
                <IonIcon style="color: white" :icon="thumbsUp"> </IonIcon>
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
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonModal,
  IonRow,
  IonText,
} from "@ionic/vue";
import {
  chevronBack,
  close,
  heart,
  bookmark,
  thumbsUp,
  thumbsDown,
  briefcase,
  information,
  document,
  alert,
  location,
} from "ionicons/icons";
import "./Swipe.css";
import { validatePassword } from "firebase/auth";
import { db } from "@/firebaseDB";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

export default {
  props: {
    item: {
      type: Object,
    },
    action: {
      type: String,
    },
  },
  watch: {
    action: function (value) {
      if (value == "left") {
        console.log("dude swiped left");
        this.$emit("swipeLeft", this.item);
      } else if (value == "right") {
        console.log("dude swiped right");
        this.$emit("swipeRight", this.item);
      } else if (value == "info") {
        console.log("info");
        this.viewSwipe(true);
        this.$emit("clear-action");
      } else {
        console.log("deleted");
      }
    },
  },
  data() {
    return {
      isSwiping: false,
      startX: 0,
      currentPosition: 0,
      position: 0,
      openView: false,
      imageUrl: "",
      employerInfo: [],
    };
  },
  methods: {
    dislike() {
      this.openView = false;
      setTimeout(() => {
        this.$emit("swipeLeft", this.item);
      }, 100);
    },
    like() {
      this.openView = false;
      setTimeout(() => {
        this.$emit("swipeRight", this.item);
      }, 100);
    },
    bookmark() { },
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
    async getEmployer() {
      const docRef = doc(db, "users", this.item.company);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.employerInfo.push(docSnap.data())
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
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
    IonAvatar,
    IonChip,
  },
  setup() {
    return {
      close,
      chevronBack,
      heart,
      bookmark,
      thumbsUp,
      thumbsDown,
      briefcase,
      information,
      document,
      alert,
      location,
    };
  },
  mounted() {
    this.getEmployer()
  }
};
</script>

<style>
/* ion-col {
  border: 1px solid white !important;
  color: white;
} */
</style>
