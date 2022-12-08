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
        <div class="tab_name">
          <VHtag size="sm" tag="h5">
            <p>- {{ tab.title }}</p>
          </VHtag>
        </div>
      </div>
      <div class="tab_stepsTablet">
        <div :class="tab.id !== selectedTab ? 'tab_sub' : 'tab_sub selected'">
          <VTypography size="lg">
            <div>{{ tab.sub }}</div>
          </VTypography>
        </div>
      </div>
    </span>
  </div>
  <div v-if="selectedTab === 1" class="tab_stepsSm">
    <div :class="selectedTab !== 1 ? 'tab_sub' : 'tab_sub selected'">
      <VHtag tag="h3" size="lg">Register your User</VHtag>
      <VTypography size="xl">
        <div>Register your User with iValut. All we need is an identifier String.</div>
      </VTypography>
    </div>
  </div>
  <div v-if="selectedTab === 2" class="tab_stepsSm">
    <div :class="selectedTab !== 2 ? 'tab_sub' : 'tab_sub selected'">
      <VHtag tag="h3" size="lg">Move Money</VHtag>
      <VTypography size="xl">
        <div>
          Tell us the account name, payment gateway and the amount you want to send.That's
          it!
        </div>
      </VTypography>
    </div>
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
    &_stepsSm{
      min-height: 140px;
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

  @include media('max', 'lg') {
    .tab {
      grid-template-columns: repeat(2, 50%);
      gap: 0px;
      &_name {
        display: none;
      }
      &_icon {
        background-color: transparent;
        opacity: 0.3;
      }
      &_title {
        width: 100%;
        @include flex(center, center);
        background-color: rgba(#4c4a49, 0.2);
        padding: 5px 0px;
        position: relative;
        z-index: 1;
        span{
          opacity: 0.3;
        }
        &::before{
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 0%;
          height: 100%;
          background-color: $green;
          z-index: -1;
          transition: all ease .4s;
        }
        &.selected {

          &::before{
          width: 100%;
        
        }

          span {
            opacity: 1;
          }
         
        }
      }
      &_row {
        padding: 0;
        opacity: 1;
        &::before {
          display: none;
        }
        &::after {
          display: none;
        }
        &.selected {
          background-color: transparent;
          position: static;
          &::before {
            display: none;
          }
        }
      }
      &_button {
        @include flex(center, center);
        gap: 10px;
        
        &.selected {
          .tab_icon {
            background-color: transparent;
            transition: all ease 0.4s;
            opacity: 1;
          }
        }
      }
      &_sub {
        opacity: 0;
        visibility: hidden;
        padding: 30px 0px;
        @include flex(center, center, column);
        text-align: center;
        gap: 15px;
        &.selected {
          opacity: 1;
          visibility: visible;
        }
      }

      &_stepsTablet {
        display: none;
      }
    }
  }
  @include media('min', 'lg') {
    .tab {
      &_sub {
        padding: 0px 0;
        display: static;
        text-align: start;
      }
    }
  }
</style>
