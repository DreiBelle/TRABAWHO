<template>
  <IonPage>
    <IonHeader mode="md" style="height: 50px">
      <IonToolbar style="height: 100%; --background: #262c5c">
        <IonTitle mode="md" class="Swipe-header-title"> TRABAWHO </IonTitle>
        <IonButtons style="padding-left: 10px" slot="start">
          <div>
            <img style="height: 30px" src="../assets/logo/whitefilllogo.png" alt="logo" />
          </div>
        </IonButtons>
      </IonToolbar>
      <IonProgressBar v-if="isloading" type="indeterminate"></IonProgressBar>

    </IonHeader>

    <IonContent :scroll-y="false" v-if="!isloading" style="background: snow">
      <div>
        <IonRefresher style="background: none; z-index: 4" slot="fixed" @ionRefresh="refresh($event)">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
      </div>
      <div style="height: 100%">
        <div class="flexcenter" style="height: calc(100% - 50px)">
          <div class="flexcenter" v-if="cards.length - currentCardIndex >= 2">
            <SwipeableCard @clear-action="clearAction()" :action="actionMade" :item="cards[currentCardIndex]"
              @swipeLeft="handleSwipeLeft" @swipeRight="handleSwipeRight" id="mainswiper" class="asd" />
            <FakeSwipeableCard :item="cards[nextCardIndex]" class="asd2" />
          </div>
          <div class="flexcenter" v-else-if="cards.length - currentCardIndex == 1">
            <SwipeableCard @clear-action="clearAction()" :action="actionMade" :item="cards[currentCardIndex]"
              @swipeLeft="handleSwipeLeft" @swipeRight="handleSwipeRight" id="mainswiper" class="asd" />
            <IonCard class="Swipe-Swipeable"> no more available jobs </IonCard>
          </div>
          <div class="flexcenter" v-else>
            <IonCard class="Swipe-Swipeable"> no more available jobs </IonCard>
          </div>
        </div>
        <div class="flexcenter" style="height: 50px; width: 100%">
          <IonButton class="Swipe-Help-Buttons" @click="passSwipeleft" style="--background: #ff6961">
            <IonIcon class="Swipe-Help-Buttons-icons" :icon="arrowBack"></IonIcon>
            <IonIcon class="Swipe-Help-Buttons-icons" :icon="thumbsDown"></IonIcon>
          </IonButton>
          <IonButton class="Swipe-Help-Buttons" @click="openInfo">
            <IonIcon class="Swipe-Help-Buttons-icons" :icon="informationCircle"></IonIcon>
          </IonButton>
          <IonButton class="Swipe-Help-Buttons" @click="passSwiperight" style="--background: #60a05b">
            <IonIcon class="Swipe-Help-Buttons-icons" :icon="thumbsUp"></IonIcon>
            <IonIcon class="Swipe-Help-Buttons-icons" :icon="arrowForward"></IonIcon>
          </IonButton>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts">
import SwipeableCard from "./Swipe-Tinder.vue";
import FakeSwipeableCard from "./FakeSwipe-Tinder.vue";
import NavBar from "../NavBar/NavBar.vue";
import "./Swipe.css";
import { car, card, settings, logOut, arrowBack, arrowForward, thumbsDown, thumbsUp, informationCircle } from "ionicons/icons";
import {
  getJobs,
  getJobs2,
  getJobs3,
  getjobownerProfile,
  deleteBlank,
  deleteBlank1,
} from "./Swipe-Model";
import {
  IonButton,
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
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
  IonToolbar,
  IonButtons,
  IonTitle,
} from "@ionic/vue";
import { db, dbImage } from "@/firebaseDB";
import { getDownloadURL, ref } from "firebase/storage";
import { ref as asd, onMounted } from "vue";
import { getUserProfile } from "../Profile/Profile-Model";
import "../Message/Seeker-Message.css";
import { getDashboardProfile } from "@/Dashboard/Dashboard-Model";
import { useSwipedata } from "@/stores/swipedata";
import { useSwipejob } from "@/stores/userswipejob";
import { useupdatelike } from "@/stores/updatelikes";
import { useupdateview } from "@/stores/updateviews";
import { useupdatebookmark } from "@/stores/updatebookmarks";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { GoHome } from "../NavBar/NavBar-Controller";
import { User, signOut } from "firebase/auth";
import { auth } from "@/firebaseDB";
import { uselike } from "@/stores/likes";
import { useview } from "@/stores/views";

export default {
  components: {
    IonButton,
    IonText,
    FakeSwipeableCard,
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
    IonAlert,
    IonRefresher,
    IonRefresherContent,
    IonToolbar,
    IonButtons,
    IonTitle
  },
  setup() {
    //new

    //old
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
    const uselikes = uselike();
    const useviews = useview();

    const formData = {
      creator: "",
      job: "",
      swiper: "",
      name: "",
      pic: "",
    };

    const alertButtons = [
      {
        text: "Cancel",
        role: "cancel",
      },
      {
        text: "OK",
        role: "confirm",
        handler: () => {
          signOut(auth).then(() => {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            GoHome();
          });
        },
      },
    ];

    const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
      setTimeout(() => {
        location.reload();
        event.detail.complete();
      }, 100);
    };

    return {
      alertButtons,
      logOut,
      settings,
      user,
      useswipedata,
      useswipejob,
      updatelikes,
      updateviews,
      updatebookmarks,
      handleRefresh,
      uselikes,
      useviews,
      formData,
      arrowBack,
      arrowForward,
      thumbsDown,
      thumbsUp,
      informationCircle
    };
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
      actionMade: "",
      employerID: "",
    };
  },
  methods: {
    openInfo() {
      this.actionMade = "info"
    },
    clearAction() {
      this.actionMade = ""
    },
    passSwiperight() {
      this.actionMade = "right"
    },
    passSwipeleft() {
      this.actionMade = "left"
    },
    async refresh(event: CustomEvent<RefresherEventDetail>) {
      this.isloading = true;
      if (this.cards) {
        const jobIds = [];
        const user = asd(null);
        const userEmail = localStorage.getItem("email");
        // const userPassword = localStorage.getItem("password");
        user.value = await getUserProfile(userEmail);

        const chosenInterest = user.value.chosenInterests;
        const jobtype = user.value.jobtype;
        const loc = user.value.loc;
        const yearsofexp = user.value.yearsofexp;
        const salary = user.value.salary;
        const jobname = user.value.jobname;
        const classification = user.value.classification;
        const subclassification = user.value.subclassification;
        const province = user.value.province;
        console.log(chosenInterest);
        console.log(jobtype);
        console.log(loc);
        console.log(yearsofexp);
        console.log(salary);
        console.log(classification);
        console.log(subclassification);
        console.log(province);

        const jobs = await getJobs(
          chosenInterest,
          jobtype,
          loc,
          yearsofexp,
          province
        );
        const jobs2 = await getJobs2(
          subclassification,
          jobtype,
          loc,
          yearsofexp,
          province
        );
        const jobs3 = await getJobs3(
          classification,
          jobtype,
          loc,
          yearsofexp,
          province
        );

        // Create a Set to store unique job IDs
        const uniqueJobIds = new Set();

        const filteredJobs = [
          ...jobs.filter((job) => {
            const shouldInclude =
              !this.user.swiperjob.some(
                (swiperJob) => swiperJob.jobdid === job.id
              ) &&
              job.isactive === "activate" &&
              !uniqueJobIds.has(job.id);

            if (shouldInclude) {
              uniqueJobIds.add(job.id);
            }

            return shouldInclude;
          }),
          ...jobs2.filter((job) => {
            const shouldInclude =
              !this.user.swiperjob.some(
                (swiperJob) => swiperJob.jobdid === job.id
              ) &&
              job.isactive === "activate" &&
              !uniqueJobIds.has(job.id);

            if (shouldInclude) {
              uniqueJobIds.add(job.id);
            }

            return shouldInclude;
          }),
          ...jobs3.filter((job) => {
            const shouldInclude =
              !this.user.swiperjob.some(
                (swiperJob) => swiperJob.jobdid === job.id
              ) &&
              job.isactive === "activate" &&
              !uniqueJobIds.has(job.id);

            if (shouldInclude) {
              uniqueJobIds.add(job.id);
            }

            return shouldInclude;
          }),
        ];

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
              citown: job.citown,
              noofempl: job.noofempl,
              age: job.age,
              province: job.province,
              district: job.district,
              street: job.street,
              chosenInterests: job.chosenInterests,
              urgent: job.urgent,
            };
          })
        );

        this.cards = jobsWithImages;
        this.nextCardIndex = 1;
        this.currentCardIndex = 0;
        this.isloading = false;
        event.detail.complete();
      } else {
        console.log("wala");
      }
    },

    async handleSwipeLeft(job) {
      this.actionMade = ""
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

      this.formData.job = job.id;
      this.formData.creator = job.company;
      this.formData.swiper = this.user.id;

      this.useviews.setFormData(this.formData);

      this.updateviews.setviews(newview);
      await this.updateviews.updateviews(job.id);

      await this.useviews.registerview();
      this.formData.job = "";
      this.formData.creator = "";
      this.formData.swiper = "";
      this.actionMade = ""
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

      this.swipedata.push({ swipedid: this.user.id, dateCreated: new Date().toISOString() });
      this.jobdata.push({ jobdid: job.id, dateCreated: new Date().toISOString() });

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

      deleteBlank(this.user.id);
      deleteBlank(job.company);
      deleteBlank1(job.company);

      this.formData.job = job.id;
      this.formData.creator = job.company;
      this.formData.swiper = this.user.id;
      this.formData.name = this.user.fullname;
      this.formData.pic = this.user.pic;

      this.uselikes.setFormData(this.formData);
      await this.uselikes.registerlike();

      this.formData.job = "";
      this.formData.creator = "";
      this.formData.swiper = "";
      this.formData.name = "";
      this.formData.pic = "";

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
      const id = user.value.id;
      const chosenInterest = user.value.chosenInterests;
      const jobtype = user.value.jobtype;
      const loc = user.value.loc;
      const yearsofexp = user.value.yearsofexp;
      const salary = user.value.salary;
      const jobname = user.value.jobname;
      const classification = user.value.classification;
      const subclassification = user.value.subclassification;
      const noofempl = user.value.noofempl;
      const age = user.value.age;
      const province = user.value.province;
      const citown = user.value.citown;
      const district = user.value.district;
      const street = user.value.street;
      const chosenInterests = user.value.chosenInterests;

      this.employerID = id

      const jobs = await getJobs(
        chosenInterest,
        jobtype,
        loc,
        yearsofexp,
        province
      );
      const jobs2 = await getJobs2(
        subclassification,
        jobtype,
        loc,
        yearsofexp,
        province
      );
      const jobs3 = await getJobs3(
        classification,
        jobtype,
        loc,
        yearsofexp,
        province
      );

      // Create a Set to store unique job IDs
      const uniqueJobIds = new Set();

      const filteredJobs = [
        ...jobs.filter((job) => {
          const shouldInclude =
            !this.user.swiperjob.some(
              (swiperJob) => swiperJob.jobdid === job.id
            ) &&
            job.isactive === "activate" &&
            !uniqueJobIds.has(job.id);

          if (shouldInclude) {
            uniqueJobIds.add(job.id);
          }

          return shouldInclude;
        }),
        ...jobs2.filter((job) => {
          const shouldInclude =
            !this.user.swiperjob.some(
              (swiperJob) => swiperJob.jobdid === job.id
            ) &&
            job.isactive === "activate" &&
            !uniqueJobIds.has(job.id);

          if (shouldInclude) {
            uniqueJobIds.add(job.id);
          }

          return shouldInclude;
        }),
        ...jobs3.filter((job) => {
          const shouldInclude =
            !this.user.swiperjob.some(
              (swiperJob) => swiperJob.jobdid === job.id
            ) &&
            job.isactive === "activate" &&
            !uniqueJobIds.has(job.id);

          if (shouldInclude) {
            uniqueJobIds.add(job.id);
          }

          return shouldInclude;
        }),
      ];

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
            noofempl: job.noofempl,
            age: job.age,
            province: job.province,
            citown: job.citown,
            district: job.district,
            street: job.street,
            chosenInterests: job.chosenInterests,
            urgent: job.urgent,
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
