<template>
    <div>{{ user ? `${user.workexp}` : "Loading..." }}</div>   
  </template>
  <script lang="ts">
  import { IonContent } from "@ionic/vue";
  import "./Seeker-Profile.css";
  import {getUserProfile} from "./Profile-Model"
  import { ref, onMounted  } from "vue";


  export default {
    components: {
      IonContent,
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
  