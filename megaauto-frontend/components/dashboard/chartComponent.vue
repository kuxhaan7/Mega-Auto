<template>
  <div class="p-5">
    <div class="flex justify-between items-center">
      <h1 class="font-extrabold">{{ chartTitle }}</h1>

      <!-- Filter Buttons -->
        <select
          @change="applyFilter($event)"
          class="w-32 shadow-primary focus:border-primary rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option class="text-black hover:bg-white" value="day">Day</option>
          <option class="text-black hover:bg-white" value="month">Month</option>
          <option class="text-black hover:bg-white" value="year">Year</option>
        </select>
    </div>

    <!-- Chart Canvas -->
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  props: {
    chartTitle: {
      type: String,
      required: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartInstance: null,
    };
  },
  mounted() {
    this.createChart();
  },
  beforeDestroy() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  },
  methods: {
    createChart() {
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      const ctx = this.$refs.chartCanvas.getContext("2d");

      this.chartInstance = new Chart(ctx, {
        type: this.chartData.type,
        data: this.chartData.data,
        options: this.chartOptions,
      });
    },
    filterData(filterType) {
      let newData = { ...this.chartData };

      if (filterType === "day") {
        newData.datasets[0].data = newData.datasets[0].data.slice(0, 1);
      } else if (filterType === "month") {
        newData.datasets[0].data = newData.datasets[0].data.slice(0, 3);
      } else if (filterType === "year") {
        newData.datasets[0].data = newData.datasets[0].data;
      }

      // Update chart data and refresh chart
      this.chartInstance.data = newData.data;
      this.chartInstance.update();
    },
    applyFilter(event) {
      const filterType = event.target.value;
      this.filterData(filterType);
    },
  },
};
</script>
