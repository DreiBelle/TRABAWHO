<template>
    <IonPage>
        <IonContent>
            <!-- <div>
                <p>Likes this week: {{ likesThisWeek }}</p>
            </div>
            <div>
                <p>Views this week: {{ viewsThisWeek }}</p>
            </div> -->

            <div class="flexcenter">
                <div>
                    <canvas width="400" height="100%" class="data-container-graph1" id="liked"></canvas>
                </div>
                <div>
                    <canvas class="data-container-graph1" id="viewd"></canvas>
                </div>
            </div>

            <div class="data-analytics">
                <canvas id="successd"></canvas>
            </div>

            <div class="data-analytics">
                <canvas id="successm"></canvas>
            </div>

            <div class="data-analytics">
                <canvas id="successy"></canvas>
            </div>

            <div class="data-analytics">
                <canvas id="myChart"></canvas>
            </div>

            <div class="data-analytics">
                <canvas id="myCharts"></canvas>
            </div>

            <div class="data-analytics">
                <canvas id="jobd"></canvas>
            </div>
            <div class="data-analytics">
                <canvas id="jobsm"></canvas>
            </div>
            <div class="data-analytics">
                <canvas id="jobsy"></canvas>
            </div>
        </IonContent>
    </IonPage>
</template>
  
<script lang="ts">
import { IonPage, IonGrid, IonRow, IonCol, IonText, IonContent, IonSelect, IonSelectOption } from '@ionic/vue';
import Chart from 'chart.js/auto';
import { ref, onMounted } from 'vue';
import { ChartConfiguration } from 'chart.js';
import "./dataanalytics.css";
import { getDashboardProfile, getJobPostings, getlikes, getviews, getsuccessswipe } from './Dashboard-Model';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '@/firebaseDB';

export default {
    components: {
        IonPage,
        IonGrid,
        IonRow,
        IonCol,
        IonText,
        IonContent,
        IonSelect,
        IonSelectOption
    },
    setup() {


        const user = ref(null);
        const jobPostings = ref([]);
        const swipesuccess = ref([]);
        const like = ref(null);
        const view = ref(null);
        let likes = ref(0);
        let views = ref(0);
        let bookmarks = ref(0);
        const jobdatam = [];
        const jobdatay = [];
        const jobdatad = [];
        const likedatad = [];
        const viewdatad = [];
        const successdatad = [];
        const successdatam = [];
        const successdatay = [];
        const s = ref([]);

        const x1 = ref(0);
        const x2 = ref(0);
        const x3 = ref(0);
        const x4 = ref(0);
        const x5 = ref(0);
        const x6 = ref(0);
        const x7 = ref(0);
        const x8 = ref(0);
        const x9 = ref(0);
        const x10 = ref(0);
        const x11 = ref(0);
        const x12 = ref(0);
        const x13 = ref(0);
        const x14 = ref(0);
        const x15 = ref(0);
        const x16 = ref(0);
        const x17 = ref(0);
        const x18 = ref(0);
        const x19 = ref(0);
        const x20 = ref(0);
        const x21 = ref(0);
        const x22 = ref(0);
        const x23 = ref(0);
        const x24 = ref(0);
        const x25 = ref(0);
        const x26 = ref(0);
        const x27 = ref(0);
        const x28 = ref(0);
        const x29 = ref(0);
        const x30 = ref(0);

        const y1 = ref(0);
        const y2 = ref(0);
        const y3 = ref(0);
        const y4 = ref(0);
        const y5 = ref(0);
        const y6 = ref(0);
        const y7 = ref(0);
        const y8 = ref(0);
        const y9 = ref(0);
        const y10 = ref(0);
        const y11 = ref(0);
        const y12 = ref(0);
        const y13 = ref(0);
        const y14 = ref(0);
        const y15 = ref(0);
        const y16 = ref(0);
        const y17 = ref(0);
        const y18 = ref(0);
        const y19 = ref(0);
        const y20 = ref(0);
        const y21 = ref(0);
        const y22 = ref(0);
        const y23 = ref(0);
        const y24 = ref(0);
        const y25 = ref(0);
        const y26 = ref(0);
        const y27 = ref(0);
        const y28 = ref(0);
        const y29 = ref(0);
        const y30 = ref(0);
        const y31 = ref(0);
        const y32 = ref(0);
        const y33 = ref(0);
        const y34 = ref(0);
        const y35 = ref(0);
        const y36 = ref(0);
        const y37 = ref(0);
        const y38 = ref(0);
        const y39 = ref(0);
        const y40 = ref(0);
        const y41 = ref(0);
        const y42 = ref(0);
        const y43 = ref(0);
        const y44 = ref(0);
        const y45 = ref(0);
        const y46 = ref(0);
        const y47 = ref(0);
        const y48 = ref(0);
        const y49 = ref(0);
        const y50 = ref(0);
        const y51 = ref(0);
        const y52 = ref(0);
        const y53 = ref(0);
        const y54 = ref(0);
        const y55 = ref(0);
        const y56 = ref(0);
        const y57 = ref(0);
        const y58 = ref(0);
        const y59 = ref(0);
        const y60 = ref(0);
        const y61 = ref(0);
        const y62 = ref(0);
        const y63 = ref(0);
        const y64 = ref(0);
        const y65 = ref(0);
        const y66 = ref(0);
        const y67 = ref(0);
        const y68 = ref(0);
        const y69 = ref(0);
        const y70 = ref(0);
        const y71 = ref(0);
        const y72 = ref(0);
        const y73 = ref(0);
        const y74 = ref(0);
        const y75 = ref(0);
        const y76 = ref(0);
        const y77 = ref(0);
        const y78 = ref(0);
        const y79 = ref(0);
        const y80 = ref(0);
        const y81 = ref(0);
        const y82 = ref(0);
        const y83 = ref(0);
        const y84 = ref(0);
        const y85 = ref(0);
        const y86 = ref(0);
        const y87 = ref(0);
        const y88 = ref(0);
        const y89 = ref(0);
        const y90 = ref(0);
        const y91 = ref(0);
        const y92 = ref(0);
        const y93 = ref(0);
        const y94 = ref(0);
        const y95 = ref(0);
        const y96 = ref(0);
        const y97 = ref(0);
        const y98 = ref(0);
        const y99 = ref(0);
        const y100 = ref(0);
        const y101 = ref(0);
        const y102 = ref(0);
        const y103 = ref(0);
        const y104 = ref(0);
        const y105 = ref(0);
        const y106 = ref(0);
        const y107 = ref(0);
        const y108 = ref(0);
        const y109 = ref(0);
        const y110 = ref(0);
        const y111 = ref(0);
        const y112 = ref(0);
        const y113 = ref(0);
        const y114 = ref(0);
        const y115 = ref(0);
        const y116 = ref(0);
        const y117 = ref(0);
        const y118 = ref(0);
        const y119 = ref(0);
        const y120 = ref(0);
        const y121 = ref(0);
        const y122 = ref(0);
        const y123 = ref(0);
        const y124 = ref(0);
        const y125 = ref(0);
        const y126 = ref(0);
        const y127 = ref(0);
        const y128 = ref(0);
        const y129 = ref(0);
        const y130 = ref(0);
        const y131 = ref(0);
        const y132 = ref(0);
        const y133 = ref(0);
        const y134 = ref(0);
        const y135 = ref(0);
        const y136 = ref(0);
        const y137 = ref(0);
        const y138 = ref(0);
        const y139 = ref(0);
        const y140 = ref(0);
        const y141 = ref(0);
        const y142 = ref(0);
        const y143 = ref(0);
        const y144 = ref(0);
        const y145 = ref(0);
        const y146 = ref(0);
        const y147 = ref(0);
        const y148 = ref(0);
        const y149 = ref(0);
        const y150 = ref(0);
        const y151 = ref(0);
        const y152 = ref(0);
        const y153 = ref(0);
        const y154 = ref(0);
        const y155 = ref(0);
        const y156 = ref(0);
        const y157 = ref(0);
        const y158 = ref(0);
        const y159 = ref(0);
        const y160 = ref(0);
        const y161 = ref(0);
        const y162 = ref(0);
        const y163 = ref(0);
        const y164 = ref(0);
        const y165 = ref(0);
        const y166 = ref(0);
        const y167 = ref(0);
        const y168 = ref(0);
        const y169 = ref(0);
        const y170 = ref(0);
        const y171 = ref(0);
        const y172 = ref(0);
        const y173 = ref(0);
        const y174 = ref(0);
        const y175 = ref(0);
        const y176 = ref(0);
        const y177 = ref(0);
        const y178 = ref(0);
        const y179 = ref(0);
        const y180 = ref(0);
        const y181 = ref(0);
        const y182 = ref(0);
        const y183 = ref(0);
        const y184 = ref(0);
        const y185 = ref(0);
        const y186 = ref(0);
        const y187 = ref(0);
        const y188 = ref(0);
        const y189 = ref(0);
        const y190 = ref(0);
        const y191 = ref(0);
        const y192 = ref(0);
        const y193 = ref(0);
        const y194 = ref(0);
        const y195 = ref(0);
        const y196 = ref(0);
        const y197 = ref(0);
        const y198 = ref(0);
        const y199 = ref(0);
        const y200 = ref(0);
        const y201 = ref(0);
        const y202 = ref(0);
        const y203 = ref(0);
        const y204 = ref(0);
        const y205 = ref(0);
        const y206 = ref(0);
        const y207 = ref(0);
        const y208 = ref(0);
        const y209 = ref(0);
        const y210 = ref(0);
        const y211 = ref(0);
        const y212 = ref(0);
        const y213 = ref(0);
        const y214 = ref(0);
        const y215 = ref(0);
        const y216 = ref(0);
        const y217 = ref(0);
        const y218 = ref(0);
        const y219 = ref(0);
        const y220 = ref(0);
        const y221 = ref(0);
        const y222 = ref(0);
        const y223 = ref(0);
        const y224 = ref(0);
        const y225 = ref(0);
        const y226 = ref(0);
        const y227 = ref(0);
        const y228 = ref(0);
        const y229 = ref(0);
        const y230 = ref(0);
        const y231 = ref(0);
        const y232 = ref(0);
        const y233 = ref(0);
        const y234 = ref(0);
        const y235 = ref(0);
        const y236 = ref(0);
        const y237 = ref(0);
        const y238 = ref(0);
        const y239 = ref(0);
        const y240 = ref(0);
        const y241 = ref(0);
        const y242 = ref(0);
        const y243 = ref(0);
        const y244 = ref(0);
        const y245 = ref(0);
        const y246 = ref(0);
        const y247 = ref(0);
        const y248 = ref(0);
        const y249 = ref(0);
        const y250 = ref(0);
        const y251 = ref(0);
        const y252 = ref(0);
        const y253 = ref(0);
        const y254 = ref(0);
        const y255 = ref(0);
        const y256 = ref(0);
        const y257 = ref(0);
        const y258 = ref(0);
        const y259 = ref(0);
        const y260 = ref(0);
        const y261 = ref(0);
        const y262 = ref(0);
        const y263 = ref(0);
        const y264 = ref(0);
        const y265 = ref(0);
        const y266 = ref(0);
        const y267 = ref(0);
        const y268 = ref(0);
        const y269 = ref(0);
        const y270 = ref(0);
        const y271 = ref(0);
        const y272 = ref(0);
        const y273 = ref(0);
        const y274 = ref(0);
        const y275 = ref(0);
        const y276 = ref(0);
        const y277 = ref(0);
        const y278 = ref(0);
        const y279 = ref(0);
        const y280 = ref(0);
        const y281 = ref(0);
        const y282 = ref(0);
        const y283 = ref(0);
        const y284 = ref(0);
        const y285 = ref(0);
        const y286 = ref(0);
        const y287 = ref(0);
        const y288 = ref(0);
        const y289 = ref(0);
        const y290 = ref(0);
        const y291 = ref(0);
        const y292 = ref(0);
        const y293 = ref(0);
        const y294 = ref(0);
        const y295 = ref(0);
        const y296 = ref(0);
        const y297 = ref(0);
        const y298 = ref(0);
        const y299 = ref(0);
        const y300 = ref(0);
        const y301 = ref(0);
        const y302 = ref(0);
        const y303 = ref(0);
        const y304 = ref(0);
        const y305 = ref(0);
        const y306 = ref(0);
        const y307 = ref(0);
        const y308 = ref(0);
        const y309 = ref(0);
        const y310 = ref(0);
        const y311 = ref(0);
        const y312 = ref(0);
        const y313 = ref(0);
        const y314 = ref(0);
        const y315 = ref(0);
        const y316 = ref(0);
        const y317 = ref(0);
        const y318 = ref(0);
        const y319 = ref(0);
        const y320 = ref(0);
        const y321 = ref(0);
        const y322 = ref(0);
        const y323 = ref(0);
        const y324 = ref(0);
        const y325 = ref(0);
        const y326 = ref(0);
        const y327 = ref(0);
        const y328 = ref(0);
        const y329 = ref(0);
        const y330 = ref(0);
        const y331 = ref(0);
        const y332 = ref(0);
        const y333 = ref(0);
        const y334 = ref(0);
        const y335 = ref(0);
        const y336 = ref(0);
        const y337 = ref(0);


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

        const Atils = {
            daysOfWeek: ({ count }) => {
                const labels = [];
                const currentDate = new Date();

                for (let i = 0; i < count; i++) {
                    const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });
                    labels.push(dayOfWeek);
                    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
                }

                return labels;
            }
        };

        onMounted(async () => {
            const userEmail = localStorage.getItem("email");
            user.value = await getDashboardProfile(userEmail);

            swipesuccess.value = await getsuccessswipe(userEmail);

            jobPostings.value = await getJobPostings(
                userEmail,
                user.value.businessname,
                user.value.id,
            );

            jobPostings.value.forEach((jobPosting) => {
                likes.value += jobPosting.likes;
                views.value += jobPosting.views;
                bookmarks.value += jobPosting.bookmarks;
            });

            like.value = await getlikes(user.value.id);
            view.value = await getviews(user.value.id);

            //likes daily
            const dlike = Atils.daysOfWeek({ count: 7 });

            for (const likeday of dlike) {
                const likesInDay = like.value.filter((like) => {
                    if (like.dateCreated) {
                        const date = new Date(like.dateCreated);
                        const likeDay = date.toLocaleString('default', { weekday: 'long' });
                        return likeDay === likeday;
                    }
                    return false;
                });

                likedatad.push(likesInDay.length);
            }
            console.log(likedatad);

            const likesdatad = {
                labels: dlike,
                datasets: [
                    {
                        label: 'Likes in Daily',
                        data: likedatad,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Adjust the opacity for better visibility
                        borderColor: 'rgba(75, 192, 192, 1)', // Border color
                        borderWidth: 2, // Border width
                        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)', // Background color on hover
                        hoverBorderColor: 'rgba(75, 192, 192, 1)', // Border color on hover
                        hoverBorderWidth: 2, // Border width on hover
                        hoverOffset: 6, // Increase the hover offset
                    },
                ],
            };


            const configliked: ChartConfiguration = {
                type: 'line',
                data: likesdatad,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvasliked = document.getElementById('liked') as HTMLCanvasElement;
            if (canvasliked) {
                const ctx = canvasliked.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configliked);
                }
            }

            //views daily
            const dview = Atils.daysOfWeek({ count: 7 });

            for (const viewday of dlike) {
                const viewsInDay = view.value.filter((view) => {
                    if (view.dateCreated) {
                        const date = new Date(view.dateCreated);
                        const viewDay = date.toLocaleString('default', { weekday: 'long' });
                        return viewDay === viewday;
                    }
                    return false;
                });

                viewdatad.push(viewsInDay.length);
            }
            console.log(viewdatad);

            const viewsdatad = {
                labels: dview,
                datasets: [
                    {
                        label: 'View in Daily',
                        data: viewdatad,
                        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red color with adjusted opacity
                        borderColor: 'rgba(255, 99, 132, 1)', // Border color in red
                        borderWidth: 2, // Border width
                        hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)', // Red color with adjusted opacity on hover
                        hoverBorderColor: 'rgba(255, 99, 132, 1)', // Border color in red on hover
                        hoverBorderWidth: 2, // Border width on hover
                        hoverOffset: 6, // Increased hover offset
                    },
                ],
            };

            const configviewd: ChartConfiguration = {
                type: 'line',
                data: viewsdatad,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvasviewd = document.getElementById('viewd') as HTMLCanvasElement;
            if (canvasviewd) {
                const ctx = canvasviewd.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configviewd);
                }
            }

            //successswipe day

            const dsuccess = Atils.daysOfWeek({ count: 7 });

            for (const successday of dsuccess) {
                const successInDay = swipesuccess.value.filter((success) => {
                    if (success.latestDateCreated) {
                        const date = new Date(success.latestDateCreated);
                        const successDay = date.toLocaleString('default', { weekday: 'long' });
                        return successDay === successday;
                    }
                    return false;
                });

                successdatad.push(successInDay.length);
            }
            console.log(successdatad);

            const successsdatad = {
                labels: dsuccess,
                datasets: [
                    {
                        label: 'Success Swipes in Day',
                        data: successdatad,
                        backgroundColor: 'rgba(0, 0, 255, 0.6)', // Blue color with adjusted opacity
                        borderColor: 'rgba(0, 0, 255, 1)', // Border color in blue
                        borderWidth: 2, // Border width
                        hoverBackgroundColor: 'rgba(0, 0, 255, 0.8)', // Blue color with adjusted opacity on hover
                        hoverBorderColor: 'rgba(0, 0, 255, 1)', // Border color in blue on hover
                        hoverBorderWidth: 2, // Border width on hover
                        hoverOffset: 6, // Increased hover offset
                    },
                ],
            };

            const configsuccessd: ChartConfiguration = {
                type: 'line',
                data: successsdatad,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvassuccessd = document.getElementById('successd') as HTMLCanvasElement;
            if (canvassuccessd) {
                const ctx = canvassuccessd.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configsuccessd);
                }
            }

            //successswipe monthly

            const msuccess = Utils.months({ count: 12 });

            for (const successmonth of msuccess) {
                const successInMonth = swipesuccess.value.filter((success) => {
                    if (success.latestDateCreated) {
                        const date = new Date(success.latestDateCreated);
                        const successMonth = date.toLocaleString('default', { month: 'long' });
                        return successMonth === successmonth;
                    }
                    return false;
                });

                successdatam.push(successInMonth.length);
            }
            console.log(successdatam);

            const successsdatam = {
                labels: msuccess,
                datasets: [
                    {
                        label: 'Success Swipes in Month',
                        data: successdatam,
                        backgroundColor: 'rgba(138, 43, 226, 0.6)', // Violet color with adjusted opacity
                        borderColor: 'rgba(138, 43, 226, 1)', // Border color in violet
                        borderWidth: 2, // Border width
                        hoverBackgroundColor: 'rgba(138, 43, 226, 0.8)', // Violet color with adjusted opacity on hover
                        hoverBorderColor: 'rgba(138, 43, 226, 1)', // Border color in violet on hover
                        hoverBorderWidth: 2, // Border width on hover
                        hoverOffset: 6, // Increased hover offset
                    },
                ],
            };

            const configsuccessm: ChartConfiguration = {
                type: 'line',
                data: successsdatam,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvassuccessm = document.getElementById('successm') as HTMLCanvasElement;
            if (canvassuccessm) {
                const ctx = canvassuccessm.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configsuccessm);
                }
            }

            //successswipe yearly

            const ysuccess = Itils.years({ count: 12 });

            for (const successyear of ysuccess) {
                const successInYear = swipesuccess.value.filter((success) => {
                    if (success.latestDateCreated) {
                        const date = new Date(success.latestDateCreated);
                        const successYear = date.toLocaleString('default', { year: 'numeric' });
                        return successYear === successyear;
                    }
                    return false;
                });

                successdatay.push(successInYear.length);
            }
            console.log(successdatay);

            const successsdatay = {
                labels: ysuccess,
                datasets: [
                    {
                        label: 'Success Swipes in Year',
                        data: successdatay,
                        backgroundColor: 'rgba(255, 165, 0, 0.6)', // Orange color with adjusted opacity
                        borderColor: 'rgba(255, 165, 0, 1)', // Border color in orange
                        borderWidth: 2, // Border width
                        hoverBackgroundColor: 'rgba(255, 165, 0, 0.8)', // Orange color with adjusted opacity on hover
                        hoverBorderColor: 'rgba(255, 165, 0, 1)', // Border color in orange on hover
                        hoverBorderWidth: 2, // Border width on hover
                        hoverOffset: 6, // Increased hover offset
                    },
                ],
            };

            const configsuccessy: ChartConfiguration = {
                type: 'line',
                data: successsdatay,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvassuccessy = document.getElementById('successy') as HTMLCanvasElement;
            if (canvassuccessy) {
                const ctx = canvassuccessy.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configsuccessy);
                }
            }

            //testing

            jobPostings.value.filter((job) => {
                if (job.classification == 'Accounting') {
                    return x1.value++;
                }
                else if (job.classification == 'Administration & Office Support') {
                    return x2.value++;
                }
                else if (job.classification == 'Advertising, Arts & Media') {
                    return x3.value++;
                }
                else if (job.classification == 'Banking & Financial Services') {
                    return x4.value++;
                }
                else if (job.classification == 'Call Centre & Customer Services') {
                    return x5.value++;
                }
                else if (job.classification == 'CEO & General Management') {
                    return x6.value++;
                }
                else if (job.classification == 'Community Services and Development') {
                    return x7.value++;
                }
                else if (job.classification == 'Construction') {
                    return x8.value++;
                }
                else if (job.classification == 'Consulting & Strategy') {
                    return x9.value++;
                }
                else if (job.classification == 'Design & Architecture') {
                    return x10.value++;
                }
                else if (job.classification == 'Education & Training') {
                    return x11.value++;
                }
                else if (job.classification == 'Engineering') {
                    return x12.value++;
                }
                else if (job.classification == 'Farming, Animals & Conservation') {
                    return x13.value++;
                }
                else if (job.classification == 'Government & Defence') {
                    return x14.value++;
                }
                else if (job.classification == 'Healthcare & Medical') {
                    return x15.value++;
                }
                else if (job.classification == 'Hospitality & Tourism') {
                    return x16.value++;
                }
                else if (job.classification == 'Human Resources & Recruitment') {
                    return x17.value++;
                }
                else if (job.classification == 'Information & Communication Technology') {
                    return x18.value++;
                }
                else if (job.classification == 'Insurance & Superannuation') {
                    return x19.value++;
                }
                else if (job.classification == 'Legal') {
                    return x20.value++;
                }
                else if (job.classification == 'Manufacturing, Transport & Logistics') {
                    return x21.value++;
                }
                else if (job.classification == 'Marketing & Communication') {
                    return x22.value++;
                }
                else if (job.classification == 'Mining, Resources & Energy') {
                    return x23.value++;
                }
                else if (job.classification == 'Real Estate & Property') {
                    return x24.value++;
                }
                else if (job.classification == 'Retail & Consumer Products') {
                    return x25.value++;
                }
                else if (job.classification == 'Retail & Consumer Products') {
                    return x26.value++;
                }
                else if (job.classification == 'Science & Technology') {
                    return x27.value++;
                }
                else if (job.classification == 'Self Employment') {
                    return x28.value++;
                }
                else if (job.classification == 'Sport & Recreation') {
                    return x29.value++;
                }
                else if (job.classification == 'Trades & Services') {
                    return x30.value++;
                }
            });


            jobPostings.value.filter((job) => {
                //sub classification

                if (job.subclassification == 'Accounts Officers/Clerks') {
                    return y1.value++;
                }
                else if (job.subclassification == 'Accounts Payable') {
                    return y2.value++;
                }
                else if (job.subclassification == 'Accounts Receivable/Credit Control') {
                    return y3.value++;
                }
                else if (job.subclassification == 'Analysis & Reporting') {
                    return y4.value++;
                }
                else if (job.subclassification == 'Assistant Accountants') {
                    return y5.value++;
                }
                else if (job.subclassification == 'Audit - External') {
                    return y6.value++;
                }
                else if (job.subclassification == 'Audit - Internal') {
                    return y8.value++;
                }
                else if (job.subclassification == 'Bookkeeping & Small Practice Accounting') {
                    return y9.value++;
                }
                else if (job.subclassification == 'Business Services & Corporate Advisory') {
                    return y10.value++;
                }
                else if (job.subclassification == 'Company Secretaries') {
                    return y11.value++;
                }
                else if (job.subclassification == 'Compliance & Risk') {
                    return y12.value++;
                }
                else if (job.subclassification == 'Cost Accounting') {
                    return y13.value++;
                }
                else if (job.subclassification == 'Financial Accounting & Reporting') {
                    return y14.value++;
                }
                else if (job.subclassification == 'Financial Managers & Controllers') {
                    return y15.value++;
                }
                else if (job.subclassification == 'Forensic Accounting & Investigation') {
                    return y16.value++;
                }
                else if (job.subclassification == 'Insolvency & Corporate Recovery') {
                    return y17.value++;
                }
                else if (job.subclassification == 'Inventory & Fixed Assets') {
                    return y18.value++;
                }
                else if (job.subclassification == 'Management') {
                    return y19.value++;
                }
                else if (job.subclassification == 'Management Accounting & Budgeting') {
                    return y20.value++;
                }
                else if (job.subclassification == 'Payroll') {
                    return y21.value++;
                }
                else if (job.subclassification == 'Strategy & Planning') {
                    return y22.value++;
                }
                else if (job.subclassification == 'Systems Accounting & IT Audit') {
                    return y23.value++;
                }
                else if (job.subclassification == 'Taxation') {
                    return y24.value++;
                }
                else if (job.subclassification == 'Treasury') {
                    return y25.value++;
                }//
                else if (job.subclassification == 'Administrative Assistants') {
                    return y26.value++;
                }
                else if (job.subclassification == 'Client & Sales Administration') {
                    return y27.value++;
                }
                else if (job.subclassification == 'Contracts Administration') {
                    return y28.value++;
                }
                else if (job.subclassification == 'Data Entry & Word Processing') {
                    return y29.value++;
                }
                else if (job.subclassification == 'Office Management') {
                    return y30.value++;
                }
                else if (job.subclassification == 'PA, EA & Secretarial') {
                    return y31.value++;
                }
                else if (job.subclassification == 'Receptionist') {
                    return y32.value++;
                }
                else if (job.subclassification == 'Record Management & Document Control') {
                    return y33.value++;
                }
                else if (job.subclassification == 'Agency Account Management') {
                    return y34.value++;
                }
                else if (job.subclassification == 'Art Direction') {
                    return y35.value++;
                }
                else if (job.subclassification == 'Editing & Publishing') {
                    return y36.value++;
                }
                else if (job.subclassification == 'Event Management') {
                    return y37.value++;
                }
                else if (job.subclassification == 'Journalism & Writing') {
                    return y38.value++;
                }
                else if (job.subclassification == 'Media Strategy, Planning & Buying') {
                    return y39.value++;
                }
                else if (job.subclassification == 'Performing Arts') {
                    return y40.value++;
                }
                else if (job.subclassification == 'Photography') {
                    return y41.value++;
                }
                else if (job.subclassification == 'Programming & Production') {
                    return y42.value++;
                }
                else if (job.subclassification == 'Promotions') {
                    return y43.value++;
                }
                else if (job.subclassification == 'Account & Relationship Management') {
                    return y44.value++;
                }
                else if (job.subclassification == 'Banking - Business') {
                    return y46.value++;
                }
                else if (job.subclassification == 'Banking - Corporate & Institutional') {
                    return y47.value++;
                }
                else if (job.subclassification == 'Banking - Retail/Branch') {
                    return y48.value++;
                }
                else if (job.subclassification == 'Client Services') {
                    return y49.value++;
                }
                else if (job.subclassification == 'Compliance & Risk') {
                    return y50.value++;
                }
                else if (job.subclassification == 'Corporate Finance & Investment Banking') {
                    return y51.value++;
                }
                else if (job.subclassification == 'Credit') {
                    return y52.value++;
                }
                else if (job.subclassification == 'Financial Planning') {
                    return y53.value++;
                }
                else if (job.subclassification == 'Funds Management') {
                    return y54.value++;
                }
                else if (job.subclassification == 'Mortgages') {
                    return y55.value++;
                }
                else if (job.classification == 'Settlements') {
                    return y56.value++;
                }
                else if (job.subclassification == 'Stockbroking & Trading') {
                    return y57.value++;
                }
                else if (job.subclassification == 'Customer Service - Call Centre') {
                    return y58.value++;
                }
                else if (job.subclassification == 'Customer Service - Customer Facing') {
                    return y59.value++;
                }
                else if (job.subclassification == 'Management & Support') {
                    return y60.value++;
                }
                else if (job.subclassification == 'Sales - Inbound') {
                    return y61.value++;
                }
                else if (job.subclassification == 'Sales - Outbound') {
                    return y62.value++;
                }
                else if (job.subclassification == 'Supervisor/Team Leaders') {
                    return y63.value++;
                }
                else if (job.subclassification == 'Board Appointments') {
                    return y64.value++;
                }
                else if (job.subclassification == 'CEO') {
                    return y65.value++;
                }
                else if (job.subclassification == 'COO & MD') {
                    return y66.value++;
                }/////
                else if (job.subclassification == 'General/Business Unit Manager') {
                    return y67.value++;
                }
                else if (job.subclassification == 'Child Welfare, Youth & Family Services') {
                    return y69.value++;
                }
                else if (job.subclassification == 'Community Development') {
                    return y70.value++;
                }
                else if (job.subclassification == 'Employment Services') {
                    return y71.value++;
                }
                else if (job.subclassification == 'Fundraising') {
                    return y72.value++;
                }
                else if (job.subclassification == 'Housing & Homelessness Services') {
                    return y73.value++;
                }
                else if (job.subclassification == 'Indigenous & Multicultural Services') {
                    return y74.value++;
                }
                else if (job.subclassification == 'Volunteer Coordination & Support') {
                    return y75.value++;
                }
                else if (job.subclassification == 'Contracts Management') {
                    return y76.value++;
                }//
                else if (job.subclassification == 'Estimating') {
                    return y77.value++;
                }
                else if (job.subclassification == 'Foreperson/Supervisors') {
                    return y78.value++;
                }
                else if (job.subclassification == 'Health, Safety & Environment') {
                    return y79.value++;
                }
                else if (job.subclassification == 'Planning & Scheduling') {
                    return y80.value++;
                }
                else if (job.subclassification == 'Plant & Machinery Operators') {
                    return y81.value++;
                }
                else if (job.subclassification == 'Project Management') {
                    return y82.value++;
                }
                else if (job.subclassification == 'Quality Assurance & Control') {
                    return y83.value++;
                }
                else if (job.subclassification == 'Surveying') {
                    return y84.value++;
                }
                else if (job.subclassification == 'Corporate Development') {
                    return y85.value++;
                }
                else if (job.subclassification == 'Environment & Sustainability Consulting') {
                    return y86.value++;
                }
                else if (job.subclassification == 'Management & Change Consulting') {
                    return y87.value++;
                }
                else if (job.subclassification == 'Policy') {
                    return y88.value++;
                }
                else if (job.subclassification == 'Strategy & Planning') {
                    return y89.value++;
                }
                else if (job.subclassification == 'Architectural Drafting') {
                    return y90.value++;
                }//eto
                else if (job.subclassification == 'Architecture') {
                    return y91.value++;
                }
                else if (job.subclassification == 'Fashion & Textile Design') {
                    return y92.value++;
                }
                else if (job.subclassification == 'Graphic Design') {
                    return y93.value++;
                }
                else if (job.subclassification == 'Illustration & Animation') {
                    return y94.value++;
                }
                else if (job.subclassification == 'Industrial Design') {
                    return y95.value++;
                }
                else if (job.subclassification == 'Landscape Architecture') {
                    return y96.value++;
                }
                else if (job.subclassification == 'Urban Design & Planning') {
                    return y97.value++;
                }
                else if (job.subclassification == 'Web & Interaction Design') {
                    return y98.value++;
                }
                else if (job.subclassification == 'Childcare & Outside School Hours Care') {
                    return y99.value++;
                }
                else if (job.subclassification == 'Library Services & Information Management') {
                    return y100.value++;
                }
                else if (job.subclassification == 'Management - Schools') {
                    return y101.value++;
                }
                else if (job.subclassification == 'Management - Universities') {
                    return y102.value++;
                }
                else if (job.subclassification == 'Management - Vocational') {
                    return y103.value++;
                }/////
                else if (job.subclassification == 'Research & Fellowships') {
                    return y104.value++;
                }
                else if (job.subclassification == 'Teaching - Early Childhood') {
                    return y105.value++;
                }
                else if (job.subclassification == 'Teaching - Primary') {
                    return y106.value++;
                }
                else if (job.subclassification == 'Teaching - Secondary') {
                    return y107.value++;
                }
                else if (job.subclassification == 'Teaching - Tertiary') {
                    return y108.value++;
                }
                else if (job.subclassification == 'Teaching - Vocational') {
                    return y109.value++;
                }
                else if (job.subclassification == 'Teaching Aides & Special Needs') {
                    return y110.value++;
                }
                else if (job.subclassification == 'Workplace Training & Assessment') {
                    return y111.value++;
                }
                else if (job.subclassification == 'Aerospace Engineering') {
                    return y112.value++;
                }
                else if (job.subclassification == 'Automotive Engineering') {
                    return y113.value++;
                }
                else if (job.subclassification == 'Building Services Engineering') {
                    return y114.value++;
                }
                else if (job.subclassification == 'Chemical Engineering') {
                    return y115.value++;
                }
                else if (job.subclassification == 'Civil/Structural Engineering') {
                    return y116.value++;
                }
                else if (job.subclassification == 'Engineering Drafting') {
                    return y117.value++;
                }
                else if (job.subclassification == 'Environmental Engineering') {
                    return y118.value++;
                }
                else if (job.subclassification == 'Field Engineering') {
                    return y119.value++;
                }
                else if (job.subclassification == 'Industrial Engineering') {
                    return y120.value++;
                }
                else if (job.subclassification == 'Maintenance') {
                    return y121.value++;
                }
                else if (job.subclassification == 'Materials Handling Engineering') {
                    return y122.value++;
                }//
                else if (job.subclassification == 'Mechanical Engineering') {
                    return y123.value++;
                }
                else if (job.subclassification == 'Process Engineering') {
                    return y124.value++;
                }
                else if (job.subclassification == 'Project Management') {
                    return y125.value++;
                }
                else if (job.subclassification == 'Supervisors') {
                    return y126.value++;
                }
                else if (job.subclassification == 'System Engineering') {
                    return y127.value++;
                }
                else if (job.subclassification == 'Water & Waste Engineering') {
                    return y128.value++;
                }
                else if (job.subclassification == 'Agronomy & Farm Services') {
                    return y129.value++;
                }
                else if (job.subclassification == 'Conservation, Parks & Wildlife') {
                    return y130.value++;
                }
                else if (job.subclassification == 'Farm Labour') {
                    return y131.value++;
                }
                else if (job.subclassification == 'Farm Management') {
                    return y132.value++;
                }
                else if (job.subclassification == 'Fishing & Aquaculture') {
                    return y133.value++;
                }
                else if (job.subclassification == 'Horticulture') {
                    return y134.value++;
                }
                else if (job.subclassification == 'Veterinary Services & Animal Welfare') {
                    return y135.value++;
                }
                else if (job.subclassification == 'Winery & Viticulture') {
                    return y136.value++;
                }
                else if (job.subclassification == 'Air Force') {
                    return y137.value++;
                }
                else if (job.subclassification == 'Army') {
                    return y138.value++;
                }
                else if (job.subclassification == 'Emergency Services') {
                    return y139.value++;
                }
                else if (job.subclassification == 'Government - Federal') {
                    return y140.value++;
                }
                else if (job.subclassification == 'Government - Local') {
                    return y141.value++;
                }//////////////
                else if (job.subclassification == 'Government - State') {
                    return y142.value++;
                }
                else if (job.subclassification == 'Navy') {
                    return y143.value++;
                }
                else if (job.subclassification == 'Police & Corrections') {
                    return y144.value++;
                }//
                else if (job.subclassification == 'Policy, Planning & Regulation') {
                    return y145.value++;
                }
                else if (job.subclassification == 'Ambulance/Paramedics') {
                    return y146.value++;
                }
                else if (job.subclassification == 'Chiropractic & Osteopathic') {
                    return y147.value++;
                }
                else if (job.subclassification == 'Dental') {
                    return y148.value++;
                }
                else if (job.subclassification == 'Dieticians') {
                    return y149.value++;
                }
                else if (job.subclassification == 'Environment Services') {
                    return y150.value++;
                }
                else if (job.subclassification == 'General Practitioners') {
                    return y151.value++;
                }
                else if (job.subclassification == 'Medical Administration') {
                    return y152.value++;
                }
                else if (job.subclassification == 'Medical Imaging') {
                    return y153.value++;
                }
                else if (job.subclassification == 'Natural Therapies & Alternative Medicine') {
                    return y154.value++;
                }
                else if (job.subclassification == 'Nursing - A&E, Critical Care & ICU') {
                    return y155.value++;
                }
                else if (job.subclassification == 'Nursing - Aged Care') {
                    return y156.value++;
                }
                else if (job.subclassification == 'Nursing - Aged Care') {
                    return y157.value++;
                }/////
                else if (job.subclassification == 'Nursing - Community Maternal & Child Health') {
                    return y158.value++;
                }
                else if (job.subclassification == 'Nursing - Educators & Facilitators') {
                    return y159.value++;
                }
                else if (job.subclassification == 'Nursing - General Medical & Surgical') {
                    return y160.value++;
                }
                else if (job.subclassification == 'Nursing - High Acuity') {
                    return y161.value++;
                }
                else if (job.subclassification == 'Nursing - Management') {
                    return y162.value++;
                }
                else if (job.subclassification == 'Nursing - Midwifery, Neo-Natal, SCN & NICU') {
                    return y163.value++;
                }
                else if (job.subclassification == 'Nursing - Paediatric & PICU') {
                    return y164.value++;
                }
                else if (job.subclassification == 'Nursing - Psych, Forensic & Correctional Health') {
                    return y165.value++;
                }
                else if (job.subclassification == 'Nursing - Theatre & Recovery') {
                    return y166.value++;
                }
                else if (job.subclassification == 'Optical') {
                    return y167.value++;
                }
                else if (job.subclassification == 'Pathology') {
                    return y168.value++;
                }
                else if (job.subclassification == 'Pharmaceuticals & Medical Devices') {
                    return y169.value++;
                }
                else if (job.subclassification == 'Pharmacy') {
                    return y170.value++;
                }
                else if (job.subclassification == 'Physiotherapy, OT & Rehabilitation') {
                    return y171.value++;
                }
                else if (job.subclassification == 'Psychology, Counseling & Social Work') {
                    return y172.value++;
                }
                else if (job.subclassification == 'Residents & Registrars') {
                    return y173.value++;
                }
                else if (job.subclassification == 'Sales') {
                    return y174.value++;
                }
                else if (job.subclassification == 'Airlines') {
                    return y175.value++;
                }
                else if (job.subclassification == 'Bar & Beverage Staff') {
                    return y176.value++;
                }
                else if (job.subclassification == 'Chef/Cooks') {
                    return y177.value++;
                }
                else if (job.subclassification == 'Front Office & Guest Services') {
                    return y178.value++;
                }
                else if (job.subclassification == 'Gaming') {
                    return y179.value++;
                }//
                else if (job.subclassification == 'Housekeeping') {
                    return y180.value++;
                }
                else if (job.subclassification == 'Kitchen & Sandwich Hands') {
                    return y181.value++;
                }
                else if (job.subclassification == 'Reservations') {
                    return y182.value++;
                }
                else if (job.subclassification == 'Tour Guides') {
                    return y183.value++;
                }
                else if (job.subclassification == 'Travel Agents/Consultants') {
                    return y184.value++;
                }
                else if (job.subclassification == 'Waiting Staff') {
                    return y185.value++;
                }
                else if (job.subclassification == 'Consulting & Generalist HR') {
                    return y186.value++;
                }
                else if (job.subclassification == 'Industrial & Employee Relations') {
                    return y187.value++;
                }
                else if (job.subclassification == 'Management - Agency') {
                    return y188.value++;
                }
                else if (job.subclassification == 'Management - Internal') {
                    return y189.value++;
                }
                else if (job.subclassification == 'Health & Safety') {
                    return y190.value++;
                }
                else if (job.subclassification == 'Organisational Development') {
                    return y191.value++;
                }
                else if (job.subclassification == 'Recruitment - Agency') {
                    return y192.value++;
                }
                else if (job.subclassification == 'Recruitment - Internal') {
                    return y193.value++;
                }
                else if (job.subclassification == 'Remuneration & Benefits') {
                    return y194.value++;
                }
                else if (job.subclassification == 'Training & Development') {
                    return y195.value++;
                }
                else if (job.subclassification == 'Architects') {
                    return y196.value++;
                }
                else if (job.subclassification == 'Business/System Analysts') {
                    return y197.value++;
                }
                else if (job.subclassification == 'Consultants') {
                    return y198.value++;
                }
                else if (job.subclassification == 'Database Development & Administration') {
                    return y199.value++;
                }
                else if (job.subclassification == 'Developers/Programmers') {
                    return y200.value++;
                }
                else if (job.subclassification == 'Engineering - Hardware') {
                    return y201.value++;
                }
                else if (job.subclassification == 'Engineering - Network') {
                    return y202.value++;
                }
                else if (job.subclassification == 'Engineering - Software') {
                    return y203.value++;
                }/////////
                else if (job.subclassification == 'Help Desk & IT Support') {
                    return y204.value++;
                }
                else if (job.subclassification == 'Networks & Systems Administration') {
                    return y205.value++;
                }
                else if (job.subclassification == 'Product Management & Development') {
                    return y206.value++;
                }
                else if (job.subclassification == 'Sales - Pre & Post') {
                    return y207.value++;
                }
                else if (job.subclassification == 'Security') {
                    return y208.value++;
                }
                else if (job.subclassification == 'Team Leaders') {
                    return y209.value++;
                }
                else if (job.subclassification == 'Technical Leaders') {
                    return y210.value++;
                }
                else if (job.subclassification == 'Technical Writing') {
                    return y211.value++;
                }
                else if (job.subclassification == 'Testing & Quality Assurance') {
                    return y212.value++;
                }
                else if (job.subclassification == 'Web Development & Production') {
                    return y213.value++;
                }
                else if (job.subclassification == 'Actuarial') {
                    return y214.value++;
                }
                else if (job.subclassification == 'Assessment') {
                    return y215.value++;
                }
                else if (job.subclassification == 'Brokerage') {
                    return y216.value++;
                }
                else if (job.subclassification == 'Claims') {
                    return y217.value++;
                }
                else if (job.subclassification == 'Fund Administration') {
                    return y218.value++;
                }
                else if (job.subclassification == 'Risk Consulting') {
                    return y219.value++;
                }
                else if (job.subclassification == 'Superannuation') {
                    return y220.value++;
                }
                else if (job.subclassification == 'Underwriting') {
                    return y221.value++;
                }
                else if (job.subclassification == 'Banking & Finance Law') {
                    return y222.value++;
                }
                else if (job.subclassification == 'Construction Law') {
                    return y223.value++;
                }
                else if (job.subclassification == 'Corporate & Commercial Law') {
                    return y224.value++;
                }
                else if (job.subclassification == 'Criminal & Civil Law') {
                    return y225.value++;
                }
                else if (job.subclassification == 'Environment & Planning Law') {
                    return y226.value++;
                }
                else if (job.subclassification == 'Family Law') {
                    return y227.value++;
                }
                else if (job.subclassification == 'Generalist - In-house') {
                    return y228.value++;
                }
                else if (job.subclassification == 'Generalist - Law-Firm') {
                    return y229.value++;
                }
                else if (job.subclassification == 'Industrial Relations & Employment Law') {
                    return y230.value++;
                }
                else if (job.subclassification == 'Insurance & Superannuation Law') {
                    return y231.value++;
                }
                else if (job.subclassification == 'Intellectual Property Law') {
                    return y232.value++;
                }
                else if (job.subclassification == 'Law Clerks & Paralegals') {
                    return y233.value++;
                }
                else if (job.subclassification == 'Legal Practice Management') {
                    return y234.value++;
                }
                else if (job.subclassification == 'Legal Secretaries') {
                    return y235.value++;
                }
                else if (job.subclassification == 'Litigation & Dispute Resolution') {
                    return y236.value++;
                }
                else if (job.subclassification == 'Personal Injury Law') {
                    return y237.value++;
                }//
                else if (job.subclassification == 'Property Law') {
                    return y238.value++;
                }
                else if (job.subclassification == 'Assembly & Process Work') {
                    return y240.value++;
                }
                else if (job.subclassification == 'Aviation Services') {
                    return y241.value++;
                }
                else if (job.subclassification == 'Couriers, Drivers & Postal Services') {
                    return y242.value++;
                }
                else if (job.subclassification == 'Fleet Management') {
                    return y243.value++;
                }
                else if (job.subclassification == 'Freight/Cargo Forwarding') {
                    return y244.value++;
                }
                else if (job.subclassification == 'Import/Export & Customs') {
                    return y245.value++;
                }
                else if (job.subclassification == 'Machine Operators') {
                    return y246.value++;
                }
                else if (job.subclassification == 'Pattern Makers & Garment Technicians') {
                    return y247.value++;
                }
                else if (job.subclassification == 'Pickers & Packers') {
                    return y248.value++;
                }
                else if (job.subclassification == 'Production, Planning, & Scheduling') {
                    return y249.value++;
                }
                else if (job.subclassification == 'Public Transport & Taxi Services') {
                    return y250.value++;
                }
                else if (job.subclassification == 'Purchasing, Procurement & Inventory') {
                    return y251.value++;
                }
                else if (job.subclassification == 'Quality Assurance & Control') {
                    return y252.value++;
                }
                else if (job.subclassification == 'Rail & Maritime Transport') {
                    return y253.value++;
                }
                else if (job.subclassification == 'Road Transport') {
                    return y254.value++;
                }
                else if (job.subclassification == 'Team Leaders/Supervisors') {
                    return y255.value++;
                }
                else if (job.subclassification == 'Warehousing, Storage & Distribution') {
                    return y256.value++;
                }
                else if (job.subclassification == 'Brand Management') {
                    return y257.value++;
                }
                else if (job.subclassification == 'Digital & Search Marketing') {
                    return y258.value++;
                }
                else if (job.subclassification == 'Direct Marketing & CRM') {
                    return y259.value++;
                }
                else if (job.subclassification == 'Event Management') {
                    return y260.value++;
                }
                else if (job.subclassification == 'Internal Communication') {
                    return y261.value++;
                }
                else if (job.subclassification == 'Market Research & Analysis') {
                    return y262.value++;
                }
                else if (job.subclassification == 'Marketing Assistants/Coordinators') {
                    return y263.value++;
                }
                else if (job.subclassification == 'Marketing Communications') {
                    return y264.value++;
                }
                else if (job.subclassification == 'Product Management & Development') {
                    return y265.value++;
                }
                else if (job.subclassification == 'Public Relations & Corporate Affairs') {
                    return y266.value++;
                }
                else if (job.subclassification == 'Trade Marketing') {
                    return y267.value++;
                }
                else if (job.subclassification == 'Health, Safety & Environment') {
                    return y269.value++;
                }
                else if (job.subclassification == 'Mining - Drill & Blast') {
                    return y270.value++;
                }
                else if (job.subclassification == 'Mining - Engineering & Maintenance') {
                    return y271.value++;
                }
                else if (job.subclassification == 'Mining - Exploration & Geoscience') {
                    return y272.value++;
                }
                else if (job.subclassification == 'Mining - Operations') {
                    return y273.value++;
                }
                else if (job.subclassification == 'Mining - Processing') {
                    return y274.value++;
                }
                else if (job.subclassification == 'Natural Resources & Water') {
                    return y275.value++;
                }
                else if (job.subclassification == 'Oil & Gas - Drilling') {
                    return y276.value++;
                }
                else if (job.subclassification == 'Oil & Gas - Engineering & Maintenance') {
                    return y277.value++;
                }
                else if (job.subclassification == 'Oil & Gas - Explorations & Geoscience') {
                    return y278.value++;
                }
                else if (job.subclassification == 'Oil & Gas - Operations') {
                    return y279.value++;
                }
                else if (job.subclassification == 'Oil & Gas - Production & Refinement') {
                    return y280.value++;
                }
                else if (job.subclassification == 'Power Generation & Distribution') {
                    return y281.value++;
                }
                else if (job.subclassification == 'Surveying') {
                    return y282.value++;
                }
                else if (job.subclassification == 'Administration') {
                    return y283.value++;
                }
                else if (job.subclassification == 'Analyst') {
                    return y284.value++;
                }
                else if (job.subclassification == 'Body Corporate & Facilities Management') {
                    return y285.value++;
                }
                else if (job.subclassification == 'Commercial Sales, Leasing & Property Mgmt') {
                    return y286.value++;
                }
                else if (job.subclassification == 'Residential Leasing & Property Management') {
                    return y287.value++;
                }
                else if (job.subclassification == 'Residential Sales') {
                    return y288.value++;
                }
                else if (job.subclassification == 'Retail & Property Development') {
                    return y289.value++;
                }
                else if (job.subclassification == 'Valuation') {
                    return y290.value++;
                }
                else if (job.subclassification == 'Buying') {
                    return y291.value++;
                }
                else if (job.subclassification == 'Management - Area/Multi-site') {
                    return y292.value++;
                }
                else if (job.subclassification == 'Management - Department/Assistant') {
                    return y293.value++;
                }
                else if (job.subclassification == 'Management - Store') {
                    return y294.value++;
                }
                else if (job.subclassification == 'Merchandisers') {
                    return y295.value++;
                }
                else if (job.subclassification == 'Planning') {
                    return y296.value++;
                }
                else if (job.subclassification == 'Retail Assistants') {
                    return y297.value++;
                }
                else if (job.subclassification == 'Account & Relationship Management') {
                    return y298.value++;
                }
                else if (job.subclassification == 'New Business Development') {
                    return y300.value++;
                }
                else if (job.subclassification == 'Sales Coordinators') {
                    return y301.value++;
                }
                else if (job.subclassification == 'Sales Representatives/Consultants') {
                    return y302.value++;
                }
                else if (job.subclassification == 'Biological & Biomedical Sciences') {
                    return y303.value++;
                }
                else if (job.subclassification == 'Biotechnology & Genetics') {
                    return y304.value++;
                }
                else if (job.subclassification == 'Chemistry & Physics') {
                    return y305.value++;
                }
                else if (job.subclassification == 'Environmental, Earth & Geosciences') {
                    return y306.value++;
                }
                else if (job.subclassification == 'Food Technology & Safety') {
                    return y307.value++;
                }
                else if (job.subclassification == 'Laboratory & Technical Services') {
                    return y308.value++;
                }
                else if (job.subclassification == 'Materials Sciences') {
                    return y309.value++;
                }
                else if (job.subclassification == 'Mathematics, Statistics & Information Science') {
                    return y310.value++;
                }
                else if (job.subclassification == 'Modelling & Simulation') {
                    return y311.value++;
                }
                else if (job.subclassification == 'Quality Assurance & Control') {
                    return y312.value++;
                }
                else if (job.subclassification == 'Coaching & Instruction') {
                    return y313.value++;
                }
                else if (job.subclassification == 'Fitness & Personal Training') {
                    return y314.value++;
                }
                else if (job.subclassification == 'Air Conditioning & Refrigeration') {
                    return y315.value++;
                }
                else if (job.subclassification == 'Automotive Trades') {
                    return y316.value++;
                }
                else if (job.subclassification == 'Bakers & Pastry Chefs') {
                    return y317.value++;
                }
                else if (job.subclassification == 'Building Trades') {
                    return y318.value++;
                }
                else if (job.subclassification == 'Butchers') {
                    return y319.value++;
                }
                else if (job.subclassification == 'Carpentry & Cabinet Making') {
                    return y320.value++;
                }
                else if (job.subclassification == 'Cleaning Services') {
                    return y321.value++;
                }
                else if (job.subclassification == 'Electricians') {
                    return y322.value++;
                }
                else if (job.subclassification == 'Fitters, Tunners & Machinists') {
                    return y323.value++;
                }
                else if (job.subclassification == 'Floristry') {
                    return y324.value++;
                }
                else if (job.subclassification == 'Gardening & Landscaping') {
                    return y325.value++;
                }
                else if (job.subclassification == 'Hair & Beauty') {
                    return y326.value++;
                }
                else if (job.subclassification == 'Labourers') {
                    return y327.value++;
                }
                else if (job.subclassification == 'Locksmiths') {
                    return y328.value++;
                }
                else if (job.subclassification == 'Maintenance & Handyperson Services') {
                    return y329.value++;
                }
                else if (job.subclassification == 'Nannies & Babysitters') {
                    return y330.value++;
                }
                else if (job.subclassification == 'Painters & Sign Writers') {
                    return y331.value++;
                }
                else if (job.subclassification == 'Plumbers') {
                    return y332.value++;
                }
                else if (job.subclassification == 'Printing & Publishing Services') {
                    return y333.value++;
                }
                else if (job.subclassification == 'Security Services') {
                    return y334.value++;
                }
                else if (job.subclassification == 'Tailor & Dressmakers') {
                    return y335.value++;
                }
                else if (job.subclassification == 'Technicians') {
                    return y336.value++;
                }
                else if (job.subclassification == 'Welders & Boilermakers') {
                    return y337.value++;
                }
            });

            //pie - classification

            const labels = ['Accounting', 'Administration & Office Support', 'Advertising, Arts & Media', 'Banking & Financial Services', 'Call Centre & Customer Services', 'CEO & General Management', 'Community Services and Development', 'Construction', 'Consulting & Strategy', 'Design & Architecture', 'Education & Training', 'Engineering', 'Farming, Animals & Conservation', 'Government & Defence', 'Healthcare & Medical', 'Hospitality & Tourism', 'Human Resources & Recruitment', 'Information & Communication Technology', 'Insurance & Superannuation', 'Legal', 'Manufacturing, Transport & Logistics', 'Marketing & Communication', 'Mining, Resources & Energy', 'Real Estate & Property', 'Retail & Consumer Products', 'Retail & Consumer Products', 'Science & Technology', 'Self Employment', 'Sport & Recreation', 'Trades & Services',];
            const d = [x1.value, x2.value, x3.value, x4.value, x5.value, x6.value, x7.value, x8.value, x9.value, x10.value, x11.value, x12.value, x13.value, x14.value, x15.value, x16.value, x17.value, x18.value, x19.value, x20.value, x21.value, x22.value, x23.value, x24.value, x25.value, x26.value, x27.value, x28.value, x29.value, x30.value];
            const bc = ['#CBFFA9', '#FF5733', '#33FFD1', '#FF3366', '#3399FF', '#33FF33', '#FF33FF', '#FF9933', '#9933FF', '#33FFFF', '#FF6633', '#33CC33', '#9966FF', '#CC33CC', '#CC66FF', '#66CC33', '#66FF66', '#6666FF', '#FF66CC', '#6699FF', '#FFCC33', '#33CCFF', '#FF99CC', '#99CC66', '#CC99FF', '#99FFCC', '#FFCC99', '#CCCCFF',];



            const filteredData = labels.reduce((filtered, label, index) => {
                if (d[index] !== null && d[index] !== 0) {
                    filtered.labels.push(label);
                    filtered.data.push(d[index]);
                    filtered.backgroundColor.push(bc[filtered.data.length - 1]);
                }
                return filtered;
            }, { labels: [], data: [], backgroundColor: [] });



            const cdata = {
                labels: filteredData.labels,
                datasets: [
                    {
                        label: 'Classification',
                        data: filteredData.data,
                        backgroundColor: filteredData.backgroundColor,
                        hoverOffset: 4,
                    },
                ],
            };



            const cconfig: ChartConfiguration = {
                type: 'pie',
                data: cdata,
                options: {},
            };

            const ccanvas = document.getElementById('myChart') as HTMLCanvasElement;
            if (ccanvas) {
                const ctx = ccanvas.getContext('2d');
                if (ctx) {
                    new Chart(ctx, cconfig);
                }
            }

            //sub classification

            const label = [
                'Accounts Officers/Clerks',
                'Accounts Payable',
                'Accounts Receivable/Credit Control',
                'Analysis & Reporting',
                'Assistant Accountants',
                'Audit - External',
                'Audit - Internal',
                'Bookkeeping & Small Practice Accounting',
                'Business Services & Corporate Advisory',
                'Company Secretaries',
                'Compliance & Risk',
                'Cost Accounting',
                'Financial Accounting & Reporting',
                'Financial Managers & Controllers',
                'Forensic Accounting & Investigation',
                'Insolvency & Corporate Recovery',
                'Inventory & Fixed Assets',
                'Management',
                'Management Accounting & Budgeting',
                'Payroll',
                'Strategy & Planning',
                'Systems Accounting & IT Audit',
                'Taxation',
                'Treasury',
                'Administrative Assistants',
                'Client & Sales Administration',
                'Contracts Administration',
                'Data Entry & Word Processing',
                'Office Management',
                'PA, EA & Secretarial',
                'Receptionist',
                'Record Management & Document Control',
                'Agency Account Management',
                'Art Direction',
                'Editing & Publishing',
                'Event Management',
                'Journalism & Writing',
                'Media Strategy, Planning & Buying',
                'Performing Arts',
                'Photography',
                'Programming & Production',
                'Promotions',
                'Account & Relationship Management',
                'Banking - Business',
                'Banking - Corporate & Institutional',
                'Banking - Retail/Branch',
                'Client Services',
                'Compliance & Risk',
                'Corporate Finance & Investment Banking',
                'Credit',
                'Financial Planning',
                'Funds Management',
                'Mortgages',
                'Settlements',
                'Stockbroking & Trading',
                'Customer Service - Call Centre',
                'Customer Service - Customer Facing',
                'Management & Support',
                'Sales - Inbound',
                'Sales - Outbound',
                'Supervisor/Team Leaders',
                'Board Appointments',
                'CEO',
                'COO & MD',
                'General/Business Unit Manager',
                'Child Welfare, Youth & Family Services',
                'Community Development',
                'Employment Services',
                'Fundraising',
                'Housing & Homelessness Services',
                'Indigenous & Multicultural Services',
                'Volunteer Coordination & Support',
                'Contracts Management',
                'Estimating',
                'Foreperson/Supervisors',
                'Health, Safety & Environment',
                'Planning & Scheduling',
                'Plant & Machinery Operators',
                'Project Management',
                'Quality Assurance & Control',
                'Surveying',
                'Corporate Development',
                'Environment & Sustainability Consulting',
                'Management & Change Consulting',
                'Policy',
                'Strategy & Planning',
                'Architectural Drafting',
                'Architecture',
                'Fashion & Textile Design',
                'Graphic Design',
                'Illustration & Animation',
                'Industrial Design',
                'Landscape Architecture',
                'Urban Design & Planning',
                'Web & Interaction Design',
                'Childcare & Outside School Hours Care',
                'Library Services & Information Management',
                'Management - Schools',
                'Management - Universities',
                'Management - Vocational',
                'Research & Fellowships',
                'Teaching - Early Childhood',
                'Teaching - Primary',
                'Teaching - Secondary',
                'Teaching - Tertiary',
                'Teaching - Vocational',
                'Teaching Aides & Special Needs',
                'Workplace Training & Assessment',
                'Aerospace Engineering',
                'Automotive Engineering',
                'Building Services Engineering',
                'Chemical Engineering',
                'Civil/Structural Engineering',
                'Engineering Drafting',
                'Environmental Engineering',
                'Field Engineering',
                'Industrial Engineering',
                'Maintenance',
                'Materials Handling Engineering',
                'Mechanical Engineering',
                'Process Engineering',
                'Project Management',
                'Supervisors',
                'System Engineering',
                'Water & Waste Engineering',
                'Agronomy & Farm Services',
                'Conservation, Parks & Wildlife',
                'Farm Labour',
                'Farm Management',
                'Fishing & Aquaculture',
                'Horticulture',
                'Veterinary Services & Animal Welfare',
                'Winery & Viticulture',
                'Air Force',
                'Army',
                'Emergency Services',
                'Government - Federal',
                'Government - Local',
                'Government - State',
                'Navy',
                'Police & Corrections',
                'Policy, Planning & Regulation',
                'Ambulance/Paramedics',
                'Chiropractic & Osteopathic',
                'Dental',
                'Dieticians',
                'Environment Services',
                'General Practitioners',
                'Medical Administration',
                'Medical Imaging',
                'Natural Therapies & Alternative Medicine',
                'Nursing - A&E, Critical Care & ICU',
                'Nursing - Aged Care',
                'Nursing - Community Maternal & Child Health',
                'Nursing - Educators & Facilitators',
                'Nursing - General Medical & Surgical',
                'Nursing - High Acuity',
                'Nursing - Management',
                'Nursing - Midwifery, Neo-Natal, SCN & NICU',
                'Nursing - Paediatric & PICU',
                'Nursing - Psych, Forensic & Correctional Health',
                'Nursing - Theatre & Recovery',
                'Optical',
                'Pathology',
                'Pharmaceuticals & Medical Devices',
                'Pharmacy',
                'Physiotherapy, OT & Rehabilitation',
                'Psychology, Counseling & Social Work',
                'Residents & Registrars',
                'Sales',
                'Airlines',
                'Bar & Beverage Staff',
                'Chef/Cooks',
                'Front Office & Guest Services',
                'Gaming',
                'Housekeeping',
                'Kitchen & Sandwich Hands',
                'Reservations',
                'Tour Guides',
                'Travel Agents/Consultants',
                'Waiting Staff',
                'Consulting & Generalist HR',
                'Industrial & Employee Relations',
                'Management - Agency',
                'Management - Internal',
                'Health & Safety',
                'Organisational Development',
                'Recruitment - Agency',
                'Recruitment - Internal',
                'Remuneration & Benefits',
                'Training & Development',
                'Architects',
                'Business/System Analysts',
                'Consultants',
                'Database Development & Administration',
                'Developers/Programmers',
                'Engineering - Hardware',
                'Engineering - Network',
                'Engineering - Software',
                'Help Desk & IT Support',
                'Networks & Systems Administration',
                'Product Management & Development',
                'Sales - Pre & Post',
                'Security',
                'Team Leaders',
                'Technical Leaders',
                'Technical Writing',
                'Testing & Quality Assurance',
                'Web Development & Production',
                'Actuarial',
                'Assessment',
                'Brokerage',
                'Claims',
                'Fund Administration',
                'Risk Consulting',
                'Superannuation',
                'Underwriting',
                'Banking & Finance Law',
                'Construction Law',
                'Corporate & Commercial Law',
                'Criminal & Civil Law',
                'Environment & Planning Law',
                'Family Law',
                'Generalist - In-house',
                'Generalist - Law-Firm',
                'Industrial Relations & Employment Law',
                'Insurance & Superannuation Law',
                'Intellectual Property Law',
                'Law Clerks & Paralegals',
                'Legal Practice Management',
                'Legal Secretaries',
                'Litigation & Dispute Resolution',
                'Personal Injury Law',
                'Property Law',
                'Assembly & Process Work',
                'Aviation Services',
                'Couriers, Drivers & Postal Services',
                'Fleet Management',
                'Freight/Cargo Forwarding',
                'Import/Export & Customs',
                'Machine Operators',
                'Pattern Makers & Garment Technicians',
                'Pickers & Packers',
                'Production, Planning, & Scheduling',
                'Public Transport & Taxi Services',
                'Purchasing, Procurement & Inventory',
                'Quality Assurance & Control',
                'Rail & Maritime Transport',
                'Road Transport',
                'Team Leaders/Supervisors',
                'Warehousing, Storage & Distribution',
                'Brand Management',
                'Digital & Search Marketing',
                'Direct Marketing & CRM',
                'Event Management',
                'Internal Communication',
                'Market Research & Analysis',
                'Marketing Assistants/Coordinators',
                'Marketing Communications',
                'Product Management & Development',
                'Public Relations & Corporate Affairs',
                'Trade Marketing',
                'Health, Safety & Environment',
                'Mining - Drill & Blast',
                'Mining - Engineering & Maintenance',
                'Mining - Exploration & Geoscience',
                'Mining - Operations',
                'Mining - Processing',
                'Natural Resources & Water',
                'Oil & Gas - Drilling',
                'Oil & Gas - Engineering & Maintenance',
                'Oil & Gas - Explorations & Geoscience',
                'Oil & Gas - Operations',
                'Oil & Gas - Production & Refinement',
                'Power Generation & Distribution',
                'Surveying',
                'Administration',
                'Analyst',
                'Body Corporate & Facilities Management',
                'Commercial Sales, Leasing & Property Mgmt',
                'Residential Leasing & Property Management',
                'Residential Sales',
                'Retail & Property Development',
                'Valuation',
                'Buying',
                'Management - Area/Multi-site',
                'Management - Department/Assistant',
                'Management - Store',
                'Merchandisers',
                'Planning',
                'Retail Assistants',
                'Account & Relationship Management',
                'New Business Development',
                'Sales Coordinators',
                'Sales Representatives/Consultants',
                'Biological & Biomedical Sciences',
                'Biotechnology & Genetics',
                'Chemistry & Physics',
                'Environmental, Earth & Geosciences',
                'Food Technology & Safety',
                'Laboratory & Technical Services',
                'Materials Sciences',
                'Mathematics, Statistics & Information Science',
                'Modelling & Simulation',
                'Quality Assurance & Control',
                'Coaching & Instruction',
                'Fitness & Personal Training',
                'Air Conditioning & Refrigeration',
                'Automotive Trades',
                'Bakers & Pastry Chefs',
                'Building Trades',
                'Butchers',
                'Carpentry & Cabinet Making',
                'Cleaning Services',
                'Electricians',
                'Fitters, Tunners & Machinists',
                'Floristry',
                'Gardening & Landscaping',
                'Hair & Beauty',
                'Labourers',
                'Locksmiths',
                'Maintenance & Handyperson Services',
                'Nannies & Babysitters',
                'Painters & Sign Writers',
                'Plumbers',
                'Printing & Publishing Services',
                'Security Services',
                'Tailor & Dressmakers',
                'Technicians',
                'Welders & Boilermakers',




            ];
            const sd = [
                y1.value, y2.value, y3.value, y4.value, y5.value, y6.value, y8.value, y9.value, y10.value, y11.value, y12.value,
                y13.value, y14.value, y15.value, y16.value, y17.value, y18.value, y19.value, y20.value, y21.value, y22.value, y23.value,
                y24.value, y25.value, y26.value, y27.value, y28.value, y29.value, y30.value, y31.value, y32.value, y33.value, y34.value,
                y35.value, y36.value, y37.value, y38.value, y39.value, y40.value, y41.value, y42.value, y43.value, y44.value,
                y46.value, y47.value, y48.value, y49.value, y50.value, y51.value, y52.value, y53.value, y54.value, y55.value, y56.value,
                y57.value, y58.value, y59.value, y60.value, y61.value, y62.value, y63.value, y64.value, y65.value, y66.value, y67.value,
                y69.value, y70.value, y71.value, y72.value, y73.value, y74.value, y75.value, y76.value, y77.value, y78.value,
                y79.value, y80.value, y81.value, y82.value, y83.value, y84.value, y85.value, y86.value, y87.value, y88.value, y89.value,
                y90.value, y91.value, y92.value, y93.value, y94.value, y95.value, y96.value, y97.value, y98.value, y99.value, y100.value,
                y101.value, y102.value, y103.value, y104.value, y105.value, y106.value, y107.value, y108.value, y109.value, y110.value,
                y111.value, y112.value, y113.value, y114.value, y115.value, y116.value, y117.value, y118.value, y119.value, y120.value,
                y121.value, y122.value, y123.value, y124.value, y125.value, y126.value, y127.value, y128.value, y129.value, y130.value,
                y131.value, y132.value, y133.value, y134.value, y135.value, y136.value, y137.value, y138.value, y139.value, y140.value,
                y141.value, y142.value, y143.value, y144.value, y145.value, y146.value, y147.value, y148.value, y149.value, y150.value,
                y151.value, y152.value, y153.value, y154.value, y155.value, y156.value, y157.value, y158.value, y159.value, y160.value,
                y161.value, y162.value, y163.value, y164.value, y165.value, y166.value, y167.value, y168.value, y169.value, y170.value,
                y171.value, y172.value, y173.value, y174.value, y175.value, y176.value, y177.value, y178.value, y179.value, y180.value,
                y181.value, y182.value, y183.value, y184.value, y185.value, y186.value, y187.value, y188.value, y189.value, y190.value,
                y191.value, y192.value, y193.value, y194.value, y195.value, y196.value, y197.value, y198.value, y199.value, y200.value,
                y201.value, y202.value, y203.value, y204.value, y205.value, y206.value, y207.value, y208.value, y209.value, y210.value,
                y211.value, y212.value, y213.value, y214.value, y215.value, y216.value, y217.value, y218.value, y219.value, y220.value,
                y221.value, y222.value, y223.value, y224.value, y225.value, y226.value, y227.value, y228.value, y229.value, y230.value,
                y231.value, y232.value, y233.value, y234.value, y235.value, y236.value, y237.value, y238.value, y240.value,
                y241.value, y242.value, y243.value, y244.value, y245.value, y246.value, y247.value, y248.value, y249.value, y250.value,
                y251.value, y252.value, y253.value, y254.value, y255.value, y256.value, y257.value, y258.value, y259.value, y260.value,
                y261.value, y262.value, y263.value, y264.value, y265.value, y266.value, y267.value, y269.value, y270.value,
                y271.value, y272.value, y273.value, y274.value, y275.value, y276.value, y277.value, y278.value, y279.value, y280.value,
                y281.value, y282.value, y283.value, y284.value, y285.value, y286.value, y287.value, y288.value, y289.value, y290.value,
                y291.value, y292.value, y293.value, y294.value, y295.value, y296.value, y297.value, y298.value, y300.value,
                y301.value, y302.value, y303.value, y304.value, y305.value, y306.value, y307.value, y308.value, y309.value, y310.value,
                y311.value, y312.value, y313.value, y314.value, y315.value, y316.value, y317.value, y318.value, y319.value, y320.value,
                y321.value, y322.value, y323.value, y324.value, y325.value, y326.value, y327.value, y328.value, y329.value, y330.value,
                y331.value, y332.value, y333.value, y334.value, y335.value, y336.value, y337.value
            ];

            const colors = [
                '#CBFFA9', '#FF5733', '#33FFD1', '#FF3366', '#3399FF', '#33FF33', '#FF33FF', '#FF9933', '#9933FF', '#33FFFF',
                '#FF6633', '#33CC33', '#9966FF', '#CC33CC', '#CC66FF', '#66CC33', '#66FF66', '#6666FF', '#FF66CC', '#6699FF',
                '#FFCC33', '#33CCFF', '#FF99CC', '#99CC66', '#CC99FF', '#99FFCC', '#FFCC99', '#CCCCFF', '#FF3366', '#33FF33',
                '#FF33FF', '#FF9933', '#9933FF', '#33FFFF', '#FF6633', '#33CC33', '#9966FF', '#CC33CC', '#CC66FF', '#66CC33',
                '#66FF66', '#6666FF', '#FF66CC', '#6699FF', '#FFCC33', '#33CCFF', '#FF99CC', '#99CC66', '#CC99FF', '#99FFCC',
                '#FFCC99', '#CCCCFF', '#FF3366', '#33FF33', '#FF33FF', '#FF9933', '#9933FF', '#33FFFF', '#FF6633', '#33CC33',
                '#9966FF', '#CC33CC', '#CC66FF', '#66CC33', '#66FF66', '#6666FF', '#FF66CC', '#6699FF', '#FFCC33', '#33CCFF',
                '#FF99CC', '#99CC66', '#CC99FF', '#99FFCC', '#FFCC99', '#CCCCFF', '#FF3366', '#33FF33', '#FF33FF', '#FF9933',
                '#9933FF', '#33FFFF', '#FF6633', '#33CC33', '#9966FF', '#CC33CC', '#CC66FF', '#66CC33', '#66FF66', '#6666FF',
                '#FF66CC', '#6699FF', '#FFCC33', '#33CCFF', '#FF99CC', '#99CC66', '#CC99FF', '#99FFCC', '#FFCC99', '#CCCCFF'
            ];

            const subData = label.reduce((filtered, lbl, index) => {
                if (sd[index] !== null && sd[index] !== 0) {
                    filtered.labels.push(lbl);
                    filtered.data.push(sd[index]);
                    filtered.backgroundColor.push(colors[filtered.data.length - 1]);
                }
                return filtered;
            }, { labels: [], data: [], backgroundColor: [] });

            const sdata = {
                labels: subData.labels,
                datasets: [
                    {
                        label: 'Sub Classification',
                        data: subData.data,
                        backgroundColor: subData.backgroundColor,
                        hoverOffset: 4,
                    },
                ],
            };

            const sconfig: ChartConfiguration = {
                type: 'pie',
                data: sdata,
                options: {},
            };

            const scanvas = document.getElementById('myCharts') as HTMLCanvasElement;
            if (scanvas) {
                const ctx = scanvas.getContext('2d');
                if (ctx) {
                    new Chart(ctx, sconfig);
                }
            }



            //job daily
            const jobdays = Atils.daysOfWeek({ count: 7 });

            for (const jobday of jobdays) {
                const jobsInDay = jobPostings.value.filter((job) => {
                    if (job.dateCreated) {
                        const date = new Date(job.dateCreated);
                        const jobDay = date.toLocaleString('default', { weekday: 'long' });
                        return jobDay === jobday;
                    }
                    return false;
                });

                jobdatad.push(jobsInDay.length);
            }
            console.log(jobdatad);

            const jobsdatad = {
                labels: jobdays,
                datasets: [
                    {
                        label: 'Jobs in Daily',
                        data: jobdatad,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color with adjusted opacity
                        borderColor: 'rgba(54, 162, 235, 1)', // Border color in blue
                        borderWidth: 2, // Border width
                        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)', // Blue color with adjusted opacity on hover
                        hoverBorderColor: 'rgba(54, 162, 235, 1)', // Border color in blue on hover
                        hoverBorderWidth: 2, // Border width on hover
                        hoverOffset: 6, // Increased hover offset
                    },
                ],
            };

            const configjobd: ChartConfiguration = {
                type: 'line',
                data: jobsdatad,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvasjobd = document.getElementById('jobd') as HTMLCanvasElement;
            if (canvasjobd) {
                const ctx = canvasjobd.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configjobd);
                }
            }

            //bar- job month

            const jobmonths = Utils.months({ count: 12 });

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

            console.log(jobdatam);

            const jobsdatam = {
                labels: jobmonths,
                datasets: [
                    {
                        label: 'Jobs in Month',
                        data: jobdatam,
                        backgroundColor: 'rgba(127, 255, 0, 0.6)', // Apple green color with adjusted opacity
                        borderColor: 'rgba(127, 255, 0, 1)', // Border color in apple green
                        borderWidth: 2, // Border width
                        hoverBackgroundColor: 'rgba(127, 255, 0, 0.8)', // Apple green color with adjusted opacity on hover
                        hoverBorderColor: 'rgba(127, 255, 0, 1)', // Border color in apple green on hover
                        hoverBorderWidth: 2, // Border width on hover
                        hoverOffset: 6, // Increased hover offset
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

            //bar job year

            const jobyears = Itils.years({ count: 12 });

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

            console.log(jobdatay);

            const jobsdatay = {
                labels: jobyears,
                datasets: [
                    {
                        label: 'Jobs in Year',
                        data: jobdatay,
                        backgroundColor: 'rgba(255, 255, 0, 0.6)', // Yellow color with adjusted opacity
                        borderColor: 'rgba(255, 255, 0, 1)', // Border color in yellow
                        borderWidth: 2, // Border width
                        hoverBackgroundColor: 'rgba(255, 255, 0, 0.8)', // Yellow color with adjusted opacity on hover
                        hoverBorderColor: 'rgba(255, 255, 0, 1)', // Border color in yellow on hover
                        hoverBorderWidth: 2, // Border width on hover
                        hoverOffset: 6, // Increased hover offset
                    },
                ],
            };

            const configjoby: ChartConfiguration = {
                type: 'bar',
                data: jobsdatay,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            };

            const canvasjobsy = document.getElementById('jobsy') as HTMLCanvasElement;
            if (canvasjobsy) {
                const ctx = canvasjobsy.getContext('2d');
                if (ctx) {
                    new Chart(ctx, configjoby);
                }
            }
        });

        return {
            user,
            jobPostings,
            likes,
            views,
            bookmarks,
            like,
            view,
            swipesuccess,
        }
    },
    // watch: {
    //     jobs(newVal, oldVal) {
    //         console.log('Selected job:', newVal);
    //     },
    // },
    data() {
        return {
            likesThisWeek: 0,
            viewsThisWeek: 0,
            jobs: "",
        };
    },
    methods: {
        async countLikesThisWeek() {
            const today = new Date();
            const startOfWeek = new Date(today);
            startOfWeek.setHours(0, 0, 0, 0);
            startOfWeek.setDate(today.getDate() - today.getDay());

            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 7);

            try {
                const likesRef = collection(db, 'likes');
                const q = query(
                    likesRef,
                    where('dateCreated', '>=', startOfWeek),
                    where('dateCreated', '<=', endOfWeek)
                );

                const querySnapshot = await getDocs(q);
                this.likesThisWeek = querySnapshot.size;
            } catch (error) {
                console.error('Error counting likes this week:', error);
            }
        },
        async countViewsThisWeek() {
            const today = new Date();
            const startOfWeek = new Date(today);
            startOfWeek.setHours(0, 0, 0, 0);
            startOfWeek.setDate(today.getDate() - today.getDay());

            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 7);

            try {
                const likesRef = collection(db, 'views');
                const q = query(
                    likesRef,
                    where('dateCreated', '>=', startOfWeek),
                    where('dateCreated', '<=', endOfWeek)
                );

                const querySnapshot = await getDocs(q);
                this.viewsThisWeek = querySnapshot.size;
            } catch (error) {
                console.error('Error counting views this week:', error);
            }
        },
    },
    mounted() {
        this.countLikesThisWeek();
        this.countViewsThisWeek();
    },
};
</script>
  
<style scoped></style>
  