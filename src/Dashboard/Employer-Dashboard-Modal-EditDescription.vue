<template>
    <IonGrid style="height: 100%; width: 100%;">
        <IonRow style="height: 5%;">
            <IonCol size="11.5" class="Dashboard-FlexCenter">
                <IonText style="padding-left: 1vw;">
                    EDIT DESCRIPTION
                </IonText>
            </IonCol>
            <IonCol size=".5" class="Dashboard-FlexCenter">
                <IonText @click="closeOther" style="cursor: pointer !important;">
                    x
                </IonText>
            </IonCol>
        </IonRow>
        <IonRow style="height: 9%;">
            <IonCol class="Dashboard-FlexCenter">
                <IonInput class="Dashboard-ModalEdit-Input" label="Title" labelPlacement="stacked" fill="outline"
                    placeholder="input for editing title" style="height: 100% !important;">

                </IonInput>
            </IonCol>
        </IonRow>
        <IonRow style="height: 76%;">
            <IonCol class="Dashboard-FlexCenter">
                <IonTextarea class="Dashboard-ModalEdit-Input" label="Description" labelPlacement="stacked" fill="outline"
                    placeholder="input for editing description" style="height: 100% !important;">

                </IonTextarea>
            </IonCol>
        </IonRow>
        <IonRow style="height: 10%;">
            <IonCol>
                <IonButton expand="block">Cancel</IonButton>
            </IonCol>
            <IonCol>
                <IonButton expand="block">Save</IonButton>
            </IonCol>
        </IonRow>
    </IonGrid>
</template>
<script lang="ts">
import { IonButton, IonCol, IonGrid, IonInput, IonRow, IonText, IonTextarea, modalController } from '@ionic/vue';
import "./Employer-Dashboard.css"
export default {
    components: { IonGrid, IonRow, IonCol, IonInput, IonButton, IonText, IonTextarea },
    methods: {
        closeOther() {
            modalController.dismiss();
        },
    }
} 
</script>
<style lang="">
    
</style>