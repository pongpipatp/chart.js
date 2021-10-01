<template>
  <div>
    <h1>Chart Demo</h1>

    <div class="grid">
      <div class="chart">
        <ChartBar />
      </div>
      <div class="chart">
        <ChartDoughnut />
      </div>
      <div class="chart">
        <ChartLine />
      </div>
      <div class="chart">
        <ChartStack />
      </div>
    </div>
  </div>
</template>

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
