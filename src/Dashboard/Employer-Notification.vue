<template>
  <IonPage>
    <!-- <div
      class="Employer-NoNotification"
      v-else-if="!isLoading && jobpost.length == 0"
    >
      <IonText style="color: #262c5c;" class="flexcenter enotif-nonotif-text"> 
        <IonIcon :icon="notifications"></IonIcon>
        No Notifications </IonText>
    </div> -->
    <div style="height: 100%">
      <div>
        <IonText class="enotif-title">
          <IonIcon :icon="notifications"></IonIcon>
          NOTIFICATION
        </IonText>
      </div>
      <IonContent>
        <div
          class="flexcenter"
          v-for="(post, index) in jobpost"
          :key="post.jobdid"
        >
          <IonCard
            @click="
              viewUsermodal(
                true,
                swiper[index] ? swiper[index].id : '...',
                swiper[index] ? swiper[index].fullname : '...',
                post.jobname,
                swiper[index] ? swiper[index].email : '...',
                swiper[index] ? swiper[index].pic : '...'
              )
            "
            class="enotif-card"
          >
            <div>
              <IonAvatar
                v-if="swiper[index] ? swiper[index].pic : '...'"
                class="enotif-card-avatar"
              >
                <img
                  :src="
                    swiper[index]
                      ? swiper[index].pic
                      : 'https://ionicframework.com/docs/img/demos/avatar.svg'
                  "
                />
              </IonAvatar>
            </div>
            <div>
              <div class="enotif-card-text">
                <IonText>
                  <p>
                    Job Seeker
                    <b>
                      {{ swiper[index] ? swiper[index].fullname : "..." }}
                    </b>
                    just swiped your job posting <b> {{ post.jobname }}</b
                    >!
                  </p>
                  <p style="font-size: 12px">
                    {{ formattedDate(post.dateCreated) }}
                  </p>
                </IonText>
              </div>
            </div>
            <div class="flexcenter">
              <IonIcon
                class="enotif-card-icon-chevron"
                :icon="chevronForward"
              ></IonIcon>
            </div>
          </IonCard>
        </div>
        <viewUser
          :pic-employer="userPic"
          :name-employer="userName"
          @go-messages-data="goMessagesdata"
          @go-messages="goMessages"
          :picture-viewuser="pictureViewuser"
          :name-viewuser="nameViewuser"
          :email-viewuser="emailViewuser"
          :job-viewuser="jobViewuser"
          :id-viewuser="idViewuser"
          :is-viewuser="isViewuser"
          @close-view-modal="viewUsermodal(false, '', '', '', '', '')"
        >
        </viewUser>
      </IonContent>
    </div>
  </IonPage>
</template>

<script lang="ts">
import "./Employer-Notification.css";
import { useSwipedata } from "@/stores/swipedata";
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonSkeletonText,
  IonContent,
  IonText,
  IonAvatar,
  IonIcon,
  IonProgressBar,
} from "@ionic/vue";
import { onMounted, ref } from "vue";
import {
  getDashboardProfile,
  getJobPostings,
  getSwipedpostings,
  getswiperProfile,
} from "./Dashboard-Model";
import { chevronForward, notifications, settingsOutline } from "ionicons/icons";
import viewUser from "./Dashboard-Modals/Notification-ViewSeeker.vue";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebaseDB";

export default {
  setup() {
    return {
      chevronForward,
      notifications,
    };
  },
  data() {
    return {
      user: "",
      jobpost: [],
      swiper: [],
      userEmail: localStorage.getItem("email"),
      isViewuser: false,
      idViewuser: "",
      nameViewuser: "",
      jobViewuser: "",
      emailViewuser: "",
      pictureViewuser: "",
      userPic: "",
      userName: "",
    };
  },
  emits: ["go-messages", "go-messages-data"],
  methods: {
    goMessages(x) {
      this.$emit("go-messages", x);
    },
    goMessagesdata(name, job, picture, email, id) {
      this.$emit("go-messages-data", name, job, picture, email, id);
    },
    formattedDate(timestamp) {
      const date = new Date(timestamp);
      const month = date.toLocaleString("en-US", { month: "long" });
      const day = date.getDate();
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";

      const formattedHours = hours % 12 || 12;

      const formattedMinutes = minutes.toString().padStart(2, "0");

      return `${month} ${day}, ${year} | ${formattedHours}:${formattedMinutes} ${ampm}`;
    },
    viewUsermodal(x, id, name, job, email, picture) {
      this.isViewuser = x;
      this.idViewuser = id;
      this.nameViewuser = name;
      this.jobViewuser = job;
      this.emailViewuser = email;
      this.pictureViewuser = picture;
    },

    async getSwipes() {
      const userEmail = localStorage.getItem("email");
      this.user = await getDashboardProfile(this.userEmail);
      const userQuery = query(
        collection(db, "users"),
        where("email", "==", userEmail)
      );
      const userUnsubscribe = onSnapshot(userQuery, (snapshot) => {
        this.user.value = snapshot.docs[0]?.data();
      });
      this.user = await getDashboardProfile(this.userEmail);
      try {
        this.jobpost = await Promise.all(
          this.user.swiperjob.map(async (swiperjobs) => {
            return await getSwipedpostings(swiperjobs.jobdid);
          })
        );

        this.swiper = await Promise.all(
          this.user.swiperuser.map(async (swiperusers) => {
            return await getswiperProfile(swiperusers.swipedid);
          })
        );
      } catch (error) {
        console.log("No Postings");
        // console.error('An error occurred:', error);
      }
    },
  },
  mounted() {
    this.getSwipes();

    this.intervalId = setInterval(() => {
      this.getSwipes();
      this.userName = this.user.businessname;
      this.userPic = this.user.pic;
    }, 6);
    
    setTimeout(() => {
      this.userName = this.user.businessname;
      this.userPic = this.user.pic;
    }, 500);
  },
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonSkeletonText,
    IonCard,
    viewUser,
    IonContent,
    IonText,
    IonAvatar,
    IonIcon,
    IonProgressBar,
  },
};
</script>

<style></style>
