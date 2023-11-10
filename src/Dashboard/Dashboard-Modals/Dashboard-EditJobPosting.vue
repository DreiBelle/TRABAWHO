<template>
  <IonModal class="modal-addjobpost" :is-open="isEditmodal" @did-dismiss="closeOther"
    style="background-color: rgba(0, 0, 0, 0.4)">
    <IonHeader class="modal-editjobposting-header flexcenter">EDIT

      <IonIcon @click="closeOther" style="cursor: pointer; position: absolute; top: 10px; right: 15px;" :icon="close">
      </IonIcon>
    </IonHeader>
    <IonContent class="custom-scrollbar">
      <div style="padding: 10px">

        <div style="position: absolute; right: 10px;">
          <div class="flexcenter">
            <IonText class="modal-editjobposting-active">
              Active:
            </IonText>
            <IonToggle @ion-change="changeArchive()" v-model="archive" required mode="ios"></IonToggle>
          </div>
        </div>

        <div class="flexcenter" v-if="!thereisImage">
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
          <IonInput class="modal-addjobpost-input" label="Job Title" :placeholder="jobPosting ? jobPosting.jobname : ''"
            labelPlacement="stacked" fill="outline" v-model="formData.jobname" required>
          </IonInput>
        </div>

        <div>
          <IonSelect class="modal-addjobpost-input" label="Job Type" interface="popover" labelPlacement="stacked"
            v-model="formData.jobtype" fill="outline" :placeholder="jobPosting ? jobPosting.jobtype : ''" required>
            <IonSelectOption value="Full-Time">Full-Time</IonSelectOption>
            <IonSelectOption value="Part-Time">Part-Time</IonSelectOption>
            <IonSelectOption value="Contract">Contract</IonSelectOption>
            <IonSelectOption value="Temporary">Temporary</IonSelectOption>
            <IonSelectOption value="Internship">Internship</IonSelectOption>
          </IonSelect>
        </div>

        <div>
          <IonSelect class="modal-addjobpost-input" label="Position Level" label-placement="stacked" interface="popover"
            fill="outline" :placeholder="jobPosting ? jobPosting.positionlvl : ''" v-model="formData.positionlvl"
            required>
            <IonSelectOption value="CEO/SVP/AVP/VP/Director">CEO/SVP/AVP/VP/Director</IonSelectOption>
            <IonSelectOption value="Assistant Manager/Manager">Assistant Manager/Manager</IonSelectOption>
            <IonSelectOption value="Supervisor/5 Years & Up Experience Employee">Supervisor/5 Years & Up Experience
              Employee</IonSelectOption>
            <IonSelectOption value="1-4 Years Experienced Employee">1-4 Years Experienced Employee</IonSelectOption>
            <IonSelectOption value="Less than 1 year experience">Less than 1 year experience</IonSelectOption>
          </IonSelect>
        </div>

        <div>
          <IonSelect class="modal-addjobpost-input" label="Estimated Salary" interface="popover" labelPlacement="stacked"
            fill="outline" :placeholder="jobPosting ? jobPosting.salary : ''" v-model="formData.salary" required>
            <IonSelectOption value="0php - 5,000php">0php - 5,000php</IonSelectOption>
            <IonSelectOption value="6,000php - 10,000php">6,000php - 10,000php</IonSelectOption>
            <IonSelectOption value="11,000php - 50,000php">11,000php - 50,000php</IonSelectOption>
            <IonSelectOption value="51,000php - 100,000php">51,000php - 100,000php</IonSelectOption>
            <IonSelectOption value="100,000php and above">100,000php and above</IonSelectOption>
          </IonSelect>
        </div>

        <div>
          <IonTextarea label="Job Description" fill="outline" labelPlacement="stacked" class="modal-addjobpost-input"
            :placeholder="jobPosting ? jobPosting.jobdes : ''" v-model="formData.jobdes" style="height: 200px">
          </IonTextarea>
        </div>

        <div class="flexcenter" style="margin-top: 10px;">
          <IonText class="modal-addjobpost-titlediv">
            REQUIREMENTS
          </IonText>
        </div>

        <div>
          <IonInput class="modal-addjobpost-input" label="No. of employees" placeholder="Needed no. of employees"
            labelPlacement="stacked" fill="outline" type="number" v-model="formData.noofempl" required>
          </IonInput>
        </div>

        <div>
          <IonSelect class="modal-addjobpost-input" label="Age" interface="popover" labelPlacement="stacked"
            fill="outline" placeholder="Select preffered age" v-model="formData.age" required>
            <IonSelectOption value="none">none</IonSelectOption>
            <IonSelectOption value="18-25">18-25</IonSelectOption>
            <IonSelectOption value="26-35">26-35</IonSelectOption>
            <IonSelectOption value="36-45">36-45</IonSelectOption>
            <IonSelectOption value="46 and above">46 and above</IonSelectOption>
          </IonSelect>
        </div>

        <div>
          <IonSelect class="modal-addjobpost-input" label="Required Years of Experience" label-placement="stacked"
            interface="popover" fill="outline" :placeholder="jobPosting ? jobPosting.yearsofexp : ''"
            v-model="formData.yearsofexp" required>
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
          <IonSelect class="modal-addjobpost-input" label="Required Educational Attainment" label-placement="stacked"
            interface="popover" fill="outline" v-model="formData.reqeduc"
            :placeholder="jobPosting ? jobPosting.reqeduc : ''" required>
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
          <NewTags :parent-subpreffered="subclassificationClassification" :parent-preffered="prefferedClassification" v-on:chosen-special="updateChosenspecial" @chosen-subspecial="updatesubChosenspecial"></NewTags>
        </div>
        <div class="flexcenter" style="justify-content: left; margin-left: 5px; margin-top: 6px;">
          <IonChip v-for="choice in chosenChoices" :key="choice.id">
            {{ choice.label }}
            <IonIcon class="modal-addjobpost-icon" @click="removeChoice(choice.id)" :icon="close"></IonIcon>
          </IonChip>

          <div v-if="chosenChoices.length > 0" class="flexcenter">
            <IonIcon @click="openModal" size="large" :icon="addCircleOutline" class="modal-addjobpost-addicon">
            </IonIcon>
          </div>
          <div v-else class="flexcenter">
            <IonButton @click="openModal" class="modal-addjobpost-button-button-tags" fill="outline"
              style="border-radius: 100%">
              Add Tags
            </IonButton>
          </div>
        </div>

        <div class="flexcenter" style="margin-top: 10px;">
          <IonText class="modal-addjobpost-titlediv">
            WORK LOCATION
          </IonText>
        </div>

        <div class="flexcenter">
          <IonSelect mode="md" label="Province" placeholder="Select Province" label-placement="stacked" interface="popover"
            fill="outline" class="modal-addjobpost-input" v-model="formData.province" required>
            <IonSelectOption value="Cagayan">Cagayan</IonSelectOption>
            <IonSelectOption value="Isabela">Isabela</IonSelectOption>
            <IonSelectOption value="Nueva Vizcaya">Nueva Vizcaya</IonSelectOption>
            <IonSelectOption value="Quirino">Quirino</IonSelectOption>
          </IonSelect>
          <IonSelect mode="md" label="City/Town" placeholder="Select City/Town" label-placement="stacked" interface="popover"
            fill="outline" class="modal-addjobpost-input" v-model="formData.citown" required>
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
      age: props.jobPosting ? props.jobPosting.age : "",
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
    console.log(props.jobPosting.chosenInterests);
    return {
      imageUrl: props.jobPosting ? props.jobPosting.pic : null,
      modalOpen: false,
      modalChoices: [],
      chosenChoices: props.jobPosting ? props.jobPosting.chosenInterests : "",
      selectedImage: null,
      thereisImage: false,
      archive: null,
      prefferedClassification: props.jobPosting ? props.jobPosting.classification : "",
      subclassificationClassification: props.jobPosting ? props.jobPosting.subclassification : "",
    };
  },
  methods: {
    updateChosenspecial(PC){
      this.prefferedClassification = PC
      console.log(this.prefferedClassification)
      this.formData.classification = this.prefferedClassification
    },
    updatesubChosenspecial(PC){
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
      const requiredFields = [
        "jobname",
        "jobtype",
        "jobdes",
        "positionlvl",
        "salary",
        "yearsofexp",
        "reqeduc",
      ];
      let isFormValid = true;
      let isImageSelected = false;

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

        // All required fields are filled out, proceed with submission
        const jobstore = useJobStore();
        jobstore.setFormData(this.formData);
        jobstore.setChosenInterests(this.chosenChoices);
        await jobstore.updateData(this.jobPosting.documentID);
        modalController.dismiss();
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
