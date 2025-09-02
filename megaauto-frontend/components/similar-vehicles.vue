<template>
  <div>
    <!-- Conditionally render shimmer if data is still loading -->
    <div v-if="isLoading">
      <div class="flex sm:justify-start justify-center items-center gap-4">
        <ShimmerLoader v-for="i in 4" :key="i" />
      </div>
    </div>

    <!-- more than 4 vehicles -->
    <Splide
      v-if="filteredVehicles.length > 4 && !isLoading"
      :options="splideOptions"
    >
      <SplideSlide v-for="(vehicle, index) in filteredVehicles" :key="index" class="flex justify-center items-center">
        <Card :vehicleDetail="vehicle" :isHome="isHome" />
      </SplideSlide>
    </Splide>

    <!-- If vehicles are 4 or fewer -->
    <div v-else-if="!isLoading" class="flex justify-center sm:justify-start flex-wrap items-center gap-4">
      <div v-for="(vehicle, index) in filteredVehicles" :key="index">
        <Card :vehicleDetail="vehicle" :isHome="isHome" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./listing/grid-card.vue";
import { useApi } from "~/composeables/useApi";
import ShimmerLoader from "../components/shimmer-loading.vue";

export default {
  components: {
    Card,
    ShimmerLoader,
  },
  props: {
    model: String,
    year: String,
    make: String,
    isHome: String,
  },
  data() {
    return {
      vehicles: [],
      isLoading: true,
      splideOptions: {
        perPage: 6,
        perMove: 1,
        focus: "",
        type: "loop",
        gap: "1rem",
        rewind: true,
        pagination: false,
        breakpoints: {
          640: { perPage: 1 },
          768: { perPage: 2 },
          1024: { perPage: 3 },
          1280: { perPage: 4 },
        },
      },
    };
  },
  mounted() {
    this.getPGvehicles();
  },
  methods: {
    async getPGvehicles() {
      const { getPGVehicles } = useApi();
      try {
        const data = await getPGVehicles();
        this.vehicles = data;
      } catch (err) {
        alert("Error fetching vehicles. Please try again.");
      }
    },
  },
  computed: {
    filteredVehicles() {
      if (!Array.isArray(this.vehicles)) {
        return [];
      }

      const searchQuery = `${this.year || ""} ${this.make || ""} ${
        this.model || ""
      }`
        .trim()
        .toLowerCase();

      if (!searchQuery) {
        return this.vehicles;
      }

      const searchTerms = searchQuery.split(" ");

      return this.vehicles.filter((vehicle) => {
        const vehicleYear = vehicle.year.toString().toLowerCase();
        const vehicleMake = vehicle.make.toLowerCase();
        const vehicleModel = vehicle.model.toLowerCase();

        const vehicleInfo = `${vehicleYear} ${vehicleMake} ${vehicleModel}`;
        this.isLoading = false;

        return searchTerms.every((term) => vehicleInfo.includes(term));
      });
    },
  },
};
</script>
