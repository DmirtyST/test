<template>
  <section id="statements " class="statements">
    <div class="statements_title">
      <VHtag size="md" tag="h4">
        <Vnumber color="green">4.</Vnumber>
        {{ $t('documentation.statements.title') }}
      </VHtag>
    </div>

    <div class="statements_item">
      <div class="statements_sub-title">
        <VHtag size="sm" tag="h5"> {{ $t('documentation.statements.titleTwo') }} </VHtag>
      </div>
      <div class="statements_sub">
        <VTypography size="xl">
          {{ $t('documentation.statements.textFirst') }}
        </VTypography>
      </div>
      <div class="statements_sub">
        <VTypography size="xl">
          {{ $t('documentation.statements.textTwo') }}
        </VTypography>
      </div>
      <div class="statements_sub">
        <VTypography size="xl">
          {{ $t('documentation.statements.textThree') }}
        </VTypography>
      </div>
    </div>
    <div class="statements_item">
      <div class="statements_sub-title">
        <VHtag size="sm" tag="h5">
          {{ $t('documentation.statements.titleThree') }}
        </VHtag>
      </div>
      <div class="statements_sub">
        <VTypography size="xl">
          {{ $t('documentation.statements.textFour') }}
        </VTypography>
      </div>
    </div>
    <div class="statements_item">
      <div class="statements_sub-title">
        <VHtag size="sm" tag="h5"> {{ $t('documentation.statements.titleLast') }}</VHtag>
      </div>
      <div class="statements_sub">
        <VTypography size="xl">
          {{ $t('documentation.statements.textLast') }}
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
  .statements {
    margin-bottom: 75px;
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
      margin-bottom: 50px;
    }
  }

  @include media('max', 'md') {
    .statements {
      padding-right: 15px;
    }
  }
  @include media('max', 'sm') {
    .statements {
      margin-bottom: 40px;
      &_title {
        margin-bottom: 25px;
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
        gap: 15px;
        margin-bottom: 30px;
      }
    }
  }
</style>
