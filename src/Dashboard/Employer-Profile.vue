<template>
  <IonPage style="padding: 5px">
    <IonContent style="--background: none" >
      <div
        v-if="
          user &&
          user.founders &&
          user.businessname &&
          user.email &&
          user.loc &&
          user.number &&
          user.pic &&
          user.yearsofest
        "
      >
        <IonGrid class="eprofile-grid">
          <IonRow style="height: calc(100% - 55px)">
            <IonCol size="4">
              <IonRow>
                <IonCol class="flexcenter">
                  <IonAvatar
                    v-if="user ? user.pic : 'fallback-image-url'"
                    class="eprofile-profilepic"
                  >
                    <img
                      :src="user ? user.pic : 'fallback-image-url'"
                      alt="image"
                    />
                  </IonAvatar>
                  <IonAvatar
                    v-if="user ? !user.pic : 'fallback-image-url'"
                    class="eprofile-profilepic"
                  >
                    <img
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      alt="image"
                    />
                  </IonAvatar>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonText
                    class="eprofile-text-title-container"
                    style="font-size: 30px; padding-top: 0"
                  >
                    {{ user ? `${user.businessname}` : "..." }}
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard class="eprofile-cards" style="padding: 0">
                    <div class="flexcenter eprofile-cards-title-container">
                      <IonText class="eprofile-cards-title">
                        COMPANY OVERVIEW
                      </IonText>
                    </div>

                    <div class="flexcenter">
                      <IonCard
                        class="flexcenter eprofile-cards-companyoverview"
                      >
                        <div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text">
                              Company Type
                            </IonText>
                          </div>
                          <div
                            class="flexcenter eprofile-text-subtext-container"
                          >
                            <IonText v-if="user" class="eprofile-text-subtext">
                              {{ user ? `${user.companytype}` : "..." }}
                            </IonText>
                          </div>
                        </div>
                      </IonCard>
                      <IonCard
                        class="flexcenter eprofile-cards-companyoverview"
                      >
                        <div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text">
                              Year of establishment
                            </IonText>
                          </div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text-subtext">
                              {{ user ? `${user.yearsofest}` : "..." }}
                            </IonText>
                          </div>
                        </div>
                      </IonCard>
                    </div>

                    <div class="flexcenter">
                      <IonCard
                        class="flexcenter eprofile-cards-companyoverview"
                      >
                        <div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text"> Founder/s </IonText>
                          </div>
                          <div
                            class="flexcenter eprofile-text-subtext-container"
                          >
                            <IonText v-if="user" class="eprofile-text-subtext">
                              {{ user ? `${user.founders}` : "..." }}
                            </IonText>
                          </div>
                        </div>
                      </IonCard>
                    </div>

                    <div class="flexcenter">
                      <IonCard
                        class="flexcenter eprofile-cards-companyoverview"
                      >
                        <div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text">
                              No. of Employees
                            </IonText>
                          </div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text-subtext">
                              {{ user ? `${user.noofempl}` : "..." }}
                            </IonText>
                          </div>
                        </div>
                      </IonCard>
                    </div>

                    <div class="flexcenter">
                      <IonCard
                        class="flexcenter eprofile-cards-companyoverview"
                      >
                        <div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text"> Email: </IonText>
                          </div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text-subtext">
                              {{ user ? `${user.email}` : "..." }}
                            </IonText>
                          </div>
                        </div>
                      </IonCard>
                    </div>

                    <div class="flexcenter">
                      <IonCard
                        class="flexcenter eprofile-cards-companyoverview"
                      >
                        <div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text"> Location: </IonText>
                          </div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text-subtext">
                              {{ user ? `${user.loc}` : "..." }}
                            </IonText>
                          </div>
                        </div>
                      </IonCard>
                    </div>

                    <div class="flexcenter">
                      <IonCard
                        class="flexcenter eprofile-cards-companyoverview"
                      >
                        <div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text">
                              Contact Number:
                            </IonText>
                          </div>
                          <div class="flexcenter">
                            <IonText class="eprofile-text-subtext">
                              {{ user ? `${user.number}` : "..." }}
                            </IonText>
                          </div>
                        </div>
                      </IonCard>
                    </div>

                    <div
                      class="flexcenter"
                      v-if="
                        (user && user.facebook) ||
                        user.twitter ||
                        user.instagram
                      "
                    >
                      <IonAvatar
                        v-if="user && user.facebook"
                        class="eprofile-avatar-socialmedias"
                      >
                        <a
                          :href="user.facebook"
                          target="_blank"
                          class="flexcenter"
                          style="color: white"
                        >
                          <IonIcon :icon="logoFacebook"></IonIcon>
                        </a>
                      </IonAvatar>
                      <IonAvatar
                        v-if="user && user.twitter"
                        class="eprofile-avatar-socialmedias"
                      >
                        <a
                          :href="user.twitter"
                          target="_blank"
                          class="flexcenter"
                          style="color: white"
                        >
                          <IonIcon :icon="logoTwitter"></IonIcon>
                        </a>
                      </IonAvatar>
                      <IonAvatar
                        v-if="user && user.instagram"
                        class="eprofile-avatar-socialmedias"
                      >
                        <a
                          :href="user.instagram"
                          target="_blank"
                          class="flexcenter"
                          style="color: white"
                        >
                          <IonIcon :icon="logoInstagram"></IonIcon>
                        </a>
                      </IonAvatar>
                    </div>
                  </IonCard>
                  <div class="eprofile-container-button-edit">
                    <IonButton
                      @click="ocModal(true)"
                      class="eprofile-button-edit"
                    >
                      <IonIcon
                        style="padding-right: 5px"
                        :icon="pencil"
                      ></IonIcon>
                      EDIT PROFILE
                    </IonButton>
                  </div>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol size="8">
              <IonRow v-if="user.bacpic">
                <IonCol>
                  <div class="flexcenter eprofile-coverpic-container">
                    <img
                      class="flexcenter eprofile-coverpic-container eprofile-coverphoto"
                      :src="user ? user.bacpic : 'fallback-image-url'"
                      alt="image"
                    />
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard
                    class="eprofile-cards"
                    style="padding: 0; min-height: 120px"
                  >
                    <div class="flexcenter eprofile-cards-title-container">
                      <IonText class="eprofile-cards-title">
                        MISSION/VISION
                      </IonText>
                    </div>
                    <div
                      class="eprofile-cards-text"
                      style="white-space: pre-line"
                    >
                      {{ user ? `${user.mv}` : "..." }}
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard
                    class="eprofile-cards"
                    style="
                      min-height: 300px;
                      height: fit-content;
                      max-height: 500px;
                      padding: 0;
                    "
                  >
                    <div class="flexcenter eprofile-cards-title-container">
                      <IonText class="eprofile-cards-title"> POSTINGS </IonText>
                    </div>
                    <div>
                      <JobPostings @go-to-posting="goPostings" />
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
      <div class="flexcenter" style="height: 100%" v-else>
        <div>
          <div class="flexcenter">
            <IonText class="eprofie-text-startbuilding">
              START BUILDING <br />
              YOUR PROFILE
            </IonText>
          </div>
          <div class="flexcenter">
            <IonButton
              @click="ocModal(true)"
              fill="outline"
              class="eprofile-button-edit2"
            >
              <IonIcon style="padding-right: 5px" :icon="pencil"></IonIcon>
              EDIT PROFILE
            </IonButton>
          </div>
        </div>
      </div>
    </IonContent>

    <ProfileModal
      :isProfilemodal="isProfileOpen"
      @close-profile-modal="ocModal(false)"
    />    
  </IonPage>
</template>
<script lang="ts">
import ProfileModal from "./Dashboard-Modals/Profile-Edit.vue";
import { ref, onMounted } from "vue";
import { getDashboardProfile } from "./Dashboard-Model";
import { getJobPostings } from "./Dashboard-Model";

import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/vue";
import "./Profile.css";
import {
  pencil,
  logoFacebook,
  logoGoogle,
  logoTwitter,
  logoInstagram,
  eye,
  thumbsUp,
  bookmark,
  chevronForward,
} from "ionicons/icons";
import { db } from "../firebaseDB";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import JobPostings from "./Employer-Profile-JobPostings.vue";

export default {
  components: {
    JobPostings,
    ProfileModal,
    IonGrid,
    IonCol,
    IonRow,
    IonAvatar,
    IonCard,
    IonText,
    IonButton,
    IonIcon,
    IonPage,
    IonContent,
  },
  emits:["go-to-posting"],
  data() {
    return {
      isProfileOpen: false,
    };
  },
  setup() {
    const user = ref(null);
    const jobs = ref([]);

    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");

      user.value = await getDashboardProfile(userEmail);
      jobs.value = await getJobPostings(userEmail, user.value.businessname, user.value.id,);

      const userQuery = query(
        collection(db, "users"),
        where("email", "==", userEmail)
      );
      const userUnsubscribe = onSnapshot(userQuery, (snapshot) => {
        user.value = snapshot.docs[0]?.data();
      });

      console.log(user.value.id);
    });

    return {
      pencil,
      logoGoogle,
      logoFacebook,
      logoTwitter,
      logoInstagram,
      eye,
      thumbsUp,
      bookmark,
      chevronForward,
      user,
      jobs,
    };
  },
  methods: {
    goPostings() {
      this.$emit("go-to-posting")
    },
    ocModal(x) {
      this.isProfileOpen = x;
    },
  },
};
</script>
<style>
/* ion-col {
    border: 1px solid black
} */
</style>
