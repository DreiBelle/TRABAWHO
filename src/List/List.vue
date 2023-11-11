<template>
  <IonPage>
    <IonHeader style="height: 50px">
      <IonToolbar style="height: 100%; --background: #262c5c">
        <IonButtons style="padding-left: 10px" slot="start">
          <div>
            <img style="height: 30px" src="../assets/logo/whitefilllogo.png" alt="logo" />
          </div>
        </IonButtons>
        <IonTitle class="jlist-header-title" mode="ios">
          LIST
        </IonTitle>
        <IonButtons style="padding-right: 10px" slot="end">
          <div>
            <IonIcon style="height: 30px; width: 30px; color: white" id="showLogout" :icon="filter"></IonIcon>
          </div>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <div class="flexcenter" style="border-bottom: 1px solid lightgrey">
        <IonCard class="list-total-cards">
          <IonText>
            A TOTAL OF <b>{{ jobs.length }}</b> JOBS
          </IonText>
        </IonCard>
      </div>
      <div class="flexcenter" v-for="data in jobs">
        <IonCard @click="modalViewjob(true)" class="flexcenter list-cards">
          <div class="flexcenter" style="height: 100%; width: 100px">
            <img class="list-cards-image" :src="data.pic" alt="image" />
          </div>
          <div style="width: 100%; padding: 10px">
            <div class="flexcenter list-cards-text" style="border-bottom: 1px solid black">
              {{ data.jobname }}
            </div>
            <div class="flexcenter list-cards-text">salary({{ data.salaryexp }})</div>
          </div>
          <div class="flexcenter" style="width: 50px">
            <IonIcon style="color: black" :icon="chevronForward"> </IonIcon>
          </div>
        </IonCard>
      </div>
    </IonContent>

    <IonModal :is-open="isViewjob" @did-dismiss="modalViewjob(false)">
      <IonContent style="--background: white">
        <div v-for="data in jobs">
          <div class="flexcenter">
            <IonCard class="swipe-modal-card-company">
              <!-- {{ item.creator }} -->
            </IonCard>
          </div>
          <div class="swipe-modal-picture">
            <div class="swipe-gradient"></div>
            <img class="swipe-modal-picture" :src="data.pic" />
            <div>
              <IonIcon @click="modalViewjob(false)" class="swipe-modal-icon" :icon="chevronBack"></IonIcon>
            </div>
          </div>
          <div style="margin-top: 410px">
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px">
                <b class="flexcenter" style="font-size: 18px; color: black">
                  {{ data.creator }}
                </b>
                <p class="swipe-modal-text-p">
                  Job Type:
                  {{ data.jobtype }}
                </p>
                <p class="swipe-modal-text-p">
                  Position Level:
                  {{ data.positionlvl }}
                </p>
                <p class="swipe-modal-text-p">
                  Needed Employees:
                  {{ data.noofempl }}
                </p>
                <p class="swipe-modal-text-p">
                  Salary:
                  {{ data.salary }}
                </p>
              </IonText>
            </IonCard>
          </div>
          <div>
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px">
                <b class="flexcenter" style="font-size: 18px; color: black">Requirements</b>
                <p class="swipe-modal-text-p">
                  Education:
                  {{ data.reqeduc }}
                </p>
                <p class="swipe-modal-text-p">
                  Years of Experience:
                  {{ data.yearsofexp }}
                </p>
              </IonText>
            </IonCard>
          </div>
          <div>
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px">
                <b class="flexcenter" style="font-size: 18px; color: black">Description</b>
                <p class="swipe-modal-text-p" style="line-height: 18px; text-align: center">
                  {{ data.jobdes }}
                </p>
              </IonText>
            </IonCard>
          </div>
          <div>
            <IonCard class="swipe-modal-cards">
              <IonText style="font-size: 15px; line-height: 10px">
                <b class="flexcenter" style="font-size: 18px; color: black">Location</b>
                <p>
                  Location:
                  {{ data.loc }}
                </p>
              </IonText>
            </IonCard>
          </div>
          <div class="flexcenter">
            <div class="flexcenter">
              <IonAvatar class="flexcenter swipe-modal-buttons">
                <IonIcon :icon="close"> </IonIcon>
              </IonAvatar>
              <IonAvatar class="flexcenter swipe-modal-buttons">
                <IonIcon style="color: lightblue" :icon="heart"> </IonIcon>
              </IonAvatar>
            </div>
          </div>
        </div>
      </IonContent>
    </IonModal>
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
} from "@ionic/vue";
import "../Profile/Seeker-Profile.css";
import "../Swipe/Swipe.css";
import "./List.css";
import { ref as asd, onMounted } from "vue";
import { getUserProfile } from "@/Profile/Profile-Model";
import { getJobs, getJobs2, getJobs3 } from "@/Swipe/Swipe-Model";
import { getDownloadURL, ref } from "@firebase/storage";
import { dbImage } from "@/firebaseDB";
import { getDashboardProfile } from "@/Dashboard/Dashboard-Model";
export default {
  components: {
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
    IonTitle
  },
  data() {
    return {
      jobs: [],
      isViewjob: false,
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
      chevronForward,
      chevronBack,
      close,
      heart,
      filter,
    };
  },
  methods: {
    modalViewjob(x) {
      this.isViewjob = x;
    },
  },
  async mounted() {
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
        const shouldInclude = !user.value.swiperjob.some(
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
        const shouldInclude = !user.value.swiperjob.some(
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
        const shouldInclude = !user.value.swiperjob.some(
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
        }
        else if (job.salary <= user.value.salary) {
          console.log("Lower");
          rangesalary = "Lower"
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
        };
      })
    );


    this.jobs = jobsWithImages;
  }
};
</script>

<style></style>
