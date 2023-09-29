<template>
  <IonModal
    class="modal-viewjobpost"
    @did-dismiss="closeViewmodal"
    id="modalView"
  >
    <IonHeader style="background: #262c5c; color: white;">
      <IonGrid>
        <IonRow style="height: 5%">
          <IonCol size="1"> </IonCol>
          <IonCol size="1"> </IonCol>
          <IonCol size="1"> </IonCol>
          <IonCol class="flexcenter" size="6"> TITLE </IonCol>
          <IonCol size="1">
            <IonIcon
              @click="OpenEditModal"
              :icon="pencilOutline"
            >
            </IonIcon>
          </IonCol>
          <IonCol size="1">
            <IonIcon :icon="trashOutline"></IonIcon>
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
          <div class="modal-viewjobpost-image">IMAGE</div>
        </IonCol>
      </IonRow>
      <IonRow style="height: 69%">
        <IonCol style="padding: 0" size="6">
          <IonRow style="height: 16%">
            <IonCol style="padding: 0">
              <IonRow>
                <IonCol class="flexcenter" size="4">
                  <IonCard class="modal-viewjobpost-card-statistics">
                    <IonIcon
                      class="modal-viewjobpost-icon"
                      :icon="eyeSharp"
                    ></IonIcon>
                    <IonText style="padding-left: 5px"> 0 </IonText>
                  </IonCard>
                </IonCol>
                <IonCol class="flexcenter" size="4">
                  <IonCard class="modal-viewjobpost-card-statistics">
                    <IonIcon
                      class="modal-viewjobpost-icon"
                      :icon="thumbsUp"
                    ></IonIcon>
                    <IonText style="padding-left: 5px"> 0 </IonText>
                  </IonCard>
                </IonCol>
                <IonCol class="flexcenter" size="4">
                  <IonCard class="modal-viewjobpost-card-statistics">
                    <IonIcon
                      class="modal-viewjobpost-icon"
                      :icon="bookmark"
                    ></IonIcon>
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
                    <IonCol> Job Type: </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> Job Type: </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> Position level: </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> Salary: </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> Hours of Work: </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> Years of Experience: </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol> Educational Attainment: </IonCol>
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
                    <IonCol> Description: </IonCol>
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
                    <IonCol>Location:</IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
      <IonRow style="height: 10%">
        <IonCol>
          <IonChip>sample</IonChip>
        </IonCol>
      </IonRow>
    </IonGrid>

    <EditModal
      :is-editmodal="Editmodal"
      :is-open="Editmodal"
      @close-edit-modal="CloseEditModal"
    />

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
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
