<template>
    <IonGrid>
        <IonRow>
            <IonCol>
                <IonButton class="Seeker-Profile-Button-LogOut" @click="logout" expand="block" fill="outline">Logout</IonButton>
            </IonCol>
        </IonRow>
    </IonGrid>
</template>
<script lang="ts">
import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/vue';
import { GoLogin } from './Profile-Controller';

export default {
    components: { IonGrid, IonRow, IonCol, IonButton },
    methods: {
        logout() {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            GoLogin()
        }
    }
}
</script>
<style lang="">
    
</style>