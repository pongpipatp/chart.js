<template>
  <div id="app">
    <p class="title">Chart.jS Vue</p>
    <p>
      <canvas id="chart-area" ref="graph6" width="400" height="400"></canvas>
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    var config = {
      type: "funnel",
      data: {
        datasets: [
          {
            data: [30, 60, 90],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
          }
        ],
        labels: ["Red", "Blue", "Yellow"]
      },
      options: {
        responsive: true,
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Chart.js Funnel Chart"
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    };

    var ctx = document.getElementById("chart-area").getContext("2d");
    new Chart(ctx, config);
  },
  data() {
    return {};
  }
};
</script>
