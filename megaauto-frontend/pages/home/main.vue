<template>
  <div>
    <div class="sm:my-5 px-5 sm:px-0">
      <SaleByMake />
    </div>

    <!-- Similar -->
    <div class="my-5 px-5 sm:px-0">
      <div class="mb-4 grid grid-cols-12">
        <h2 class="text-xl font-bold col-span-12 sm:col-span-2">Popular Vehicles</h2>
        <div class="text-primary col-span-12 mt-2 sm:mt-0 sm:col-span-10 text-left gap-3 flex">
          <button class="bg-slate-100 hover:bg-primary hover:text-white transition-all duration-300 text-black px-3 py-1 rounded-full font-base text-sm inline-flex items-center text-center">Buy It Now</button>
          <button class="bg-slate-100 hover:bg-primary hover:text-white transition-all duration-300 text-black px-3 py-1 rounded-full font-base text-sm inline-flex items-center text-center">Salvage Title</button>
          <button class="bg-slate-100 hover:bg-primary hover:text-white transition-all duration-300 text-black px-3 py-1 rounded-full font-base text-sm inline-flex items-center text-center">Clean Title</button>
        </div>
      </div>
      <SimilarVehicles model="" year="2020" make="" isHome="true" />
    </div>
  </div>
</template>

<script>
import SimilarVehicles from "~/components/similar-vehicles.vue";
import SaleByMake from "./saleByMake.vue";

export default {
  components: {
    SimilarVehicles,
    SaleByMake,
  },
  data() {
    return {
      selectedTab: "Salvage",
    };
  },
  methods: {
    changeTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
