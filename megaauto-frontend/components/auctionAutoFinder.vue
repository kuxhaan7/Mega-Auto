<template>
  <div
    class="bg-cover bg-center py-8 text-center inset-0 bg-black bg-opacity-30 sm:backdrop-blur-md"
    :style="backgroundStyle"
  >
    <div class="mb-5">
      <p class="text-4xl font-bold text-white mb-2">Auction Auto Finder</p>
      <span class="text-base font-light text-white">
        Repairable & Salvage Cars for Sale. No Dealer License is Required to Bid
        - Open to Public Buyers.
      </span>
    </div>
    <!-- Search Filters -->
    <div
      class="md:w-[1050px] sm:mx-auto m-5"
    >
      <div class="md:backdrop-blur-md bg-white bg-opacity-20 shadow-lg py-2 px-2 rounded">
        <!-- Advanced Search -->
        <div class="flex justify-between items-center">
          <span class="text-base font-bold text-white mb-2"
            >Auction Auto Finder</span
          >
          <span class="text-xs underline text-slate-400 mb-2"
            >Advanced Search</span
          >
        </div>
        <!-- Search -->
        <div
          class="bg-white rounded py-2 pr-2 sm:px-1 flex flex-col sm:flex-row justify-between items-center gap-2"
        >
          <div
            class="flex flex-col sm:flex-row justify-between gap-2 w-full sm:w-3/4"
          >
            <!-- Make -->
            <div class="w-full sm:w-[30%] relative mb-2 sm:mb-0">
              <label
                for="make"
                class="text-[12px] text-start absolute top-[5px] left-4 text-slate-400"
                >Make</label
              >
              <select
                v-model="selectedMake"
                class="text-sm pt-4 pl-[12px] w-full border-0 text-gray-700 m-1 focus:ring-primary focus:rounded"
              >
                <option value="" disabled selected>All Makes</option>
                <option v-for="make in makes" :key="make" :value="make">
                  {{ make }}
                </option>
              </select>
            </div>
            <!-- Model -->
            <div
              class="w-full sm:w-[30%] relative mb-2 sm:mb-0 sm:border-l sm:border-gray-200"
            >
              <label
                for="model"
                class="text-[12px] text-start absolute top-[5px] left-4 text-slate-400"
                >Model</label
              >
              <select
                v-model="selectedModel"
                class="text-sm pt-4 pl-[12px] w-full border-0 text-gray-700 m-1 focus:ring-primary focus:rounded"
              >
                <option value="" disabled selected>All Models</option>
                <option v-for="model in models" :key="model" :value="model">
                  {{ model }}
                </option>
              </select>
            </div>
            <div class="flex gap-2 justify-between items-center sm:w-[40%]">
              <!-- Year From -->
              <div
                class="w-full relative sm:border-l sm:border-gray-200"
              >
                <label
                  for="yearFrom"
                  class="text-[12px] text-start absolute top-[5px] left-4 text-slate-400"
                  >Year From</label
                >
                <select
                  v-model="yearFrom"
                  class="text-sm pt-4 pl-[12px] w-full border-0 text-gray-700 m-1 focus:ring-primary focus:rounded"
                >
                  <option value="" disabled selected>All Years</option>
                  <option v-for="year in years" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
              </div>
              <!-- Year To -->
              <div
                class="w-full relative border-l border-gray-200"
              >
                <label
                  for="yearTo"
                  class="text-[12px] text-start absolute top-[5px] left-4 text-slate-400"
                  >Year To</label
                >
                <select
                  v-model="yearTo"
                  class="text-sm pt-4 pl-[12px] w-full border-0 text-gray-700 m-1 focus:ring-primary focus:rounded"
                >
                  <option value="" disabled selected>All Years</option>
                  <option v-for="year in years" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <!-- Search -->
          <div class="w-full sm:w-1/4 flex justify-end mt-2 sm:mt-0">
            <button
              @click="search"
              class="bg-primary text-white rounded hover:bg-primary/80 p-2 m-1 w-full"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <!-- Categories -->
    <div class="flex gap-2 mt-3">
      <!-- Categories -->
      <button
        v-for="category in categories"
        :key="category"
        class="px-3 py-1 bg-white rounded-full text-center shadow-md text-slate-600 text-sm hover:text-white hover:bg-primary transition-all duration-300"
      >
        {{ category }}
      </button>
    </div>
    </div>
  </div>
</template>

<script>
import mobileBg from "~/assets/img/banner-search-bid-mob.webp";
import desktopBg from "~/assets/img/banner-search-bid-deck.webp";

export default {
  data() {
    return {
      selectedMake: "",
      selectedModel: "",
      yearFrom: "",
      yearTo: "",
      backgroundImage: null,
      makes: ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"],
      models: ["Camry", "Civic", "F-150", "Silverado", "3 Series"],
      years: Array.from({ length: 30 }, (_, i) => 2024 - i),
      categories: ["Sedans", "SUVs", "Trucks", "Luxury"],
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundColor: "#f0f0f0", // Fallback color
        backgroundImage: this.backgroundImage
          ? `url(${this.backgroundImage})`
          : "none",
      };
    },
  },
  methods: {
    search() {
      console.log("Searching with:", {
        make: this.selectedMake,
        model: this.selectedModel,
        yearFrom: this.yearFrom,
        yearTo: this.yearTo,
      });
      //   this.$router.push({
      //     path: '/auction-auto-finder',
      //     query: {
      //       make: this.selectedMake,
      //       model: this.selectedModel,
      //       yearFrom: this.yearFrom,
      //       yearTo: this.yearTo,
      //     }
      //   });
    },
    loadBackgroundImage() {
      const image = new Image();
      image.onload = () => {
        this.backgroundImage = window.innerWidth >= 1024 ? desktopBg : mobileBg;
      };
      image.onerror = () => {
        console.error("Failed to load background image");
      };
      image.src = window.innerWidth >= 1024 ? desktopBg : mobileBg;
    },
  },
  mounted() {
    this.loadBackgroundImage();
    window.addEventListener("resize", this.loadBackgroundImage);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.loadBackgroundImage);
  },
};
</script>

<style scoped>
.relative {
  position: relative;
}
</style>
