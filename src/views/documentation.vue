<template>
  <div class="documentation_container">
    <div class="documentation">
      <ul class="documentation_box">
        <li><VTypography size="lg">Home</VTypography></li>
        <li><VTypography size="lg">/</VTypography></li>
        <li><VTypography size="lg">Documentation</VTypography></li>
      </ul>
      <div class="documentation_row">
        <div class="documentation_content">
          <section id="platform" class="documentation_title">
            <strong></strong>
            <VHtag size="xl" tag="h2">
              {{ $t('documentation.title') }}
            </VHtag>
          </section>
          <SectionDocument />
          <SectionGlossary />
          <SectionIntroduction />
          <SectionStatements />
          <SectionTechnology />
          <SectionArchive />
          <SectionDevelopments />
          <SectionScope />
        </div>
        <BaseAside :currentSection="currentSection" />
      </div>
    </div>
  </div>
  <BaseFooterDoc />
</template>

<script setup>
  import BaseAside from '../components/Layout/BaseAside.vue';
  import VHtag from '../components/UI/Htag/VHtag.vue';
  import SectionDocument from '../components/Sections/SectionsDocumentation/SectionDocument.vue';
  import SectionTechnology from '../components/Sections/SectionsDocumentation/SectionTechnology.vue';
  import SectionGlossary from '../components/Sections/SectionsDocumentation/SectionGlossary.vue';
  import SectionIntroduction from '../components/Sections/SectionsDocumentation/SectionIntroduction.vue';
  import SectionStatements from '../components/Sections/SectionsDocumentation/SectionStatements.vue';
  import SectionDevelopments from '../components/Sections/SectionsDocumentation/SectionDevelopments.vue';
  import SectionScope from '../components/Sections/SectionsDocumentation/SectionScope.vue';
  import SectionArchive from '../components/Sections/SectionsDocumentation/SectionArchive.vue';
  import useObserverLink from '../Mixins/useObserverLink.js';
  import VTypography from '../components/UI/Typography/VTypography.vue';
  import BaseFooterDoc from '../components/Layout/BaseFooterDoc.vue';
  const {currentSection} = useObserverLink();
</script>

<style lang="scss" scoped>
  .documentation {
    padding-top: 100px;

    &_container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    }
    &_row {
      display: grid;
      grid-template-columns: 1fr 340px;

      gap: 45px;
    }
    &_title {
      margin-bottom: 55px;
    }

    &_box {
      display: flex;

      gap: 10px;
      margin-bottom: 78px;
      color: white;

      li {
        &:last-child {
          opacity: 0.5;
        }
      }
    }
  }

  @include media('max', 'xl') {
    .documentation {
      &_row {
        display: grid;
        grid-template-columns: 100% 0px;

        gap: 0px;
      }
    }
  }
  @include media('max', 'md') {
    .documentation {
      &_container {
        max-width: 100%;
        margin: unset;
        padding: 0 0px;
        padding-left: 15px;
      }
      &_title {
        padding-right: 15px;
      }

      &_box {
        display: flex;
        gap: 10px;
        margin-bottom: 90px;
        color: white;
      }
    }
  }

  @include media('max', 'sm') {
    .documentation {
      &_box {
        margin-bottom: 60px;
      }
      &_title {
        margin-bottom: 30px;
      }
    }
  }
</style>
