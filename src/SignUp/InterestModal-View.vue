<template>
  <IonContent>
    <IonList>
      <IonSearchbar
        v-model="searchQuery"
        @ionClear="clearSearch"
      ></IonSearchbar>
      <IonItem
        v-for="choice in filteredChoices"
        :key="choice.id"
        @click="selectChoice(choice)"
      >
        {{ choice.label }}
      </IonItem>
    </IonList>
  </IonContent>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonSearchbar,
} from "@ionic/vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      choices: [
        { id: 1, label: "Programming" },
        { id: 2, label: "Chef" },
        { id: 3, label: "Secretary" },
      ],
      searchQuery: "",
    };
  },
  computed: {
    filteredChoices() {
      if (this.searchQuery.trim() === "") {
        return this.choices;
      }

      const query = this.searchQuery.toLowerCase();
      return this.choices.filter((choice) =>
        choice.label.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    selectChoice(choice) {
      this.$emit("choice-selected", choice); // Your selectChoice logic here
    },
    clearSearch() {
      this.searchQuery = "";
    },
  },
};
</script>
