<template>
  <IonPage>
    <div v-if="isloading">
      <IonHeader style="z-index: 1;" class="jmessage-header">
        <div class="flexcenter" style="height: 100%; width: 100%;">
          <div class="jmessage-logo-container">
            <img class="jmessage-logo" src="../assets/logo/whitefilllogo.png" alt="logo" />
          </div>
          <div class="jmessage-icons-settings">
            <IonIcon :icon="logOut"></IonIcon>
          </div>
        </div>
      </IonHeader>
      <IonProgressBar style="z-index: 2;" type="indeterminate"></IonProgressBar>
    </div>

    <div v-if="!isloading">
      <IonPage>
        <IonHeader class="jmessage-header">
          <div class="flexcenter" style="height: 100%; width: 100%;">
            <div class="jmessage-logo-container">
              <img class="jmessage-logo" src="../assets/logo/whitefilllogo.png" alt="logo" />
            </div>
            <div class="jmessage-icons-settings">
              <IonIcon id="showLogout" :icon="logOut"></IonIcon>
            </div>
          </div>
        </IonHeader>
        <IonGrid style="height: 100%; width: 100%; background: whitesmoke">
          <IonRow style="height: 100%">
            <IonCol>
              <div class="Swipe-Background" v-if="(cards.length - currentCardIndex) >= 3">
                <SwipeableCard :item="cards[currentCardIndex]" @swipeLeft="handleSwipeLeft" @swipeRight="handleSwipeRight"
                  id="mainswiper" class="asd" />
                <FakeSwipeableCard :item="cards[nextCardIndex]" class="asd2" />
                <FakeSwipeableCard :item="cards[nextCardIndex + 1]" class="asd3" />
              </div>
              <div class="Swipe-Background" v-else-if="(cards.length - currentCardIndex) == 2">
                <SwipeableCard :item="cards[currentCardIndex]" @swipeLeft="handleSwipeLeft" @swipeRight="handleSwipeRight"
                  id="mainswiper" class="asd" />
                <FakeSwipeableCard :item="cards[nextCardIndex]" class="asd2" />
              </div>
              <div class="Swipe-Background" v-else-if="(cards.length - currentCardIndex) == 1">
                <SwipeableCard :item="cards[currentCardIndex]" @swipeLeft="handleSwipeLeft" @swipeRight="handleSwipeRight"
                  style="z-index: 2" id="mainswiper" class="asd" />
                <IonCard class="Swipe-Swipeable">
                  no more available jobs
                </IonCard>
              </div>
              <div class="Swipe-Background" v-else>
                <IonCard class="Swipe-Swipeable">
                  no more available jobs
                </IonCard>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <!-- <FloatingButtons style="z-index: 3;"/> -->
      </IonPage>
    </div>
  </IonPage>
</template>

<script lang="ts">
import SwipeableCard from "./Swipe-Tinder.vue";
import FakeSwipeableCard from "./FakeSwipe-Tinder.vue";
import FloatingButtons from "./Swipe-FloatingButtons.vue";
import NavBar from "../NavBar/NavBar.vue";
import "./Swipe.css";
import { car, card, settings, logOut } from "ionicons/icons";
import { getJobs, getjobownerProfile, deleteBlank, deleteBlank1 } from "./Swipe-Model";
import {
  IonAlert,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
} from "@ionic/vue";
import { db, dbImage } from "@/firebaseDB";
import { getDownloadURL, ref } from "firebase/storage";
import { ref as asd, onMounted } from "vue";
import { getUserProfile } from "../Profile/Profile-Model";
import '../Message/Seeker-Message.css';
import { getDashboardProfile } from "@/Dashboard/Dashboard-Model";
import { useSwipedata } from "@/stores/swipedata";
import { useSwipejob } from "@/stores/userswipejob";
import { useupdatelike } from "@/stores/updatelikes";
import { useupdateview } from "@/stores/updateviews";
import { useupdatebookmark } from "@/stores/updatebookmarks";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { GoHome } from "../NavBar/NavBar-Controller";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseDB";

export default {
  components: {
    IonText,
    FakeSwipeableCard,
    FloatingButtons,
    SwipeableCard,
    NavBar,
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    IonContent,
    IonCard,
    IonHeader,
    IonTabBar,
    IonTabs,
    IonTabButton,
    IonIcon,
    IonRouterOutlet,
    IonLabel,
    IonProgressBar,
    IonAlert
  },
  setup() {
    const user = asd(null);
    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");
      user.value = await getDashboardProfile(userEmail);
    });

    const useswipedata = useSwipedata();
    const useswipejob = useSwipejob();
    const updatelikes = useupdatelike();
    const updateviews = useupdateview();
    const updatebookmarks = useupdatebookmark();

    const alertButtons = [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          signOut(auth).then(() => {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            GoHome();
          });
        },
      },
    ];

    return { alertButtons, logOut, settings, user, useswipedata, useswipejob, updatelikes, updateviews, updatebookmarks };
  },
  data() {
    return {
      nextCardIndex: 1,
      currentCardIndex: 0,
      cards: [],
      swipedata: [],
      jobdata: [],
      userswipej: [],
      isloading: true,
    };
  },
  methods: {
    async handleSwipeLeft(job) {
      const swiper = document.getElementById("mainswiper");

      setTimeout(() => {
        swiper.style.display = "none";
      }, 100);

      setTimeout(() => {
        swiper.style.display = "inline";
      }, 500);

      console.log("swipe left");
      this.showNextCard();

      const oldview = job.views;
      const newview = oldview + 1;
      console.log(newview);

      this.updateviews.setviews(newview);
      await this.updateviews.updateviews(job.id);
    },

    async handleSwipeRight(job) {
      const swiper = document.getElementById("mainswiper");

      setTimeout(() => {
        swiper.style.display = "none";
      }, 100);

      setTimeout(() => {
        swiper.style.display = "inline";
      }, 500);

      console.log("swipe right");
      this.showNextCard();

      console.log("the swiper id " + this.user.id);
      console.log("the creator of jobposting " + job.company);
      console.log("the id of jobposting " + job.id);

      const jobowner = job.company;
      const owner = await getjobownerProfile(jobowner);

      this.swipedata = owner.swiperuser;
      this.jobdata = owner.swiperjob;

      this.swipedata.push({ swipedid: this.user.id });
      this.jobdata.push({ jobdid: job.id });

      this.userswipej = this.user.swiperjob;
      this.userswipej.push({ jobdid: job.id });

      this.useswipedata.setswipedata(this.swipedata);
      this.useswipedata.setjobdata(this.jobdata);
      this.useswipejob.setjobswipe(this.userswipej);

      await this.useswipedata.updateswipedata(job.company);
      await this.useswipejob.updateuserswipedata(this.user.id);

      const oldlike = job.likes;
      const newlike = oldlike + 1;
      console.log(newlike);

      this.updatelikes.setlikes(newlike);
      await this.updatelikes.updatelikes(job.id);

      const oldview = job.views;
      const newview = oldview + 1;
      console.log(newview);

      this.updateviews.setviews(newview);
      await this.updateviews.updateviews(job.id);

      deleteBlank(this.user.id)
      deleteBlank(job.company);
      deleteBlank1(job.company);

      this.swipedata = [];
      this.jobdata = [];
      this.userswipej = [];
    },

    showNextCard() {
      this.currentCardIndex++;
      setTimeout(() => {
        this.nextCardIndex++;
      }, 501);
    },
  },
  async mounted() {
    try {
      const jobIds = [];
      const user = asd(null);
      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");
      user.value = await getUserProfile(userEmail);

      const chosenInterest = user.value.chosenInterests;
      const hours = user.value.hours;
      const jobtype = user.value.jobtype;
      const loc = user.value.loc;
      const yearsofexp = user.value.yearsofexp;
      const salary = user.value.salary;
      const jobname = user.value.jobname;
      console.log(chosenInterest);
      console.log(hours);
      console.log(jobtype);
      console.log(loc);
      console.log(yearsofexp);
      console.log(salary);

      const jobs = await getJobs(
        chosenInterest,
        hours,
        jobtype,
        loc,
        yearsofexp,
        salary,
      );

      const filteredJobs = jobs.filter((job) => {
        // icheCheck kung  yung jobid ay nasa user sa swiperjob array
        return !this.user.swiperjob.some((swiperJob) => swiperJob.jobdid === job.id) && job.isactive == "activate";
      });

      // Fetch image URLs from Firebase Storage for each job
      const jobsWithImages = await Promise.all(
        filteredJobs.map(async (job) => {
          const imageUrl = await getDownloadURL(ref(dbImage, job.pic));
          return {
            id: job.id,
            jobname: job.jobname,
            pic: imageUrl,
            jobtype: job.jobtype,
            jobdes: job.jobdes,
            company: job.company,
            hours: job.hours,
            loc: job.loc,
            positionlvl: job.positionlvl,
            reqeduc: job.reqeduc,
            salary: job.salary,
            yearsofexp: job.yearsofexp,
            likes: job.likes,
            views: job.views,
            bookmarks: job.bookmarks,
            creator: job.creator,
          };
        })
      );

      this.cards = jobsWithImages;

    } catch (error) {
      console.error("Error fetching jobs: ", error);
    }

    this.isloading = false;
  },
};
</script>

<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
