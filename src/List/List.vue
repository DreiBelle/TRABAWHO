<template>
  <IonPage>
    <IonHeader mode="md" style="height: 50px">
      <IonToolbar style="height: 100%; --background: #262c5c">
        <IonButtons style="padding-left: 10px" slot="start">
          <div>
            <img
              style="height: 30px"
              src="../assets/logo/whitefilllogo.png"
              alt="logo"
            />
          </div>
        </IonButtons>
        <IonTitle class="jlist-header-title" mode="ios"> LIST </IonTitle>
        <!-- <IonButtons style="padding-right: 10px" slot="end">
          <div>
            <IonIcon
              style="height: 30px; width: 30px; color: white"
              id="showLogout"
              :icon="filter"
            ></IonIcon>
          </div>
        </IonButtons> -->
      </IonToolbar>
      <IonProgressBar v-if="isLoading" type="indeterminate"></IonProgressBar>
    </IonHeader>

    <IonContent>
      <IonRefresher
        style="background: none; z-index: 4"
        slot="fixed"
        @ionRefresh="handleRefresh($event)"
      >
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <div class="flexcenter" style="border-bottom: 1px solid lightgrey">
        <IonCard class="list-total-cards">
          <IonText>
            A TOTAL OF <b>{{ jobs.length }}</b> JOBS
          </IonText>
        </IonCard>
      </div>
      <div class="flexcenter" v-for="data in jobs">
        <IonCard
          @click="modalViewjob(true, data.id, data.company)"
          class="flexcenter list-cards"
        >
          <div class="flexcenter" style="height: 100%; width: 100px">
            <img class="list-cards-image" :src="data.pic" alt="image" />
          </div>
          <div style="width: 100%; padding: 10px">
            <div
              class="flexcenter list-cards-text"
              style="border-bottom: 1px solid black; justify-content: left"
            >
              <b>{{ data.jobname }}</b>
            </div>
            <div
              class="flexcenter list-cards-text"
              style="justify-content: left"
            >
              Salary({{ data.salaryexp }})
            </div>
          </div>
          <div class="flexcenter" style="width: 50px">
            <IonIcon style="color: black" :icon="chevronForward"> </IonIcon>
          </div>
        </IonCard>
      </div>
    </IonContent>

    <div class="flexcenter">
      <IonModal
        mode="ios"
        class="swipe-modal"
        :is-open="isViewjob"
        @did-dismiss="modalViewjob(false, '', '')"
        v-for="item in filterClick"
      >
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
              <IonIcon
                @click="modalViewjob(false, '', '')"
                class="swipe-modal-icon"
                :icon="chevronBack"
              ></IonIcon>
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
                  <IonIcon
                    class="swipe-modal-icon-information"
                    :icon="briefcase"
                  ></IonIcon>
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
                  <IonIcon
                    class="swipe-modal-icon-information"
                    :icon="document"
                  ></IonIcon>
                  Description
                </p>
                <p
                  class="swipe-modal-text-p"
                  style="line-height: 18px; text-align: center"
                >
                  {{ item.jobdes }}
                </p>
              </IonText>
            </IonCard>
          </div>

          <div>
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px">
                <p class="swipe-modal-text-title">
                  <IonIcon
                    class="swipe-modal-icon-information"
                    :icon="alert"
                  ></IonIcon>
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
                  <IonIcon
                    class="swipe-modal-icon-information"
                    :icon="location"
                  ></IonIcon>
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
                  <IonIcon
                    class="swipe-modal-icon-information"
                    :icon="information"
                  ></IonIcon>
                  Company Information
                </p>
                <p class="swipe-modal-text-p">
                  <b>Company Type:</b> {{ info.companytype }}
                </p>
                <p class="swipe-modal-text-p"><b>Location</b> {{ info.loc }}</p>
                <p class="swipe-modal-text-p">
                  <b>Mision/Vision</b> {{ info.mv }}
                </p>
                <p
                  v-if="info.facebook || info.twitter || info.instagram"
                  class="swipe-modal-text-title"
                  style="font-size: 20px"
                >
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

          <div style="flex-wrap: wrap">
            <IonChip v-for="spe in item.chosenInterests"> {{ spe }} </IonChip>
          </div>

          <div class="flexcenter">
            <div class="flexcenter">
              <IonAvatar
                style="background-color: #ff6961"
                @click="dislike()"
                class="flexcenter swipe-modal-buttons"
              >
                <IonIcon style="color: white" :icon="thumbsDown"> </IonIcon>
              </IonAvatar>
              <IonAvatar
                style="background-color: #60a05b"
                @click="like()"
                class="flexcenter swipe-modal-buttons"
              >
                <IonIcon style="color: white" :icon="thumbsUp"> </IonIcon>
              </IonAvatar>
            </div>
          </div>
        </IonContent>
      </IonModal>
    </div>
  </IonPage>
</template>
<script lang="ts">
import {
  chevronForward,
  settings,
  chevronBack,
  close,
  heart,
  filter,
  document,
  alert,
  location,
  briefcase,
  information,
  thumbsDown,
  thumbsUp,
} from "ionicons/icons";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonIcon,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonText,
  IonModal,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonChip,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/vue";
import "../Profile/Seeker-Profile.css";
import "../Swipe/Swipe.css";
import "./List.css";
import { ref as asd, onMounted } from "vue";
import { getUserProfile } from "@/Profile/Profile-Model";
import { getJobs, getJobs2, getJobs3 } from "@/Swipe/Swipe-Model";
import { getDownloadURL, ref } from "@firebase/storage";
import { db, dbImage } from "@/firebaseDB";
import { getDashboardProfile } from "@/Dashboard/Dashboard-Model";
import { doc, getDoc } from "firebase/firestore";
export default {
  components: {
    IonChip,
    IonPage,
    IonContent,
    IonHeader,
    IonIcon,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonText,
    IonModal,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonProgressBar,
    IonRefresher,
    IonRefresherContent,
  },
  data() {
    return {
      jobs: [],
      isViewjob: false,
      passId: "",
      employerInfo: [],
      passEmpId: "",
      isLoading: true,
    };
  },
  setup() {
    const user = asd(null);

    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");
      user.value = await getDashboardProfile(userEmail);
    });
    return {
      settings,
      information,
      chevronForward,
      chevronBack,
      close,
      heart,
      filter,
      document,
      alert,
      location,
      briefcase,
      thumbsUp,
      thumbsDown,
    };
  },
  methods: {
    async handleRefresh(event: CustomEvent<RefresherEventDetail>) {
      this.isLoading = true;
      const user = asd(null);
      const userEmail = localStorage.getItem("email");

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

      const uniqueJobIds = new Set();

      const filteredJobs = [
        ...jobs.filter((job) => {
          const shouldInclude =
            !user.value.swiperjob.some(
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
            !user.value.swiperjob.some(
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
            !user.value.swiperjob.some(
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
          let rangesalary = null;
          if (job.salary >= user.value.salary) {
            console.log("higher");
            rangesalary = "Higher";
          } else if (job.salary <= user.value.salary) {
            console.log("Lower");
            rangesalary = "Lower";
          }
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
            salaryexp: rangesalary,
            age: job.age,
            province: job.province,
            citown: job.citown,
            district: job.district,
            street: job.street,
          };
        })
      );

      this.jobs = jobsWithImages;
      console.log("id" + this.passEmpId);
      this.isLoading = false;
      setTimeout(() => {
        event.detail.complete();
      }, 500);
    },
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
    async getEmployer(id) {
      console.log("the id is: " + id);
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.employerInfo.push(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    modalViewjob(x, id, empId) {
      this.passId = id;
      if (empId) {
        this.getEmployer(empId);
        this.isViewjob = x;
      } else {
        this.employerInfo = [];
        this.isViewjob = x;
      }
    },
  },
  async mounted() {
    this.isLoading = true;
    const user = asd(null);
    const userEmail = localStorage.getItem("email");

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

    const uniqueJobIds = new Set();

    const filteredJobs = [
      ...jobs.filter((job) => {
        const shouldInclude =
          !user.value.swiperjob.some(
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
          !user.value.swiperjob.some(
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
          !user.value.swiperjob.some(
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
        let rangesalary = null;
        if (job.salary >= user.value.salary) {
          console.log("higher");
          rangesalary = "Higher";
        } else if (job.salary <= user.value.salary) {
          console.log("Lower");
          rangesalary = "Lower";
        }
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
          salaryexp: rangesalary,
          age: job.age,
          province: job.province,
          citown: job.citown,
          district: job.district,
          street: job.street,
        };
      })
    );

    this.jobs = jobsWithImages;
    console.log("id" + this.passEmpId);
    this.isLoading = false;
  },
  computed: {
    filterClick() {
      return this.jobs.filter((job) => {
        const clickedID = this.passId;
        return job.id.includes(clickedID);
      });
    },
  },
};
</script>

<style></style>
