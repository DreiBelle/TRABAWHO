<template>
    <div>
        <IonPage style="background-color: rgb(236, 228, 228);">
            <IonGrid style="height: 10%; width: 100%; padding: 0px 0px 0px 250px">
                <IonRow style="height: 30px; background: #202651;">
                    <IonCol>
                        <IonText style="color: white; justify-content: right; display: flex;">
                            Welcome Back Admin!
                            <IonIcon style="padding-left: 5px;" :icon="personOutline"></IonIcon>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow style="height: 20%; padding-top: 10px;">
                    <IonCol class="flexcenter">
                        <IonCard class="dashboard-minidataanalytics-card"> likes </IonCard>
                    </IonCol>
                    <IonCol class="flexcenter">
                        <IonCard class="dashboard-minidataanalytics-card"> views </IonCard>
                    </IonCol>
                    <IonCol class="flexcenter">
                        <IonCard class="dashboard-minidataanalytics-card">
                            bookmarks
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow class="page-components-container">
                    <IonCol class="flexcenter">
                        <IonCard style="height: 100%; width: 100%; background-color: azure;">
                            <component :is="isView" />
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

            <IonGrid class="dashboard-navbar-container">
                <IonRow>
                    <IonCol class="dashboard-navbar-flexcenter dashboard-navbar-cols" style="height: 70px">
                        <img class="dashboard-navbar-logo" src="../assets/logo/whitefilllogo.png" alt="logo" />
                        <p style="justify-content: end" class="dashboard-navbar-text-trabawho">
                            TRABAWHO
                        </p>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol @click="ShowTabs('Home')" class="dashboard-navbar-flexcenter dashboard-navbar-cols">
                        <IonIcon class="dashboard-navbar-icons" :icon="home"></IonIcon>
                        <IonText class="dashboard-navbar-navigations">Home</IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol @click="ShowTabs('ManageUsers')" class="dashboard-navbar-flexcenter dashboard-navbar-cols">
                        <IonIcon class="dashboard-navbar-icons" :icon="people"></IonIcon>
                        <IonText class="dashboard-navbar-navigations">Manage Users</IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol @click="ShowTabs('ManagePostings')" class="dashboard-navbar-flexcenter dashboard-navbar-cols">
                        <IonIcon class="dashboard-navbar-icons" :icon="briefcase"></IonIcon>
                        <IonText class="dashboard-navbar-navigations">Manage Job Postings</IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol @click="ShowTabs('Statistics')" class="dashboard-navbar-flexcenter dashboard-navbar-cols">
                        <IonIcon class="dashboard-navbar-icons" :icon="statsChart"></IonIcon>
                        <IonText class="dashboard-navbar-navigations">Statistics</IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol @click="handleSignout" class="dashboard-navbar-flexcenter dashboard-navbar-cols"
                        style="position: absolute; bottom: 10px">
                        <IonIcon class="dashboard-navbar-icons" :icon="logOutOutline"></IonIcon>
                        <IonText class="dashboard-navbar-navigations">Logout</IonText>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonPage>
    </div>
</template>
<script lang="ts">
import { IonContent, IonPage, IonRow, IonGrid, IonCol, IonIcon, IonText, IonCard } from '@ionic/vue'
import "../Dashboard/Employer-Dashboard.css";
import { personOutline, home, people, briefcase, statsChart, logOutOutline } from 'ionicons/icons'
import { ref, onMounted } from "vue";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebaseDB";
import { GoHome } from "../Dashboard/Employer-Dashboard-Controller";
import { getDashboardProfile } from "../Dashboard/Dashboard-Model";
import Home from './adminHome.vue';
import ManageUsers from './adminManageusers.vue';
import ManagePostings from './adminManagejobpostings.vue';
import Statistics from './adminStatistics.vue';


const isLoggedIn = ref(false);

export default {
    components: { Home, ManageUsers, ManagePostings, Statistics, IonPage, IonContent, IonRow, IonGrid, IonCol, IonIcon, IonText, IonCard },
    setup() {
        const user = ref(null);

        onMounted(async () => {
            const userEmail = localStorage.getItem("email");
            user.value = await getDashboardProfile(userEmail);

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    isLoggedIn.value = true;
                } else {
                    isLoggedIn.value = false;
                }
            });
        });
        return {
            personOutline, home, people, briefcase, statsChart, user, logOutOutline
        }
    },
    data() {
        return {
            isView: "Home",
        }
    },
    methods: {
        handleSignout() {
            signOut(auth).then(() => {
                localStorage.removeItem("email");
                localStorage.removeItem("password");
                GoHome();
            });
        },
        ShowTabs(View) {
            this.isView = View;
        },
    },
}
</script>