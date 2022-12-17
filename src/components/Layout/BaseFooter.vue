<template>
  <div class="footer">
    <div class="footer_row">
      <div class="footer_title">Be part of the change</div>
      <div class="footer_item">
        <div class="footer_button">
          <VButton text="black" color="ofset">DOCUMENTATION</VButton>
          <div class="footer_line"></div>
        </div>
        <div class="footer_button">
          <VButton text="black" color="main">JOIN US NOW</VButton>
        </div>
      </div>
    </div>
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
</template>

<script setup>
  import VButton from '../UI/Button/VButton.vue';
  import VTypography from '../UI/Typography/VTypography.vue';
  import VSvg from '../UI/SVG/VSvg.vue';
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
    height: 510px;
    scroll-snap-align: start;
    &_row {
      min-height: 428px;
      background-color: $white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &_button {
      position: relative;
      &:first-child {
        padding-right: 35px;
      }
    }
    &_line {
      @include line(20px, $black);
    }
    &_item {
      display: flex;
      align-items: center;
      gap: 80px;
    }
    &_title {
      font-family: Montserrat;
      @include size(42px, 58px, 0px, 600);
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 35px;
    }
    &_text {
      opacity: 0.5;
      &:last-child {
        display: flex;
        justify-content: flex-end;
      }
    }
    &_sub {
      padding: 30px 50px;
      background-color: $black;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
    }
    &_icons {
      display: flex;
      align-items: center;
      gap: 35px;
    }
  }
</style>
