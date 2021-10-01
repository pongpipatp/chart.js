<template>
  <div id="app">
    <p class="title">Chart.jS Vue</p>
    <p>
      <canvas id="graph3" width="400" height="400"></canvas>
    </p>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  components: {},
  mounted: function() {
    var ctx = document.getElementById("graph3").getContext("2d");
    var bar = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1", "2"],
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
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart"
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
