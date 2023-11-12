<template>
    <IonPage>
        <IonContent>
            <IonCard v-for="Log in Logs">
                {{ Log.data.Action }}
            </IonCard>
        </IonContent>
    </IonPage>
</template>
<script lang="ts">
import { IonCard, IonContent, IonPage } from '@ionic/vue';
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebaseDB";

export default {
    components: { IonPage, IonContent, IonCard },
    data() {
        return {
            Logs: [],
            loggedUser: localStorage.getItem("email")
        }
    },
    methods: {
        getAudits() {
            const q = query(
                collection(db, "Logs"),
                where("EmployerEmail", "==", this.loggedUser),
            );
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                this.Logs = [];
                querySnapshot.forEach((doc) => {
                    this.Logs.push({ id: doc.id, data: doc.data() });
                });
            });
        },
    },
    mounted(){
        this.getAudits()
    }
}
</script>