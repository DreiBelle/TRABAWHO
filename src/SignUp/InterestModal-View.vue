<template>
    <ion-content>
      <ion-list>
        <ion-item v-for="choice in choices" :key="choice.id" @click="selectChoice(choice)">
          {{ choice.label }}
        </ion-item>
      </ion-list>
    </ion-content>
  </template>
  
  <script lang="ts">
  export default {
    props: ['choices'], 
    methods: {
      selectChoice(choice:any) {
        this.$emit('choice-selected', choice);
      }
    }
  };
  </script>
  