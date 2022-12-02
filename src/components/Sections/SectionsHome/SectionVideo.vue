<template>
  <section :class="isVisible === false ? 'section-video' : 'section-video active'">
    <VImg :sourse="sectionVideoBg" ps="cover" />
    <div class="section-video_centered">
      <VImg :sourse="centeredItem" ps="contain" />
    </div>
    <div class="section-video_container">
      <div ref="obs" class="section-video_row">
        <div class="section-video_video">
          <div class="section-video_figure">
            <div class="section-video_btn"><VImg :sourse="videoPlay" ps="contain" /></div>
            <picture>
              <source :srcset="SectionVideoBgTabltet" sizes="(max-width:1024px)" />
              <VImg class="section-video_img" :sourse="SectionVideoBg" ps="cover" />
            </picture>
          </div>
        </div>
        <div class="section-video_item">
          <div class="section-video_title">
            <VHtag tag="h1" size="xxl">
              {{ $t('videoPage.title') }}
              <span> {{ $t('videoPage.spanTitle') }} </span>
              {{ $t('videoPage.titles') }}
            </VHtag>
          </div>
          <div class="section-video_text">
            <VTypography size="xl">
              {{ $t('videoPage.text') }}
            </VTypography>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import VImg from '../../UI/Img/VImg.vue';
  import sectionVideoBg from '../../Image/background_dots.png';
  import VHtag from '../../UI/Htag/VHtag.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
  import SectionVideoBg from '../../Image/SectionVideoBg.png';
  import SectionVideoBgTabltet from '../../Image/imageVideoTablet.png';
  import videoPlay from '../../Image/videoPlay.png';
  import centeredItem from '../../Image/screenCenter.png';
  import useObserver from '../../../Mixins/useObserver.js';
  const {isVisible, obs, inObse} = useObserver();
  inObse();
</script>

<style lang="scss" scoped>
  .section-video {
    height: 100%;
    overflow: hidden;
    position: relative;
    scroll-snap-align: start;
    z-index: 1;
    &_centered {
      position: absolute;
      top: 50%;
      left: 50%;
      @include roundedSize(580px);
      transform: translate(-50%, -50%);
    }
    &.active {
      .section-video_item {
        transition: all ease 1.5s;
        transform: translateY(0%);
        opacity: 1;
      }
    }
    &_container {
      padding-right: calc((100% - 1200px) / 2 + 15px);
    }

    &_figure {
      @include roundedSize(100%);
      overflow: hidden;
      position: relative;
      left: -45px;
      border-top-left-radius: 30% 40%;
      z-index: 1;

      @include flex(center, center);
      @include before() {
        @include roundedSize(100%);
        background-color: $greenBold;

        opacity: 1;
      }
    }
    &_img {
      mix-blend-mode: normal;
    }
    &_row {
      @include grid(1fr minmax(320px, 500px), calc(100vh) auto);
    }

    &_video {
      padding: 40px 0;
    }

    &_btn {
      @include roundedSize(100px);
      position: relative;
      z-index: 22;
    }
    &_item {
      @include flex(center, center, column);
      gap: 40px;
      transform: translateY(40%);
      opacity: 0;
    }

    &_title {
      span {
        color: $green;
      }
    }
  }

  @include media('max', 'xl') {
    .section-video {
      &_row {
        @include flex(start, space-between, column-reverse);
        height: 100vh;
      }
      &_container {
        padding-right: 0px;
      }
      &_item {
        @include flex(center, start, column);
        text-align: center;
        gap: 40px;
        transform: translateY(40%);
        opacity: 0;
        height: 50%;
        padding: 0 15px;
      }
      &_video {
        padding: 0px 0;
        height: 50%;
        width: 100%;
      }
      &_text {
        margin: 0 auto;
      }

      &_centered {
        top: 45%;
        @include roundedSize(0px);
        width: 558px;
        height: 582px;
      }
      &_figure {
        @include roundedSize(100%);
        left: -0px;
        border-top-left-radius: 0% 0%;
        border-top-right-radius: 34% 45%;

        @include flex(center, center);
        @include before() {
          @include roundedSize(100%);
          background-color: $greenBold;

          opacity: 1;
        }
      }
    }
  }
  @include media('max', 'lg') {
    .section-video {
      &_row {
        @include flex(start, space-between, column-reverse);
        height: 1024px;
      }
    }
  }
</style>
