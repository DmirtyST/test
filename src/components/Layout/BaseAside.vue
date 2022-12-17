<template>
  <VContainer width="1200">
    <aside class="aside">
      <div class="aside_row">
        <ul class="aside_lists">
          <li class="aside_list" v-for="link in dataLink" :key="link.id">
            <router-link :to="`#${link.path}`">
              <VTypography size="lg">
                <div
                  :class="
                    currentSection !== link.path ? 'aside_link' : 'aside_link active'
                  "
                >
                  {{ link.name }}
                </div>
              </VTypography>
            </router-link>
          </li>
        </ul>
        <div class="aside_reverse">
          <router-link to="#platform">
            <VTypography size="lg"> Back to Top</VTypography></router-link
          >

          <router-link to="#scope">
            <VTypography size="lg">Go to botton</VTypography>
          </router-link>
        </div>
      </div>
    </aside>
  </VContainer>
</template>

<script setup>
  import VTypography from '../UI/Typography/VTypography.vue';
  const dataLink = [
    {id: 1, name: 'iValut  Platform - Technical...', path: 'platform'},
    {id: 2, name: 'Document Version', path: 'document'},
    {id: 3, name: 'Glossary', path: 'glossary'},
    {id: 4, name: 'Introduction', path: 'introduction'},
    {id: 5, name: 'PRoblem Statements', path: 'statements '},
    {id: 6, name: 'iValut technology platform', path: 'technology'},
    {id: 7, name: 'Components Archive', path: 'archive'},
    {id: 8, name: 'Developments method', path: 'developments'},
    {id: 9, name: 'Milestones', path: 'scope'},
  ];
  const props = defineProps({
    currentSection: {
      type: String,
      reqiured: true,
    },
  });
</script>

<style lang="scss" scoped>
  .aside {
    position: fixed;
    height: 100vh;
    width: 340px;
    top: 173px;

    z-index: 9999;

    &_row {
      height: min-content;
      width: 100%;
    }
    &_link {
      color: rgba($white, 0.5);
      transition: all ease 0.6s;
      position: relative;
      overflow: hidden;
      padding-left: 36px;
      margin: 8px 0px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: -110%;
        height: 100%;
        width: 2px;
        background-color: $green;
        transition: all ease 0.6s;
      }
      &.active {
        background-color: $blackStrong;
        width: 100%;
        display: block;
        padding-left: 0px;
        padding: 11px 18px;
        color: rgb(255, 255, 255);
        margin: 15px 0px;
        &::before {
          top: 0;
        }
      }
    }

    &_reverse {
      @include flex(start, start, column);
      gap: 10px;
      padding-left: 21px;
      margin-top: 20px;
    }
    &_list {
      display: block;
      width: 100%;
    }
  }
  @include media('max', 'xl') {
    .aside {
      display: none;
    }
  }
</style>
