<template>
    <IonModal :is-open="isAddjobmodal" @did-dismiss="closeModal">
        <div style="height: 100%">
            <IonHeader class="modal-editjobposting-header flexcenter">ADD</IonHeader>
            <IonContent class="custom-scrollbar">
                <div class="flexcenter" style="margin-top: 10px;">
                    <IonText class="modal-addjobpost-titlediv">
                        Job Information
                    </IonText>
                </div>
                <div class="flexcenter" v-if="!thereisImage">
                    <div>
                        <div class="flexcenter">
                            <div class="modal-addjobpost-image"></div>
                        </div>
                        <div>
                            <input id="fileInput" type="file" accept="image/jpeg" @change="handleFileChange" ref="myfile"
                                style="display: none" /><ion-text color="danger">*</ion-text>
                            <label for="fileInput" class="modal-editposting-modal">
                                Choose Picture
                            </label>
                        </div>
                    </div>
                </div>
                <div v-else class="flexcenter">
                    <div>
                        <div class="flexcenter">
                            <img :src="imageUrl" alt="Selected Image" v-if="imageUrl" class="modal-addjobpost-image" />
                        </div>
                        <div>
                            <input id="fileInput" type="file" accept="image/jpeg" @change="handleFileChange" ref="myfile"
                                style="display: none" />
                            <label for="fileInput" class="modal-editposting-modal">
                                Edit Picture
                            </label>
                        </div>
                    </div>
                </div>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" labelPlacement="stacked" fill="outline"
                            v-model="formData.jobname" required><div slot="label">Job Name<ion-text color="danger">*</ion-text></div>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect class="modal-edituser-input" interface="popover"
                            labelPlacement="stacked" v-model="formData.jobtype" fill="outline" placeholder="Select Job Type"
                            required><div slot="label">Job Type<ion-text color="danger">*</ion-text></div>
                            <IonSelectOption value="Full-Time">Full-Time</IonSelectOption>
                            <IonSelectOption value="Part-Time">Part-Time</IonSelectOption>
                            <IonSelectOption value="Contract">Contract</IonSelectOption>
                            <IonSelectOption value="Temporary">Temporary</IonSelectOption>
                            <IonSelectOption value="Internship">Internship</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect class="modal-edituser-input" label-placement="stacked"
                            interface="popover" fill="outline" v-model="formData.positionlvl"
                            placeholder="Select Position Level" required><div slot="label">Position Level<ion-text color="danger">*</ion-text></div>
                            <IonSelectOption value="CEO/SVP/AVP/VP/Director">CEO/SVP/AVP/VP/Director</IonSelectOption>
                            <IonSelectOption value="Assistant Manager/Manager">Assistant Manager/Manager</IonSelectOption>
                            <IonSelectOption value="Supervisor/5 Years & Up Experience Employee">Supervisor/5 Years & Up
                                Experience Employee</IonSelectOption>
                            <IonSelectOption value="1-4 Years Experienced Employee">1-4 Years Experienced Employee
                            </IonSelectOption>
                            <IonSelectOption value="Less than 1 year experience">Less than 1 year experience
                            </IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" type="number" labelPlacement="stacked"
                            fill="outline" v-model="formData.salary" required><div slot="label">Salary<ion-text color="danger">*</ion-text></div>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" type="number" label="Hours of Work" labelPlacement="stacked"
                            fill="outline" v-model="formData.hours" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonTextarea fill="outline" labelPlacement="stacked"
                            class="modal-edituser-input" style="height: 200px" v-model="formData.jobdes"><div slot="label">Job Description<ion-text color="danger">*</ion-text></div>
                        </IonTextarea>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" type="number"
                            labelPlacement="stacked" fill="outline" v-model="formData.noofempl" required><div slot="label">No. of Employees<ion-text color="danger">*</ion-text></div>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect class="modal-edituser-input" label-placement="stacked"
                            interface="popover" fill="outline" v-model="formData.yearsofexp"
                            placeholder="Select Mininimun Working Experience" required><div slot="label">Years of Experience<ion-text color="danger">*</ion-text></div>
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
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect class="modal-edituser-input"
                            label-placement="stacked" interface="popover" fill="outline" v-model="formData.reqeduc"
                            placeholder="Select Required Educational Attainment" required><div slot="label">Required Educational Attainment<ion-text color="danger">*</ion-text></div>
                            <IonSelectOption value="none">none</IonSelectOption>

                            <IonSelectOption value="Junior High School Graduate and above">Junior High School Graduate and
                                above
                            </IonSelectOption>
                            <IonSelectOption value="Senior High School Graduate and above">Senior High School Graduate and
                                above
                            </IonSelectOption>
                            <IonSelectOption value="College Graduate">College Graduate</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <div class="flexcenter" style="width: 100%">
                            <div style="width: 100%">
                                <NewTags v-on:chosen-special="updateChosenspecial"
                                    @chosen-subspecial="updatesubChosenspecial"></NewTags>
                            </div>
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonInput class="modal-edituser-input" placeholder="add tags seperated by a comma ','"
                            labelPlacement="stacked" fill="outline" v-model="tagsInput" type="text" mode="md" required
                            style="margin-top: 10px;"><div slot="label">Tags<ion-text color="danger">*</ion-text></div>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" placeholder="Select Province" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="formData.province"
                            required><div slot="label">Province<ion-text color="danger">*</ion-text></div>
                            <IonSelectOption value="Cagayan">Cagayan</IonSelectOption>
                            <IonSelectOption value="Isabela">Isabela</IonSelectOption>
                            <IonSelectOption value="Nueva Vizcaya">Nueva Vizcaya</IonSelectOption>
                            <IonSelectOption value="Quirino">Quirino</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" placeholder="Select City/Town" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="formData.citown"
                            required><div slot="label">City/Town<ion-text color="danger">*</ion-text></div>
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
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="District" labelPlacement="stacked" fill="outline"
                            v-model="formData.district" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Street" labelPlacement="stacked" fill="outline"
                            v-model="formData.street" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
            </IonContent>

        </div><br/><br/>

        <div class="flexcenter">
            <IonButton style="--background: darkred; height: 35px; min-height: 0px;" @click="closeModal">Cancel</IonButton>
            <IonButton style="--background: #262c5c; height: 35px; min-height: 0px;" @click="handleSubmit">Add Job</IonButton>
        </div>
    </IonModal>
</template>
  
<script lang="ts">
import './admin.css';
import { auth, db, dbImage } from "@/firebaseDB";
import { doc, getDoc } from "@firebase/firestore";
import {
    IonModal,
    IonCard,
    IonButton,
    IonHeader,
    IonContent,
    IonText,
    IonInput,
    IonTextarea,
    IonRow,
    IonCol,
    IonAvatar,
    IonSelect,
    IonSelectOption,


} from "@ionic/vue";
import { business } from 'ionicons/icons';
import { computed, onMounted, ref } from 'vue';
import { ref as asd, uploadBytes, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword } from '@firebase/auth';
import NewTags from "@/SignUp/Mobile-SpecializedField.vue";
import { useadminaddjob } from '@/stores/adminaddjob'
import { getDashboardProfile } from '@/Dashboard/Dashboard-Model';

export default {
    components: {
        IonModal,
        IonCard,
        IonButton,
        IonHeader,
        IonContent,
        IonText,
        IonInput,
        IonTextarea,
        IonRow,
        IonCol,
        IonAvatar,
        IonSelect,
        IonSelectOption,
        NewTags
    },
    data() {
        return {
            users: [],
            imageUrl: null,
            thereisImage: false,
            prefferedClassification: "",
            subclassificationClassification: "",
            tagsInput: "",
        };
    },
    setup() {
        const user = ref(null);
        const companyname = ref("Loading...");
        const creator = ref("Loading...");
        onMounted(async () => {
            const userEmail = localStorage.getItem("email");
            // const userPassword = localStorage.getItem("password");
            user.value = await getDashboardProfile(userEmail);

            // Once you have user data, set companyname
            if (user.value) {
                companyname.value = user.value.id;
                creator.value = user.value.type;
            }
            console.log(user.value.id);

        });
        const formData = {
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
            noofempl: "",
            age: "",
            company: companyname.value,
            isactive: "activate",
            creator: creator.value,
            province: "",
            district: "",
            citown: "",
            street: "",
            classification: "",
            subclassification: "",
            chosenInterests: "",
        };
        return {
            formData,
        }
    },
    props: {
        isAddjobmodal: {
            required: true,
            type: Boolean,
        },
    },
    methods: {
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
            } else {
                // Handle the case when no files are selected or an error occurred.
                console.error("No files selected or an error occurred.");
            }
        },
        updateChosenspecial(PC) {
            this.prefferedClassification = PC;
            console.log(this.prefferedClassification);
            this.formData.classification = this.prefferedClassification;
        },
        updatesubChosenspecial(PC) {
            this.subclassificationClassification = PC;
            console.log(this.subclassificationClassification);
            this.formData.subclassification = this.subclassificationClassification;
        },
        closeModal() {
            this.formData = {
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
                noofempl: "",
                isactive: "activate",
                province: "",
                district: "",
                citown: "",
                street: "",
                classification: "",
                subclassification: "",
                chosenInterests: "",
            };
            this.$emit("close-add-job");
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

            for (const field of requiredFields) {
                if (!this.formData[field]) {
                    isFormValid = false;
                    break; // Exit the loop if any required field is empty
                }
            }

            if (this.selectedFile) {
                isImageSelected = true;
            }

            if (isFormValid && isImageSelected) {
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

                const tagsArray = this.tagsInput.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag !== '');
                console.log(tagsArray)

                const adminaddjob = useadminaddjob()

                adminaddjob.setFormData(this.formData);
                adminaddjob.setChosenInterests(tagsArray);
                await adminaddjob.postjob();
                this.isLoading = false
                alert("Successfull Post Job")
                this.closeModal()

            } else {
                // Handle the case where a required field is empty
                console.error("Please fill in all required fields.");
                alert("Please fill in all required fields");
            }
        },

    },
};
</script>

  