<template>
    <IonModal style="--height: 90%; --border-radius: 20px;" :is-open="isLikesmodal" @did-dismiss="closeLikesmodal">
        <div>
            <div style="background-color: #262c5c; height: 40px;" class="flexcenter">
                <IonText style="color: white; font-family: ;">LIKES</IonText>
            </div>
            <IonCard v-for="like in likes" style="height: 50px; padding: 0; justify-content: left;" class="flexcenter">
                <div>
                    <IonAvatar class="flexcenter">
                        <img style="height: 40px; width: 40px; object-fit: cover;" :src="like.data.pic" alt="pic">
                    </IonAvatar>
                </div>
                <div>
                    <div>
                        <IonText style="color: black; font-size: 15px;">{{ like.data.name }}</IonText>
                    </div>
                    <div>
                        <IonText>{{ formattedDate(like.data.dateCreated) }}</IonText>
                    </div>
                </div>
            </IonCard>

            <IonButton expand="block" style="margin: 10px; --background: #262c5c ;">
                Print All
            </IonButton>
        </div>
    </IonModal>
</template>
<script lang="ts">
import { IonAvatar, IonButton, IonCard, IonModal, IonText } from '@ionic/vue';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebaseDB";
import {
    getDashboardProfile,
    getJobPostings,
    getSwipedpostings,
    getswiperProfile,
} from "../Dashboard-Model";

export default {
    components: { IonModal, IonCard, IonText, IonAvatar, IonButton },
    props: {
        isLikesmodal: {
            type: Boolean,
            required: true,
        },
        jobPosting: {
            type: Object,
        },
    },
    data() {
        return {
            user: "",
            userEmail: localStorage.getItem("email"),
            likes: [],
        }
    },
    methods: {
        formattedDate(timestamp) {
            const date = new Date(timestamp);
            const month = date.toLocaleString("en-US", { month: "long" });
            const day = date.getDate();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? "PM" : "AM";

            const formattedHours = hours % 12 || 12;

            const formattedMinutes = minutes.toString().padStart(2, "0");

            return `${month} ${day}, ${year} | ${formattedHours}:${formattedMinutes} ${ampm}`;
        },
        closeLikesmodal() {
            this.$emit("close-likes-modal")
        },
        async getLikes() {
            this.user = await getDashboardProfile(this.userEmail);
            console.log(this.user.id)
            console.log(this.jobPosting.documentID)
            const q = query(
                collection(db, "likes"),
                where("creator", "==", this.user.id),
                where("job", "==", this.jobPosting.documentID),
            );

            const unsubscribe = onSnapshot(q, (snapshot) => {
                this.chats = []; // Clear existing data

                snapshot.forEach((doc) => {
                    this.likes.push({
                        id: doc.id,
                        data: doc.data(),
                    });
                });
            });
        },
    },
    mounted() {
        this.getLikes();
    }
}
</script>