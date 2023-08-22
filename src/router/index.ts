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
    component: () => import('../SignUp/SignUp-View.vue'),
    props: true
  },
  {
    path: '/SignUp2',
    name: 'SignUp2',
    component: () => import('../SignUp/EducationalBG-View.vue'),
    props: true
  },
  {
    path: '/SignUp3',
    name: 'SignUp3',
    component: () => import('../SignUp/Interest-View.vue'),
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
    component: () => import('../SignUp/TermsAndConditions-View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
