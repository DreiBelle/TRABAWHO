<template>
  <IonCard class="Seeker-Profile-Experience-Card">
    <IonGrid style="padding: 0; height: 100%;">
      <IonRow style="height: 100%;">
        <IonCol size="2" class="Seeker-Profile-FlexCenter">
          <IonIcon size="small" :icon="newspaperOutline"></IonIcon>
        </IonCol>
        <IonCol class="Seeker-Profile-FlexCenter" style="justify-content: left;">
          {{ user ? `${user.workexp}` : "Loading..." }}
        </IonCol>
        <IonCol size="2" class="Seeker-Profile-FlexCenter">
          <IonIcon size="small" :icon="chevronForwardOutline"></IonIcon>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonCard>

  <IonButton fill="outline" class="Seeker-Profile-AddButton">
    <IonIcon :icon="add"></IonIcon>
  </IonButton>
</template>
<script lang="ts">
import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonIcon, IonRow } from "@ionic/vue";
import "./Seeker-Profile.css";
import { getUserProfile } from "./Profile-Model"
import { ref, onMounted } from "vue";
import { add, newspaperOutline, chevronForwardOutline } from "ionicons/icons"


export default {
  components: {
    IonContent,
    IonCard,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol
  },
  setup() {
    // Assuming you have access to the email from your sharedFormData
    const user = ref(null);

    onMounted(async () => {
      const userEmail = localStorage.getItem("email");
      user.value = await getUserProfile(userEmail);
    });

    return {
      user, // Expose user ref to the template
      add,
      newspaperOutline,
      chevronForwardOutline
    };
  },
};
</script>

<style>
/* ion-col{
  border: 1px solid black;
} */
</style>
  