<template>
  <section id="glossary" class="glossary">
    <div class="glossary_title">
      <VHtag size="md" tag="h4">
        <Vnumber color="green">2.</Vnumber>
        Glossary
      </VHtag>
    </div>
    <div class="glossary_table">
      <VTableColumn column="glos" :header="headerTable.one">
        <VTableRow column="glos" :header="rowTable.one" />
      </VTableColumn>
      <VTableColumn column="glos" :header="headerTable.two">
        <VTableRow column="glos" :header="rowTable.two" />
      </VTableColumn>
      <VTableColumn column="glos" :header="headerTable.three"> </VTableColumn>
    </div>
  </section>
</template>

<script setup>
  import VHtag from '../../UI/Htag/VHtag.vue';
  import Vnumber from '../../UI/Number/Vnumber.vue';
  import VTableColumn from '../../UI/Table/VTableColumn.vue';
  import VTableRow from '../../UI/Table/VTableRow.vue';
  const headerTable = {
    one: ['Term', 'Description'],
    two: [
      'End User',
      'The end-user of the iValut Platform. This is synonymous to the customer base of a Partner',
    ],
    three: ['BaaS', 'Backend-as-a-Service'],
  };
  const rowTable = {
    one: ['Partner', 'iValut Commercial Partner offering Payment Gateway services'],
    two: ['Customer', 'The customer of a Partner'],
  };
</script>

<style lang="scss" scoped>
  .glossary {
    margin-bottom: 75px;
    &_title {
      margin-bottom: 35px;
    }
    &_table {
      overflow-x: auto;
    }
  }
  @include media('max', 'md') {
    .glossary {
      padding-right: 15px;
    }
  }
  @include media('max', 'sm') {
    .glossary {
      &_title {
        margin-bottom: 25px;
      }
      margin-bottom: 40px;
    }
  }
</style>
