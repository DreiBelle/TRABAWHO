<template>
  <IonModal class="modal-viewjobpost" @did-dismiss="closeView" :is-open="isViewmodal">
    <IonProgressBar v-if="isLoading" type="indeterminate"></IonProgressBar>
    <IonHeader style="background: #262c5c; color: white">
      <IonGrid>
        <IonRow>
          <IonCol size="1"> </IonCol>
          <IonCol size="1"> </IonCol>
          <IonCol size="1"> </IonCol>
          <IonCol class="flexcenter" size="5">
            {{ jobPosting ? jobPosting.jobname : "Loading..." }}
          </IonCol>
          <IonCol size="1">
            <IonIcon class="modal-icon" style="color: lightblue" @click="islikesModal(true)" :icon="thumbsUp">
            </IonIcon>
          </IonCol>
          <IonCol size="1">
            <IonIcon class="modal-icon" style="color: lightgreen" @click="OpenEditModal" :icon="pencilOutline">
            </IonIcon>
          </IonCol>
          <IonCol size="1">
            <IonIcon class="modal-icon" style="color: #FF7276" @click="deletejob" :icon="trashOutline"></IonIcon>
          </IonCol>
          <IonCol size="1">
            <IonIcon class="modal-icon" @click="closeView" :icon="close"></IonIcon>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>

    <IonGrid style="height: 100%; width: 100%">
      <IonRow style="height: 100%;">
        <IonCol size="5.5" class="flexcenter" style="max-height: 550px;">
          <div class="flexcenter" style="height: 100%; width: 100%;">
            <img class="modal-viewjobpost-image" :src="jobPosting ? jobPosting.pic : ''" alt="" />
          </div>
          <div class="swipe-text-preview">
            <div>
              <IonText class="swipe-text-stroke" style="font-size: 35px;"> {{ jobPosting ?
                jobPosting.jobname.toUpperCase() : "Loading..." }}
              </IonText>
            </div>
            <div>
              <IonText>
                <span v-if="jobPosting.urgent" style="color: red; font-size: 20px; margin-left: 5px">(Urgently
                  Hiring)</span>
              </IonText>
            </div>
            <div>
              <IonText class="swipe-text-stroke2" style="font-size: 19px;"> Type: {{ jobPosting ? jobPosting.jobtype :
                "Loading..." }} </IonText>
            </div>
            <div>
              <IonText class="swipe-text-stroke2" style="font-size: 19px;"> Position: {{ jobPosting ?
                jobPosting.positionlvl : "Loading..." }} </IonText>
            </div>
          </div>
        </IonCol>
        <IonCol size="6.5" class="flexcenter">
          <IonContent class="custom-scrollbar">
            <div class="flexcenter">
              <IonCard style="color: black;" class="modal-viewjobpost-card-statistics">
                <IonIcon class="modal-viewjobpost-icon" :icon="eyeSharp"></IonIcon>
                <IonText style="padding-left: 5px" class="modal-viewjobposting-title">{{ jobPosting ? jobPosting.views :
                  "Loading..." }} VIEWS</IonText>
              </IonCard>

              <IonCard style="color: black;" class="modal-viewjobpost-card-statistics">
                <IonIcon class="modal-viewjobpost-icon" :icon="thumbsUp"></IonIcon>
                <IonText style="padding-left: 5px" class="modal-viewjobposting-title">{{ jobPosting ? jobPosting.likes :
                  "Loading..." }} LIKES</IonText>
              </IonCard>
            </div>
            <div>
              <div class="flexcenter">
                <IonCard class="modal-viewjobpost-cards" style="height: fit-content">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <div class="flexcenter">
                          <IonText class="modal-viewjobposting-title">Job Information</IonText>
                        </div>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Job Title:</b>
                            {{ jobPosting ? jobPosting.jobname : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Job Type:</b>
                            {{ jobPosting ? jobPosting.jobtype : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Position Level:</b>
                            {{ jobPosting ? jobPosting.positionlvl : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Salary:</b>
                            {{ jobPosting ? jobPosting.salary : "Loading..." }}
                            Php
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Estimated Hours:</b>
                            {{ jobPosting ? jobPosting.hours : "Loading..." }}
                            Hours
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCard>
              </div>

              <div class="flexcenter">
                <IonCard class="modal-viewjobpost-cards" style="height: fit-content">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <div class="flexcenter">
                          <IonText class="modal-viewjobposting-title">Requirements</IonText>
                        </div>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>No. of Employees:</b>
                            Looking for
                            <b> {{ jobPosting ? jobPosting.noofempl : "Loading..." }} </b>
                            Job Seekers
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Age:</b>
                            {{ jobPosting ? jobPosting.age : "Loading..." }}
                            y/o
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Years of Experience:</b>
                            {{ jobPosting ? jobPosting.yearsofexp : "Loading..." }}
                            Years of Experience
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Educational Attainment:</b>
                            {{ jobPosting ? jobPosting.reqeduc : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCard>
              </div>

              <div class="flexcenter">
                <IonCard class="modal-viewjobpost-cards" style="height: fit-content">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <div class="flexcenter">
                          <IonText class="modal-viewjobposting-title">FIELDS</IonText>
                        </div>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Classification:</b>
                            {{ jobPosting ? jobPosting.classification : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Sub-Classification:</b>
                            {{ jobPosting ? jobPosting.subclassification : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCard>
              </div>

              <div class="flexcenter">
                <IonCard class="modal-viewjobpost-cards" style="height: fit-content">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <div class="flexcenter">
                          <IonText class="modal-viewjobposting-title">Work Location</IonText>
                        </div>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Province:</b>
                            {{ jobPosting ? jobPosting.province : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>City/Town:</b>
                            {{ jobPosting ? jobPosting.citown : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>District:</b>
                            {{ jobPosting ? jobPosting.district : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            <b>Street:</b>
                            {{ jobPosting ? jobPosting.street : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCard>
              </div>

              <div class="flexcenter">
                <IonCard class="modal-viewjobpost-cards" style="height: fit-content">
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <div class="flexcenter">
                          <IonText class="modal-viewjobposting-title">DESCRIPTION</IonText>
                        </div>
                        <div style="text-align: center;">
                          <IonText class="modal-viewjobposting-text">
                            {{ jobPosting ? jobPosting.jobdes : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCard>
              </div>

              <div class="flexcenter">
                <IonCard class="modal-viewjobpost-cards" style="height: fit-content">
                  <div class="flexcenter">
                    <IonText class="modal-viewjobposting-title">SPECIALIZED</IonText>
                  </div>
                  <div>
                    <IonChip v-for="interest in jobPosting.chosenInterests" :key="interest"> {{ interest }}
                    </IonChip>
                  </div>
                </IonCard>
              </div>
            </div>
          </IonContent>
        </IonCol>
      </IonRow>
    </IonGrid>
    <EditModal :is-editmodal="Editmodal" :job-posting="jobPosting" @close-edit-modal="CloseEditModal" />
    <LikesModal :is-likesmodal="isLikemodal" :job-posting="jobPosting" @close-likes-modal="islikesModal(false)"></LikesModal>

    <!-- <IonModal
      ref="modal"
      :is-open="Editmodal"
      @close="CloseEditModal"
      class="modal-addjobpost"
    >
      <IonContent>
        
      </IonContent>
    </IonModal> -->
  </IonModal>
</template>
<script lang="ts">
import {
  IonCard,
  IonChip,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
  IonModal,
  IonContent,
  IonHeader,
  IonInput,
  IonProgressBar,
} from "@ionic/vue";
import {
  eyeSharp,
  thumbsUp,
  bookmark,
  close,
  pencilOutline,
  trashOutline,
} from "ionicons/icons";
import EditModal from "../Dashboard-Modals/Dashboard-EditJobPosting.vue";
import LikesModal from "../Dashboard-Modals/Dashboard-Likes.vue"
import { useJobStore } from "@/stores/deletejobstore";
import '@/Swipe/Swipe.css'
import { collection, addDoc, updateDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebaseDB";

export default {
  components: {
    LikesModal,
    IonModal,
    IonContent,
    EditModal,
    IonGrid,
    IonCol,
    IonRow,
    IonChip,
    IonCard,
    IonText,
    IonIcon,
    IonHeader,
    IonInput,
    IonProgressBar
  },
  props: {
    isViewmodal: {
      type: Boolean,
      required: true,
    },
    jobPosting: {
      type: Object,
    },
  },
  data() {
    return {
      Editmodal: false,
      EmployerEmail: localStorage.getItem("email"),
      isLoading: false,
      isLikemodal: false,
    };
  },
  setup() {
    return {
      eyeSharp,
      thumbsUp,
      bookmark,
      close,
      pencilOutline,
      trashOutline,
    };
  },
  methods: {
    islikesModal(x){
      this.isLikemodal = x
    },
    closeView() {
      this.$emit("close-view-modal");
    },
    OpenEditModal() {
      this.Editmodal = true;
      // document.addEventListener("click", this.handleClickOutside);
    },
    CloseEditModal() {
      this.Editmodal = false;
      this.$emit("close-view-modal");
      // document.removeEventListener("click", this.handleClickOutside);
    },

    handleClickOutside(event) {
      const modal = this.$refs.modal.$el;
      if (modal && !modal.contains(event.target)) {
        this.CloseEditModal();
      }
    },
    async removeAuditlog(jobname) {
      this.isLoading = true
      const docRef = await addDoc(collection(db, "Logs"), {
        EmployerEmail: this.EmployerEmail,
        Action: "Removed a job posting " + jobname,
        DateCreated: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      this.isLoading = false
    },
    async deletejob() {
      this.removeAuditlog(this.jobPosting.jobname)
      // const jobstore = useJobStore();
      // await jobstore.deleteData(this.jobPosting.documentID);
      const jobPostRef = doc(db, 'jobpost', this.jobPosting.documentID);
      await updateDoc(jobPostRef, {
        isactive: "Removed"
      });
      console.log("Job post deleted successfully!");
      this.closeView();
    },
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
