<template>
  <div id="app">
    <p class="title">Chart.jS Vue</p>
    <p>
      <canvas id="graph5" width="400" height="400"></canvas>
    </p>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  components: {},
  mounted: function() {
    var ctx = document.getElementById("graph5").getContext("2d");
    var bar = new Chart(ctx, {
      type: "funnel",
      data: {
        labels: ["1", "2"],
        datasets: [
          {
            label: "Dataset 1",
            data: ["10", "9"],
            borderColor: "red",
            backgroundColor: "red"
          },
          {
            label: "Dataset 2",
            data: ["5", "2"],
            borderColor: "blue",
            backgroundColor: "blue"
          }
        ]
      },
      options: {
        indexAxis: "y",
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: "right"
          },
          title: {
            display: true,
            text: "Chart.js Horizontal Bar Chart"
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
