<template>
    <IonPage class="dashboard-home-Container">
        <div class="dashboard-home-contents-container">
            <IonGrid style="height: 100%; width: 100%;">
                <IonRow>
                    <IonCol>
                        profile
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    </IonPage>
</template>
<script lang="ts">
import { IonPage, IonGrid, IonRow, IonCol } from '@ionic/vue';
export default {
    components: {
        IonPage, IonGrid, IonRow, IonCol
    }
}
</script>
<style></style>