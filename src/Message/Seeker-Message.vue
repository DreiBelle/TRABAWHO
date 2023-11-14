<template>
  <IonPage>
    <IonHeader mode="md" style="height: 50px">
      <IonToolbar style="height: 100%; --background: #262c5c">
        <IonButtons style="padding-left: 10px" slot="start">
          <div>
            <img
              style="height: 30px"
              src="../assets/logo/whitefilllogo.png"
              alt="logo"
            />
          </div>
        </IonButtons>
        <IonTitle class="jmessage-header-title" mode="ios"> MESSAGE </IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonRefresher
        style="background: none; z-index: 4"
        slot="fixed"
        @ionRefresh="handleRefresh($event)"
      >
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <div>
        <IonSearchbar
          mode="ios"
          v-model="searchTerm"
          class="jmessage-searchabr"
        ></IonSearchbar>
      </div>
      <div style="margin-top: 35px">
        <div
          v-for="chat in filteredSearch"
          class="flexcenter"
          style="margin-bottom: -40px"
        >
          <IonCard
            @click="
              chatModal(
                true,
                chat.data.EmployerName,
                chat.data.EmployerPicture,
                chat.data.JobSwipe,
                chat.data.EmployerEmail,
                chat.id
              )
            "
            mode="ios"
            class="jmessage-chats-card"
          >
            <div class="jmeesage-chats-container">
              <div>
                <IonAvatar>
                  <img :src="chat.data.EmployerPicture" />
                </IonAvatar>
              </div>
              <div style="margin-left: 10px">
                <div>
                  <IonText class="jmessage-text"
                    >{{ chat.data.EmployerName }} |
                    {{ chat.data.JobSwipe }}</IonText
                  >
                </div>
                <div>
                  {{ chat.data.latestMessage }} -
                  {{ formatTimestamp(chat.data.latestSent) }}
                </div>
              </div>
            </div>
          </IonCard>
        </div>
      </div>
    </IonContent>

    <IonModal
      mode="ios"
      :is-open="isChat"
      @did-dismiss="chatModal(false, '', '', '', '', '')"
    >
      <div class="flexcenter jmessage-modal-header">
        <div class="flexcenter">
          <IonIcon
            @click="chatModal(false, '', '', '', '', '')"
            :icon="chevronBack"
          ></IonIcon>
        </div>
        <div>
          <IonAvatar class="jmessage-modal-header-avatar">
            <img :src="clickedPicture" />
          </IonAvatar>
        </div>
        <div>{{ clickedChat }} | {{ clickedJobSwiped }}</div>
      </div>
      <div style="height: 100%">
        <IonContent ref="content">
          <div v-if="messages.length != 0">
            <div v-for="(message, index) in messages">
              <div
                v-if="message.senderEmail === sender"
                style="width: 100%; padding-right: 5px"
              >
                <!-- sender -->
                <div>
                  <div class="jmessage-sender">
                    <img
                      @click="
                        openModalviewpicture(
                          true,
                          message.messagePicture,
                          message.id,
                          message.senderEmail
                        )
                      "
                      v-if="message.messagePicture"
                      class="jmessage-pictureSent"
                      :src="
                        message ? message.messagePicture : 'fallback-image-url'
                      "
                      alt="Selected Image"
                    />
                  </div>
                  <div class="jmessage-sender">
                    <IonCard
                      @click="openPopover($event, message.id)"
                      class="jprofile-card-messages"
                      v-if="message.messageText"
                    >
                      {{ messages ? `${message.messageText}` : "..." }}
                    </IonCard>
                  </div>
                  <div
                    class="jmessage-sender"
                    style="margin-right: 10px"
                    v-if="messages ? `${message.messagePdf}` : '...'"
                  >
                    <a :href="messages ? `${message.messagePdf}` : '...'">
                      <IonCard class="jprofile-card-messages">
                        {{ messages ? `${message.messagePdfname}` : "..." }}
                      </IonCard>
                    </a>
                  </div>
                  <IonPopover
                    @click="removeMessage()"
                    class="jmessage-popover-button"
                    :is-open="popoverOpen"
                    :event="event"
                    @did-dismiss="popoverOpen = false"
                  >
                    <div
                      class="flexcenter"
                      style="padding: 5px; font-size: 17px"
                    >
                      <IonIcon
                        style="margin-bottom: 3px; margin-right: 5px"
                        :icon="trash"
                      ></IonIcon>
                      <IonText>Remove</IonText>
                    </div>
                  </IonPopover>
                </div>
                <div>
                  <div class="jmessage-textdatesent" style="margin: 0 0 0 10px">
                    <IonText class="jmessage-textdatesent">{{
                      formatTimestamp(message.dateSent)
                    }}</IonText>
                  </div>
                </div>
              </div>
              <div v-if="message.receiverEmail === sender" style="width: 50%">
                <!-- receiver -->
                <div class="jmessage-receiver">
                  <div>
                    <IonAvatar class="jmessage-avatar">
                      <img :src="clickedPicture" />
                    </IonAvatar>
                  </div>
                  <div>
                    <div class="jmeesage-receiver">
                      <img
                        @click="
                          openModalviewpicture(
                            true,
                            message.messagePicture,
                            message.id,
                            message.senderEmail
                          )
                        "
                        v-if="message.messagePicture"
                        class="jmessage-pictureReceive"
                        :src="
                          message
                            ? message.messagePicture
                            : 'fallback-image-url'
                        "
                        alt="Selected Image"
                      />
                    </div>
                    <div class="jmeesage-receiver">
                      <IonCard
                        class="jprofile-card-messages2"
                        v-if="message.messageText"
                      >
                        {{ messages ? `${message.messageText}` : "..." }}
                      </IonCard>
                    </div>
                    <div
                      class="jmessage-receiver"
                      style="margin-left: 10px"
                      v-if="messages ? `${message.messagePdf}` : '...'"
                    >
                      <a
                        :href="messages ? `${message.messagePdf}` : '...'"
                        :download="
                          messages ? `${message.messagePdfname}` : '...'
                        "
                      >
                        <IonCard class="jprofile-card-messages">
                          {{ messages ? `${message.messagePdfname}` : "..." }}
                        </IonCard>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="jmessage-textdatesent2" style="margin: 0 0 0 10px">
                  <IonText class="jmessage-textdatesent2">{{
                    formatTimestamp(message.dateSent)
                  }}</IonText>
                </div>
              </div>
            </div>
          </div>
          <div v-else style="height: 100%">
            <div class="flexcenter" style="height: 100%">
              <IonText class="jmessage-text-messagenow">
                YOU CAN NOW MESSAGE EACH OTHER
              </IonText>
            </div>
          </div>
        </IonContent>
      </div>
      <div>
        <div>
          <div v-if="!namePic" style="color: transparent"></div>
          <div v-else-if="namePic">
            <IonChip style="cursor: default">
              {{ namePic }}
              <IonIcon
                @click="removePicture"
                style="cursor: pointer"
                :icon="close"
              >
              </IonIcon>
            </IonChip>
          </div>
        </div>
        <div class="flexcenter">
          <div class="flexcenter" style="width: 30px; margin: 5px">
            <label for="fileInput">
              <IonIcon class="jmessage-icon-send" :icon="folder"></IonIcon>
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/jpeg, application/pdf"
              ref="myfile"
              style="display: none"
              @change="addPicturemessage"
            />
          </div>
          <div class="flexcenter" style="width: calc(100% - 60px); margin: 5px">
            <IonInput
              mode="md"
              fill="outline"
              placeholder="Aa"
              class="jmessage-input-message"
              v-model="contentsMessage"
              @keyup.enter="sendMessage()"
            ></IonInput>
          </div>
          <div class="flecenter" style="width: 30px; margin: 5px">
            <IonIcon
              class="jmessage-icon-send"
              @click="sendMessage()"
              :icon="send"
            ></IonIcon>
          </div>
        </div>
      </div>
    </IonModal>

    <IonModal
      mode="md"
      :is-open="setviewPicture"
      @did-dismiss="openModalviewpicture(false, '', '', '')"
      class="emessage-pictureFull"
    >
      <IonIcon
        v-if="sender == noDel"
        @click="removeMessage()"
        :icon="trash"
        class="jmessage-icon-modal-trash"
      ></IonIcon>
      <IonIcon
        @click="openModalviewpicture(false, '', '', '')"
        class="jmessage-icon-modal-close"
        :icon="closeCircle"
      >
      </IonIcon>
      <img class="jmessage-pictureSentFull" :src="setviewPicturefull" />
    </IonModal>

    <toastMessage></toastMessage>
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
  IonFab,
  IonFabButton,
  IonFabList,
  IonActionSheet,
  IonAlert,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/vue";
import Navbar from "../NavBar/NavBar.vue";
import "./Seeker-Message.css";
import {
  settings,
  optionsOutline,
  chevronBack,
  folder,
  send,
  close,
  closeCircle,
  trash,
  logOut,
} from "ionicons/icons";
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
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebaseDB";
import Filter from "bad-words";
import { ref as asd, uploadBytes, getDownloadURL } from "firebase/storage";
import { dbImage } from "@/firebaseDB";
import { GoHome } from "../NavBar/NavBar-Controller";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseDB";
import toastMessage from "../Swipe/Swipe-Toast-Message.vue";

export default {
  components: {
    IonButtons,
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
    IonPopover,
    IonFab,
    IonFabButton,
    IonFabList,
    IonActionSheet,
    IonAlert,
    IonToolbar,
    IonTitle,
    toastMessage,
    IonRefresher,
    IonRefresherContent,
  },
  data() {
    return {
      user: "",
      chats: [],
      messages: [],
      sender: localStorage.getItem("email"),
      clickedChat: "",
      clickedPicture: "",
      clickedJobSwiped: "",
      clickedChatEmail: "",
      clickedId: "",
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
      pdfUrl: "",
    };
  },
  setup() {
    return {
      logOut,
      settings,
      optionsOutline,
      chevronBack,
      folder,
      send,
      close,
      closeCircle,
      trash,
    };
  },
  methods: {
    handleRefresh(event: CustomEvent<RefresherEventDetail>) {
      this.getChats();
      setTimeout(() => {
        event.detail.complete();
      }, 500);
    },
    scrollToBottom() {
      this.$refs.content.$el.scrollToBottom(500);
    },
    async getChats() {
      const q = query(
        collection(db, "MessagesUsers"),
        where("SeekerEmail", "==", this.sender),
        where("SeekerActive", "==", true),
        orderBy("latestSent", "desc")
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        this.chats = []; // Clear existing data

        snapshot.forEach((doc) => {
          this.chats.push({
            id: doc.id,
            data: doc.data(),
          });
        });
      });

      // onUnmounted(unsubscribe);
    },
    async removeMessage() {
      this.popoverOpen = false;
      this.setviewPicture = false;
      await deleteDoc(doc(db, "Messages", this.popOverId));
    },

    openPopover(e: Event, id) {
      this.event = e;
      console.log(id);
      this.popOverId = id;
      this.popoverOpen = true;
    },

    formatTimestamp(timestamp) {
      if (timestamp && timestamp.seconds) {
        const date = new Date(timestamp.seconds * 1000);
        const currentDate = new Date();

        if (date.toDateString() === currentDate.toDateString()) {
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const amOrPm = hours >= 12 ? "PM" : "AM";
          const formattedHours = hours % 12 || 12;

          return `${formattedHours}:${minutes} ${amOrPm}`;
        } else {
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          const year = String(date.getFullYear()).slice(-2);

          const hours = date.getHours();
          const minutes = date.getMinutes();
          const amOrPm = hours >= 12 ? "PM" : "AM";
          const formattedHours = hours % 12 || 12;

          return `${month}/${day}/${year} ${formattedHours}:${minutes} ${amOrPm}`;
        }
      } else {
        return "";
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

      this.noDel = sender;
      this.popOverId = id;
    },

    removePicture() {
      this.selectedpic = "";
      this.selectedPdf = "";
      this.namePic = "";
    },

    async addPicturemessage(event) {
      const files = event.target.files;

      if (files && files.length > 0) {
        const file = files[0];

        console.log("Selected file:", file);

        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imageUrl = e.target.result;
          };
          reader.readAsDataURL(file);
          this.selectedpic = file;
          this.namePic = file.name;
        } else if (file.type === "application/pdf") {
          this.selectedPdf = file;
          this.namePic = file.name;
        } else {
          console.error(
            "Unsupported file type. Please select an image (JPEG) or a PDF file."
          );
        }
      } else {
        console.error("No files selected or an error occurred.");
      }
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
      } else if (this.selectedPdf) {
        const storageRef = asd(dbImage, "messagePdf/" + this.selectedPdf.name);

        await uploadBytes(storageRef, this.selectedPdf);
        const downloadURL = await getDownloadURL(storageRef);

        this.pdfUrl = downloadURL;
      }

      if (this.contentsMessage && this.selectedpic && !this.selectedPdf) {
        this.filteredMessage = filter.clean(this.contentsMessage);

        const docRef = await addDoc(collection(db, "Messages"), {
          dateSent: serverTimestamp(),
          messageId: this.sender + this.clickedChatEmail,
          messageText: this.filteredMessage,
          messageJobField: this.clickedJobSwiped,
          receiverEmail: this.clickedChatEmail,
          senderEmail: this.sender,
          messagePicture: this.messagePic,
          messagePdf: "",
          messagePdfname: "",
          Removed: false,
          Read: false,
        });

        const updateDate = doc(db, "MessagesUsers", this.clickedId);
        await updateDoc(updateDate, {
          latestSent: serverTimestamp(),
          latestMessage: this.contentsMessage,
        });
      } else if (
        this.selectedPdf &&
        this.contentsMessage &&
        !this.selectedpic
      ) {
        this.filteredMessage = filter.clean(this.contentsMessage);

        const docRef = await addDoc(collection(db, "Messages"), {
          dateSent: serverTimestamp(),
          messageId: this.sender + this.clickedChatEmail,
          messageText: this.filteredMessage,
          messageJobField: this.clickedJobSwiped,
          receiverEmail: this.clickedChatEmail,
          senderEmail: this.sender,
          messagePicture: "",
          messagePdf: this.pdfUrl,
          messagePdfname: this.selectedPdf.name,
          Removed: false,
          Read: false,
        });

        const updateDate = doc(db, "MessagesUsers", this.clickedId);
        await updateDoc(updateDate, {
          latestSent: serverTimestamp(),
          latestMessage: this.contentsMessage,
        });
      } else if (
        !this.contentsMessage &&
        this.messagePic &&
        !this.selectedPdf
      ) {
        const docRef = await addDoc(collection(db, "Messages"), {
          dateSent: serverTimestamp(),
          messageId: this.sender + this.clickedChatEmail,
          messageText: "",
          messageJobField: this.clickedJobSwiped,
          receiverEmail: this.clickedChatEmail,
          senderEmail: this.sender,
          messagePicture: this.messagePic,
          messagePdf: "",
          messagePdfname: "",
          Removed: false,
          Read: false,
        });
        const updateDate = doc(db, "MessagesUsers", this.clickedId);
        await updateDoc(updateDate, {
          latestSent: serverTimestamp(),
          latestMessage: "Sent a Photo.",
        });
      } else if (
        this.contentsMessage &&
        !this.selectedpic &&
        !this.selectedPdf
      ) {
        this.filteredMessage = filter.clean(this.contentsMessage);

        const docRef = await addDoc(collection(db, "Messages"), {
          dateSent: serverTimestamp(),
          messageId: this.sender + this.clickedChatEmail,
          messageText: this.filteredMessage,
          messageJobField: this.clickedJobSwiped,
          receiverEmail: this.clickedChatEmail,
          senderEmail: this.sender,
          messagePicture: "",
          messagePdf: "",
          messagePdfname: "",
          Removed: false,
          Read: false,
        });

        const updateDate = doc(db, "MessagesUsers", this.clickedId);
        await updateDoc(updateDate, {
          latestSent: serverTimestamp(),
          latestMessage: this.contentsMessage,
        });
      } else if (
        !this.contentsMessage &&
        !this.selectedpic &&
        this.selectedPdf
      ) {
        const docRef = await addDoc(collection(db, "Messages"), {
          dateSent: serverTimestamp(),
          messageId: this.sender + this.clickedChatEmail,
          messageText: "",
          messageJobField: this.clickedJobSwiped,
          receiverEmail: this.clickedChatEmail,
          senderEmail: this.sender,
          messagePicture: "",
          messagePdf: this.pdfUrl,
          messagePdfname: this.selectedPdf.name,
          Removed: false,
          Read: false,
        });

        const updateDate = doc(db, "MessagesUsers", this.clickedId);
        await updateDoc(updateDate, {
          latestSent: serverTimestamp(),
          latestMessage: "Sent a file",
        });
      } else {
        console.log("enter contents");
      }

      this.contentsMessage = "";
      this.namePic = "";
      this.selectedpic = "";
      this.selectedPdf = "";
      this.pdfUrl = "";
      this.messagePic = "";
      this.scrollToBottom();
    },

    async chatModal(x, receiver, receiverPic, job, email, clickid) {
      this.isLoading = true;
      if (this.unsubscribe) {
        this.unsubscribe();
      }

      this.clickedChat = receiver;
      this.clickedPicture = receiverPic;
      this.clickedJobSwiped = job;
      this.clickedChatEmail = email;
      this.clickedId = clickid;

      const sendq = query(
        collection(db, "Messages"),
        where("receiverEmail", "in", [this.clickedChatEmail, this.sender]),
        where("senderEmail", "in", [this.clickedChatEmail, this.sender]),
        where("messageJobField", "==", this.clickedJobSwiped),
        where("Removed", "==", false),
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

      this.isChat = x;
      if (this.isChat == true) {
        setTimeout(() => {
          this.scrollToBottom();
        }, 250);
      }
    },
  },
  computed: {
    filteredSearch() {
      return this.chats.filter((chat) => {
        return (
          chat.data.EmployerName.toLowerCase().includes(
            this.searchTerm.toLowerCase()
          ) ||
          chat.data.JobSwipe.toLowerCase().includes(
            this.searchTerm.toLowerCase()
          )
        );
      });
    },
  },
  mounted() {
    this.getChats();
  },
};
</script>

<style></style>
