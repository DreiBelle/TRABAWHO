<template>
    <IonGrid class="eprofile-grid">
        <IonRow style="height: 55px;">
            <IonCol class="eprofile-container-button-edit">
                <IonButton class="eprofile-button-edit">
                    <IonIcon style="padding-right: 5px ;" :icon="pencil"></IonIcon>
                    EDIT PROFILE
                </IonButton>
            </IonCol>
        </IonRow>
        <IonRow style="height: calc(100% - 55px);">
            <IonCol size="3">
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonAvatar class="eprofile-profilepic">
                            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="image">
                        </IonAvatar>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="flexcenter">
                        <IonText class="eprofile-text-title-container" style="font-size: 20px; padding-top: 0;">
                            REGISTERED BUSINESS TEXT
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard class="eprofile-cards">
                            <IonRow>
                                <IonCol class="flexcenter eprofile-text-title-container">
                                    <IonText>
                                        COMPANY OVERVIEW
                                    </IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol style="padding-top: 10px;">
                                    <div class="flexcenter">
                                        <IonText class="eprofile-text">
                                            Founder/s
                                        </IonText>
                                    </div>
                                    <div class="flexcenter eprofile-text-subtext-container">
                                        <!-- <IonAvatar class="eprofile-avatar">
                                            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="">
                                        </IonAvatar> -->
                                        <IonText class="eprofile-text-subtext">
                                            Andrei Emmanuel
                                        </IonText>
                                    </div>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol style="padding-top: 10px;">
                                    <div class="flexcenter">
                                        <IonText class="eprofile-text">
                                            Year of establishment
                                        </IonText>
                                    </div>
                                    <div class="flexcenter">
                                        <IonText class="eprofile-text-subtext">
                                            February 24, 2002
                                        </IonText>
                                    </div>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol style="padding-top: 10px;">
                                    <div class="flexcenter">
                                        <IonText class="eprofile-text">
                                            No. of Employees
                                        </IonText>
                                    </div>
                                    <div class="flexcenter">
                                        <IonText class="eprofile-text-subtext">
                                            10
                                        </IonText>
                                    </div>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <div class="flexcenter">
                                        <IonText class="eprofile-text">
                                            Location:
                                        </IonText>
                                    </div>
                                    <div class="flexcenter">
                                        <IonText class="eprofile-text-subtext">
                                            Bayombong
                                        </IonText>
                                    </div>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol class="flexcenter">
                                    <IonAvatar class="eprofile-avatar-socialmedias">
                                        <IonIcon :icon="logoFacebook"></IonIcon>
                                    </IonAvatar>
                                    <IonAvatar class="eprofile-avatar-socialmedias">
                                        <IonIcon :icon="logoTwitter"></IonIcon>
                                    </IonAvatar>
                                    <IonAvatar class="eprofile-avatar-socialmedias">
                                        <IonIcon :icon="logoInstagram"></IonIcon>
                                    </IonAvatar>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonCol>
            <IonCol size="9">
                <IonRow>
                    <IonCol>
                        <div class="flexcenter eprofile-coverpic-container">
                            <img class="eprofile-coverpic" src="../assets/companybackground.jpg" alt="">
                        </div>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard class="eprofile-cards">
                            <div class="flexcenter">
                                <IonText class="eprofile-cards-title">
                                    MISSION/VISION
                                </IonText>
                            </div>
                            <div class="eprofile-cards-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard class="eprofile-cards2">
                            <IonRow style="height: 30px;">
                                <IonCol>
                                    Recent Postings:
                                </IonCol>
                            </IonRow>
                            <IonRow style="height: calc(90% - 30px);">
                                <IonCol class="flexcenter">
                                    <IonCard class="eprofile-cards3">
                                        <IonRow style="height: 100%;">
                                            <IonCol size="1">
                                                picture
                                            </IonCol>
                                            <IonCol class="eprofile-title-recent-postings" size="8">
                                                jobname
                                            </IonCol>
                                            <IonCol class="flexcenter" size="1">
                                                <IonIcon class="eprofile-icons" :icon="eye"> </IonIcon>
                                                <IonText class="eprofile-text-bookmark">0</IonText>
                                            </IonCol>
                                            <IonCol class="flexcenter" size="1">
                                                <IonIcon class="eprofile-icons" :icon="thumbsUp"></IonIcon>
                                                <IonText class="eprofile-text-bookmark">0</IonText>
                                            </IonCol>
                                            <IonCol class="flexcenter" size="1">
                                                <IonIcon class="eprofile-icons" :icon="bookmark"></IonIcon>
                                                <IonText class="eprofile-text-bookmark">0</IonText>
                                            </IonCol>
                                        </IonRow>
                                    </IonCard>
                                </IonCol>
                            </IonRow>

                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonCard class="eprofile-cards2">
                            <IonRow style="height: 30px;">
                                <IonCol>
                                    Recent Activities:
                                </IonCol>
                            </IonRow>
                            <IonRow style="height: calc(90% - 30px);">
                                <IonCol class="flexcenter">
                                    <IonCard class="eprofile-cards3">
                                        <IonRow style="height: 100%;">
                                            <IonCol size="1">
                                                Picture
                                            </IonCol>
                                            <IonCol class="eprofile-title-recent-postings" size="10">
                                                Nyzuz Damaso liked Carpenter Post
                                            </IonCol>
                                            <IonCol class="flexcenter" size="1">
                                                <IonIcon class="eprofile-icons" :icon="chevronForward">

                                                </IonIcon>
                                            </IonCol>
                                        </IonRow>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonCol>
        </IonRow>
    </IonGrid>
</template>
<script lang="ts">
import { IonAvatar, IonButton, IonCard, IonCol, IonGrid, IonIcon, IonPage, IonRow, IonText } from '@ionic/vue';
import "./Profile.css"
import { pencil, logoFacebook, logoGoogle, logoTwitter, logoInstagram, eye, thumbsUp, bookmark, chevronForward } from 'ionicons/icons';

export default {
    components: { IonGrid, IonCol, IonRow, IonAvatar, IonCard, IonText, IonButton, IonIcon, IonPage },
    setup() {
        return {
            pencil,
            logoGoogle,
            logoFacebook,
            logoTwitter,
            logoInstagram,
            eye,
            thumbsUp,
            bookmark,
            chevronForward
        }
    }
}
</script>
<style>
/* ion-col {
    border: 1px solid black
} */
</style>