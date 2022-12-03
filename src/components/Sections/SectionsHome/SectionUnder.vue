<template>
  <section :class="isVisible === false ? 'under' : 'under active'">
    <VImg :sourse="underBg" ps="cover" />
    <VContainer width="800">
      <div class="under_row">
        <div class="under_cover"></div>
        <div class="under_item">
          <ul class="under_title">
            <li>
              <VHtag tag="h2" size="xl">
                {{ $t('underPage.title') }}
              </VHtag>
            </li>
            <li>
              <VHtag tag="h1" size="xxl">
                {{ $t('underPage.titleTablet') }}
              </VHtag>
            </li>
          </ul>
          <div class="under_sub">
            <VTypography size="xl">{{ $t('underPage.text') }} </VTypography>
          </div>
          <ul class="under_tabletBox">
            <li><VButton color="small">DOCUMENTATION</VButton></li>
            <li><VButton class="under_button" color="main">Contact Sales</VButton></li>
          </ul>
        </div>
      </div>
    </VContainer>
    <AUnderCircle class="under_circle" ref="obs" />

    <ul class="under_eclipses">
      <li>
        <VEclipse ref="obs" class="under_eclipse" color="#55AC58" w="918" h="706" />
      </li>
      <li>
        <VEclipse ref="obs" class="under_eclipse" color="#55AC58" w="516" h="340" />
      </li>
    </ul>
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

    &.active {
      .under_circle {
        opacity: 1;
        transition: ease 2s;
        z-index: 22;
        transform: translate(-50%, 0%);
      }
      .under_eclipse {
        opacity: 1;
        transform: translateY(0%);
        transition: all linear 0.6s;
      }
    }
    &_circle {
      transform: translate(-50%, 66%);
      opacity: 0;
    }
    &_eclipses {
      li {
        &:first-child {
          opacity: 1;
        }
        &:last-child {
          opacity: 0;
        }
      }
    }
    &_eclipse {
      bottom: -70%;
      transform: translateY(20%);
      opacity: 0;
    }
    &_row {
      @include flex(start, center, column);
      height: 100%;
      padding-top: 20%;
      position: relative;
      background: $linearBlack;
    }

    &_item {
      @include flex(center, center, column);
      @include text(center);
      gap: 50px;
      mix-blend-mode: soft-light;
      overflow: 0.3;
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
    &_tabletBox {
      width: 100%;
      @include flex(space-around, center);
      margin-top: 30px;
      display: none;
    }
  }

  @include media('max', 'lg') {
    .under {
      &_tabletBox {
        display: flex;
      }
      &_row {
        @include flex(center, center, column);
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
        bottom: -50%;
      }
    }
  }
  @include media('max', 'md') {
    .under {
      &_tabletBox {
        display: flex;
      }
      &_row {
        @include flex(center, center, column);
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
    }
  }

  @include media('max', 'sm') {
    .under {
      padding-bottom: 50px;
      &_eclipses {
        li {
          &:first-child {
            opacity: 0;
          }
          &:last-child {
            opacity: 1;
          }
        }
      }

      &.active {
        .under_eclipse {
          opacity: 1;
          transform: translateY(-20%);
          transition: all linear 0.6s;
        }
      }
      &_tabletBox {
        display: flex;
        margin-top: 0px;
        li {
          &:last-child {
            display: none;
          }
        }
      }
      &_row {
        @include flex(center, center, column);
        padding-top: 0%;
      }
      &_item {
        gap: 15px;
        padding-top: 35px;
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
        bottom: -58%;
        width: 200%;
        transform: translateY(-5%);
        left: -50%;
      }
    }
  }
</style>
