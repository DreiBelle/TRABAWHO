<template>
    <IonModal :is-open="isViewmodal" @did-dismiss="closeModal" style="--border-radius: 20px">
        <div v-for="job in jobs" style="height: 100%">
            <IonContent>
                <IonHeader class="flexcenter admin-view-modal-header">{{ passId }}
                    <div style="z-index: 1; position: absolute; right: 20px">
                        <IonIcon class="admin-pointer" @click="editjobModal(true, passId)" :icon="pencil"
                            style="margin-right: 30px;"></IonIcon>
                        <IonIcon @click="deletejob(passId)" class="admin-pointer" :icon="trash" style="margin-right: 30px;">
                        </IonIcon>
                        <IonIcon @click="closeModal" class="admin-pointer" :icon="close"></IonIcon>
                    </div>
                </IonHeader>
                <div style="padding: 10px">
                    <div class="admin-view-modal-topProfile">
                        <div>
                            <IonAvatar class="admin-view-modal-avatar" v-if="job.pic">
                                <img :src="job.pic" alt="image" />
                            </IonAvatar>
                            <IonAvatar class="admin-view-modal-avatar" v-else-if="!job.pic">
                                <img :src="job.pic" alt="image" />
                            </IonAvatar>
                        </div>

                        <div class="admin-view-top-info-text-container"></div>

                        <div>
                            <div class="admin-padding-text">
                                <IonText class="admin-view-top-info-text">
                                    <b>Name: </b> {{ job.jobname }}
                                </IonText>
                            </div>
                            <div class="admin-padding-text">
                                <IonText class="admin-view-top-info-text"><b>Type: </b> {{ job.jobtype }}</IonText>
                            </div>
                            <div class="admin-padding-text">
                                <IonText class="admin-view-top-info-text"><b>Position Level: </b> {{ job.positionlvl }}
                                </IonText>
                            </div>
                        </div>
                    </div>
                    <div class="flexcenter">
                        <IonCard class="admin-modal-view-cards">
                            <div>
                                <div style="justify-content: left;">
                                    <IonContent style="height: 200px;" class="custom-scrollbar">
                                        <IonText class="flexcenter" style="font-size: 20px; font-weight: bold">Job
                                            Information
                                        </IonText>
                                        <IonText>
                                            <p><b>Salary: </b>{{ job.salary }}</p>
                                            <p><b>Hours of Work: </b>{{ job.hours }}</p>
                                            <p><b>Job Description: </b>{{ job.jobdes }}</p>
                                            <p><b>Work Location: </b>{{ job.province }}, {{ job.citown }}, {{ job.district
                                            }},
                                                {{ job.street }}</p>
                                        </IonText>
                                    </IonContent>
                                </div>
                            </div>
                        </IonCard>
                        <IonCard class="admin-modal-view-cards">
                            <div>
                                <div>
                                    <IonText class="flexcenter" style="font-size: 20px; font-weight: bold">Requirements
                                    </IonText>
                                    <IonText>
                                        <p><b>No of Employee: </b>{{ job.noofempl }}</p>
                                        <p><b>Age: </b>{{ job.age }}</p>
                                        <p><b>Years of Experience: </b>{{ job.yearsofexp }}</p>
                                        <p><b>Required Education: </b>{{ job.reqeduc }}</p>
                                        <p v-if="job.masteral">
                                            <b>Masteral: </b>{{ job.masteral }}
                                        </p>
                                    </IonText>
                                </div>
                            </div>
                        </IonCard>
                    </div>
                    <div class="flexcenter">
                        <IonCard class="admin-modal-view-cards" style="height: fit-content">
                            <div>
                                <div style="justify-content: left">
                                    <IonText class="flexcenter" style="font-size: 20px; font-weight: bold">Specialized
                                    </IonText>
                                    <IonText>
                                        <p><b>Classification: </b>{{ job.classification }}</p>
                                        <p>
                                            <b>Sub-Classification: </b>{{ job.subclassification }}
                                        </p>
                                        <p>
                                            <b>Chosen Interest: </b>
                                            <IonChip v-for="chose in job.chosenInterests">{{ chose }}</IonChip>
                                        </p>
                                    </IonText>
                                </div>
                                <IonButton v-if="job.isactive == 'activate'" @click="dactivate(passId)">Deactivate
                                </IonButton>
                                <IonButton v-if="job.isactive == 'notactivate'" @click="activate(passId)">Activate
                                </IonButton>
                            </div>
                        </IonCard>
                    </div>
                </div>
            </IonContent>
        </div>
    </IonModal>
    <editjob :pass-id="passID" :is-edit-modal="iseditJob" @close-edit-modal="editjobModal(false, '')"></editjob>
</template>
<script lang="ts">
import {
    IonAvatar,
    IonCard,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonModal,
    IonText,
    IonButton,
} from "@ionic/vue";
import { db } from "@/firebaseDB";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { arrowForwardOutline, close, pencil, trash } from "ionicons/icons";
import { aprooveUserStore } from "@/stores/approve"
import { ref } from "vue";
import editjob from '@/Admin/adminModal-Editjob.vue'
export default {
    emits: ['close-view-modal'],
    components: {
        IonModal,
        IonAvatar,
        IonText,
        IonHeader,
        IonCard,
        IonContent,
        IonIcon,
        IonChip,
        IonButton,
        editjob,
    },
    data() {
        return {
            passID: "",
            jobs: [],
            iseditJob: false,
        };
    },
    setup() {
        return {
            close,
            pencil,
            trash,
        };
    },
    props: {
        isViewmodal: {
            required: true,
            type: Boolean,
        },
        passId: {
            required: true,
            type: String,
        },
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
    methods: {
        editjobModal(x, id) {
            this.iseditJob = x
            this.passID = id
        },
        closeModal() {
            this.$emit("close-view-modal");
        },
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
        async deletejob(id) {
            const jobPostRef = doc(db, 'jobpost', id);
            await updateDoc(jobPostRef, {
                isactive: "Removed"
            });
            console.log("Job post deleted successfully!");
            alert("Job post deleted successfully!")
            this.closeModal();
        },
        async dactivate(id) {
            const jobPostRef = doc(db, 'jobpost', id);
            await updateDoc(jobPostRef, {
                isactive: "notactivate"
            });
            console.log("Job post deactivate successfully!");
            alert("Job post deactivate successfully!")
            this.closeModal();
        },
        async activate(id) {
            const jobPostRef = doc(db, 'jobpost', id);
            await updateDoc(jobPostRef, {
                isactive: "activate"
            });
            console.log("Job post activate successfully!");
            this.closeModal();
        },
    },
};
</script>
  