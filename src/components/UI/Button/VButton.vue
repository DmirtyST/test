<template>
  <button
    :type="type"
    :style="{color: `${text}`}"
    :disabled="disabled"
    :class="['btn', `btn_${color}`]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({
    color: {
      type: String,
      default: 'btn',
    },
    disabled: {
      type: Boolean,
      require: false,
    },
    type: {
      type: String,
      default: 'submit',
    },
    text: {
      type: String,
      default: 'white',
    },
  });
</script>

<style lang="scss" scoped>
  .btn {
    display: block;
    color: $white;
    text-transform: uppercase;
    cursor: pointer;
    font-family: Montserrat;
    &_main {
      padding: 20px 45px;
      border: 1px solid $green;
      border-radius: 62px;
      @include size(12px, 15px, 2px, 500);
      @include text(center);
      overflow: hidden;
      z-index: 1;
      position: relative;
      transition: all ease 0.4s;
      @include before() {
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: $linearGreen;
        opacity: 0.1;
      }
      @include after() {
        left: -100%;
        top: -5px;
        height: 125px;
        width: 125px;
        border-radius: 70%;
        background-color: $green;
      }
      &:hover {
        @include after() {
          width: 350px;
          height: 350px;
          border-radius: 0;
          left: 0;
          top: -30px;
        }
      }
    }
    &_small {
      @include size(10px, 12px, 1px, 500);
    }

    &_transper {
      padding: 20px 45px;
      border-radius: 62px;
      border: 1px solid $white;
    }
    &_gray {
      padding: 17px 58px;
      border: 1px solid $gray;
      @include size(12px, 15px, 2px, 500);
      color: rgba($white, 0.5);
      border-radius: 55px;
      background-color: rgba($blackStrong, 0.3);
    }
    &_ofset {
      @include size(12px, 15px, 2px, 500);
      font-family: Montserrat;
      color: $white;
    }
  }
  @include media('max', 'lg') {
  }
  @include media('max', 'sm') {
    .btn {
      &_transper {
        padding: 15px 32px;
        @include size(10px, 13px, 1px, 500);

        text-align: center;
      }
      &_main {
        padding: 16px 35px;
        border: 1px solid $green;
        border-radius: 62px;
      }

      &_small {
        @include size(10px, 12px, 1px, 500);
        position: relative;
      }

      &_ofset {
        @include size(10px, 13px, 1px, 500);
      }
    }
  }
</style>
