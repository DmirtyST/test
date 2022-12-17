<template>
  <section class="stability">
    <VContainer width="1000">
      <div class="stability_row">
        <div class="stability_image">
          <VImg :sourse="centerImg" ps="contain" />
        </div>
        <div class="stability_col">
          <div v-for="item in stabilityItemData.slice(0, 2)" class="stability_item">
            <div class="stability_number">
              <Vnumber>0{{ item.id }}</Vnumber>
            </div>
            <VHtag tag="h4" size="md">{{ item.title }}</VHtag>
            <div class="stability_text">
              <VTypography size="lg">{{ item.text }}</VTypography>
            </div>
          </div>
        </div>
        <div class="stability_col">
          <div>
            <div class="stability_line">
              <VImg :sourse="line" ps="cover" />
            </div>
          </div>
        </div>
        <div class="stability_col">
          <div v-for="item in stabilityItemData.slice(2, 4)" class="stability_item">
            <div class="stability_number">
              <Vnumber>0{{ item.id }}</Vnumber>
            </div>
            <VHtag tag="h4" size="md">{{ item.title }}</VHtag>
            <div class="stability_text">
              <VTypography size="lg">{{ item.text }}</VTypography>
            </div>
          </div>
        </div>
      </div>
    </VContainer>
  </section>
</template>

<script setup>
  import VContainer from '../../UI/Container/VContainer.vue';
  import VHtag from '../../UI/Htag/VHtag.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
  import centerImg from '../../Image/screenCenter.png';
  import VImg from '../../UI/Img/VImg.vue';
  import line from '../../Image/stabilityLine.png';
  import Vnumber from '../../UI/Number/Vnumber.vue';
  const stabilityItemData = [
    {
      id: 1,
      title: 'Protected',
      text:
        'Your data is closely managed during all stages of collection transmission, and storage',
    },
    {
      id: 2,
      title: 'Secure',
      text:
        'Our security system and procedures are based on the highest international standards',
    },
    {
      id: 3,
      title: 'Authenticated',
      text: 'Your data is stored and protected behind multiple layers of authentication',
    },
    {
      id: 4,
      title: 'Transparent rates and fees',
      text:
        'We get you midmarket rates and add absolutely no margins! We charge a 0.3% fee.',
    },
  ];
</script>

<style lang="scss" scoped>
  .stability {
    height: 100%;
    scroll-snap-align: start;
    z-index: 1;
    overflow: hidden;
    &_line {
      width: 50px;
      background-color: $radialGreen;
      position: relative;
      height: 100vh;
      bottom: 34%;
      z-index: 1;
    }
    &_image {
      width: 620px;
      height: 500px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -30%);
    }
    &_row {
      display: flex;
      height: 100vh;
      padding: 136px 0px;
      padding-left: 80px;
      gap: 40px;
      justify-content: space-between;
      position: relative;
    }

    &_col {
      display: flex;
      flex-direction: column;
      gap: 150px;
      &:nth-child(2) {
      }
      &:nth-child(3) {
        position: relative;
      }
      &:last-child {
        align-self: flex-end;
      }
    }
    &_item {
      @include flex(start, start, column);

      position: relative;
      z-index: 1;
    }
    &_number {
      position: absolute;
      left: -43px;
      top: -20px;
      z-index: -1;
    }
    &_text {
      max-width: 300px;
    }
  }
</style>
