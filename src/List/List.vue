<template>
  <IonPage>
    <IonHeader style="height: 50px">
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
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <div class="flexcenter" style="border-bottom: 1px solid lightgrey">
        <IonCard class="list-total-cards">
          <IonText>
            A TOTAL OF <b>{{ testdata.length }}</b> JOBS
          </IonText>
        </IonCard>
      </div>
      <div class="flexcenter" v-for="data in testdata">
        <IonCard @click="modalViewjob(true)" class="flexcenter list-cards">
          <div class="flexcenter" style="height: 100%; width: 100px">
            <img
              class="list-cards-image"
              src="../assets/companybackground.jpg"
              alt="image"
            />
          </div>
          <div style="width: 100%; padding: 10px">
            <div
              class="flexcenter list-cards-text"
              style="border-bottom: 1px solid black"
            >
              Name of postings
            </div>
            <div class="flexcenter list-cards-text">salary(higher or ups)</div>
          </div>
          <div class="flexcenter" style="width: 50px">
            <IonIcon style="color: black" :icon="chevronForward"> </IonIcon>
          </div>
        </IonCard>
      </div>
    </IonContent>

    <IonModal :is-open="isViewjob" @did-dismiss="modalViewjob(false)">
      <IonContent style="--background: white">
        <div class="flexcenter">
          <IonCard class="swipe-modal-card-company">
            <!-- {{ item.creator }} -->
          </IonCard>
        </div>
        <div class="swipe-modal-picture">
          <div class="swipe-gradient"></div>
          <img
            class="swipe-modal-picture"
            src="../assets/companybackground.jpg"
          />
          <div>
            <IonIcon
              @click="modalViewjob(false)"
              class="swipe-modal-icon"
              :icon="chevronBack"
            ></IonIcon>
          </div>
        </div>
        <div style="margin-top: 410px">
          <IonCard class="swipe-modal-cards">
            <IonText style="font-size: 15px; line-height: 10px">
              <b class="flexcenter" style="font-size: 18px; color: black">
                <!-- {{
                                item.jobname.charAt(0).toUpperCase() +
                                item.jobname.slice(1) }}  -->
              </b>
              <p class="swipe-modal-text-p">
                Job Type:
                <!-- {{ item.jobtype }} -->
              </p>
              <p class="swipe-modal-text-p">
                Position Level:
                <!-- {{ item.positionlvl }} -->
              </p>
              <p class="swipe-modal-text-p">
                Needed Employees:
                <!-- {{ item.noofempl }} -->
              </p>
              <p class="swipe-modal-text-p">
                Salary:
                <!-- {{ item.salary }} -->
              </p>
            </IonText>
          </IonCard>
        </div>
        <div>
          <IonCard class="swipe-modal-cards">
            <IonText style="font-size: 15px; line-height: 10px">
              <b class="flexcenter" style="font-size: 18px; color: black"
                >Requirements</b
              >
              <p class="swipe-modal-text-p">
                Education:
                <!-- {{ item.reqeduc }} -->
              </p>
              <p class="swipe-modal-text-p">
                Years of Experience:
                <!-- {{ item.yearsofexp }} -->
              </p>
            </IonText>
          </IonCard>
        </div>
        <div>
          <IonCard class="swipe-modal-cards">
            <IonText style="font-size: 15px; line-height: 10px">
              <b class="flexcenter" style="font-size: 18px; color: black"
                >Description</b
              >
              <p
                class="swipe-modal-text-p"
                style="line-height: 18px; text-align: center"
              >
                <!-- {{ item.jobdes }} -->
              </p>
            </IonText>
          </IonCard>
        </div>
        <div>
          <IonCard class="swipe-modal-cards">
            <IonText style="font-size: 15px; line-height: 10px">
              <b class="flexcenter" style="font-size: 18px; color: black"
                >Location</b
              >
              <p>
                Location:
                <!-- {{ item.loc }} -->
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
} from "@ionic/vue";
import "../Profile/Seeker-Profile.css";
import "../Swipe/Swipe.css";
import "./List.css";
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
  },
  data() {
    return {
      testdata: ["a", "b", "c"],
      isViewjob: false,
    };
  },
  setup() {
    return {
      settings,
      chevronForward,
      chevronBack,
      close,
      heart,
    };
  },
  methods: {
    modalViewjob(x) {
      this.isViewjob = x;
    },
  },
};
</script>

<style></style>
