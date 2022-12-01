<template>
  <section :class="isVisible === false ? 'under' : 'under active'">
    <VImg :sourse="underBg" ps="cover" />
    <VContainer width="800">
      <div class="under_row">
        <div class="under_item">
          <div class="under_cover"></div>
          <ul class="under_title">
            <li>
              <VHtag tag="h2" size="xl">
                {{ $t('underPage.title') }}
              </VHtag>
            </li>
            <li>
              <VHtag tag="h1" size="xxl">
                {{ $t('underPage.title') }}
              </VHtag>
            </li>
          </ul>
          <div class="under_sub">
            <VTypography size="xl">{{ $t('underPage.text') }} </VTypography>
          </div>
          <div class="under_tabletBox">
            <VButton color="small">DOCUMENTATION</VButton>
            <VButton class="under_button" color="main">Contact Sales</VButton>
          </div>
        </div>
      </div>
    </VContainer>
    <AUnderCircle class="under_circle" ref="obs" />

    <VEclipse ref="obs" class="under_eclipse" color="#55AC58" w="918" h="706" />
  </section>
</template>

<script setup>
  import VContainer from '../../UI/Container/VContainer.vue';
  import VEclipse from '../../UI/Eclipse/VEclipse.vue';
  import VHtag from '../../UI/Htag/VHtag.vue';
  import VImg from '../../UI/Img/VImg.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
  import underBg from '../../Image/background_dots.png';
  import useObserver from '../../../Mixins/useObserver.js';
  import AUnderCircle from '../../UI/Animations/AUnderCircle.vue';
  import VButton from '../../UI/Button/VButton.vue';
  const {isVisible, obs, inObse} = useObserver();
  inObse();
</script>

<style lang="scss" scoped>
  .under {
    scroll-snap-align: start;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;

    &_tabletBox {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;
      opacity: 0.3;
      margin-top: 30px;
    }
    &.active {
      .under_eclipse {
        transition: all linear 0.6s;
        transform: translate(-50%, 0%);
        opacity: 1;
      }
      .under_circle {
        bottom: -0%;
        opacity: 1;
        transition: 2s;
      }
    }
    &_eclipse {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 15%);
      bottom: -70%;
      opacity: 0;
    }
    &_circle {
      bottom: -30%;
      opacity: 0;
    }
    &_cover {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: $linearBlack;
    }
    &_row {
      @include flex(start, center, column);
      height: 100%;
      padding-top: 20%;
    }

    &_title {
      li {
        &:first-child {
          display: block;
        }
        &:last-child {
          display: none;
        }
      }
    }
    &_item {
      @include flex(center, center, column);
      @include text(center);
      gap: 50px;
      position: relative;
    }
  }
  @include media('min', 'xxl') {
    .under {
      &_row {
        @include flex(center, center, column);
        height: 100%;
        padding-top: 0%;
      }
      &_eclipse {
        bottom: -65%;
      }
    }
  }
  @include media('max', 'lg') {
    .under {
      &_eclipse {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 15%);
        bottom: -40%;
        opacity: 0;
      }
    }
  }
  @include media('min', 'lg') {
    .under {
      &_tabletBox {
        display: none;
      }
    }
  }
  @include media('max', 'sm') {
    .under {
      &.active {
        .under_eclipse {
          transition: all linear 0.6s;
          transform: translate(-50%, 60%);
          opacity: 1;
        }
      }
      &_row {
        @include flex(center, center, column);
        height: 100%;
        padding-top: 0%;
      }
      &_title {
        li {
          &:first-child {
            display: none;
          }
          &:last-child {
            display: block;
          }
        }
      }
      &_eclipse {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -25%);
        bottom: -50%;
        opacity: 1;
      }
    }
  }
</style>
