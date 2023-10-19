<template>
    <div>
        notification
    </div>
</template>
<script lang="ts">
import { IonPage, IonGrid, IonRow, IonCol } from '@ionic/vue';
export default {
    mounted() {
    // Listen for the 'swipedRight' event
    this.$eventBus.on('swipedRight', (userData) => {
      // Handle the user data here
      console.log('Received user data:', userData);
      // You can now use userData in this component
    });
  },
    components: {
        IonPage, IonGrid, IonRow, IonCol
    }
}
</script>
<style></style>