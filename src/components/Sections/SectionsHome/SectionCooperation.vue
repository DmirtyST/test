<template>
  <section :class="isVisible === false ? 'cooperation' : 'cooperation active'">
    <VImg class="cooperation_bg" :sourse="cooperationBg" ps="cover" />
    <VContainer width="1200">
      <div class="cooperation_row">
        <div class="cooperation_images">
          <div class="cooperation-images_row">
            <div class="cooperation-images_item">
              <div class="cooperation-images_rounded">
                <VImg ps="contain" :sourse="roundedImg" />
              </div>
              <VImg
                :sourse="cooperationImg1"
                class="cooperation-images_img"
                ps="contain"
              />
            </div>
            <div class="cooperation-images_item">
              <div class="cooperation-images_rounded">
                <VImg ps="contain" :sourse="roundedImg" />
              </div>
              <VImg
                :sourse="cooperationImg2"
                class="cooperation-images_img"
                ps="contain"
              />
            </div>
            <div class="cooperation-images_item">
              <div class="cooperation-images_rounded">
                <VImg ps="contain" :sourse="roundedImg" />
              </div>
              <VImg
                :sourse="cooperationImg3"
                class="cooperation-images_img"
                ps="contain"
              />
            </div>
          </div>
        </div>
        <div class="cooperation_item">
          <div ref="obs" class="cooperation_title">
            <VHtag size="lg" tag="h3"
              ><span>{{ $t('cooperationPage.spanTitle') }}</span
              >{{ $t('cooperationPage.title') }}
            </VHtag>
          </div>
          <div ref="obs" class="cooperation_text">
            <VTypography size="xl">{{ $t('cooperationPage.text') }} </VTypography>
            <VTypography size="xl">{{ $t('cooperationPage.textSub') }} </VTypography>
          </div>
        </div>
      </div>
    </VContainer>
  </section>
</template>

<script setup>
  import VImg from '../../UI/Img/VImg.vue';
  import cooperationBg from '../../Image/cooperationBg.png';
  import VHtag from '../../UI/Htag/VHtag.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
  import VContainer from '../../UI/Container/VContainer.vue';
  import cooperationImg1 from '../../Image/cooperationImg1.png';
  import cooperationImg2 from '../../Image/cooperationImg2.png';
  import cooperationImg3 from '../../Image/cooperationImg3.png';
  import useObserver from '../../../Mixins/useObserver.js';
  import roundedImg from '../../Image/rounded.png';
  const {isVisible, obs, inObse} = useObserver();
  inObse();
</script>

<style lang="scss" scoped>
  .cooperation {
    position: relative;
    height: 100%;
    scroll-snap-align: start;
    z-index: 1;
    overflow: hidden;
    @include flex(center, start, column);

    &.active {
      .cooperation_title {
        transition: all ease 1.5s;
        transform: translateX(0px);
        opacity: 1;
      }
      .cooperation_text {
        transform: translateY(0%);
        transition: all ease 2s;
        opacity: 1;
      }
      .cooperation-images {
        &_item {
          transform: scale(1);
          opacity: 1;
          transition: all ease 1.2s;
        }
        &_rounded {
          animation: rounded 6s linear infinite;
        }
      }
    }

    &_images {
      z-index: 1;
      @include flex(end, flex-end, column);
    }
    &-images {
      &_row {
        position: relative;
        height: 100%;
        min-width: 646px;
        max-width: 646px;
      }
      &_rounded {
        position: relative;
      }
      &_item {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(0.4);
        opacity: 0;
        &:first-child {
          width: 214px;
          height: 205px;
          left: 0;
          top: 4%;
          opacity: 0;

          .cooperation-images_rounded {
            @include roundedSize(186px);
            left: 20px;
          }
        }
        &:nth-child(even) {
          height: 166px;
          width: 143px;
          right: 0;
          top: 27%;
          .cooperation-images_rounded {
            @include roundedSize(138px);
            right: 10px;
            top: 7px;
          }
        }
        &:last-child {
          height: 140px;
          width: 168px;
          right: 19%;
          bottom: 8%;

          .cooperation-images_rounded {
            @include roundedSize(141px);
          }
        }
      }
    }
    &_row {
      @include grid(1fr minmax(240px, 340px), calc(100vh - 100px) auto);
      padding-top: 80px;
      column-gap: 54px;
    }

    &_item {
      @include flex(center, start, column);
      gap: 28px;
    }
    &_title {
      transform: translateX(70%);
      opacity: 0;
      span {
        color: $green;
      }
    }
    &_text {
      @include flex(start, start, column);
      gap: 22px;
      padding-left: 20px;
      border-left: 1px solid rgba($white, 0.2);
      transform: translateY(70%);
      opacity: 0;
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
  @include media('max', 'lg') {
    .cooperation {
      &_row {
        @include flex(center, start);
        height: 100vh;
        padding-top: 0px;
        column-gap: 0px;
      }
      &_item {
        opacity: 0;
        visibility: hidden;
      }

      &-images {
        &_row {
          position: unset;
          height: 100%;
        }
        &_rounded {
          position: relative;
        }
        &_item {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(0.4);
          opacity: 0;
          &:first-child {
            left: 4%;
            top: 22%;
          }
          &:nth-child(even) {
            right: 7%;
            top: 36%;
          }
          &:last-child {
            right: 25%;
            bottom: 25%;
          }
        }
      }
    }
  }
  @include media('max', 'sm') {
    .cooperation {
      &_row {
        @include flex(center, start);
        height: 100%;

        padding-top: 0px;
        column-gap: 0px;
      }
      &_item {
        opacity: 0;
        visibility: hidden;
      }

      &-images {
        &_row {
          height: 100%;
          min-width: 326px;
          max-width: 326px;
        }

        &_item {
          &:first-child {
            left: -7%;
            top: 22%;
          }
          &:nth-child(even) {
            right: -8%;
            top: 36%;
          }
          &:last-child {
            right: 27%;

            bottom: 0%;
          }
        }
      }
    }
  }
</style>
