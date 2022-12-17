<template>
  <section id="statements " class="statements">
    <div class="statements_title">
      <VHtag size="md" tag="h4">
        <Vnumber color="green">4.</Vnumber>
        Problem statements
      </VHtag>
    </div>

    <div class="statements_item">
      <div class="statements_sub-title">
        <VHtag size="sm" tag="h5"> Problem 1 </VHtag>
      </div>
      <div class="statements_sub">
        <VTypography size="xl">
          Current payment platforms, event the biggest ones are localised. WeChat Pay [1]
          is clustered in China, Momo [2] in Vietnam and PayLah! [3] in Singapore are
          examples. There is no one system of payment platforms that have deep world-wide
          penetration.
        </VTypography>
      </div>
      <div class="statements_sub">
        <VTypography size="xl">
          Human mobility is global. We will most likely travel to a place where our
          primary mode of mobile payments are not widely adopted. Even if we want to sign
          on to the local platform, it may not be possible to do so due to local
          jurisdiction and financial rules.
        </VTypography>
      </div>
      <div class="statements_sub">
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
    <div class="statements_item">
      <div class="statements_sub-title">
        <VHtag size="sm" tag="h5"> Problem 2 </VHtag>
      </div>
      <div class="statements_sub">
        <VTypography size="xl">
          Even if it’s possible for the above person to join Momo (or vice versa), he will
          have to manage another wallet. Multiply this scenario a few times, he will end
          up having multiple accounts with disparate pots of monies.
        </VTypography>
      </div>
    </div>
    <div class="statements_item">
      <div class="statements_sub-title">
        <VHtag size="sm" tag="h5"> Solution</VHtag>
      </div>
      <div class="statements_sub">
        <VTypography size="xl">
          The iValut Platform provides for the cross integration of payment gateways so
          that each user can send monies to another person easily, regardless of their
          respective payment systems.
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
