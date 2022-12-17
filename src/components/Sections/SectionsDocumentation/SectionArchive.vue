<template>
  <section id="archive" class="archive">
    <div class="archive_item">
      <div class="archive_sub-title">
        <VHtag size="sm" tag="h5"> Tech Stack</VHtag>
      </div>
      <div class="archive_sub">
        <VTypography size="xl">
          While it is our every intention to use existing off-the-shelf software
          components, we will not only need to glue code all those components into a
          coherent platform offering, our core business logic would need to be developed
          in-house. In this regards, Scala - Java, Slick.
        </VTypography>
      </div>
      <div class="archive_sub">
        <VTypography size="xl">
          The table below shows a non-exhaustive list of technologies we will be using.
          Some of these technologies are provided by Amazon Web Services.
        </VTypography>
      </div>
    </div>
    <div class="archive_table">
      <VTableColumn column="arch" :header="headerTable.one">
        <VTableRow column="arch" :header="rowTable.one" />
      </VTableColumn>
      <VTableColumn column="arch" :header="headerTable.two">
        <VTableRow column="arch" :header="rowTable.two" />
      </VTableColumn>
      <VTableColumn column="arch" :header="headerTable.three">
        <VTableRow column="arch" :header="rowTable.three" />
      </VTableColumn>
      <VTableColumn column="arch" :header="headerTable.four">
        <VTableRow column="arch" :header="rowTable.four" />
      </VTableColumn>
    </div>
    <div class="archive_sub">
      <VTypography size="xl">
        We also extensively integrate 3rd party platforms into our system. These software
        are non-exhaustively listed below
      </VTypography>
    </div>
  </section>
</template>

<script setup>
  import VTypography from '../../UI/Typography/VTypography.vue';
  import VTableColumn from '../../UI/Table/VTableColumn.vue';
  import VTableRow from '../../UI/Table/VTableRow.vue';
  import VHtag from '../../UI/Htag/VHtag.vue';
  const headerTable = {
    one: ['Term', 'Version', 'Purpose'],
    two: ['Slick [5]', '3.3.0', 'Functional Database query and access library for Scala'],
    three: ['AWS Lambda Function [7]', '-', 'Auto-scaling PostgreSQL database layer'],
    four: ['Terraform [10]', '-', 'Infrastructure as Code platform'],
  };
  const rowTable = {
    one: [
      'Terraform [10]',
      'PostgreSQL',
      'Primary development language of the iValut Platform',
    ],
    two: [
      'AWS Aurora Serverless [6]',
      'PostgreSQL',
      'Auto-scaling PostgreSQL database layer',
    ],
    three: [
      'Python [8]',
      '3.7',
      'All Lambda functions are written in Python. The actual tasks are encoded within each lambda function.',
    ],
    four: [
      'Github [11]',
      '-',
      'Storage of source codes, Terraform scripts, Python Lambda Function codes',
    ],
  };
</script>

<style lang="scss" scoped>
  .archive {
    margin-bottom: 50px;
    &_item {
      @include flex(start, start, column);
      gap: 20px;
      margin-bottom: 50px;
    }
    &_table {
      margin-bottom: 50px;
    }
    &_sub-title {
      margin-bottom: 10px;
      opacity: 0.8;
    }
    &_sub {
      opacity: 0.6;
    }
  }
  @include media('max', 'md') {
    .archive {
      &_item,
      &_sub {
        padding-right: 15px;
      }

      &_table {
        overflow-x: hidden;
        overflow: scroll;
        scrollbar-color: transparent transparent;
      }
    }
  }

  @include media('max', 'sm') {
    .archive {
      margin-bottom: 30px;
      &_table {
        margin-bottom: 30px;
      }
      &_sub-title {
        margin-bottom: 0px;
      }
      &_item {
        gap: 15px;
        margin-bottom: 30px;
      }
    }
  }
</style>
