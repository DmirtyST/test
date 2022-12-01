<template>
  <div class="tab">
    <span
      v-for="tab in names"
      :key="tab.id"
      :class="tab.id !== selectedTab ? 'tab_row' : 'tab_row selected'"
      @click="clickOnTab(tab.id)"
    >
      <div :class="tab.id !== selectedTab ? 'tab_title' : 'tab_title selected'">
        <VHtag size="sm" tag="h5">
          <div :class="tab.id !== selectedTab ? 'tab_button' : 'tab_button selected'">
            <div class="tab_icon">
              <VSvg class="icon" :width="tab.w" :height="tab.h" :id="tab.icon" />
            </div>
            <span>Step {{ tab.id }}</span>
          </div>
        </VHtag>
        <VHtag size="sm" tag="h5">
          <p>- {{ tab.title }}</p>
        </VHtag>
      </div>
      <div class="tab_sub">
        <VTypography size="lg">
          <div>{{ tab.sub }}</div>
        </VTypography>
      </div>
    </span>
  </div>

  <slot />
</template>
<script setup>
  import VHtag from '../Htag/VHtag.vue';
  import VTypography from '../Typography/VTypography.vue';
  import VSvg from '../SVG/VSvg.vue';
  const props = defineProps({
    names: {
      type: Array,
      required: true,
    },
    selectedTab: {
      type: String,
      required: false,
    },
  });
  const emit = defineEmits(['changeTab']);
  const clickOnTab = (tabName) => {
    emit('changeTab', tabName);
  };
</script>
<style lang="scss" scoped>
  .tab {
    @include grid(1fr, repeat(2, 50%, 5px));
    gap: 15px;
    &_button {
      @include flex(start, center);
      gap: 18px;
      &.selected {
        .tab_icon {
          background-color: $green;
          transition: all ease 0.4s;
        }
      }
    }
    &_icon {
      fill: $white;
      @include roundedSize(38px);
      @include flex(center, center);
      background-color: #4c4a49;
      border-radius: 3px;
      transition: all ease 0.4s;
      .icon {
        height: 25px;
      }
    }
    &_row {
      cursor: pointer;
      transition: all ease 0.4s;
      color: $white;
      padding-left: 39px;
      padding-top: 30px;
      padding-bottom: 25px;
      @include flex(start, start, column);
      opacity: 0.3;
      gap: 15px;
      position: relative;
      &:hover {
        transition: all ease 0.4s;
        opacity: 1;
        &::after {
          opacity: 0.3;
        }
      }
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 0%;
        background-color: $green;
        transition: all ease 0.4s;
        z-index: 2;
      }
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        opacity: 0.3;
        height: 100%;
        background-color: $gray;
        transition: all ease 0.4s;
      }
      &.selected {
        transition: all ease 0.4s;
        background-color: #1e1d1c;
        opacity: 1;
        position: relative;
        &::before {
          height: 100%;
          transition: all ease 0.4s;
        }
      }
    }

    &_title {
      @include flex(start, center);
      gap: 6px;
      span {
        transition: all ease 0.4s;
      }
      &.selected {
        span {
          opacity: 0.32;
        }
      }
    }
  }
</style>
