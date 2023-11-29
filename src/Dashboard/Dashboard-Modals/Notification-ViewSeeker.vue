<template>
  <IonModal :is-open="isViewuser" @did-dismiss="closeModal()" class="enotif-view-modal">
    <IonHeader class="flexcenter enotif-view-modal-header">{{ nameViewuser }} || {{ jobViewuser }}
      <div style="z-index: 1; position: absolute; right: 20px">
        <IonIcon @click="closeModal()" class="enotif-pointer" :icon="close"></IonIcon>
      </div>
    </IonHeader>
    <IonContent>
      <div v-for="user in users" style="padding: 10px" ref="printContent">
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
                  <IonText class="flexcenter jprofile-modal-field-text jprofile-title"
                    style="border-radius: 100px; width: 100%">
                    PERSONAL
                  </IonText>
                </div>
                <IonText>
                  <p><b>Email: </b>{{ user.email }}</p>
                  <p><b>Birthday: </b>{{ user.bday }}</p>
                  <p><b>Gender: </b>{{ user.gender }}</p>
                  <p><b></b>{{ user.pwd }}</p>
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
                  <IonText class="flexcenter jprofile-modal-field-text jprofile-title"
                    style="border-radius: 100px; width: 100%">
                    EDUCATION
                  </IonText>
                </div>
                <IonText>
                  <p><b>Elementary: </b>{{ user.elementary }}</p>
                  <p><b>Highschool: </b>{{ user.juniorhigh }}</p>
                  <p><b>Senior Highschool: </b>{{ user.seniorhigh }}</p>
                  <p><b>College: </b>{{ user.college }}</p>
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
                  <IonText class="flexcenter jprofile-modal-field-text jprofile-title"
                    style="border-radius: 100px; width: 100%">
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
                <IonText class="flexcenter jprofile-modal-field-text jprofile-title"
                  style="border-radius: 100px; width: 100%">
                  EXPERIENCES
                </IonText>
              </div>
            </div>
            <div style=" display: flex;
                                  height: fit-content;
                                  overflow-x: auto;
                                  width: 100%;
                                  white-space: nowrap;
                                ">
              <IonCard v-for="experience in experiences" style="
                                    min-width: 300px;
                                    width: fit-content;
                                    height: fit-content;
                                    flex: 1 0 auto;
                                    margin: 5px;
                                    padding: 0;
                                  ">
                <div class="flexcenter" style="background-color: #515782; color: white; height: 30px">
                  <IonText style="font-size: 20px; font-family: BebasNeue-Regular">
                    {{ experience.data.JobTitle }}
                  </IonText>
                </div>
                <div style="padding: 5px">
                  <IonText style="color: black">
                    <p style="margin-top: 5px" class="jprofile-text-margin-bottom">
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

                    <p class="jprofile-text-margin-bottom" style="padding-bottom: 10px">
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
                <IonText class="flexcenter jprofile-modal-field-text jprofile-title"
                  style="border-radius: 100px; width: 100%">
                  AWARDS
                </IonText>
              </div>
            </div>
            <div style=" display: flex; height: fit-content; overflow-x: auto; width: 100%; white-space: nowrap;">
              <IonCard v-for="award in awards" style="min-width: 300px; width: fit-content; height: fit-content; flex: 1 0 auto; margin: 5px; padding: 0;">
                <div class="flexcenter" style="background-color: #515782; color: white; height: 30px">
                  <IonText style="font-size: 20px; font-family: BebasNeue-Regular">
                    {{ award.data.AwardName }}
                  </IonText>
                </div>
                <div style="padding: 5px">
                  <IonText style="color: black">
                    <p style="margin-top: 5px" class="jprofile-text-margin-bottom">
                      <b>Where: </b> {{ award.data.AwardWhere }}
                    </p>
                    <p class="jprofile-text-margin-bottom" style="padding-bottom: 10px">
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
        <div v-for="award in awards">
          <div v-for="experience in experiences">
            <div v-for="user in users">
              <IonButton @click="printContent(user, experience, award)" class="enotif-modal-view-button">
                Print
              </IonButton>
              <IonButton @click="downloadPDF(user, experience, award)" class="enotif-modal-view-button">
                Download PDF
              </IonButton>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  </IonModal>
</template>
<script lang="ts" type="module">
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
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
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
    printContent(userData, userexp, useraward) {
      const printWindow = window.open('', '_blank');

      if (printWindow) {
        // Generate HTML content using userData
        const printContentHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
          <div style="flex: 1 1 300px; max-width: 300px;">
            <img src="${userData.pic}" alt="Profile Picture" style="width: 150px; height: 150px;">
            <h2>${userData.fullname}</h2>
            <h2>Basic Information</h2>
            <div>
              <p><b>Email:</b> ${userData.email}</p>
              <p><b>Birthday:</b> ${userData.bday}</p>
              <p><b>Address:</b> ${userData.street}, ${userData.district}, ${userData.province}, ${userData.citown}</p>
              <p><b>Gender:</b> ${userData.gender}</p>
              <p> ${userData.pwd}</p>
            </div>
            <hr>

            <!-- Education Section -->
            <h2>Educational Information</h2>
            <div>
              <p><b>Elementary:</b> ${userData.elementary}</p>
              <p><b>Highschool:</b> ${userData.juniorhigh}</p>
              <p><b>College:</b> ${userData.college}</p>
              <p><b>Masteral:</b> ${userData.masteral}</p>
            </div>
            <hr>

            <!-- Preffered Section -->
            <h2>Skills</h2>
            <div>
              <p><b>Years of Experience:</b> ${userData.yearsofexp}</p>
              <p><b>Classification:</b> ${userData.classification}</p>
              <p><b>SubClassification:</b> ${userData.subclassification}</p>
              <p><b>Specialities:</b> ${userData.chosenInterests}</p>
            </div>
          </div>

          <div style="flex: 1 1 300px; max-width: 300px; margin-top: 200px;">
            <!-- Job Experience Details -->
            <h2>Experience</h2>
            <div>
              <p><b>Job Title:</b> ${userexp.data.JobTitle}</p>
              <p><b>Company:</b> ${userexp.data.CompanyName}</p>
              <p><b>Start Date:</b> ${userexp.data.StartDate}</p>
              <p><b>End Date:</b> ${userexp.data.EndDate}</p>
              <p><b>Responsibility/Duties:</b> ${userexp.data.ResDuty}</p>
              <p><b>Skills:</b> ${userexp.data.Skills}</p>
            </div>
            <hr>

            <!-- Award Section -->
            <h2>Awards</h2>
            <div>
              <p><b>Award Name:</b> ${useraward.data.AwardName}</p>
              <p><b>Award Where:</b> ${useraward.data.AwardWhere}</p>
              <p><b>Award When:</b> ${useraward.data.AwardWhen}</p>
            </div>
            <hr>

            <!-- Applying Section -->
            <h2>Applying for:</h2>
            <div>
              <p><b>Job Title:</b> ${this.jobViewuser}</p>
            </div>
          </div>
        </div>
      `;

        // Write content to the new window
        printWindow.document.write(printContentHTML);
        printWindow.document.close();

        // Trigger the print dialog
        printWindow.print();

        // Close the window after printing
        printWindow.onafterprint = function () {
          printWindow.close();
        };
      } else {
        console.error('Failed to open print window.');
      }
    },

    downloadPDF(userData, userexp, useraward) {
      // Create a new jsPDF instance
      const pdf = new jsPDF();

      // Add content to the PDF
      pdf.text(`
        ${userData.pic}
        ${userData.fullname}
        Basic Information
        Email: ${userData.email}
        Birthday: ${userData.bday}
        Address: ${userData.street}, ${userData.district}, ${userData.province}, ${userData.citown}
        Gender: ${userData.gender}
        ${userData.pwd}
        Education Information
        Elementary: ${userData.elementary}
        Highschool: ${userData.juniorhigh}
        College: ${userData.college}
        Masteral: ${userData.masteral}
        Skills
        Years of Experience: ${userData.yearsofexp}
        Classification: ${userData.classification}
        SubClassification: ${userData.subclassification}
        Email: ${userData.chosenInterests}
        Experience
        Job Title: ${userexp.data.JobTitle}
        Company:  ${userexp.data.CompanyName}
        Start Date:  ${userexp.data.StartDate}
        End Date:  ${userexp.data.EndDate}
        Responsibility/Duties:  ${userexp.data.ResDuty}
        Skills:  ${userexp.data.Skills}
        Awards
        Award Name:  ${userexp.data.AwardName}
        Award Where:  ${userexp.data.AwardWhere}
        Award When:  ${userexp.data.AwardWhen}
        Applying For
        Job Title:  ${this.jobViewuser}

      `, 20, 20);
      // Add more content as needed...

      // Save the PDF
      pdf.save('user_profile.pdf');
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
<style>
.pic{
  max-width: 100%;
  height: auto;
  margin: 10px 0;
}
</style>
