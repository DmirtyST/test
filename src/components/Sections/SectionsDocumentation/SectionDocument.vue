<template>
  <section id="document" class="document">
    <div class="document_title">
      <VHtag size="md" tag="h4">
        <Vnumber color="green">1.</Vnumber>
        Document Version
      </VHtag>
    </div>

    <div class="document_table">
      <VTableColumn column="doc" :header="headerTable">
        <VTableRow column="doc" :header="rowTable" />
      </VTableColumn>
    </div>
  </section>
</template>

<script setup>
  import VHtag from '../../UI/Htag/VHtag.vue';
  import Vnumber from '../../UI/Number/Vnumber.vue';
  import VTableColumn from '../../UI/Table/VTableColumn.vue';
  import VTableRow from '../../UI/Table/VTableRow.vue';
  const headerTable = ['Version', 'Description', 'Author', 'Date'];
  const rowTable = ['1.0', 'Initial Document', 'Terry Lee', '01 Aug 2019'];
  const tableSizeColums = '162px 200px 150px 140px';
</script>

<style lang="scss" scoped>
  .document {
    margin-bottom: 70px;

    &_title {
      margin-bottom: 35px;
    }
  }

  @include media('max', 'md') {
    .document {
      margin-bottom: 40px;
      &_title {
        margin-right: 15px;
      }
      &_table {
        scrollbar-color: #55ac58 #303030;
        ::-webkit-scrollbar-track-piece {
          background-color: #303030;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #55ac58;
        }
        overflow-x: scroll;
        padding-bottom: 40px;
      }
    }
  }

  @include media('max', 'sm') {
    .document {
      margin-bottom: 40px;
      &_title {
        margin-bottom: 20px;
      }
    }
  }
</style>
