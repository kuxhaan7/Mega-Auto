<template>
  <div class="mt-2 flex justify-between items-center p-5 flex-wrap">
    <div v-for="(kpi, index) in kpis" :key="index">
      <KPI :kpiTitle="kpi.title" :kpiValue="kpi.value" :icon="kpi.icon" />
    </div>
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
import {
  BriefcaseIcon,
  ClockIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  XCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/24/outline";
import KPI from "../../components/dashboard/kpiComponent.vue";

export default {
  components: {
    Chart,
    KPI,
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
      kpis: [
        { title: "Total Bid", value: 100, icon: BriefcaseIcon },
        { title: "Bids In Process", value: 20, icon: ClockIcon },
        { title: "Won", value: 12, icon: CheckCircleIcon },
        { title: "To Be Paid", value: 4, icon: CurrencyDollarIcon },
        { title: "Not Won", value: 2, icon: XCircleIcon },
        { title: "Awaiting Approval", value: 5, icon: ExclamationCircleIcon },
      ],
    };
  },
};
</script>
