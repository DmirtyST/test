<template>
  <section id="developments" class="developments">
    <div class="developments_item">
      <div class="developments_title">
        <VHtag size="sm" tag="h5"> Deployment</VHtag>
      </div>
      <div class="developments_sub">
        <VTypography size="xl">
          All iValut services are deployed and run in containers managed by AWS Fargate.
        </VTypography>
      </div>
    </div>
    <div class="developments_item">
      <div class="developments_title">
        <VHtag size="sm" tag="h5"> Data Protocol</VHtag>
      </div>
      <div class="developments_sub">
        <VTypography size="xl">
          The primary messaging format between iValut components is a modified variant of
          the JWT [17]. We will be using HS256 hash. A typical JWT token looks like this
        </VTypography>
      </div>
    </div>
    <ul class="developments_code-box">
      <VTypography size="doc">
        <li>
          eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxN
        </li>
        <li>TE2MjM5MDIyfQ.L8i6g3PfcHlioHCCPURC9pmXT7gdJpx3kOoyAfNUwCc</li>
      </VTypography>
    </ul>
    <div class="developments_sub-title">
      <VTypography size="xl">which translates to</VTypography>
    </div>
    <div class="developments_code-title">
      <VTypography size="xl">header</VTypography>
    </div>
    <ul class="developments_code-box">
      <VTypography color="#EC4626" size="doc">
        <li>
          <VTextWrapper>{{ '{' }}</VTextWrapper>
        </li>
        <li>"alg"<VTextWrapper>:</VTextWrapper> "HS256",</li>
        <li>"typ"<VTextWrapper>:</VTextWrapper> "JWT"</li>
        <li>
          <VTextWrapper>{{ '}' }}</VTextWrapper>
        </li>
      </VTypography>
    </ul>
    <div class="developments_code-title">
      <VTypography size="xl">payload</VTypography>
    </div>
    <ul class="developments_code-box">
      <VTypography color="#EC4626" size="doc">
        <li>
          <VTextWrapper>{{ '{' }}</VTextWrapper>
        </li>
        <li>
          "sub"<VTextWrapper>: </VTextWrapper>"1234567890"<VTextWrapper>,</VTextWrapper>
        </li>
        <li>
          "iat"<VTextWrapper>: </VTextWrapper>
          <VTextWrapper color="green">151623 9022</VTextWrapper>
          <VTextWrapper>,</VTextWrapper>
        </li>
        <li>
          "message"<VTextWrapper color="green">:</VTextWrapper>
          <VTextWrapper color="green">{{ ' {' }}</VTextWrapper>
        </li>
        <li>"command"<VTextWrapper>:</VTextWrapper> "transfer",</li>
        <li>"recipient"<VTextWrapper>:</VTextWrapper> "teryr.lx@gmail.com",</li>
        <li>"gateway"<VTextWrapper>:</VTextWrapper> "paypal",</li>
        <li>"currency"<VTextWrapper>:</VTextWrapper> "usd",</li>
        <li>"amount": <VTextWrapper color="green">10200</VTextWrapper></li>
        <li>
          <VTextWrapper>{{ '}' }}</VTextWrapper>
        </li>
        <li>
          <VTextWrapper>{{ '}' }}</VTextWrapper>
        </li>
      </VTypography>
    </ul>
  </section>
</template>

<script setup>
  import VHtag from '../../UI/Htag/VHtag.vue';
  import VTextWrapper from '../../UI/TextWrapper/VTextWrapper.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
</script>

<style lang="scss" scoped>
  .developments {
    margin-bottom: 50px;
    &_title {
      opacity: 0.8;
    }

    &_sub {
      opacity: 0.6;
    }
    &_item {
      @include flex(start, start, column);
      gap: 30px;
      margin-bottom: 50px;
    }
    &_table {
      margin-bottom: 50px;
    }
    &_sub-title {
      opacity: 0.6;
      margin-bottom: 30px;
    }
    &_code-box {
      padding: 35px 30px;
      width: 100%;
      background: $blackStrong;
      li {
        margin-bottom: 10px;
      }
      &:nth-of-type(1) {
        margin-bottom: 35px;
        opacity: 0.9;
      }
      &:nth-of-type(2) {
        margin-bottom: 40px;
      }
      &:nth-of-type(3) {
        margin-bottom: 50px;

        li {
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            padding-left: 11px;
          }
          &:nth-child(5),
          &:nth-child(6),
          &:nth-child(7),
          &:nth-child(8),
          &:nth-child(9) {
            padding-left: 63px;
          }
          &:nth-child(10) {
            padding-left: 11px;
          }
        }
      }
    }
    &_code-title {
      margin-bottom: 20px;
    }
  }

  @include media('max', 'md') {
    .developments {
      padding-right: 15px;
    }
  }
  @include media('max', 'sm') {
    .developments {
      margin-bottom: 25px;
      &_item {
        gap: 15px;
        margin-bottom: 30px;
      }
      &_code-box {
        padding: 25px 20px;

        &:nth-of-type(1) {
          margin-bottom: 25px;
          li {
            margin-bottom: 0px;
          }
        }
        &:nth-of-type(2) {
          margin-bottom: 30px;
        }
        &:nth-of-type(3) {
          margin-bottom: 25px;
        }
      }
    }
  }
</style>
