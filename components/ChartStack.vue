<template>
  <b-card title="Stack">
    <b-card img-bottom>
      <ChartBarBase :chart-data="chartData" />
    </b-card>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      chartData: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],

        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: "Data Two",
            backgroundColor: "#3D5B96",
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: "Data Three",
            backgroundColor: "#1EFFFF",
            data: [20, 10, 12, 33, 22, 4, 0]
          }
        ]
      };
    }
  }
};
</script>
