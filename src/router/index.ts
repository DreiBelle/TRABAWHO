import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized  } from 'vue-router';
import { auth } from '@/firebaseDB';
import { onAuthStateChanged } from 'firebase/auth';
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
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/Swipe',
        name: 'Swipe',
        component: () => import('../Swipe/Swipe.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/Seeker-Profile',
        name: 'Seeker-Profile',
        component: () => import('../Profile/Seeker-Profile.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/Seeker-Message',
        name: 'Seeker-Message',
        component: () => import('../Message/Seeker-Message.vue'),
        meta: {
          requiresAuth: true,
        }
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
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/Employer-Message',
    name: 'Employer-Message',
    component: () => import('../Message/Employer-Message.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/Seeker-Message2',
    name: 'Seeker-Message2',
    component: () => import('../Message/Seeker-Chatbox.vue'),
    meta: {
      requiresAuth: true,
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()){
      next();
    }
    else {
      alert("You do not have access, Sign in first!");
      next("/Login");
    }
  } else {
    next()
  }
});


export default router 

