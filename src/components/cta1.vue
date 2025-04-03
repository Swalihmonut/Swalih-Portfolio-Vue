<template>
  <div class="cta1-container thq-section-padding">
    <div class="cta1-max-width thq-section-max-width">
      <div class="cta1-content">
        <h2 class="cta1-heading1 thq-heading-2">
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="cta1-fragment4">
              <span class="cta1-text4">
                Unlock the Power of Data in Life Sciences Manufacturing
              </span>
            </div>
          </slot>
        </h2>
        <p class="cta1-content1 thq-body-large">
          <slot name="content1">
            <!--Default content for content1-->
            <div class="cta1-fragment1">
              <span class="cta1-text1">
                Choose from our range of services to optimize your business
                processes and drive growth.
              </span>
            </div>
          </slot>
        </p>
        <div class="cta1-actions">
          <button class="thq-button-filled cta1-button1">
            <span class="cta1-action1 thq-body-small">
              <slot name="action1">
                <!--Default content for action1-->
                <div class="cta1-fragment3">
                  <span class="cta1-text3">Explore Our Services</span>
                </div>
              </slot>
            </span>
          </button>
          <button class="thq-button-outline cta1-button2">
            <span class="cta1-action2 thq-body-small">
              <slot name="action2">
                <!--Default content for action2-->
                <div class="cta1-fragment2">
                  <span class="cta1-text2">Get in Touch</span>
                </div>
              </slot>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA1',
  props: {},
}
</script>

<style scoped>
.cta1-container {
  gap: var(--dl-layout-space-threeunits);
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
}
 
.cta1-max-width {
  width: 100%;
  display: flex;
  max-width: var(--dl-layout-size-maxwidth);
  align-items: center;
  flex-direction: column;
}
 
.cta1-content {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
 
.cta1-heading1 {
  text-align: center;
}
 
.cta1-content1 {
  text-align: center;
}
 
.cta1-actions {
  gap: var(--dl-layout-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
}
 
.cta1-action1 {
  text-align: center;
}
 
.cta1-action2 {
  text-align: center;
}
 
.cta1-fragment1 {
  display: contents;
}
 
.cta1-text1 {
  display: inline-block;
}
 
.cta1-fragment2 {
  display: contents;
}
 
.cta1-text2 {
  display: inline-block;
}
 
.cta1-fragment3 {
  display: contents;
}
 
.cta1-text3 {
  display: inline-block;
}
 
.cta1-fragment4 {
  display: contents;
}
 
.cta1-text4 {
  display: inline-block;
}
 
@media(max-width: 479px) {
  .cta1-actions {
    width: 100%;
    flex-direction: column;
  }
  .cta1-button1 {
    width: 100%;
  }
  .cta1-button2 {
    width: 100%;
  }
}
</style>
