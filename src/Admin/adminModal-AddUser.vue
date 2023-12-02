<template>
    <IonModal :is-open="isAddmodal" @did-dismiss="closeModal">
        <div style="height: 100%">
            <IonHeader class="modal-editjobposting-header flexcenter">ADD</IonHeader>
            <IonContent class="custom-scrollbar">
                <div class="flexcenter" style="margin-top: 10px;">
                    <IonText class="modal-addjobpost-titlediv">
                        User Information
                    </IonText>
                </div>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" type="email" label="Email" labelPlacement="stacked"
                            fill="outline" v-model="formData.email" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" type="password" label="Password" labelPlacement="stacked"
                            fill="outline" v-model="formData.password" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" type="date" label="Years of Establishment" labelPlacement="stacked"
                            fill="outline" v-model="formData.yearsofest" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Registered Businessname" labelPlacement="stacked"
                            fill="outline" v-model="formData.businessname" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" label="Company Type" placeholder="Select Type of Company"
                            label-placement="stacked" interface="popover" fill="outline" class="modal-edituser-input"
                            v-model="formData.companytype" required>
                            <IonSelectOption value="Government">Government</IonSelectOption>
                            <IonSelectOption value="Private">Private</IonSelectOption>
                            <IonSelectOption value="Manpower">Manpower</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" type="number" label="No of Employees"
                            labelPlacement="stacked" fill="outline" v-model="formData.noofempl" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonTextarea label="Mission Vission" fill="outline" labelPlacement="stacked"
                            class="modal-edituser-input" style="height: 200px" v-model="formData.mv">
                        </IonTextarea>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonTextarea label="Founders" fill="outline" labelPlacement="stacked" class="modal-edituser-input"
                            style="height: 200px" v-model="formData.founders">
                        </IonTextarea>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Contact No" labelPlacement="stacked" fill="outline"
                            v-model="formData.number" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Contact Person" labelPlacement="stacked"
                            fill="outline" v-model="formData.contactpn" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Facebook" labelPlacement="stacked" fill="outline"
                            v-model="formData.facebook" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Twitter" labelPlacement="stacked" fill="outline"
                            v-model="formData.twitter" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Instagram" labelPlacement="stacked" fill="outline"
                            v-model="formData.instagram" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                
            </IonContent>

        </div><br/><br/>
        <div class="flexcenter">
            <IonButton style="--background: darkred; height: 35px; min-height: 0px;" @click="closeModal">Cancel</IonButton>
            <IonButton style="--background: #262c5c; height: 35px; min-height: 0px;" @click="addprof">Save</IonButton>
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
import { useadminadd } from '@/stores/adminadduser'

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
    },
    data() {
        return {
            users: [],
            imageUrl: null,
            thereispic: false,
            CoverUrl: null,
            thereisCover: false,
        };
    },
    setup() {
        const formData = {
            email: "",
            password: "",
            businessname: "",
            companytype: "",
            noofempl: "",
            number: "",
            contactpn: "",
            yearsofest: "",
            mv: "",
            founders: "",
            facebook: "",
            twitter: "",
            instagram: "",
        };
        return {
            formData,
        }
    },
    props: {
        isAddmodal: {
            required: true,
            type: Boolean,
        },
    },
    methods: {
        closeModal() {
            this.formData = {
                email: "",
                password: "",
                businessname: "",
                companytype: "",
                noofempl: "",
                yearsofest: "",
                number: "",
                contactpn: "",
                mv: "",
                founders: "",
                facebook: "",
                twitter: "",
                instagram: "",
            };
            this.$emit("close-add-modal");
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
        async addprof() {
            const requiredFields = ['email', 'contactpn', 'number', 'businessname', 'password', 'companytype'];
            let isFormValid = true;
            const adminadd = useadminadd();
            function isValidPassword(password) {
                // Customize your password validation rules here
                // For example, require at least 8 characters and a mix of letters, numbers, and symbols
                const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                return passwordRegex.test(password);
            }

            for (const field of requiredFields) {
                if (!this.formData[field]) {
                    isFormValid = false;
                    alert(`Please fill in the ${field} field.`);
                    break;
                }
            }
            if (!isFormValid) {
                alert("Fill in all the required fields to continue.");
                return;
            }

            if (isFormValid) {
                try {
                    if (isValidPassword(this.formData.password)) {
                        const credential = await createUserWithEmailAndPassword(auth, this.formData.email, this.formData.password);
                        console.log(credential.user);

                        adminadd.setFormData(this.formData);
                        adminadd.setjobdata({ swipedid: "" });
                        adminadd.setswipedata({ jobdid: "" });
                        await adminadd.registerUser();

                        alert("Succesfully Registered");
                        this.closeModal();
                    }
                    else {
                        alert("Invalid password. Password must require at least 8 characters and a mix of letters, numbers, and symbols.")
                    }

                } catch (error) {
                    alert(error.message);
                }
            }
            else {
                alert("Fill all the Field to continue")
            }
        },

    },
};
</script>

  