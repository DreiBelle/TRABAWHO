<template>
  <IonModal :is-open="isViewmodal" @did-dismiss="closeModal" style="--border-radius: 20px">
    <div v-for="user in users" style="height: 100%">
      <IonContent>
        <IonHeader class="flexcenter admin-view-modal-header">{{ passId }}
          <div style="z-index: 1; position: absolute; right: 20px">
            <IonIcon v-if="user.aprooved === true" @click="disaproove(passId)" class="admin-pointer" :icon="radioButtonOnOutline"></IonIcon>
            <IonIcon v-if="user.aprooved === false" @click="aproove" class="admin-pointer" :icon="radioButtonOffOutline"></IonIcon><br/>
            <IonIcon v-if="user.type == 'employer'" @click="OpenEditModal(true, user.id)" class="admin-pointer"
              :icon="pencil" style="margin-right: 30px;"></IonIcon>
            <IonIcon v-if="user.type == 'jobseeker'" @click="OpenEditjModal(true, user.id)" class="admin-pointer"
              :icon="pencil" style="margin-right: 30px;"></IonIcon>
            <IonIcon @click="" class="admin-pointer" :icon="trash" style="margin-right: 30px;"></IonIcon>
            <IonIcon v-if="user.type == 'employer'" @click="OpenEditModal" class="admin-pointer" :icon="close"></IonIcon>
            <IonIcon v-if="user.type == 'jobseeker'" @click="OpenEditModal" class="admin-pointer" :icon="close"></IonIcon>
          </div>
        </IonHeader>
        <div v-if="user.type == 'jobseeker'" style="padding: 10px">
          <div class="admin-view-modal-topProfile">
            <div>
              <IonAvatar class="admin-view-modal-avatar" v-if="user.pic">
                <img :src="user.pic" alt="image" />
              </IonAvatar>
              <IonAvatar class="admin-view-modal-avatar" v-else-if="!user.pic">
                <img :src="user.pic" alt="image" />
              </IonAvatar>
            </div>

            <div class="admin-view-top-info-text-container"></div>

            <div>
              <div class="admin-padding-text">
                <IonText class="admin-view-top-info-text">
                  <b>Name: </b> {{ user.fullname }}
                </IonText>
              </div>
              <div class="admin-padding-text">
                <IonText class="admin-view-top-info-text"><b>Type: </b> {{ user.type }}</IonText>
              </div>
              <div class="admin-padding-text">
                <IonText class="admin-view-top-info-text"><b>Contact No.: </b> {{ user.contactno }}</IonText>
              </div>
            </div>
          </div>
          <div class="flexcenter">
            <IonCard class="admin-modal-view-cards">
              <div>
                <div style="justify-content: left">
                  <IonText class="flexcenter" style="font-size: 20px; font-weight: bold">Personal</IonText>
                  <IonText>
                    <p><b>Birthday: </b>{{ user.bday }}</p>
                    <p><b>Gender: </b>{{ user.gender }}</p>
                    <p>
                      <b>Location: </b>{{ user.province }}, {{ user.citown }},
                      {{ user.street }}, {{ user.district }}
                    </p>
                    <p><b>Email: </b>{{ user.email }}</p>
                  </IonText>
                </div>
              </div>
            </IonCard>
            <IonCard class="admin-modal-view-cards">
              <div>
                <div>
                  <IonText class="flexcenter" style="font-size: 20px; font-weight: bold">Education</IonText>
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
            <IonCard class="admin-modal-view-cards" style="height: fit-content">
              <div>
                <div style="justify-content: left">
                  <IonText class="flexcenter" style="font-size: 20px; font-weight: bold">Preferences</IonText>
                  <IonText>
                    <p><b>Years of Experience: </b>{{ user.yearsofexp }}</p>
                    <p><b>Classification: </b>{{ user.classification }}</p>
                    <p>
                      <b>Sub-Classification: </b>{{ user.subclassification }}
                    </p>
                    <p>
                      <b>Job Type: </b>
                      <IonChip v-for="use in user.jobtype">{{ use }}</IonChip>
                    </p>
                    <p>
                      <b>Chosen Interest: </b>
                      <IonChip v-for="chose in user.chosenInterests">{{
                        chose.label
                      }}</IonChip>
                    </p>
                  </IonText>
                </div>
              </div>
            </IonCard>
          </div>
        </div>

        <div v-if="user.type == 'employer'" style="padding: 10px">
          <div class="admin-view-modal-topProfile">
            <div>
              <IonAvatar class="admin-view-modal-avatar" v-if="user.pic">
                <img :src="user.pic" alt="image" />
              </IonAvatar>
              <IonAvatar class="admin-view-modal-avatar" v-else-if="!user.pic">
                <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="image" />
              </IonAvatar>
            </div>

            <div class="admin-view-top-info-text-container"></div>

            <div>
              <div class="admin-padding-text">
                <IonText class="admin-view-top-info-text">
                  <b>Name: </b> {{ user.businessname }}
                </IonText>
              </div>
              <div class="admin-padding-text">
                <IonText class="admin-view-top-info-text"><b>Type: </b> {{ user.type }}</IonText>
              </div>
              <div class="admin-padding-text">
                <IonText class="admin-view-top-info-text"><b>Contact No.: </b> {{ user.number }}</IonText>
              </div>
            </div>
          </div>
          <div v-if="user.mv" class="flexcenter">
            <IonCard class="admin-modal-view-cards" style="height: fit-content;">
              <div>
                <div style="justify-content: left">
                  <IonText class="flexcenter" style="font-size: 20px; font-weight: bold">MISION/VISION</IonText>
                  <IonText>
                    <p>{{ user.mv }}</p>
                  </IonText>
                </div>
              </div>
            </IonCard>
          </div>
          <div v-if="user.contactpn && user.email && user.loc && user.founders" class="flexcenter">
            <IonCard class="admin-modal-view-cards">
              <div>
                <div style="justify-content: left">
                  <IonText class="flexcenter" style="font-size: 20px; font-weight: bold">COMPANY</IonText>
                  <IonText>
                    <p><b>Contact Person Name: </b>{{ user.contactpn }}</p>
                    <p><b>Email: </b>{{ user.email }}</p>
                    <p><b>Location: </b>{{ user.loc }}</p>
                  </IonText>
                </div>
              </div>
            </IonCard>
            <IonCard class="admin-modal-view-cards">
              <div>
                <div>
                  <IonText class="flexcenter" style="font-size: 20px; font-weight: bold">FOUNDERS</IonText>
                  <IonText class="flexcenter">
                    <p style="white-space: pre-line; text-align: center">
                      {{ user.founders }}
                    </p>
                  </IonText>
                </div>
              </div>
            </IonCard>
          </div>
          <div v-if="user.twitter || user.facebook || user.instagram" class="flexcenter">
            <IonCard class="admin-modal-view-cards" style="height: fit-content">
              <div>
                <div style="justify-content: left">
                  <IonText class="flexcenter" style="font-size: 20px; font-weight: bold">Social Media</IonText>
                  <IonText>
                    <IonChip v-if="user.twitter">{{ user.twitter }}</IonChip>
                    <IonChip v-if="user.facebook">{{ user.facebook }}</IonChip>
                    <IonChip v-if="user.instagram">{{ user.instagram }}</IonChip>
                  </IonText>
                </div>
              </div>
            </IonCard>
          </div>
          <div v-if="!user.contactpn || !user.email || !user.loc || !user.founders || !user.mv">
            <IonText class="flexcenter admin-bebufont">
              Not Finish setting up profile
            </IonText>
          </div>
        </div>
      </IonContent>
    </div>
  </IonModal>

  <edituser :is-editmodal="Editmodal" :pass-id="this.passId" @close-edit-modal="CloseEditModal" />
  <editjuser :is-editmodal="Editjmodal" :pass-id="this.passId" @close-edit-modal="CloseEditjModal" />
</template>
<script lang="ts">
import {
  IonAvatar,
  IonCard,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonText,
  IonButton,
} from "@ionic/vue";
import { db } from "@/firebaseDB";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { arrowForwardOutline, close, pencil, trash, radioButtonOffOutline, radioButtonOnOutline } from "ionicons/icons";
import { aprooveUserStore } from "@/stores/approve"
import { ref } from "vue";
import edituser from './adminModal-EditUser.vue';
import editjuser from './adminModal-EditJobseeker.vue';
export default {
  emits: ['close-view-modal'],
  components: {
    IonModal,
    IonAvatar,
    IonText,
    IonHeader,
    IonCard,
    IonContent,
    IonIcon,
    IonChip,
    IonButton,
    edituser,
    editjuser,

  },
  data() {
    return {
      Editmodal: false,
      Editjmodal: false,
      users: [],
    };
  },
  setup() {
    return {
      close,
      pencil,
      trash,
      radioButtonOnOutline,
      radioButtonOffOutline,
    };
  },
  props: {
    isViewmodal: {
      required: true,
      type: Boolean,
    },
    passId: {
      required: true,
      type: String,
    },
  },
  watch: {
    passId: function (value) {
      if (value) {
        this.getDetails();
      } else {
        this.users = [];
      }
    },
  },
  methods: {
    OpenEditjModal(x, id) {
      this.Editjmodal = x;
      this.passID = id;
      // document.addEventListener("click", this.handleClickOutside);
    },
    CloseEditjModal() {
      this.Editjmodal = false;
      // document.removeEventListener("click", this.handleClickOutside);
    },
    OpenEditModal(x, id) {
      this.Editmodal = x;
      this.passID = id;
      // document.addEventListener("click", this.handleClickOutside);
    },
    CloseEditModal() {
      this.Editmodal = false;
      // document.removeEventListener("click", this.handleClickOutside);
    },
    closeModal() {
      this.$emit("close-view-modal");
    },
    async getDetails() {
      const docRef = doc(db, "users", this.passId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.users.push(docSnap.data());
        console.log("Document data:", this.users);
      } else {
        console.log("No such document!");
      }
    },
    async aproove() {
      const aprov = aprooveUserStore()

      await aprov.updateData(this.passId)
      this.$emit("close-view-modal");
    },
    async disaproove(id) {
      const userPostRef = doc(db, 'users', id);
      await updateDoc(userPostRef, {
        isactive: false
      });
      console.log("user post dissapproved successfully!");
      this.closeModal();
    },
  },
};
</script>
