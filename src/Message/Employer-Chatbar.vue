<template>
    <IonGrid style="height: 100%;">
        <IonRow style="height: 5%;">
            <IonCol size=".5">
                mini pic
            </IonCol>
            <IonCol>
                name of person to chat
            </IonCol>
        </IonRow>
        <IonRow style="height: 85%;">
            <IonCol>
                contents of chat
            </IonCol>
        </IonRow>
        <IonRow style="height: 10%;">
            <IonCol>
                message to send
            </IonCol>
            <IonCol size="1">
                button to send
            </IonCol>
        </IonRow>
    </IonGrid>
</template>
<script lang="ts">
import { IonCol, IonGrid, IonRow } from '@ionic/vue';

export default {
    components: { IonGrid, IonRow, IonCol }
}
</script>
<style lang="">
    
</style>