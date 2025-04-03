<template>
  <div class="home-container">
    <app-navbar8>
      <template v-slot:link1>
        <div class="home-fragment10"><span class="home-text10">#home</span></div>
      </template>
      <template v-slot:link2>
        <div class="home-fragment11">
          <span class="home-text11">#projects</span>
        </div>
      </template>
      <template v-slot:link3>
        <div class="home-fragment12">
          <span class="home-text12">#skills</span>
        </div>
      </template>
      <template v-slot:link4>
        <div class="home-fragment13"><span class="home-text13">#about</span></div>
      </template>
      <template v-slot:page1>
        <div class="home-fragment14"><span class="home-text14">Home</span></div>
      </template>
      <template v-slot:page2>
        <div class="home-fragment15">
          <span class="home-text15">Projects</span>
        </div>
      </template>
      <template v-slot:page3>
        <div class="home-fragment16"><span class="home-text16">Skills</span></div>
      </template>
      <template v-slot:page4>
        <div class="home-fragment17"><span class="home-text17">About</span></div>
      </template>
      <template v-slot:action1>
        <div class="home-fragment18">
          <span class="home-text18">Main Action</span>
        </div>
      </template>
      <template v-slot:action2>
        <div class="home-fragment19">
          <span class="home-text19">Secondary Action</span>
        </div>
      </template>
      <template v-slot:page1Description>
        <div class="home-fragment20">
          <span class="home-text20">Summary of expertise and experience</span>
        </div>
      </template>
      <template v-slot:page2Description>
        <div class="home-fragment21">
          <span class="home-text21">
            Detailed projects showcasing business impact using the STAR method
          </span>
        </div>
      </template>
      <template v-slot:page3Description>
        <div class="home-fragment22">
          <span class="home-text22">
            Skills in BI tools, Python, compliance, and more
          </span>
        </div>
      </template>
      <template v-slot:page4Description>
        <div class="home-fragment23">
          <span class="home-text23">Background, experience, and values</span>
        </div>
      </template>
    </app-navbar8>
    <app-hero17
      image1Src="https://images.unsplash.com/photo-1639154968821-6dbc3efb8d23?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDc0NXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      image8Src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDcxNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
    >
      <template v-slot:action1>
        <div class="home-fragment24">
          <span class="home-text24">View Projects</span>
        </div>
      </template>
      <template v-slot:action2>
        <div class="home-fragment25">
          <span class="home-text25">Contact Me</span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="home-fragment26">
          <span class="home-text26">
            Bringing more than a decade and a half of experience in business
            analysis within the life sciences manufacturing sector, I offer a rich
            blend of knowledge and expertise to deliver meaningful insights and
            strategic solutions.
          </span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="home-fragment27">
          <span class="home-text27">
            Expert Business Analyst specializing in Life Sciences Manufacturing
          </span>
        </div>
      </template>
    </app-hero17>
    <app-features24>
      <template v-slot:feature1Title>
        <div class="home-fragment28">
          <span class="home-text28">BI Tools Proficiency</span>
        </div>
      </template>
      <template v-slot:feature2Title>
        <div class="home-fragment29">
          <span class="home-text29">Python Proficiency</span>
        </div>
      </template>
      <template v-slot:feature3Title>
        <div class="home-fragment30">
          <span class="home-text30">Compliance Expertise</span>
        </div>
      </template>
      <template v-slot:feature1Description>
        <div class="home-fragment31">
          <span class="home-text31">
            Skilled in creating interactive visualizations using Power BI and
            Tableau
          </span>
        </div>
      </template>
      <template v-slot:feature2Description>
        <div class="home-fragment32">
          <span class="home-text32">
            Proficient in Python for data analysis and automation
          </span>
        </div>
      </template>
      <template v-slot:feature3Description>
        <div class="home-fragment33">
          <span class="home-text33">
            Experience in data governance and compliance with GMP and FDA
            regulations
          </span>
        </div>
      </template>
    </app-features24>
    <app-cta26>
      <template v-slot:action1>
        <div class="home-fragment34">
          <span class="home-text34">View Projects</span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="home-fragment35">
          <span class="home-text35">
            Explore my projects and skills to see how I can drive impact for your
            organization.
          </span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="home-fragment36">
          <span class="home-text36">
            Ready to elevate your business analysis?
          </span>
        </div>
      </template>
    </app-cta26>
    <app-features25>
      <template v-slot:feature1Title>
        <div class="home-fragment37">
          <span class="home-text37">Expertise in BI Tools</span>
        </div>
      </template>
      <template v-slot:feature2Title>
        <div class="home-fragment38">
          <span class="home-text38">AI/ML Knowledge</span>
        </div>
      </template>
      <template v-slot:feature3Title>
        <div class="home-fragment39">
          <span class="home-text39">Compliance with GMP and FDA Regulations</span>
        </div>
      </template>
      <template v-slot:feature1Description>
        <div class="home-fragment40">
          <span class="home-text40">
            Proficient in using Power BI and Tableau for data visualization and
            analysis.
          </span>
        </div>
      </template>
      <template v-slot:feature2Description>
        <div class="home-fragment41">
          <span class="home-text41">
            Experience in implementing AI/ML solutions to drive insights and
            decision-making.
          </span>
        </div>
      </template>
      <template v-slot:feature3Description>
        <div class="home-fragment42">
          <span class="home-text42">
            In-depth understanding of Good Manufacturing Practices (GMP) and FDA
            regulations to ensure compliance.
          </span>
        </div>
      </template>
    </app-features25>
    <app-steps2>
      <template v-slot:step1Title>
        <div class="home-fragment43">
          <span class="home-text43">Initial Assessment</span>
        </div>
      </template>
      <template v-slot:step2Title>
        <div class="home-fragment44">
          <span class="home-text44">Implementation of BI Tools</span>
        </div>
      </template>
      <template v-slot:step3Title>
        <div class="home-fragment45">
          <span class="home-text45">AI/ML Integration</span>
        </div>
      </template>
      <template v-slot:step4Title>
        <div class="home-fragment46">
          <span class="home-text46">Ensuring Compliance</span>
        </div>
      </template>
      <template v-slot:step1Description>
        <div class="home-fragment47">
          <span class="home-text47">
            Conduct a thorough analysis of the current business processes and data
            infrastructure in the life sciences manufacturing domain.
          </span>
        </div>
      </template>
      <template v-slot:step2Description>
        <div class="home-fragment48">
          <span class="home-text48">
            Utilize Power BI and Tableau to create interactive dashboards and
            reports for key stakeholders, providing actionable insights for
            decision-making.
          </span>
        </div>
      </template>
      <template v-slot:step3Description>
        <div class="home-fragment49">
          <span class="home-text49">
            Implement AI/ML algorithms to optimize production processes,
            predictive maintenance, and quality control within the manufacturing
            environment.
          </span>
        </div>
      </template>
      <template v-slot:step4Description>
        <div class="home-fragment50">
          <span class="home-text50">
            Ensure adherence to GMP and FDA regulations by establishing robust
            data governance frameworks and compliance protocols.
          </span>
        </div>
      </template>
    </app-steps2>
    <app-testimonial17>
      <template v-slot:review1>
        <div class="home-fragment51">
          <span class="home-text51">Highly recommend their services!</span>
        </div>
      </template>
      <template v-slot:review2>
        <div class="home-fragment52">
          <span class="home-text52">
            The Business Analyst&apos;s insights and data governance strategies
            have been instrumental in streamlining our operations and driving
            efficiency. A true professional in the field!
          </span>
        </div>
      </template>
      <template v-slot:review3>
        <div class="home-fragment53">
          <span class="home-text53">
            Impressed by the depth of knowledge and attention to detail
            demonstrated by the Business Analyst. Their ability to navigate
            complex regulatory requirements while leveraging AI/ML technologies is
            commendable.
          </span>
        </div>
      </template>
      <template v-slot:review4>
        <div class="home-fragment54">
          <span class="home-text54">
            Exceptional skills in data visualization and project management. The
            Business Analyst&apos;s contributions have had a tangible impact on
            our business outcomes. Truly a valuable asset to any team.
          </span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="home-fragment55">
          <span class="home-text55">
            Working with the Business Analyst was a game-changer for our
            organization. Their expertise in BI tools and compliance with
            regulations significantly improved our decision-making processes.
          </span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="home-fragment56">
          <span class="home-text56">Client Testimonials</span>
        </div>
      </template>
      <template v-slot:author1Name>
        <div class="home-fragment57">
          <span class="home-text57">John Smith</span>
        </div>
      </template>
      <template v-slot:author2Name>
        <div class="home-fragment58">
          <span class="home-text58">Emily Johnson</span>
        </div>
      </template>
      <template v-slot:author3Name>
        <div class="home-fragment59">
          <span class="home-text59">Michael Lee</span>
        </div>
      </template>
      <template v-slot:author4Name>
        <div class="home-fragment60">
          <span class="home-text60">Sarah Thompson</span>
        </div>
      </template>
      <template v-slot:author1Position>
        <div class="home-fragment61">
          <span class="home-text61">CEO, PharmaTech Inc.</span>
        </div>
      </template>
      <template v-slot:author2Position>
        <div class="home-fragment62">
          <span class="home-text62">VP of Operations, BioPharma Co.</span>
        </div>
      </template>
      <template v-slot:author3Position>
        <div class="home-fragment63">
          <span class="home-text63">
            Director of Quality Assurance, MedLife Corp.
          </span>
        </div>
      </template>
      <template v-slot:author4Position>
        <div class="home-fragment64">
          <span class="home-text64">CTO, Health Innovations Ltd.</span>
        </div>
      </template>
    </app-testimonial17>
    <app-footer4>
      <template v-slot:link1>
        <div class="home-fragment65"><span class="home-text65">Home</span></div>
      </template>
      <template v-slot:link2>
        <div class="home-fragment66">
          <span class="home-text66">Projects</span>
        </div>
      </template>
      <template v-slot:link3>
        <div class="home-fragment67"><span class="home-text67">Skills</span></div>
      </template>
      <template v-slot:link4>
        <div class="home-fragment68"><span class="home-text68">About</span></div>
      </template>
      <template v-slot:link5>
        <div class="home-fragment69">
          <span class="home-text69">Contact</span>
        </div>
      </template>
      <template v-slot:termsLink>
        <div class="home-fragment70">
          <span class="home-text70">Terms of Use</span>
        </div>
      </template>
      <template v-slot:cookiesLink>
        <div class="home-fragment71">
          <span class="home-text71">Cookies Policy</span>
        </div>
      </template>
      <template v-slot:privacyLink>
        <div class="home-fragment72">
          <span class="home-text72">Privacy Policy</span>
        </div>
      </template>
    </app-footer4>
  </div>
</template>

<script>
import AppNavbar8 from '../components/navbar8'
import AppHero17 from '../components/hero17'
import AppFeatures24 from '../components/features24'
import AppCta26 from '../components/cta26'
import AppFeatures25 from '../components/features25'
import AppSteps2 from '../components/steps2'
import AppTestimonial17 from '../components/testimonial17'
import AppFooter4 from '../components/footer4'

export default {
  name: 'Home',
  props: {},
  components: {
    AppNavbar8,
    AppHero17,
    AppFeatures24,
    AppCta26,
    AppFeatures25,
    AppSteps2,
    AppTestimonial17,
    AppFooter4,
  },
  metaInfo: {
    title: 'Swalih-Portfolio',
    meta: [
      {
        property: 'og:title',
        content: 'Swalih-Portfolio',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
 
.home-fragment10 {
  display: contents;
}
 
.home-text10 {
  display: inline-block;
}
 
.home-fragment11 {
  display: contents;
}
 
.home-text11 {
  display: inline-block;
}
 
.home-fragment12 {
  display: contents;
}
 
.home-text12 {
  display: inline-block;
}
 
.home-fragment13 {
  display: contents;
}
 
.home-text13 {
  display: inline-block;
}
 
.home-fragment14 {
  display: contents;
}
 
.home-text14 {
  display: inline-block;
}
 
.home-fragment15 {
  display: contents;
}
 
.home-text15 {
  display: inline-block;
}
 
.home-fragment16 {
  display: contents;
}
 
.home-text16 {
  display: inline-block;
}
 
.home-fragment17 {
  display: contents;
}
 
.home-text17 {
  display: inline-block;
}
 
.home-fragment18 {
  display: contents;
}
 
.home-text18 {
  display: inline-block;
}
 
.home-fragment19 {
  display: contents;
}
 
.home-text19 {
  display: inline-block;
}
 
.home-fragment20 {
  display: contents;
}
 
.home-text20 {
  display: inline-block;
}
 
.home-fragment21 {
  display: contents;
}
 
.home-text21 {
  display: inline-block;
}
 
.home-fragment22 {
  display: contents;
}
 
.home-text22 {
  display: inline-block;
}
 
.home-fragment23 {
  display: contents;
}
 
.home-text23 {
  display: inline-block;
}
 
.home-fragment24 {
  display: contents;
}
 
.home-text24 {
  display: inline-block;
}
 
.home-fragment25 {
  display: contents;
}
 
.home-text25 {
  display: inline-block;
}
 
.home-fragment26 {
  display: contents;
}
 
.home-text26 {
  display: inline-block;
}
 
.home-fragment27 {
  display: contents;
}
 
.home-text27 {
  display: inline-block;
}
 
.home-fragment28 {
  display: contents;
}
 
.home-text28 {
  display: inline-block;
}
 
.home-fragment29 {
  display: contents;
}
 
.home-text29 {
  display: inline-block;
}
 
.home-fragment30 {
  display: contents;
}
 
.home-text30 {
  display: inline-block;
}
 
.home-fragment31 {
  display: contents;
}
 
.home-text31 {
  display: inline-block;
}
 
.home-fragment32 {
  display: contents;
}
 
.home-text32 {
  display: inline-block;
}
 
.home-fragment33 {
  display: contents;
}
 
.home-text33 {
  display: inline-block;
}
 
.home-fragment34 {
  display: contents;
}
 
.home-text34 {
  display: inline-block;
}
 
.home-fragment35 {
  display: contents;
}
 
.home-text35 {
  display: inline-block;
}
 
.home-fragment36 {
  display: contents;
}
 
.home-text36 {
  display: inline-block;
}
 
.home-fragment37 {
  display: contents;
}
 
.home-text37 {
  display: inline-block;
}
 
.home-fragment38 {
  display: contents;
}
 
.home-text38 {
  display: inline-block;
}
 
.home-fragment39 {
  display: contents;
}
 
.home-text39 {
  display: inline-block;
}
 
.home-fragment40 {
  display: contents;
}
 
.home-text40 {
  display: inline-block;
}
 
.home-fragment41 {
  display: contents;
}
 
.home-text41 {
  display: inline-block;
}
 
.home-fragment42 {
  display: contents;
}
 
.home-text42 {
  display: inline-block;
}
 
.home-fragment43 {
  display: contents;
}
 
.home-text43 {
  display: inline-block;
}
 
.home-fragment44 {
  display: contents;
}
 
.home-text44 {
  display: inline-block;
}
 
.home-fragment45 {
  display: contents;
}
 
.home-text45 {
  display: inline-block;
}
 
.home-fragment46 {
  display: contents;
}
 
.home-text46 {
  display: inline-block;
}
 
.home-fragment47 {
  display: contents;
}
 
.home-text47 {
  display: inline-block;
}
 
.home-fragment48 {
  display: contents;
}
 
.home-text48 {
  display: inline-block;
}
 
.home-fragment49 {
  display: contents;
}
 
.home-text49 {
  display: inline-block;
}
 
.home-fragment50 {
  display: contents;
}
 
.home-text50 {
  display: inline-block;
}
 
.home-fragment51 {
  display: contents;
}
 
.home-text51 {
  display: inline-block;
}
 
.home-fragment52 {
  display: contents;
}
 
.home-text52 {
  display: inline-block;
}
 
.home-fragment53 {
  display: contents;
}
 
.home-text53 {
  display: inline-block;
}
 
.home-fragment54 {
  display: contents;
}
 
.home-text54 {
  display: inline-block;
}
 
.home-fragment55 {
  display: contents;
}
 
.home-text55 {
  display: inline-block;
}
 
.home-fragment56 {
  display: contents;
}
 
.home-text56 {
  display: inline-block;
}
 
.home-fragment57 {
  display: contents;
}
 
.home-text57 {
  display: inline-block;
}
 
.home-fragment58 {
  display: contents;
}
 
.home-text58 {
  display: inline-block;
}
 
.home-fragment59 {
  display: contents;
}
 
.home-text59 {
  display: inline-block;
}
 
.home-fragment60 {
  display: contents;
}
 
.home-text60 {
  display: inline-block;
}
 
.home-fragment61 {
  display: contents;
}
 
.home-text61 {
  display: inline-block;
}
 
.home-fragment62 {
  display: contents;
}
 
.home-text62 {
  display: inline-block;
}
 
.home-fragment63 {
  display: contents;
}
 
.home-text63 {
  display: inline-block;
}
 
.home-fragment64 {
  display: contents;
}
 
.home-text64 {
  display: inline-block;
}
 
.home-fragment65 {
  display: contents;
}
 
.home-text65 {
  display: inline-block;
}
 
.home-fragment66 {
  display: contents;
}
 
.home-text66 {
  display: inline-block;
}
 
.home-fragment67 {
  display: contents;
}
 
.home-text67 {
  display: inline-block;
}
 
.home-fragment68 {
  display: contents;
}
 
.home-text68 {
  display: inline-block;
}
 
.home-fragment69 {
  display: contents;
}
 
.home-text69 {
  display: inline-block;
}
 
.home-fragment70 {
  display: contents;
}
 
.home-text70 {
  display: inline-block;
}
 
.home-fragment71 {
  display: contents;
}
 
.home-text71 {
  display: inline-block;
}
 
.home-fragment72 {
  display: contents;
}
 
.home-text72 {
  display: inline-block;
}
</style>
