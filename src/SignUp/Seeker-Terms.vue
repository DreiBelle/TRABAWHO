<template>
  <IonModal :is-open="isTermsmodal" @did-dismiss="closeModal()" :class="{ jsignupModal: addBorder}">
    <IonContent>
      <IonPage class="signup-ionpage">
        <IonContent style="--background: none;">
          <IonCard style="background-color: rgba(62, 62, 62, 0.1); color: black; padding: 5px;">
            <div class="flexcenter">
              <IonText style="text-align: center; font-weight: bold; font-size: 20px; padding: 10px;">Terms and Conditions
              </IonText>
            </div>
            <div>
              <p class="jsignup-p" style="margin-top: 5px;">By accessing and using the Service, you agree to be bound by
                these Terms and Conditions.
                Effective Date: [Insert Date]
                Welcome to TrabaWho, a job posting and matching application. These Terms and Conditions (the "Agreement")
                govern your use of the TrabaWho application and website (collectively, the "Service").
              </p>
            </div>
            <div>
              <p class="jsignup-terms"><b>1. Acceptance of Terms</b></p>
              <p class="jsignup-p">By accessing and using the Service, you agree to be bound by these Terms and
                Conditions.
                If you do not agree to these terms, please do not use the Service.
              </p>
              <p class="jsignup-terms"><b>2. Eligibility</b></p>
              <p class="jsignup-p">
                You must be at least 18 years of age to use the TrabaWho application. By using the app, you confirm that
                you
                meet this age requirement.
              </p>
              <p class="jsignup-terms"><b>3. User Accounts</b></p>
              <p class="jsignup-p">
                <b>a.</b> To use certain features of the application, you may be required to create a user account. You
                are
                responsible for maintaining the confidentiality of your account credentials.
              </p>
              <p class="jsignup-p">
                <b>b.</b> You are solely responsible for any activity that occurs under your account.
              </p>
              <p class="jsignup-p">
                <b>c.</b> TrabaWho reserves the right to suspend or terminate accounts that violate these terms or engage
                in
                any
                inappropriate or harmful activities.

              </p>
              <p class="jsignup-terms"><b>4. Privacy Policy</b></p>
              <p class="jsignup-p">
                Your use of the application is also governed by our Privacy Policy, which outlines how we collect, use,
                and
                protect your personal information. Please review the Privacy Policy to understand how your data is
                handled.
              </p>
              <p class="jsignup-terms"><b>5. User Conduct</b></p>
              <p class="jsignup-p">
                <b>a.</b> You agree not to use TrabaWho for any unlawful, unethical, or harmful purposes.
              </p>
              <p class="jsignup-p">
                <b>b.</b> You agree not to engage in any activities that may disrupt or interfere with the proper
                functioning of
                the application.
              </p>
              <p class="jsignup-p">
                <b>c.</b> You agree not to impersonate others or provide false information.
              </p>
              <p class="jsignup-terms"><b>6. Intellectual Property</b></p>
              <p class="jsignup-p">
                <b>a.</b> TrabaWho and its content, including but not limited to text, graphics, logos, and software, are
                protected
                by copyright and other intellectual property laws.
              </p>
              <p class="jsignup-p">
                <b>b.</b> You may not copy, modify, distribute, or reproduce any part of the application without prior
                written
                consent from TrabaWho.
              </p>
              <p class="jsignup-terms"><b>7. User-Generated Content</b></p>
              <p class="jsignup-p">
                <b>a.</b> Users may post content on the application. You are solely responsible for any content you post.
              </p>
              <p class="jsignup-p">
                <b>b.</b> TrabaWho reserves the right to remove or modify user-generated content that violates these terms
                or is
                considered inappropriate.
              </p>
              <p class="jsignup-terms"><b>8. Limitation of Liability</b></p>
              <p class="jsignup-p">
                <b>a.</b> TrabaWho is not responsible for the accuracy, reliability, or quality of job postings, user
                profiles, or
                communication between users.
              </p>
              <p class="jsignup-p">
                <b>b.</b> TrabaWho is not liable for any damages or losses resulting from your use of the application.
              </p>
              <p class="jsignup-terms"><b>9. Termination</b></p>
              <p class="jsignup-p">
                TrabaWho reserves the right to terminate or suspend your access to the application at any time, with or
                without cause.
              </p>
              <p class="jsignup-terms"><b>10. Changes to Terms and Conditions</b></p>
              <p class="jsignup-p">
                TrabaWho may update these terms from time to time. You will be notified of any changes, and continued use
                of
                the application after such changes constitutes acceptance of the new terms.
              </p>
              <p class="jsignup-terms"><b>11. Contact Information</b></p>
              <p class="jsignup-p">
                If you have any questions or concerns about these terms and conditions, please contact us at
                <b>TrabaWho12@gmail.com.</b>
              </p>
              <p class="jsignup-terms"><b>Dedication</b></p>
              <p class="jsignup-p" style="text-indent: 30px;">
                The researchers would like to express their profound gratitude to the following individuals and entities
                who
                have played an invaluable role in the completion of this study:
              </p>
              <p class="jsignup-p" style="text-indent: 30px;">
                To our parents and siblings: Your unwavering support, encouragement, and love have been our strength and
                inspiration. Thank you for being there through every challenge and accomplishment.
              </p>
              <p class="jsignup-p" style="text-indent: 30px;">
                To our mentors, advisors, and academic peers who have generously shared their knowledge, insights, and
                guidance throughout this academic endeavor. Your expertise and wisdom have illuminated our path and
                enriched
                our learning experience.
              </p>
              <p class="jsignup-p" style="text-indent: 30px;">
                To the Almighty Father, for His divine blessings, guidance, and grace. We acknowledge His presence in our
                lives, and we are grateful for His unwavering support and strength as we embarked on this academic
                journey.
              </p>
              <p class="jsignup-p" style="text-indent: 30px;">
                To all those who, in various ways, assisted, supported, and contributed to the creation of this study
                work,
                we extend our heartfelt appreciation. Your contributions have been instrumental in bringing this research
                to
                fruition.
              </p>
              <p class="jsignup-p" style="text-indent: 30px;">
                This thesis is dedicated to each of you, with the deepest appreciation and respect, as we acknowledge the
                significant roles you have played in our academic and personal growth.
              </p>
              <p class="jsignup-p">
                With gratitude,
              </p>
              <p class="jsignup-p">
                <b>The Researchers</b>
              </p>

            </div>

            <IonButton @click="closeModal()" expand="block" class="jsignup-terms-button">Done</IonButton>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonContent>
  </IonModal>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonCard,
  IonText,
  IonButton,
  IonModal,
} from "@ionic/vue";
import './SignUp.css'

export default {
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonText,
    IonButton,
    IonModal
  },
  data(){
    return{
      innerWidth: window.innerWidth,
      addBorder: false,
    }
  },
  props:{
    isTermsmodal: {
      type: Boolean,
      required: true,
    }
  },
  methods:{
    closeModal(){
      this.$emit("close-terms-modal")
    }
  },
  mounted(){
    if (innerWidth <= 768 ) {
      this.addBorder = false
    } else{
      this.addBorder = true
    }
  }
}
</script>

<script lang="ts"></script>
