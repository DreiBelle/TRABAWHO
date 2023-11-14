<template>
    <IonModal :is-open="isEditModal" @did-dismiss="closeModal">
        <div v-for="job in jobs" style="height: 100%">
            <IonHeader class="modal-editjobposting-header flexcenter">Edit</IonHeader>
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
                                style="display: none" />
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
                        <IonInput class="modal-edituser-input" label="Job Name" labelPlacement="stacked" fill="outline"
                            v-model="job.jobname" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect class="modal-edituser-input" label="Job Type" interface="popover"
                            labelPlacement="stacked" v-model="job.jobtype" fill="outline" placeholder="Select Job Type"
                            required>
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
                        <IonSelect class="modal-edituser-input" label="Position Level" label-placement="stacked"
                            interface="popover" fill="outline" v-model="job.positionlvl"
                            placeholder="Select Position Level" required>
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
                        <IonInput class="modal-edituser-input" type="number" label="Salary" labelPlacement="stacked"
                            fill="outline" v-model="job.salary" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" type="number" label="Hours of Work" labelPlacement="stacked"
                            fill="outline" v-model="job.hours" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonTextarea label="Job Description" fill="outline" labelPlacement="stacked"
                            class="modal-edituser-input" style="height: 200px" v-model="job.jobdes">
                        </IonTextarea>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" type="number" label="No of Employees"
                            labelPlacement="stacked" fill="outline" v-model="job.noofempl" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect class="modal-edituser-input" label="Age" interface="popover" labelPlacement="stacked"
                            fill="outline" placeholder="Select preffered age" v-model="job.age" required>
                            <IonSelectOption value="18-25">18-25</IonSelectOption>
                            <IonSelectOption value="26-35">26-35</IonSelectOption>
                            <IonSelectOption value="36-45">36-45</IonSelectOption>
                            <IonSelectOption value="46 and above">46 and above</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect class="modal-edituser-input" label="Years of Experience" label-placement="stacked"
                            interface="popover" fill="outline" v-model="job.yearsofexp"
                            placeholder="Select Mininimun Working Experience" required>
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
                        <IonSelect class="modal-edituser-input" label="Required Educational Attainment"
                            label-placement="stacked" interface="popover" fill="outline" v-model="job.reqeduc"
                            placeholder="Select Required Educational Attainment" required>
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
                        <IonInput class="modal-edituser-input" label="Tags" placeholder="add tags seperated by a comma ','"
                            labelPlacement="stacked" fill="outline" v-model="tagsInput" type="text" mode="md" required
                            style="margin-top: 10px;">
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" label="Province" placeholder="Select Province" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="job.province"
                            required>
                            <IonSelectOption value="Cagayan">Cagayan</IonSelectOption>
                            <IonSelectOption value="Isabela">Isabela</IonSelectOption>
                            <IonSelectOption value="Nueva Vizcaya">Nueva Vizcaya</IonSelectOption>
                            <IonSelectOption value="Quirino">Quirino</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" label="City/Town" placeholder="Select City/Town" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="job.citown"
                            required>
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
                            v-model="job.district" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Street" labelPlacement="stacked" fill="outline"
                            v-model="job.street" required>
                        </IonInput>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol class="flexcenter">
                        <IonButton @click="closeModal">Cancel</IonButton>
                        <IonButton @click="handleSubmit">Add Job</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>

        </div>


    </IonModal>
</template>
  
<script lang="ts">
import './admin.css';
import { auth, db, dbImage } from "@/firebaseDB";
import { doc, getDoc } from "@firebase/firestore";
import { useadmineditjob } from "@/stores/admineditjob"
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
            jobs: [],
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
            isactive: "activate",
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
    watch: {
        passId: function (value) {
            if (value) {
                this.getDetails();
            } else {
                this.jobs = [];
            }
        },
    },
    props: {
        isEditModal: {
            required: true,
            type: Boolean,
        },
        passId: {
            required: true,
            type: String,
        },
    },
    methods: {
        async getDetails() {
            const docRef = doc(db, "jobpost", this.passId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                this.jobs.push(docSnap.data());
                console.log("Document data:", this.jobs);
            } else {
                console.log("No such document!");
            }
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
                age: "",
                isactive: "activate",
                province: "",
                district: "",
                citown: "",
                street: "",
                classification: "",
                subclassification: "",
                chosenInterests: "",
            };
            this.$emit("close-edit-modal");
        },
        async handleSubmit(event) {
            this.isLoading = true
            // const requiredFields = [
            //     "jobname",
            //     "jobtype",
            //     "jobdes",
            //     "positionlvl",
            //     "salary",
            //     "yearsofexp",
            //     "reqeduc",
            //     "noofempl",
            //     "age",
            //     "province",
            //     "citown",
            //     "hours",
            // ];
            let isFormValid = true;
            let isImageSelected = false;

            // for (const field of requiredFields) {
            //     if (!this.formData[field]) {
            //         isFormValid = false;
            //         break; // Exit the loop if any required field is empty
            //     }
            // }

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

                const admineditjob = useadmineditjob()
                this.jobs.forEach(job => {
                    this.formData.jobname = job.jobname
                    this.formData.jobtype = job.jobtype
                    this.formData.positionlvl = job.positionlvl
                    this.formData.salary = job.salary
                    this.formData.hours = job.hours
                    this.formData.jobdes = job.jobdes
                    this.formData.noofempl = job.noofempl
                    this.formData.age = job.age
                    this.formData.yearsofexp = job.yearsofexp
                    this.formData.reqeduc = job.reqeduc
                    this.formData.province = job.province
                    this.formData.citown = job.citown
                    this.formData.district = job.district
                    this.formData.street = job.street
                })

                admineditjob.setFormData(this.formData);
                admineditjob.setChosenInterests(tagsArray);
                await admineditjob.updateData(this.passId);
                this.isLoading = false

                alert("Succcessfully Edit Job")
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

  