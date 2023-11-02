<template>
    <IonPage>
        <IonContent>
            <div class="data-analytics">
                <canvas id="jobsm"></canvas>
            </div>
        </IonContent>
    </IonPage>
</template>
  
<script lang="ts">
import "./dataanalytics.css";
import { IonPage, IonGrid, IonRow, IonCol, IonText, IonContent } from '@ionic/vue';
import Chart from 'chart.js/auto';
import { ref, onMounted } from 'vue';
import { ChartConfiguration } from 'chart.js';
import "./dataanalytics.css";
import { getDashboardProfile, getJobPostings } from './Dashboard-Model';

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
        const user = ref(null);
        const jobPostings = ref([]);
        const jobdatam = [];
        const jobdatay = [];

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

        onMounted(async () => {
            const userEmail = localStorage.getItem("email");
            user.value = await getDashboardProfile(userEmail);

            jobPostings.value = await getJobPostings(
                userEmail,
                user.value.businessname,
                user.value.id,
            );

            //bar- job month years

            const jobmonths = Utils.months({ count: 12 });
            const jobyears = Itils.years({ count: 12 });

            for (const jobmonth of jobmonths) {
                const jobsInMonth = jobPostings.value.filter((job) => {
                    if (job.dateCreated) {
                        const date = new Date(job.dateCreated);
                        const jobMonth = date.toLocaleString('default', { month: 'long' });
                        return jobMonth === jobmonth;
                    }
                    return false;
                });

                jobdatam.push(jobsInMonth.length);
            }

            for (const jobyear of jobyears) {
                const jobsInYear = jobPostings.value.filter((job) => {
                    if (job.dateCreated) {
                        const date = new Date(job.dateCreated);
                        const jobYear = date.toLocaleString('default', { year: 'numeric' });
                        return jobYear === jobyear;
                    }
                    return false;
                });

                jobdatay.push(jobsInYear.length);
            }

            console.log(jobdatam);
            console.log(jobdatay);

            const jobsdatam = {
                labels: jobmonths,
                datasets: [
                    {
                        label: 'Jobs in Month',
                        data: jobdatam,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        hoverOffset: 4,
                    },
                    {
                        label: 'Jobs in Years',
                        data: jobdatay,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        hoverOffset: 4,
                    },
                ],
            };

            const configjobm: ChartConfiguration = {
                type: 'bar',
                data: jobsdatam,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvasjobsm = document.getElementById('jobsm') as HTMLCanvasElement;
            if (canvasjobsm) {
                const ctx = canvasjobsm.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configjobm);
                }
            }
        });

        return {
            user,
            jobPostings,
        }
    },
};
</script>
  
<style scoped></style>
  