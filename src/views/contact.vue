<template>
  <div class="contact-container">
    <app-navbar8>
      <template v-slot:link1>
        <div class="contact-fragment10">
          <span class="contact-text10">#home</span>
        </div>
      </template>
      <template v-slot:link2>
        <div class="contact-fragment11">
          <span class="contact-text11">#projects</span>
        </div>
      </template>
      <template v-slot:link3>
        <div class="contact-fragment12">
          <span class="contact-text12">#skills</span>
        </div>
      </template>
      <template v-slot:link4>
        <div class="contact-fragment13">
          <span class="contact-text13">#about</span>
        </div>
      </template>
      <template v-slot:page1>
        <div class="contact-fragment14">
          <span class="contact-text14">Home</span>
        </div>
      </template>
      <template v-slot:page2>
        <div class="contact-fragment15">
          <span class="contact-text15">Projects</span>
        </div>
      </template>
      <template v-slot:page3>
        <div class="contact-fragment16">
          <span class="contact-text16">Skills</span>
        </div>
      </template>
      <template v-slot:page4>
        <div class="contact-fragment17">
          <span class="contact-text17">About</span>
        </div>
      </template>
      <template v-slot:action1>
        <div class="contact-fragment18">
          <span class="contact-text18">Main Action</span>
        </div>
      </template>
      <template v-slot:action2>
        <div class="contact-fragment19">
          <span class="contact-text19">Secondary Action</span>
        </div>
      </template>
      <template v-slot:page1Description>
        <div class="contact-fragment20">
          <span class="contact-text20">Summary of expertise and experience</span>
        </div>
      </template>
      <template v-slot:page2Description>
        <div class="contact-fragment21">
          <span class="contact-text21">
            Detailed projects showcasing business impact using the STAR method
          </span>
        </div>
      </template>
      <template v-slot:page3Description>
        <div class="contact-fragment22">
          <span class="contact-text22">
            Skills in BI tools, Python, compliance, and more
          </span>
        </div>
      </template>
      <template v-slot:page4Description>
        <div class="contact-fragment23">
          <span class="contact-text23">Background, experience, and values</span>
        </div>
      </template>
    </app-navbar8>
    <contact-form3>
      <template v-slot:action>
        <div class="contact-fragment24">
          <span class="contact-text24">Submit</span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="contact-fragment25">
          <span class="contact-text25">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <span v-html="rawnwde"></span>
          </span>
        </div>
      </template>
      <template v-slot:content2>
        <div class="contact-fragment26">
          <span class="contact-text26">Get in touch with us</span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="contact-fragment27">
          <span class="contact-text27">Contact us</span>
        </div>
      </template>
    </contact-form3>
    <app-contact14>
      <template v-slot:link1>
        <div class="contact-fragment28">
          <span class="contact-text28">Start new chat</span>
        </div>
      </template>
      <template v-slot:email1>
        <div class="contact-fragment29">
          <span class="contact-text29">info@businessanalystlifesciences.com</span>
        </div>
      </template>
      <template v-slot:phone1>
        <div class="contact-fragment30">
          <span class="contact-text30">+1-123-456-7890</span>
        </div>
      </template>
      <template v-slot:address1>
        <div class="contact-fragment31">
          <span class="contact-text31">
            123 Main Street, City, State, Zip Code
          </span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="contact-fragment32">
          <span class="contact-text32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.
          </span>
        </div>
      </template>
      <template v-slot:content2>
        <div class="contact-fragment33">
          <span class="contact-text33">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.
          </span>
        </div>
      </template>
      <template v-slot:content3>
        <div class="contact-fragment34">
          <span class="contact-text34">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.
          </span>
        </div>
      </template>
      <template v-slot:content4>
        <div class="contact-fragment35">
          <span class="contact-text35">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.
          </span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="contact-fragment36">
          <span class="contact-text36">Contact Information</span>
        </div>
      </template>
      <template v-slot:heading2>
        <div class="contact-fragment37">
          <span class="contact-text37">Live Chat</span>
        </div>
      </template>
      <template v-slot:heading3>
        <div class="contact-fragment38">
          <span class="contact-text38">Phone</span>
        </div>
      </template>
      <template v-slot:heading4>
        <div class="contact-fragment39">
          <span class="contact-text39">Office</span>
        </div>
      </template>
    </app-contact14>
    <app-contact7>
      <template v-slot:content1>
        <div class="contact-fragment40">
          <span class="contact-text40">
            businessanalyst@lifesciencesmanufacturing.com
          </span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="contact-fragment41">
          <span class="contact-text41">Contact Us</span>
        </div>
      </template>
      <template v-slot:location1>
        <div class="contact-fragment42">
          <span class="contact-text42">Email</span>
        </div>
      </template>
      <template v-slot:location2>
        <div class="contact-fragment43">
          <span class="contact-text43">Phone</span>
        </div>
      </template>
      <template v-slot:location1Description>
        <div class="contact-fragment44">
          <span class="contact-text44">
            Reach out to us via email for inquiries or to schedule a consultation.
          </span>
        </div>
      </template>
      <template v-slot:location2Description>
        <div class="contact-fragment45">
          <span class="contact-text45">
            Give us a call during business hours for immediate assistance.
          </span>
        </div>
      </template>
    </app-contact7>
    <app-footer4>
      <template v-slot:link1>
        <div class="contact-fragment46">
          <span class="contact-text46">Home</span>
        </div>
      </template>
      <template v-slot:link2>
        <div class="contact-fragment47">
          <span class="contact-text47">Projects</span>
        </div>
      </template>
      <template v-slot:link3>
        <div class="contact-fragment48">
          <span class="contact-text48">Skills</span>
        </div>
      </template>
      <template v-slot:link4>
        <div class="contact-fragment49">
          <span class="contact-text49">About</span>
        </div>
      </template>
      <template v-slot:link5>
        <div class="contact-fragment50">
          <span class="contact-text50">Contact</span>
        </div>
      </template>
      <template v-slot:termsLink>
        <div class="contact-fragment51">
          <span class="contact-text51">Terms of Use</span>
        </div>
      </template>
      <template v-slot:cookiesLink>
        <div class="contact-fragment52">
          <span class="contact-text52">Cookies Policy</span>
        </div>
      </template>
      <template v-slot:privacyLink>
        <div class="contact-fragment53">
          <span class="contact-text53">Privacy Policy</span>
        </div>
      </template>
    </app-footer4>
  </div>
</template>

<script>
import AppNavbar8 from '../components/navbar8'
import ContactForm3 from '../components/contact-form3'
import AppContact14 from '../components/contact14'
import AppContact7 from '../components/contact7'
import AppFooter4 from '../components/footer4'

export default {
  name: 'Contact',
  props: {},
  components: {
    AppNavbar8,
    ContactForm3,
    AppContact14,
    AppContact7,
    AppFooter4,
  },
  data() {
    return {
      rawnwde: ' ',
    }
  },
  metaInfo: {
    title: 'Contact - Swalih-Portfolio',
    meta: [
      {
        property: 'og:title',
        content: 'Contact - Swalih-Portfolio',
      },
    ],
  },
}
</script>

<style scoped>
.contact-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
 
.contact-fragment10 {
  display: contents;
}
 
.contact-text10 {
  display: inline-block;
}
 
.contact-fragment11 {
  display: contents;
}
 
.contact-text11 {
  display: inline-block;
}
 
.contact-fragment12 {
  display: contents;
}
 
.contact-text12 {
  display: inline-block;
}
 
.contact-fragment13 {
  display: contents;
}
 
.contact-text13 {
  display: inline-block;
}
 
.contact-fragment14 {
  display: contents;
}
 
.contact-text14 {
  display: inline-block;
}
 
.contact-fragment15 {
  display: contents;
}
 
.contact-text15 {
  display: inline-block;
}
 
.contact-fragment16 {
  display: contents;
}
 
.contact-text16 {
  display: inline-block;
}
 
.contact-fragment17 {
  display: contents;
}
 
.contact-text17 {
  display: inline-block;
}
 
.contact-fragment18 {
  display: contents;
}
 
.contact-text18 {
  display: inline-block;
}
 
.contact-fragment19 {
  display: contents;
}
 
.contact-text19 {
  display: inline-block;
}
 
.contact-fragment20 {
  display: contents;
}
 
.contact-text20 {
  display: inline-block;
}
 
.contact-fragment21 {
  display: contents;
}
 
.contact-text21 {
  display: inline-block;
}
 
.contact-fragment22 {
  display: contents;
}
 
.contact-text22 {
  display: inline-block;
}
 
.contact-fragment23 {
  display: contents;
}
 
.contact-text23 {
  display: inline-block;
}
 
.contact-fragment24 {
  display: contents;
}
 
.contact-text24 {
  display: inline-block;
}
 
.contact-fragment25 {
  display: contents;
}
 
.contact-text25 {
  display: inline-block;
}
 
.contact-fragment26 {
  display: contents;
}
 
.contact-text26 {
  display: inline-block;
}
 
.contact-fragment27 {
  display: contents;
}
 
.contact-text27 {
  display: inline-block;
}
 
.contact-fragment28 {
  display: contents;
}
 
.contact-text28 {
  display: inline-block;
}
 
.contact-fragment29 {
  display: contents;
}
 
.contact-text29 {
  display: inline-block;
}
 
.contact-fragment30 {
  display: contents;
}
 
.contact-text30 {
  display: inline-block;
}
 
.contact-fragment31 {
  display: contents;
}
 
.contact-text31 {
  display: inline-block;
}
 
.contact-fragment32 {
  display: contents;
}
 
.contact-text32 {
  display: inline-block;
}
 
.contact-fragment33 {
  display: contents;
}
 
.contact-text33 {
  display: inline-block;
}
 
.contact-fragment34 {
  display: contents;
}
 
.contact-text34 {
  display: inline-block;
}
 
.contact-fragment35 {
  display: contents;
}
 
.contact-text35 {
  display: inline-block;
}
 
.contact-fragment36 {
  display: contents;
}
 
.contact-text36 {
  display: inline-block;
}
 
.contact-fragment37 {
  display: contents;
}
 
.contact-text37 {
  display: inline-block;
}
 
.contact-fragment38 {
  display: contents;
}
 
.contact-text38 {
  display: inline-block;
}
 
.contact-fragment39 {
  display: contents;
}
 
.contact-text39 {
  display: inline-block;
}
 
.contact-fragment40 {
  display: contents;
}
 
.contact-text40 {
  display: inline-block;
}
 
.contact-fragment41 {
  display: contents;
}
 
.contact-text41 {
  display: inline-block;
}
 
.contact-fragment42 {
  display: contents;
}
 
.contact-text42 {
  display: inline-block;
}
 
.contact-fragment43 {
  display: contents;
}
 
.contact-text43 {
  display: inline-block;
}
 
.contact-fragment44 {
  display: contents;
}
 
.contact-text44 {
  display: inline-block;
}
 
.contact-fragment45 {
  display: contents;
}
 
.contact-text45 {
  display: inline-block;
}
 
.contact-fragment46 {
  display: contents;
}
 
.contact-text46 {
  display: inline-block;
}
 
.contact-fragment47 {
  display: contents;
}
 
.contact-text47 {
  display: inline-block;
}
 
.contact-fragment48 {
  display: contents;
}
 
.contact-text48 {
  display: inline-block;
}
 
.contact-fragment49 {
  display: contents;
}
 
.contact-text49 {
  display: inline-block;
}
 
.contact-fragment50 {
  display: contents;
}
 
.contact-text50 {
  display: inline-block;
}
 
.contact-fragment51 {
  display: contents;
}
 
.contact-text51 {
  display: inline-block;
}
 
.contact-fragment52 {
  display: contents;
}
 
.contact-text52 {
  display: inline-block;
}
 
.contact-fragment53 {
  display: contents;
}
 
.contact-text53 {
  display: inline-block;
}
</style>
