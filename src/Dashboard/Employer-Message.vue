<template>
  <IonGrid style="height: 100%; width: 100%; padding: 0">
    <IonRow style="height: 100%">
      <IonCol class="emessage-container" size="3">
        <IonRow>
          <IonCol>
            <IonSearchbar></IonSearchbar>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonList v-for="users in chats">
              <IonItem @click="clickUser(users)" class="emessage-persons-tabs">
                <IonText>{{ users }}</IonText>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>
      </IonCol>
      <IonCol size="9" style="padding: 0">
        <IonRow style="height: 60px" class="emessage-container2">
          <IonCol class="flexcenter" style="justify-content: left">
            <div>{{ clickedChat }}</div>
            <!-- <IonIcon :icon=""></IonIcon> -->
          </IonCol>
        </IonRow>
        <IonRow style="height: calc(100% - 120px)">
          <IonCol style="padding: 10px">
            <div v-if="messages.length != 0">
              <div v-for="(message, index) in messages">
                <div v-if="message.senderEmail === sender">
                  <div style="display: flex; justify-content: right">
                    <IonCard
                      style="position: relative; left: 0; width: fit-content"
                    >
                      {{ messages ? `${message.messageText}` : "..." }}
                    </IonCard>
                  </div>
                </div>
                <div v-if="message.receiverEmail === sender">
                  <!-- {{ messages ? `${message.messageText}` : "..." }} -->
                  <IonCard style="justify-content: left; width: fit-content">
                    {{ messages ? `${message.messageText}` : "..." }}
                  </IonCard>
                </div>
              </div>
            </div>
            <div v-else>start messaging each other</div>
          </IonCol>
        </IonRow>
        <IonRow class="flexcenter" style="height: 50px">
          <IonInput
            fill="outline"
            placeholder="Aa"
            class="emessage-input-message"
            v-model="contentsMessage"
            @keyup.enter="sendMessage()"
          >
          </IonInput>
          <IonIcon
            @click="sendMessage()"
            class="emessage-icon-send"
            :icon="send"
          >
          </IonIcon>
        </IonRow>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>
<script lang="ts">
import { getMessages, getReceives } from "./Dashboard-Model";
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonList,
  IonItem,
  IonAvatar,
  IonText,
  IonIcon,
  IonInput,
  IonCard,
} from "@ionic/vue";
import "./message.css";
import { send } from "ionicons/icons";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  limit,
  orderBy,
} from "firebase/firestore";
import { db } from "@/firebaseDB";

export default {
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonList,
    IonItem,
    IonAvatar,
    IonText,
    IonIcon,
    IonInput,
    IonCard,
  },
  data() {
    return {
      chats: ["capisce@gmail.com", "dashboard@gmail.com", "emman@gmail.com"],
      sender: localStorage.getItem("email"),
      messages: [],
      clickedChat: "",
      contentsMessage: "",
      unsubscribe: null,
    };
  },
  setup() {
    return {
      send,
    };
  },
  methods: {
    async clickUser(receiver) {
      // const messages = ref([]);
      // this.clickedChat = receiver;

      // const receivedMessages = await getReceives(this.sender, this.clickedChat);

      // messages.value = await getMessages(this.sender, receiver);
      // messages.value = messages.value.concat(receivedMessages);
      // messages.value.sort((a, b) => a.dateSent - b.dateSent);

      // return (this.messages = messages);

      if (this.unsubscribe) {
        this.unsubscribe();
      }

      this.clickedChat = receiver;

      const sendq = query(
        collection(db, "Messages"),
        where("receiverEmail", "in", [receiver, this.sender]),
        where("senderEmail", "in", [receiver, this.sender]),
        orderBy("dateSent", "asc"),
        limit(100)
      );

      this.unsubscribe = onSnapshot(sendq, (snapshot) => {
        const newMessages = [];
        snapshot.forEach((doc) => {
          newMessages.push(doc.data());
        });

        this.messages = newMessages;
      });
    },

    async sendMessage() {
      const docRef = await addDoc(collection(db, "Messages"), {
        dateSent: serverTimestamp(),
        messageId: this.sender + this.clickedChat,
        messageText: this.contentsMessage,
        receiverEmail: this.clickedChat,
        senderEmail: this.sender,
      });

      console.log("id: ", docRef.id);
      this.contentsMessage = "";
    },
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
