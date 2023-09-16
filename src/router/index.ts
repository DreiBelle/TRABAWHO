import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized  } from 'vue-router';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authstore';
import NavBar from '../NavBar/NavBar.vue'



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
    component: () => import('../Login/Login-View.vue'),

  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import('../SignUp/Seeker-SignUp.vue'),
    props: true
  },
  {
    path: '/SignUp2',
    name: 'SignUp2',
    component: () => import('../SignUp/Seeker-SignUp2.vue'),
    props: true
  },
  {
    path: '/SignUp3',
    name: 'SignUp3',
    component: () => import('../SignUp/Seeker-SignUp3.vue'),
    props: true
  },
  {
    path: '/Swipe',
    component: NavBar,
    children: [
      {
        path: '/Swipe',
        name: 'Swipe',
        component: () => import('../Swipe/Swipe.vue'),
      },
      {
        path: '/Seeker-Profile',
        name: 'Seeker-Profile',
        component: () => import('../Profile/Seeker-Profile.vue'),
      },
      {
        path: '/Seeker-Message',
        name: 'Seeker-Message',
        component: () => import('../Message/Seeker-Message.vue'),
      },
    ]
  },
  {
    path: '/TermsandConditions',
    name: 'TermsandConditions',
    component: () => import('../SignUp/Seeker-Terms.vue')
  },
  {
    path: '/TermsandConditionsEmployer',
    name: 'TermsandConditionsEmployer',
    component: () => import('../SignUp/Employer-Terms.vue')
  },
  {
    path: '/SignUpEmployer1',
    name: 'SignUpEmployer1',
    component: () => import('../SignUp/Employer-SignUp.vue')
  },
  {
    path: '/LoginComputer',
    name: 'LoginComputer',
    component: () => import('../Login/LoginComputer-View.vue')
  },
  {
    path: '/Employer-Dashboard',
    name: 'Employer-Dashboard',
    component: () => import('../Dashboard/Employer-Dashboard.vue'),
  },
  {
    path: '/Employer-Message',
    name: 'Employer-Message',
    component: () => import('../Message/Employer-Message.vue'),
  },
  {
    path: '/Seeker-Message2',
    name: 'Seeker-Message2',
    component: () => import('../Message/Seeker-Chatbox.vue'),
  },
  {
    path: '/Swipe2',
    name: 'Swipe2',
    component: () => import('../Swipe/Swipe-NewSwipe.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router 

