<template>
  <IonModal
    :is-open="isViewuser"
    @did-dismiss="closeModal()"
    class="enotif-view-modal"
  >
    <IonHeader class="flexcenter enotif-view-modal-header"
      >{{ nameViewuser }} || {{ jobViewuser }}
      <div style="z-index: 1; position: absolute; right: 20px">
        <IonIcon
          @click="closeModal()"
          class="enotif-pointer"
          :icon="close"
        ></IonIcon>
      </div>
    </IonHeader>
    <IonContent>
      <div v-for="user in users" style="padding: 10px">
        <div class="enotif-view-modal-topProfile">
          <div>
            <IonAvatar class="enotif-view-modal-avatar" v-if="user.pic">
              <img :src="user.pic" alt="image" />
            </IonAvatar>
            <IonAvatar class="enotif-view-modal-avatar" v-else-if="!user.pic">
              <img :src="user.pic" alt="image" />
            </IonAvatar>
          </div>

          <div class="enotif-view-top-info-text-container"></div>

          <div class="enotif-padding-text">
            <IonText class="enotif-view-top-info-text">
              {{ user.fullname }}
            </IonText>
          </div>
        </div>
        <div class="flexcenter">
          <IonCard class="enotif-modal-view-cards">
            <div>
              <div style="justify-content: left">
                <div style="width: 100%">
                  <IonText
                    class="flexcenter jprofile-modal-field-text jprofile-title"
                    style="border-radius: 100px; width: 100%"
                  >
                    PERSONAL
                  </IonText>
                </div>
                <IonText>
                  <p><b>Birthday: </b>{{ user.bday }}</p>
                  <p><b>Gender: </b>{{ user.gender }}</p>
                </IonText>
              </div>
            </div>
          </IonCard>
        </div>
        <div class="flexcenter">
          <IonCard class="enotif-modal-view-cards">
            <div>
              <div>
                <div style="width: 100%">
                  <IonText
                    class="flexcenter jprofile-modal-field-text jprofile-title"
                    style="border-radius: 100px; width: 100%"
                  >
                    EDUCATION
                  </IonText>
                </div>
                <IonText>
                  <p><b>Elementary: </b>{{ user.elementary }}</p>
                  <p><b>Highschool: </b>{{ user.juniorhigh }}</p>
                  <p><b>Senior Highschool: </b>{{ user.seniorhigh }}</p>
                  <p><b>College: </b>{{ user.email }}</p>
                  <p v-if="user.masteral">
                    <b>Masteral: </b>{{ user.masteral }}
                  </p>
                </IonText>
              </div>
            </div>
          </IonCard>
        </div>

        <div class="flexcenter">
          <IonCard class="enotif-modal-view-cards" style="height: fit-content">
            <div>
              <div style="justify-content: left">
                <div style="width: 100%">
                  <IonText
                    class="flexcenter jprofile-modal-field-text jprofile-title"
                    style="border-radius: 100px; width: 100%"
                  >
                    SKILLS
                  </IonText>
                </div>

                <IonText>
                  <p><b>Years of Experience: </b>{{ user.yearsofexp }}</p>
                  <p><b>Classification: </b>{{ user.classification }}</p>
                  <p><b>Sub-Classification: </b>{{ user.subclassification }}</p>
                  <p>
                    <b>Specialties: </b>
                    <IonChip v-for="chose in user.chosenInterests">{{
                      chose
                    }}</IonChip>
                  </p>
                </IonText>
              </div>
            </div>
          </IonCard>
        </div>

        <div v-if="this.experiences.length != 0" class="flexcenter">
          <IonCard class="jprofile-cards">
            <div class="flexcenter">
              <div style="width: 100%">
                <IonText
                  class="flexcenter jprofile-modal-field-text jprofile-title"
                  style="border-radius: 100px; width: 100%"
                >
                  EXPERIENCES
                </IonText>
              </div>
            </div>
            <div
              style="
                display: flex;
                height: fit-content;
                overflow-x: auto;
                width: 100%;
                white-space: nowrap;
              "
            >
              <IonCard
                v-for="experience in experiences"
                style="
                  min-width: 300px;
                  width: fit-content;
                  height: fit-content;
                  flex: 1 0 auto;
                  margin: 5px;
                  padding: 0;
                "
              >
                <div
                  class="flexcenter"
                  style="background-color: #515782; color: white; height: 30px"
                >
                  <IonText
                    style="font-size: 20px; font-family: BebasNeue-Regular"
                  >
                    {{ experience.data.JobTitle }}
                  </IonText>
                </div>
                <div style="padding: 5px">
                  <IonText style="color: black">
                    <p
                      style="margin-top: 5px"
                      class="jprofile-text-margin-bottom"
                    >
                      <b>Company Name: </b> {{ experience.data.CompanyName }}
                    </p>

                    <p class="jprofile-text-margin-bottom">
                      <b>Date of Employment: </b>
                      {{ experience.data.StartDate }} to
                      {{ experience.data.EndDate }}
                    </p>

                    <p class="jprofile-text-margin-bottom">
                      <b>Responsibilities and Duties: </b>
                      {{ experience.data.ResDuty }}
                    </p>

                    <p
                      class="jprofile-text-margin-bottom"
                      style="padding-bottom: 10px"
                    >
                      <b>Skills Utilized: </b> {{ experience.data.Skills }}
                    </p>
                  </IonText>
                </div>
              </IonCard>
            </div>
          </IonCard>
        </div>

        <div v-if="this.awards.length != 0" class="flexcenter">
          <IonCard class="jprofile-cards">
            <div class="flexcenter">
              <div style="width: 100%">
                <IonText
                  class="flexcenter jprofile-modal-field-text jprofile-title"
                  style="border-radius: 100px; width: 100%"
                >
                  AWARDS
                </IonText>
              </div>
            </div>
            <div
              style="
                display: flex;
                height: fit-content;
                overflow-x: auto;
                width: 100%;
                white-space: nowrap;
              "
            >
              <IonCard
                v-for="award in awards"
                style="
                  min-width: 300px;
                  width: fit-content;
                  height: fit-content;
                  flex: 1 0 auto;
                  margin: 5px;
                  padding: 0;
                "
              >
                <div
                  class="flexcenter"
                  style="background-color: #515782; color: white; height: 30px"
                >
                  <IonText
                    style="font-size: 20px; font-family: BebasNeue-Regular"
                  >
                    {{ award.data.AwardName }}
                  </IonText>
                </div>
                <div style="padding: 5px">
                  <IonText style="color: black">
                    <p
                      style="margin-top: 5px"
                      class="jprofile-text-margin-bottom"
                    >
                      <b>Where: </b> {{ award.data.AwardWhere }}
                    </p>
                    <p
                      class="jprofile-text-margin-bottom"
                      style="padding-bottom: 10px"
                    >
                      <b>When: </b> {{ award.data.AwardWhen }}
                    </p>
                  </IonText>
                </div>
              </IonCard>
            </div>
          </IonCard>
        </div>
        <div class="flexcenter">
          <IonButton @click="startMessaging()" class="enotif-modal-view-button">
            Message
          </IonButton>
        </div>
      </div>
    </IonContent>
  </IonModal>
</template>
<script lang="ts">
import {
  IonModal,
  IonCard,
  IonChip,
  IonText,
  IonAvatar,
  IonHeader,
  IonContent,
  IonIcon,
  IonButton,
} from "@ionic/vue";
import { db } from "@/firebaseDB";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { close } from "ionicons/icons";
import router from "@/router";
import "@/Profile/Seeker-Profile.css";

export default {
  components: {
    IonModal,
    IonCard,
    IonChip,
    IonText,
    IonAvatar,
    IonHeader,
    IonContent,
    IonIcon,
    IonButton,
  },
  data() {
    return {
      users: [],
      userEmail: localStorage.getItem("email"),
      createdUserMessageId: "",
      userID: "",
      awards: [],
      experiences: [],
      emailClicked: "",
    };
  },
  setup() {
    return {
      close,
    };
  },
  props: {
    isViewuser: {
      type: Boolean,
      required: true,
    },
    idViewuser: {
      type: String,
      required: true,
    },
    nameViewuser: {
      type: String,
      required: true,
    },
    jobViewuser: {
      type: String,
      required: true,
    },
    emailViewuser: {
      type: String,
      required: true,
    },
    pictureViewuser: {
      type: String,
      required: true,
    },
    nameEmployer: {
      type: String,
      required: true,
    },
    picEmployer: {
      type: String,
      required: true,
    },
  },
  watch: {
    idViewuser: function (value) {
      if (value) {
        this.getDetails();
        this.getUser(value);
      } else if (!value) {
        this.users = [];
      }
    },
  },
  emits: ["go-messages", "close-view-modal", "go-messages-data"],
  methods: {
    async getUser(theid) {
      const docRef = doc(db, "users", theid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.emailClicked = docSnap.data().email;
        this.getExperiences();
        this.getAwards();
      } else {
        console.log("No such document!");
      }
    },
    getExperiences() {
      const q = query(
        collection(db, "Experiences"),
        where("SeekerId", "==", this.emailClicked),
        where("Removed", "==", false)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        this.experiences = [];
        querySnapshot.forEach((doc) => {
          this.experiences.push({ id: doc.id, data: doc.data() });
        });
      });
    },
    getAwards(theid) {
      const q = query(
        collection(db, "Awards"),
        where("SeekerId", "==", this.emailClicked),
        where("Removed", "==", false)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        this.awards = [];
        querySnapshot.forEach((doc) => {
          this.awards.push({ id: doc.id, data: doc.data() });
        });
      });
    },
    async startMessaging() {
      const querySnapshot = await getDocs(
        query(
          collection(db, "MessagesUsers"),
          where("SeekerEmail", "==", this.emailViewuser),
          where("SeekerName", "==", this.nameViewuser),
          where("JobSwipe", "==", this.jobViewuser),
          where("EmployerEmail", "==", this.userEmail)
        )
      );
      const querySnapshot2 = await getDocs(
        query(
          collection(db, "MessagesUsers"),
          where("SeekerEmail", "==", this.emailViewuser),
          where("EmployerActive", "==", false),
          where("SeekerName", "==", this.nameViewuser),
          where("JobSwipe", "==", this.jobViewuser),
          where("EmployerEmail", "==", this.userEmail)
        )
      );
      const querySnapshot3 = await getDocs(
        query(
          collection(db, "MessagesUsers"),
          where("SeekerEmail", "==", this.emailViewuser),
          where("EmployerActive", "==", "Deleted"),
          where("SeekerName", "==", this.nameViewuser),
          where("JobSwipe", "==", this.jobViewuser),
          where("EmployerEmail", "==", this.userEmail)
        )
      );

      if (querySnapshot2.size === 0) {
        if (querySnapshot.size === 0) {
          const docRef = await addDoc(collection(db, "MessagesUsers"), {
            SeekerEmail: this.emailViewuser,
            SeekerName: this.nameViewuser,
            EmployerEmail: this.userEmail,
            JobSwipe: this.jobViewuser,
            SeekerPicture: this.pictureViewuser,
            EmployerName: this.nameEmployer,
            latestSent: serverTimestamp(),
            latestDateCreated: new Date().toISOString(),
            latestMessage: "Start of Message",
            EmployerPicture: this.picEmployer,
            SeekerActive: true,
            EmployerActive: true,
          });
          console.log("Document written with ID: ", docRef.id);
          this.createdUserMessageId = docRef.id;

          this.closeModal();
          setTimeout(() => {
            this.$emit("go-messages");
          }, 100);
          this.$emit(
            "go-messages-data",
            this.nameViewuser,
            this.jobViewuser,
            this.pictureViewuser,
            this.emailViewuser,
            this.createdUserMessageId
          );
        } else {
          if (querySnapshot3.size === 0) {
            querySnapshot.forEach((doc) => {
              if (
                doc.data().SeekerEmail === this.emailViewuser &&
                doc.data().JobSwipe === this.jobViewuser &&
                doc.data().EmployerEmail === this.userEmail
              ) {
                this.createdUserMessageId = doc.id;
              }
            });

            console.log("there is already a chat" + this.createdUserMessageId);
            this.closeModal();
            setTimeout(() => {
              this.$emit("go-messages", true);
            }, 100);
            this.$emit(
              "go-messages-data",
              this.nameViewuser,
              this.jobViewuser,
              this.pictureViewuser,
              this.emailViewuser,
              this.createdUserMessageId
            );
          } else {
            console.log("deleted");
          }
        }
      } else {
        querySnapshot2.forEach((doc) => {
          if (
            doc.data().SeekerEmail === this.emailViewuser &&
            doc.data().JobSwipe === this.jobViewuser &&
            doc.data().EmployerEmail === this.userEmail
          ) {
            this.createdUserMessageId = doc.id;
          }
        });

        console.log("its on archive");
        this.closeModal();
        setTimeout(() => {
          this.$emit("go-messages", false);
        }, 100);
        this.$emit(
          "go-messages-data",
          this.nameViewuser,
          this.jobViewuser,
          this.pictureViewuser,
          this.emailViewuser,
          this.createdUserMessageId
        );
      }
    },

    closeModal() {
      this.$emit("close-view-modal");
    },

    async getDetails() {
      const docRef = doc(db, "users", this.idViewuser);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.users.push(docSnap.data());
        console.log("Document data:", this.users);
      } else {
        console.log("No such document!");
      }
    },
  },
};
</script>
