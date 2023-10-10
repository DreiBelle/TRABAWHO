<template>
  <IonModal class="modal-viewjobpost" @did-dismiss="closeViewmodal" id="modalView">
    <IonHeader style="background: #262c5c; color: white;">
      <IonGrid>
        <IonRow style="height: 5%">
          <IonCol size="1"> </IonCol>
          <IonCol size="1"> </IonCol>
          <IonCol size="1"> </IonCol>
          <IonCol class="flexcenter" size="6"> {{ jobPosting ? jobPosting.jobname : "Loading..." }} </IonCol>
          <IonCol size="1">
            <IonIcon @click="OpenEditModal" :icon="pencilOutline">
            </IonIcon>
          </IonCol>
          <IonCol size="1">
            <IonIcon @click="deletejob" :icon="trashOutline"></IonIcon>
          </IonCol>
          <IonCol size="1">
            <IonIcon @click="closeViewmodal" :icon="close"></IonIcon>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>

    <IonGrid style="height: 100%; width: 100%;">
      <!-- <IonRow style="height: 5%;">
        <IonCol></IonCol>
      </IonRow> -->
      <IonRow style="height: 20%">
        <IonCol class="flexcenter">
          <div class="modal-viewjobpost-image">
            <img class="modal-image" :src="jobPosting ? jobPosting.pic : ''" alt="" />
          </div>
        </IonCol>
      </IonRow>
      <IonRow style="height: 69%">
        <IonCol style="padding: 0" size="6">
          <IonRow style="height: 16%">
            <IonCol style="padding: 0">
              <IonRow>
                <IonCol class="flexcenter" size="4">
                  <IonCard class="modal-viewjobpost-card-statistics">
                    <IonIcon class="modal-viewjobpost-icon" :icon="eyeSharp"></IonIcon>
                    <IonText style="padding-left: 5px"> 0 </IonText>
                  </IonCard>
                </IonCol>
                <IonCol class="flexcenter" size="4">
                  <IonCard class="modal-viewjobpost-card-statistics">
                    <IonIcon class="modal-viewjobpost-icon" :icon="thumbsUp"></IonIcon>
                    <IonText style="padding-left: 5px"> 0 </IonText>
                  </IonCard>
                </IonCol>
                <IonCol class="flexcenter" size="4">
                  <IonCard class="modal-viewjobpost-card-statistics">
                    <IonIcon class="modal-viewjobpost-icon" :icon="bookmark"></IonIcon>
                    <IonText style="padding-left: 5px"> 0 </IonText>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow style="height: 84%">
            <IonCol class="flexcenter">
              <IonCard class="modal-viewjobpost-cards" style="height: 300px">
                <IonGrid>
                  <IonRow>
                    <IonCol> Job Type: {{ jobPosting ? jobPosting.jobtype : "Loading..." }} </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> Position level: {{ jobPosting ? jobPosting.positionlvl : "Loading..." }} </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> Salary: {{ jobPosting ? jobPosting.salary : "Loading..." }} </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> Hours of Work: {{ jobPosting ? jobPosting.hours : "Loading..." }} </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> Years of Experience: {{ jobPosting ? jobPosting.yearsofexp : "Loading..." }} </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> Educational Attainment: {{ jobPosting ? jobPosting.reqeduc : "Loading..." }} </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonCol>
        <IonCol style="padding: 0" size="6">
          <IonRow style="height: 50%">
            <IonCol class="flexcenter modal-viewjobpost-card-description">
              <IonCard class="modal-viewjobpost-cards" style="height: 175px">
                <IonGrid style="height: 100%">
                  <IonRow style="height: 100%">
                    <IonCol> Description: {{ jobPosting ? jobPosting.jobdes : "Loading..." }} </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow style="height: 50%">
            <IonCol>
              <IonCard class="modal-viewjobpost-cards" style="height: 175px">
                <IonGrid style="height: 100%">
                  <IonRow style="height: 100%">
                    <IonCol>Location: {{ jobPosting ? jobPosting.loc : "Loading..." }} </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
      <IonRow style="height: 10%">
        <IonCol>
          <IonChip>{{ jobPosting ? jobPosting.chosenInterests : "Loading..." }}</IonChip>
        </IonCol>
      </IonRow>
    </IonGrid>

    <EditModal :is-editmodal="Editmodal" :is-open="Editmodal" :job-posting="jobPosting"
      @close-edit-modal="CloseEditModal" />

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
      const viewModal = document.getElementById("modalView");
      viewModal.style.display = "none";
    },
    CloseEditModal() {
      this.Editmodal = false;
      // document.removeEventListener("click", this.handleClickOutside);
      const viewModal = document.getElementById("modalView");
      viewModal.style.display = "flex";
    },

    handleClickOutside(event) {
      const modal = this.$refs.modal.$el;
      if (modal && !modal.contains(event.target)) {
        this.CloseEditModal();
      }
    },
    async deletejob(){
      const jobstore = useJobStore();
      await jobstore.deleteData(this.jobPosting.documentID);
      this.closeViewmodal();
    }
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
