<template>
  <div class="contact7-container1 thq-section-padding">
    <div class="contact7-max-width thq-section-max-width">
      <div class="contact7-content1 thq-flex-row">
        <div class="contact7-content2">
          <h2 class="thq-heading-2">
            <slot name="heading1">
              <!--Default content for heading1-->
              <div class="contact7-fragment4">
                <span class="contact7-text19">Contact Us</span>
              </div>
            </slot>
          </h2>
          <p class="thq-body-large">
            <slot name="content1">
              <!--Default content for content1-->
              <div class="contact7-fragment6">
                <span class="contact7-text21">
                  businessanalyst@lifesciencesmanufacturing.com
                </span>
              </div>
            </slot>
          </p>
        </div>
      </div>
      <div class="contact7-content3 thq-flex-row">
        <div class="contact7-container2">
          <img
            :alt="location1ImgAlt"
            :src="location1ImgSrc"
            class="contact7-image1 thq-img-ratio-16-9"
          />
          <h3 class="contact7-text12 thq-heading-3">
            <slot name="location1">
              <!--Default content for location1-->
              <div class="contact7-fragment2">
                <span class="contact7-text17">Email</span>
              </div>
            </slot>
          </h3>
          <p class="thq-body-large">
            <slot name="location1Description">
              <!--Default content for location1Description-->
              <div class="contact7-fragment3">
                <span class="contact7-text18">
                  Reach out to us via email for inquiries or to schedule a
                  consultation.
                </span>
              </div>
            </slot>
          </p>
          <div class="contact7-container3">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="thq-button-flat thq-body-small"
            >
              Get directions
            </a>
          </div>
        </div>
        <div class="contact7-container4">
          <img
            :alt="location2ImgAlt"
            :src="location2ImgSrc"
            class="contact7-image2 thq-img-ratio-16-9"
          />
          <h3 class="contact7-text14 thq-heading-3">
            <slot name="location2">
              <!--Default content for location2-->
              <div class="contact7-fragment5">
                <span class="contact7-text20">Phone</span>
              </div>
            </slot>
          </h3>
          <p class="thq-body-large">
            <slot name="location2Description">
              <!--Default content for location2Description-->
              <div class="contact7-fragment1">
                <span class="contact7-text16">
                  Give us a call during business hours for immediate assistance.
                </span>
              </div>
            </slot>
          </p>
          <div class="contact7-container5">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              class="thq-button-flat thq-body-small"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact7',
  props: {
    location1ImgAlt: {
      type: String,
      default: 'Email Icon',
    },
    location2ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1532178324009-6b6adeca1741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDY1N3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    location1ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDY1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    location2ImgAlt: {
      type: String,
      default: 'Phone Icon',
    },
  },
}
</script>

<style scoped>
.contact7-container1 {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact7-max-width {
  align-self: center;
}
 
.contact7-content1 {
  width: 100%;
  margin-bottom: var(--dl-layout-space-threeunits);
  justify-content: center;
}
 
.contact7-content2 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.contact7-content3 {
  width: 100%;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
 
.contact7-container2 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.contact7-image1 {
  object-fit: cover;
}
 
.contact7-text12 {
  text-align: center;
}
 
.contact7-container3 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
 
.contact7-container4 {
  gap: var(--dl-layout-space-oneandhalfunits);
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.contact7-image2 {
  object-fit: cover;
}
 
.contact7-text14 {
  text-align: center;
}
 
.contact7-container5 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
 
.contact7-fragment1 {
  display: contents;
}
 
.contact7-text16 {
  display: inline-block;
}
 
.contact7-fragment2 {
  display: contents;
}
 
.contact7-text17 {
  display: inline-block;
}
 
.contact7-fragment3 {
  display: contents;
}
 
.contact7-text18 {
  display: inline-block;
}
 
.contact7-fragment4 {
  display: contents;
}
 
.contact7-text19 {
  display: inline-block;
}
 
.contact7-fragment5 {
  display: contents;
}
 
.contact7-text20 {
  display: inline-block;
}
 
.contact7-fragment6 {
  display: contents;
}
 
.contact7-text21 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .contact7-content3 {
    align-items: center;
    flex-direction: column;
  }
}
 
@media(max-width: 767px) {
  .contact7-content1 {
    gap: var(--dl-layout-space-oneandhalfunits);
  }
  .contact7-image1 {
    width: 100%;
  }
  .contact7-image2 {
    width: 100%;
  }
}
</style>
