<template>
  <IonGrid style="height: 100%; width: 100%; background-color: #f3f2ee;">
  <ion-form>
    <IonRow style="height: 12%">
      <IonCol size="1" class="Dashboard-FlexCenter"></IonCol>
      <IonCol size="10" class="Dashboard-FlexCenter"> Add Job Posting </IonCol>
      <IonCol size="1" class="Dashboard-FlexCenter">
        <IonButton @click="closeOther" class="Dashboard-Modal-Button-Cancel" fill="clear">x</IonButton>
      </IonCol>
    </IonRow>
    <IonRow style="height: 22%">
      <IonCol class="Dashboard-FlexCenter">
        <IonCard class="Dashboard-Modal-Picture">
          <img :src="imageUrl" alt="Selected Image" v-if="imageUrl" class="image-preview" />
          <label for="fileInput" class="file-input-label">
            <div class="file-input-text">Choose Image</div>
            <input id="fileInput" type="file" accept="image/*" @change="handleFileChange" ref="myfile" />
          </label>
        </IonCard>
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%;">
      <IonCol class="Dashboard-FlexCenter">
        <IonInput class="Dashboard-Modal-Input" label="Job Name" labelPlacement="stacked" fill="outline"
          v-model="formData.jobname" required>
        </IonInput>
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%">
      <IonCol class="Dashboard-FlexCenter">
        <IonInput class="Dashboard-Modal-Input" label="Job Type" labelPlacement="stacked" fill="outline"
          v-model="formData.jobtype" required>
        </IonInput>
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%">
      <IonCol class="Dashboard-FlexCenter">
        <IonInput class="Dashboard-Modal-Input" label="Job Description" labelPlacement="stacked" fill="outline"
          v-model="formData.jobdes" required>
        </IonInput>
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%">
      <IonCol class="Dashboard-FlexCenter">
        <IonInput class="Dashboard-Modal-Input" label="Additional Information" labelPlacement="stacked" fill="outline"
          v-model="formData.additioninfo" required>
        </IonInput>
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%; overflow-x: auto; background-color: white;  ">
      <IonCol size="3" class="Dashboard-FlexCenter" style="justify-content: left !important;">
        <IonButton @click="openModal" class="Dashboard-Modal-Button-SameColor" fill="outline">ADD FILTER</IonButton>
      </IonCol>
      <IonCol v-for="choice in chosenChoices" :key="choice.id" style="padding: 0px; background-color: white;"
        class="Dashboard-FlexCenter">
        <IonButton class="JobPostings-ChosenInterest" fill="outline" size="small" @click="removeChoice(choice.id)">
          {{ choice.label }}
        </IonButton>
      </IonCol>
    </IonRow>
    <IonRow style="height: 11%">
      <IonCol class="Dashboard-FlexCenter">
        <IonButton class="Dashboard-Modal-Button-SameColor" fill="outline" style="width: 100%" @click="handleSubmit">
          POST
        </IonButton>
      </IonCol>
    </IonRow>
  </ion-form>
  </IonGrid>

  <IonModal :is-open="modalOpen" @did-dismiss="closeModal">
    <ChoiceModal style="border: 1px solid black;" :choice="modalChoices" @choice-selected="handleChoiceSelected" />
  </IonModal>
</template>
<script lang="ts">
import {
  IonButton,
  IonCard,
  IonCol,
  IonGrid,
  IonInput,
  IonRow,
  modalController,
  IonPage,
  IonContent,
  IonModal,
} from "@ionic/vue";
import ChoiceModal from "@/SignUp/Seeker-InterestModal.vue";
import { useJobStore } from "@/stores/jobstore";
import { ref as asd, uploadBytes } from "firebase/storage"
import { dbImage, db } from '@/firebaseDB';
import { getDashboardProfile } from "./Dashboard-Model"
import { ref, onMounted, computed } from "vue";
export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonInput,
    IonButton,
    IonPage,
    IonContent,
    IonModal,
    ChoiceModal,
  },
  setup() {
    const user = ref(null);
    const companyname = ref("Loading..."); // Initialize as "Loading..."

    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      // const userPassword = localStorage.getItem("password");
      user.value = await getDashboardProfile(userEmail);

      // Once you have user data, set companyname
      if (user.value) {
        companyname.value = user.value.businessname;
      }
    });

    const formData = computed(() => ({
      pic: "",
      jobname: "",
      jobtype: "",
      jobdes: "",
      additioninfo: "",
      company: companyname.value, // Access the value of companyname
    }));

    return {
      user, // Expose user ref to the template
      companyname, // Expose companyname ref to the template
      formData,
    };
  },
  data() {
    return {
      imageUrl: null,
      modalOpen: false,
      modalChoices: [],
      chosenChoices: [],
      selectedImage: null, // Store the selected file here
    };
  },
  methods: {
    closeOther() {
      modalController.dismiss();
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
        console.log(file)

      } else {
        // Handle the case when no files are selected or an error occurred.
        console.error("No files selected or an error occurred.");
      }
    },

    async handleSubmit(event) {
      const requiredFields = ['jobname', 'jobtype', 'jobdes', 'additioninfo'];
      let isFormValid = true;

      for (const field of requiredFields) {
        if (!this.formData[field]) {
          isFormValid = false;
          break; // Exit the loop if any required field is empty
        }
      }

      if (isFormValid && this.chosenChoices.length > 0) {
        // All required fields are filled out, proceed with submission
        const jobstore = useJobStore();
        jobstore.setFormData(this.formData);
        jobstore.setChosenInterests(this.chosenChoices);
        await jobstore.postjob();
        modalController.dismiss();

      } else {
        // Handle the case where a required field is empty
        console.error("Please fill in all required fields.");
        alert("Please fill in all required fields");
      }      

      if (event && event.target && event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        const storageRef = asd(dbImage, 'images/myfile.gif');
        await uploadBytes(storageRef, file);
        console.log("File uploaded successfully");
      } else {
        console.error("No valid file selected for uploading.");
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
