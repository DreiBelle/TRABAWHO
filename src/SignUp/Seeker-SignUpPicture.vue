<template>
    <IonPage class="signup-ionpage">
        <IonContent style="--background: none;">
            <div class="flexcenter" style="height: 100%;">
                <div>
                    <div class="flexcenter jsignup-text-title">
                        <IonIcon @click="goBack()" style="margin-top: 25px;" class="signup-back-mobile"
                            :icon="arrowBackOutline"></IonIcon>
                        <IonText>ALMOST DONE!</IonText>
                    </div>
                    <div class="flexcenter">
                        <IonAvatar class="jsignup-picture-avatar">
                            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="image" />
                        </IonAvatar>
                    </div>
                    <div class="flexcenter">
                        <input id="fileInput" type="file" accept="image/jpeg" ref="myfile" style="display: none" />
                        <label for="fileInput" class="jsignup-button-picture">
                            ADD A PROFILE
                        </label>
                    </div>
                    <div class="flexcenter">
                        <IonButton class="jsignup-button-finish">
                            Finish
                        </IonButton>
                    </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
</template>
  
<script lang="ts">
import {
    IonButton,
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonCard,
    IonModal,
    IonChip,
    IonIcon,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonAvatar,
IonAlert,
} from "@ionic/vue";
import "./SignUp.css";
import { goBack, GoSwipe } from "./SignUp-Controller";
import { useSignupStore } from "@/stores/signupstore";
import { ref } from "vue"; // Import the ref function
import ChoiceModal from "@/SignUp/Seeker-InterestModal.vue";
import { goLogin } from '@/SignUp/SignUp-Controller';
import { addCircleOutline, arrowBackOutline, close } from "ionicons/icons";

export default {
    components: {
    IonSelect,
    IonSelectOption,
    ChoiceModal,
    IonChip,
    IonIcon,
    IonButton,
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonCard,
    IonModal,
    IonInput,
    IonAvatar,
    IonAlert
},

    setup() {
        const signupStore = useSignupStore();
        const sharedFormData = signupStore.formData;

        const formData = {
            hours: "",
            yearsofexp: "",
            jobtype: "",
            salary: "",
            loc: "",
        };

        console.log("Page 3");
        console.log(sharedFormData.fullname);
        console.log(sharedFormData.email);
        console.log(sharedFormData.elementary);
        console.log(sharedFormData.juniorhigh);
        console.log(sharedFormData.seniorhigh);
        console.log(sharedFormData.college);
        console.log(sharedFormData.masteral);

        return {
            addCircleOutline,
            close,
            arrowBackOutline,
            GoSwipe,
            formData,
        }
    },

    data() {
        return {
            modalOpen: false,
            modalChoices: [],
            chosenChoices: [],
            userswipej: [],
        };
    },
    methods: {
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
        async handleSubmit() {
            const requiredFields = ['hours', 'yearsofexp', 'jobtype', 'salary', 'loc'];
            let isFormValid = true;

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

            if (this.chosenChoices.length > 0) {
                const signupStore = useSignupStore();
                const sharedFormData = signupStore.formData;
                this.userswipej.push({ jobdid: "" });
                signupStore.setChosenInterests(this.chosenChoices);
                signupStore.setjobswipe(this.userswipej);
                signupStore.setFormData({
                    ...sharedFormData,
                    hours: this.formData.hours,
                    yearsofexp: this.formData.yearsofexp,
                    jobtype: this.formData.jobtype,
                    salary: this.formData.salary,
                    loc: this.formData.loc,
                });

                console.log("Chosen Choices:", this.chosenChoices);
                await signupStore.registerUser(); // Register the user
                // GoHomeSwipeJobSeekers()
                goLogin();
                alert("Succesfully Registered");
            }
            else {
                alert("Fill all the Field to continue")
            }
        },
        goBack,
    },
};
</script>
  
<style>
/* ion-col {
    border: 1px solid black
  } */
</style>
  