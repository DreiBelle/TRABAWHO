<template>
    <IonPage class="Dashboard-Page" id="main-content-message">
        <IonHeader class="Dashboard-Header">
            <div name="header">
                <IonGrid>
                    <IonRow>
                        <IonCol class="Dashboard-FlexCenter" size=".5">
                            <IonMenuToggle>
                                <img class="Dashboard-HeaderButtons" src="../assets/logosample.jpg" alt="logo" />
                            </IonMenuToggle>
                        </IonCol>
                        <IonCol size=".5"> </IonCol>
                        <IonCol size="3"> </IonCol>
                        <IonCol class="Dashboard-FlexCenter" size="4">
                            <IonSearchbar style="height: 10px"> </IonSearchbar>
                        </IonCol>
                        <IonCol size="3"> </IonCol>
                        <IonCol class="Dashboard-FlexCenter Dashboard-Icon-Message" size=".5">
                            <IonIcon @click="GoEmployerMessage" :icon="chatboxEllipsesOutline">
                            </IonIcon>
                        </IonCol>
                        <IonCol class="Dashboard-FlexCenter" size=".5">
                            <img class="Dashboard-HeaderButtons" src="../assets/logosample.jpg" alt="profile"
                                @click="GoEmployerHome" />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        </IonHeader>

        <IonGrid class="EmployerMessage-Content">
            <IonRow class="EmployerMessage-Container">
                <IonCol size="2">
                    list of matched job seekers ready for communication
                </IonCol>
                <IonCol>
                    <ChatBar />
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonPage>

    <IonMenu content-id="main-content-message">
        <IonContent>
            <IonMenuToggle>
                <SideBar />
            </IonMenuToggle>
        </IonContent>
    </IonMenu>
</template>
<script lang="ts">
import { IonPage, IonHeader, IonGrid, IonRow, IonCol, IonSearchbar, IonMenuToggle, IonMenu, IonContent, IonIcon } from '@ionic/vue';
import { GoEmployerMessage, GoEmployerHome } from '@/Dashboard/Employer-Dashboard-Controller';
import ChatBar from './Employer-Chatbar.vue'
import SideBar from '@/Dashboard/Employer-Sidebar.vue'
import "../Dashboard/Employer-Dashboard.css"
import "./Seeker-Message.css"
import { chatboxEllipsesOutline } from 'ionicons/icons'

export default {
    components: { IonPage, IonHeader, IonGrid, IonRow, IonCol, IonSearchbar, IonMenuToggle, IonMenu, IonContent, SideBar, ChatBar, IonIcon },
    methods: {
        GoEmployerMessage,
        GoEmployerHome,
    },
    setup() {
        return {
            chatboxEllipsesOutline
        }
    }
}
</script>

<style>
/* ion-col {
    border: 1px solid black;
} */
</style>