<template>
    <IonModal :is-open="isViewmodal" @did-dismiss="closeModal" style="--border-radius: 20px; ">
        <div v-for="user in users">
            <IonHeader class="flexcenter admin-view-modal-header">{{ user.fullname }} {{ user.businessname }}</IonHeader>
            <div v-if="user.type == 'jobseeker'" style="padding: 10px;">
                <div class="admin-view-modal-topProfile" >
                    <div>
                        <IonAvatar class="admin-view-modal-avatar" v-if="user.pic">
                            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="image" />
                        </IonAvatar>
                    </div>

                    <div class="admin-view-top-info-text-container">

                    </div>

                    <div>
                        <div class="admin-padding-text">
                            <IonText class="admin-view-top-info-text"> <b>Name: </b> {{ user.fullname }}</IonText>
                        </div>
                        <div class="admin-padding-text">
                            <IonText class="admin-view-top-info-text"><b>Type: </b> {{ user.type }}</IonText>
                        </div>
                        <div class="admin-padding-text">
                            <IonText class="admin-view-top-info-text"><b>Contact No.: </b> {{ user.contactno }}</IonText>
                        </div>
                    </div>
                </div>
                <div class="flexcenter">
                    <IonCard>
                        asd
                    </IonCard>
                </div>
            </div>
            <div class="flexcenter" v-if="user.type == 'employer'">
                <!-- <IonAvatar v-if="user.pic">
                    <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="image" />
                </IonAvatar>

                <div>
                    {{ user.fullname }}
                </div> -->
                b
            </div>
        </div>
    </IonModal>
</template>
<script lang="ts">
import { IonAvatar, IonCard, IonHeader, IonModal, IonText } from '@ionic/vue';
import { db } from "@/firebaseDB";
import { doc, getDoc } from "firebase/firestore";

export default {
    components: { IonModal, IonAvatar, IonText, IonHeader, IonCard },
    data() {
        return {
            users: [],
        }
    },
    props: {
        isViewmodal: {
            required: true,
            type: Boolean,
        },
        passId: {
            required: true,
            type: String,
        }
    },
    watch: {
        passId: function (value) {
            if (value) {
                this.getDetails()
            } else {
                this.users = []
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit("close-view-modal")
        },
        async getDetails() {
            const docRef = doc(db, "users", this.passId)
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                this.users.push(docSnap.data())
                console.log("Document data:", this.users);
            } else {
                console.log("No such document!");
            }
        }
    },
}
</script>