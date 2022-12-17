<template>
  <VContainer width="1200">
    <aside :class="menu === false ? ' aside' : 'aside active'">
      <div class="aside_row">
        <button @click="toggleMenu" class="aside_open">
          <p>PAGE MENU</p>
          <p>ClOSE</p>
        </button>

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
  import {ref} from 'vue';
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

  const menu = ref(false);
  const toggleMenu = () => {
    menu.value = !menu.value;
  };
</script>

<style lang="scss" scoped>
  .aside {
    position: fixed;
    height: 100vh;
    width: 340px;
    top: 173px;
    z-index: 9999;
    &.active {
      .aside_open {
        p {
          &:first-of-type {
            transform: translate(-50%, 250%);
            visibility: hidden;
            opacity: 0;
          }
          &:last-of-type {
            transform: translate(-50%, -50%);
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }
    &_open {
      padding: 14px 20px;
      width: 146px;
      height: 44px;
      overflow: hidden;
      background-color: $green;
      position: absolute;
      cursor: pointer;
      top: 0;
      left: -43%;
      font-family: Montserrat;
      @include size(10px, 12px, 1px, 500);
      color: $white;
      p {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: all ease 0.4s;
        &:first-of-type {
        }
        &:last-of-type {
          transform: translate(-50%, -250%);
          visibility: hidden;
          opacity: 0;
        }
      }
    }

    &_row {
      width: 100%;
      position: relative;
    }
    &_link {
      color: rgba($white, 0.5);
      transition: all ease 0.6s;
      position: relative;
      overflow: hidden;
      padding: 11px 18px;
      height: 44px;
      padding-left: 36px;
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
        padding: 11px 18px;
        color: rgb(255, 255, 255);
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
  @include media('min', 'xl') {
    .aside {
      &_open {
        display: none;
      }
    }
  }
  @include media('max', 'xl') {
    .aside {
      top: 100px;
      right: 0;
      transition: all ease 0.4s;
      height: max-content;
      padding-bottom: 20px;
      transform: translateX(100%);
      &.active {
        transform: translateX(0%);
        background-color: $black;
      }
    }
  }

  @include media('max', 'sm') {
    .aside {
      width: 300px;
      top: 130px;

      &_open {
        top: -10%;
        left: unset;
        left: -49%;
        transition: all ease 1s;
      }
      &.active {
        .aside_open {
          left: 0;
        }
      }
    }
  }
</style>
