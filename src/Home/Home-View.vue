<template>
  <IonPage
    style="
      background: linear-gradient(to bottom right, white, #a6aad4);
      color: black;
    "
  >
    <div v-if="screenSize <= 425">
      <IonPage>
        <IonGrid style="height: 100%; width: 100%">
          <IonRow style="height: 100%">
            <IonCol class="flexcenter">
              <IonGrid>
                <IonRow>
                  <IonCol class="flexcenter">
                    <img
                      class="home-logo"
                      src="../assets/logo/logo1.png"
                      alt="logo"
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol style="padding: 0" class="flexcenter">
                    <IonText class="home-title"> TRABAWHO </IonText>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol class="flexcenter">
                    <div>
                      <div class="flexcenter">
                        <IonButton class="home-buttons" @click="Login">
                          LOGIN
                        </IonButton>
                      </div>
                      <div class="flexcenter">
                        <IonText class="home-a-getstarted">
                          Don't have an account?
                          <a
                            @click="Register"
                            style="color: #262c5c; text-decoration: underline"
                            >Get Started now!</a
                          >
                        </IonText>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonPage>
    </div>
    <div v-if="screenSize >= 426">
      <!-- Your large screen content -->
      <landingPage />
    </div>
  </IonPage>
</template>

<script lang="ts">
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButton,
} from "@ionic/vue";
import { defineComponent, ref, watch } from "vue";
import landingPage from "./Home-LandingPage.vue";
import {
  GoEmployer,
  GoRegister,
  GoLogin,
  GoLoginComputer,
} from "./Home-Controller";

export default defineComponent({
  components: {
    landingPage,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonButton,
  },
  data() {
    return {
      screenSize: window.innerWidth,
    };
  },
  methods: {
    Register() {
      if (this.screenSize <= 425) {
        GoRegister();
      } else {
        GoEmployer();
      }
    },
    Login() {
      if (this.screenSize <= 425) {
        GoLogin();
      } else {
        GoLoginComputer();
      }
    },
    updateScreenSize() {
      this.screenSize = window.innerWidth;
    },
  },

  mounted() {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenSize);
  },
});
</script>

<style>
/* Your styles here */
</style>
