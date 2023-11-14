<template>
    <IonModal :is-open="isAddmodal2" @did-dismiss="closeModal">
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
                        <IonInput class="modal-edituser-input" type="email" placeholder="Valid Email" label="Email"
                            labelPlacement="stacked" fill="outline" v-model="formData.email" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" type="password" label="Password" placeholder="Valid Password"
                            labelPlacement="stacked" fill="outline" v-model="formData.password" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Full Name" placeholder="Full Name"
                            labelPlacement="stacked" fill="outline" v-model="formData.fullname" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Elementary" placeholder="School / Year"
                            labelPlacement="stacked" fill="outline" v-model="formData.elementary" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Junior High" placeholder="School / Year"
                            labelPlacement="stacked" fill="outline" v-model="formData.juniorhigh" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Senior High" placeholder="School / Year"
                            labelPlacement="stacked" fill="outline" v-model="formData.seniorhigh" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="College" placeholder="School / Year"
                            labelPlacement="stacked" fill="outline" v-model="formData.college" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput mode="md" type="text" placeholder="masteral degree / School / Year" fill="outline"
                            labelPlacement="stacked" label="Masteral" class="modal-edituser-input"
                            v-model="formData.masteral" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput mode="md" type="number" placeholder="Enter Prefer Salary" fill="outline"
                            labelPlacement="stacked" label="Salary" class="modal-edituser-input" v-model="formData.salary"
                            required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" label="Years of Experience" placeholder="Select" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="formData.yearsofexp"
                            required>
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
                        <IonSelect mode="md" label="Job Type" placeholder="Select" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="formData.jobtype"
                            :multiple="true" required>
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
                        <IonSelect mode="md" label="Preffered Work Set up" placeholder="Select" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="formData.loc"
                            required>
                            <IonSelectOption value="Within the province">Within the province</IonSelectOption>
                            <IonSelectOption value="Outside of the province">Outside of the province</IonSelectOption>
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
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" type="date" label="Birthday" labelPlacement="stacked"
                            fill="outline" v-model="formData.bday" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Phone Number" placeholder="Contact Number"
                            labelPlacement="stacked" fill="outline" type="number" v-model="formData.contactno" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" label="Sex" placeholder="Select" label-placement="stacked" interface="popover"
                            fill="outline" class="modal-edituser-input" v-model="formData.gender" required>
                            <IonSelectOption value="Male">Male</IonSelectOption>
                            <IonSelectOption value="Female">Female</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" label="Province" placeholder="Select" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="formData.province"
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
                        <IonSelect mode="md" label="City/Town" placeholder="Select" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="formData.citown"
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
                        <IonInput class="modal-edituser-input" label="District" placeholder="Enter District"
                            labelPlacement="stacked" fill="outline" v-model="formData.district" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Street" placeholder="Enter Street"
                            labelPlacement="stacked" fill="outline" v-model="formData.street" required>
                        </IonInput>
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
                        <IonButton @click="closeModal">Cancel</IonButton>
                        <IonButton @click="handleSubmit">Save</IonButton>
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
import { createUserWithEmailAndPassword, sendEmailVerification } from '@firebase/auth';
import { useadminaddj } from '@/stores/adminadduserj'
import NewTags from "@/SignUp/Mobile-SpecializedField.vue";

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
        NewTags,
    },
    data() {
        return {
            users: [],
            imageUrl: null,
            thereispic: false,
            CoverUrl: null,
            thereisCover: false,
            Collegeschool: "",
            prefferedClassification: "",
            subclassificationClassification: "",
            tagsInput: "",
            userswipej: [],
        };
    },
    setup() {
        const formData = {
            email: "",
            password: "",
            fullname: "",
            elementary: "",
            juniorhigh: "",
            seniorhigh: "",
            college: "",
            yearsofexp: "",
            jobtype: "",
            salary: "",
            loc: "",
            masteral: "",
            higheduc: "",
            bday: "",
            contactno: "",
            gender: "",
            province: "",
            citown: "",
            district: "",
            street: "",
            classification: "",
            subclassification: "",
        };
        return {
            formData,
        }
    },
    props: {
        isAddmodal2: {
            required: true,
            type: Boolean,
        },
    },
    methods: {
        closeModal() {
            this.formData = {
                email: "",
                password: "",
                fullname: "",
                elementary: "",
                juniorhigh: "",
                seniorhigh: "",
                college: "",
                yearsofexp: "",
                jobtype: "",
                salary: "",
                loc: "",
                masteral: "",
                higheduc: "",
                bday: "",
                contactno: "",
                gender: "",
                province: "",
                citown: "",
                district: "",
                street: "",
                classification: "",
                subclassification: "",
            };
            this.$emit("close-add-modal2");
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
        async handleSubmit() {

            function isValidPassword(password) {
                // For example, require at least 8 characters and a mix of letters, numbers, and symbols
                const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

                return passwordRegex.test(password);
            }
            const requiredFields = [
                "email",
                "password",
                "fullname",
                "yearsofexp",
                "jobtype",
                "salary",
                "loc",
                "bday",
                "contactno",
                "gender",
                "province",
                "citown",
                "street",
                "classification",
                "subclassification",
            ];
            let isFormValid = true;

            for (const field of requiredFields) {
                if (!this.formData[field]) {
                    isFormValid = false;
                    alert(`Please fill in the ${field} field.`)
                    break;
                }
            }
            if (!isFormValid) {
                alert(`Fill in all the required fields to continue.`)

                return;
            }

            if (isFormValid) {
                try {
                    if (isValidPassword(this.formData.password)) {

                        const credential = await createUserWithEmailAndPassword(auth, this.formData.email, this.formData.password);
                        console.log(credential.user);

                        await sendEmailVerification(credential.user);

                        alert('Verification email sent')

                        const tagsArray = this.tagsInput.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag !== '');
                        console.log(tagsArray)

                        // if (this.chosenChoices.length > 0) {
                        const adminaddj = useadminaddj();
                        this.userswipej.push({ jobdid: "" });
                        adminaddj.setFormData(this.formData);
                        adminaddj.setChosenInterests(tagsArray);
                        adminaddj.setjobswipe(this.userswipej);
                        await adminaddj.registerUser();
                        alert('Successfully Added');
                        this.closeModal();
                    }
                    else {
                        alert('Invalid password. Password must require at least 8 characters and a mix of letters, numbers, and symbols.')
                    }
                } catch (error) {
                    alert(error.message)

                }
            }
            else {
                alert(`Fill all the Field to continue`)

            }
        },

    },
};
</script>

  