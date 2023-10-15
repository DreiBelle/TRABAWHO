<template>
  <!-- <IonCard class="Seeker-Profile-Experience-Card">
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
  </IonCard> -->

  <div class="flexcenter">
    <div>
      <div class="flexcenter">
        <IonAvatar>
          <img
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
            alt="image"
          />
        </IonAvatar>
      </div>
      <div>
        <IonText> PROFILE NAME </IonText>
      </div>
    </div>
  </div>

  <div>
    <IonCard> Age </IonCard>
  </div>

  <div>
    <IonCard> about me </IonCard>
  </div>

  <IonButton fill="outline" class="Seeker-Profile-AddButton">
    <IonIcon :icon="add"></IonIcon>
  </IonButton>
</template>
<script lang="ts">
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
} from "@ionic/vue";
import "./Seeker-Profile.css";
import { getUserProfile } from "./Profile-Model";
import { ref, onMounted } from "vue";
import { add, newspaperOutline, chevronForwardOutline } from "ionicons/icons";

export default {
  components: {
    IonContent,
    IonCard,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonText,
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
      chevronForwardOutline,
    };
  },
};
</script>

<style>
/* ion-col{
  border: 1px solid black;
} */
</style>
