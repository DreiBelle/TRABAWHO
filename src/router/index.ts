import { createRouter, createWebHistory } from "@ionic/vue-router";
import {
  RouteRecordRaw,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
import { auth } from "@/firebaseDB";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseDB";
import NavBar from "../NavBar/NavBar.vue";
import { ref } from "vue";
import { getuser } from "../Login/Login-Model";
import SideBar from "../Dashboard/Employer-Sidebar.vue";

const user = ref(null);

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../Home/Home-View.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../Login/Login-View.vue"),
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: () => import("../SignUp/Seeker-SignUp.vue"),
    props: true,
  },
  {
    path: "/SignUp2",
    name: "SignUp2",
    component: () => import("../SignUp/Seeker-SignUp2.vue"),
    props: true,
  },
  {
    path: "/SignUp3",
    name: "SignUp3",
    component: () => import("../SignUp/Seeker-SignUp3.vue"),
    props: true,
  },
  {
    path: "/SignUpBasic",
    name: "SignUpBasic",
    component: () => import("../SignUp/Seeker-SignUpBasic.vue"),
    props: true,
  },
  {
    path: "/SignUpPicture",
    name: "SignUpPicture",
    component: () => import("../SignUp/Seeker-SignUpPicture.vue"),
    props: true,
  },
  {
    path: "/Swipe",
    component: NavBar,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/Swipe",
        name: "Swipe",
        component: () => import("../Swipe/Swipe.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/Seeker-Profile",
        name: "Seeker-Profile",
        component: () => import("../Profile/Seeker-Profile.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/Seeker-Message",
        name: "Seeker-Message",
        component: () => import("../Message/Seeker-Message.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/Seeker-List",
        name: "Seeker-List",
        component: () => import("../List/List.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/Seeker-Notification",
        name: "Seeker-Notification",
        component: () => import("../Notification/Seeker-Notification.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/Employer-Dashboard",
    name: "Employer-Dashboard",
    component: () => import("../Dashboard/Employer-Page-Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Employer-DataAnalytics",
    name: "Employer-DataAnalytics",
    component: () => import("../Dashboard/Employer-DataAnalytics.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Employer-JobPostings",
    name: "Employer-JobPostings",
    component: () => import("../Dashboard/Employer-JobPosting.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Employer-Notifications",
    name: "Employer-Notifications",
    component: () => import("../Dashboard/Employer-Notification.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Employer-Messages",
    name: "Employer-Messages",
    component: () => import("../Dashboard/Employer-Message.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/SignUpEmployer1",
    name: "SignUpEmployer1",
    component: () => import("../SignUp/Employer-SignUp.vue"),
  },
  {
    path: "/LoginComputer",
    name: "LoginComputer",
    component: () => import("../Login/LoginComputer-View.vue"),
  },
  {
    path: "/Seeker-Message2",
    name: "Seeker-Message2",
    component: () => import("../Message/Seeker-Chatbox.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/LandingPage",
    name: "LandingPage",
    component: () => import("../Home/Home-LandingPage.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../Admin/adminDashboard.vue"),
  },
];

const getUserType = async () => {
  const userEmail = localStorage.getItem("email");
  const userData = await getuser(userEmail);
  if (userData) {
    user.value = userData;
    return userData.type;
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

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
    const currentUser = await getCurrentUser();
    if (currentUser) {
      const userType = await getUserType();

      // Check the user's type and restrict access accordingly
      if (
        userType === "jobseeker" &&
        (to.path.includes("/Swipe") ||
          to.path.includes("/Seeker-Profile") ||
          to.path.includes("/Seeker-List") ||
          to.path.includes("/Seeker-Notification") ||
          to.path.includes("/Seeker-Message"))
      ) {
        next();
      } else if (
        userType === "employer" &&
        (to.path.includes("/Employer-Dashboard") ||
          to.path.includes("/Employer-Message") ||
          to.path.includes("/Employer-Profile") ||
          to.path.includes("/Employer-DataAnalytics") ||
          to.path.includes("/Employer-JobPostings") ||
          to.path.includes("/Employer-Notifications") ||
          to.path.includes("/Employer-Messages"))
      ) {
        next();
      }  else if (
        userType === "admin" &&
        (
          to.path.includes("/admin")
        )
      ) {
        next();
      } else {
        // Handle unauthorized access for other user types or show an error message
        if (window.innerWidth <= 768) {
          alert(
            "You do not have access because you are jobseeker, Sign in first!"
          );
          next("/Login");
        } else {
          alert(
            "You do not have access because you are employer, Sign in first!"
          );
          next("/LoginComputer");
        }
      }
    } else {
      // Handle the case where the user is not authenticated
      if (window.innerWidth <= 768) {
        alert("You do not have access, Sign in first!");
        next("/Login");
      } else {
        alert("You do not have access, Sign in first!");
        next("/LoginComputer");
      }
    }
  } else {
    // Allow access to routes that do not require authentication
    next();
  }
});

export default router;
