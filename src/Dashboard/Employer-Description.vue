<template>
    <IonCard class="Dashboard-Card-Description">
        <IonGrid style="height: 100%;">
            <IonRow style="height: 10%;">
                <IonCol class="Dashboard-FlexCenter">
                    <IonText style="color: black; padding-left: 2vw;">
                        Title
                    </IonText>
                </IonCol>
                <IonCol size=".5" class="Dashboard-FlexCenter">
                    <IonText style="color: black; cursor: pointer;" id="open-modal-editdescription">
                        edit
                    </IonText>
                </IonCol>
            </IonRow>
            <IonRow style="height: 90%; overflow-y: auto ;" class="noscroll">
                <IonCol>
                    <IonContent class="no-scroll" style="text-align: justify;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada accumsan urna, eget eleifend
                        purus dignissim non. In hac habitasse platea dictumst. Vivamus vel enim eu justo interdum lacinia.
                        Sed ac eros eget quam tristique efficitur. Suspendisse potenti. Praesent vel bibendum nisl.
                        Vestibulum venenatis, arcu quis volutpat ultricies, justo libero tincidunt ligula, nec bibendum ex
                        risus nec velit. Sed id posuere velit. Phasellus elementum libero ac efficitur. Fusce pellentesque,
                        justo a tincidunt congue, lectus tortor varius odio, non condimentum odio quam ac orci. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod laoreet
                        sapien, non convallis tortor cursus id. Nulla facilisi. Nulla facilisi. Aliquam in varius turpis, a
                        dictum risus. Aenean non quam eu quam venenatis dignissim. Sed non ligula vel tortor tincidunt
                        elementum eget ut nisi. Sed id sapien vel lectus vehicula vestibulum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada accumsan urna, eget eleifend
                        purus dignissim non. In hac habitasse platea dictumst. Vivamus vel enim eu justo interdum lacinia.
                        Sed ac eros eget quam tristique efficitur. Suspendisse potenti. Praesent vel bibendum nisl.
                        Vestibulum venenatis, arcu quis volutpat ultricies, justo libero tincidunt ligula, nec bibendum ex
                        risus nec velit. Sed id posuere velit. Phasellus elementum libero ac efficitur. Fusce pellentesque,
                        justo a tincidunt congue, lectus tortor varius odio, non condimentum odio quam ac orci. Vestibulum
                        justo a tincidunt congue, lectus tortor varius odio, non condimentum odio quam ac orci. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod laoreet
                        sapien, non convallis tortor cursus id. Nulla facilisi. Nulla facilisi. Aliquam in varius turpis, a
                        dictum risus. Aenean non quam eu quam venenatis dignissim. Sed non ligula vel tortor tincidunt
                        elementum eget ut nisi. Sed id sapien vel lectus vehicula vestibulum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada accumsan urna, eget eleifend
                        purus dignissim non. In hac habitasse platea dictumst. Vivamus vel enim eu justo interdum lacinia.
                        Sed ac eros eget quam tristique efficitur. Suspendisse potenti. Praesent vel bibendum nisl.
                        Vestibulum venenatis, arcu quis volutpat ultricies, justo libero tincidunt ligula, nec bibendum ex
                        risus nec velit. Sed id posuere velit. Phasellus elementum libero ac efficitur. Fusce pellentesque,
                        justo a tincidunt congue, lectus tortor varius odio, non condimentum odio quam ac orci. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod laoreet
                        sapien, non convallis tortor cursus id. Nulla facilisi. Nulla facilisi. Aliquam in varius turpis, a
                        dictum risus. Aenean non quam eu quam venenatis dignissim. Sed non ligula vel tortor tincidunt
                        elementum eget ut nisi. Sed id sapien vel lectus vehicula vestibulum.
                    </IonContent>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonCard>

    <IonModal ref="modal" trigger="open-modal-editdescription" style="--height: 60%; --width: 40%; --border-radius: 20px;">
        <IonContent>
            <EditModal/>
        </IonContent>
    </IonModal>
</template>
<script lang="ts">
import { IonCol, IonGrid, IonRow, IonText, IonCard, IonContent, IonModal } from '@ionic/vue';
import "./Employer-Dashboard.css"
import EditModal from "./Employer-Dashboard-Modal-EditDescription.vue"
export default {
    components: { IonGrid, IonRow, IonCol, IonText, IonCard, IonContent, IonModal, EditModal }
}
</script>

<style>
/* ion-col {
    border: 1px solid black;
} */
</style>