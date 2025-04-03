<template>
  <div class="contact-form3-contact9 thq-section-padding">
    <div class="thq-section-max-width thq-flex-row contact-form3-max-width">
      <img
        :alt="imageAlt"
        :src="imageSrc"
        class="contact-form3-image1 thq-img-ratio-4-3"
      />
      <div class="contact-form3-content1 thq-flex-column">
        <div class="contact-form3-section-title thq-card">
          <span class="thq-body-small">
            <slot name="content2">
              <!--Default content for content2-->
              <div class="contact-form3-fragment2">
                <span class="contact-form3-text18">Get in touch with us</span>
              </div>
            </slot>
          </span>
          <div class="contact-form3-content2">
            <h2 class="thq-heading-2">
              <slot name="heading1">
                <!--Default content for heading1-->
                <div class="contact-form3-fragment3">
                  <span class="contact-form3-text19">Contact us</span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="content1">
                <!--Default content for content1-->
                <div class="contact-form3-fragment1">
                  <span class="contact-form3-text17">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span v-html="rawzsou"></span>
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <form class="thq-card">
          <div class="contact-form3-input1">
            <label for="contact-form-3-name" class="thq-body-small">Name</label>
            <input
              type="text"
              id="contact-form-3-name"
              placeholder="Name"
              class="thq-input"
            />
          </div>
          <div class="contact-form3-input2">
            <label for="contact-form-3-email" class="thq-body-small">Email</label>
            <input
              type="email"
              id="contact-form-3-email"
              required="true"
              placeholder="Email"
              class="thq-input"
            />
          </div>
          <div class="contact-form3-container">
            <label for="contact-form-3-message" class="thq-body-small">
              Message
            </label>
            <textarea
              id="contact-form-3-message"
              rows="3"
              placeholder="Enter your message"
              class="thq-input"
            ></textarea>
          </div>
          <div class="contact-form3-checkbox1">
            <input
              type="checkbox"
              id="contact-form-3-check"
              checked="true"
              required="true"
              class="thq-checkbox"
            />
            <label
              for="contact-form-3-check"
              class="contact-form3-text16 thq-body-small"
            >
              I accept the Terms
            </label>
          </div>
          <button type="submit" class="contact-form3-button thq-button-filled">
            <span class="thq-body-small">
              <slot name="action">
                <!--Default content for action-->
                <div class="contact-form3-fragment4">
                  <span class="contact-form3-text20">Submit</span>
                </div>
              </slot>
            </span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm3',
  props: {
    imageAlt: {
      type: String,
      default: 'Image1',
    },
    imageSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1603638925702-37e1936b6d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDY1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
  data() {
    return {
      rawykyq: ' ',
      rawzsou: ' ',
    }
  },
}
</script>

<style scoped>
.contact-form3-contact9 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
 
.contact-form3-image1 {
  flex: 1;
  width: auto;
  height: auto;
  max-width: 640px;
  border-radius: var(--dl-layout-radius-radius4);
}
 
.contact-form3-content1 {
  gap: 0;
  flex: 1;
  align-items: stretch;
}
 
.contact-form3-section-title {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact-form3-content2 {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-direction: column;
}
 
.contact-form3-input1 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  flex-direction: column;
}
 
.contact-form3-input2 {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-self: stretch;
  flex-direction: column;
}
 
.contact-form3-container {
  gap: var(--dl-layout-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
 
.contact-form3-checkbox1 {
  gap: var(--dl-layout-space-unit);
  display: flex;
  align-items: center;
}
 
.contact-form3-text16 {
  height: auto;
  font-size: 14px;
  font-style: Regular;
  text-align: left;
  font-family: Roboto;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
 
.contact-form3-button {
  align-self: flex-start;
}
 
.contact-form3-fragment1 {
  display: contents;
}
 
.contact-form3-text17 {
  display: inline-block;
}
 
.contact-form3-fragment2 {
  display: contents;
}
 
.contact-form3-text18 {
  display: inline-block;
}
 
.contact-form3-fragment3 {
  display: contents;
}
 
.contact-form3-text19 {
  display: inline-block;
}
 
.contact-form3-fragment4 {
  display: contents;
}
 
.contact-form3-text20 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .contact-form3-max-width {
    flex-direction: column;
  }
  .contact-form3-content1 {
    width: 100%;
  }
}
 
@media(max-width: 767px) {
  .contact-form3-image1 {
    width: 100%;
  }
}
</style>
