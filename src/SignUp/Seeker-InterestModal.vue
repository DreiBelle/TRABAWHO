<template>
  <IonContent>
    <IonList>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonSearchbar
              class="SignUp-Modal-Search"
              v-model="searchQuery"
              @ionClear="clearSearch"
            ></IonSearchbar>
          </IonCol>
        </IonRow>
        <IonRow> 
          <IonCol class="SignUp-ListOfInterest">
            <IonItem
              v-for="choice in filteredChoices"
              :key="choice.id"
              @click="selectChoice(choice)"
            >
              {{ choice.label }}
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonList>
  </IonContent>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonList,
  IonItem,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import "./SignUp.css";
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

<style>
/* ion-col{
  border: 1px solid black;
} */
</style>
