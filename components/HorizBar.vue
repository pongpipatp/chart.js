<template>
  <div id="app">
    <p class="title">Chart.jS Vue</p>
    <p>
      <canvas id="graph" width="400" height="400"></canvas>
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    var ctx = document.getElementById("graph").getContext("2d");
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
