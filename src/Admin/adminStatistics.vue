<template>
    <IonPage>
        <IonContent>
            <div class="data-analytics">
                <canvas id="Empljobseeker"></canvas>
            </div>
            <div class="data-analytics">
                <canvas id="users"></canvas>
            </div>
            <div class="data-analytics">
                <canvas id="jobs"></canvas>
            </div>
            <div class="data-analytics">
                <canvas id="usery"></canvas>
            </div>
            <div class="data-analytics">
                <canvas id="joby"></canvas>
            </div>
        </IonContent>
    </IonPage>
</template>
  
<script lang="ts">
import { onMounted, ref } from 'vue';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Chart from 'chart.js/auto';
import { ChartConfiguration } from 'chart.js';
import { db } from '@/firebaseDB';
import { IonPage, IonGrid, IonRow, IonCol, IonText, IonContent } from '@ionic/vue';
import { getJobPostings, getusers, getemployers, getjobseekers } from './admin-Model';
export default {
    components: {
        IonPage,
        IonGrid,
        IonRow,
        IonCol,
        IonText,
        IonContent
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
        const data = [];
        const datausery = [];
        const employers = ref([]);
        const jobseekers = ref([]);
        const jobpostings = ref([]);
        const jobdata = [];
        const jobdatay = [];


        onMounted(async () => {

            users.value = await getusers();
            jobpostings.value = await getJobPostings();
            employers.value = await getemployers();
            jobseekers.value = await getjobseekers();

            const labels = Utils.months({ count: 12 });

            // bar - users month

            for (const label of labels) {
                const usersInMonth = users.value.filter((user) => {
                    if (user.dateCreated) {
                        const date = new Date(user.dateCreated);
                        const options = { month: 'long' };
                        const userMonth = date.toLocaleString('default', { month: 'long' });
                        return userMonth === label;
                    }
                    return false;
                });
                data.push(usersInMonth.length);
            }

            console.log(data);

            const chartData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Users in Month',
                        data: data,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
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

            const canvas = document.getElementById('users') as HTMLCanvasElement;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    new Chart(ctx, config);
                }
            }

            // bar - Employers & Jobseekers

            const EJ = ['Employers', 'Jobseekers'];
            const empjobseeker = {
                labels: EJ,
                datasets: [
                    {
                        label: 'Employers/Jobseekers',
                        data: [employers.value.length, jobseekers.value.length],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                        ],
                        hoverOffset: 4,
                    },
                ],
            };

            const configEJ: ChartConfiguration = {
                type: 'bar',
                data: empjobseeker,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };


            const empluser = document.getElementById('Empljobseeker') as HTMLCanvasElement;
            if (empluser) {
                const ctx = empluser.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configEJ);
                }
            }

            //bar - jobpostings month

            const months = Utils.months({ count: 12 });

            for (const month of months) {
                const jobsInMonth = jobpostings.value.filter((job) => {
                    if (job.dateCreated) {
                        const date = new Date(job.dateCreated);
                        const options = { month: 'long' };
                        const jobMonth = date.toLocaleString('default', { month: 'long' });
                        return jobMonth === month;
                    }
                    return false;
                });

                jobdata.push(jobsInMonth.length);
            }

            console.log(jobdata);

            const jobsdata = {
                labels: months,
                datasets: [
                    {
                        label: 'Jobs in Month',
                        data: jobdata,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        hoverOffset: 4,
                    },
                ],
            };

            const configjob: ChartConfiguration = {
                type: 'bar',
                data: jobsdata,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvasjobs = document.getElementById('jobs') as HTMLCanvasElement;
            if (canvasjobs) {
                const ctx = canvasjobs.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configjob);
                }
            }

            // bar - users year

            const yearsusers = Itils.years({ count: 12 });

            for (const yearsuser of yearsusers) {
                const userInYear = users.value.filter((user) => {
                    if (user.dateCreated) {
                        const date = new Date(user.dateCreated);
                        const userYear = date.toLocaleString('default', { year: 'numeric' });
                        return userYear === yearsuser;
                    }
                    return false;
                });

                datausery.push(userInYear.length);
            }

            console.log(datausery);

            const userdatay = {
                labels: yearsusers,
                datasets: [
                    {
                        label: 'Users in Year',
                        data: datausery,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
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

            //bar - jobpostings

            const yearjobs = Itils.years({ count: 12 });

            for (const yearjob of yearjobs) {
                const jobInYear = jobpostings.value.filter((job) => {
                    if (job.dateCreated) {
                        const date = new Date(job.dateCreated);
                        const jobYear = date.toLocaleString('default', { year: 'numeric' });
                        return jobYear === yearjob;
                    }
                    return false;
                });

                jobdatay.push(jobInYear.length);
            }

            console.log(jobdatay);

            const datajoby = {
                labels: yearjobs,
                datasets: [
                    {
                        label: 'Jobs in Year',
                        data: jobdatay,
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        hoverOffset: 4,
                    },
                ],
            };

            const configjobs: ChartConfiguration = {
                type: 'bar',
                data: datajoby,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvajob = document.getElementById('joby') as HTMLCanvasElement;
            if (canvajob) {
                const ctx = canvajob.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configjobs);
                }
            }

        });

        return {
            users,
            jobpostings,
            employers,
            jobseekers,
        }
    },
};
</script>
  