<template>
    <IonPage>
        <IonContent>
            <div class="flexcenter" style="font-size: 50px; margin-top: 20px; font-family: BebasNeue-Regular;">
                <IonText>
                    Statistics
                </IonText>
            </div>

            <div class="flexcenter" style="width: 100%;">
                <div class="data-analytics" style="width: 40%;">
                    <canvas id="Empljobseeker"></canvas>
                </div>

                <div style="width: 20%;">
                    <IonCard style="height: 100px; --background: lightblue" class="flexcenter">
                        <div>
                            <div class="flexcenter">
                                <IonText style="font-size: 20px; color: black;">
                                    Male Users
                                </IonText>
                            </div>
                            <div class="flexcenter">
                                <IonText style="font-size: 20px; color: black;">
                                    {{ male.length }}
                                </IonText>
                            </div>
                        </div>
                    </IonCard>
                    <IonCard style="height: 100px; --background: lightpink" class="flexcenter">
                        <div>
                            <div class="flexcenter">
                                <IonText style="font-size: 20px; color: black;">
                                    Female Users
                                </IonText>
                            </div>
                            <div class="flexcenter">
                                <IonText style="font-size: 20px; color: black;">
                                    {{ female.length }}
                                </IonText>
                            </div>
                        </div>
                    </IonCard>
                </div>

                <div class="data-analytics" style="width: 40%;">
                    <canvas id="companytype"></canvas>
                </div>
            </div>

            <div class="flexcenter" style="font-size: 50px; margin-top: 20px; border-top: 1px solid lightgray; font-family: BebasNeue-Regular;">
                <IonText>
                    Location
                </IonText>
            </div>

            <div class="flexcenter" style="width: 100%;">
                <div class="data-analytics" style="width: 50%;">
                    <canvas style="width: 100%;" id="pjobseeker"></canvas>
                </div>
                <div class="data-analytics" style="width: 50%;">
                    <canvas style="width: 100%;" id="cjobseeker"></canvas>
                </div>
            </div>

            <div class="flexcenter" style="font-size: 50px; margin-top: 20px; border-top: 1px solid lightgray; font-family: BebasNeue-Regular;">
                <IonText>
                    Users
                </IonText>
            </div>

            <div class="flexcenter">
                <div class="data-analytics">
                    <canvas id="users"></canvas>
                </div>
                <div class="data-analytics">
                    <canvas id="usery"></canvas>
                </div>
            </div>

            <div class="flexcenter" style="font-size: 50px; border-top: 1px solid lightgray; margin-top: 20px; font-family: BebasNeue-Regular;">
                <IonText>
                    Jobs
                </IonText>
            </div>


            <div class="flexcenter">
                <div class="data-analytics">
                    <canvas id="jobs"></canvas>
                </div>
                <div class="data-analytics">
                    <canvas id="joby"></canvas>
                </div>
            </div>
        </IonContent>
    </IonPage>
</template>
  
<script lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Chart from 'chart.js/auto';
import { ChartConfiguration } from 'chart.js';
import { db } from '@/firebaseDB';
import { IonPage, IonGrid, IonRow, IonCol, IonText, IonContent, IonSelect, IonSelectOption, IonCard } from '@ionic/vue';
import {
    getJobPostings,
    getusers,
    getemployers,
    getjobseekers,
    getjobseekermale,
    getjobseekerfemale,
    getjobseekercagayan,
    getjobseekerisabela,
    getjobseekernuevavizcaya,
    getjobseekerquirino,
    getjobseekertuguegarao,
    getjobseekeraparri,
    getjobseekerlallo,
    getjobseekergattaran,
    getjobseekerpenablanca,
    getjobseekerilagan,
    getjobseekercuayan,
    getjobseekersantiago,
    getjobseekeralicia,
    getjobseekerroxas,
    getjobseekercabagan,
    getjobseekerbayombong,
    getjobseekersolano,
    getjobseekerbagabag,
    getjobseekerbambang,
    getjobseekercabarroguis,
    getjobseekermaddela,
    getjobseekeraglipay,
    getprivate,
    getgovernment,
    getmanpower,

} from './admin-Model';
import { getActivePinia } from 'pinia';
import { getStorage } from '@firebase/storage';
export default {
    components: {
        IonPage,
        IonGrid,
        IonRow,
        IonCol,
        IonText,
        IonContent,
        IonSelect,
        IonSelectOption,
        IonCard
    },
    data() {
        return {
            jobs: "",
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
        const data = [];
        const datausery = [];
        const employers = ref([]);
        const jobseekers = ref([]);
        const male = ref([]);
        const female = ref([]);

        const pcompany = ref([]);
        const gcompany = ref([]);
        const mcompany = ref([]);

        const cagayan = ref([]);
        const isabela = ref([]);
        const nuevavizcaya = ref([]);
        const quirino = ref([]);

        const tuguegarao = ref([]);
        const aparri = ref([]);
        const lallo = ref([]);
        const gattaran = ref([]);
        const penablanca = ref([]);
        const ilagan = ref([]);
        const cuayan = ref([]);
        const santiago = ref([]);
        const alicia = ref([]);
        const roxas = ref([]);
        const cabagan = ref([]);
        const bayombong = ref([]);
        const solano = ref([]);
        const bagabag = ref([]);
        const bambang = ref([]);
        const cabarroguis = ref([]);
        const maddela = ref([]);
        const aglipay = ref([]);

        const jobpostings = ref([]);
        const jobdata = [];
        const jobdatay = [];


        onMounted(async () => {

            users.value = await getusers();
            jobpostings.value = await getJobPostings();
            employers.value = await getemployers();
            jobseekers.value = await getjobseekers();
            male.value = await getjobseekermale();
            female.value = await getjobseekerfemale();

            cagayan.value = await getjobseekercagayan();
            isabela.value = await getjobseekerisabela();
            nuevavizcaya.value = await getjobseekernuevavizcaya();
            quirino.value = await getjobseekerquirino();

            aparri.value = await getjobseekeraparri();
            lallo.value = await getjobseekerlallo();
            gattaran.value = await getjobseekergattaran();
            penablanca.value = await getjobseekerpenablanca();
            ilagan.value = await getjobseekerilagan();
            cuayan.value = await getjobseekercuayan();
            santiago.value = await getjobseekersantiago();
            alicia.value = await getjobseekeralicia();
            roxas.value = await getjobseekerroxas();
            cabagan.value = await getjobseekercabagan();
            bayombong.value = await getjobseekerbayombong();
            solano.value = await getjobseekersolano();
            bagabag.value = await getjobseekerbagabag();
            bambang.value = await getjobseekerbambang();
            cabarroguis.value = await getjobseekercabarroguis();
            maddela.value = await getjobseekermaddela();
            aglipay.value = await getjobseekeraglipay();

            pcompany.value = await getprivate();
            gcompany.value = await getgovernment();
            mcompany.value = await getmanpower();

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
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 1,
                        hoverOffset: 4,
                    },
                ],
            };

            const config: ChartConfiguration = {
                type: 'line',
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

            //company type

            const companytype = ['Private', 'Government', 'Manpower'];
            const companydata = {
                labels: companytype,
                datasets: [
                    {
                        label: 'Company Types',
                        data: [pcompany.value.length, gcompany.value.length, mcompany.value.length],
                        backgroundColor: [
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgb(153, 102, 255)',
                        ],
                        borderWidth: 1,
                        hoverOffset: 4,
                    },
                ],
            };

            const configcompany: ChartConfiguration = {
                type: 'bar',
                data: companydata,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvascompany = document.getElementById('companytype') as HTMLCanvasElement;
            if (canvascompany) {
                const ctx = canvascompany.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configcompany);
                }
            }

            //bar - province

            const province = ['Cagayan', 'Isabela', 'Nueva Vizcaya', 'Quirino'];
            const pdata = {
                labels: province,
                datasets: [
                    {
                        label: 'Jobseekers in Province',
                        data: [cagayan.value.length, isabela.value.length, nuevavizcaya.value.length, quirino.value.length],
                        backgroundColor: [
                            'rgba(0, 0, 0, 0.2)',
                        ],
                        borderColor: [
                            'rgb(0, 0, 0)',
                        ],
                        borderWidth: 1,
                        hoverOffset: 4,
                    },
                ],
            };

            const configp: ChartConfiguration = {
                type: 'bar',
                data: pdata,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const pjseeker = document.getElementById('pjobseeker') as HTMLCanvasElement;
            if (pjseeker) {
                const ctx = pjseeker.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configp);
                }
            }

            //bar city/town

            const citowm = ['Tuguegarao', 'Aparri', 'Lallo', 'Gattaran', 'Penablanca', 'Ilagan', 'Cauayan', 'Santiago', 'Alicia', 'Roxas', 'Cabagan', 'Bayombong', 'Solano', 'Bagabag', 'Bambang', 'Cabarroguis', 'Maddela', 'Aglipay'];
            const cdata = {
                labels: citowm,
                datasets: [
                    {
                        label: 'Jobseekers in City/Town',
                        data: [tuguegarao.value.length, aparri.value.length, lallo.value.length, gattaran.value.length, penablanca.value.length, ilagan.value.length, cuayan.value.length, santiago.value.length, alicia.value.length, roxas.value.length, cabagan.value.length, bayombong.value.length, solano.value.length, bagabag.value.length, bambang.value.length, cabarroguis.value.length, maddela.value.length, aglipay.value.length],
                        backgroundColor: [
                            'rgba(0, 0, 139, 0.2)'
                        ],
                        borderColor: [
                            'rgb(0, 0, 139)'
                        ],
                        borderWidth: 1,
                        hoverOffset: 4,
                    },
                ],
            };

            const configc: ChartConfiguration = {
                type: 'bar',
                data: cdata,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const cjseeker = document.getElementById('cjobseeker') as HTMLCanvasElement;
            if (cjseeker) {
                const ctx = cjseeker.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configc);
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
                        ],
                        borderColor: 'rgb(255, 159, 64)',
                        borderWidth: 1,
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
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1,
                        hoverOffset: 4,
                    },
                ],
            };

            const configjob: ChartConfiguration = {
                type: 'line',
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
                        borderColor: 'rgb(54, 162, 235)',
                        borderWidth: 1,
                        hoverOffset: 4,
                    },
                ],
            };

            const configuser: ChartConfiguration = {
                type: 'line',
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
                        backgroundColor: 'rgba(255, 205, 86, 0.2)',
                        borderColor: 'rgb(184, 134, 11)',
                        borderWidth: 1,
                        hoverOffset: 4,
                    },
                ],
            };

            const configjobs: ChartConfiguration = {
                type: 'line',
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
            male,
            female,
            cagayan,
            isabela,
            nuevavizcaya,
            quirino,
            tuguegarao,
            aparri,
            lallo,
            gattaran,
            penablanca,
            ilagan,
            cuayan,
            santiago,
            alicia,
            roxas,
            cabagan,
            bayombong,
            solano,
            bagabag,
            bambang,
            cabarroguis,
            maddela,
            aglipay,
            pcompany,
            gcompany,
            mcompany,
        }
    }
};
</script>
<style scoped>
.analytics-box {
    width: 200px;
    height: 100px;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
    display: inline-block;
    text-align: center;
    margin-left: 300px;
}

.analytics-number {
    font-size: 100px;
    font-weight: bold;
}
</style>
  