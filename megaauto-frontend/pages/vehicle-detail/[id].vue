<template>
  <div class="mx-auto p-5">
    <div v-if="!vehicleDetail" class="shimmer-page">
      <!-- Vehicle Title and Watch Button Shimmer -->
       <div class="flex justify-between items-center">
         <div class="shimmer-title"></div>
         <div class="shimmer-button"></div>
       </div>

      <!-- Section Loaders -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3">
        <div class="shimmer-section md:col-span-5"></div>
        <div class="shimmer-section md:col-span-4"></div>
        <div class="shimmer-section md:col-span-3"></div>
      </div>
    </div>

    <div v-else>
      <!-- Vehicle Title and Watch Button -->
      <div class="border-b pb-3 border-gray-300">
        <div class="flex justify-between">
          <div class="flex items-center">
            <h3 class="text-primary text-2xl font-bold">
              {{ vehicleDetail?.year }} {{ vehicleDetail?.make }}
              {{ vehicleDetail?.model }} {{ vehicleDetail?.subModel }}
            </h3>
          </div>
          <a href="/vehicle-listing" class="text-primary md:d-none text-sm">
            Back to Listing
          </a>
        </div>
      </div>

      <!-- Sections (Images, Detail, Bid) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 py-3">
        <div class="md:col-span-5">
          <ImagesSection :vehicle="vehicleDetail" />
        </div>
        <div class="md:col-span-4">
          <DetailSection :vehicle="vehicleDetail" />
        </div>
        <div class="md:col-span-3">
          <BidSection :vehicle="vehicleDetail" />
        </div>
      </div>
    </div>

    <div class="mx-auto py-5">
      <SimilarVehicles :model="vehicleDetail?.model" :year="vehicleDetail?.year" :make="vehicleDetail?.make" />
    </div>
  </div>
</template>

<script>
import ImagesSection from "./images-section.vue";
import DetailSection from "./detail-section.vue";
import BidSection from "./bid-section.vue";
import SimilarVehicles from "../components/similar-vehicles.vue";
import { useApi } from "~/composeables/useApi";

export default {
  components: {
    ImagesSection,
    DetailSection,
    BidSection,
    SimilarVehicles,
  },
  name: "vehicle-detail",
  data() {
    return {
      vehicleDetail: null,
    };
  },
  mounted() {
    this.getPGVehicleDetail();
  },
  methods: {
    async getPGVehicleDetail() {
      const { getPGVehicles } = useApi(); 

      try {
        const data = await getPGVehicles();
        this.vehicleDetail = data.find(
          (vehicle) => vehicle.vin === this.$route.params.id
        );
        console.log(this.vehicleDetail);
      } catch (err) {
        alert("Error fetching vehicle details. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.shimmer-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.shimmer-title {
  height: 24px;
  width: 20%;
  background: #f6f7f8;
  background-image: linear-gradient(90deg, #f6f7f8 0%, #edeef1 50%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

.shimmer-button {
  height: 40px;
  width: 120px;
  background: #f6f7f8;
  background-image: linear-gradient(90deg, #f6f7f8 0%, #edeef1 50%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

.shimmer-section {
  height: 600px;
  background: #f6f7f8;
  background-image: linear-gradient(90deg, #f6f7f8 0%, #edeef1 50%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>