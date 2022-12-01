<template>
  <h1 v-if="tag === 'h1'" :class="('Htag', `Htag_${size}`)"><slot></slot></h1>
  <h2 v-if="tag === 'h2'" :class="('Htag', `Htag_${size}`)"><slot></slot></h2>
  <h3 v-if="tag === 'h3'" :class="('Htag', `Htag_${size}`)"><slot></slot></h3>
  <h4 v-if="tag === 'h4'" :class="('Htag', `Htag_${size}`)"><slot></slot></h4>
  <h5 v-if="tag === 'h5'" :class="('Htag', `Htag_${size}`)"><slot></slot></h5>
  <h6 v-if="tag === 'h6'" :class="('Htag', `Htag_${size}`)"><slot></slot></h6>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'Htag',
    },
    tag: {
      type: String,
      default: 'xs',
    },
  });
</script>

<style lang="scss" scoped>
  .Htag {
    font-family: Montserrat;

    &_xxl {
      color: $white;
      @include size(65px, 75px, 0px, 600);
    }
    &_xl {
      color: $white;
      @include size(42px, 58px, 0px, 600);
    }
    &_lg {
      color: $white;
      @include size(38px, 44px, 0px, 600);
    }
    &_md {
      color: $white;
      @include size(30px, 38px, 0px, 600);
      font-family: Avenir;
    }
    &_sm {
      color: $white;
      @include size(22px, 24px, 0px, 600);
      font-family: Avenir;
    }
    &_xs {
      color: $white;
      @include size(16px, 20px, 0px, 600);
    }
  }
  @include media('max', 'lg') {
    .Htag {
      &_xxl {
        @include size(55px, 70px, 0px, 600);
        color: $white;
      }
      &_xl {
        color: $white;
        @include size(48px, 58px, 0px, 600);
      }
      &_lg {
        color: $white;
        @include size(38px, 44px, 0px, 600);
      }
      &_md {
        color: $white;
        @include size(30px, 38px, 0px, 600);
      }
      &_sm {
        color: $white;
        @include size(26px, 24px, 0px, 600);
      }
      &_xs {
        color: $white;
        @include size(16px, 20px, 0px, 600);
      }
    }
  }
  @include media('max', 'sm') {
    .Htag {
      &_xxl {
        @include size(28px, 42px, 0px, 600);
      }
      &_xl {
        color: $white;
        @include size(26px, 34px, 0px, 600);
      }
      &_lg {
        color: $white;
        @include size(20px, 24px, 0px, 600);
      }
      &_md {
        color: $white;
        @include size(16px, 20px, 0px, 600);
      }
      &_sm {
        color: $white;
        @include size(16px, 20px, 0px, 600);
      }
    }
  }
</style>
