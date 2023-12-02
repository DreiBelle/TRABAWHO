<template>
  <IonPage style="background: linear-gradient(to bottom right, white, #a6aad4)">
    <HomeBar />

    <div class="flexcenter" style="height: 100%">
      <IonCard class="signup-card">
        <IonGrid style="height: 100%; width: 100%; padding: 0">
          <IonRow style="height: 100%">
            <IonCol size="5.5" style="border-right: 1px solid black">
              <IonGrid>
                <IonRow>
                  <IonCol style="color: black">
                    <div class="flexcenter">Start Creating an Accounts</div>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput class="signup-inputs" fill="outline" labelPlacement="stacked"
                      placeholder="Enter valid email address" type="email" v-model="formData.email" required>
                      <div slot="label">Email <ion-text color="danger">*</ion-text></div>
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput class="signup-inputs" fill="outline" labelPlacement="stacked" placeholder="Enter Full Name"
                      v-model="formData.contactpn" required>
                      <div slot="label">Contact Person Name <ion-text color="danger">*</ion-text></div>
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput fill="outline" class="signup-inputs" labelPlacement="stacked"
                      placeholder="Enter Contact Number" type="number" v-model="formData.number" required>
                      <div slot="label">Contact Number<ion-text color="danger">*</ion-text></div>
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput fill="outline" class="signup-inputs" labelPlacement="stacked"
                      placeholder="Enter Business Name" v-model="formData.businessname" required>
                      <div slot="label">Registered Business Name<ion-text color="danger">*</ion-text></div>
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonSelect mode="md" placeholder="Select Type of Company" label-placement="stacked"
                      interface="popover" fill="outline" class="signup-inputs" v-model="formData.companytype" required>
                      <div slot="label">Company Type<ion-text color="danger">*</ion-text></div>
                      <IonSelectOption value="Government">Government</IonSelectOption>
                      <IonSelectOption value="Private">Private</IonSelectOption>
                      <IonSelectOption value="Manpower">Manpower</IonSelectOption>
                    </IonSelect>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonInput fill="outline" class="signup-inputs" labelPlacement="stacked" placeholder="Enter Password"
                      type="password" v-model="check" @input="checkpass" required>
                      <div slot="label">Password<ion-text color="danger">*</ion-text></div>
                    </IonInput>
                  </IonCol>
                </IonRow>
                <IonRow v-if="check">
                  <IonCol>
                    <IonText :style="{ color: passwordColor }">
                      Password: {{ valid }}
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol class="flexcenter">
                    <IonCheckbox v-model="formData.acceptTerms"></IonCheckbox>
                    <IonText class="signup-text-terms">
                      I have read and accept the
                      <a style="cursor: pointer" @click="modalTerms(true)">
                        terms and conditions</a>
                    </IonText>
                  </IonCol>
                </IonRow>
                <IonRow style="border-bottom: 1px solid black">
                  <IonCol>
                    <IonButton class="signup-buttons" expand="block" fill="outline" @click="submitForm"
                      style="color: black; --border-color: black">
                      SIGN-IN
                    </IonButton>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton class="signup-buttons" expand="block" @click="signInWithGoogle"
                      style="--background: #262c5c; color: white">
                      GOOGLE SIGN-IN
                    </IonButton>
                    <div class="flexcenter" style="font-size: 11px; padding-left: 5px">
                      Already have an Account?
                      <a href="/Logincomputer" class="signup-a">Log In</a> |
                      <a class="signup-a" style="color: red" href="/home">Cancel</a>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
            <IonCol size="6.5" class="flexcenter">
              <div>
                <div class="flexcenter" style="color: black; font-size: 15px;">
                  Business Permit
                </div>
                <div v-if="!imageUrl" style="
                  border: 1px solid black;
                  height: 200px;
                  margin: 10px;
                  width: 300px;
                "></div>
                <div v-if="imageUrl" class="flexcenter">
                  <img :src="imageUrl" alt="Selected Image" v-if="imageUrl" style="
                    border: 1px solid black;
                    height: 200px;
                    margin: 10px;
                    width: 300px;
                    object-fit: cover;
                  " />
                </div>
                <div class="flexcenter">
                  <input id="fileInput" type="file" accept="image/jpeg" @change="handleFileChange" ref="myfile"
                    style="display: none" /><ion-text color="danger">*</ion-text>
                  <label for="fileInput" class="modal-editposting-modal">
                    Insert Business Permit
                  </label>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    </div>

    <terms :is-termsmodal="isTerms" @close-terms-modal="modalTerms(false)"></terms>
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
  IonInput,
  IonText,
  IonCard,
  IonCheckbox,
  IonModal,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import "./SignUp.css";
import { GoRegister2, goBack, goTermsandCondition } from "./SignUp-Controller";
import { useSignupStore2 } from "@/stores/signupstore2";
import { Firestore } from "firebase/firestore";
import { checkifregisteredgoogle } from "./Employer-Model";
import router from "../router";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebaseDB";
import { GoEmployerDashboard } from "@/Login/Login-Controller";
import HomeBar from "../Home/Home-TopBar.vue";
import terms from "./Seeker-Terms.vue";
import { ref as asd, uploadBytes, getDownloadURL } from "firebase/storage";
import { dbImage, db } from "@/firebaseDB";
export default {
  components: {
    terms,
    IonButton,
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonText,
    IonCard,
    IonCheckbox,
    IonModal,
    IonSelect,
    IonSelectOption,
    HomeBar,
  },
  setup() {
    const signupStore2 = useSignupStore2();
    const formData = {
      email: "",
      contactpn: "",
      number: "",
      businessname: "",
      password: "",
      dateCreated: "",
      type: "",
      acceptTerms: false,
      companytype: "",
      businesspic: "",
    };
    return {
      formData,
      signupStore2,
    }
  },
  computed: {
    passwordColor() {
      return this.valid === 'VALID' ? 'green' : this.valid === 'NOT VALID' ? 'red' : 'black';
    },
  },
  data() {
    return {
      isTerms: false,
      imageUrl: null,
      selectedImage: null,
      thereisImage: false,
      check: null,
      valid: null,
    };
  },
  methods: {
    async submitForm() {
      const requiredFields = [
        "email",
        "contactpn",
        "number",
        "businessname",
        "password",
        "companytype",
      ];
      this.formData.password = this.check
      let isFormValid = true;

      let isImageSelected = false;
      if (this.selectedFile) {
        isImageSelected = true;
      }

      function isValidPassword(password) {
        // Customize your password validation rules here
        // For example, require at least 8 characters and a mix of letters, numbers, and symbols
        const passwordRegex =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passwordRegex.test(password);
      }
      function isValidnumber(number) {
        // For example, require at least 8 characters and a mix of letters, numbers, and symbols
        const numberRegex = /^(?:\+?63|0)[9][0-9]{9}$/;

        return numberRegex.test(number);
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
      if (!this.formData.acceptTerms) {
        isFormValid = false;
        alert("Accept the terms and conditions to continue.");
      }

      if (isFormValid) {
        try {
          if(isImageSelected){
            if (isValidnumber(this.formData.number)) {
              if (isValidPassword(this.formData.password)) {
                const credential = await createUserWithEmailAndPassword(
                  auth,
                  this.formData.email,
                  this.formData.password
                );
                console.log(credential.user);

                // await sendEmailVerification(credential.user);
                // alert('Verification email sent');

                if (this.selectedFile) {
                  // Upload the selected image to Firebase Storage
                  const storageRef = asd(
                    dbImage,
                    "businesspic/" + this.selectedFile.name
                  );
                  try {
                    await uploadBytes(storageRef, this.selectedFile);
                    // Get the download URL of the uploaded image
                    const downloadURL = await getDownloadURL(storageRef);
                    this.formData.businesspic = downloadURL;
                  } catch (error) {
                    console.error("Error uploading image:", error);
                    alert("Error uploading image. Please try again.");
                    return;
                  }
                }

                this.signupStore2.setFormData(this.formData);
                this.signupStore2.setjobdata({ swipedid: "" });
                this.signupStore2.setswipedata({ jobdid: "" });
                await this.signupStore2.registerUser();
                // localStorage.setItem("email", formData.email);
                router.push("/LoginComputer");
                alert(
                  "Succesfully Registered, Please Wait the System Admin to Approve your Account"
                );
              } else {
                alert(
                  "Invalid password. Password must require at least 8 characters and a mix of letters, numbers, and symbols."
                );
              }
            }
            else {
              alert("Number is not a valid Philippine Number")
            }
          }
          else{
            console.error("Please fill in all required fields.");
            alert("Please fill in all required fields");
          }
        } catch (error) {
          alert(error.message);
        }
      } else {
        alert("Fill all the Field to continue");
      }
    },
    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const email = user.email;
        const name = user.displayName;
        const isRegistered = await checkifregisteredgoogle(email);
        if (isRegistered) {
          // checks if google already signed in
          localStorage.setItem("email", email);
          GoEmployerDashboard();
        } else {
          // Email is not registered, proceed with registration.
          this.signupStore2.setGoogle(email, name);
          this.signupStore2.setjobdata({ swipedid: "" });
          this.signupStore2.setswipedata({ jobdid: "" });
          await this.signupStore2.registerUser();
          localStorage.setItem("email", email);
          GoEmployerDashboard();
        }
      } catch (error) {
        console.error("Google Sign-In Error:", error);
        alert(error);
      }
    },
    modalTerms(x) {
      this.isTerms = x;
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
    checkpass() {
      function isValidPassword(password) {
        // For example, require at least 8 characters and a mix of letters, numbers, and symbols
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        return passwordRegex.test(password);
      }
      if (isValidPassword(this.check)) {
        this.valid = "VALID"
      }
      else {
        this.valid = "NOT VALID"
      }
    },
  },
};
</script>

<style></style>
