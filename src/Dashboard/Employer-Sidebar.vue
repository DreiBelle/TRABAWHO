<template>
    <IonGrid>
        <IonRow>
            <IonCol>
                <IonButton @click="handleSignout()">
                    Logout
                </IonButton>
            </IonCol>
        </IonRow>
    </IonGrid>
</template>
<script lang="ts">
import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/vue';
import router from "../router"
import { GoHome } from './Employer-Dashboard-Controller';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebaseDB";
import { ref, onMounted } from "vue";
const isLoggedIn = ref(false);
export default {
    components: { IonGrid, IonRow, IonCol, IonButton },
    setup() {
        onMounted(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    isLoggedIn.value = true;
                } else {
                    isLoggedIn.value = false;
                }
            });
        });
    },
    methods: {
        handleSignout() {
            signOut(auth).then(() => {
                localStorage.removeItem("email");
                localStorage.removeItem("password");
                GoHome();
            })
        },
    }
}
</script>
<style lang="">
    
</style>