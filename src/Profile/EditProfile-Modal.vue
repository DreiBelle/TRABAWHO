<template>
    <IonModal :is-open="isProfileEditmodal" @did-dismiss="closeEditprofile()" :presenting-element="presentingElement">
        <IonHeader>
            <IonToolbar>
                <IonTitle style="font-size: 15px;">
                    EDIT PROFILE
                </IonTitle>
                <IonButtons slot="end">
                    <IonButton style="--color: #262c5c;" @click="closeEditprofile()">Close</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <div>
                <div class="flexcenter jprofile-avatar-modal-div">
                    <IonAvatar class="jprofile-modal-avatar">
                    </IonAvatar>
                </div>
                <div class="flexcenter">
                    <input id="fileInput" type="file" accept="image/jpeg" ref="myfile" style="display: none" />
                    <label for="fileInput" class="jprofile-button-picture">
                        <IonIcon style="margin-bottom: -2px;" :icon="person"></IonIcon>
                        Change Profile
                    </label>
                </div>
            </div>
            <div>
                <IonCard class="jprofile-modal-cards" style=" border-top: 0px;">
                    <IonInput mode="md" class="jprofile-modal-inputs" label="Name" placeholder="Enter full name"
                        labelPlacement="stacked" fill="outline" v-model="formData.fullname" required>
                    </IonInput>
                </IonCard>
            </div>
            <div>
                <IonCard class="jprofile-modal-cards">
                    <IonText class="jprofile-modal-field-text">
                        <IonIcon style="margin-bottom: -4px;" :icon="informationCircleOutline"></IonIcon>

                        BASIC
                    </IonText>
                    <IonInput type="number" mode="md" class="jprofile-modal-inputs" label="Age" placeholder="Enter Age"
                        labelPlacement="stacked" fill="outline" required>
                    </IonInput>
                    <IonInput type="date" mode="md" class="jprofile-modal-inputs" label="Birthday"
                        placeholder="Enter Birthday" labelPlacement="stacked" fill="outline" v-model="formData.bday"
                        required>
                    </IonInput>
                    <IonInput mode="md" class="jprofile-modal-inputs" label="Address" placeholder="Enter Address"
                        labelPlacement="stacked" fill="outline" v-model="formData.address" required>
                    </IonInput>
                    <IonSelect mode="md" label="Gender" placeholder="Select gender" label-placement="stacked"
                        interface="popover" fill="outline" class="jprofile-modal-inputs" v-model="formData.gender" required>
                        <IonSelectOption value="Male">Male</IonSelectOption>
                        <IonSelectOption value="Female">Female</IonSelectOption>
                    </IonSelect>
                </IonCard>
            </div>
            <div>
                <IonCard class="jprofile-modal-cards">
                    <IonText class="jprofile-modal-field-text">
                        <IonIcon style="margin-bottom: -3px;" :icon="schoolOutline"></IonIcon>
                        LOCATION
                    </IonText>
                    <IonInput mode="md" class="jprofile-modal-inputs" label="Province" placeholder="Province"
                        labelPlacement="stacked" fill="outline" v-model="formData.province" required>
                    </IonInput>
                    <IonInput mode="md" class="jprofile-modal-inputs" label="City/Town" placeholder="City or Town"
                        labelPlacement="stacked" fill="outline" v-model="formData.citown" required>
                    </IonInput>
                    <IonInput mode="md" class="jprofile-modal-inputs" label="District" placeholder="District - Purok"
                        labelPlacement="stacked" fill="outline" v-model="formData.district" required>
                    </IonInput>
                    <IonInput mode="md" class="jprofile-modal-inputs" label="Street" placeholder="Street"
                        labelPlacement="stacked" fill="outline" v-model="formData.street" required>
                    </IonInput>
                </IonCard>
            </div>
            <div>
                <IonCard class="jprofile-modal-cards">
                    <IonText class="jprofile-modal-field-text">
                        <IonIcon style="margin-bottom: -3px;" :icon="schoolOutline"></IonIcon>
                        EDUCATION
                    </IonText>
                    <IonInput mode="md" class="jprofile-modal-inputs" label="Elementary" placeholder="Elementary School"
                        labelPlacement="stacked" fill="outline" v-model="formData.elementary" required>
                    </IonInput>
                    <IonInput mode="md" class="jprofile-modal-inputs" label="Junior Highschool"
                        placeholder="Elementary Highschool" labelPlacement="stacked" fill="outline"
                        v-model="formData.juniorhigh" required>
                    </IonInput>
                    <IonInput mode="md" class="jprofile-modal-inputs" label="Senior Highschool"
                        placeholder="Senior Highschool" labelPlacement="stacked" fill="outline"
                        v-model="formData.seniorhigh" required>
                    </IonInput>
                    <IonInput mode="md" class="jprofile-modal-inputs" label="College" placeholder="College University"
                        labelPlacement="stacked" fill="outline" v-model="formData.college" required>
                    </IonInput>
                </IonCard>
            </div>
            <div>
                <IonCard class="jprofile-modal-cards">
                    <IonText class="jprofile-modal-field-text">
                        <IonIcon style="margin-bottom: -3px;" :icon="filterOutline"></IonIcon>

                        PREFERENCES
                    </IonText>
                    <IonSelect mode="md" label="Preffered Hours" placeholder="Select Preffered hours of work"
                        label-placement="stacked" interface="popover" fill="outline" class="jprofile-modal-inputs" required>
                        <IonSelectOption value="4">4hrs</IonSelectOption>
                        <IonSelectOption value="8">8hrs</IonSelectOption>
                        <IonSelectOption value="12">12hrs</IonSelectOption>
                        <IonSelectOption value="16">16hrs</IonSelectOption>
                        <IonSelectOption value="20">20hrs</IonSelectOption>
                    </IonSelect>
                    <IonSelect mode="md" label="years of experience" placeholder="Select years of experience"
                        label-placement="stacked" interface="popover" fill="outline" class="jprofile-modal-inputs"
                        v-model="formData.yearsofexp" required>
                        <IonSelectOption value="0">0</IonSelectOption>
                        <IonSelectOption value="1-5">1-5</IonSelectOption>
                        <IonSelectOption value="6-10">6-10</IonSelectOption>
                        <IonSelectOption value="11-15">11-15</IonSelectOption>
                        <IonSelectOption value="16-20">16-20</IonSelectOption>
                        <IonSelectOption value="21-23">21-23</IonSelectOption>
                        <IonSelectOption value="24+">24+</IonSelectOption>
                    </IonSelect>
                    <IonSelect mode="md" class="jprofile-modal-inputs" label="Preffered Salary" label-placement="stacked"
                        interface="popover" fill="outline" placeholder="Input Preffered Salary based on skills"
                        v-model="formData.salary" required>
                        <IonSelectOption value="0php - 5,000php">0php - 5,000php</IonSelectOption>
                        <IonSelectOption value="6,000php - 10,000php">6,000php - 10,000php</IonSelectOption>
                        <IonSelectOption value="11,000php - 50,000php">11,000php - 50,000php</IonSelectOption>
                        <IonSelectOption value="51,000php - 100,000php">51,000php - 100,000php</IonSelectOption>
                        <IonSelectOption value="100,000php and above">100,000php and above</IonSelectOption>
                    </IonSelect>
                    <IonSelect mode="md" class="jprofile-modal-inputs" label="Job Type" label-placement="stacked"
                        interface="popover" fill="outline" placeholder="Select Preffered Job Type" :multiple="true"
                        v-model="formData.jobtype" required>
                        <IonSelectOption value="Full-Time">Full-Time</IonSelectOption>
                        <IonSelectOption value="Part-Time">Part-Time</IonSelectOption>
                        <IonSelectOption value="Contract">Contract</IonSelectOption>
                        <IonSelectOption value="Temporary">Temporary</IonSelectOption>
                        <IonSelectOption value="Internship">Internship</IonSelectOption>
                    </IonSelect>
                    <IonSelect mode="md" class="jprofile-modal-inputs" label="Location" label-placement="stacked"
                        interface="popover" fill="outline" placeholder="Select Preffered Location" v-model="formData.loc"
                        required>
                        <IonSelectOption value="Work From Home">Work from home</IonSelectOption>
                        <IonSelectOption value="Within the province">Within the province</IonSelectOption>
                        <IonSelectOption value="Outside of the province">Outside of the province</IonSelectOption>
                    </IonSelect>
                </IonCard>
            </div>
            <div>
                <IonCard class="jprofile-modal-cards" style="border-bottom: 0px;">
                    <IonText class="jprofile-modal-field-text">
                        <IonIcon style="margin-bottom: -3px;" :icon="pricetagOutline"></IonIcon>
                        TAGS
                    </IonText>
                    <div class="jprofile-container-tags">
                        <IonChip v-for="choice in chosenChoices" :key="choice.id">
                            {{ choice.label }}
                            <IonIcon class="jprofile-icon-removechoice" @click="removeChoice(choice.id)" :icon="close">
                            </IonIcon>
                        </IonChip>
                        <div v-if="chosenChoices.length > 0">
                            <IonIcon @click="modalInterest(true)" size="large" :icon="addCircleOutline"
                                class="jprofile-icon-addfilter">
                            </IonIcon>
                        </div>
                        <div v-else>
                            <IonButton @click="modalInterest(true)" class="jprofile-button-addtags" fill="outline"
                                style="border-radius: 100%">
                                Add Specialized Fields
                            </IonButton>
                        </div>
                    </div>
                </IonCard>
            </div>
            <div>
                <IonButton expand="block" class="jprofile-modal-button-save">SAVE</IonButton>
            </div>
        </IonContent>

        <IonModal :is-open="isModalinterest" @did-dismiss="modalInterest(false)">
            <ChoiceModal style="border: 1px solid black" :choice="modalChoices" @choice-selected="handleChoiceSelected" />
        </IonModal>
    </IonModal>
</template>
<script lang="ts">
import {
    IonContent,
    IonText,
    IonButton,
    IonHeader,
    IonIcon,
    IonAvatar,
    IonModal,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonCard,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonChip,
} from '@ionic/vue';
import ChoiceModal from '../SignUp/Seeker-InterestModal.vue'
import { close, pricetagOutline, addCircleOutline, filterOutline, informationCircleOutline, pencilOutline, person, phonePortraitOutline, schoolOutline, settingsOutline } from "ionicons/icons";
import { ref, onMounted, computed, defineComponent, PropType } from "vue";

export default {
    components: {
        ChoiceModal,
        IonContent,
        IonText,
        IonButton,
        IonHeader,
        IonIcon,
        IonAvatar,
        IonModal,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonCard,
        IonInput,
        IonSelect,
        IonSelectOption,
        IonChip,
    },
    setup(props) {
        const formData = computed(() => ({
            pic: props.userData ? props.userData.pic : "",
            fullname: props.userData ? props.userData.fullname : "",
            bday: props.userData ? props.userData.bday : "",
            address: props.userData ? props.userData.address : "",
            gender: props.userData ? props.userData.gender : "",
            province: props.userData ? props.userData.province : "",
            citown: props.userData ? props.userData.citown : "",
            district: props.userData ? props.userData.district : "",
            street: props.userData ? props.userData.street : "",
            elementary: props.userData ? props.userData.elementary : "",
            juniorhigh: props.userData ? props.userData.juniorhigh : "",
            seniorhigh: props.userData ? props.userData.seniorhigh : "",
            college: props.userData ? props.userData.college : "",
            yearsofexp: props.userData ? props.userData.yearsofexp : "",
            salary: props.userData ? props.userData.salary : "",
            jobtype: props.userData ? props.userData.jobtype : "",
            loc: props.userData ? props.userData.loc : "",
        }));
        return {
            pencilOutline,
            schoolOutline,
            phonePortraitOutline,
            filterOutline,
            informationCircleOutline,
            person,
            pricetagOutline,
            addCircleOutline,
            close,
            formData,
        }
    },
    data(props) {
        return {
            isModalinterest: false,
            modalChoices: [],
            chosenChoices: props.userData ? props.userData.chosenInterests : "",
            presentingElement: null,
        }
    },
    props: {
        isProfileEditmodal: {
            type: Boolean,
            required: true,
        },
        userData: {
            type: Object,
            default: null,
        },
    },
    methods: {
        closeEditprofile() {
            this.$emit("close-profile-edit-modal");
        },
        modalInterest(x) {
            this.isModalinterest = x
        },
        handleChoiceSelected(choice) {
            this.chosenChoices.push(choice);
            this.isModalinterest = false;
        },
        removeChoice(choiceId) {
            this.chosenChoices = this.chosenChoices.filter(
                (choice) => choice.id !== choiceId
            );
        },
    }
}
</script>