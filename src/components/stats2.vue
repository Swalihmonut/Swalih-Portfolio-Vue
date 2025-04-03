<template>
  <div class="stats2-container1 thq-section-padding">
    <div class="stats2-max-width thq-section-max-width">
      <div class="stats2-container2 thq-flex-column">
        <img
          :alt="image1Alt"
          :src="image1Src"
          class="thq-img-ratio-1-1 stats2-image"
        />
      </div>
      <div class="stats2-container3 thq-flex-column">
        <span class="thq-body-small">
          <slot name="content1">
            <!--Default content for content1-->
            <div class="stats2-fragment19">
              <span class="stats2-text30">Customer Feedback</span>
            </div>
          </slot>
        </span>
        <h2 class="thq-heading-2">
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="stats2-fragment10">
              <span class="stats2-text21">Expertise and Experience</span>
            </div>
          </slot>
        </h2>
        <p class="thq-body-large">
          <slot name="content2">
            <!--Default content for content2-->
            <div class="stats2-fragment18">
              <span class="stats2-text29">
                Business improvements emphasized with numbers to increase
                creadibility
              </span>
            </div>
          </slot>
        </p>
        <div class="stats2-container4 thq-grid-2">
          <div class="stats2-container5">
            <h2 class="thq-heading-2">
              <slot name="stat1">
                <!--Default content for stat1-->
                <div class="stats2-fragment16">
                  <span class="stats2-text27">
                    Business Analyst Specializing in Life Sciences Manufacturing
                  </span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat1Description">
                <!--Default content for stat1Description-->
                <div class="stats2-fragment20">
                  <span class="stats2-text31">
                    Bringing in-depth knowledge and experience in the life
                    sciences manufacturing industry to drive impactful insights
                    and strategies.
                  </span>
                </div>
              </slot>
            </span>
          </div>
          <div class="stats2-container6">
            <h2 class="thq-heading-2">
              <slot name="stat2">
                <!--Default content for stat2-->
                <div class="stats2-fragment15">
                  <span class="stats2-text26">
                    Skills in BI Tools, Python, Compliance, and More
                  </span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat2Description">
                <!--Default content for stat2Description-->
                <div class="stats2-fragment14">
                  <span class="stats2-text25">
                    Proficient in utilizing various BI tools, Python programming,
                    ensuring compliance with GMP and FDA regulations, and more to
                    deliver high-quality analytical solutions.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div class="stats2-container7 thq-grid-2">
          <div class="stats2-container8">
            <h2 class="thq-heading-2">
              <slot name="stat3">
                <!--Default content for stat3-->
                <div class="stats2-fragment12">
                  <span class="stats2-text23">Project Showcases</span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat3Description">
                <!--Default content for stat3Description-->
                <div class="stats2-fragment17">
                  <span class="stats2-text28">
                    Demonstrating successful project implementations and outcomes
                    in the life sciences manufacturing sector.
                  </span>
                </div>
              </slot>
            </span>
          </div>
          <div class="stats2-container9">
            <h2 class="thq-heading-2">
              <slot name="stat4">
                <!--Default content for stat4-->
                <div class="stats2-fragment13">
                  <span class="stats2-text24">
                    AI/ML Implementation Experience
                  </span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="stat4Description">
                <!--Default content for stat4Description-->
                <div class="stats2-fragment11">
                  <span class="stats2-text22">
                    Hands-on experience in implementing artificial intelligence
                    and machine learning solutions to enhance operational
                    efficiency and decision-making processes.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats2',
  props: {
    image1Alt: {
      type: String,
      default: 'image',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1580835916901-40770720c505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzY4NDU4M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
}
</script>

<style scoped>
.stats2-container1 {
  width: 100%;
  flex-direction: column;
}
 
.stats2-max-width {
  gap: var(--dl-layout-space-fourunits);
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
}
 
.stats2-container2 {
  max-width: 50%;
}
 
.stats2-container3 {
  align-self: center;
  align-items: flex-start;
  margin-left: auto;
}
 
.stats2-container4 {
  width: 100%;
}
 
.stats2-container5 {
  width: 100%;
  height: 100%;
  align-items: flex-start;
}
 
.stats2-container6 {
  width: 100%;
  height: 100%;
  align-items: flex-start;
}
 
.stats2-container7 {
  width: 100%;
}
 
.stats2-container8 {
  width: 100%;
  height: 100%;
  align-items: flex-start;
}
 
.stats2-container9 {
  width: 100%;
  height: 100%;
  align-items: flex-start;
}
 
.stats2-fragment10 {
  display: contents;
}
 
.stats2-text21 {
  display: inline-block;
}
 
.stats2-fragment11 {
  display: contents;
}
 
.stats2-text22 {
  display: inline-block;
}
 
.stats2-fragment12 {
  display: contents;
}
 
.stats2-text23 {
  display: inline-block;
}
 
.stats2-fragment13 {
  display: contents;
}
 
.stats2-text24 {
  display: inline-block;
}
 
.stats2-fragment14 {
  display: contents;
}
 
.stats2-text25 {
  display: inline-block;
}
 
.stats2-fragment15 {
  display: contents;
}
 
.stats2-text26 {
  display: inline-block;
}
 
.stats2-fragment16 {
  display: contents;
}
 
.stats2-text27 {
  display: inline-block;
}
 
.stats2-fragment17 {
  display: contents;
}
 
.stats2-text28 {
  display: inline-block;
}
 
.stats2-fragment18 {
  display: contents;
}
 
.stats2-text29 {
  display: inline-block;
}
 
.stats2-fragment19 {
  display: contents;
}
 
.stats2-text30 {
  display: inline-block;
}
 
.stats2-fragment20 {
  display: contents;
}
 
.stats2-text31 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .stats2-max-width {
    gap: var(--dl-layout-space-twounits);
    align-items: flex-start;
    flex-direction: column;
  }
  .stats2-container2 {
    width: 100%;
    max-width: 100%;
  }
  .stats2-container3 {
    align-self: flex-start;
    margin-left: 0px;
  }
}
 
@media(max-width: 479px) {
  .stats2-image {
    width: 100%;
  }
}
</style>
