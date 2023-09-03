<template>
    <IonCard class="Dashboard-Card-Postings">
        <IonGrid style="height: 95%;">
            <IonRow style="height: 12%;">
                <IonCol class="Dashboard-Card-Postings-Title">
                    Title
                </IonCol>
            </IonRow>
            <IonRow style="height: 25%;" id="picture">
                <IonCol >
                    
                </IonCol>
            </IonRow>
            <IonRow style="height: 51%;">
                <IonCol class="Dashboard-Card-Postings-Description">
                    <div class="Dashboard-Overflow-Postings">
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
                    </div>
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
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/vue';

export default {
    components: { IonCard, IonGrid, IonRow, IonCol, IonText },
    methods: {
        images() {
            const pictureElement = document.getElementById("picture");
            var picturelink = 'url("../assets-public/companybackground.jpg")'
            pictureElement.style.backgroundImage = picturelink;
            pictureElement.style.backgroundSize = 'cover';
        }
    },
    mounted() {
        this.images();
    }
}
</script>

<style>
/* ion-col {
    border: 1px solid black;
} */
</style>