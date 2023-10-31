<template>
    <div v-if="isLoading">
      <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
        <IonGrid style="height: 100%; padding: 0">
          <IonRow style="height: 100%">
            <IonCol class="flexcenter" style="padding: 0; justify-content: left">
              <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
      <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
        <IonGrid style="height: 100%; padding: 0">
          <IonRow style="height: 100%">
            <IonCol class="flexcenter" style="padding: 0; justify-content: left">
              <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
      <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
        <IonGrid style="height: 100%; padding: 0">
          <IonRow style="height: 100%">
            <IonCol class="flexcenter" style="padding: 0; justify-content: left">
              <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
      <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
        <IonGrid style="height: 100%; padding: 0">
          <IonRow style="height: 100%">
            <IonCol class="flexcenter" style="padding: 0; justify-content: left">
              <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
      <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
        <IonGrid style="height: 100%; padding: 0">
          <IonRow style="height: 100%">
            <IonCol class="flexcenter" style="padding: 0; justify-content: left">
              <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
      <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
        <IonGrid style="height: 100%; padding: 0">
          <IonRow style="height: 100%">
            <IonCol class="flexcenter" style="padding: 0; justify-content: left">
              <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
      <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
        <IonGrid style="height: 100%; padding: 0">
          <IonRow style="height: 100%">
            <IonCol class="flexcenter" style="padding: 0; justify-content: left">
              <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
      <IonCard class="dashboard-postedjobs-jobposting" style="margin-right: 25px">
        <IonGrid style="height: 100%; padding: 0">
          <IonRow style="height: 100%">
            <IonCol class="flexcenter" style="padding: 0; justify-content: left">
              <IonSkeletonText animated style="height: 100%"></IonSkeletonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    </div>
    <div v-else v-for="(post, index) in jobpost" :key="post.jobdid">
        <IonCard class="enotif-card">
          <IonGrid>
            <IonRow>
              <IonCol>
                {{ swiper[index] ? swiper[index].fullname : 'Loading...' }} | {{ post.jobname }}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
    </div>
  </template>
    
    
  <script lang="ts">
  import "./notification.css";
  import { useSwipedata } from '@/stores/swipedata';
  import { IonPage, IonGrid, IonRow, IonCol, IonCard, IonSkeletonText, } from '@ionic/vue';
  import { onMounted, ref } from 'vue';
  import { getDashboardProfile, getJobPostings, getSwipedpostings, getswiperProfile } from './Dashboard-Model';
  
  export default {
    setup() {
      const user = ref(null);
      const jobpost = ref([]);
      const swiper = ref([]);
  
      onMounted(async () => {
        const userEmail = localStorage.getItem("email");
        user.value = await getDashboardProfile(userEmail);
        try {
          jobpost.value = await Promise.all(user.value.swiperjob.map(async (swiperjobs) => {
            return await getSwipedpostings(swiperjobs.jobdid);
          }));
  
          swiper.value = await Promise.all(user.value.swiperuser.map(async (swiperusers) => {
            return await getswiperProfile(swiperusers.swipedid);
          }));
        } catch (error) {
          console.error('An error occurred:', error);
        }
      });
  
      return {
        user,
        jobpost,
        swiper,
      };
    },
    data() {
      return {
        isLoading: true,
      };
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    components: {
      IonPage, IonGrid, IonRow, IonCol, IonSkeletonText, IonCard
    }
  }
  </script>
    
  <style></style>
    