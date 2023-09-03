<template>
    <IonGrid>
        <IonRow>
            <IonCol>
                <IonButton @click="GoHome()">
                    Logout
                </IonButton>
            </IonCol>
        </IonRow>
    </IonGrid>
</template>
<script lang="ts">
import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/vue';
import router from "../router"
export default {
    components: { IonGrid, IonRow, IonCol, IonButton },
    methods: {
        GoHome(){
            router.push("/Home")
        }
    }
}
</script>
<style lang="">
    
</style>