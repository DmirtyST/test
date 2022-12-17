<template>
  <section id="scope" class="scope">
    <div style="opacity: 0.5" class="scope_title">
      <VTypography size="xl">The result is a JWT like</VTypography>
    </div>
    <ul class="scope_code-box">
      <VTypography size="doc">
        <li>
          eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsIm9yaWdpbiI6InRyYW5zZmVyLmNsdXN0ZXIzLn
        </li>
        <li>
          IyLmF1Iiwib3RwX3NpZyI6IjkzMjQ4MyJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE
        </li>
        <li>
          2MjM5MDIyLCJtZXNzYWdlIjp7ImNvbW1hbmQiOiJ0cmFuc2ZlciIsInJlY2lwaWVudCI6InRlc
        </li>
        <li>
          nlyLmx4QGdtYWlsLmNvbSIsImdhdGV3YXkiOiJwYXlwYWwiLCJjdXJyZW5jeSI6InVzZCIsImFc
        </li>
        <li>tb3VudCI6MTAyMDB9fQ.Tc7KSGX4VLkV-nXlh1XcQwd9Q1rGHbNB_V-MA-y3LSQ</li>
      </VTypography>
    </ul>
    <div class="scope_item">
      <div class="scope_sub">
        <VTypography size="xl">
          Conventional JWT code libraries can still be used to provide first level
          validation of the message. Enhanced security and validation will be taken care
          of by the specific recipient of the message.
        </VTypography>
      </div>
      <div class="scope_sub">
        <VTypography size="xl">
          In the above iValut message, the iValut Message Integrity Component (see
          Components Architecture) would use conventional JWT code library would first
          validate the JWT that it has not been tampered with. Then it uses the otp_sig
          that the message is not a spoof. This dual-layered security decreases the
          surface area of attack at the message layer.
        </VTypography>
      </div>
    </div>

    <div class="scope_item">
      <div class="scope_title">
        <VHtag size="sm" tag="h5"> Scope of Document</VHtag>
      </div>
      <div class="scope_sub">
        <VTypography size="xl">
          This document will include information about the following
        </VTypography>
      </div>
      <ul class="scope_lists">
        <li class="scope_list">
          <Vnumber color="greenSm">1.</Vnumber>
          <VTypography size="xl">
            <span>the technical architecture of the iValut Platform</span>
          </VTypography>
        </li>
        <li class="scope_list">
          <Vnumber color="greenSm">2.</Vnumber>
          <VTypography size="xl">
            <span
              >the outline plan and milestones in the development of the platform.</span
            >
          </VTypography>
        </li>
        <li class="scope_list">
          <Vnumber color="greenSm">3.</Vnumber>
          <VTypography size="xl">
            <span
              >the outline plan and milestones in the development of the platform.</span
            >
          </VTypography>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
  import VHtag from '../../UI/Htag/VHtag.vue';
  import Vnumber from '../../UI/Number/Vnumber.vue';
  import VTypography from '../../UI/Typography/VTypography.vue';
</script>

<style lang="scss" scoped>
  .scope {
    margin-bottom: 100px;
    &_code-box {
      padding: 35px 30px;
      width: 100%;
      background: $blackStrong;
      margin-bottom: 35px;
      opacity: 0.9;
    }
    &_title {
      opacity: 0.8;
      margin-bottom: 30px;
    }

    &_list {
      margin-bottom: 15px;
      @include flex(start, center);
      gap: 10px;
      span {
        opacity: 0.6;
      }
    }
    &_sub {
      opacity: 0.6;
      margin-bottom: 25px;
    }
  }
  @include media('max', 'md') {
    .scope {
      padding-right: 15px;
    }
  }
  @include media('max', 'sm') {
    .scope {
      margin-bottom: 60px;
      &_code-box {
        padding: 25px 20px;

        margin-bottom: 30px;
        opacity: 0.9;
      }
    }
  }
</style>
