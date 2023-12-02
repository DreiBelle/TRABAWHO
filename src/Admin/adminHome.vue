<template>
    <IonPage>
        <IonContent>
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
                <IonButton style="--background: #262c5c; height: 50px; font-size: 15px;">
                    Export All data from database
                </IonButton>
            </div>
        </IonContent>
    </IonPage>
</template>
<script lang="ts">
import './admin.css';
import { onMounted, ref } from 'vue';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Chart from 'chart.js/auto';
import { ChartConfiguration } from 'chart.js';
import { db } from '@/firebaseDB';
import { IonPage, IonGrid, IonRow, IonCol, IonText, IonContent, IonButton } from '@ionic/vue';
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
