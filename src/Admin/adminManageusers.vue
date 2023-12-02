<template>
    <div style="padding: 10px; padding-bottom: 2px;">
        <div class="flexcenter">
            <div class="flexcenter" style="width: 60%;">
                <IonSegment mode="ios" color="light" class="page-jobposting-segments" value="Pending">
                    <IonSegmentButton class="page-jobposting-segments-buttons" @click="ShowTabs('Pending')" value="Pending">
                        <IonLabel class="label"> Pending </IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton class="page-jobposting-segments-buttons" @click="ShowTabs('Approved')"
                        value="Approved">
                        <IonLabel class="label"> Approved </IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </div>
            <div class="flexcenter">
                <IonButton style="--background: #262c5c; height: 35px; min-height: 0px;" @click="adduserModal(true)"
                    class="admin-adduser">Add Employer</IonButton>
            </div>
            <div class="flexcenter">
                <IonButton style="--background: #262c5c; height: 35px; min-height: 0px;" @click="adduserModal2(true)"
                    class="admin-adduser">Add Jobseeker</IonButton>
            </div>
        </div>
    </div>
    <div class="flexcenter">
        <IonSearchbar class="dashboard-navbar-topbar-searchbar" v-model="searchTerm"></IonSearchbar>
        <IonIcon @click="filterModal(true)" class="admin-manageuser-icons admin-manageuser-icons-filter" :icon="filter">
        </IonIcon>
    </div>

    <div style="height: 80%;">
        <IonContent class="custom-scrollbar">
            <div v-if="Views == 'Approved'">
                <approved :search-term="searchTerm" :filtertype="filtertype"></approved>
            </div>
            <div v-else-if="Views == 'Pending'">
                <pending :search-term="searchTerm" :filtertype="filtertype"></pending>
            </div>
        </IonContent>
    </div>

    <IonModal :is-open="isfilterModal" @did-dismiss="filterModal(false)" style="--width: 40%; --height: 60%;">
        <div>
            <div class="flexcenter">
                <IonText class="admin-manageuser-text admin-manageuser-filter-title">
                    FILTER
                </IonText>
            </div>
            <div>
                <IonSelect class="admin-manageuser-filter-select" label="User Type" interface="popover"
                    labelPlacement="stacked" fill="outline" v-model="filtertype" required>
                    <IonSelectOption value="">
                        Show All
                    </IonSelectOption>
                    <IonSelectOption value="employer">
                        Employer
                    </IonSelectOption>
                    <IonSelectOption value="jobseeker">
                        Job-Seeker
                    </IonSelectOption>
                </IonSelect>
            </div>
            <div class="flexcenter">
                <IonButton @click="applyFilter" class="admin-manageuser-filter-button">DONE</IonButton>
            </div>
        </div>
    </IonModal>
    <adduser :is-addmodal="isaddUser" @close-add-modal="adduserModal(false)"></adduser>
    <useradd :is-addmodal2="isaddUser2" @close-add-modal2="adduserModal2(false)"></useradd>
</template>
<script lang="ts">
import { IonCard, IonContent, IonList, IonSearchbar, IonPage, IonGrid, IonRow, IonCol, IonIcon, IonText, IonModal, IonSelect, IonSelectOption, IonButton, IonCardSubtitle, IonCardTitle, IonSegment, IonSegmentButton, IonLabel } from '@ionic/vue';
import './admin.css'
import { chevronForward, filter } from 'ionicons/icons';
import approved from './admin-approved.vue'
import pending from './admin-pending.vue'
import adduser from './adminModal-AddUser.vue';
import useradd from './adminModal-Addjobseeker.vue';

export default {
    components: { approved, pending, IonPage, IonSearchbar, IonList, IonCard, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonText, IonModal, IonSelect, IonSelectOption, IonButton, IonCardSubtitle, IonCardTitle, IonSegment, IonSegmentButton, IonLabel, adduser, useradd },
    data() {
        return {
            users: [],
            currentUser: [],
            searchTerm: "",
            filtertype: "",
            isfilterModal: false,
            approved: "",
            pending: "",
            Views: "Pending",
            isaddUser: false,
            isaddUser2: false,
        }
    },
    setup() {
        return {
            filter,
            chevronForward,
        }
    },
    methods: {
        adduserModal(x) {
            this.isaddUser = x
        },
        adduserModal2(x) {
            this.isaddUser2 = x
        },
        ShowTabs(View) {
            this.Views = View;
        },
        filterModal(x) {
            this.isfilterModal = x
        },
        applyFilter() {
            console.log(this.filtertype)
            this.filterModal(false)

            this.users.filter((user) => {
                return user.type.toLowerCase().includes(this.filtertype)
            })
        }
    },
}
</script>

<style>
/* ion-col {
    border: 1px solid black;
} */
</style>
