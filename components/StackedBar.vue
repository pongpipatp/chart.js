<template>
  <div id="app">
    <p class="title">Chart.jS Vue</p>
    <p>
      <canvas id="graph2" width="400" height="400"></canvas>
    </p>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  components: {},
  mounted: function() {
    var ctx = document.getElementById("graph2").getContext("2d");
    var bar = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1", "2", "3"],
        datasets: [
          {
            label: "Dataset 1",
            data: ["5", "-10", "6"],
            borderColor: "red",
            backgroundColor: "red"
          },
          {
            label: "Dataset 2",
            data: ["1", "-2", "3"],
            borderColor: "blue",
            backgroundColor: "blue"
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Chart.js Bar Chart - Stacked"
          }
        },
        responsive: true,
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true
          }
        }
      }
    });
    console.log(bar);
  },
  data() {
    return {};
  }
};
</script>
