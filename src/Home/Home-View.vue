<template>
  <IonPage style="background: linear-gradient(to bottom right, white, #a6aad4); color: black;">
    <div v-if="screenSize <= 768"> 
      <IonPage >
        <IonGrid style="height: 100%; width: 100%;">
          <IonRow style="height: 100%">
            <IonCol class="flexcenter">
              <IonGrid>
                <IonRow>
                  <IonCol class="flexcenter">
                    <img
                      class="home-logo"
                      src="../assets/logo/blacklogo.png"
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
    <div v-else>
      <landingPage />
    </div>
  </IonPage>
</template>

<script lang="ts">
import {
  IonButton,
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonInput,
} from "@ionic/vue";
import "./Home.css";
import {
  GoEmployer,
  GoRegister,
  GoLogin,
  GoLoginComputer,
} from "./Home-Controller";
import landingPage from "./Home-LandingPage.vue";

export default {
  components: {
    landingPage,
    IonButton,
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonInput,
  },
  data() {
    return {
      screenSize: window.innerWidth,
    };
  },
  methods: {
    Register() {
      if (window.innerWidth <= 768) {
        GoRegister();
      } else {
        GoEmployer();
      }
    },

    Login() {
      if (window.innerWidth <= 768) {
        GoLogin();
      } else {
        GoLoginComputer();
      }
    },
  },
  mounted() {
    console.log(this.screenSize);
  },
};
</script>

<style>
/* ion-col {
  border: 1px solid black;
} */
</style>
