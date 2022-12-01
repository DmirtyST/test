<template>
  <div class="endless-circle">
    <div class="endless-circle_item">
      <VImg :sourse="euroElement" ps="contain" />
    </div>
    <div class="endless-circle_item">
      <VImg :sourse="dollarElement" ps="contain" />
    </div>
    <div class="endless-circle_item">
      <VImg :sourse="grivnaElement" ps="contain" />
    </div>
  </div>
</template>

<script setup>
  import VImg from '../Img/VImg.vue';
  import euroElement from '../../Image/euroElement.png';
  import dollarElement from '../../Image/dollarElement.png';
  import grivnaElement from '../../Image/grivnaElement.png';
</script>

<style lang="scss" scoped>
  .endless-circle {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);

    transition: all ease 5s;
    animation: circle 12s infinite linear;
    &_item {
      position: absolute;
      &:first-child {
        @include roundedSize(80px);
        left: -50%;
        top: 20%;
      }
      &:nth-child(even) {
        @include roundedSize(54px);
        right: -32%;
        top: 35%;
      }
      &:last-child {
        @include roundedSize(42px);
        right: 20%;
        bottom: -10%;
      }
    }
  }
  @keyframes circle {
    0% {
      transform: translateY(-50%) translateX(-50%) rotate(0deg);
    }
    100% {
      transform: translateY(-50%) translateX(-50%) rotate(360deg);
    }
    100% {
      transform: translateY(-50%) translateX(-50%) rotate(360deg);
    }
  }

  @include media('max', 'sm') {
    .endless-circle {
      position: absolute;
      width: 200px;
      height: 200px;

      &_item {
        position: absolute;
        &:first-child {
          @include roundedSize(50px);
        }
        &:nth-child(even) {
          @include roundedSize(35px);
        }
        &:last-child {
          @include roundedSize(20px);
        }
      }
    }
  }
</style>
