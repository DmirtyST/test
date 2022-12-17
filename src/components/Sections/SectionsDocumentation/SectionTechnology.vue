<template>
  <section id="technology" class="technology">
    <div class="technology_title">
      <VHtag size="md" tag="h4">
        <Vnumber color="green">5.</Vnumber>
        iValut Technology Platform
      </VHtag>
    </div>

    <div class="technology_item">
      <div class="technology_sub-title">
        <VHtag size="sm" tag="h5"> Technical Philosophy</VHtag>
      </div>
      <div class="technology_sub">
        <VTypography size="xl">
          In modern enterprise systems designs, most components are already coded/designed
          and there are always best-in-class systems available, either commercially or in
          the open-sourced world. These components are very often well tested not just in
          terms of codes but also in terms of usability in the field. They are well
          supported both officially and by developers familiarity at large.
        </VTypography>
      </div>
      <div class="technology_sub">
        <VTypography size="xl">
          Through adopting these software components, we miminise our resources in solving
          common software requirements. This will allow us to stay focused to our value
          proposition of enabling the cross integration of payment platforms.
        </VTypography>
      </div>
      <div class="technology_sub">
        <VTypography size="xl">
          For example, an European with a Monzo [4] account travels to Vietnam and goes
          for a meal with his local friends. He finds out that it is impossible to split
          the bill with his friends because all of them are using the local Momo payment
          gateway. Monzo accounts are only available to Europe while Momo is localised to
          Vietnam. None of them can get onto each other platform. In the end, cash was
          used to split the bills.
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
