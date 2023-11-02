<template>
  <IonModal class="modal-viewjobpost" @did-dismiss="closeViewmodal" id="modalView">
    <IonHeader style="background: #262c5c; color: white">
      <IonGrid>
        <IonRow>
          <IonCol size="1"> </IonCol>
          <IonCol size="1"> </IonCol>
          <IonCol size="1"> </IonCol>
          <IonCol class="flexcenter" size="6">
            {{ jobPosting ? jobPosting.jobname : "Loading..." }}
          </IonCol>
          <IonCol size="1">
            <IonIcon class="modal-icon" style="color: green" @click="OpenEditModal" :icon="pencilOutline">
            </IonIcon>
          </IonCol>
          <IonCol size="1">
            <IonIcon class="modal-icon" style="color: red" @click="deletejob" :icon="trashOutline"></IonIcon>
          </IonCol>
          <IonCol size="1">
            <IonIcon class="modal-icon" @click="closeViewmodal" :icon="close"></IonIcon>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>

    <IonGrid style="height: 100%; width: 100%">
      <IonRow style="height: 100%;">
        <IonCol size="5.5" class="flexcenter">
          <img class="modal-viewjobpost-image" :src="jobPosting ? jobPosting.pic : ''" alt="" />
          <div class="swipe-text-preview">
            <div>
              <IonText class="swipe-text-stroke" style="font-size: 35px;"> {{ jobPosting ?
                jobPosting.jobname.toUpperCase() : "Loading..." }} </IonText>
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
              <IonCard class="modal-viewjobpost-card-statistics">
                <IonIcon class="modal-viewjobpost-icon" :icon="eyeSharp"></IonIcon>
                <IonText style="padding-left: 5px"> {{ jobPosting ? jobPosting.views : "Loading..." }} </IonText>
              </IonCard>

              <IonCard class="modal-viewjobpost-card-statistics">
                <IonIcon class="modal-viewjobpost-icon" :icon="thumbsUp"></IonIcon>
                <IonText style="padding-left: 5px"> {{ jobPosting ? jobPosting.likes : "Loading..." }} </IonText>
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
                            Job Title:
                            {{ jobPosting ? jobPosting.jobname : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            Job Type:
                            {{ jobPosting ? jobPosting.jobtype : "Loading..." }} </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            Position level:
                            {{ jobPosting ? jobPosting.positionlvl : "Loading..." }}</IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            Salary:
                            {{ jobPosting ? jobPosting.salary : "Loading..." }}</IonText>
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
                        <div>
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
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <div class="flexcenter">
                          <IonText class="modal-viewjobposting-title">Requirements</IonText>
                        </div>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            No. of Employees:
                            {{ jobPosting ? jobPosting.noofempl : "Loading..." }}
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            Age:
                            wala pa to </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            Years of Experience:
                            {{ jobPosting ? jobPosting.yearsofexp : "Loading..." }}</IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            Required Educational Attainment:
                            {{ jobPosting ? jobPosting.reqeduc : "Loading..." }}</IonText>
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
                            Province
                            wala pa to
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            City/Town
                            wala pa to </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            District - Purok
                          </IonText>
                        </div>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <div>
                          <IonText class="modal-viewjobposting-text">
                            Street
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
                    <IonChip v-for="interest in jobPosting.chosenInterests" :key="interest"> {{ interest.label }}
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
import { useJobStore } from "@/stores/deletejobstore";
import '@/Swipe/Swipe.css'
export default {
  components: {
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
    IonInput
  },
  props: {
    isViewmodal: {
      type: Boolean,
      required: true,
    },
    jobPosting: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      Editmodal: false,
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
    openViewmodal() {
      this.$emit("open-view-modal");
    },
    closeViewmodal() {
      this.$emit("close-view-modal");
    },
    OpenEditModal() {
      this.Editmodal = true;
      // document.addEventListener("click", this.handleClickOutside);
    },
    CloseEditModal() {
      this.Editmodal = false;
      // document.removeEventListener("click", this.handleClickOutside);
    },

    handleClickOutside(event) {
      const modal = this.$refs.modal.$el;
      if (modal && !modal.contains(event.target)) {
        this.CloseEditModal();
      }
    },
    async deletejob() {
      const jobstore = useJobStore();
      await jobstore.deleteData(this.jobPosting.documentID);
      this.closeViewmodal();
    },
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
