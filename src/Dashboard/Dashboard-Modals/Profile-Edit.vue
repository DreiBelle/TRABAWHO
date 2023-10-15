<template>
    <IonModal
      :is-open="isProfilemodal"
      @did-dismiss="closeProfilemodal"
      class="eprofile-editmodal"
    >
      <IonContent>
        <IonGrid style="width: 100%">
          <IonRow>
            <IonCol size="1.5">
  
            </IonCol>
            <IonCol size="9">
              <IonText class="flexcenter"> EDIT PROFILE </IonText>
            </IonCol>
            <IonCol style="justify-content: right;" class="flexcenter" size="1.5">
              <IonIcon class="eprofile-modal-icon" @click="closeProfilemodal" :icon="close"></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="flexcenter" size="3">
              <div v-if="!thereispic">
                <div>
                  <IonAvatar class="eprofile-modal-cover-container2">
                    <img
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      alt="profile"
                    />
                  </IonAvatar>
                </div>
                <div style="margin-top: 10px" class="flexcenter">
                  <label class="eproifle-modal-editpicture" for="fileInput">
                    Add Picture
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/jpeg"
                    @change="addProfilepicture"
                    ref="myfile"
                    style="display: none"
                  />
                </div>
              </div>
              <div v-if="thereispic">
                <div>
                  <IonAvatar class="eprofile-modal-cover-container2">
                    <img :src="imageUrl" alt="Selected Image" v-if="imageUrl" />
                  </IonAvatar>
                </div>
                <div style="margin-top: 10px" class="flexcenter">
                  <label class="eproifle-modal-editpicture" for="addPicture">
                    Add Picture
                  </label>
                  <input
                    id="addPicture"
                    type="file"
                    accept="image/jpeg"
                    @change="addProfilepicture"
                    ref="myfile"
                    style="display: none"
                  />
                </div>
              </div>
            </IonCol>
            <IonCol class="flexcenter">
              <div v-if="!thereisCover" style="width: 100%">
                <div class="eprofile-modal-cover-container1"></div>
                <div
                  style="margin-top: 10px; justify-content: right"
                  class="flexcenter"
                >
                  <label class="eproifle-modal-editpicture" for="addCover">
                    Add Cover Photo
                  </label>
                  <input
                    id="addCover"
                    type="file"
                    accept="image/jpeg"
                    @change="addCoverphoto"
                    ref="myfile"
                    style="display: none"
                  />
                </div>
              </div>
              <div style="width: 100%" v-if="thereisCover">
                <div class="eprofile-modal-cover-container1">
                  <img
                    class="eprofile-modal-cover-container1 eprofile-coverphoto"
                    :src="CoverUrl"
                    alt="Selected Image"
                    v-if="CoverUrl"
                  />
                </div>
                <div
                  style="margin-top: 10px; justify-content: right"
                  class="flexcenter"
                >
                  <label class="eproifle-modal-editpicture" for="fileInput">
                    Add Cover Photo
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/jpeg"
                    @change="addCoverphoto"
                    ref="myfile"
                    style="display: none"
                  />
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="flexcenter">
              <IonInput
                class="eprofile-editprofile-input"
                label="Registered Business Name"
                fill="outline"
                label-placement="stacked"
              >
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="flexcenter">
              <IonInput
                class="eprofile-editprofile-input"
                label="Year of establishment"
                fill="outline"
                label-placement="stacked"
                type="date"
              >
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="flexcenter">
              <IonInput
                class="eprofile-editprofile-input"
                label="No. of Employees"
                fill="outline"
                label-placement="stacked"
                type="number"
              >
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="flexcenter">
              <IonInput
                class="eprofile-editprofile-input"
                label="Location"
                fill="outline"
                label-placement="stacked"
              >
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="flexcenter">
              <IonTextarea
                class="eprofile-editprofile-input"
                fill="outline"
                style="height: 150px"
                label="Mission/Vission"
                label-placement="stacked"
              >
              </IonTextarea>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="flexcenter">
              <div class="eprofile-modal-founder-container">
                <div
                  class="flexcenter"
                  v-for="(founder, index) in founders"
                  :key="index"
                >
                  <IonInput
                    fill="outline"
                    class="eprofile-editprofile-input"
                    v-model="founder.name"
                    label="Founder/s"
                    label-placement="stacked"
                  ></IonInput>
                  <IonIcon
                    style="font-size: 20px"
                    @click="removeFounder(index)"
                    color="danger"
                    :icon="closeCircle"
                  >
                  </IonIcon>
                </div>
  
                <div>
                  <IonButton
                    class="eprofile-modal-buttons2"
                    fill="outline"
                    @click="addFounder()"
                  >
                    Add Founders
                  </IonButton>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="flexcenter">
              <div class="eprofile-modal-founder-container">
                <div
                  v-for="(socmed, index) in socialMedia"
                  :key="index"
                  class="flexcenter"
                >
                  <IonSelect
                    style="width: 70% !important"
                    class="eprofile-editprofile-input"
                    fill="outline"
                    label="Social Media"
                    placeholder="Choose Social Media"
                    interface="popover"
                    labelPlacement="stacked"
                  >
                    <IonSelectOption value="Facebook"> Facebook </IonSelectOption>
                    <IonSelectOption value="Twitter"> Twitter </IonSelectOption>
                    <IonSelectOption value="Instagram">
                      Instagram
                    </IonSelectOption>
                  </IonSelect>
  
                  <IonInput
                    fill="outline"
                    class="eprofile-editprofile-input"
                    v-model="socmed.url"
                    label="Url"
                    label-placement="stacked"
                    style="width: 100% !important"
                    type="url"
                    required
                    placeholder="Enter URL"
                  ></IonInput>
  
                  <IonIcon
                    style="font-size: 20px; width: 7%"
                    @click="removeSocmed(index)"
                    color="danger"
                    :icon="closeCircle"
                  >
                  </IonIcon>
                </div>
                <div>
                  <IonButton
                    class="eprofile-modal-buttons2"
                    fill="outline"
                    @click="addSocmed()"
                  >
                    Add Social Media
                  </IonButton>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="flexcenter">
              <IonButton
                class="eprofile-modal-buttons"
                style="--background: darkred"
                @click="closeProfilemodal"
              >
                CANCEL
              </IonButton>
            </IonCol>
            <IonCol class="flexcenter">
              <IonButton class="eprofile-modal-buttons"> SAVE </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  </template>
  <script lang="ts">
  import { addCircle, closeCircle, close } from "ionicons/icons";
  import {
    IonAvatar,
    IonButton,
    IonCol,
    IonContent,
    IonDatetime,
    IonDatetimeButton,
    IonGrid,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonModal,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonText,
    IonTextarea,
  } from "@ionic/vue";
  
  export default {
    components: {
      IonModal,
      IonGrid,
      IonRow,
      IonCol,
      IonText,
      IonInput,
      IonTextarea,
      IonContent,
      IonButton,
      IonList,
      IonItem,
      IonIcon,
      IonDatetime,
      IonDatetimeButton,
      IonAvatar,
      IonSelect,
      IonSelectOption,
    },
    props: {
      isProfilemodal: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        imageUrl: null,
        CoverUrl: null,
        founders: [],
        socialMedia: [],
        thereispic: false,
        thereisCover: false,
      };
    },
    methods: {
      closeProfilemodal() {
        this.$emit("close-profile-modal");
      },
      addFounder() {
        this.founders.push({ name: "" });
      },
      addSocmed() {
        this.socialMedia.push({ socMed: "" });
      },
      removeFounder(index) {
        this.founders.splice(index, 1);
      },
      removeSocmed(index) {
        this.socialMedia.splice(index, 1);
      },
      async addProfilepicture(event) {
        const files = event.target.files;
        console.log(files);
  
        if (files && files.length > 0) {
          const file = files[0];
          console.log("Selected file:", file);
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imageUrl = e.target.result;
          };
          reader.readAsDataURL(file);
          this.selectedFile = file;
          this.thereispic = true;
          console.log(file);
        } else {
          console.error("No files selected or an error occurred.");
        }
      },
      async addCoverphoto(event) {
        const files = event.target.files;
        console.log(files);
  
        if (files && files.length > 0) {
          const file = files[0];
          console.log("Selected file:", file);
          const reader = new FileReader();
          reader.onload = (e) => {
            this.CoverUrl = e.target.result;
          };
          reader.readAsDataURL(file);
          this.selectedFile = file;
          this.thereisCover = true;
          console.log(file);
        } else {
          console.error("No files selected or an error occurred.");
        }
      },
    },
    setup() {
      return {
        closeCircle,
        addCircle,
        close,
      };
    },
  };
  </script>
  <style>
  /* ion-col {
    border: 1px solid black;
  } */
  </style>
  