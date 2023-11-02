<template>
    <div class="flexcenter">
        <IonSearchbar class="dashboard-navbar-topbar-searchbar" v-model="searchTerm"></IonSearchbar>
        <IonIcon @click="filterModal(true)" class="admin-manageuser-icons admin-manageuser-icons-filter" :icon="filter">
        </IonIcon>
    </div>
    <div style="height: 90%;">
        <IonContent class="custom-scrollbar">
            <div class="admin-manageuser-cards-container">
                <IonCard v-for="user in filteredSearch" class="flexcenter admin-manageuser-card"
                    @click="viewuserModal(true, user.id)">
                    <IonGrid style="height: 100%; padding: 0;">
                        <IonRow style="height: 100%;">
                            <IonCol size="2" style="padding: 0;">
                                <img class="admin-manageuser-picture" v-if="user.pic" :src="user.pic" alt="picture">
                                <img class="admin-manageuser-picture" v-if="!user.pic"
                                    src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="picture">
                            </IonCol>
                            <IonCol size="9.3">
                                <IonRow style="height: 33%;">
                                    <IonCol class="admin-manageuser-borderbottom" style="border-top: 1px solid grey;">
                                        <IonText class="admin-manageuser-text" v-if="user.businessname">
                                            <b>Name:</b> {{ user.businessname }}
                                        </IonText>
                                        <IonText class="admin-manageuser-text" v-if="user.fullname">
                                            <b>Name:</b> {{ user.fullname }}
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                                <IonRow style="height: 33%;">
                                    <IonCol class="admin-manageuser-borderbottom">
                                        <IonText class="admin-manageuser-text">
                                            <b>Type:</b> {{ user.type }}
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                                <IonRow style="height: 33%;">
                                    <IonCol class="admin-manageuser-borderbottom">
                                        <IonText class="admin-manageuser-text">
                                            <b>Date Created:</b> {{ user.dateCreated }}
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                            <IonCol size=".7" class="flexcenter admin-manageuser-icons admin-manageuser-open">
                                <IonIcon :icon="chevronForward">

                                </IonIcon>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
            </div>
        </IonContent>
    </div>

    <IonModal :is-open="isviewUser" @did-dismiss="viewuserModal(false, '')"></IonModal>

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
</template>
<script lang="ts">
import { IonCard, IonContent, IonList, IonSearchbar, IonPage, IonGrid, IonRow, IonCol, IonIcon, IonText, IonModal, IonSelect, IonSelectOption, IonButton } from '@ionic/vue';
import './admin.css'
import { chevronForward, filter } from 'ionicons/icons';
import {
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    where,
    limit,
    orderBy,
    deleteDoc,
    getDoc,
    doc,
} from "firebase/firestore";
import { db } from "@/firebaseDB";

export default {
    components: { IonPage, IonSearchbar, IonList, IonCard, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonText, IonModal, IonSelect, IonSelectOption, IonButton },
    data() {
        return {
            users: [],
            currentUser: [],
            searchTerm: "",
            filtertype: "",
            isfilterModal: false,
            isviewUser: false,
        }
    },
    setup() {
        return {
            filter,
            chevronForward,
        }
    },
    mounted() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }

        const q = query(
            collection(db, "users"),
            orderBy("dateCreated", "asc"),
        );

        this.unsubscribe = onSnapshot(q, (snapshot) => {
            const getUsers = [];
            snapshot.forEach((doc) => {
                const userData = doc.data();
                const userId = doc.id;
                const userWithId = {
                    id: userId,
                    ...userData,
                };
                getUsers.push(userWithId);
            });
            this.users = getUsers;
        });
    },
    methods: {
        filterModal(x) {
            this.isfilterModal = x
        },
        viewuserModal(x, id) {
            this.isviewUser = x
        },
        applyFilter() {
            console.log(this.filtertype)
            this.filterModal(false)

            this.users.filter((user) => {
                return user.type.toLowerCase().includes(this.filtertype)
            })
        }
    },
    computed: {
        filteredSearch() {
            return this.users.filter((user) => {
                const searchTermLower = this.searchTerm.toLowerCase();
                if (this.filtertype) {
                    if (!this.searchTerm) {
                        return user.type.toLowerCase().includes(this.filtertype);
                    } else if (this.searchTerm) {
                        if (user.fullname) {
                            return user.dateCreated.toLowerCase().includes(searchTermLower) || user.type.toLowerCase().includes(searchTermLower) || user.fullname.toLowerCase().includes(searchTermLower);
                        } else if (user.businessname) {
                            return user.dateCreated.toLowerCase().includes(searchTermLower) || user.type.toLowerCase().includes(searchTermLower) || user.businessname.toLowerCase().includes(searchTermLower);
                        } else {
                            return user.dateCreated.toLowerCase().includes(searchTermLower) || user.type.toLowerCase().includes(searchTermLower)
                        }
                    }
                } else if (!this.filtertype) {
                    if (user.fullname) {
                        return user.dateCreated.toLowerCase().includes(searchTermLower) || user.type.toLowerCase().includes(searchTermLower) || user.fullname.toLowerCase().includes(searchTermLower);
                    } else if (user.businessname) {
                        return user.dateCreated.toLowerCase().includes(searchTermLower) || user.type.toLowerCase().includes(searchTermLower) || user.businessname.toLowerCase().includes(searchTermLower);
                    } else {
                        return user.dateCreated.toLowerCase().includes(searchTermLower) || user.type.toLowerCase().includes(searchTermLower)
                    }
                }
            });
        },
    },
}
</script>

<style>
/* ion-col {
    border: 1px solid black;
} */
</style>
