<template>
  <section :class="isVisible === false ? 'appendix' : 'appendix active'">
    <div class="appendix_centered">
      <VImg :sourse="centeredImg" ps="contain" />
    </div>
    <div class="appendix_container">
      <div class="appendix_row">
        <div ref="obs" class="appendix_images">
          <div class="appendix-images_item">
            <div class="appendix-images_img">
              <VImg :sourse="appendixImg1" ps="contain" />
            </div>
            <div class="appendix-images_img">
              <VImg :sourse="appendixImg2" ps="contain" />
            </div>
            <div class="appendix-images_img">
              <VImg :sourse="appendixImg3" ps="contain" />
            </div>
          </div>
        </div>
        <div class="appendix_item">
          <div class="appendix_bg">
            <VImg :sourse="appendixBg" ps="cover" />
          </div>
          <ul class="appendix_content">
            <li class="appendix_box">
              <ul class="appendix_list">
                <li>
                  <VHtag tag="h6" size="xs"><span>01</span> </VHtag>
                </li>
                <li>
                  <VHtag tag="h5" size="xs"><span>01</span> </VHtag>
                </li>
              </ul>
              <div>
                <ul class="appendix_title">
                  <li>
                    <VHtag size="md" tag="h4">{{
                      $t('appendixPage.firstBox.title')
                    }}</VHtag>
                  </li>
                  <li>
                    <VHtag size="lg" tag="h3">{{
                      $t('appendixPage.firstBox.title')
                    }}</VHtag>
                  </li>
                </ul>
                <div class="appendix_text">
                  <VTypography size="xl">{{
                    $t('appendixPage.firstBox.text')
                  }}</VTypography>
                </div>
              </div>
            </li>
            <li class="appendix_box">
              <ul class="appendix_list">
                <li>
                  <VHtag tag="h6" size="xs"><span>02</span></VHtag>
                </li>
                <li>
                  <VHtag tag="h5" size="xs"><span>02</span></VHtag>
                </li>
              </ul>
              <div>
                <ul class="appendix_title">
                  <li>
                    <VHtag size="md" tag="h4">{{
                      $t('appendixPage.evenBox.title')
                    }}</VHtag>
                  </li>
                  <li>
                    <VHtag size="lg" tag="h3">{{
                      $t('appendixPage.evenBox.title')
                    }}</VHtag>
                  </li>
                </ul>
                <div class="appendix_text">
                  <VTypography size="xl">{{
                    $t('appendixPage.evenBox.text')
                  }}</VTypography>
                </div>
              </div>
            </li>
            <li class="appendix_box">
              <ul class="appendix_list">
                <li>
                  <VHtag tag="h6" size="xs"><span>03</span></VHtag>
                </li>
                <li>
                  <VHtag tag="h5" size="xs"><span>03</span></VHtag>
                </li>
              </ul>
              <div>
                <ul class="appendix_title">
                  <li>
                    <VHtag size="md" tag="h4">{{
                      $t('appendixPage.lastBox.title')
                    }}</VHtag>
                  </li>
                  <li>
                    <VHtag size="lg" tag="h3">{{
                      $t('appendixPage.lastBox.title')
                    }}</VHtag>
                  </li>
                </ul>
                <div class="appendix_text">
                  <VTypography size="xl">{{
                    $t('appendixPage.lastBox.text')
                  }}</VTypography>
                </div>
              </div>
            </li>
          </ul>
          <div class="appendix_btn">
            <VButton color="transper">DOCUMENTATION</VButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import VImg from '../../UI/Img/VImg.vue';
  import centeredImg from '../../Image/screenCenter.png';
  import VHtag from '../../UI/Htag/VHtag.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
  import VButton from '../../UI/Button/VButton.vue';
  import appendixImg1 from '../../Image/appendixImg1.png';
  import appendixImg2 from '../../Image/appendixImg2.png';
  import appendixImg3 from '../../Image/appendixImg3.png';
  import appendixBg from '../../Image/appendixBg.png';
  import useObserver from '../../../Mixins/useObserver.js';
  const {isVisible, obs, inObse} = useObserver();
  inObse();
</script>

<style lang="scss" scoped>
  .appendix {
    height: 100%;
    overflow: hidden;
    scroll-snap-align: start;
    position: relative;
    z-index: 1;
    &.active {
      .appendix_btn {
        transform: translateY(0%) scale(1);
        opacity: 1;
        transition: all ease 1.5s;
      }
      .appendix_list {
        opacity: 0.5;
        transition: all linear 1.5s;
        transform: translateY(0%);
      }
      .appendix_title {
        transform: translateX(0%) skew(0deg);
        transition: all ease-in-out 1.5s;
        opacity: 1;
      }
      .appendix_text {
        transform: translateX(0%) skew(0deg);
        transition: all ease-in-out 1.5s;
        opacity: 1;
      }
      .appendix-images {
        &_item {
          transition: all ease 1s;
          transform: translateY(0%);
          opacity: 1;
        }
        &_img {
          top: 20%;
          left: 10%;
          transition: all ease-in-out 1.5s;
          img {
            left: -80px;
          }
          &:first-child {
            transform: translateY(-100px);
            left: 120px;
            top: 10px;
          }
          &:nth-child(even) {
            top: 0px;
            opacity: 1;
            left: 15px;

            transform: translate(70px);
          }
        }
      }
    }

    &_btn {
      transform: translateY(140%) scale(0.5);
      opacity: 0;
    }
    &_bg {
      position: absolute;
      top: 0;
      z-index: -1;
      right: 20px;
      opacity: 1;
      width: 90%;
      height: 100%;
      opacity: 0.1;
    }
    &_container {
      padding-left: calc((100% - 1200px) / 2 + 15px);
    }
    &_centered {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      @include roundedSize(580px);
    }
    &_row {
      @include grid(minmax(320px, 550px) 1fr, 100vh);
      column-gap: 40px;
    }
    &_images {
      position: relative;
      @include flex(center, center);
    }
    &-images {
      &_item {
        width: 100%;
        min-height: 450px;
        transform: translateY(50%);
        opacity: 0;
        position: relative;
        right: 40px;
      }
      &_img {
        position: absolute;
        top: 20%;
        left: 10%;
        z-index: 1;
        img {
          width: 560px;
          height: 560px;
          max-width: unset;
          left: -80px;
        }
        &:first-child {
          z-index: 3;
          transform: translateY(-0px);
          top: 14%;
          left: 11%;
          img {
            width: 550px;
            height: 540px;
          }
        }
        &:nth-child(even) {
          z-index: 2;
          top: 20%;
          left: 10%;

          transform: translate(0px);
        }
        &:last-child {
          img {
            width: 560px;
            height: 560px;
            max-width: unset;
          }
        }
      }
    }

    &_item {
      position: relative;
      border-top-left-radius: 40% 40%;
      @include flex(center, center, column);
      background-color: $green;
      padding-top: 60px;
      gap: 65px;
      overflow: hidden;
      z-index: 1;
    }

    &_box {
      padding-top: 25px;
      padding-bottom: 25px;
      @include flex(start, start);
      gap: 15px;
      border-bottom: 1px solid rgba($white, 0.3);
    }
    &_content {
      max-width: 50%;
    }
    &_text {
      max-width: 85%;
      transform: translateX(60%) skew(20deg);
      opacity: 0;
    }
    &_title {
      margin-bottom: 8px;
      transform: translateX(60%) skew(20deg);
      opacity: 0;
    }
    &_list {
      position: relative;
      top: 5px;
      opacity: 0;
      transform: translateY(100%);
    }
  }

  @include media('max', 'xl') {
    .appendix {
      &.active {
        .appendix-images {
          &_item {
            transition: all ease 1s;
            transform: translateY(0%);
            opacity: 1;
          }
          &_img {
            top: 20%;
            left: 10%;
            transition: all ease-in-out 1.5s;
            img {
              left: -80px;
            }
            &:first-child {
              transform: translateY(-100px);
              left: 65px;
              top: 50px;
            }
            &:nth-child(even) {
              top: 22px;
              opacity: 1;
              left: -35px;

              transform: translate(70px);
            }
          }
        }
      }
      &_row {
        @include flex(start, start, column);
        column-gap: 0px;
        height: 100vh;
      }
      &_item {
        position: relative;
        border-top-left-radius: 0% 0%;
        border-top-right-radius: 35% 40%;
        width: 100%;
        height: 53%;
        background-color: $green;
        padding-top: 0px;
        gap: 20px;
        overflow: hidden;
        z-index: 1;
      }
      &_images {
        position: relative;
        @include flex(center, center);
        z-index: 22;
        top: 0%;
        height: 47%;
        margin: 0 auto;
      }
      &-images {
        &_item {
          right: 200px;
          top: 70px;
        }
        &_img {
          img {
            width: 460px;
            height: 460px;
          }
          &:first-child {
            img {
              width: 450px;
              height: 440px;
            }
          }

          &:last-child {
            img {
              width: 460px;
              height: 460px;
            }
          }
        }
      }
      &_container {
        padding-left: 0;
      }
    }
  }

  @include media('max', 'lg') {
    .appendix {
      &_row {
        @include flex(start, start, column);
        column-gap: 0px;
        height: 1024px;
      }
    }
  }
  @include media('max', 'sm') {
    .appendix {
      height: auto;
      &.active {
        .appendix-images {
          &_item {
            transition: all ease 2s;
            transform: translateY(0%) scale(1);
            opacity: 1;
          }
          &_img {
            top: 15%;
            left: 10%;
            transition: all ease-in-out 2.5s;
            img {
              left: -80px;
            }
            &:first-child {
              transform: translateY(-100px);
              left: 30px;
              top: 97px;
            }
            &:nth-child(even) {
              top: 43px;
              opacity: 1;
              left: -47px;

              transform: translate(70px);
            }
          }
        }
      }
      &_list {
        li {
          &:first-child {
            display: none;
          }
          &:last-child {
            display: block;
          }
        }
      }
      &_box {
        padding-top: 18px;
        padding-bottom: 18px;
        @include flex(start, start);
        gap: 5px;
        border-bottom: 1px solid rgba($white, 0.3);

        &:last-child {
          border-bottom: transparent;
        }
      }
      &_content {
        max-width: 100%;
        padding: 0 39px;
      }
      &_row {
        height: 771px;
        min-height: 771px;
      }
      &_list {
        top: 0px;
      }
      &-images {
        &_item {
          right: 70px;
          top: 70px;
          transform: translateY(0%) scale(0.3);
        }
        &_img {
          img {
            width: 255px;
            height: 250px;
          }
          &:first-child {
            img {
              width: 265px;
              height: 240px;
            }
          }

          &:last-child {
            img {
              width: 270px;
              height: 280px;
            }
          }
        }
      }
      &_centered {
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        z-index: -1;
        @include roundedSize(0px);
        width: 285px;
        height: 259px;
      }
      &_item {
        position: relative;
        height: 54%;
        border-top-right-radius: 38% 27%;
        @include flex(center, center, column);
        background-color: $green;
        padding-top: 0px;
        padding-bottom: 25px;
        gap: 10px;
        overflow: hidden;
        z-index: 1;
      }
      &_images {
        height: 46%;
        top: 2%;
        left: 3%;
      }
      &_title {
        li {
          &:first-child {
            display: none;
          }
        }
      }
    }
  }
  @include media('min', 'sm') {
    .appendix {
      &_item {
        padding: 0 15px;
      }
      &_list {
        li {
          &:last-child {
            display: none;
          }
        }
      }
      &_title {
        li {
          &:last-child {
            display: none;
          }
        }
      }
    }
  }
  @include media('min', 'lg') {
    .appendix {
      &_content {
        max-width: 50%;
      }
    }
  }
</style>
