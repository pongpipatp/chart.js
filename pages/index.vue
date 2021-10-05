<template>
  <div>
    <h1>Chart Demo</h1>
    <div class="grid">
      <div class="chart">
        <HorizBar />
      </div>
      <div class="chart">
        <StackedBar />
      </div>
      <div class="chart">
        <vertBar />
      </div>
      <div class="chart">
        <pieChart />
      </div>
      <div class="chart">
        <funnelChart />
      </div>
    </div>
  </div>
</template>
<script>
if (process.client) {
  require("chart.js");
  require("chartjs-plugin-funnel");
}
</script>
<style lang="css" scoped>
.grid {
  display: flex;
  gap: 5%;
  width: 50%;
}

.chart {
  height: 60%;
  width: 60%;
}
</style>
