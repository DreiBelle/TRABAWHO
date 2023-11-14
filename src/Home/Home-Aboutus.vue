<template>
  <IonContent>
    <topBar></topBar>
    <div class="flexcenter">
      <div style="width: 100%">
        <div
          class="flexcenter"
          style="
            background: #262c5c;
            margin-top: 30px;
            width: 100%;
            height: 150px;
            color: white;
          "
        >
          <div style="height: 100%">
            <IonText
              class="flexcenter"
              style="
                font-size: calc(10vh + 5vw);
                font-family: BebasNeue-Regular;
              "
            >
              <img
                class="flexcenter"
                src="../assets/logo/whitefilllogo.png"
                style="
                  height: calc(8vh + 4vw);
                  margin-top: -20px;
                  margin-right: 20px;
                "
              />
              TRABAWHO
            </IonText>
          </div>
        </div>

        <div>
          <div style="height: calc(100% - 180px)">
            <div>
              <img
                style="
                  scale: 0.9;
                  width: 25%;
                  border-radius: 30px;
                  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                  position: absolute;
                  left: 25px;
                  margin-top: 20px;
                "
                src="../assets/mobile.png"
              />
            </div>
            <div>
              <img
                style="
                  scale: 0.9;
                  width: 50%;
                  border-radius: 30px;
                  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                  position: absolute;
                  left: 150px;
                  margin-top: 130px;
                "
                src="../assets/web.png"
              />
            </div>
          </div>
          <div style="position: absolute; right: 0; margin-right: 50px">
            <div
              style="
                width: 400px;
                font-size: 16px;
                margin-top: 100px;
                text-align: justify;
              "
            >
              <IonText>
                Welcome to TRABAWHO, where innovation meets opportunity. At
                TRABAWHO, we understand the evolving landscape of job seeking
                and recruitment. Our platform is designed to empower both job
                seekers and employers by leveraging cutting-edge technology and
                user-friendly interfaces. We draw inspiration from the successes
                of leading job platforms, incorporating features reminiscent of
                industry giants like JobStreet. TRABAWHO is committed to
                simplifying the job seeking process, offering a seamless
                experience through a cross-platform framework that ensures
                accessibility for all users. Our application employs advanced
                matching algorithms, akin to those used in successful dating
                apps, to connect job seekers with employers in a more efficient
                and personalized manner. Join TRABAWHO today and embark on a
                journey where opportunities meet talent, transforming the way
                you navigate your career path.
              </IonText>
            </div>
          </div>
        </div>
        <div
          style="
            height: 200px;
            width: 100%;
            margin-top: 600px;
            margin-bottom: 100px;
          "
        >
          <div class="flexcenter">
            <IonText style="font-size: 70px; font-family: BebasNeue-Regular">
              THE RESEARCHERS
            </IonText>
          </div>
          <div class="flexcenter">
            <IonCard
              class="flexcenter"
              style="
                text-align: center;
                font-size: 15px;
                color: black;
                width: 100%;
                height: 250px;
              "
            >
              Jerkine Meryl D. Nastor <br />
              DEVELOPER/DOCUMENTATION <br />
              Email: jerkinemerylnastor@gmail.com Contact <br />
              #: +639687604924
            </IonCard>
            <IonCard
              class="flexcenter"
              style="
                text-align: center;
                font-size: 15px;
                color: black;
                width: 100%;
                height: 250px;
              "
            >
              Loubhelle P. Lictawa <br />
              DEVELOPER/DOCUMENTATION<br />
              Email: lictawa22@gmail.com Contact<br />
              #: +63908340484726
            </IonCard>
            <IonCard
              class="flexcenter"
              style="
                text-align: center;
                font-size: 15px;
                color: black;
                width: 100%;
                height: 250px;
              "
            >
              Andrei Emmanuel L. Yu <br />DEVELOPER/DOCUMENTATION <br />Email:
              dontbeshyu1@gmail.com Contact<br />
              #: +639208487400
            </IonCard>
            <IonCard
              class="flexcenter"
              style="
                text-align: center;
                font-size: 15px;
                color: black;
                width: 100%;
                height: 250px;
              "
            >
              Nyzuz Joseph P. Damaso <br />DEVELOPER/DOCUMENTATION <br />Email:
              newyearzooz2@gmail.com Contact <br />#: +639678001204
            </IonCard>
          </div>
        </div>
        <div style="background-color: #262c5c; height: 150px">
          <div class="flexcenter" style="height: 100%;">
            <IonText style="justify-content: center; align-items: bottom; color: white; font-family: BebasNeue-Regular; font-size: 20px; margin-top: 100px; margin-bottom: 10px;">
              TRABAWHO Email: trabawho.gmail.com Facebook:
              https://www.facebook.com/TrabaWh0?mibextid=LQQJ4d
            </IonText>
          </div>
        </div>
      </div>
    </div>
  </IonContent>
</template>
<script lang="ts">
import { IonCard, IonContent, IonText } from "@ionic/vue";
import topBar from "./Home-TopBar.vue";

export default { components: { topBar, IonText, IonContent, IonCard } };
</script>
<style lang=""></style>
