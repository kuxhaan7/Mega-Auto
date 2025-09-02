<template>
  <!-- Loader -->
  <Loader v-if="filterLoader" />

  <div class="mx-auto w-full p-5">
    <div class="border-b pb-3 border-gray-200">
      <div class="flex justify-between md:items-end flex-col md:flex-row">
        <div>
          <span class="text-slate-400 text-xs">Mega Auto Auctions</span>
          <h3 class="text-black text-xl mt-1 md:text-2xl font-bold">
            Salvage Vehicles for Sale
          </h3>
        </div>
        <div class="mt-1">
          <span class="text-slate-500 text-sm">
            Showing Results {{ vehicles.length }} of
            {{ vehicles.length }}
          </span>
        </div>
        <!-- Mobile Filter Button -->
        <div class="flex mt-3 md:hidden">
          <button
            @click="openMobileFilter"
            class="bg-primary text-white px-4 py-1 rounded-full shadow text-base flex items-center"
          >
            <SlidersHorizontal class="w-4 h-4 mr-2" />
            Filter
            <span class="bg-white text-primary px-2 py-1 rounded-full text-xs ml-2">{{ filterCount }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 py-5">
      <!-- Desktop Filter (hidden on small screens) -->
      <div class="col-span-1 sm:col-span-3 md:col-span-2 hidden md:block">
        <Filter
          @filters-applied="handleFiltersApplied"
          :updatedFilters="updatedFilters"
        />
      </div>

      <!-- Vehicle -->
      <div class="col-span-1 sm:col-span-8 md:col-span-10">
        <!-- Search Result and Panel -->
        <div class="flex justify-between pb-3">
          <div class="text-slate-500 flex flex-wrap items-center gap-2">
            <div v-for="(filter, key) in filters" :key="key" class="flex flex-wrap">
              <div
                v-if="Array.isArray(filter) && filter.length"
                class="flex items-center gap-2 flex-wrap"
              >
                <div
                  v-for="(value, index) in filter"
                  :key="index"
                  class="pl-3 pr-2 py-1 border-primary border rounded-full text-primary text-sm"
                >
                  <div class="flex items-center gap-1">
                    {{ value }}
                    <X
                      class="w-4 h-4 cursor-pointer"
                      @click="removeFilter(key, value)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                v-if="Object.keys(filters).length > 0"
                @click="clearAllFilters"
                class="text-slate-500 text-sm px-2 py-1 hover:text-primary"
              >
                Reset All
              </button>
            </div>
          </div>

          <!-- Hide toggle button on mobile -->
          <div class="hidden md:flex items-center gap-2">
            <button
              @click="toggleView"
              class="flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-md text-slate-500 hover:text-black"
            >
              <ListIcon v-if="currentViewType === 'grid'" class="w-5 h-5" />
              <GridIcon v-else class="w-5 h-5" />
              {{ currentViewType === "grid" ? "View List" : "View Grid" }}
            </button>
          </div>
        </div>

        <!-- Show shimmer loading -->
        <div
          v-if="isLoading"
          class="flex flex-wrap gap-4 justify-between items-center"
        >
          <div v-for="i in 12" :key="i">
            <Shimmer />
          </div>
        </div>

        <!-- Show vehicles once loaded -->
        <div v-else>
          <div>
            <div
              v-if="currentViewType === 'grid'"
              class="flex justify-center sm:justify-between align-center gap-4 flex-wrap"
            >
              <div
                v-for="vehicle in visibleVehicles"
                :key="vehicle.id"
                class="flex justify-center"
              >
                <GridCard :vehicleDetail="vehicle" />
              </div>
            </div>

            <div v-else>
              <div v-for="vehicle in visibleVehicles" :key="vehicle.id">
                <ListCard :vehicleDetail="vehicle" />
              </div>
            </div>
          </div>

          <!-- Virtual scrolling -->
          <div
            v-if="virtualizer"
            :style="{
              height: virtualizer.totalSize + 'px',
              position: 'relative',
            }"
          >
            <div
              v-for="index in virtualizer.items"
              :key="index"
              :style="{
                transform: `translateY(${virtualizer.getItemOffset(index)}px)`,
              }"
            >
              <GridCard
                v-if="currentViewType === 'grid'"
                :vehicleDetail="vehicles[index.index]"
              />
              <ListCard v-else :vehicleDetail="vehicles[index.index]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Filter Modal -->
  <Transition name="slide-up">
    <div v-if="showMobileFilter" class="fixed inset-0 bg-white z-50 md:hidden">
      <div class="h-full overflow-y-auto">
        <div class="flex justify-between items-center p-4 border-b">
          <h2 class="text-lg font-bold">Filters</h2>
          <button @click="closeMobileFilter" class="text-gray-500">
            <span class="sr-only">Close</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="p-4">
          <Filter
          @filters-applied="handleFiltersApplied"
          :updatedFilters="updatedFilters"
          @close-mobile-filter="closeMobileFilter"
        />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import Filter from "~/components/filters/filter.vue";
import GridCard from "~/components/listing/grid-card.vue";
import ListCard from "~/components/listing/list-card.vue";
import Shimmer from "~/components/shimmer-loading.vue";
import Loader from "~/components/loader.vue";
import { ListIcon, GridIcon, X, SlidersHorizontal } from "lucide-vue-next";
import { useApi } from "~/composeables/useApi";
import { useVirtualizer } from "@tanstack/vue-virtual";

export default {
  components: {
    Filter,
    GridCard,
    ListCard,
    Shimmer,
    ListIcon,
    GridIcon,
    X,
    Loader,
    SlidersHorizontal,
  },
  name: "vehicle-listing",
  data() {
    return {
      vehicles: [],
      filters: {},
      updatedFilters: {},
      isLoading: true,
      filterLoader: false,
      viewType: "grid",
      virtualizer: null,
      isMobile: false,
      filterCount: "0",
      showMobileFilter: false,
    };
  },
  mounted() {
    this.getPGvehicles();
    this.checkMobileScreen();
    window.addEventListener("resize", this.checkMobileScreen);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobileScreen);
  },
  methods: {
    async getPGvehicles() {
      const { getPGVehicles } = useApi();
      try {
        this.isLoading = true;
        const data = await getPGVehicles();
        this.vehicles = data;
        this.initializeVirtualizer();
      } catch (err) {
        alert("Error fetching Container. Please try again.");
      } finally {
        this.isLoading = false;
      }
    },
    handleFiltersApplied(filters) {
      this.filterLoader = true;
      this.filters = Object.entries(filters).reduce((acc, [key, value]) => {
        if (Array.isArray(value) && value.length > 0) {
          acc[key] = value;
        } else if (typeof value === "string" && value.trim() !== "") {
          acc[key] = value;
        }
        return acc;
      }, {});
      this.filterCount = Object.values(this.filters).flat().length;
      setTimeout(() => {
        this.filterLoader = false;
      }, 1000);
    },
    removeFilter(key, value) {
      this.filters[key] = this.filters[key].filter((item) => item !== value);
      this.updatedFilters = this.filters;
      if (this.filters[key].length === 0) {
        delete this.filters[key];
      }
    },
    toggleView() {
      if (!this.isMobile) {
        this.viewType = this.viewType === "list" ? "grid" : "list";
        this.initializeVirtualizer();
      }
    },
    initializeVirtualizer() {
      const itemSize = this.viewType === "grid" ? 0 : 345;
      this.virtualizer = useVirtualizer({
        count: this.vehicles.length,
        getScrollElement: () => document.documentElement,
        estimateSize: () => itemSize,
        overscan: 5,
      });
    },
    checkMobileScreen() {
      this.isMobile = window.innerWidth < 768;
      this.viewType = this.isMobile ? "grid" : this.viewType;
      this.initializeVirtualizer();
    },
    clearAllFilters() {
      this.filters = {};
      this.updatedFilters = {};
    },
    openMobileFilter() {
      this.showMobileFilter = true;
    },
    closeMobileFilter() {
      this.showMobileFilter = false;
    },
  },
  computed: {
    visibleVehicles() {
      if (this.virtualizer) {
        return this.virtualizer
          .getVirtualItems()
          .map((virtualItem) => this.vehicles[virtualItem.index]);
      }
      return this.filteredVehicles();
    },
    currentViewType() {
      return this.isMobile ? "grid" : this.viewType;
    },
  },
};
</script>
