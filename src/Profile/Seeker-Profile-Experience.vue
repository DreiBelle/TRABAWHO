<template>
    <div>{{ user ? `${user.workexp}` : "Loading..." }}</div>   
  </template>
  <script lang="ts">
  import { IonContent } from "@ionic/vue";
  import "./Seeker-Profile.css";
  import {getUserProfile} from "./Profile-Model"
  import { UseProfileStore } from "@/stores/profilestore";
  import { ref, onMounted  } from "vue";


  export default {
    components: {
      IonContent,
    },
    setup() {
    // Assuming you have access to the email from your sharedFormData
    const user = ref(null);
    const profilestore = UseProfileStore();
    const sharedFormData = profilestore.formData;

    onMounted(async () => {
      const email = sharedFormData.email;
      user.value = await getUserProfile(email);
    });

    return {
        user, // Expose user ref to the template
      };
    },
  };
  </script>
  