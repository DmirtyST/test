<template>
  <section id="introduction" class="introduction">
    <div class="introduction_title">
      <VHtag size="md" tag="h4">
        <Vnumber color="green">3.</Vnumber>
        Introduction
      </VHtag>
    </div>
    <div class="introduction_sub">
      <VTypography size="xl">
        The aim of this document is to share with stakeholders and other interested
        parties the technical aspects of the iValut Platform and also to outline the
        development plan and timeline to bring the product to fruition.
      </VTypography>
    </div>
    <div class="introduction_sub-title">
      <VHtag size="sm" tag="h5"> Current Status </VHtag>
    </div>
    <div class="introduction_sub">
      <VTypography size="xl">
        iValut already has a Proof-of-Concept backend and a demonstration mobile
        application. The conceptual backend is developed using Scala and classic
        PostgreSQL database, while the mobile application is an Android demostrator.
      </VTypography>
    </div>
    <div class="introduction_sub-title">
      <VHtag size="sm" tag="h5"> Scope of Document </VHtag>
    </div>
    <div class="introduction_sub">
      <VTypography size="xl">
        This document will include information about the following
      </VTypography>
    </div>
    <ul class="introduction_lists">
      <li class="introduction_list">
        <VTypography size="xl">
          the technical architecture of the iValut Platform
        </VTypography>
      </li>
      <li class="introduction_list">
        <VTypography size="xl">
          the outline plan and milestones in the development of the platform.
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
