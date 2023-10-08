<template>
  <IonContent>
    <IonList>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonSearchbar class="SignUp-Modal-Search" v-model="searchQuery" @ionClear="clearSearch"></IonSearchbar>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="SignUp-ListOfInterest">
            <IonItem v-for="choice in filteredChoices" :key="choice.id" @click="selectChoice(choice)">
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
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonModal,
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
        { id: 4, label: "Carpenter" },
        { id: 5, label: "Lawyer" },
        { id: 6, label: "Doctor" },
        { id: 7, label: "Teacher" },
        { id: 8, label: "Nurse" },
        { id: 9, label: "Engineer" },
        { id: 10, label: "Police officer" },
        { id: 11, label: "Firefighter" },
        { id: 12, label: "Graphic designer" },
        { id: 13, label: "Architect" },
        { id: 14, label: "Plumber" },
        { id: 15, label: "Electrician" },
        { id: 16, label: "Salesperson" },
        { id: 17, label: "Marketing manager" },
        { id: 18, label: "Librarian" },
        { id: 19, label: "Accountant" },
        { id: 20, label: "Receptionist" },
        { id: 21, label: "Cashier" },
        { id: 22, label: "Waiter/waitress" },
        { id: 23, label: "Bartender" },
        { id: 24, label: "Dentist" },
        { id: 25, label: "Pharmacist" },
        { id: 26, label: "Veterinarian" },
        { id: 27, label: "Pilot" },
        { id: 28, label: "Flight attendant" },
        { id: 29, label: "Journalist" },
        { id: 30, label: "Photographer" },
        { id: 31, label: "Bus driver" },
        { id: 32, label: "Taxi driver" },
        { id: 33, label: "Mechanic" },
        { id: 34, label: "Hairdresser" },
        { id: 35, label: "Fitness instructor" },
        { id: 36, label: "Painter" },
        { id: 37, label: "Interior designer" },
        { id: 38, label: "Gardener" },
        { id: 39, label: "Translator" },
        { id: 40, label: "Social worker" },
        { id: 41, label: "Event planner" },
        { id: 42, label: "Banker" },
        { id: 43, label: "Real estate agent" },
        { id: 44, label: "Phlebotomist" },
        { id: 45, label: "Counselor" },
        { id: 46, label: "Therapist" },
        { id: 47, label: "Electrician" },
        { id: 48, label: "Plumber" },
        { id: 49, label: "Mover" },
        { id: 50, label: "Cashier" },
        { id: 51, label: "Stockbroker" },
        { id: 52, label: "Mortician" },
        { id: 53, label: "Barista" },
        { id: 54, label: "Actor/Actress" },
        { id: 55, label: "Musician" },
        { id: 56, label: "Singer" },
        { id: 57, label: "Flight attendant" },
        { id: 58, label: "Lifeguard" },
        { id: 59, label: "Security guard" },
        { id: 60, label: "Delivery driver" },
        { id: 61, label: "Paramedic" },
        { id: 62, label: "Pharmacy technician" },
        { id: 63, label: "Radiologic technologist" },
        { id: 64, label: "Medical assistant" },
        { id: 65, label: "Dental hygienist" },
        { id: 66, label: "Flight dispatcher" },
        { id: 67, label: "Zookeeper" },
        { id: 68, label: "Janitor" },
        { id: 69, label: "Security officer" },
        { id: 70, label: "Hotel manager" },
        { id: 71, label: "Landscaper" },
        { id: 72, label: "Astronomer" },
        { id: 73, label: "Geologist" },
        { id: 74, label: "Agricultural worker" },
        { id: 75, label: "Flight instructor" },
        { id: 76, label: "Baker" },
        { id: 77, label: "Surveyor" },
        { id: 78, label: "Geographer" },
        { id: 79, label: "Meteorologist" },
        { id: 80, label: "Forensic scientist" },
        { id: 81, label: "Biomedical engineer" },
        { id: 82, label: "Economist" },
        { id: 83, label: "Historian" },
        { id: 84, label: "Sociologist" },
        { id: 85, label: "Anthropologist" },
        { id: 86, label: "Archaeologist" },
        { id: 87, label: "Linguist" },
        { id: 88, label: "Mathematician" },
        { id: 89, label: "Chemist" },
        { id: 90, label: "Biologist" },
        { id: 91, label: "Physicist" },
        { id: 92, label: "Astronaut" },
        { id: 93, label: "Psychologist" },
        { id: 94, label: "Biotech researcher" },
        { id: 95, label: "Forester" },
        { id: 96, label: "Social media manager" },
        { id: 97, label: "HR manager" },
        { id: 98, label: "Fashion designer" },
        { id: 99, label: "Librarian" },
        { id: 100, label: "Museum curator" },
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
