<template>
  <IonPage>
    <IonContent style="--background: none">
      <div
        v-if="user && (user.founders && user.businessname && user.email && user.loc && user.businessname && user.number && user.pic && user.bacpic && user.yearsofest)">
        <IonGrid class="eprofile-grid">
          <IonRow style="height: calc(100% - 55px)">
            <IonCol size="3">
              <IonRow>
                <IonCol class="flexcenter">
                  <IonAvatar v-if="user ? user.pic : 'fallback-image-url'" class="eprofile-profilepic">
                    <img :src="user ? user.pic : 'fallback-image-url'" alt="image" />
                  </IonAvatar>
                  <IonAvatar v-if="user ? !user.pic : 'fallback-image-url'" class="eprofile-profilepic">
                    <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="image" />
                  </IonAvatar>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="flexcenter">
                  <IonText class="eprofile-text-title-container" style="font-size: 20px; padding-top: 0">
                    {{ user ? `${user.businessname}` : "..." }}
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard class="eprofile-cards">
                    <IonRow>
                      <IonCol class="flexcenter eprofile-text-title-container">
                        <IonText> COMPANY OVERVIEW </IonText>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol style="padding-top: 10px">
                        <div class="flexcenter">
                          <IonText class="eprofile-text"> Founder/s </IonText>
                        </div>
                        <div class="flexcenter eprofile-text-subtext-container">
                          <template v-if="user">
                            <IonText class="eprofile-text-subtext">
                              {{ user ? `${user.founders}` : "..." }}
                            </IonText>
                          </template>
                          <template v-else> Loading founders... </template>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol style="padding-top: 10px">
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
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol style="padding-top: 10px">
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
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div class="flexcenter">
                          <IonText class="eprofile-text"> Email: </IonText>
                        </div>
                        <div class="flexcenter">
                          <IonText class="eprofile-text-subtext">
                            {{ user ? `${user.email}` : "..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div class="flexcenter">
                          <IonText class="eprofile-text"> Location: </IonText>
                        </div>
                        <div class="flexcenter">
                          <IonText class="eprofile-text-subtext">
                            {{ user ? `${user.loc}` : "..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div class="flexcenter">
                          <IonText class="eprofile-text"> Contact Number: </IonText>
                        </div>
                        <div class="flexcenter">
                          <IonText class="eprofile-text-subtext">
                            {{ user ? `${user.number}` : "..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol class="flexcenter">
                        <IonAvatar v-if="user && user.facebook" class="eprofile-avatar-socialmedias">
                          <a :href="user.facebook" target="_blank" class="flexcenter" style="color: white;">
                            <IonIcon :icon="logoFacebook"></IonIcon>
                          </a>
                        </IonAvatar>
                        <IonAvatar v-if="user && user.twitter" class="eprofile-avatar-socialmedias">
                          <a :href="user.twitter" target="_blank" class="flexcenter" style="color: white;">
                            <IonIcon :icon="logoTwitter"></IonIcon>
                          </a>
                        </IonAvatar>
                        <IonAvatar v-if="user && user.instagram" class="eprofile-avatar-socialmedias">
                          <a :href="user.instagram" target="_blank" class="flexcenter" style="color: white;">
                            <IonIcon :icon="logoInstagram"></IonIcon>
                          </a>
                        </IonAvatar>
                      </IonCol>
                    </IonRow>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol size="9">
              <IonRow>
                <IonCol>
                  <div class="flexcenter eprofile-coverpic-container">
                    <img class="flexcenter eprofile-coverpic-container eprofile-coverphoto"
                      :src="user ? user.bacpic : 'fallback-image-url'" alt="image" />
                  </div>
                </IonCol>
              </IonRow>
              <IonRow style="height: 55px">
                <IonCol class="eprofile-container-button-edit">
                  <IonButton @click="ocModal(true)" class="eprofile-button-edit">
                    <IonIcon style="padding-right: 5px" :icon="pencil"></IonIcon>
                    EDIT PROFILE
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard class="eprofile-cards">
                    <div class="flexcenter">
                      <IonText class="eprofile-cards-title">
                        MISSION/VISION
                      </IonText>
                    </div>
                    <div class="eprofile-cards-text">
                      {{ user ? `${user.mv}` : "..." }}
                    </div>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard class="eprofile-cards2">
                    <IonRow style="height: 30px">
                      <IonCol> Recent Postings: </IonCol>
                    </IonRow>
                    <IonRow style="height: calc(90% - 30px)">
                      <IonCol class="flexcenter">
                        <IonCard class="eprofile-cards3">
                          <IonRow style="height: 100%">
                            <IonCol size="1"> picture </IonCol>
                            <IonCol class="eprofile-title-recent-postings" size="8">
                              jobname
                            </IonCol>
                            <IonCol class="flexcenter" size="1">
                              <IonIcon class="eprofile-icons" :icon="eye">
                              </IonIcon>
                              <IonText class="eprofile-text-bookmark">0</IonText>
                            </IonCol>
                            <IonCol class="flexcenter" size="1">
                              <IonIcon class="eprofile-icons" :icon="thumbsUp"></IonIcon>
                              <IonText class="eprofile-text-bookmark">0</IonText>
                            </IonCol>
                            <IonCol class="flexcenter" size="1">
                              <IonIcon class="eprofile-icons" :icon="bookmark"></IonIcon>
                              <IonText class="eprofile-text-bookmark">0</IonText>
                            </IonCol>
                          </IonRow>
                        </IonCard>
                      </IonCol>
                    </IonRow>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCard class="eprofile-cards2">
                    <IonRow style="height: 30px">
                      <IonCol> Recent Activities: </IonCol>
                    </IonRow>
                    <IonRow style="height: calc(90% - 30px)">
                      <IonCol class="flexcenter">
                        <IonCard class="eprofile-cards3">
                          <IonRow style="height: 100%">
                            <IonCol size="1"> Picture </IonCol>
                            <IonCol class="eprofile-title-recent-postings" size="10">
                              Nyzuz Damaso liked Carpenter Post
                            </IonCol>
                            <IonCol class="flexcenter" size="1">
                              <IonIcon class="eprofile-icons" :icon="chevronForward">
                              </IonIcon>
                            </IonCol>
                          </IonRow>
                        </IonCard>
                      </IonCol>
                    </IonRow>
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
            <IonButton @click="ocModal(true)" fill="outline" class="eprofile-button-edit2">
              <IonIcon style="padding-right: 5px" :icon="pencil"></IonIcon>
              EDIT PROFILE
            </IonButton>
          </div>
        </div>
      </div>
    </IonContent>

    <ProfileModal :isProfilemodal="isProfileOpen" @close-profile-modal="ocModal(false)" />
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
export default {
  components: {
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
      jobs.value = await getJobPostings(userEmail, user.value.businessname);

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
