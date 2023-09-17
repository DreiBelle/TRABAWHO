<template>
    <RouterView></RouterView>
    <IonGrid class="dashboard-navbar-container">
        <IonRow>
            <IonCol class="dashboard-navbar-logo">
                logo
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol class="dashboard-navbar-flexcenter dashboard-navbar-cols">
                <IonIcon class="dashboard-navbar-icons" :icon="home"></IonIcon>
                <IonText class="dashboard-navbar-navigations">Home</IonText>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol class="dashboard-navbar-flexcenter dashboard-navbar-cols">
                <IonIcon class="dashboard-navbar-icons" :icon="home"></IonIcon>
                <IonText class="dashboard-navbar-navigations">Profile</IonText>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol class="dashboard-navbar-flexcenter dashboard-navbar-cols">
                <IonIcon class="dashboard-navbar-icons" :icon="home"></IonIcon>
                <IonText class="dashboard-navbar-navigations">Job Postings</IonText>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol class="dashboard-navbar-flexcenter dashboard-navbar-cols">
                <IonIcon class="dashboard-navbar-icons" :icon="home"></IonIcon>
                <IonText class="dashboard-navbar-navigations">Data Analytics</IonText>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol class="dashboard-navbar-flexcenter dashboard-navbar-cols">
                <IonIcon class="dashboard-navbar-icons" :icon="home"></IonIcon>
                <IonText class="dashboard-navbar-navigations">Notification</IonText>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol class="dashboard-navbar-flexcenter dashboard-navbar-cols" style="position: absolute; bottom: 10px;">
                <IonIcon class="dashboard-navbar-icons" :icon="home"></IonIcon>
                <IonText class="dashboard-navbar-navigations">Logout</IonText>
            </IonCol>
        </IonRow>
    </IonGrid>
</template>
<script lang="ts">
import { IonButton, IonCol, IonGrid, IonPage, IonRow, IonRouterOutlet, IonIcon, IonText } from '@ionic/vue';
import { home } from "ionicons/icons"
import "./Employer-Dashboard.css"
export default {
    components: { IonCol, IonGrid, IonPage, IonRow, IonRouterOutlet, IonIcon, IonText },
    setup() {
        return {
            home
        }
    }
}
</script>
<style>
ion-col {
    border: 1px solid black;
}
</style>