<template>
  <VContainer width="1200">
    <div class="footer">
      <div class="footer_sub">
        <div class="footer_text">
          <VTypography size="lg">Copyright © 2019 iVALUT</VTypography>
        </div>
        <ul class="footer_icons">
          <li v-for="item in dataIcons" :key="item.id">
            <VSvg :id="item.name" :width="item.w" :height="item.h" />
          </li>
        </ul>
        <div class="footer_text">
          <VTypography size="lg">Privacy Policy</VTypography>
        </div>
      </div>
    </div>
  </VContainer>
</template>

<script setup>
  import VTypography from '../UI/Typography/VTypography.vue';
  import VSvg from '../UI/SVG/VSvg.vue';
  import VContainer from '../UI/Container/VContainer.vue';
  const dataIcons = [
    {id: 0, name: 'youT', w: '23', h: '17'},
    {id: 1, name: 'fc', w: '8', h: '17'},
    {id: 2, name: 'inst', w: '19', h: '20'},
    {id: 3, name: 'telegram', w: '24', h: '24'},
    {id: 4, name: 'twit', w: '24', h: '24'},
    {id: 5, name: 'medium', w: '24', h: '24'},
  ];
</script>

<style lang="scss" scoped>
  .footer {
    &_text {
      opacity: 0.5;
      &:last-child {
        display: flex;
        justify-content: flex-end;
      }
    }
    &_sub {
      padding: 30px 0px;
      background-color: $black;
      @include flex(space-between, center);
    }
    &_icons {
      display: flex;
      align-items: center;
      gap: 35px;
    }
  }

  @include media('max', 'md') {
    .footer {
      &_sub {
      }
      &_icons {
        gap: 35px;
        li {
          &:last-child,
          &:nth-child(4),
          &:nth-child(5) {
            display: none;
          }
        }
      }
    }
  }
  @include media('max', 'sm') {
    .footer {
      &_icons {
        margin-bottom: 20px;
        order: 0;
      }
      &_text {
        &:first-child {
          order: 1;
        }
      }
      &_sub {
        @include flex(center, center, column);
        gap: 10px;
      }
    }
  }
</style>
