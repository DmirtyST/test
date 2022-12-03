<template>
  <section :class="isVisible === false ? 'screen' : 'screen active'">
    <AEndlessCircle />
    <VContainer width="800">
      <div class="screen_row">
        <div class="screen_item">
          <img :src="centerImg" alt="" />
          <ul class="screen_title">
            <li>
              <VHtag tag="h2" size="xl">
                {{ $t('screenPage.title') }}
              </VHtag>
            </li>
            <li>
              <VHtag tag="h1" size="xxl">
                {{ $t('screenPage.titleTablet') }}
              </VHtag>
            </li>
          </ul>
          <div class="screen_sub">
            <VTypography size="xl">{{ $t('screenPage.text') }} </VTypography>
          </div>
        </div>
        <div class="screen_btn">
          <VButton color="main">JOIN US NOW</VButton>
        </div>
      </div>
    </VContainer>
    <picture>
      <source
        :srcset="bgImgTblet"
        sizes="(max-width: 1024px)"
        media="(max-width: 768px)"
      />
      <VImg class="screen_bg" :sourse="bgImg" ps="cover" />
    </picture>

    <VEclipse class="screen_eclipse" ref="obs" color="#55AC58" w="450" h="234" />
  </section>
</template>

<script setup>
  import VButton from '../../UI/Button/VButton.vue';
  import VContainer from '../../UI/Container/VContainer.vue';
  import VHtag from '../../UI/Htag/VHtag.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
  import centerImg from '../../Image/screenCenter.png';
  import VImg from '../../UI/Img/VImg.vue';
  import bgImg from '../../Image/background_dots.png';
  import bgImgTblet from '../../Image/dotsTablet.png';
  import VEclipse from '../../UI/Eclipse/VEclipse.vue';
  import AEndlessCircle from '../../UI/Animations/AEndlessCircle.vue';
  import useObserver from '../../../Mixins/useObserver.js';
  const {isVisible, obs, inObse} = useObserver();
  inObse();
</script>

<style lang="scss" scoped>
  .screen {
    height: 100%;
    padding-top: 75px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    scroll-snap-align: start;

    &.active {
      .screen_eclipse {
        bottom: -25%;
        opacity: 1;
        transform: translateY(0%);
        transition: all ease 0.6s;
      }
    }
    &_row {
      height: 100%;
      @include flex(center, center, column);
    }
    &_item {
      text-align: center;
      position: relative;
      z-index: 22;
      @include flex(center, center, column);
      margin-bottom: 65px;
      img {
        position: absolute;
        width: 575px;
        height: 523px;
        z-index: -1;
      }
    }
    &_title {
      margin-bottom: 45px;
      position: relative;

      li {
        &:first-child {
          display: block;
        }
        &:last-child {
          display: none;
        }
      }
    }
    &_eclipse {
      position: absolute;
      bottom: -22%;
      opacity: 0;
      transform: translateY(5%);
      transition: all ease 0.4s;
    }
  }

  @include media('min', 'xxl') {
    .screen {
      &.active {
        .screen_eclipse {
          bottom: -20%;
        }
      }
    }
  }
  @include media('max', 'lg') {
    .screen {
      padding-top: 0%;
      padding-bottom: 10%;

      &.active {
        .screen_eclipse {
          bottom: -15%;
          opacity: 1;
          transform: translateY(0%);
          transition: all ease 0.6s;
        }
      }
      &_eclipse {
        position: absolute;
        bottom: -22%;
        opacity: 0;
        transform: translateY(5%);
        transition: all ease 0.4s;
      }
      &_bg {
        object-position: 55% 20%;
      }
      &_item {
        max-width: 600px;
        img {
          position: absolute;
          width: 595px;
          height: 541px;
          z-index: -1;
        }
      }
      &_title {
        margin-bottom: 45px;
        position: relative;

        li {
          &:first-child {
            display: none;
          }
          &:last-child {
            display: block;
          }
        }
      }
    }
  }
  @include media('max', 'sm') {
    .screen {
      padding-bottom: 0%;
      padding-top: 10px;

      &_title {
        margin-bottom: 15px;
      }
      &_bg {
        opacity: 0;
      }
      &_item {
        margin-bottom: 35px;
        img {
          position: absolute;
          width: 285px;
          height: 259px;
          z-index: -1;
          top: 20px;
        }
      }
      &.active {
        .screen_eclipse {
          bottom: -20%;
        }
      }
      &_eclipse {
      }
    }
  }
</style>
