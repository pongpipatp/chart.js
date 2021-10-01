import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ["chartData"],
  data() {
    return {
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
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
