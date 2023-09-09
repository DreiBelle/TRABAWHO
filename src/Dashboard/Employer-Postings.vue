<template>
    <IonCard class="Dashboard-Card-Postings">
        <IonGrid style="height: 95%;">
            <IonRow style="height: 12%;">
                <IonCol class="Dashboard-Card-Postings-Title">
                    Title
                </IonCol>
            </IonRow>
            <IonRow style="height: 25%;" id="picture">
                <IonCol class="Dashboard-AddJobPostings-Card-Container">
                    <IonCard style="height: 100%; width: 100%;">
                        <img class="Dashboard-AddJobPostings-Card-Picture" src="../assets/companybackground.jpg" alt="">
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow style="height: 51%;">
                <IonCol class="Dashboard-Card-Postings-Description">
                    <IonContent class="no-scroll">
                        Lorem ipsum dolor sit amet. Est blanditiis nobis ut ipsa nisi sed iusto accusamus et possimus
                        esse. Aut beatae quibusdam sed recusandae blanditiis aut nisi quae ut blanditiis dolorem?
                        Qui unde corporis eos voluptas molestiae At accusamus iste in dolores laudantium ex nostrum
                        voluptas ea labore repellendus 33 galisum perspiciatis. Qui odio sint non illum iusto ea
                        voluptates natus sed quia tempora non quas dolor est cumque Lorem ipsum dolor sit amet. Est
                        blanditiis nobis ut ipsa nisi sed iusto accusamus et possimus esse. Aut beatae quibusdam sed
                        recusandae blanditiis aut nisi quae ut blanditiis dolorem?
                        Qui unde corporis eos voluptas molestiae At accusamus iste in dolores laudantium ex nostrum
                        voluptas ea labore repellendus 33 galisum perspiciatis. Qui odio sint non illum iusto ea
                        voluptates natus sed quia tempora non quas dolor est cumque Lorem ipsum dolor sit amet. Est
                        blanditiis nobis ut
                    </IonContent>
                </IonCol>
            </IonRow>
            <IonRow style="height: 12%;">
                <IonCol>
                    like
                </IonCol>
                <IonCol>
                    bookmarks
                </IonCol>
                <IonCol>

                </IonCol>
            </IonRow>
        </IonGrid>
    </IonCard>
</template>
<script lang="ts">
import { IonCard, IonCol, IonContent, IonGrid, IonImg, IonRow, IonText, IonModal } from '@ionic/vue';
import "./Employer-Dashboard.css"
export default {
    components: { IonCard, IonGrid, IonRow, IonCol, IonText, IonImg, IonContent, IonModal },
    methods: {

    },
    mounted() {

    }
}
</script>

<style>
/* ion-col {
    border: 1px solid black;
} */
</style>