<template>
  <div class="content-list1-container thq-section-padding">
    <div class="content-list1-max-width thq-section-max-width">
      <div class="content-list1-content thq-flex-column">
        <ul class="content-list1-ul thq-flex-column">
          <li class="list-item thq-flex-column">
            <h2 class="content-list1-heading1 thq-heading-2">
              <slot name="heading1">
                <!--Default content for heading1-->
                <div class="content-list1-fragment14">
                  <span class="content-list1-text14">
                    About the Business Analyst
                  </span>
                </div>
              </slot>
            </h2>
            <p class="thq-body-small">
              <slot name="content1">
                <!--Default content for content1-->
                <div class="content-list1-fragment15">
                  <span class="content-list1-text15">
                    With a specialization in Life Sciences Manufacturing, our
                    Business Analyst brings a wealth of experience and expertise
                    to the table. From data visualization to compliance and AI/ML
                    implementation, we offer a comprehensive range of services
                    tailored to meet your specific needs.
                  </span>
                </div>
              </slot>
            </p>
          </li>
          <li class="list-item">
            <h3 class="thq-heading-3">
              <slot name="heading2">
                <!--Default content for heading2-->
                <div class="content-list1-fragment13">
                  <span class="content-list1-text13">Skills and Expertise</span>
                </div>
              </slot>
            </h3>
            <p class="thq-body-small">
              <slot name="content2">
                <!--Default content for content2-->
                <div class="content-list1-fragment16">
                  <span class="content-list1-text16">
                    Our Business Analyst is proficient in a variety of BI tools
                    such as Power BI and Tableau, as well as Python programming.
                    With a deep understanding of compliance requirements in the
                    Life Sciences industry and knowledge in AI/ML technologies, we
                    are well-equipped to handle complex projects.
                  </span>
                </div>
              </slot>
            </p>
          </li>
          <li class="list-item">
            <h3 class="thq-heading-3">
              <slot name="heading3">
                <!--Default content for heading3-->
                <div class="content-list1-fragment20">
                  <span class="content-list1-text20">
                    Detailed Projects Showcase
                  </span>
                </div>
              </slot>
            </h3>
            <p class="thq-body-small">
              <slot name="content3">
                <!--Default content for content3-->
                <div class="content-list1-fragment21">
                  <span class="content-list1-text21">
                    Explore our portfolio of detailed projects that highlight our
                    capabilities in data visualization, compliance solutions, and
                    AI/ML implementation. Each project demonstrates our commitment
                    to delivering high-quality results for our clients.
                  </span>
                </div>
              </slot>
            </p>
          </li>
          <li class="list-item">
            <h3 class="thq-heading-3">
              <slot name="heading4">
                <!--Default content for heading4-->
                <div class="content-list1-fragment10">
                  <span class="content-list1-text10">Pricing Plans</span>
                </div>
              </slot>
            </h3>
            <p class="thq-body-small">
              <slot name="content4">
                <!--Default content for content4-->
                <div class="content-list1-fragment11">
                  <span class="content-list1-text11">
                    Choose from different pricing plans tailored to your specific
                    needs. Whether you require data visualization services,
                    compliance solutions, or AI/ML implementation, we have
                    flexible pricing options to suit your budget and requirements.
                  </span>
                </div>
              </slot>
            </p>
          </li>
          <li class="list-item">
            <h3 class="thq-heading-3">
              <slot name="heading5">
                <!--Default content for heading5-->
                <div class="content-list1-fragment19">
                  <span class="content-list1-text19">Get in Touch</span>
                </div>
              </slot>
            </h3>
            <p class="thq-body-small">
              <slot name="content5">
                <!--Default content for content5-->
                <div class="content-list1-fragment18">
                  <span class="content-list1-text18">
                    Ready to take your Life Sciences Manufacturing projects to the
                    next level? Contact us today to discuss how our Business
                    Analyst can help drive success for your business. We look
                    forward to partnering with you!
                  </span>
                </div>
              </slot>
            </p>
          </li>
          <li class="list-item">
            <h3 class="thq-heading-3">
              <slot name="heading6">
                <!--Default content for heading6-->
                <div class="content-list1-fragment17">
                  <span class="content-list1-text17">Client Testimonials</span>
                </div>
              </slot>
            </h3>
            <p class="thq-body-small">
              <slot name="content6">
                <!--Default content for content6-->
                <div class="content-list1-fragment12">
                  <span class="content-list1-text12">
                    Read what our clients have to say about their experience
                    working with our Business Analyst. From improved efficiency to
                    innovative solutions, our clients trust us to deliver
                    exceptional results time and time again.
                  </span>
                </div>
              </slot>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentList1',
  props: {},
}
</script>

<style scoped>
.content-list1-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
 
.content-list1-max-width {
  width: 100%;
  display: flex;
  max-width: var(--dl-layout-size-maxwidth);
  align-items: center;
  flex-direction: column;
}
 
.content-list1-content {
  align-self: stretch;
  align-items: flex-start;
}
 
.content-list1-ul {
  align-items: flex-start;
}
 
.content-list1-heading1 {
  align-self: flex-start;
}
 
.content-list1-fragment10 {
  display: contents;
}
 
.content-list1-text10 {
  display: inline-block;
}
 
.content-list1-fragment11 {
  display: contents;
}
 
.content-list1-text11 {
  display: inline-block;
}
 
.content-list1-fragment12 {
  display: contents;
}
 
.content-list1-text12 {
  display: inline-block;
}
 
.content-list1-fragment13 {
  display: contents;
}
 
.content-list1-text13 {
  display: inline-block;
}
 
.content-list1-fragment14 {
  display: contents;
}
 
.content-list1-text14 {
  display: inline-block;
}
 
.content-list1-fragment15 {
  display: contents;
}
 
.content-list1-text15 {
  display: inline-block;
}
 
.content-list1-fragment16 {
  display: contents;
}
 
.content-list1-text16 {
  display: inline-block;
}
 
.content-list1-fragment17 {
  display: contents;
}
 
.content-list1-text17 {
  display: inline-block;
}
 
.content-list1-fragment18 {
  display: contents;
}
 
.content-list1-text18 {
  display: inline-block;
}
 
.content-list1-fragment19 {
  display: contents;
}
 
.content-list1-text19 {
  display: inline-block;
}
 
.content-list1-fragment20 {
  display: contents;
}
 
.content-list1-text20 {
  display: inline-block;
}
 
.content-list1-fragment21 {
  display: contents;
}
 
.content-list1-text21 {
  display: inline-block;
}
</style>
