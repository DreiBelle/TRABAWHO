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
                    <div v-if="!imageUrl" class="flexcenter">
                        <IonAvatar class="jsignup-picture-avatar">
                            <img src='https://ionicframework.com/docs/img/demos/avatar.svg' alt="image" />
                        </IonAvatar>
                    </div>
                    <div v-else class="flexcenter">
                        <IonAvatar class="jsignup-picture-avatar">
                            <img :src=imageUrl alt="image" />
                        </IonAvatar>
                    </div>
                    <div class="flexcenter">
                        <input id="fileInput" type="file" accept="image/jpeg" @change="handleFileChange" ref="myfile"
                            style="display: none" />
                        <label for="fileInput" class="jsignup-button-picture">
                            ADD A PROFILE
                        </label>
                    </div>
                    <div class="flexcenter">
                        <IonButton class="jsignup-button-finish" @click="handleSubmit">
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
import { ref } from "vue";
import { ref as asd, uploadBytes, getDownloadURL } from "firebase/storage";
import { dbImage, db } from "@/firebaseDB";
import { goLogin } from '@/SignUp/SignUp-Controller';
import { addCircleOutline, arrowBackOutline, close } from "ionicons/icons";

export default {
    components: {
        IonSelect,
        IonSelectOption,
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
        IonInput,
        IonAvatar,
        IonAlert
    },

    setup() {
        const signupStore = useSignupStore();
        const sharedFormData = signupStore.formData;

        const formData = {
            pic: "",
        };

        console.log("Page 5");
        console.log(sharedFormData.fullname);
        console.log(sharedFormData.email);
        console.log(sharedFormData.bday);
        console.log(sharedFormData.contactno);
        console.log(sharedFormData.gender);
        console.log(sharedFormData.province);
        console.log(sharedFormData.citown);
        console.log(sharedFormData.district);
        console.log(sharedFormData.street);
        console.log(sharedFormData.elementary);
        console.log(sharedFormData.juniorhigh);
        console.log(sharedFormData.seniorhigh);
        console.log(sharedFormData.college);
        console.log(sharedFormData.yearsofexp);
        console.log(sharedFormData.jobtype);
        console.log(sharedFormData.salary);
        console.log(sharedFormData.loc);
        console.log(sharedFormData.chosenInterests);

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
            imageUrl: null,
            selectedImage: null,
            thereisImage: false,
        };
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
        async handleSubmit() {
            let isImageSelected = false;

            if (this.selectedFile) {
                isImageSelected = true;
            }

            if (isImageSelected) {
                if (this.selectedFile) {
                    // Upload the selected image to Firebase Storage
                    const storageRef = asd(
                        dbImage,
                        "userpictures/" + this.selectedFile.name
                    );
                    try {
                        await uploadBytes(storageRef, this.selectedFile);
                        // Get the download URL of the uploaded image
                        const downloadURL = await getDownloadURL(storageRef);
                        this.formData.pic = downloadURL;
                    } catch (error) {
                        console.error("Error uploading image:", error);
                        alert("Error uploading image. Please try again.");
                        return;
                    }
                }

                const signupStore = useSignupStore();
                const sharedFormData = signupStore.formData;
                signupStore.setFormData({
                    ...sharedFormData,
                    pic: this.formData.pic
                });
                await signupStore.registerUser();
                GoSwipe();
            } else {
                console.error("Please fill in all required fields.");
                alert("Please fill in all required fields");
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
  