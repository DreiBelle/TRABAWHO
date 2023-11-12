<template>
  <IonGrid style="height: 100%; width: 100%; padding: 0;">
    <IonRow style="height: 100%">
      <IonCol class="emessage-container" size="3">
        <IonRow>
          <IonCol class="flexcenter" style="justify-content: left;">
            <div>
              <IonText class="emessage-tile flexcenter" style="justify-content: left;">
                <IonIcon style="margin: 5px;" :icon="mail">

                </IonIcon>
                INBOX
              </IonText>
            </div>
            <div class="flexcenter" style="position: absolute; right: 0;">
              <IonButton class="emessage-button-markasdone" v-if="markasDone == true" @click="swapViews(false)">
                <IonIcon :icon="checkmark"></IonIcon>
              </IonButton>
              <IonButton class="emessage-button-markasdone" v-else-if="markasDone == false" @click="swapViews(true)">
                <IonIcon :icon="mail"></IonIcon>
              </IonButton>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonSearchbar class="dashboard-navbar-topbar-searchbar" style="padding: 0;" v-model="searchTerm">
            </IonSearchbar>
            <div v-if="markasDone == true">
              <IonText class="emessage-title-doneornot">
                MESSAGES
              </IonText>
            </div>
            <div v-else-if="markasDone == false">
              <IonText class="emessage-title-doneornot">
                MARKED AS DONE
              </IonText>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="custom-scrollbar">
            <div v-for="chat in filteredSearch">
              <div
                @click="clickUser(chat.data.SeekerName, chat.data.SeekerEmail, chat.data.JobSwipe, chat.data.SeekerPicture, chat.id)"
                class="emessage-persons-tabs flexcenter">
                <div>
                  <IonAvatar class="emessage-avatar" style="margin-right: 10px">
                    <img :src="chat ? chat.data.SeekerPicture : 'https://ionicframework.com/docs/img/demos/avatar.svg'" />
                  </IonAvatar>
                </div>
                <div>
                  <div>
                    <IonText style="color: black;"><b>{{ chat.data.SeekerName }} | {{ chat.data.JobSwipe }}</b> </IonText>
                  </div>
                  <div>
                    <IonText style="color: black;"> {{ chat.data.latestMessage }} - {{
                      formatTimestamp(chat.data.latestSent) }} </IonText>
                  </div>
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
            <div v-if="clickedChat">
              <IonAvatar class="emessage-avatar" style="margin-right: 10px">
                <img :src="clickedPicture" />
              </IonAvatar>
            </div>
            <div v-if="clickedChat">
              <IonText style="color: black;">{{ clickedChat }} | <b> {{ clickedJobSwiped }} </b></IonText>
            </div>
            <div class="flexcenter">
              <!-- <IonButton style="position: absolute; right: 5px; --background: darkgreen; --border-radius: 50px;"> DONE </IonButton> -->
              <IonFab v-if="clickedChat && markasDone == true" style="position: absolute; right: 5px;">
                <IonFabButton class="emessage-fab-button">
                  <IonIcon :icon="chevronDown"></IonIcon>
                </IonFabButton>
                <IonFabList side="bottom" class="flexcenter">
                  <IonFabButton @click="markDoneUndone(false)" class="emessage-fab-button-contents">
                    <IonIcon style="margin-right: 5px;" :icon="checkmark"></IonIcon>
                    Mark as Done
                  </IonFabButton>
                </IonFabList>
              </IonFab>
              <IonFab v-if="clickedChat && markasDone == false" style="position: absolute; right: 5px;">
                <IonFabButton class="emessage-fab-button">
                  <IonIcon :icon="chevronDown"></IonIcon>
                </IonFabButton>
                <IonFabList side="bottom" class="flexcenter">
                  <IonFabButton @click="markDoneUndone(true)" class="emessage-fab-button-contents2">
                    <IonIcon style="margin-right: 5px;" :icon="close"></IonIcon>
                    Mark Undone
                  </IonFabButton>
                  <IonFabButton @click="deleteChats()" class="emessage-fab-button-contents3">
                    <IonIcon style="margin-right: 5px;" :icon="trash"></IonIcon>
                    Delete
                  </IonFabButton>
                </IonFabList>
              </IonFab>
            </div>
            <!-- <IonIcon :icon=""></IonIcon> -->
          </IonCol>
        </IonRow>
        <IonRow v-if="this.isLoading" style="height: calc(100% - 110px)">
          <IonCol>
            <IonContent style="--background: none">
              <IonSkeletonText :animated="true" class="eprofile-skeleton2"></IonSkeletonText>
              <IonSkeletonText :animated="true" class="eprofile-skeleton2"></IonSkeletonText>
              <div class="flexcenter" style="justify-content: right">
                <IonSkeletonText :animated="true" class="eprofile-skeleton"></IonSkeletonText>
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
                        <IonAvatar class="emessage-avatar" v-for="user in users">
                          <img :src="user.data.pic" />
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
                          <img :src="clickedPicture" />
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
              <div v-else class="flexcenter" style="height: 100%;">
                <IonText v-if="clickedChat" class="emessage-startmessaging">
                  YOU CAN NOW MESSAGE EACH OTHER
                </IonText>
                <IonText v-if="!clickedChat" class="emessage-startmessaging">
                  CHOOSE A CHAT HEAD
                </IonText>
              </div>
            </IonContent>
          </IonCol>
        </IonRow>
        <IonRow v-if="markasDone == true" class="flexcenter" style="margin: 5px;">
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
            <div v-if="clickedChat" style="height: 40px; width: 100%;" class="flexcenter">
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
  IonFab,
  IonFabButton,
  IonFabList,
} from "@ionic/vue";
import "./message.css";
import { ellipsisVertical, folder, send, trash, close, mail, chevronDown, checkmark } from "ionicons/icons";
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
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebaseDB";
import Filter from "bad-words";
import "./Employer-Dashboard.css";
import { ref as asd, uploadBytes, getDownloadURL } from "firebase/storage";
import { dbImage } from "@/firebaseDB";
import { useUserStore } from "@/stores/updateemprof"
import { getDashboardProfile } from './Dashboard-Model';
import { ref, onMounted, onUnmounted } from "vue";



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
    IonChip,
    IonFab,
    IonFabButton,
    IonFabList
  },
  props: {
    passJob: {
      type: String
    },
    passName: {
      type: String
    },
    passPic: {
      type: String
    },
    passEmail: {
      type: String
    },
    passId: {
      type: String
    },
    passTorF: {
      type: Boolean
    },
  },
  data() {
    return {
      users: [],
      chats: [],
      sender: localStorage.getItem("email"),
      messages: [],
      clickedChat: "",
      clickedChatEmail: "",
      clickedJobSwiped: "",
      clickedPicture: "",
      clickedId: "",
      contentsMessage: "",
      filteredMessage: "",
      searchTerm: "",
      namePic: "",
      selectedpic: "",
      messagePic: "",
      setviewPicturefull: "",
      hovered: false,
      setviewPicture: false,
      isLoading: false,
      alertRemove: false,
      unsubscribe: null,
      markasDone: true,
    };
  },
  setup() {
    return {
      send,
      trash,
      folder,
      close,
      mail,
      chevronDown,
      checkmark,
    };
  },
  emits: ['goMessages', 'goMessagesData', 'clear-all', 'go-to-posting'],
  methods: {
    async deleteChats() {
      const userRef = doc(db, "MessagesUsers", this.clickedId);
      await updateDoc(userRef, {
        EmployerActive: "Deleted"
      });
    },
    swapViews(x) {
      this.markasDone = x
      this.getChats()
      this.clearAll()
      this.clickUser(this.clickedChat, this.clickedChatEmail, this.clickedJobSwiped, this.clickedPicture, this.clickedId)
    },
    clearAll() {
      this.clickedChat = ""
      this.clickedChatEmail = ""
      this.clickedJobSwiped = ""
      this.clickedPicture = ""
      this.clickedId = ""
    },
    async markDoneUndone(x) {
      const userRef = doc(db, "MessagesUsers", this.clickedId);
      await updateDoc(userRef, {
        EmployerActive: x
      });

      this.clickedChat = ""
      this.clickedChatEmail = ""
      this.clickedJobSwiped = ""
      this.clickedPicture = ""
      this.clickedId = ""

      this.$emit("clear-all")

      this.clickUser(this.clickedChat, this.clickedChatEmail, this.clickedJobSwiped, this.clickedPicture, this.clickedId)
      this.getChats()
    },

    async getChats() {
      const q = query(collection(db, "MessagesUsers"), where("EmployerEmail", "==", this.sender), where("EmployerActive", "==", this.markasDone), orderBy("latestSent", "desc"));

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

    async getEmaildetails() {
      const usersRef = collection(db, "users");

      const q = query(usersRef, where("email", "==", this.sender));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        this.users.push({
          id: doc.id,
          data: doc.data(),
        });
      });
    },

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
          const formattedMinutes = minutes.toString().padStart(2, "0");

          return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
        } else {
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          const year = String(date.getFullYear()).slice(-2);

          const hours = date.getHours();
          const minutes = date.getMinutes();
          const amOrPm = hours >= 12 ? 'PM' : 'AM';
          const formattedHours = (hours % 12) || 12;
          const formattedMinutes = minutes.toString().padStart(2, "0");


          return `${month}/${day}/${year} ${formattedHours}:${formattedMinutes} ${amOrPm}`;
        }
      } else {
        return '';
      }
    },

    // async getFirstmessage() {
    //   this.isLoading = true;
    //   if (this.unsubscribe) {
    //     this.unsubscribe();
    //   }

    //   this.clickedChat = this.chats[0];

    //   const sendq = query(
    //     collection(db, "Messages"),
    //     where("receiverEmail", "in", [this.chats[0], this.sender]),
    //     where("senderEmail", "in", [this.chats[0], this.sender]),
    //     orderBy("dateSent", "asc"),
    //     limit(100)
    //   );

    //   this.unsubscribe = onSnapshot(sendq, (snapshot) => {
    //     const newMessages = [];
    //     snapshot.forEach((doc) => {
    //       const messageData = doc.data();
    //       const messageId = doc.id;
    //       const messageWithId = {
    //         id: messageId,
    //         ...messageData,
    //       };
    //       newMessages.push(messageWithId);
    //     });
    //     this.messages = newMessages;
    //     this.isLoading = false;
    //   });
    // },

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
      // await deleteDoc(doc(db, "Messages", id));
      const userRef = doc(db, "Messages", id);
      await updateDoc(userRef, {
        Removed: true
      });
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.content.$el;
        container.scrollTop = container.scrollHeight;
      });
    },

    async clickUser(receiver, receiverEmail, jobSwiped, receiverPicture, receiverId) {
      this.isLoading = true;
      if (this.unsubscribe) {
        this.unsubscribe();
      }

      this.clickedChat = receiver;
      this.clickedChatEmail = receiverEmail;
      this.clickedJobSwiped = jobSwiped;
      this.clickedPicture = receiverPicture;
      this.clickedId = receiverId;

      const sendq = query(
        collection(db, "Messages"),
        where("receiverEmail", "in", [receiverEmail, this.sender]),
        where("senderEmail", "in", [receiverEmail, this.sender]),
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
          messageId: this.sender + this.clickedChatEmail,
          messageText: this.filteredMessage,
          messageJobField: this.clickedJobSwiped,
          receiverEmail: this.clickedChatEmail,
          senderEmail: this.sender,
          messagePicture: this.messagePic,
          Removed: false,
        });

        const updateDate = doc(db, "MessagesUsers", this.clickedId);
        await updateDoc(updateDate, {
          latestSent: serverTimestamp(),
          latestMessage: this.contentsMessage,
        });
      }
      else if (!this.contentsMessage && this.messagePic) {
        const docRef = await addDoc(collection(db, "Messages"), {
          dateSent: serverTimestamp(),
          messageId: this.sender + this.clickedChatEmail,
          messageText: "",
          messageJobField: this.clickedJobSwiped,
          receiverEmail: this.clickedChatEmail,
          senderEmail: this.sender,
          messagePicture: this.messagePic,
          Removed: false,
        });

        const updateDate = doc(db, "MessagesUsers", this.clickedId);
        await updateDoc(updateDate, {
          latestSent: serverTimestamp(),
          latestMessage: "Sent a Photo.",
        });
      } else if (this.contentsMessage && !this.messagePic) {
        this.filteredMessage = filter.clean(this.contentsMessage);

        const docRef = await addDoc(collection(db, "Messages"), {
          dateSent: serverTimestamp(),
          messageId: this.sender + this.clickedChatEmail,
          messageText: this.filteredMessage,
          messageJobField: this.clickedJobSwiped,
          receiverEmail: this.clickedChatEmail,
          senderEmail: this.sender,
          messagePicture: "",
          Removed: false,
        });

        const updateDate = doc(db, "MessagesUsers", this.clickedId);
        await updateDoc(updateDate, {
          latestSent: serverTimestamp(),
          latestMessage: this.contentsMessage,
        });
      } else {
        console.log("enter contents");
      }

      this.contentsMessage = "";
      this.namePic = "";
      this.selectedpic = "";
      this.messagePic = "";
      this.scrollToBottom();
    },
    getData() {
      if (this.passJob && this.passName && this.passPic && this.passId) {
        this.clickedChat = this.passName
        this.clickedJobSwiped = this.passJob
        this.clickedPicture = this.passPic
        this.clickedChatEmail = this.passEmail
        this.clickedId = this.passId
        this.clickUser(this.clickedChat, this.clickedChatEmail, this.clickedJobSwiped, this.clickedPicture, this.clickedId)
      } else {
        console.log("wala")
      }
    },
  },
  watch: {
    // passJob: function (value) {
    //   if (value) {
    //     console.log("meron")
    //   } else {
    //     console.log("wala")
    //   }
    // },
    isLoading: function (newStatus) {
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
        const searchTermLower = this.searchTerm.toLowerCase();
        if (chat.data.SeekerName) {
          return chat.data.SeekerName.toLowerCase().includes(searchTermLower)
        }
      });
    },
  },
  mounted() {
    console.log(this.passTorF)
    this.markasDone = this.passTorF

    this.getChats()
    this.getEmaildetails()
    this.getData()

    if (this.chats) {
      // this.getFirstmessage()
      console.log("there are chats")
    } else {
      console.log("no chats")
    }
  },
  unmounted() {
    this.$emit("clear-all")
  },
};

</script>
<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
