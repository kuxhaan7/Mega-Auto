<template>
  <div>
    <h2 class="text-xl font-bold mb-4">{{ tabTitle }} Vehicles</h2>
    <ul class="list-disc pl-5">
      <li v-for="(car, index) in carModels" :key="index" class="mb-2">
        {{ car.name }} ({{ car.count }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selectedTab: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      carModels: [],
    };
  },
  computed: {
    tabTitle() {
      return this.selectedTab;
    },
  },
  watch: {
    selectedTab: {
      immediate: true,
      handler(newVal) {
        this.updateCarModels(newVal);
      },
    },
  },
  methods: {
    updateCarModels(tab) {
      switch (tab) {
        case "Salvage":
          this.carModels = [
            { name: "Toyota Camry 2005", count: 15 },
            { name: "Honda Accord 2008", count: 20 },
            { name: "Ford Focus 2012", count: 10 },
          ];
          break;
        case "Clean Title":
          this.carModels = [
            { name: "BMW 3 Series 2018", count: 30 },
            { name: "Audi A4 2020", count: 25 },
            { name: "Mercedes C-Class 2019", count: 22 },
          ];
          break;
        case "Buy Now":
          this.carModels = [
            { name: "Tesla Model S 2022", count: 50 },
            { name: "Porsche 911 2021", count: 25 },
            { name: "Chevrolet Corvette 2020", count: 18 },
          ];
          break;
        default:
          this.carModels = [];
      }
    },
  },
};
</script>
