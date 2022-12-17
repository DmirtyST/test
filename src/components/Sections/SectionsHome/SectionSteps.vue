<template>
  <div :class="isVisible === false ? 'section-steps' : 'section-steps active'">
    <VContainer width="1100">
      <ul class="section-steps_title">
        <li>
          <VHtag size="lg" tag="h3"
            >Easy Connect. Move Money in
            <div><span> 2 Steps.</span></div></VHtag
          >
        </li>
        <li>
          <VHtag size="xl" tag="h2"
            >Easy Connect. Move Money <span> in 2 Steps.</span></VHtag
          >
        </li>
      </ul>
      <div class="section-steps_row">
        <VTabs :selectedTab="selectedTab" :names="data" @changeTab="changeTab">
          <div class="section-steps_step" v-if="selectedTab === 1">
            <div class="step_header">
              <div class="step_title">
                <VButton color="ofset">Step 1 - Create Users</VButton>
              </div>
              <div class="step_button">
                <p><VButton color="ofset">COPY</VButton></p>
                <VSvg class="step_icon" id="copy" width="22" height="22" />
              </div>
            </div>
            <div class="step_text">
              <VTypography size="code">
                <ol ref="obs" start="1" class="step_lists">
                  <li class="step_list">
                    -d <span>{{ "'{" }}</span>
                  </li>
                  <li class="step_list">
                    <span> {{ '"recipient": "johndoe"' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ '"gateway": "paypal"' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ '"amount": {' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ '"currency": "USD",' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ '"value": 2000' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ '}' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ "'{" }}</span>
                    {{ "'https:" }}
                    <span>
                      {{ "//api-sandbox.ivalut.com/api/v1.1/transfer -v```'" }}
                    </span>
                  </li>
                </ol>
              </VTypography>
            </div>
          </div>

          <div class="section-steps_step" v-if="selectedTab === 2">
            <div class="step_header">
              <div class="step_title">
                <div class="step_title">
                  <VButton color="ofset">Step 2 - Create Users</VButton>
                </div>
              </div>
              <div class="step_button">
                <p>COPY</p>
                <VSvg class="step_icon" id="copy" width="22" height="22" />
              </div>
            </div>
            <div class="step_text">
              <VTypography size="code">
                <ol ref="obs" start="1" class="step_lists">
                  <li class="step_list">
                    -d <span>{{ "'{" }}</span>
                  </li>
                  <li class="step_list">
                    <span> {{ '"recipient": "lianfil"' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ '"gateway": "dwolla"' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ '"amount": {' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ '"currency": "EUR",' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ '"value": 5000' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ '}' }}</span>
                  </li>
                  <li class="step_list">
                    <span>{{ "'{" }}</span>
                    {{ "'https:" }}
                    <span>
                      {{ "//api-sandbox.ivalut.com/api/v1.1/transfer -v```'" }}
                    </span>
                  </li>
                </ol>
              </VTypography>
            </div>
          </div>
        </VTabs>
      </div>

      <div class="section-steps_btn">
        <VButton color="gray">Text copied</VButton>
      </div>
    </VContainer>
  </div>
</template>

<script setup>
  import VTabs from '../../UI/Tabs/VTabs.vue';
  import {ref} from 'vue';
  import VContainer from '../../UI/Container/VContainer.vue';
  import VHtag from '../../UI/Htag/VHtag.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
  import useObserver from '../../../Mixins/useObserver.js';
  import VButton from '../../UI/Button/VButton.vue';
  import VSvg from '../../UI/SVG/VSvg.vue';
  const data = [
    {
      id: 1,
      title: 'Register your User',
      sub: 'Register your User with iValut. All we need is an identifier String.',
      icon: 'profile',
      w: '26',
      h: '24',
    },
    {
      id: 2,
      title: 'Move Money',
      sub:
        "Tell us the account name, payment gateway and the amount you want to send.That's it!",
      icon: 'institution',
      w: '27',
      h: '26',
    },
  ];
  const selectedTab = ref(1);
  const changeTab = (tabName) => {
    selectedTab.value = tabName;
  };

  const {isVisible, obs, inObse} = useObserver();
  inObse();
</script>

<style lang="scss" scoped>
  .section-steps {
    height: 100vh;
    overflow: hidden;
    scroll-snap-align: start;
    padding-top: 100px;
    @include flex(center, center, column);
    &.active {
      .section-steps_btn {
        transform: translateY(0%);
        opacity: 1;
        transition: all ease 1.5s;
      }
      .section-steps_title {
        transform: scale(1);
        opacity: 1;
        transition: all ease 1.5s;
      }
      .step {
        &_list {
          transition: all ease 0.7s;
          &:first-child,
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4),
          &:nth-child(5),
          &:nth-child(6),
          &:nth-child(7),
          &:last-child {
            animation-play-state: running;
          }
        }
      }
    }

    &_title {
      text-align: center;
      margin-bottom: 60px;
      transform: scale(0.6);
      opacity: 0;
      span {
        color: $green;
        min-width: 100%;
      }
    }

    &_step {
      border-radius: 7px;
      background-color: #1e1d1c;
      color: $white;
      padding: 32px 35px;
      overflow-x: auto;
    }
    &_row {
      @include grid(400px 1fr, 325px, 40px);
      margin-bottom: 33px;
    }
    &_btn {
      @include flex(center, center);
      transform: translateY(99%);
      opacity: 0;
    }
  }
  .step {
    &_header {
      @include flex(space-between, center);
      margin-bottom: 28px;
    }
    &_button {
      cursor: pointer;
      @include flex(start, center);
      gap: 12px;
      transition: all ease 0.4s;
      &:hover {
        transition: all ease 0.4s;
        color: $green;
        p {
          transition: all ease 0.4s;
        }
        .step_icon {
          fill: $green;
        }
      }
    }
    &_icon {
      fill: $white;
      transition: all ease 0.4s;
      height: 22px;
    }
    &_lists {
      counter-reset: ol-numbers;
      @include flex(start, start, column);
      gap: 4px;
    }
    &_list {
      position: relative;
      padding-left: 25px;
      display: inline-block;
      overflow: hidden;
      border-right: 2px solid rgba($white, 0);
      &::before {
        content: counter(ol-numbers) '.';
        position: absolute;
        counter-increment: ol-numbers;
        left: 0;
        top: 0;
        width: 10px;
        text-align: right;
        color: $white;
        font-size: 14px;
        opacity: 0.25;
      }

      &:first-child {
        width: 9ch;
        animation: printed-text 1.5s steps(9), flashing-border 0.7s step-end backwards;
        animation-play-state: paused;
      }
      &:nth-child(2) {
        width: 30ch;
        animation: printed-text 3s steps(30) 1s normal both,
          flashing-border 0.7s step-end 1.2s 4 normal both;

        animation-play-state: paused;
      }
      &:nth-child(3) {
        width: 27ch;
        animation: printed-text 3s steps(27) 3s normal both,
          flashing-border 0.7s step-end 4s 3 normal both;
        animation-play-state: paused;
      }
      &:nth-child(4) {
        width: 20ch;
        animation: printed-text 3s steps(20) 5s normal both,
          flashing-border 0.7s step-end 6s 3 normal both;
        animation-play-state: paused;
      }
      &:nth-child(5) {
        width: 31ch;
        animation: printed-text 3s steps(31) 6.6s normal both,
          flashing-border 0.7s step-end 7s 3 normal both;
        animation-play-state: paused;
      }
      &:nth-child(6) {
        width: 26ch;
        animation: printed-text 3s steps(26) 8s normal both,
          flashing-border 0.7s step-end 9s 2 normal both;
        animation-play-state: paused;
      }
      &:nth-child(7) {
        width: 9ch;
        animation: printed-text 3s steps(9) 5.5s normal both;
        animation-play-state: paused;
      }
      &:last-child {
        width: 62ch;
        animation: printed-text 4.5s steps(62) 11s normal both,
          flashing-border 0.7s step-end 11s 6 normal both;
        animation-play-state: paused;
      }

      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(7) {
        padding-left: 60px;
      }
      &:nth-child(5),
      &:nth-child(6) {
        padding-left: 18.5%;
      }
      &:last-child {
        span {
          &:last-child {
            color: $white;
            opacity: 0.6;
            margin-left: -8px;
          }
        }
      }
      span {
        color: $orange;
      }
    }
  }

  @keyframes printed-text {
    from {
      width: 0;
    }
  }
  @keyframes flashing-border {
    0% {
      border-right: ($white, 0.4);
    }
    25% {
      border-right: ($white, 0);
    }
    50% {
      border-color: rgba($white, 0.4);
    }
    100% {
      border-color: rgba($white, 0);
    }
  }

  @include media('max', 'lg') {
    .section-steps {
      height: auto;
      min-height: 1024px;
      padding-top: 80px;
      max-width: 600px;
      margin: 0 auto;
      &_step {
        min-height: 315px;
      }
      &_btn {
        display: none;
      }
      &_row {
        @include grid(1fr, auto);

        margin-bottom: 33px;
      }
      &_title {
        span {
          color: $green;
          min-width: unset;
        }
        li {
          &:first-child {
            display: none;
          }
        }
      }
    }
  }
  @include media('min', 'lg') {
    .section-steps {
      &_title {
        li {
          &:last-child {
            display: none;
          }
        }
      }
    }
  }
  @include media('max', 'sm') {
    .section-steps {
      height: auto;
      min-height: 707px;
      max-width: 100%;
      margin: unset;
      padding-top: 50px;
      padding-bottom: 47px;

      &_step {
        min-height: auto;
      }
      &.active {
        .section-steps_title {
          transform: scale(1) translateY(-0%);
          opacity: 1;
          transition: all ease 1.5s;
        }
      }

      &_step {
        border-radius: 7px;
        background-color: #1e1d1c;
        color: $white;
        padding: 25px 20px;
        overflow-x: auto;
      }
      &_title {
        margin-bottom: 33px;
        @include size(10px, 13px, 1px, 500);
        transform: scale(0.8) translateY(-80%);
      }
      &_row {
        margin-bottom: 0px;
      }
    }
  }

  .step {
    &_header {
      @include flex(space-between, center);
      margin-bottom: 15px;
    }

    &_lists {
      counter-reset: ol-numbers;
      @include flex(start, start, column);
      gap: 4px;
    }
  }
</style>
