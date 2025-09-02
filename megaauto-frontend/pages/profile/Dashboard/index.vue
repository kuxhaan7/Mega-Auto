<template>
  <div class="mt-2 flex justify-between items-center flex-wrap">
    <KPI />
  </div>

  <!-- Chart Section -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
    <!-- Bar Chart with Data Set 1 -->
    <div>
      <Chart
        :chartTitle="'Bar Chart - Sales'"
        :chartData="barChartData"
        :chartOptions="chartOptions"
      />
    </div>

    <!-- Line Chart with Data Set 2 -->
    <div>
      <Chart
        :chartTitle="'Line Chart - Revenue'"
        :chartData="lineChartData"
        :chartOptions="chartOptions"
      />
    </div>
  </div>
</template>

<script>
import Chart from "~/components/dashboard/chartComponent.vue";
import KPI from "./kpi.vue";

export default {
  components: {
    KPI,
    Chart,
  },
  data() {
    return {
      barChartData: {
        type: "bar",
        data: {
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              label: "Sales",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
              data: [12, 19, 3, 5, 2],
            },
          ],
        },
      },
      lineChartData: {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Revenue",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
              data: [20, 30, 15, 40, 35, 50],
            },
          ],
        },
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
};
</script>
