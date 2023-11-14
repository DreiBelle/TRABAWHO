<template>
  <div>
    <IonToast
      v-if="theMessage"
      position="top"
      :is-open="toastMessage"
      :duration="4000"
      :message="printMessage"
      :icon="personCircle"
      @did-dismiss="toggleToast(false)"
      @click="goMessage"
    ></IonToast>

    <!-- <IonModal
      v-if="theMessage"
      position="top"
      :is-open="toastMessage"
      :duration="3000"
      @did-dismiss="toggleToast(false)"
      @click="goMessage"
      :animated="true"
    >
      {{ theMessage }}
    </IonModal> -->
  </div>
</template>
<script lang="ts">
import { db } from "@/firebaseDB";
import { IonButton, IonToast, IonModal } from "@ionic/vue";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  limit,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import router from "@/router";
import { person, personCircle } from "ionicons/icons";

export default {
  components: { IonToast, IonButton, IonModal },
  data() {
    return {
      toastMessage: false,
      theMessage: "",
      recentMessages: [],
      User: localStorage.getItem("email"),
      recentMessagesId: "",
      printMessage: "",
    };
  },
  setup(){
    return{
        personCircle,
    }
  },
  methods: {
    goMessage() {
      router.push("/Seeker-Message");
    },
    toggleToast(x) {
      this.toastMessage = x;
    },
    async setRead(id) {
      if (id) {
        const messageRef = doc(db, "Messages", id);

        await updateDoc(messageRef, {
          Read: true,
        });

        console.log("updated");
      } else {
        console.log("no id");
      }
    },
    getRecentChat() {
      const q = query(
        collection(db, "Messages"),
        where("receiverEmail", "==", this.User),
        where("Read", "==", false),
        orderBy("dateSent", "desc"),
        limit(1)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const recentMessages = [];
        querySnapshot.forEach((doc) => {
          this.recentMessagesId = doc.id;
          recentMessages.push(doc.data().messageText);
        });
        this.theMessage = recentMessages.join(", ");
        console.log(this.recentMessagesId);
        this.printMessage = "TrabaWho: " + this.theMessage
        this.toggleToast(true);
        setTimeout(() => {
          this.setRead(this.recentMessagesId);
        }, 5000);
      });
    },
  },
  mounted() {
    this.getRecentChat();
  },
};
</script>
<style lang=""></style>
