<template>
  <IonModal class="modal-addjobpost">
    <IonGrid style="height: 100%; padding: 10px">
      <IonRow style="height: 6%">
        <IonCol class="flexcenter"> ADD JOB POSTING </IonCol>
      </IonRow>
      <IonRow style="height: 24.5%; max-height: 123px">
        <IonCol size="2" class="flexcenter">
          <div v-if="!thereisImage">
            <div class="modal-addjobpost-image"></div>
          </div>
          <div v-else class="flexcenter">
            <img
              :src="imageUrl"
              alt="Selected Image"
              v-if="imageUrl"
              class="modal-addjobpost-image"
            />
          </div>
        </IonCol>
        <IonCol size="4" class="modal-addjobpost-button-addimage">
          <label for="fileInput">
            <input
              id="fileInput"
              type="file"
              accept="image/jpeg"
              @change="handleFileChange"
              ref="myfile"
            />
          </label>
        </IonCol>
        <IonCol style="padding: 0" size="6">
          <IonRow>
            <IonCol>
              <IonInput
                class="modal-addjobpost-input"
                label="Estimated Salary"
                labelPlacement="stacked"
                fill="outline"
                placeholder="Salary"
                v-model="formData.salary"
                required
              >
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonInput
                class="modal-addjobpost-input"
                label="Estimated Hours of Work"
                labelPlacement="stacked"
                fill="outline"
                placeholder="Hours"
                v-model="formData.hours"
                required
              >
              </IonInput>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
      <IonRow style="height: 12%">
        <IonCol class="flexcenter">
          <IonInput
            class="modal-addjobpost-input"
            label="Job Title"
            placeholder="Title"
            labelPlacement="stacked"
            fill="outline"
            v-model="formData.jobname"
            required
          >
          </IonInput>
        </IonCol>
        <IonCol>
          <IonSelect
            class="modal-addjobpost-input"
            label="Job Type"
            interface="popover"
            labelPlacement="stacked"
            v-model="formData.jobtype"
            fill="outline"
            placeholder="Select Job Type"
            required
          >
            <IonSelectOption value="Full-Time">Full-Time</IonSelectOption>
            <IonSelectOption value="Part-Time">Part-Time</IonSelectOption>
            <IonSelectOption value="Contract">Contract</IonSelectOption>
            <IonSelectOption value="Temporary">Temporary</IonSelectOption>
            <IonSelectOption value="Internship">Internship</IonSelectOption>
          </IonSelect>
        </IonCol>
      </IonRow>
      <IonRow style="height: 12%">
        <IonCol>
          <IonSelect
            class="modal-addjobpost-input"
            label="Position Level"
            label-placement="stacked"
            interface="popover"
            fill="outline"
            v-model="formData.positionlvl"
            placeholder="Select Position Level"
            required
          >
            <IonSelectOption value="CEO/SVP/AVP/VP/Director"
              >CEO/SVP/AVP/VP/Director</IonSelectOption
            >
            <IonSelectOption value="Assistant Manager/Manager"
              >Assistant Manager/Manager</IonSelectOption
            >
            <IonSelectOption value="Supervisor/5 Years & Up Experience Employee"
              >Supervisor/5 Years & Up Experience Employee</IonSelectOption
            >
            <IonSelectOption value="1-4 Years Experienced Employee"
              >1-4 Years Experienced Employee</IonSelectOption
            >
            <IonSelectOption value="Less than 1 year experience"
              >Less than 1 year experience</IonSelectOption
            >
          </IonSelect>
        </IonCol>
        <IonCol>
          <IonSelect
            class="modal-addjobpost-input"
            label="Required Years of Experience"
            label-placement="stacked"
            interface="popover"
            fill="outline"
            v-model="formData.yearsofexp"
            placeholder="Select Mininimun Working Experience"
            required
          >
            <IonSelectOption value="0">0</IonSelectOption>
            <IonSelectOption value="1-5">1-5</IonSelectOption>
            <IonSelectOption value="6-10">6-10</IonSelectOption>
            <IonSelectOption value="11-15">11-15</IonSelectOption>
            <IonSelectOption value="16-20">16-20</IonSelectOption>
            <IonSelectOption value="21-23">21-23</IonSelectOption>
            <IonSelectOption value="24+">24+</IonSelectOption>
          </IonSelect>
        </IonCol>
      </IonRow>
      <IonRow style="height: 23.5%">
        <IonCol size="6">
          <IonTextarea
            label="Job Description"
            fill="outline"
            labelPlacement="stacked"
            class="modal-addjobpost-input"
            v-model="formData.jobdes"
            style="height: 100%"
          >
          </IonTextarea>
        </IonCol>
        <IonCol size="6" style="padding: 0">
          <IonRow>
            <IonCol>
              <IonSelect
                class="modal-addjobpost-input"
                label="Required Educational Attainment"
                label-placement="stacked"
                interface="popover"
                fill="outline"
                v-model="formData.reqeduc"
                placeholder="Select Required Educational Attainment"
                required
              >
                <IonSelectOption value="none">none</IonSelectOption>

                <IonSelectOption value="Junior High School Graduate and above"
                  >Junior High School Graduate and above</IonSelectOption
                >
                <IonSelectOption value="Senior High School Graduate and above"
                  >Senior High School Graduate and above</IonSelectOption
                >
                <IonSelectOption value="College Graduate"
                  >College Graduate</IonSelectOption
                >
              </IonSelect></IonCol
            >
          </IonRow>
          <IonRow>
            <IonCol>
              <IonInput
                class="modal-addjobpost-input"
                label="Location"
                labelPlacement="stacked"
                fill="outline"
                placeholder="Location"
                v-model="formData.loc"
                required
              >
              </IonInput>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
      <IonRow style="height: 3%">
        <IonCol style="padding: 0; padding-left: 5px; font-size: 12px">
          Specialized Fields
        </IonCol>
      </IonRow>
      <IonRow style="height: 9%">
        <IonCol class="flexcenter" style="justify-content: left; padding: 0">
          <IonChip v-for="choice in chosenChoices" :key="choice.id">
            {{ choice.label }}
            <IonIcon
              class="modal-addjobpost-icon"
              @click="removeChoice(choice.id)"
              :icon="close"
            ></IonIcon>
          </IonChip>
          <div v-if="chosenChoices.length > 0" class="flexcenter">
            <IonIcon
              @click="openModal"
              size="large"
              :icon="addCircleOutline"
              class="modal-addjobpost-addicon"
            ></IonIcon>
          </div>
          <div v-else>
            <IonButton
              @click="openModal"
              class="modal-addjobpost-button-button-tags"
              fill="outline"
              style="border-radius: 100%"
            >
              Add Specialized Fields
            </IonButton>
          </div>
        </IonCol>
      </IonRow>
      <IonRow style="height: 10%">
        <IonCol>
          <IonButton
            @click="closeOther"
            class="modal-addjobpost-button"
            style="--background: darkred"
            expand="block"
          >
            cancel
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton
            @click="handleSubmit"
            class="modal-addjobpost-button"
            expand="block"
          >
            publish
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>

    <IonModal :is-open="modalOpen" @did-dismiss="closeModal">
      <ChoiceModal
        style="border: 1px solid black"
        :choice="modalChoices"
        @choice-selected="handleChoiceSelected"
      />
    </IonModal>
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
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonChip,
  IonIcon,
} from "@ionic/vue";
import ChoiceModal from "@/SignUp/Seeker-InterestModal.vue";
import { useJobStore } from "@/stores/jobstore";
import { ref as asd, uploadBytes, getDownloadURL } from "firebase/storage";
import { dbImage, db } from "@/firebaseDB";
import { getDashboardProfile } from "./Dashboard-Model";
import { ref, onMounted, computed } from "vue";
import { addCircleOutline, close } from "ionicons/icons";
export default {
  components: {
    IonIcon,
    IonTextarea,
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
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonChip,
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
      positionlvl: "",
      salary: "",
      hours: "",
      yearsofexp: "",
      reqeduc: "",
      loc: "",
      company: companyname.value, // Access the value of companyname
    }));

    return {
      user, // Expose user ref to the template
      companyname, // Expose companyname ref to the template
      formData,
      addCircleOutline,
      close,
    };
  },
  data() {
    return {
      imageUrl: null,
      modalOpen: false,
      modalChoices: [],
      chosenChoices: [],
      selectedImage: null,
      thereisImage: false,
    };
  },
  methods: {
    closeOther() {
      modalController.dismiss();
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
      const requiredFields = ["jobname", "jobtype", "jobdes", "positionlvl", "salary", "hours", "yearsofexp", "reqeduc", "loc" ];
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

      if (isFormValid && this.chosenChoices.length > 0 && isImageSelected) {
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
        await jobstore.postjob();
        modalController.dismiss();
      } else {
        // Handle the case where a required field is empty
        console.error("Please fill in all required fields.");
        alert("Please fill in all required fields");
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
