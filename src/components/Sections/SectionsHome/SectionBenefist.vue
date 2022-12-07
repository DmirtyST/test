<template>
  <section :class="isVisible === false ? 'benefist' : 'benefist active'">
    <VImg class="benefist_bg" :sourse="benefistBg" ps="cover" />
    <VContainer width="1200">
      <div class="benefist_row">
        <div ref="obs" class="benefist_images">
          <div class="benefist-images_row">
            <div class="benefist-images_box">
              <div class="benefist-images_item">
                <picture>
                  <source :srcset="benefistImgSm1" media="(max-width: 568px)" />
                  <VImg :sourse="benefistImg1" ps="contain" />
                </picture>
                <div class="benefist-images_rounded">
                  <VImg ps="contain" :sourse="roundedImg" />
                </div>
              </div>
              <div class="benefist-images_item">
                <div class="benefist-images_rounded">
                  <VImg ps="contain" :sourse="roundedImg" />
                </div>
                <picture>
                  <source :srcset="benefistImgSm2" media="(max-width: 568px)" />
                  <VImg :sourse="benefistImg2" ps="contain" />
                </picture>
              </div>
              <div class="benefist-images_item">
                <div class="benefist-images_radial"></div>
                <div class="benefist-images_radial"></div>
                <VImg :sourse="benefistImg3" ps="contain" />
              </div>
              <picture>
                <source :srcset="benefistLineSm" media="(max-width: 568px)" />
                <VImg class="benefist-images_bg" :sourse="benefistLine" ps="contain" />
              </picture>
            </div>
          </div>
        </div>
        <div ref="obs" class="benefist_item">
          <ul class="benefist_title">
            <li>
              <VHtag size="lg" tag="h3">
                {{ $t('benefistPage.title') }}
                <span> {{ $t('benefistPage.spanTitle') }}</span>
              </VHtag>
            </li>
            <li>
              <VHtag size="xl" tag="h2">
                {{ $t('benefistPage.title') }}
                <span> {{ $t('benefistPage.spanTitle') }}</span>
              </VHtag>
            </li>
          </ul>

          <div class="benefist_text">
            <VTypography size="xl">
              {{ $t('benefistPage.text') }}
            </VTypography>
          </div>
        </div>
      </div>
    </VContainer>
  </section>
</template>

<script setup>
  import VImg from '../../UI/Img/VImg.vue';
  import benefistBg from '../../Image/benefistBg.png';
  import benefistLine from '../../Image/benefistLine.png';
  import benefistLineSm from '../../Image/benefistLineSm.png';
  import benefistImg1 from '../../Image/benefistImg1.png';
  import benefistImgSm1 from '../../Image/benefistImgSm1.png';
  import benefistImg2 from '../../Image/benefistImg2.png';
  import benefistImgSm2 from '../../Image/benefistImgSm2.png';
  import benefistImg3 from '../../Image/benefistImg3.png';
  import VContainer from '../../UI/Container/VContainer.vue';
  import VHtag from '../../UI/Htag/VHtag.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
  import roundedImg from '../../Image/rounded.png';
  import useObserver from '../../../Mixins/useObserver.js';
  const {isVisible, obs, inObse} = useObserver();
  inObse();
</script>

<style lang="scss" scoped>
  .benefist {
    position: relative;
    height: 100%;
    scroll-snap-align: start;
    z-index: 1;
    overflow: hidden;
    @include flex(center, start, column);

    &.active {
      .benefist_title {
        transition: all ease 2s;
        transform: translateY(0%);
        opacity: 1;
      }
      .benefist_text {
        transform: translateX(0%);
        opacity: 1;
        transition: all ease 1.8s;
      }

      .benefist-images {
        &_box {
          transform: scale(1) translateY(0%);
          opacity: 1;
          transition: all ease 2s;
        }
        &_rounded {
          animation: rounded 6s linear infinite;
        }
      }
    }
    &_row {
      @include grid(1fr minmax(240px, 340px), calc(100vh - 100px) auto);
      padding-top: 80px;
      column-gap: 70px;
    }

    &_item {
      @include flex(center, start, column);
      gap: 30px;
    }
    &_title {
      transform: translateY(-70%);
      opacity: 0;

      span {
        color: $green;
      }
    }
    &_text {
      padding-left: 20px;
      border-left: 1px solid rgba($white, 0.2);
      transform: translateX(80%);
      opacity: 0;
    }
    &_images {
      @include flex(end, flex-end, column);
    }
    &-images {
      &_radial {
        @include roundedSize(110px);
        position: absolute;
        background: $radialGreen;
        opacity: 0.05;
        border-radius: 50%;
        left: -37px;
        top: -33px;

        &:first-child {
          @include roundedSize(140px);
          animation: speed 4s linear infinite;
        }
        &:nth-child(2) {
          @include roundedSize(120px);
          animation: speed 2.5s linear infinite;
          left: -27px;
          top: -23px;
        }
      }
      &_row {
        position: relative;
        height: 100%;
        min-width: 660px;
        max-width: 648px;
        @include flex(center, center);
      }
      &_box {
        width: 100%;
        height: 333px;
        position: relative;
        transform: scale(0.4) translateY(90%);
        opacity: 0;
      }
      &_bg {
        width: 100%;
        height: 200px;
        top: 40%;
        transform: translateY(-50%);
      }
      &_rounded {
        position: absolute;
      }
      &_item {
        position: absolute;
        z-index: 22;
        &:first-child {
          width: 154px;
          height: 189px;
          left: 10px;
          top: 0%;

          .benefist-images_rounded {
            @include roundedSize(219px);
            left: -45px;
            top: -55px;
            position: relative;
            z-index: 0;
          }
        }
        &:nth-child(even) {
          width: 135px;
          height: 147px;
          right: 10px;
          bottom: 2%;
          z-index: 22;
          .benefist-images_rounded {
            @include roundedSize(162px);
            left: -15px;
          }
        }
        &:nth-child(3) {
          @include roundedSize(66px);
          right: 33%;
          top: 22%;
        }
      }
    }
  }
  @keyframes rounded {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes speed {
    0% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0.5);
    }
  }
  @include media('max', 'lg') {
    .benefist {
      @include flex(center, center, column);
      padding-top: 65px;
      &_row {
        padding-top: 0px;
        column-gap: 0px;
        display: unset;
      }
      &_images {
        @include flex(center, start, column);
        padding-top: 150px;
        right: 0px;
        position: relative;
        height: 60%;
      }
      &_item {
        @include flex(center, start, column);
        height: 40%;
      }
      &_text {
        max-width: 668px;
        padding-left: 26px;
      }
    }
  }

  @include media('min', 'sm') {
    .benefist {
      &_title {
        li {
          &:last-child {
            display: none;
          }
        }
      }
    }
  }

  @include media('max', 'sm') {
    .benefist {
      padding-top: 0px;
      height: auto;
      &_row {
        height: 568px;
        @include flex(center, center, column);
        padding-bottom: 26px;
      }
      &_title {
        li {
          &:first-child {
            display: none;
          }
        }
      }
      &_item {
        gap: 15px;
      }
      &_images {
        top: 30px;
      }
      &-images {
        &_radial {
          @include roundedSize(110px);
          left: -22%;
          top: -20%;

          &:first-child {
            @include roundedSize(65px);
          }
          &:nth-child(2) {
            @include roundedSize(50px);

            left: -22%;
            top: -20%;
          }
        }

        &_row {
          position: relative;
          height: 100%;
          min-width: 215px;
          max-width: 248px;
        }

        &_item {
          &:first-child {
            width: 100px;
            height: 100px;
            left: -20%;
            top: 20%;

            .benefist-images_rounded {
              @include roundedSize(120px);
              left: -14%;
              top: -27%;
              position: relative;
              z-index: 0;
            }
          }
          &:nth-child(even) {
            width: 76px;
            height: 120px;
            right: -22%;
            bottom: 38%;
            .benefist-images_rounded {
              @include roundedSize(109px);
              left: -22%;
              top: 15%;
            }
          }
          &:nth-child(3) {
            @include roundedSize(40px);
            right: 40%;
            top: 30%;
            opacity: 1;
          }
        }
      }

      &_text {
        max-width: 668px;
        padding-left: 15px;
      }
    }
  }

  @include media('max', 'xs') {
    .benefist {
      &_text {
        max-width: 100%;
      }
    }
  }
</style>
