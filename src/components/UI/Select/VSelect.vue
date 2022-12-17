<template>
  <div :class="select === false ? 'select' : 'select active'">
    <div @click="activeSelect" class="select_title">
      <p>{{ locale }}</p>

      <VSvg class="select_icon" id="down" width="12" height="12" />
    </div>
    <ul class="select_option">
      <li @click="item.func" v-for="(item, index) in lang" :key="index">
        {{ item.option }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import {useI18n} from 'vue-i18n';
  import VSvg from '../../UI/SVG/VSvg.vue';
  const {locale} = useI18n({useScope: 'global'});

  const props = defineProps({
    lang: {
      type: Array,
      default: [],
    },
    select: {
      type: Boolean,
    },
    activeSelect: {
      type: Function,
    },
  });
</script>

<style lang="scss" scoped>
  .select {
    position: relative;
    @include size(10px, 12px, 1px, 500);
    text-transform: uppercase;
    color: $white;
    background-color: $black;
    &.active {
      .select_option {
        visibility: visible;
        opacity: 1;
      }
      .select_icon {
        transform: rotate(90deg);
      }
    }
    &_title {
      @include flex(start, center);
      gap: 8px;
      cursor: pointer;
    }
    &_icon {
      transition: all ease 0.4s;
      stroke: $white;
      height: 5px;
    }
    &_option {
      padding-top: 7px;
      position: absolute;
      top: 100%;
      left: 0;
      width: 50px;
      transition: all ease 0.4s;
      @include flex(start, start, column);
      gap: 4px;
      opacity: 0;
      visibility: hidden;
      cursor: pointer;
    }
  }
</style>
