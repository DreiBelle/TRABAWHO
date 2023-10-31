<template>
  <IonGrid style="height: 100%; width: 100%; padding: 0;">
    <IonRow style="height: 100%">
      <IonCol class="emessage-container" size="3">
        <IonRow>
          <IonCol>

            <IonText class="emessage-tile flexcenter" style="justify-content: left;">
              <IonIcon style="margin: 5px;" :icon="mail">

              </IonIcon>
              INBOX
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonSearchbar class="dashboard-navbar-topbar-searchbar" style="padding: 0;" v-model="searchTerm">
            </IonSearchbar>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="custom-scrollbar">
            <div v-for="users in filteredSearch">
              <div @click="clickUser(users)" class="emessage-persons-tabs flexcenter">
                <div>
                  <IonAvatar class="emessage-avatar" style="margin-right: 10px">
                    <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </IonAvatar>
                </div>
                <div>
                  <IonText style="color: black;">{{ users }}</IonText>
                </div>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonCol>
      <IonCol size="9" style="padding: 0">
        <IonRow v-if="this.isLoading" style="height: 60px" class="emessage-container2 flexcenter">
          <IonSkeletonText :animated="true" style="width: 95%; height: 40px; border-radius: 5px"></IonSkeletonText>
        </IonRow>
        <IonRow v-else style="height: 50px" class="emessage-container2">
          <IonCol class="flexcenter" style="justify-content: left">
            <div>
              <IonAvatar class="emessage-avatar" style="margin-right: 10px">
                <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </IonAvatar>
            </div>
            <div>
              <IonText style="color: black;">{{ clickedChat }}</IonText>
            </div>
            <!-- <IonIcon :icon=""></IonIcon> -->
          </IonCol>
        </IonRow>
        <IonRow v-if="this.isLoading" style="height: calc(100% - 100px)">
          <IonCol>
            <IonContent style="--background: none">
              <IonSkeletonText :animated="true" class="eprofile-skeleton2"></IonSkeletonText>
              <IonSkeletonText :animated="true" class="eprofile-skeleton2"></IonSkeletonText>
              <div class="flexcenter" style="justify-content: right">
                <IonSkeletonText :animated="true" s class="eprofile-skeleton"></IonSkeletonText>
              </div>
              <IonSkeletonText :animated="true" class="eprofile-skeleton"></IonSkeletonText>
              <div class="flexcenter" style="justify-content: right">
                <IonSkeletonText :animated="true" class="eprofile-skeleton2"></IonSkeletonText>
              </div>
            </IonContent>
          </IonCol>
        </IonRow>
        <IonRow v-else style="height: calc(100% - 100px)">
          <IonCol style="margin: 0; padding: 0">
            <IonContent style="--background: none" ref="content" class="custom-scrollbar">
              <div v-if="messages.length != 0">
                <div v-for="(message, index) in messages">
                  <div v-if="message.senderEmail === sender" class="emessage-spaces" @mouseover="hovered = true"
                    @mouseout="hovered = false">
                    <div class="emessage-sender emessage-removemessage-container-parent">
                      <div id="removeButton" @click="confirmRemoveMessage(message.id)"
                        class="emessage-removemessage-container flexcenter">
                        <ion-icon class="emessage-removemessage" :icon="trash"></ion-icon>
                      </div>
                      <div>
                        <div class="emessage-sender">
                          <img @click="openModalviewpicture(true, message.messagePicture)" v-if="message.messagePicture"
                            class="emessage-pictureSent" :src="message ? message.messagePicture : 'fallback-image-url'"
                            alt="Selected Image" />
                        </div>
                        <div class="emessage-sender">
                          <IonCard v-if="message.messageText" class="eprofile-card-messages">
                            {{ messages ? `${message.messageText}` : "..." }}
                          </IonCard>
                        </div>
                      </div>
                      <div>
                        <IonAvatar class="emessage-avatar">
                          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                      </div>
                    </div>
                    <div class="emessage-textdatesent">
                      <IonText class="emessage-textdatesent">{{ formatTimestamp(message.dateSent) }}</IonText>
                    </div>
                  </div>
                  <div v-if="message.receiverEmail === sender" style="justify-content: left !important"
                    class="emessage-spaces">
                    <div class="emessage-receiver">
                      <div>
                        <IonAvatar class="emessage-avatar2">
                          <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                      </div>
                      <div>
                        <div class="emessage-receiver">
                          <img @click="openModalviewpicture(true, message.messagePicture)" v-if="message.messagePicture"
                            class="emessage-pictureReceive" :src="message ? message.messagePicture : 'fallback-image-url'"
                            alt="Selected Image" />
                        </div>
                        <div class="emessage-receiver">
                          <IonCard v-if="message.messageText" class="eprofile-card-messages2">
                            {{ messages ? `${message.messageText}` : "..." }}
                          </IonCard>
                        </div>
                      </div>
                    </div>
                    <div class="emessage-textdatesent2" style="margin: 0 0 0 10px;">
                      <IonText class="emessage-textdatesent2">{{ formatTimestamp(message.dateSent) }}</IonText>
                    </div>
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
        <IonRow class="flexcenter" style="margin: 5px;">
          <div style="width: 100%;">
            <div style="position: absolute; bottom: 50px; left: 30px;">
              <div v-if="!namePic" style="color: transparent;">

              </div>
              <div v-else-if="namePic">
                <IonChip style="cursor:default;">
                  {{ namePic }}
                  <IonIcon @click="removePicture" style="cursor:pointer;" :icon="close"> </IonIcon>
                </IonChip>
              </div>
            </div>
            <div style="height: 40px; width: 100%;" class="flexcenter">
              <label for="fileInput">
                <IonIcon class="emessage-icon-send" :icon="folder"></IonIcon>
              </label>
              <input id="fileInput" type="file" accept="image/jpeg" ref="myfile" style="display: none"
                @change="addPicturemessage" />
              <IonInput fill="outline" placeholder="Aa" class="emessage-input-message" v-model="contentsMessage"
                @keyup.enter="sendMessage()">
              </IonInput>
              <IonIcon @click="sendMessage()" class="emessage-icon-send" :icon="send">
              </IonIcon>
            </div>
          </div>
        </IonRow>
      </IonCol>
    </IonRow>
  </IonGrid>

  <IonModal :is-open="setviewPicture" @did-dismiss="openModalviewpicture(false, '')" class="emessage-pictureFull">
    <img class="emessage-pictureSentFull" :src="setviewPicturefull" alt="Selected Image" />
  </IonModal>
</template>
<script lang="ts">
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
  IonChip,
} from "@ionic/vue";
import "./message.css";
import { ellipsisVertical, folder, send, trash, close, mail } from "ionicons/icons";
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
import { ref as asd, uploadBytes, getDownloadURL } from "firebase/storage";
import { dbImage } from "@/firebaseDB";
import { useUserStore } from "@/stores/updateemprof"

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
    IonChip
  },
  data() {
    return {
      chats: ["dashboard@gmail.com", "capisce@gmail.com", "emman@gmail.com"],
      sender: localStorage.getItem("email"),
      messages: [],
      clickedChat: "",
      contentsMessage: "",
      filteredMessage: "",
      searchTerm: "",
      namePic: "",
      selectedpic: "",
      messagePic: "",
      setviewPicturefull: "",
      hovered: false,
      setviewPicture: false,
      isLoading: true,
      alertRemove: false,
      unsubscribe: null,
    };
  },
  setup() {
    return {
      send,
      trash,
      folder,
      close,
      mail,
    };
  },
  methods: {
    openModalviewpicture(x, picture) {
      this.setviewPicture = x;
      this.setviewPicturefull = picture;
    },

    removePicture() {
      this.namePic = ""
      this.selectedpic = ""
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

    async confirmRemoveMessage(id) {
      if (window.confirm("Are you sure you want to delete this message?")) {
        await this.removeMessage(id);
      }
    },

    async removeMessage(id) {
      await deleteDoc(doc(db, "Messages", id));
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.content.$el;
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

      if (this.selectedpic) {
        const storageRef = asd(
          dbImage,
          "messagepictures/" + this.selectedpic.name
        );

        await uploadBytes(storageRef, this.selectedpic);
        const downloadURL = await getDownloadURL(storageRef);

        this.messagePic = downloadURL;
      }

      if (this.contentsMessage) {
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
      else {
        const docRef = await addDoc(collection(db, "Messages"), {
          dateSent: serverTimestamp(),
          messageId: this.sender + this.clickedChat,
          messageText: this.contentsMessage,
          receiverEmail: this.clickedChat,
          senderEmail: this.sender,
          messagePicture: this.messagePic,
        });
      }

      this.contentsMessage = "";
      this.namePic = "";
      this.selectedpic = "";
      this.messagePic = "";
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
