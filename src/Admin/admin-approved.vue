<template>
    <div class="admin-manageuser-cards-container">
        <IonCard @click="viewuserModal(true, user.id)" v-for="user in filteredSearch"
            class="admin-pointer admin-user-cards">
            <div class="admin-user-cards-picture">
                <img class="admin-manageuser-picture" v-if="user.pic" :src="user.pic" alt="picture">
                <img class="admin-manageuser-picture" v-if="!user.pic"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="picture">
            </div>
            <div class="flexcenter" style="height: 40%;">
                <div>
                    <div style="margin: 5px;">
                        <IonText class="admin-manageuser-text" v-if="user.businessname">
                            <b>Name:</b> {{ user.businessname }}
                        </IonText>
                        <IonText class="admin-manageuser-text" v-if="user.fullname">
                            <b>Name:</b> {{ user.fullname }}
                        </IonText>
                    </div>
                    <div style="margin: 5px;">
                        <IonText class="admin-manageuser-text">
                            <b>Type:</b> {{ user.type }}
                        </IonText>

                    </div>
                    <div style="margin: 5px;">
                        <IonText class="admin-manageuser-text">
                            <b>Date Created:</b> {{ user.dateCreated }}
                        </IonText>
                    </div>
                </div>
            </div>
        </IonCard>
    </div>

    <viewUser :pass-id="passID" :is-viewmodal="isviewUser" @close-view-modal="viewuserModal(false, '')"></viewUser>
</template>
<script lang="ts">
import { IonCard, IonText } from '@ionic/vue';
import viewUser from './adminModal-ViewUser.vue'
import {
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    where,
    limit,
    orderBy,
} from "firebase/firestore";
import { db } from "@/firebaseDB";

export default {
    components: { IonCard, IonText, viewUser },
    data() {
        return {
            isviewUser: false,
            passID: "",
            users: [],
        }
    },
    props: {
        searchTerm: {
            required: true,
            type: String,
        },
        filtertype: {
            required: true,
            type: String,
        }
    },
    methods: {
        viewuserModal(x, id) {
            this.isviewUser = x
            this.passID = id
        },
    },
    computed: {
        filteredSearch() {
            return this.users.filter((user) => {
                const searchTermLower = this.searchTerm.toLowerCase();
                if (this.filtertype) {
                    if (this.searchTerm) {
                        if (user.fullname) {
                            return user.fullname.toLowerCase().includes(searchTermLower) && user.type.toLowerCase().includes(this.filtertype)
                        }
                        else if (user.businessname) {
                            return user.businessname.toLowerCase().includes(searchTermLower) && user.type.toLowerCase().includes(this.filtertype)
                        }
                    } else {
                        if (user.fullname) {
                            return user.fullname.toLowerCase().includes(searchTermLower) && user.type.toLowerCase().includes(this.filtertype)
                        }
                        else if (user.businessname) {
                            return user.businessname.toLowerCase().includes(searchTermLower) && user.type.toLowerCase().includes(this.filtertype)
                        }
                    }
                } else {
                    if (this.searchTerm) {
                        if (user.fullname) {
                            return user.fullname.toLowerCase().includes(searchTermLower) && user.type.toLowerCase().includes(this.filtertype)
                        } else if (user.businessname) {
                            return user.businessname.toLowerCase().includes(searchTermLower) && user.type.toLowerCase().includes(this.filtertype)
                        }
                    } else {
                        return user.type.toLowerCase().includes(this.filtertype)
                    }
                }
            });
        },
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
}
</script>
<style lang="">
    
</style>