<template>
  <div>
    <IonCard class="Seeker-Profile-Educational-Card">
      <IonGrid style="height: 100%; padding: 0;">
        <IonRow style="height: 100%;">
          <IonCol size="2" class="Seeker-Profile-FlexCenter Seeker-Profile-Educational-Icons">
            <IonIcon size="large" :icon="school"></IonIcon>
          </IonCol>
          <IonCol>
            <IonRow style="height: 50%;">
              <IonCol class="Seeker-Profile-Educational-Container-School">
                <IonText><b>Elementary:</b></IonText>
              </IonCol>
            </IonRow>
            <IonRow style="height: 50%;">
              <IonCol class="Seeker-Profile-Educational-Container-School" style="padding-left: 20px;">
                {{ user ? `${user.elementary}` : "..." }}
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>

    <IonCard class="Seeker-Profile-Educational-Card">
      <IonGrid style="height: 100%; padding: 0;">
        <IonRow style="height: 100%;">
          <IonCol size="2" class="Seeker-Profile-FlexCenter Seeker-Profile-Educational-Icons">
            <IonIcon size="large" :icon="school"></IonIcon>
          </IonCol>
          <IonCol>
            <IonRow style="height: 50%;">
              <IonCol class="Seeker-Profile-Educational-Container-School">
                <IonText><b>Junior HighSchool:</b></IonText>
              </IonCol>
            </IonRow>
            <IonRow style="height: 50%;">
              <IonCol class="Seeker-Profile-Educational-Container-School" style="padding-left: 20px;">
                {{ user ? `${user.juniorhigh}` : "..." }}
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>

    <IonCard class="Seeker-Profile-Educational-Card">
      <IonGrid style="height: 100%; padding: 0;">
        <IonRow style="height: 100%;">
          <IonCol size="2" class="Seeker-Profile-FlexCenter Seeker-Profile-Educational-Icons">
            <IonIcon size="large" :icon="school"></IonIcon>
          </IonCol>
          <IonCol>
            <IonRow style="height: 50%;">
              <IonCol class="Seeker-Profile-Educational-Container-School">
                <IonText><b>Senior HighSchool:</b></IonText>
              </IonCol>
            </IonRow>
            <IonRow style="height: 50%;">
              <IonCol class="Seeker-Profile-Educational-Container-School" style="padding-left: 20px;">
                {{ user ? `${user.seniorhigh}` : "..." }}
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>

    <IonCard class="Seeker-Profile-Educational-Card">
      <IonGrid style="height: 100%; padding: 0;">
        <IonRow style="height: 100%;">
          <IonCol size="2" class="Seeker-Profile-FlexCenter Seeker-Profile-Educational-Icons">
            <IonIcon size="large" :icon="school"></IonIcon>
          </IonCol>
          <IonCol>
            <IonRow style="height: 50%;">
              <IonCol class="Seeker-Profile-Educational-Container-School">
                <IonText><b>College:</b></IonText>
              </IonCol>
            </IonRow>
            <IonRow style="height: 50%;">
              <IonCol class="Seeker-Profile-Educational-Container-School" style="padding-left: 20px;">
                {{ user ? `${user.college}` : "..." }}
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
    
    <IonCard class="Seeker-Profile-Educational-Card">
      <IonGrid style="height: 100%; padding: 0;">
        <IonRow style="height: 100%;">
          <IonCol size="2" class="Seeker-Profile-FlexCenter Seeker-Profile-Educational-Icons">
            <IonIcon size="large" :icon="school"></IonIcon>
          </IonCol>
          <IonCol>
            <IonRow style="height: 50%;">
              <IonCol class="Seeker-Profile-Educational-Container-School">
                <IonText><b>Masteral:</b></IonText>
              </IonCol>
            </IonRow>
            <IonRow style="height: 50%;">
              <IonCol class="Seeker-Profile-Educational-Container-School" style="padding-left: 20px;">
                {{ user ? `${user.othereduc}` : "..." }}
              </IonCol>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  </div>

  <IonButton fill="outline" class="Seeker-Profile-AddButton">
    <IonIcon :icon="add"></IonIcon>
  </IonButton>
</template>
<script lang="ts">
import { IonCol, IonContent, IonGrid, IonRow, IonButton, IonIcon, IonCard, IonText } from "@ionic/vue";
import "./Seeker-Profile.css";
import { getUserProfile } from "./Profile-Model";
import { ref, onMounted } from "vue";
import { add, school } from "ionicons/icons"

export default {
components: {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonCard,
  IonText
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
    school,
  };
},
};
</script>
