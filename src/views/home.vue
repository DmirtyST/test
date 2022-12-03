<!-- @format -->

<template>
  <div class="home">
    <SectionScreen />
    <SectionUnder />
    <SectionCooperation />
    <SectionBenefist />
    <SectionVideo />
    <SectionAppendix />
    <SectionSteps />
  </div>
</template>

<script setup>
  import SectionAppendix from '../components/Sections/SectionsHome/SectionAppendix.vue';
  import SectionBenefist from '../components/Sections/SectionsHome/SectionBenefist.vue';
  import SectionCooperation from '../components/Sections/SectionsHome/SectionCooperation.vue';
  import SectionScreen from '../components/Sections/SectionsHome/SectionScreen.vue';
  import SectionSteps from '../components/Sections/SectionsHome/SectionSteps.vue';
  import SectionUnder from '../components/Sections/SectionsHome/SectionUnder.vue';
  import SectionVideo from '../components/Sections/SectionsHome/SectionVideo.vue';
</script>
<style lang="scss" scoped>
  .home {
    height: 100vh;
  }
  @include media('max', 'lg') {
    .home {
      height: 1024px;
    }
  }
  @include media('max', 'sm') {
    .home {
      height: auto;
    }
  }
</style>
