<template>
  <div class="aside-container">
    <aside :class="menu === false ? ' aside' : 'aside active'">
      <button @click="toggleMenu" class="aside_open">
        <p>PAGE MENU</p>
        <p>ClOSE</p>
      </button>

      <div :class="currentSection === 'platform' ? ' aside_row' : 'aside_row active'">
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
  </div>
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
    if (menu.value === false) {
      document.body.style.overflow = 'auto';
    }
    if (menu.value === true) {
      document.body.style.overflow = 'hidden';
    }
  };
</script>

<style lang="scss" scoped>
  .aside {
    position: fixed;
    height: 100vh;
    width: 340px;
    top: 200px;
    z-index: 9999;
    transition: top all ease 0.4s;
    &.active {
      transition: top all ease 0.4s;
      .aside_open {
        p {
          &:first-of-type {
            transform: translateY(250%);
            visibility: hidden;
            opacity: 0;
          }
          &:last-of-type {
            transform: translateY(-0%);
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }
    &_open {
      width: 146px;
      height: 44px;
      overflow: hidden;
      background-color: $green;
      position: absolute;
      @include flex(center, center);
      cursor: pointer;
      top: 100px;
      left: -42.9%;
      font-family: Montserrat;
      @include size(10px, 12px, 1px, 500);
      color: $white;
      p {
        position: absolute;
        transition: all ease 0.6s;
        width: 100%;
        &:last-of-type {
          transform: translateY(-250%);
          visibility: hidden;
          opacity: 0;
        }
      }
    }

    &_row {
      width: 100%;
      position: relative;
      transition: bottom ease 0.8s;
      bottom: 0;
      &.active {
        bottom: 100px;
        transition: bottom ease 0.8s;
      }
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
      padding-top: 100px;
      top: 0;
      bottom: 0;
      right: 0;
      transition: all ease 0.6s;
      z-index: 999;
      transform: translateX(100%);
      &_list,
      &_reverse {
        background-color: $black;
      }
      &_reverse {
        margin-top: 0;
        padding: 20px 0;
        padding-left: 21px;
      }
      &_row {
        padding-bottom: 20px;
        bottom: 0;
        top: 0;
        height: 100vh;
        overflow-y: scroll;
        padding-bottom: 150px;
        &.active {
          bottom: unset;
        }
      }
      &.active {
        transform: translateX(0%);
      }
    }
  }

  @include media('max', 'sm') {
    .aside {
      padding-top: 100px;
      &_open {
        width: 117px;
        height: 44px;
      }
      width: 300px;
      top: 40px;
      transition: all ease 1s;
      &_open {
        top: 56px;
        left: unset;
        left: -39.4%;
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
