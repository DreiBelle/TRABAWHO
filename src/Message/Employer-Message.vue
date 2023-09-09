<template>
    <IonPage class="Dashboard-Page" id="main-content">
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
                        <IonCol class="Dashboard-FlexCenter" size=".5">
                            <img class="Dashboard-HeaderButtons" style="border-radius: 0px" src="../assets/message.png"
                                alt="message button" @click="GoEmployerMessage" />
                        </IonCol>
                        <IonCol class="Dashboard-FlexCenter" size=".5">
                            <img @click="GoEmployerHome" class="Dashboard-HeaderButtons" src="../assets/logosample.jpg"
                                alt="profile" />
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

    <IonMenu content-id="main-content">
        <IonContent>
            <IonMenuToggle>
                <SideBar />
            </IonMenuToggle>
        </IonContent>
    </IonMenu>
</template>
<script lang="ts">
import { IonPage, IonHeader, IonGrid, IonRow, IonCol, IonSearchbar, IonMenuToggle, IonMenu, IonContent } from '@ionic/vue';
import { GoEmployerMessage, GoEmployerHome } from '@/Dashboard/Employer-Dashboard-Controller';
import ChatBar from './Employer-Chatbar.vue'
import SideBar from '@/Dashboard/Employer-Sidebar.vue'
import "../Dashboard/Employer-Dashboard.css"
import "./Seeker-Message.css"
export default {
    components: { IonPage, IonHeader, IonGrid, IonRow, IonCol, IonSearchbar, IonMenuToggle, IonMenu, IonContent, SideBar, ChatBar },
    methods: {
        GoEmployerMessage,
        GoEmployerHome,
    }
}
</script>

<style>
ion-col {
    border: 1px solid black;
}
</style>