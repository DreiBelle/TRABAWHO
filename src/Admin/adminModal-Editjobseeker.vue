<template>
    <IonModal :is-open="isEditmodal" @did-dismiss="closeModal">
        <div v-for="user in users" style="height: 100%">
            <IonHeader class="modal-editjobposting-header flexcenter">EDIT</IonHeader>
            <IonContent class="custom-scrollbar">
                <div class="flexcenter" style="margin-top: 10px;">
                    <IonText class="modal-addjobpost-titlediv">
                        Edit Job Seeker
                    </IonText>
                </div>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Full Name" placeholder="Full Name"
                            labelPlacement="stacked" fill="outline" v-model="user.fullname" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Elementary" placeholder="School / Year"
                            labelPlacement="stacked" fill="outline" v-model="user.elementary" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Junior High" placeholder="School / Year"
                            labelPlacement="stacked" fill="outline" v-model="user.juniorhigh" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Senior High" placeholder="School / Year"
                            labelPlacement="stacked" fill="outline" v-model="user.seniorhigh" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="College" placeholder="School / Year"
                            labelPlacement="stacked" fill="outline" v-model="user.college" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput mode="md" type="text" placeholder="masteral degree / School / Year" fill="outline"
                            labelPlacement="stacked" label="Masteral" class="modal-edituser-input" v-model="user.masteral"
                            required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput mode="md" type="number" placeholder="Enter Prefer Salary" fill="outline"
                            labelPlacement="stacked" label="Salary" class="modal-edituser-input" v-model="user.salary"
                            required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" label="Years of Experience" placeholder="Select" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="user.yearsofexp"
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
                            interface="popover" fill="outline" class="modal-edituser-input" :multiple="true"
                            v-model="user.jobtype" required>
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
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="user.loc" required>
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
                            fill="outline" v-model="user.bday" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Phone Number" placeholder="Contact Number"
                            labelPlacement="stacked" fill="outline" type="number" v-model="user.contactno" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" label="Gender" placeholder="Select" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="user.gender" required>
                            <IonSelectOption value="Male">Male</IonSelectOption>
                            <IonSelectOption value="Female">Female</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" label="Province" placeholder="Select" label-placement="stacked"
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="user.province"
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
                            interface="popover" fill="outline" class="modal-edituser-input" v-model="user.citown" required>
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
                            labelPlacement="stacked" fill="outline" v-model="user.district" required>
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="modal-edituser-input" label="Street" placeholder="Enter Street"
                            labelPlacement="stacked" fill="outline" v-model="user.street" required>
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
                    </IonCol>
                    <IonCol class="flexcenter">
                        <IonButton @click="closeModal">Cancel</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>

        </div>


    </IonModal>
</template>
  
<script lang="ts">
import NewTags from "@/SignUp/Mobile-SpecializedField.vue";
import './admin.css';
import { db } from "@/firebaseDB";
import { doc, getDoc } from "@firebase/firestore";
import { useadmineditj } from "@/stores/adminedituserj"
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
    IonSelect,
    IonSelectOption,


} from "@ionic/vue";
import { computed, onMounted, ref } from 'vue';

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
        IonSelect,
        IonSelectOption,
        NewTags,

    },
    data() {
        return {
            isEditingjmodal: false,
            users: [],
            prefferedClassification: "",
            subclassificationClassification: "",
            tagsInput: "",
        };
    },
    props: {
        isEditmodal: {
            required: true,
            type: Boolean,
        },
        passId: {
            required: true,
            type: String,
        },
    },
    setup() {
        const formData = {
            fullname: "",
            elementary: "",
            juniorhigh: "",
            seniorhigh: "",
            college: "",
            masteral: "",
            salary: "",
            yearsofexp: "",
            jobtype: "",
            loc: "",
            classification: "",
            subclassification: "",
            bday: "",
            contactno: "",
            gender: "",
            province: "",
            citown: "",
            district: "",
            street: "",
        };

        return {
            formData
        }
    },
    async mounted() {
        
    },
    watch: {
        passId: function (value) {
            if (value) {
                this.getDetails();

            } else {
                this.users = [];
            }
        },
    },
    methods: {
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
            this.$emit("close-edit-modal");
        },
        async getDetails() {
            const docRef = doc(db, "users", this.passId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                this.users.push(docSnap.data());
                console.log("Document data:", this.users);
            } else {
                console.log("No such document!");
            }
        },
        async handlesubmit() {
            const admineditj = useadmineditj();
            this.users.forEach(user => {
                this.formData.fullname = user.fullname
                this.formData.elementary = user.elementary
                this.formData.juniorhigh = user.juniorhigh
                this.formData.seniorhigh = user.seniorhigh
                this.formData.college = user.college
                this.formData.masteral = user.masteral
                this.formData.salary = user.salary
                this.formData.yearsofexp = user.yearsofexp
                this.formData.jobtype = user.jobtype
                this.formData.loc = user.loc
                this.formData.bday = user.bday
                this.formData.contactno = user.contactno
                this.formData.gender = user.gender
                this.formData.province = user.province
                this.formData.citown = user.citown
                this.formData.district = user.district
                this.formData.street = user.street
            });

            const tagsArray = ref();

            if (Array.isArray(this.tagsInput)) {
                const combineTags = this.tagsInput.join(", ");
                tagsArray.value = combineTags
                    .split(",")
                    .map((tag) => tag.trim().toLowerCase())
                    .filter((tag) => tag !== "");
            } else if (typeof this.tagsInput === "string") {
                tagsArray.value = this.tagsInput
                    .split(",")
                    .map((tag) => tag.trim().toLowerCase())
                    .filter((tag) => tag !== "");
            }

            admineditj.setChosenInterests(tagsArray);
            admineditj.setFormData(this.formData)
            await admineditj.updateData(this.passId)
            alert("Successfully Updated User")
            this.closeModal()
        }

    },
};
</script>

  