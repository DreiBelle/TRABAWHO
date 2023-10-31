<template>
    <IonText>Data Analytics</IonText>
    <div class="data-analytics">
        <canvas id="myChart"></canvas>
    </div>
</template>
  
<script lang="ts">
import { IonPage, IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
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
    },
    setup() {
        const user = ref(null);
        const jobPostings = ref([]);
        let likes = ref(0);
        let views = ref(0);
        let bookmarks = ref(0);

        onMounted(async () => {
            const userEmail = localStorage.getItem("email");
            user.value = await getDashboardProfile(userEmail);

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

            const labels = ['Jobpostings', 'Likes', 'Views', 'Bookmarks'];

            const data = {
                labels: labels,
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [jobPostings.value.length, likes.value, views.value, bookmarks.value],
                        backgroundColor: [
                            '#FF9B9B',
                            '#FFD6A5',
                            '#7C73C0',
                            '#CBFFA9',
                        ],
                        hoverOffset: 4,
                    },
                ],
            };

            const config: ChartConfiguration = {
                type: 'pie',
                data: data,
                options: {},
            };

            const canvas = document.getElementById('myChart') as HTMLCanvasElement;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    new Chart(ctx, config);
                }
            }
        });

        return {
            user,
            jobPostings,
            likes,
            views,
            bookmarks,
        }
    },
};
</script>
  
<style scoped></style>
  