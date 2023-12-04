<template>
    <IonPage >
        <IonContent >
            <div class="flexcenter">
                <IonText style="color: black; font-size: 50px; font-family: BebasNeue-Regular ;">
                    ALL USERS
                </IonText>
            </div>
            <div class="flexcenter" style="height: calc(100% - 200px);">
                <div class="data-analytics">
                    <canvas id="userm"></canvas>
                </div>
                <div class="data-analytics">
                    <canvas id="usery"></canvas>
                </div>
            </div>
            <div style="position: absolute; bottom: 20px; right: 20px;">
                <IonButton @click="backupmodal(true)" style="--background: #262c5c; height: 50px; font-size: 15px;">
                    HELPME
                </IonButton>
            </div>
        </IonContent>
    </IonPage>

    <IonModal :is-open="isbackup" @did-dismiss="backupmodal(false)" style="--width: 80%; --height: 90%;">
        <IonContent>
            <div class="backup-container">
                <div class="instruction">
                    <IonText class="titles">Export Database</IonText><br /><br />

                    <IonText>Go to Your Firebase Firestore</IonText><br /><br />
                    <IonText>Click Project Settings</IonText><br /><br />
                    <img class="imgprocedure" src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%201.png?alt=media&token=3ad123e2-6153-4adc-a8bf-b8c4a8a82bb3"
                        alt="image" /><br /><br />

                    <IonText>Go to Service accounts</IonText><br />
                    <img class="imgprocedure" src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%202.png?alt=media&token=3ac6d0a5-b661-4b81-b4a7-40dacb08c190"
                        alt="image" /><br /><br />

                    <IonText>Click Generate new private key to download the key</IonText><br /><br />
                    <img class="imgprocedure" src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%203.png?alt=media&token=c643ed54-4f20-4b6e-b474-a00cd2d552a0"
                        alt="image" /><br /><br />
                    <IonText>In your Desktop create a folder and put that key into that folder</IonText><br /><br />

                    <IonText>Rename that key whatever name you want</IonText><br /><br />

                    <IonText>Click the and type in the address location of the folder on the top "cmd"</IonText><br /><br />

                    <img class="imgprocedure" src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%204.png?alt=media&token=b7c9597e-4cc0-430a-8ac3-4c99fb255f0a"
                        alt="image" /><br /><br />

                    <img class="imgprocedure" src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%205.png?alt=media&token=349b63db-2e1d-479d-9978-48b0f2a6edb3"
                        alt="image" /><br /><br />

                    <IonText>Then execute this command</IonText><br /><br />

                    <IonText>npx -p node-firestore-import-export firestore-export -a (keyname).json -b (name of the backup).json</IonText><br /><br />

                    <IonText>Replace and put the keyname and edit the desired backup file name then execute it just click enter</IonText><br /><br />

                    <img class="imgprocedure" src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%206.png?alt=media&token=f434b1bc-db97-4e4c-b5db-b45a2d2aafb1"
                        alt="image" /><br /><br />

                    <IonText>Confirm to export by pressing y if it ask you</IonText><br /><br />
                </div>

                <div class="instruction">
                    <IonText class="titles">Import Database</IonText><br /><br />

                    <IonText>Just like in export you will go to the cmd but execute this</IonText><br /><br />

                    <IonText>npx -p node-firestore-import-export firestore-import -a (keyname).json -b (name of the backup).json</IonText><br /><br />

                    <IonText>Replace and put the keyname and edit the backup file name then execute it just click enter</IonText><br /><br />

                    <img class="imgprocedure" src="https://firebasestorage.googleapis.com/v0/b/trabawho-c6f61.appspot.com/o/backupprocedure%2Fstep%207.png?alt=media&token=efb68935-bf3b-4e4e-b40a-d30398c7d37d"
                        alt="image" /><br /><br />

                    <IonText>Confirm to import by pressing y if it ask you</IonText><br /><br />
                </div>
            </div>
        </IonContent>
        <div class="buttonprocedure">
            <IonButton style="width: 80%; --background: #262c5c;" @click="backupmodal(false)">DONE</IonButton>
        </div>
    </IonModal>
</template>
<script lang="ts">
import './admin.css';
import { onMounted, ref } from 'vue';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Chart from 'chart.js/auto';
import { ChartConfiguration } from 'chart.js';
import { db } from '@/firebaseDB';
import { IonPage, IonGrid, IonRow, IonCol, IonText, IonContent, IonButton, IonModal } from '@ionic/vue';
import { getJobPostings, getusers, getemployers, getjobseekers } from './admin-Model';
import { print } from 'ionicons/icons';
export default {
    components: {
        IonPage,
        IonGrid,
        IonRow,
        IonCol,
        IonText,
        IonContent,
        IonButton,
        IonModal,
    },
    methods: {
        executeCommand() {

        },
        backupmodal(x) {
            this.isbackup = x
        },
    },
    data() {
        return {
            isbackup: false
        }
    },
    setup() {
        const Utils = {
            months: ({ count }) => {
                const labels = [];
                const currentDate = new Date();

                for (let i = 0; i < count; i++) {
                    labels.push(currentDate.toLocaleString('default', { month: 'long' }));
                    currentDate.setMonth(currentDate.getMonth() + 1);
                }

                return labels;
            }
        };

        const Itils = {
            years: ({ count }) => {
                const labels = [];
                const currentDate = new Date();

                currentDate.setFullYear(2023);

                for (let i = 0; i < count; i++) {
                    labels.push(currentDate.toLocaleString('default', { year: 'numeric' }));
                    currentDate.setFullYear(currentDate.getFullYear() + 1);
                }

                return labels;
            }
        };

        const users = ref([]);
        const datauserm = [];
        const datausery = [];
        const employers = ref([]);
        const jobseekers = ref([]);
        const jobpostings = ref([]);
        const jobdatam = [];
        const jobdatay = [];

        onMounted(async () => {
            users.value = await getusers();
            jobpostings.value = await getJobPostings();
            employers.value = await getemployers();
            jobseekers.value = await getjobseekers();

            // bar - users, jobs, month

            const usersms = Utils.months({ count: 12 });
            const jobsms = Utils.months({ count: 12 });

            for (const usersm of usersms) {
                const usersInMonth = users.value.filter((user) => {
                    if (user.dateCreated) {
                        const date = new Date(user.dateCreated);
                        const options = { month: 'long' };
                        const userMonth = date.toLocaleString('default', { month: 'long' });
                        return userMonth === usersm;
                    }
                    return false;
                });
                datauserm.push(usersInMonth.length);
            }
            for (const jobsm of jobsms) {
                const jobsInMonth = jobpostings.value.filter((job) => {
                    if (job.dateCreated) {
                        const date = new Date(job.dateCreated);
                        const options = { month: 'long' };
                        const jobMonth = date.toLocaleString('default', { month: 'long' });
                        return jobMonth === jobsm;
                    }
                    return false;
                });
                jobdatam.push(jobsInMonth.length);
            }

            console.log(datauserm);
            console.log(jobdatam);

            const chartData = {
                labels: usersms,
                datasets: [
                    {
                        label: 'Users in Month',
                        data: datauserm,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        hoverOffset: 4,
                    },
                    {
                        label: 'Jobs in Month',
                        data: jobdatam,
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        hoverOffset: 4,
                    },
                ],
            };

            const config: ChartConfiguration = {
                type: 'bar',
                data: chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvas = document.getElementById('userm') as HTMLCanvasElement;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    new Chart(ctx, config);
                }
            }

            // bar - users, jobs, year

            const usersys = Itils.years({ count: 12 });
            const jobsys = Itils.years({ count: 12 });

            for (const usersy of usersys) {
                const userInYear = users.value.filter((user) => {
                    if (user.dateCreated) {
                        const date = new Date(user.dateCreated);
                        const userYear = date.toLocaleString('default', { year: 'numeric' });
                        return userYear === usersy;
                    }
                    return false;
                });

                datausery.push(userInYear.length);
            }
            for (const jobsy of jobsys) {
                const jobInYear = jobpostings.value.filter((job) => {
                    if (job.dateCreated) {
                        const date = new Date(job.dateCreated);
                        const jobYear = date.toLocaleString('default', { year: 'numeric' });
                        return jobYear === jobsy;
                    }
                    return false;
                });

                jobdatay.push(jobInYear.length);
            }

            console.log(datausery);
            console.log(jobdatay);

            const userdatay = {
                labels: usersys,
                datasets: [
                    {
                        label: 'Users in Year',
                        data: datausery,
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        hoverOffset: 4,
                    },
                    {
                        label: 'Jobs in Year',
                        data: jobdatay,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        hoverOffset: 4,
                    },
                ],
            };

            const configuser: ChartConfiguration = {
                type: 'bar',
                data: userdatay,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvasuser = document.getElementById('usery') as HTMLCanvasElement;
            if (canvasuser) {
                const ctx = canvasuser.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configuser);
                }
            }
        });
    }

}
</script>
<style>
.titles {
    font-weight: bold;
    font-size: large;
}
</style>
