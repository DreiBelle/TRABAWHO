<template>
  <IonModal :is-open="isProfilemodal" @did-dismiss="closeProfilemodal" class="eprofile-editmodal">
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
                  <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="profile" />
                </IonAvatar>
              </div>
              <div style="margin-top: 10px" class="flexcenter">
                <label class="eproifle-modal-editpicture" for="fileInput">
                  Add Picture
                </label>
                <input id="fileInput" type="file" accept="image/jpeg" @change="addProfilepicture" ref="myfile"
                  style="display: none" />
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
                <input id="addPicture" type="file" accept="image/jpeg" @change="addProfilepicture" ref="myfile"
                  style="display: none" />
              </div>
            </div>
          </IonCol>
          <IonCol class="flexcenter">
            <div v-if="!thereisCover" style="width: 100%">
              <div class="eprofile-modal-cover-container1"></div>
              <div style="margin-top: 10px; justify-content: right" class="flexcenter">
                <label class="eproifle-modal-editpicture" for="addCover">
                  Add Cover Photo
                </label>
                <input id="addCover" type="file" accept="image/jpeg" @change="addCoverphoto" ref="myfile"
                  style="display: none" />
              </div>
            </div>
            <div style="width: 100%" v-if="thereisCover">
              <div class="eprofile-modal-cover-container1">
                <img class="eprofile-modal-cover-container1 eprofile-coverphoto" :src="CoverUrl" alt="Selected Image"
                  v-if="CoverUrl" />
              </div>
              <div style="margin-top: 10px; justify-content: right" class="flexcenter">
                <label class="eproifle-modal-editpicture" for="fileInput">
                  Add Cover Photo
                </label>
                <input id="fileInput" type="file" accept="image/jpeg" @change="addCoverphoto" ref="myfile"
                  style="display: none" />
              </div>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="flexcenter">
            <IonInput class="eprofile-editprofile-input" label="Registered Business Name" fill="outline"
              label-placement="stacked" v-model="formData.businessname">
            </IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="flexcenter">
            <IonInput class="eprofile-editprofile-input" label="Year of establishment" fill="outline"
              label-placement="stacked" type="date" v-model="formData.yearsofest">
            </IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="flexcenter">
            <IonInput class="eprofile-editprofile-input" label="No. of Employees" fill="outline" label-placement="stacked"
              type="number" v-model="formData.noofempl">
            </IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="flexcenter">
            <IonInput class="eprofile-editprofile-input" label="Location" fill="outline" label-placement="stacked"
              v-model="formData.loc">
            </IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="flexcenter">
            <IonTextarea class="eprofile-editprofile-input" fill="outline" style="height: 150px" label="Mission/Vission"
              label-placement="stacked" v-model="formData.mv">
            </IonTextarea>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="flexcenter">
            <IonTextarea class="eprofile-editprofile-input" fill="outline" style="height: 150px" label="Founders"
              label-placement="stacked" v-model="formData.founders">
            </IonTextarea>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="flexcenter">
            <IonInput class="eprofile-editprofile-input" label="Facebook" fill="outline" label-placement="stacked"
              v-model="formData.facebook">
            </IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="flexcenter">
            <IonInput class="eprofile-editprofile-input" label="Twitter" fill="outline" label-placement="stacked"
              v-model="formData.twitter">
            </IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="flexcenter">
            <IonInput class="eprofile-editprofile-input" label="Instagram" fill="outline" label-placement="stacked"
              v-model="formData.instagram">
            </IonInput>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="flexcenter">
            <IonButton class="eprofile-modal-buttons" style="--background: darkred" @click="closeProfilemodal">
              CANCEL
            </IonButton>
          </IonCol>
          <IonCol class="flexcenter">
            <IonButton class="eprofile-modal-buttons" @click="additionalprof"> SAVE </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonModal>
</template>
<script lang="ts">
import { addCircle, closeCircle, close } from "ionicons/icons";
import { ref as asd, uploadBytes, getDownloadURL } from "firebase/storage";
import { dbImage } from "@/firebaseDB";
import { useUserStore } from "@/stores/updateemprof"
import { ref, onMounted, computed } from 'vue'
import { getDashboardProfile } from "@/Dashboard/Dashboard-Model"
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
  setup() {
    const user = ref(null);

    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");
      user.value = await getDashboardProfile(userEmail);
    });

    const formData = computed(() => ({
      businessname: user.value.businessname || "",
      pic: user.value.pic || "",
      bacpic: user.value.bacpic || "",
      noofempl: user.value.noofempl || "",
      loc: user.value.loc || "",
      mv: user.value.mv || "",
      yearsofest: user.value.yearsofest || "",
      founders: user.value.founders || "",
      facebook: user.value.facebook || "",
      twitter: user.value.twitter || "",
      instagram: user.value.instagram || "",

    }));

    return {
      closeCircle,
      addCircle,
      close,
      formData,
      user,
    };
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
    // addFounder() {
    //   this.founders.push({ name: "" });
    // },
    // addSocmed() {
    //   this.socialMedia.push({ socMed: "" });
    // },
    // removeFounder(index) {
    //   this.founders.splice(index, 1);
    // },
    // removeSocmed(index) {
    //   this.socialMedia.splice(index, 1);
    // },
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
        this.selectedpic = file;
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
        this.selectedbacpic = file;
        this.thereisCover = true;
        console.log(file);
      } else {
        console.error("No files selected or an error occurred.");
      }
    },
    async additionalprof() {
      if (this.selectedpic) {
        // Upload the selected image to Firebase Storage
        const storageRef = asd(
          dbImage,
          "userpictures/" + this.selectedpic.name
        );
        try {
          await uploadBytes(storageRef, this.selectedpic);
          // Get the download URL of the uploaded image
          const downloadURL = await getDownloadURL(storageRef);

          // Update the formData with the image URL
          this.formData.pic = downloadURL;
        } catch (error) {
          console.error("Error uploading image:", error);
          alert("Error uploading image. Please try again.");
          return;
        }
      }

      if (this.selectedbacpic) {
        // Upload the selected image to Firebase Storage
        const storageRef = asd(
          dbImage,
          "userpictures/" + this.selectedbacpic.name
        );
        try {
          await uploadBytes(storageRef, this.selectedbacpic);
          // Get the download URL of the uploaded image
          const downloadURL = await getDownloadURL(storageRef);

          // Update the formData with the image URL
          this.formData.bacpic = downloadURL;
        } catch (error) {
          console.error("Error uploading image:", error);
          alert("Error uploading image. Please try again.");
          return;
        }
      }

      const userstore = useUserStore();
      userstore.setFormData(this.formData);
      // userstore.setfounders(this.founders);
      // userstore.setsocialMedia(this.socialMedia);
      await userstore.updateData(this.user.id);
      this.$emit("close-profile-modal");
    },
  },
};
</script>
<style>
/* ion-col {
    border: 1px solid black;
  } */
</style>
  