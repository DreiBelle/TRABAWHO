<template>
  <IonModal class="modal-addjobpost" :is-open="isEditmodal" @did-dismiss="closeOther"
    style="background-color: rgba(0, 0, 0, 0.4);">
    <IonProgressBar v-if="isLoading" type="indeterminate"></IonProgressBar>
    <IonHeader class="modal-editjobposting-header flexcenter">EDIT

      <IonIcon @click="closeOther" style="cursor: pointer; position: absolute; top: 10px; right: 15px;" :icon="close">
      </IonIcon>
    </IonHeader>
    <IonContent class="custom-scrollbar">
      <div style="padding: 10px; padding-right: 15px;">

        <div style="position: absolute; right: 10px;">
          <div class="flexcenter">
            <IonText class="modal-editjobposting-active">
              Active:
            </IonText>
            <IonToggle @ion-change="changeArchive()" v-model="archive" required mode="ios"></IonToggle>
          </div><br/>
          <div class="flexcenter">
            <IonText class="modal-editjobposting-active" style="color: red;"> Urgent: </IonText>
            <IonToggle @ion-change="changeUrgent()" v-model="formData.urgent" required mode="ios"></IonToggle>
          </div>
        </div>

        <div class="flexcenter" v-if="!thereisImage">
          <div>
            <div class="flexcenter">
              <img :src="imageUrl" alt="Selected Image" v-if="imageUrl" class="modal-addjobpost-image" />
            </div>
            <div class="flexcenter">
              <input id="fileInput" type="file" accept="image/jpeg" @change="handleFileChange" ref="myfile"
                style="display: none" /><ion-text color="danger">*</ion-text>
              <label for="fileInput" class="modal-editposting-modal">
                Change Picture
              </label>
            </div>
          </div>
        </div>
        <div v-else class="flexcenter">
          <div>
            <div class="flexcenter">
              <img :src="imageUrl" alt="Selected Image" v-if="imageUrl" class="modal-addjobpost-image" />
            </div>
            <div class="flexcenter">
              <input id="fileInput" type="file" accept="image/jpeg" @change="handleFileChange" ref="myfile"
                style="display: none" />
              <label for="fileInput" class="modal-editposting-modal">
                Change Picture
              </label>
            </div>
          </div>
        </div>

        <div class="flexcenter" style="margin-top: 10px;">
          <IonText class="modal-addjobpost-titlediv">
            Job Information
          </IonText>
        </div>

        <div>
          <IonInput class="modal-addjobpost-input" :placeholder="jobPosting ? jobPosting.jobname : ''"
            labelPlacement="stacked" fill="outline" v-model="formData.jobname" required><div slot="label">Job Title<ion-text color="danger">*</ion-text></div>
          </IonInput>
        </div>

        <div>
          <IonSelect class="modal-addjobpost-input" interface="popover" labelPlacement="stacked"
            v-model="formData.jobtype" fill="outline" :placeholder="jobPosting ? jobPosting.jobtype : ''" required><div slot="label">Job Type<ion-text color="danger">*</ion-text></div>
            <IonSelectOption value="Full-Time">Full-Time</IonSelectOption>
            <IonSelectOption value="Part-Time">Part-Time</IonSelectOption>
            <IonSelectOption value="Contract">Contract</IonSelectOption>
            <IonSelectOption value="Temporary">Temporary</IonSelectOption>
            <IonSelectOption value="Internship">Internship</IonSelectOption>
          </IonSelect>
        </div>

        <div>
          <IonSelect class="modal-addjobpost-input" label-placement="stacked" interface="popover"
            fill="outline" :placeholder="jobPosting ? jobPosting.positionlvl : ''" v-model="formData.positionlvl"
            required><div slot="label">Positon Level<ion-text color="danger">*</ion-text></div>
            <IonSelectOption value="CEO/SVP/AVP/VP/Director">CEO/SVP/AVP/VP/Director</IonSelectOption>
            <IonSelectOption value="Assistant Manager/Manager">Assistant Manager/Manager</IonSelectOption>
            <IonSelectOption value="Supervisor/5 Years & Up Experience Employee">Supervisor/5 Years & Up Experience
              Employee</IonSelectOption>
            <IonSelectOption value="1-4 Years Experienced Employee">1-4 Years Experienced Employee</IonSelectOption>
            <IonSelectOption value="Less than 1 year experience">Less than 1 year experience</IonSelectOption>
          </IonSelect>
        </div>

        <div>
          <IonInput class="modal-addjobpost-input" placeholder="Input Salary in Php"
            labelPlacement="stacked" fill="outline" v-model="formData.salary" type="number" required><div slot="label">Salary<ion-text color="danger">*</ion-text></div>
          </IonInput>
        </div>

        <div>
          <IonInput class="modal-addjobpost-input" label="Estimated working hours" placeholder="Input working hours"
            labelPlacement="stacked" fill="outline" v-model="formData.hours" type="number" required>
          </IonInput>
        </div>

        <div>
          <IonTextarea fill="outline" labelPlacement="stacked" class="modal-addjobpost-input"
            :placeholder="jobPosting ? jobPosting.jobdes : ''" v-model="formData.jobdes" style="height: 200px"><div slot="label">Job Description<ion-text color="danger">*</ion-text></div>
          </IonTextarea>
        </div>

        <div class="flexcenter" style="margin-top: 10px;">
          <IonText class="modal-addjobpost-titlediv">
            REQUIREMENTS
          </IonText>
        </div>

        <div>
          <IonInput class="modal-addjobpost-input" placeholder="Needed no. of employees"
            labelPlacement="stacked" fill="outline" type="number" v-model="formData.noofempl" required><div slot="label">No. of Employees<ion-text color="danger">*</ion-text></div>
          </IonInput>
        </div>

        <div>
          <IonSelect class="modal-addjobpost-input" label-placement="stacked"
            interface="popover" fill="outline" :placeholder="jobPosting ? jobPosting.yearsofexp : ''"
            v-model="formData.yearsofexp" required><div slot="label">Required Years of Experience<ion-text color="danger">*</ion-text></div>
            <IonSelectOption value="0">0</IonSelectOption>
            <IonSelectOption value="1-5">1-5</IonSelectOption>
            <IonSelectOption value="6-10">6-10</IonSelectOption>
            <IonSelectOption value="11-15">11-15</IonSelectOption>
            <IonSelectOption value="16-20">16-20</IonSelectOption>
            <IonSelectOption value="21-23">21-23</IonSelectOption>
            <IonSelectOption value="24+">24+</IonSelectOption>
          </IonSelect>
        </div>

        <div>
          <IonSelect class="modal-addjobpost-input" label-placement="stacked"
            interface="popover" fill="outline" v-model="formData.reqeduc"
            :placeholder="jobPosting ? jobPosting.reqeduc : ''" required><div slot="label">Required Education Attainment<ion-text color="danger">*</ion-text></div>
            <IonSelectOption value="none">none</IonSelectOption>

            <IonSelectOption value="Junior High School Graduate and above">Junior High School Graduate and above
            </IonSelectOption>
            <IonSelectOption value="Senior High School Graduate and above">Senior High School Graduate and above
            </IonSelectOption>
            <IonSelectOption value="College Graduate">College Graduate</IonSelectOption>
          </IonSelect>
        </div>

        <div class="flexcenter" style="margin-top: 10px;">
          <IonText class="modal-addjobpost-titlediv">
            SPECIALIZED FIELDS
          </IonText>
        </div>
        <div>
          <NewTags :parent-subpreffered="subclassificationClassification" :parent-preffered="prefferedClassification"
            v-on:chosen-special="updateChosenspecial" @chosen-subspecial="updatesubChosenspecial"></NewTags>
        </div>
        <div>
          <IonInput class="modal-addjobpost-input" placeholder="add tags seperated by a comma ','"
            labelPlacement="stacked" fill="outline" v-model="tagsInput" type="text" required><div slot="label">Tags<ion-text color="danger">*</ion-text></div>
          </IonInput>
        </div>

        <div class="flexcenter" style="margin-top: 10px;">
          <IonText class="modal-addjobpost-titlediv">
            WORK LOCATION
          </IonText>
        </div>

        <div class="flexcenter">
          <IonSelect mode="md" placeholder="Select Province" label-placement="stacked"
            interface="popover" fill="outline" class="modal-addjobpost-input" v-model="formData.province" required><div slot="label">Province<ion-text color="danger">*</ion-text></div>
            <IonSelectOption value="Cagayan">Cagayan</IonSelectOption>
            <IonSelectOption value="Isabela">Isabela</IonSelectOption>
            <IonSelectOption value="Nueva Vizcaya">Nueva Vizcaya</IonSelectOption>
            <IonSelectOption value="Quirino">Quirino</IonSelectOption>
          </IonSelect>
          <IonSelect mode="md" placeholder="Select City/Town" label-placement="stacked"
            interface="popover" fill="outline" class="modal-addjobpost-input" v-model="formData.citown" required><div slot="label">City/Town<ion-text color="danger">*</ion-text></div>
            <IonSelectOption value="Tuguegarao City">Tuguegarao City</IonSelectOption>
            <IonSelectOption value="Aparri">Aparri</IonSelectOption>
            <IonSelectOption value="Lal-lo">Lal-lo</IonSelectOption>
            <IonSelectOption value="Gattaran">Gattaran</IonSelectOption>
            <IonSelectOption value="Penablanca">Penablanca</IonSelectOption>
            <IonSelectOption value="Ilagan City">Ilagan City </IonSelectOption>
            <IonSelectOption value="Cauayan City">Cauayan City</IonSelectOption>
            <IonSelectOption value="Santiago City">Santiago City</IonSelectOption>
            <IonSelectOption value="Alicia">Alicia</IonSelectOption>
            <IonSelectOption value="Roxas">Roxas</IonSelectOption>
            <IonSelectOption value="Cabagan">Cabagan</IonSelectOption>
            <IonSelectOption value="Bayombong">Bayombong</IonSelectOption>
            <IonSelectOption value="Solano">Solano</IonSelectOption>
            <IonSelectOption value="Bagabag">Bagabag</IonSelectOption>
            <IonSelectOption value="Bambang">Bambang</IonSelectOption>
            <IonSelectOption value="Cabarroguis">Cabarroguis</IonSelectOption>
            <IonSelectOption value="Maddela">Maddela</IonSelectOption>
            <IonSelectOption value="Aglipay">Aglipay</IonSelectOption>
          </IonSelect>
        </div>
        <div class="flexcenter">
          <IonInput class="modal-addjobpost-input" label="District" placeholder="District - Purok"
            labelPlacement="stacked" fill="outline" type="text" v-model="formData.district">
          </IonInput>
          <IonInput class="modal-addjobpost-input" label="Street" placeholder="Street" labelPlacement="stacked"
            fill="outline" type="text" v-model="formData.street">
          </IonInput>
        </div>

        <!-- <div class="flexcenter" style="margin-top: 10px;">
          <IonText class="modal-addjobpost-titlediv">
            SPECIALIZED FIELDS
          </IonText>
        </div>

        <div class="flexcenter" style="justify-content: left; margin-left: 5px">
          <IonChip v-for="choice in chosenChoices" :key="choice.id">
            {{ choice.label }}
            <IonIcon class="modal-addjobpost-icon" @click="removeChoice(choice.id)" :icon="close"></IonIcon>
          </IonChip>

          <div v-if="chosenChoices.length > 0" class="flexcenter">
            <IonIcon @click="openModal" size="large" :icon="addCircleOutline" class="modal-addjobpost-addicon"></IonIcon>
          </div>
          <div v-else class="flexcenter">
            <IonButton @click="openModal" class="modal-addjobpost-button-button-tags" fill="outline"
              style="border-radius: 100%">
              Add Specialized Fields
            </IonButton>
          </div>
        </div><br /> -->

        <!-- <div>
          <ion-radio-group v-model="formData.isactive" required>
            <ion-radio value="activate" color="success">
              <IonText color="Green">Activate</IonText>
            </ion-radio><br />
            <ion-radio value="notactivate" color="danger">
              <IonText color="Red">Not Activate</IonText>
            </ion-radio><br />
          </ion-radio-group>
        </div><br /> -->

        <div style="width: 100%; margin-top: 10px;" class="flexcenter">
          <div style="width: 50%">
            <IonButton @click="closeOther" class="modal-addjobpost-button" style="--background: darkred">
              cancel
            </IonButton>
          </div>
          <div style="width: 50%">
            <IonButton @click="handleSubmit" class="modal-addjobpost-button" s>
              save changes
            </IonButton>
          </div>
        </div>
      </div>
    </IonContent>

    <IonModal :is-open="modalOpen" @did-dismiss="closeModal">
      <ChoiceModal style="border: 1px solid black" :choice="modalChoices" @choice-selected="handleChoiceSelected" />
    </IonModal>
  </IonModal>
</template>

<script lang="ts">
import {
  IonButton,
  IonHeader,
  IonCard,
  IonCol,
  IonGrid,
  IonInput,
  IonRow,
  modalController,
  IonPage,
  IonContent,
  IonModal,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonChip,
  IonIcon,
  IonText,
  IonToggle,
IonProgressBar,
} from "@ionic/vue";
import ChoiceModal from "@/SignUp/Seeker-InterestModal.vue";
import { useJobStore } from "@/stores/updatejobstore";
import { ref as asd, uploadBytes, getDownloadURL } from "firebase/storage";
import { dbImage, db } from "@/firebaseDB";
import { getDashboardProfile } from "../Dashboard-Model";
import { ref, onMounted, computed, defineComponent, PropType } from "vue";
import { addCircleOutline, close } from "ionicons/icons";
import { IonRadio, IonRadioGroup } from '@ionic/vue';
import NewTags from "../SpecializedFields.vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default {
  components: {
    NewTags,
    IonIcon,
    IonTextarea,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonInput,
    IonText,
    IonButton,
    IonPage,
    IonContent,
    IonModal,
    ChoiceModal,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonChip,
    IonHeader,
    IonRadio,
    IonRadioGroup,
    IonToggle,
    IonProgressBar
},
  setup(props) {
    const user = ref(null);
    const creator = ref("Loading...");

    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");
      user.value = await getDashboardProfile(userEmail);

      // Once you have user data, set companyname
      if (user.value) {
        creator.value = user.value.businessname;
      }
    });

    const formData = computed(() => ({
      pic: props.jobPosting ? props.jobPosting.pic : "",
      jobname: props.jobPosting ? props.jobPosting.jobname : "",
      jobtype: props.jobPosting ? props.jobPosting.jobtype : "",
      jobdes: props.jobPosting ? props.jobPosting.jobdes : "",
      salary: props.jobPosting ? props.jobPosting.salary : "",
      hours: props.jobPosting ? props.jobPosting.hours : "",
      noofempl: props.jobPosting ? props.jobPosting.noofempl : "",
      loc: props.jobPosting ? props.jobPosting.loc : "",
      reqeduc: props.jobPosting ? props.jobPosting.reqeduc : "",
      yearsofexp: props.jobPosting ? props.jobPosting.yearsofexp : "",
      positionlvl: props.jobPosting ? props.jobPosting.positionlvl : "",
      isactive: props.jobPosting ? props.jobPosting.isactive : "",
      creator: creator.value,
      province: props.jobPosting ? props.jobPosting.province : "",
      district: props.jobPosting ? props.jobPosting.district : "",
      citown: props.jobPosting ? props.jobPosting.citown : "",
      street: props.jobPosting ? props.jobPosting.street : "",
      classification: props.jobPosting ? props.jobPosting.classification : "",
      subclassification: props.jobPosting ? props.jobPosting.subclassification : "",
      urgent: props.jobPosting ? props.jobPosting.urgent : "",
    }));

    return {
      user, // Expose user ref to the template
      formData,
      addCircleOutline,
      close,
    };
  },
  props: {
    isEditmodal: {
      type: Boolean,
      required: true,
    },
    jobPosting: {
      type: Object,
      default: null,
    },
  },
  data(props) {
    return {
      tagsInput: props.jobPosting ? props.jobPosting.chosenInterests : "",
      imageUrl: props.jobPosting ? props.jobPosting.pic : null,
      modalOpen: false,
      modalChoices: [],
      selectedImage: null,
      thereisImage: false,
      archive: null,
      prefferedClassification: props.jobPosting ? props.jobPosting.classification : "",
      subclassificationClassification: props.jobPosting ? props.jobPosting.subclassification : "",
      EmployerEmail: localStorage.getItem("email"),
      isLoading: false,
      Urgent: false,
    };
  },
  methods: {
    async updateAuditlog(jobname) {
      const docRef = await addDoc(collection(db, "Logs"), {
        EmployerEmail: this.EmployerEmail,
        Action: "Updated a job posting " + jobname,
        DateCreated: serverTimestamp(),

      });
      console.log("Document written with ID: ", docRef.id);
    },
    updateChosenspecial(PC) {
      this.prefferedClassification = PC
      console.log(this.prefferedClassification)
      this.formData.classification = this.prefferedClassification
    },
    updatesubChosenspecial(PC) {
      this.subclassificationClassification = PC
      console.log(this.subclassificationClassification)
      this.formData.subclassification = this.subclassificationClassification
    },
    convertTorF() {
      if (this.formData.isactive == "activate") {
        this.archive = true
      } else {
        this.archive = false
      }
    },
    changeArchive() {
      if (this.archive == true) {
        this.formData.isactive = 'activate'
      }
      else {
        this.formData.isactive = 'notactivate'
      }
    },
    changeUrgent() {
      if (this.formData.urgent == true) {
        this.formData.urgent = true
      }
      else {
        this.formData.urgent = false
      }
    },
    closeOther() {
      this.$emit("close-edit-modal");
    },
    checkifthereisImage(x) {
      this.thereisImage = x;
    },
    removeChoice(choiceId) {
      this.chosenChoices = this.chosenChoices.filter(
        (choice) => choice.id !== choiceId
      );
    },
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    handleChoiceSelected(choice) {
      this.chosenChoices.push(choice);
      this.modalOpen = false;
    },
    async handleFileChange(event) {
      const files = event.target.files;
      console.log(files); // Check if files array is populated

      if (files && files.length > 0) {
        const file = files[0];
        console.log("Selected file:", file); // Check the selected file
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
        this.selectedFile = file;
        this.thereisImage = true;
        console.log(file);
      } else {
        // Handle the case when no files are selected or an error occurred.
        console.error("No files selected or an error occurred.");
      }
    },

    async handleSubmit(event) {
      this.isLoading = true
      const requiredFields = [
        "jobname",
        "jobtype",
        "jobdes",
        "positionlvl",
        "salary",
        "yearsofexp",
        "reqeduc",
        "noofempl",
        "province",
        "citown",
      ];
      let isFormValid = true;
      let isImageSelected = false;

      if (this.formData.urgent == true) {
        this.formData.urgent = true
      }
      else {
        this.formData.urgent = false
      }

      for (const field of requiredFields) {
        if (!this.formData[field]) {
          isFormValid = false;
          break; // Exit the loop if any required field is empty
        }
      }

      if (this.selectedFile) {
        isImageSelected = true;
      }

      if (isFormValid) {
        if (this.selectedFile) {
          // Upload the selected image to Firebase Storage
          const storageRef = asd(
            dbImage,
            "jobpostingpictures/" + this.selectedFile.name
          );
          try {
            await uploadBytes(storageRef, this.selectedFile);
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

        const tagsArray = ref()

        if (Array.isArray(this.tagsInput)) {
          const combineTags = this.tagsInput.join(', ')
          tagsArray.value = combineTags.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag !== '');
        } else if (typeof this.tagsInput === 'string'){
          tagsArray.value = this.tagsInput.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag !== '');
        }

        // All required fields are filled out, proceed with submission
        this.updateAuditlog(this.formData.jobname)
        const jobstore = useJobStore();
        jobstore.setFormData(this.formData);
        jobstore.setChosenInterests(tagsArray);
        await jobstore.updateData(this.jobPosting.documentID);
        this.isLoading = false
        modalController.dismiss();
        this.closeOther()
      } else {
        // Handle the case where a required field is empty
        console.error("Please fill in all required fields.");
        alert("Please fill in all required fields");
        alert(this.jobid);
      }
    },
  },
  mounted() {
    this.convertTorF()
  }
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
