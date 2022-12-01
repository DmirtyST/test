<template>
  <div class="under-circle">
    <div class="under-circle_item">
      <VImg :sourse="euroElementUnder" ps="contain" />
    </div>
    <div class="under-circle_item">
      <VImg :sourse="dollarElementUnder" ps="contain" />
    </div>
    <div class="under-circle_item">
      <VImg :sourse="grivnaElementUnder" ps="contain" />
    </div>
  </div>
</template>

<script setup>
  import VImg from '../Img/VImg.vue';
  import euroElementUnder from '../../Image/euroElementUnder.png';
  import dollarElementUnder from '../../Image/dollarElementUnder.png';
  import grivnaElementUnder from '../../Image/grivnaElementUnder.png';
</script>

<style lang="scss" scoped>
  .under-circle {
    position: absolute;
    width: 500px;
    height: 230px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 22;

    &_item {
      position: absolute;
      animation: circle 5s alternate-reverse infinite linear;
      &:first-child {
        @include roundedSize(106px);
        left: -5%;
        top: 20%;
      }
      &:nth-child(even) {
        @include roundedSize(56px);
        right: -5.5%;
        top: -8%;
      }
      &:last-child {
        @include roundedSize(70px);
        right: 5%;
        bottom: 0%;
      }
    }
  }
  @keyframes circle {
    0% {
      transform: translateX(-10px) translateY(-10px) rotate(-45deg);
    }
    100% {
      transform: translateX(10px) translateY(10px) rotate(45deg);
    }
  }
  @include media('max', 'lg') {
    .under-circle {
      width: 450px;
      height: 200px;

      &_item {
        &:first-child {
          @include roundedSize(106px);
          left: -5%;
          top: -15%;
        }
        &:nth-child(even) {
          @include roundedSize(56px);
          right: -9%;
          top: -8%;
        }
        &:last-child {
          @include roundedSize(70px);
          right: 5%;
          bottom: -5%;
        }
      }
    }
  }
  @include media('max', 'sm') {
    .under-circle {
      width: 450px;
      height: 200px;

      &_item {
        position: absolute;
        animation: circle 5s alternate-reverse infinite linear;
        &:first-child {
          @include roundedSize(106px);
          left: -5%;
          top: -15%;
        }
        &:nth-child(even) {
          @include roundedSize(56px);
          right: -9%;
          top: -8%;
        }
        &:last-child {
          @include roundedSize(70px);
          right: 5%;
          bottom: -5%;
        }
      }
    }
  }
</style>
