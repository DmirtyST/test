<template>
  <section id="technology" class="technology">
    <div class="technology_title">
      <VHtag size="md" tag="h4">
        <Vnumber color="green">5.</Vnumber>
        {{ $t('documentation.technology.title') }}
      </VHtag>
    </div>

    <div class="technology_item">
      <div class="technology_sub-title">
        <VHtag size="sm" tag="h5">{{ $t('documentation.technology.titleTwo') }}</VHtag>
      </div>
      <div class="technology_sub">
        <VTypography size="xl">
          {{ $t('documentation.technology.textFirst') }}
        </VTypography>
      </div>
      <div class="technology_sub">
        <VTypography size="xl">
          {{ $t('documentation.technology.textEven') }}
        </VTypography>
      </div>
      <div class="technology_sub">
        <VTypography size="xl">
          {{ $t('documentation.technology.textLast') }}
        </VTypography>
      </div>
    </div>
  </section>
</template>

<script setup>
  import VHtag from '../../UI/Htag/VHtag.vue';
  import Vnumber from '../../UI/Number/Vnumber.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
</script>

<style lang="scss" scoped>
  .technology {
    margin-bottom: 50px;
    &_title {
      margin-bottom: 35px;
      opacity: 0.8;
    }
    &_sub-title {
      margin-bottom: 10px;
      opacity: 0.8;
    }
    &_sub {
      opacity: 0.6;
    }
    &_item {
      @include flex(start, start, column);
      gap: 20px;
    }
  }

  @include media('max', 'md') {
    .technology {
      padding-right: 15px;
    }
  }

  @include media('max', 'sm') {
    .technology {
      margin-bottom: 30px;
      &_sub-title {
        margin-bottom: 0px;
      }
      &_item {
        gap: 15px;
      }
    }
  }
</style>
