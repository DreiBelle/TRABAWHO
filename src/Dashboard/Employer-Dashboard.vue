<template>
    <IonPage>
        <IonContent>
            <IonHeader>
                <div name="header">
                    <IonGrid>
                        <IonRow>
                            <IonCol class="Dashboard-FlexCenter" size=".5">
                                <img class="Dashboard-HeaderButtons" src="../assets/logosample.jpg" alt="logo">
                            </IonCol>
                            <IonCol size=".5">

                            </IonCol>
                            <IonCol size="3">

                            </IonCol>
                            <IonCol class="Dashboard-FlexCenter" size="4">
                                <IonSearchbar>

                                </IonSearchbar>
                            </IonCol>
                            <IonCol size="3">

                            </IonCol>
                            <IonCol class="Dashboard-FlexCenter" size=".5">
                                <img class="Dashboard-HeaderButtons" src="../assets/chat.png" alt="message button">
                            </IonCol>
                            <IonCol class="Dashboard-FlexCenter" size=".5">
                                <img class="Dashboard-HeaderButtons" src="../assets/logosample.jpg" alt="profile">
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonHeader>
            <div>


            </div>
        </IonContent>
    </IonPage>
</template>
<script lang="ts">
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSearchbar } from "@ionic/vue";
import "./Employer-Dashboard.css"
export default {
    components: { IonContent, IonPage, IonHeader, IonGrid, IonRow, IonCol, IonSearchbar, IonButton }
}
</script>

<style>
ion-row,
ion-col {
    border: 1px solid black;
}
</style>
