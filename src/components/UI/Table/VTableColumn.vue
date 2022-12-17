<template>
  <div class="table">
    <div class="table_body">
      <ul :class="('table_column', `table_column-${column}`)">
        <li class="table_th" v-for="table in header" :key="table">
          <VTypography size="xl"> {{ table }}</VTypography>
        </li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>
:class="('Htag', `Htag_${size}`)"
<script setup>
  import VTypography from '../Typography/VTypography.vue';

  const props = defineProps({
    header: {
      type: Array,
      required: false,
    },
    column: {
      type: String,
      default: 'table_column',
    },
  });
</script>

<style lang="scss" scoped>
  .table {
    &_column {
      &-doc {
        display: grid;
        grid-template-columns: 162px 234px 195px 1fr;
      }
      &-glos {
        display: grid;
        grid-template-columns: 162px 1fr;
      }

      &-arch {
        display: grid;
        grid-template-columns: 180px 148px 1fr;
      }
    }
    &_th {
      border: 1px solid $white;
      padding: 15px 30px;
      @include flex(start, center);
      height: 100%;
      opacity: 0.3;
    }
  }

  @include media('max', 'lg') {
    .table {
      &_column {
        &-doc {
          grid-template-columns: 162px 234px 195px 1fr;
        }
        &-glos {
          grid-template-columns: 140px 1fr;
        }
        &-arch {
          display: grid;
          grid-template-columns: 180px 148px 1fr;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .table {
      &_column {
        &-doc {
          grid-template-columns: 162px 234px 195px 171px;
        }

        &-arch {
          display: grid;
          grid-template-columns: 180px 148px 1fr;
        }
      }
    }
  }
  @include media('max', 'md') {
    .table {
      &_column {
        &-arch {
          display: grid;
          grid-template-columns: 180px 148px 405px;
        }
      }
    }
  }

  @include media('max', 'sm') {
    .table {
      &_th {
        padding: 12px 15px;
      }
      &_column {
        &-doc {
          grid-template-columns: 96px 170px 140px 145px;
        }
        &-glos {
          grid-template-columns: 96px 1fr;
        }

        &-arch {
          display: grid;
          grid-template-columns: 130px 105px 363px;
        }
      }
    }
  }
</style>
