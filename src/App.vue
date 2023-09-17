<template>
  <ion-app>
    <router-view v-if="isMobile == false"></router-view>
    <IonRouterOutlet v-if="isMobile == true"></IonRouterOutlet>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';

export default {
  components: {
    IonApp,
    IonRouterOutlet,
  },
  data() {
    return {
      isMobile: null
    };
  },
  methods: {
    check() {
      if (window.innerWidth <= 768) {
        this.isMobile = true
        console.log("mobile")
      } else {
        this.isMobile = false
        console.log("computer")

      }
    }
  },
  mounted() {
    this.check()
  }
}
</script>

<style scoped>
.router-container {
  width: 100%;
  height: 100%;
}
</style>
