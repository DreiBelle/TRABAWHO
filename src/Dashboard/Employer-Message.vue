<template>
  <IonGrid style="height: 100%; width: 100%; padding: 0">
    <IonRow style="height: 100%">
      <IonCol class="emessage-container" size="3">
        <IonRow>
          <IonCol>
            <IonSearchbar
              class="dashboard-navbar-topbar-searchbar"
              v-model="searchTerm"
            ></IonSearchbar>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="custom-scrollbar">
            <div v-for="users in filteredSearch">
              <div
                @click="clickUser(users)"
                class="emessage-persons-tabs flexcenter"
              >
                <div>
                  <IonAvatar class="emessage-avatar" style="margin-right: 10px">
                    <img
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                  </IonAvatar>
                </div>
                <div>
                  <IonText>{{ users }}</IonText>
                </div>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonCol>
      <IonCol size="9" style="padding: 0">
        <IonRow
          v-if="this.isLoading"
          style="height: 60px"
          class="emessage-container2 flexcenter"
        >
          <IonSkeletonText
            :animated="true"
            style="width: 95%; height: 40px; border-radius: 5px"
          ></IonSkeletonText>
        </IonRow>
        <IonRow v-else style="height: 50px" class="emessage-container2">
          <IonCol class="flexcenter" style="justify-content: left">
            <div>
              <IonAvatar class="emessage-avatar" style="margin-right: 10px">
                <img
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
            </div>
            <div>{{ clickedChat }}</div>
            <!-- <IonIcon :icon=""></IonIcon> -->
          </IonCol>
        </IonRow>
        <IonRow v-if="this.isLoading" style="height: calc(100% - 100px)">
          <IonCol>
            <IonContent style="--background: none">
              <IonSkeletonText
                :animated="true"
                class="eprofile-skeleton2"
              ></IonSkeletonText>
              <IonSkeletonText
                :animated="true"
                class="eprofile-skeleton2"
              ></IonSkeletonText>
              <div class="flexcenter" style="justify-content: right">
                <IonSkeletonText
                  :animated="true"
                  s
                  class="eprofile-skeleton"
                ></IonSkeletonText>
              </div>
              <IonSkeletonText
                :animated="true"
                class="eprofile-skeleton"
              ></IonSkeletonText>
              <div class="flexcenter" style="justify-content: right">
                <IonSkeletonText
                  :animated="true"
                  class="eprofile-skeleton2"
                ></IonSkeletonText>
              </div>
            </IonContent>
          </IonCol>
        </IonRow>
        <IonRow v-else style="height: calc(100% - 100px)">
          <IonCol style="margin: 0; padding: 0">
            <IonContent
              style="--background: none"
              ref="content"
              class="custom-scrollbar"
            >
              <div v-if="messages.length != 0">
                <div v-for="(message, index) in messages">
                  <div v-if="message.senderEmail === sender">
                    <div
                      style="display: flex; justify-content: right"
                      class="flexcenter"
                    >
                      <div
                        @click="removeMessage(message.id)"
                        class="emessage-removemessage-container flexcenter"
                      >
                        <ion-icon
                          class="emessage-removemessage"
                          :icon="trash"
                        ></ion-icon>
                      </div>
                      <div>
                        <IonCard
                          style="
                            position: relative;
                            left: 0;
                            width: fit-content;
                            z-index: 2;
                          "
                          class="eprofile-card-messages"
                        >
                          {{ messages ? `${message.messageText}` : "..." }}
                        </IonCard>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="message.receiverEmail === sender"
                    class="flexcenter"
                    style="justify-content: left !important"
                  >
                    <!-- {{ messages ? `${message.messageText}` : "..." }} -->
                    <IonAvatar class="emessage-avatar">
                      <img
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      />
                    </IonAvatar>
                    <IonCard
                      style="justify-content: left; width: fit-content"
                      class="eprofile-card-messages"
                    >
                      {{ messages ? `${message.messageText}` : "..." }}
                    </IonCard>
                  </div>
                </div>
              </div>
              <div v-else class="flexcenter">
                <IonText class="emessage-startmessaging">
                  YOU CAN NOW MESSAGE EACH OTHER
                </IonText>
              </div>
            </IonContent>
          </IonCol>
        </IonRow>
        <IonRow class="flexcenter" style="height: 40px">
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
  IonContent,
  IonSkeletonText,
  IonButton,
  IonAlert,
  IonModal,
} from "@ionic/vue";
import "./message.css";
import { ellipsisVertical, send, trash } from "ionicons/icons";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  limit,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/firebaseDB";
import Filter from "bad-words";
import "./Employer-Dashboard.css";

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
    IonContent,
    IonSkeletonText,
    IonAlert,
    IonModal,
    IonButton,
  },
  data() {
    return {
      chats: ["capisce@gmail.com", "dashboard@gmail.com", "emman@gmail.com"],
      sender: localStorage.getItem("email"),
      messages: [],
      clickedChat: "",
      contentsMessage: "",
      filteredMessage: "",
      unsubscribe: null,
      searchTerm: "",
      isLoading: true,
      alertRemove: false,
    };
  },
  setup() {
    return {
      send,
      trash,
    };
  },
  methods: {
    async removeMessage(id) {
      // this.alertRemove = false;
      await deleteDoc(doc(db, "Messages", id));
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.content.$el; // Assuming this is the container element
        container.scrollTop = container.scrollHeight;
      });
    },

    async clickUser(receiver) {
      this.isLoading = true;
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
          const messageData = doc.data();
          const messageId = doc.id;
          // Add the document ID to the message data
          const messageWithId = {
            id: messageId,
            ...messageData,
          };
          newMessages.push(messageWithId);
        });
        this.messages = newMessages;
        this.isLoading = false;
      });
    },

    async sendMessage() {
      const filter = new Filter();
      this.filteredMessage = filter.clean(this.contentsMessage);
      const docRef = await addDoc(collection(db, "Messages"), {
        dateSent: serverTimestamp(),
        messageId: this.sender + this.clickedChat,
        messageText: this.filteredMessage,
        receiverEmail: this.clickedChat,
        senderEmail: this.sender,
      });

      console.log("id: ", docRef.id);
      this.contentsMessage = "";
      this.scrollToBottom();
    },
  },
  watch: {
    isLoading(newStatus) {
      if (!newStatus) {
        setTimeout(() => {
          this.scrollToBottom();
        }, 50);
      }
    },
  },
  computed: {
    filteredSearch() {
      return this.chats.filter((chat) => {
        return chat.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
  },
  mounted() {
    this.isLoading = true;
    if (this.unsubscribe) {
      this.unsubscribe();
    }

    this.clickedChat = this.chats[0];

    const sendq = query(
      collection(db, "Messages"),
      where("receiverEmail", "in", [this.chats[0], this.sender]),
      where("senderEmail", "in", [this.chats[0], this.sender]),
      orderBy("dateSent", "asc"),
      limit(100)
    );

    this.unsubscribe = onSnapshot(sendq, (snapshot) => {
      const newMessages = [];
      snapshot.forEach((doc) => {
        const messageData = doc.data();
        const messageId = doc.id;
        // Add the document ID to the message data
        const messageWithId = {
          id: messageId,
          ...messageData,
        };
        newMessages.push(messageWithId);
      });
      this.messages = newMessages;
      this.isLoading = false;
    });
  },
};
</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
