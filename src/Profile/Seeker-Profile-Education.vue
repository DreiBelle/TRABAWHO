<template>
  <div>
      <IonGrid style="width: 100vw">
        <IonRow>
          <IonCol class="Seeker-Profile-Educational-Header">
            Educational Background
          </IonCol>
        </IonRow>
        <IonRow class="Seeker-Profile-Educational-Table">
          <IonCol> Elementary: </IonCol>
          <IonCol>
            {{ user ? `${user.elementary}` : "Loading..." }}
          </IonCol>
        </IonRow>
        <IonRow class="Seeker-Profile-Educational-Table">
          <IonCol> Junior HighSchool: </IonCol>
          <IonCol>
            {{ user ? `${user.juniorhigh}` : "Loading..." }}
          </IonCol>
        </IonRow>
        <IonRow class="Seeker-Profile-Educational-Table">
          <IonCol> Senior HighSchool: </IonCol>
          <IonCol>
            {{ user ? `${user.seniorhigh}` : "Loading..." }}
          </IonCol>
        </IonRow>
        <IonRow class="Seeker-Profile-Educational-Table">
          <IonCol> College: </IonCol>
          <IonCol>
            {{ user ? `${user.college}` : "Loading..." }}
          </IonCol>
        </IonRow>
        <IonRow class="Seeker-Profile-Educational-Table">
          <IonCol> Other Education: </IonCol>
          <IonCol>
            {{ user ? `${user.othereduc}` : "Loading..." }}
          </IonCol>
        </IonRow>
      </IonGrid>
  </div>
</template>
<script lang="ts">
import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/vue";
import "./Seeker-Profile.css";
import { getUserProfile } from "./Profile-Model";
import { ref, onMounted } from "vue";

export default {
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
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
    };
  },
};
</script>
