import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home'
  },  
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../Home/Home-View.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../Login/Login-View.vue')
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import('../SignUpJobSeeker/SignUp-View.vue'),
    props: true
  },
  {
    path: '/SignUp2',
    name: 'SignUp2',
    component: () => import('../SignUpJobSeeker/EducationalBG-View.vue'),
    props: true
  },
  {
    path: '/SignUp3',
    name: 'SignUp3',
    component: () => import('../SignUpJobSeeker/Interest-View.vue'),
    props: true
  },
  {
    path: '/HomeSwipe-JobSeekers',
    name: 'HomeSwipe-JobSeekers',
    component: () => import('../HomeSwipe-JobSeekers/HomeSwipe-JobSeekers-View.vue')
  },
  {
    path: '/TermsandConditions',
    name: 'TermsandConditions',
    component: () => import('../SignUpJobSeeker/TermsAndConditions-View.vue')
  },
  {
    path: '/SignUpEmployer1',
    name: 'SignUpEmployer1',
    component: () => import('../SignUpEmployer/SignUpEmployer1.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
