<template>
  <div id="app">
    <p class="title">Chart.jS Vue</p>
    <p>
      <canvas id="graph4" width="400" height="400"></canvas>
    </p>
  </div>
</template>

<script>
// import Chart from "chart.js/auto";
export default {
  components: {},
  mounted() {
    var ctx = document.getElementById("graph4").getContext("2d");
    var bar = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["1", "2", "3"],
        datasets: [
          {
            label: "Dataset 1",
            data: ["5"],
            borderColor: "red",
            backgroundColor: "red"
          },
          {
            label: "Dataset 2",
            data: ["3", "4"],
            borderColor: "blue",
            backgroundColor: "blue"
          },
          {
            label: "Dataset 2",
            data: ["3"],
            borderColor: "pink",
            backgroundColor: "pink"
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
            text: "Chart.js Pie Chart"
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
