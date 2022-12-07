<template>
  <div class="header">
    <VContainer width="1200">
      <div class="header_row">
        <VSelect :activeSelect="activeSelect" :select="select" :lang="languagesData" />
        <div class="header_logo">
          <VImg :sourse="logo" ps="contain" />
        </div>
        <div>
          <VButton color="small"
            ><div class="header_btn">
              JOIN US <span>NOW</span>
              <div class="header_line"></div>
            </div>
          </VButton>
        </div>
      </div>
    </VContainer>
  </div>
</template>

<script setup>
  import VContainer from '../UI/Container/VContainer.vue';
  import {useI18n} from 'vue-i18n';
  import {ref} from 'vue';
  import VImg from '../UI/Img/VImg.vue';
  import logo from '../Image/logo.png';
  import VButton from '../UI/Button/VButton.vue';
  import VSelect from '../UI/Select/VSelect.vue';
  const {locale} = useI18n({useScope: 'global'});
  const select = ref(false);
  const activeSelect = () => {
    select.value = !select.value;
  };
  const eng = () => {
    locale.value = 'eng';
    localStorage.setItem('lang', locale.value);
    activeSelect();
  };
  const ua = () => {
    locale.value = 'ua';
    localStorage.setItem('lang', locale.value);
    activeSelect();
  };
  const languagesData = [
    {id: 0, option: 'eng', func: eng},
    {id: 1, option: 'ua', func: ua},
  ];
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    padding-top: 35px;
    width: 100%;
    z-index: 999;

    &_logo {
      position: relative;
      width: 125px;
      height: 35px;
    }
    &_row {
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      align-items: center;
    }

    &_btn {
      position: relative;
      padding-right: 37px;
    }

    &_line {
      @include line(22px);
    }
  }

  @include media('max', 'lg') {
    .header {
      &_row {
        display: flex;
        justify-content: space-between;
      }
      &_btn {
        position: relative;
        padding-right: 20px;
      }

      &_line {
        @include line(10px);
      }
    }
  }
  @include media('max', 'sm') {
    .header {
      padding-top: 20px;
      &_logo {
        position: relative;
        width: 82px;
        height: 23px;
      }
      &_btn {
        span {
          display: none;
        }
      }
      &_row {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
