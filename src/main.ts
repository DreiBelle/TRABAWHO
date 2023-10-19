import { createApp } from "vue";
import { createPinia } from "pinia";
import { createGesture } from "@ionic/vue";
import App from "./App.vue";
import router from "./router/index";
import { ref } from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import { IonicVue } from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";

// const elementRef = ref();
const app = createApp(App).use(IonicVue).use(router);
const pinia = createPinia();

app.config.globalProperties.$eventBus = app;

router.isReady().then(() => {
  app.use(pinia);
  app.mount("#app");  
});
