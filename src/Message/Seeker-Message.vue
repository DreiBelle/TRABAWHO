<template>
  <IonPage>
    <IonHeader class="jmessage-header">
      <div class="flexcenter" style="height: 100%; width: 100%;">
        <div class="jmessage-logo-container">
          <img class="jmessage-logo" src="../assets/logo/whitefilllogo.png" alt="logo" />
        </div>
        <div>
          <IonText class="jmessage-title">
            INBOX
          </IonText>
        </div>
        <div class="jmessage-icons-settings">
          <IonIcon :icon="settings"></IonIcon>
        </div>
      </div>
    </IonHeader>

    <IonContent>
      <div>
        <IonSearchbar mode="ios" v-model="searchTerm" class="jmessage-searchabr"></IonSearchbar>
      </div>
      <div style="margin-top: 30px;">
        <div v-for="chat in filteredSearch" class="flexcenter" style="margin-bottom: -40px;">
          <IonCard @click="chatModal(true, chat)" mode="ios" class="jmessage-chats-card">
            <div class="jmeesage-chats-container">
              <div>
                <IonAvatar>
                  <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
              </div>
              <div style="margin-left: 10px;">
                <div>
                  <IonText class="jmessage-text">{{ chat }}</IonText>
                </div>
                <div>
                  current chat
                </div>
              </div>
            </div>
          </IonCard>
        </div>
      </div>
    </IonContent>

    <IonModal mode="ios" :is-open="isChat" @did-dismiss="chatModal(false, '')">
      <div class="flexcenter jmessage-modal-header">
        <div class="flexcenter">
          <IonIcon @click="chatModal(false, '')" :icon="chevronBack"></IonIcon>
        </div>
        <div>
          <IonAvatar class="jmessage-modal-header-avatar">
            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        </div>
        <div>
          {{ clickedChat }}
        </div>
      </div>
      <div style="height: 100%;">
        <IonContent ref="content">
          <div v-if="messages.length != 0">
            <div v-for="(message, index) in messages">
              <div v-if="message.senderEmail === sender" style="width: 50%; margin-left: 50%;">
                <!-- sender -->
                <div>
                  <div class="jmessage-sender">
                    <img @click="openModalviewpicture(true, message.messagePicture, message.id, message.senderEmail)"
                      v-if="message.messagePicture" class="jmessage-pictureSent"
                      :src="message ? message.messagePicture : 'fallback-image-url'" alt="Selected Image" />
                  </div>
                  <div class="jmessage-sender">
                    <IonCard @click="openPopover($event, message.id)" class="jprofile-card-messages"
                      v-if="message.messageText">
                      {{ messages ? `${message.messageText}` : "..." }}
                    </IonCard>
                  </div>
                  <IonPopover @click="removeMessage()" class="jmessage-popover-button" :is-open="popoverOpen"
                    :event="event" @did-dismiss="popoverOpen = false">
                    <div class="flexcenter" style="padding: 5px; font-size: 17px;">
                      <IonIcon style="margin-bottom: 3px; margin-right: 5px;" :icon="trash"></IonIcon>
                      <IonText>Remove</IonText>
                    </div>
                  </IonPopover>
                </div>
                <div>
                  <div class="jmessage-textdatesent" style="margin: 0 0 0 10px;">
                    <IonText class="jmessage-textdatesent">{{ formatTimestamp(message.dateSent) }}</IonText>
                  </div>
                </div>
              </div>
              <div v-if="message.receiverEmail === sender" style="width: 50%;">
                <!-- receiver -->
                <div class="jmessage-receiver">
                  <div>
                    <IonAvatar class="jmessage-avatar">
                      <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </IonAvatar>
                  </div>
                  <div>
                    <div class="jmeesage-receiver">
                      <img @click="openModalviewpicture(true, message.messagePicture, message.id, message.senderEmail)"
                        v-if="message.messagePicture" class="jmessage-pictureReceive"
                        :src="message ? message.messagePicture : 'fallback-image-url'" alt="Selected Image" />
                    </div>
                    <div class="jmeesage-receiver">
                      <IonCard class="jprofile-card-messages2" v-if="message.messageText">
                        {{ messages ? `${message.messageText}` : "..." }}
                      </IonCard>
                    </div>
                  </div>
                </div>
                <div class="jmessage-textdatesent2" style="margin: 0 0 0 10px;">
                  <IonText class="jmessage-textdatesent2">{{ formatTimestamp(message.dateSent) }}</IonText>
                </div>
              </div>
            </div>
          </div>
          <div v-else style="height: 100%;">
            <div class="flexcenter" style="height: 100%;">
              <IonText class="jmessage-text-messagenow">
                YOU CAN NOW MESSAGE EACH OTHER
              </IonText>
            </div>
          </div>
        </IonContent>
      </div>
      <div>
        <div>
          <div v-if="!namePic" style="color: transparent;">

          </div>
          <div v-else-if="namePic">
            <IonChip style="cursor:default;">
              {{ namePic }}
              <IonIcon @click="removePicture" style="cursor:pointer;" :icon="close"> </IonIcon>
            </IonChip>
          </div>
        </div>
        <div class="flexcenter">
          <div class="flexcenter" style="width: 30px; margin: 5px;">
            <label for="fileInput">
              <IonIcon class="jmessage-icon-send" :icon="folder"></IonIcon>
            </label>
            <input id="fileInput" type="file" accept="image/jpeg" ref="myfile" style="display: none"
              @change="addPicturemessage" />
          </div>
          <div class="flexcenter" style="width: calc(100% - 60px); margin: 5px; ;">
            <IonInput mode="md" fill="outline" placeholder="Aa" class="jmessage-input-message" v-model="contentsMessage"
              @keyup.enter="sendMessage()"></IonInput>
          </div>
          <div class="flecenter" style="width: 30px; margin: 5px;">
            <IonIcon class="jmessage-icon-send" @click="sendMessage()" :icon="send"></IonIcon>
          </div>
        </div>
      </div>
    </IonModal>

    <IonModal mode="md" :is-open="setviewPicture" @did-dismiss="openModalviewpicture(false, '', '', '')"
      class="emessage-pictureFull">
      <IonIcon v-if="sender == noDel" @click="removeMessage()" :icon="trash" class="jmessage-icon-modal-trash"></IonIcon>
      <IonIcon @click="openModalviewpicture(false, '', '', '')" class="jmessage-icon-modal-close" :icon="closeCircle">
      </IonIcon>
      <img class="jmessage-pictureSentFull" :src="setviewPicturefull" />
    </IonModal>
  </IonPage>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonIcon,
  IonHeader,
  IonAvatar,
  IonSearchbar,
  IonModal,
  IonInput,
  IonChip,
  IonButton,
  IonPopover,
} from "@ionic/vue";
import Navbar from "../NavBar/NavBar.vue";
import "./Seeker-Message.css";
import { settings, optionsOutline, chevronBack, folder, send, close, closeCircle, trash } from "ionicons/icons";
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
import { ref as asd, uploadBytes, getDownloadURL } from "firebase/storage";
import { dbImage } from "@/firebaseDB";

export default {
  components: {
    IonChip,
    IonPage,
    IonContent,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    Navbar,
    IonIcon,
    IonHeader,
    IonAvatar,
    IonSearchbar,
    IonModal,
    IonInput,
    IonButton,
    IonPopover
  },
  data() {
    return {
      chats: ["dashboard@gmail.com", "capisce@gmail.com", "emman@gmail.com", "dashboard@gmail.com", "capisce@gmail.com", "emman@gmail.com", "dashboard@gmail.com", "capisce@gmail.com", "emman@gmail.com"],
      messages: [],
      sender: localStorage.getItem("email"),
      clickedChat: "",
      searchTerm: "",
      isChat: false,
      contentsMessage: "",
      messagePic: "",
      namePic: "",
      setviewPicturefull: "",
      setviewPicture: false,
      isLoading: false,
      popoverOpen: false,
      event: null,
      popOverId: "",
      noDel: "",
    }
  },
  setup() {
    return {
      settings, optionsOutline, chevronBack, folder, send, close, closeCircle, trash
    }
  },
  methods: {
    async removeMessage() {
      this.popoverOpen = false
      this.setviewPicture = false
      await deleteDoc(doc(db, "Messages", this.popOverId));
    },

    openPopover(e: Event, id) {
      this.event = e;
      console.log(id)
      this.popOverId = id
      this.popoverOpen = true
    },

    formatTimestamp(timestamp) {
      if (timestamp && timestamp.seconds) {
        const date = new Date(timestamp.seconds * 1000);
        const currentDate = new Date();

        if (date.toDateString() === currentDate.toDateString()) {
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const amOrPm = hours >= 12 ? 'PM' : 'AM';
          const formattedHours = (hours % 12) || 12;

          return `${formattedHours}:${minutes} ${amOrPm}`;
        } else {
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          const year = String(date.getFullYear()).slice(-2);

          const hours = date.getHours();
          const minutes = date.getMinutes();
          const amOrPm = hours >= 12 ? 'PM' : 'AM';
          const formattedHours = (hours % 12) || 12;


          return `${month}/${day}/${year} ${formattedHours}:${minutes} ${amOrPm}`;
        }
      } else {
        return '';
      }
    },

    openModalviewpicture(x, picture, id, sender) {
      if (x == false) {
        this.setviewPicture = x;
        setTimeout(() => {
          this.setviewPicturefull = picture;
        }, 200);
      } else if (x == true) {
        this.setviewPicture = x;
        this.setviewPicturefull = picture;
      }

      this.noDel = sender
      this.popOverId = id
    },

    removePicture() {
      this.namePic = ""
      this.selectedpic = ""
    },

    async addPicturemessage(event) {
      const files = event.target.files;
      console.log(files);

      if (files && files.length > 0) {
        const file = files[0];
        console.log("Selected file:", file);
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
        this.selectedpic = file;
        this.namePic = file.name
        console.log(file);
      } else {
        console.error("No files selected or an error occurred.");
      }
    },

    scrollToBottom(x) {
      this.$refs.content.$el.scrollToBottom(x);
    },

    async sendMessage() {
      const filter = new Filter();

      if (this.selectedpic) {
        const storageRef = asd(
          dbImage,
          "messagepictures/" + this.selectedpic.name
        );

        await uploadBytes(storageRef, this.selectedpic);
        const downloadURL = await getDownloadURL(storageRef);

        this.messagePic = downloadURL;
      }

      if (this.contentsMessage && this.messagePic) {
        this.filteredMessage = filter.clean(this.contentsMessage);

        const docRef = await addDoc(collection(db, "Messages"), {
          dateSent: serverTimestamp(),
          messageId: this.sender + this.clickedChat,
          messageText: this.filteredMessage,
          receiverEmail: this.clickedChat,
          senderEmail: this.sender,
          messagePicture: this.messagePic,
        });
      }
      else if (!this.contentsMessage && this.messagePic) {
        const docRef = await addDoc(collection(db, "Messages"), {
          dateSent: serverTimestamp(),
          messageId: this.sender + this.clickedChat,
          messageText: this.contentsMessage,
          receiverEmail: this.clickedChat,
          senderEmail: this.sender,
          messagePicture: this.messagePic,
        });
      } else if (this.contentsMessage && !this.messagePic) {
        const docRef = await addDoc(collection(db, "Messages"), {
          dateSent: serverTimestamp(),
          messageId: this.sender + this.clickedChat,
          messageText: this.contentsMessage,
          receiverEmail: this.clickedChat,
          senderEmail: this.sender,
          messagePicture: this.messagePic,
        });
      } else {
        console.log("enter contents")
      }

      this.contentsMessage = "";
      this.namePic = "";
      this.selectedpic = "";
      this.messagePic = "";
      this.scrollToBottom(500);
    },

    async chatModal(x, receiver) {
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
          const messageWithId = {
            id: messageId,
            ...messageData,
          };
          newMessages.push(messageWithId);
        });
        this.messages = newMessages;
        this.isLoading = false;

        setTimeout(() => {
          this.scrollToBottom(500);
        }, 150);
      });

      this.isChat = x
    },
  },
  computed: {
    filteredSearch() {
      return this.chats.filter((chat) => {
        return chat.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
  },
};
</script>

<style></style>
