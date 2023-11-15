<template>
    <IonModal :is-open="isEditmodal" @did-dismiss="closeModal" class="eprofile-editmodal">
        <IonContent v-for="details in users" class="custom-scrollbar">
            <IonGrid style="width: 100%">
                <IonRow>
                    <IonCol size="1.5">

                    </IonCol>
                    <IonCol size="9">
                        <IonText class="flexcenter"> EDIT PROFILE </IonText>
                    </IonCol>
                    <IonCol style="justify-content: right;" class="flexcenter" size="1.5">
                        <IonIcon class="eprofile-modal-icon" @click="closeModal"></IonIcon>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput placeholder="business name" class="eprofile-editprofile-input"
                            label="Registered Business Name" fill="outline" label-placement="stacked"
                            v-model="details.businessname">
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonSelect mode="md" label="Company Type" placeholder="Select Type of Company"
                            label-placement="stacked" interface="popover" fill="outline" class="eprofile-editprofile-input"
                            v-model="details.companytype" required>
                            <IonSelectOption value="Government">Government</IonSelectOption>
                            <IonSelectOption value="Private">Private</IonSelectOption>
                            <IonSelectOption value="Manpower">Manpower</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput class="eprofile-editprofile-input" label="Year of establishment" fill="outline"
                            label-placement="stacked" type="date" v-model="details.yearofest">
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput placeholder="Total no. of employees" class="eprofile-editprofile-input"
                            label="No. of Employees" fill="outline" label-placement="stacked" type="number"
                            v-model="details.noofempl">
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput placeholder="work location" class="eprofile-editprofile-input" label="Location"
                            fill="outline" label-placement="stacked" v-model="details.loc">
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonTextarea placeholder="mission/vision of the company" class="eprofile-editprofile-input"
                            fill="outline" style="height: 150px" label="Mission/Vission" label-placement="stacked"
                            v-model="details.mv">
                        </IonTextarea>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonTextarea placeholder="Enter founder/s, press enter to add multiple people"
                            class="eprofile-editprofile-input" fill="outline" style="height: 150px; white-space: pre-line;"
                            label="Founders" label-placement="stacked" v-model="details.founders">
                        </IonTextarea>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput placeholder="Contact person number" class="eprofile-editprofile-input"
                            label="Contact number" fill="outline" label-placement="stacked" v-model="details.number">
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput placeholder="Optional" class="eprofile-editprofile-input" label="Facebook" fill="outline"
                            label-placement="stacked" v-model="details.facebook">
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput placeholder="Optional" class="eprofile-editprofile-input" label="Twitter" fill="outline"
                            label-placement="stacked" v-model="details.twitter">
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonInput placeholder="Optional" class="eprofile-editprofile-input" label="Instagram" fill="outline"
                            label-placement="stacked" v-model="details.instagram">
                        </IonInput>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonButton class="eprofile-modal-buttons" style="--background: darkred">
                            CANCEL
                        </IonButton>
                    </IonCol>
                    <IonCol class="flexcenter">
                        <IonButton @click="updateInfo" class="eprofile-modal-buttons"> SAVE </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonModal>
</template>
  
<script lang="ts">
import './admin.css';
import '../Dashboard/Profile.css'
import { db } from "@/firebaseDB";
import { collection, doc, getDoc, query, where } from "@firebase/firestore";
import { useeditadmin } from "@/stores/adminedituser"
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
    IonGrid,
    IonIcon

} from "@ionic/vue";
import { computed, onMounted, ref } from 'vue';

export default {
    components: {
        IonIcon,
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
        IonGrid
    },
    data() {
        return {
            isEditingModal: false,
            users: [],
            userid: "",
        };
    },
    mounted() {
        this.users.forEach(user => {
            console.log(user.businessname)
            this.newBusinessName = user.businessname
        });
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
            businessname: "",
            yearsofest: "",
            companytype: "",
            noofempl: "",
            number: "",
            contactpn: "",
            mv: "",
            founders: "",
            facebook: "",
            twitter: "",
            instagram: "",
        };
        return {
            close,
            formData,
        }
    },
    watch: {
        passId: function (value) {
            if (value) {
                console.log(value)
                console.log("passed")
                this.getDetails(value)

            } else {
                this.users = [];
            }
        },
    },
    methods: {
        closeModal() {
            this.$emit("close-edit-modal");
        },
        async getDetails(id) {
            const docRef = doc(db, "users", id)
            const docSnap = await (getDoc(docRef));

            if (docSnap.exists()) {
                this.users = []
                this.users.push(docSnap.data())
                console.log("sheesh" + this.users)
            } else {
                console.log("no document")
            }
        },
        async updateInfo() {
            const editadmin = useeditadmin()
            console.log(this.users)
            this.users.forEach(user => {
                console.log(user.businessname)
                this.formData.businessname = user.businessname
                this.formData.companytype = user.companytype
                this.formData.yearsofest = user.yearsofest
                this.formData.noofempl = user.noofempl
                this.formData.mv = user.mv
                this.formData.founders = user.founders
                this.formData.number = user.number
                this.formData.contactpn = user.contactpn
                this.formData.facebook = user.facebook
                this.formData.twitter = user.twitter
                this.formData.instagram = user.instagram
            });
            editadmin.setFormData(this.formData);
            await editadmin.updateData(this.passId);
            alert("Successfully Updated User")
            this.closeModal()
        }
    },
};
</script>

  