<template>
  <section id="introduction" class="introduction">
    <div class="introduction_title">
      <VHtag size="md" tag="h4">
        <Vnumber color="green">3.</Vnumber>
        {{ $t('documentation.introduction.title') }}
      </VHtag>
    </div>
    <div class="introduction_sub">
      <VTypography size="xl">
        {{ $t('documentation.introduction.textFirst') }}
      </VTypography>
    </div>
    <div class="introduction_sub-title">
      <VHtag size="sm" tag="h5">
        {{ $t('documentation.introduction.titleTwo') }}
      </VHtag>
    </div>
    <div class="introduction_sub">
      <VTypography size="xl">
        {{ $t('documentation.introduction.textTwo') }}
      </VTypography>
    </div>
    <div class="introduction_sub">
      <VTypography size="xl">
        {{ $t('documentation.introduction.textThree') }}
      </VTypography>
    </div>
    <div class="introduction_sub-title">
      <VHtag size="sm" tag="h5">
        {{ $t('documentation.introduction.titleLast') }}
      </VHtag>
    </div>
    <div class="introduction_sub">
      <VTypography size="xl">
        {{ $t('documentation.introduction.textFour') }}
      </VTypography>
    </div>
    <ul class="introduction_lists">
      <li class="introduction_list">
        <VTypography size="xl">
          {{ $t('documentation.introduction.listFirst') }}
        </VTypography>
      </li>
      <li class="introduction_list">
        <VTypography size="xl">
          {{ $t('documentation.introduction.listLast') }}
        </VTypography>
      </li>
    </ul>
  </section>
</template>

<script setup>
  import VHtag from '../../UI/Htag/VHtag.vue';
  import Vnumber from '../../UI/Number/Vnumber.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
</script>

<style lang="scss" scoped>
  .introduction {
    margin-bottom: 75px;
    &_title {
      margin-bottom: 35px;
      opacity: 0.8;
    }
    &_sub-title {
      opacity: 0.8;
      margin-bottom: 30px;
    }
    &_list {
      position: relative;
      padding-left: 26px;
      margin-bottom: 15px;
      opacity: 0.6;
      &::before {
        position: absolute;
        content: '';
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        @include roundedSize(6px);
        background-color: $green;
        border-radius: 50%;
      }
    }
    &_sub {
      margin-bottom: 25px;
      opacity: 0.6;
    }
  }
  @include media('max', 'md') {
    .introduction {
      padding-right: 15px;
    }
  }
  @include media('max', 'sm') {
    .introduction {
      margin-bottom: 40px;
      &_title {
        margin-bottom: 25px;
      }
      &_sub-title {
        margin-bottom: 15px;
      }
      &_sub {
        margin-bottom: 15px;
      }
    }
  }
</style>
