<template>
    <IonPage class="dashboard-home-Container">
        <IonContent>
            <div class="dashboard-home-contents-container">
                <IonGrid style="height: 100%; width: 100%;">
                    <IonRow>
                        <IonCol>
                            <JobPostings />
                            <IonIcon id="open-modal" class="Dashboard-Card-JobPosting" :icon="addCircleOutline"></IonIcon>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </div>
        </IonContent>
    </IonPage>

    <IonModal ref="modal" trigger="open-modal" style="--height: 80%; --border-radius: 20px;">
        <IonContent>
            <AddModal />
        </IonContent>
    </IonModal>
</template>
<script lang="ts">
import { IonModal, IonPage, IonGrid, IonRow, IonCol, IonContent, IonCard, IonIcon } from '@ionic/vue';
import { addCircleOutline } from "ionicons/icons"
import JobPostings from './Employer-Postings.vue'
import AddModal from "./Employer-Dashboard-Modal-AddPostings.vue";

export default {
    components: {
        IonPage, IonGrid, IonRow, IonCol,
        IonContent, JobPostings, IonCard, IonIcon,
        IonModal, AddModal
    },
    setup() {
        return {
            addCircleOutline,
        }
    }
}
</script>
<style>
/* ion-col {
    border: 1px solid black
} */
</style>