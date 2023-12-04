<template>
    <IonPage style="padding: 20px;">
        <IonContent>
            <div>
                <p>Note: Before you will do these steps you should download Node.js first</p>
                <IonButton @click="backupmodal(true)" style="--background: #262c5c; height: 50px; font-size: 15px;">Node
                    Installation</IonButton>
                <h1>Export Database</h1><br />
                <p>Go to Your Firebase Firestore</p><br />
                <p>Click Project Settings</p><br />
                <img class="imgprocedure"
                    src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%201.png?alt=media&token=3ad123e2-6153-4adc-a8bf-b8c4a8a82bb3"
                    alt="image" /><br />
                <p>Go to Service accounts</p><br />
                <img class="imgprocedure"
                    src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%202.png?alt=media&token=3ac6d0a5-b661-4b81-b4a7-40dacb08c190"
                    alt="image" /><br /><br />
                <p>Click Generate new private key to download the key</p><br /><br />
                <p>Go to Service accounts</p><br /><br />
                <img class="imgprocedure"
                    src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%203.png?alt=media&token=c643ed54-4f20-4b6e-b474-a00cd2d552a0"
                    alt="image" /><br /><br />
                <p>In your Desktop create a folder and put that key into that folder</p><br /><br />
                <p>Rename that key whatever name you want</p><br /><br />
                <p>Click the and type in the address location of the folder on the top "cmd"</p><br /><br />
                <img class="imgprocedure"
                    src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%204.png?alt=media&token=b7c9597e-4cc0-430a-8ac3-4c99fb255f0a"
                    alt="image" /><br /><br />

                <img class="imgprocedure"
                    src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%205.png?alt=media&token=349b63db-2e1d-479d-9978-48b0f2a6edb3"
                    alt="image" /><br /><br />
                <p>Then execute this command</p><br /><br />
                <p>npx -p node-firestore-import-export firestore-export -a (keyname).json -b (name of the backup).json</p>
                <br /><br />
                <p>Replace and put the keyname and edit the desired backup file name then execute it just click enter</p>
                <br /><br />
                <img class="imgprocedure"
                    src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%206.png?alt=media&token=f434b1bc-db97-4e4c-b5db-b45a2d2aafb1"
                    alt="image" /><br /><br />
                <p>Confirm to export by pressing y if it ask you</p><br /><br />
                <h1>Import Database</h1><br />
                <p>Just like in export you will go to the cmd but execute this</p>
                <p>npx -p node-firestore-import-export firestore-import -a (keyname).json -b (name of the backup).json</p>
                <p>Replace and put the keyname and edit the backup file name then execute it just click enter</p>
                <img class="imgprocedure"
                    src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%207.png?alt=media&token=efb68935-bf3b-4e4e-b40a-d30398c7d37d"
                    alt="image" /><br /><br />
                <p>Confirm to import by pressing y if it ask you</p>
            </div>
        </IonContent>
    </IonPage>
    <IonModal :is-open="isbackup" @did-dismiss="backupmodal(false)" style="--width: 80%; --height: 90%;">
        <IonContent>
            <div class="backup-container">
                <div class="instruction">
                    <IonText class="titles">Node.js Installation</IonText><br /><br />
                    <p>First go to your web browser and search node.js download</p><br/>
                    <img class="imgprocedure"
                        src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fnode.png?alt=media&token=a5336856-6b31-481f-b435-f992926edb50"
                        alt="image" /><br /><br />
                    <p>Then choose the version that is compatible with your device</p><br/>
                    <p>Then click download it</p><br/>
                    <p>After download finish, open that node.js installer</p><br/>

                </div>
            </div>
        </IonContent>
        <div class="buttonprocedure">
            <IonButton style="width: 80%; --background: #262c5c;" @click="backupmodal(false)">DONE</IonButton>
        </div>
    </IonModal>
</template>
<script lang="ts">
import { IonButton, IonContent, IonPage, IonModal, IonText } from '@ionic/vue';

export default {
    components: { IonPage, IonContent, IonButton, IonModal, IonText },
    data() {
        return {
            isbackup: false
        }
    },
    methods: {
        backupmodal(x) {
            this.isbackup = x
        },
    }
}

</script>