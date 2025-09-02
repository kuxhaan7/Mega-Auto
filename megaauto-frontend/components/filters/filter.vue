<template>
  <div class="bg-white border border-gray-100 rounded">
    <div class="bg-gray-100 border p-2">
      <div class="text-base font-bold">
        <h2>Auction Car Finder</h2>
      </div>
    </div>
    <div>
      <!-- Vehicle Type Collapsible -->
      <div class="py-2 border-b">
        <button
          @click="toggleSection('type')"
          class="w-full text-left px-3 py-2 rounded flex justify-between items-center"
          :class="{ 'text-primary': openSections.type }"
        >
          Vehicle Type
          <ChevronUp v-if="openSections.type" class="h-5 w-5" />
          <ChevronDown v-else class="h-5 w-5" />
        </button>
        <div v-if="openSections.type" class="px-3 pb-3">
          <div
            v-for="(option, idx) in filters.type.options"
            :key="idx"
            class="flex items-center mt-3"
          >
            <input
              type="checkbox"
              :id="'type-' + option.value"
              :value="option.value"
              v-model="selectedFilters.type"
              class="mr-2 h-5 w-5 text-primary border-gray-300 rounded focus:ring-0 focus:ring-primary focus:border-primary"
            />

            <label :for="'type-' + option.value" class="text-sm">{{
              option.label
            }}</label>
          </div>
        </div>
      </div>

      <!-- Make Collapsible -->
      <div class="py-2 border-b">
        <button
          @click="toggleSection('make')"
          class="w-full text-left px-3 py-2 rounded flex justify-between items-center"
          :class="{ 'text-primary': openSections.make }"
        >
          Make
          <ChevronUp v-if="openSections.make" class="h-5 w-5" />
          <ChevronDown v-else class="h-5 w-5" />
        </button>
        <div v-if="openSections.make" class="px-3 pb-3">
          <input
            v-model="makeSearch"
            @input="filterMakes"
            type="text"
            placeholder="Search Make"
            class="w-full text-sm py-2 px-3 border border-gray-300 rounded focus:ring-primary focus:border-primary mt-3"
          />
          <div
            v-for="(option, idx) in filteredMakes"
            :key="idx"
            class="flex items-center mt-3"
          >
            <input
              type="checkbox"
              :id="'make-' + option.value"
              :value="option.value"
              v-model="selectedFilters.make"
              class="mr-2 h-5 w-5 text-primary border-gray-300 rounded focus:ring-0 focus:ring-primary focus:border-primary"
            />
            <label :for="'make-' + option.value" class="text-sm">{{
              option.label
            }}</label>
          </div>
        </div>
      </div>

      <!-- Model Collapsible -->
      <div class="py-2 border-b">
        <button
          @click="toggleSection('model')"
          class="w-full text-left px-3 py-2 rounded flex justify-between items-center"
          :class="{ 'text-primary': openSections.model }"
        >
          Model
          <ChevronUp v-if="openSections.model" class="h-5 w-5" />
          <ChevronDown v-else class="h-5 w-5" />
        </button>
        <div v-if="openSections.model" class="px-3 pb-3">
          <input
            v-model="modelSearch"
            @input="filterModels"
            type="text"
            placeholder="Search Model"
            class="w-full text-sm py-2 px-3 border border-gray-300 rounded focus:ring-primary focus:border-primary mt-3"
          />
          <div
            v-for="(option, idx) in filteredModels"
            :key="idx"
            class="flex items-center mt-3"
          >
            <input
              type="checkbox"
              :id="'model-' + option.value"
              :value="option.value"
              v-model="selectedFilters.model"
              class="mr-2 h-5 w-5 text-primary border-gray-300 rounded focus:ring-0 focus:ring-primary focus:border-primary"
            />
            <label :for="'model-' + option.value" class="text-sm">{{
              option.label
            }}</label>
          </div>
        </div>
      </div>

      <!-- Year Collapsible -->
      <div class="py-2 border-b">
        <button
          @click="toggleSection('year')"
          class="w-full text-left px-3 py-2 rounded flex justify-between items-center"
          :class="{ 'text-primary': openSections.year }"
        >
          Year
          <ChevronUp v-if="openSections.year" class="h-5 w-5" />
          <ChevronDown v-else class="h-5 w-5" />
        </button>
        <div v-if="openSections.year" class="px-3 pb-3">
          <div class="flex items-center mt-3">
            <select
              v-model="selectedFilters.yearFrom"
              class="flex-1 text-sm py-2 px-3 border border-gray-300 rounded focus:ring-primary focus:border-primary"
            >
              <option value="">From</option>
              <option
                v-for="(option, idx) in filters.yearFrom.options"
                :key="idx"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            <span class="mx-2">to</span>
            <select
              v-model="selectedFilters.yearTo"
              class="flex-1 text-sm py-2 px-3 border border-gray-300 rounded focus:ring-primary focus:border-primary"
            >
              <option value="">To</option>
              <option
                v-for="(option, idx) in filters.yearTo.options"
                :key="idx"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Sale Date Collapsible -->
      <div class="py-2 border-b">
        <button
          @click="toggleSection('saleDate')"
          class="w-full text-left px-3 py-2 rounded flex justify-between items-center"
          :class="{ 'text-primary': openSections.saleDate }"
        >
          Sale Date
          <ChevronUp v-if="openSections.saleDate" class="h-5 w-5" />
          <ChevronDown v-else class="h-5 w-5" />
        </button>
        <div v-if="openSections.saleDate" class="px-3 pb-3">
          <div
            v-for="(option, idx) in filters.saleDate.options"
            :key="idx"
            class="flex items-center mt-3"
          >
            <input
              type="checkbox"
              :id="'saleDate-' + option.value"
              :value="option.value"
              v-model="selectedFilters.saleDate"
              class="mr-2 h-5 w-5 text-primary border-gray-300 rounded focus:ring-0 focus:ring-primary focus:border-primary"
            />
            <label :for="'saleDate-' + option.value" class="text-sm">{{
              option.label
            }}</label>
          </div>
        </div>
      </div>

      <!-- Apply Filters Button -->
      <div class="m-3">
        <button
          @click="applyFilters"
          class="w-full bg-primary hover:bg-black transition-all duration-300 text-white font-bold py-2 px-4 rounded-md"
        >
          Apply Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronUp, ChevronDown } from "lucide-vue-next";

export default {
  components: {
    ChevronUp,
    ChevronDown,
  },
  props: {
    updatedFilters: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      filters: {
        type: {
          options: [
            { value: "SUV", label: "SUV" },
            { value: "Sedan", label: "Sedan" },
            { value: "Truck", label: "Truck" },
            { value: "Coupe", label: "Coupe" },
            { value: "Convertible", label: "Convertible" },
          ],
        },
        make: {
          options: [
            { value: "Toyota", label: "Toyota" },
            { value: "Honda", label: "Honda" },
            { value: "Ford", label: "Ford" },
            { value: "Chevrolet", label: "Chevrolet" },
            { value: "BMW", label: "BMW" },
          ],
        },
        model: {
          options: [
            { value: "Corolla", label: "Corolla" },
            { value: "Civic", label: "Civic" },
            { value: "Mustang", label: "Mustang" },
            { value: "Camaro", label: "Camaro" },
            { value: "3 Series", label: "3 Series" },
          ],
        },
        yearFrom: {
          options: [
            { value: "2000", label: "2000" },
            { value: "2005", label: "2005" },
            { value: "2010", label: "2010" },
            { value: "2015", label: "2015" },
            { value: "2020", label: "2020" },
          ],
        },
        yearTo: {
          options: [
            { value: "2005", label: "2005" },
            { value: "2010", label: "2010" },
            { value: "2015", label: "2015" },
            { value: "2020", label: "2020" },
            { value: "2025", label: "2025" },
          ],
        },
        saleDate: {
          options: [
            { value: "2023-06-15", label: "June 15, 2023" },
            { value: "2023-07-01", label: "July 1, 2023" },
            { value: "2023-07-15", label: "July 15, 2023" },
            { value: "2023-08-01", label: "August 1, 2023" },
            { value: "2023-08-15", label: "August 15, 2023" },
          ],
        },
      },
      selectedFilters: {
        type: [],
        make: [],
        model: [],
        yearFrom: "",
        yearTo: "",
        saleDate: [],
      },
      openSections: {
        type: true,
        make: true,
        model: false,
        year: false,
        saleDate: false,
      },
      makeSearch: "",
      modelSearch: "",
      filteredMakes: [],
      filteredModels: [],
      filteredSaleDates: [],
    };
  },
  created() {
    this.filteredMakes = [...this.filters.make.options];
    this.filteredModels = [...this.filters.model.options];
    this.filteredSaleDates = [...this.filters.saleDate.options];
  },
  watch: {
    selectedFilters: {
      deep: true,
      handler() {
        this.emitFilters();
      },
    },
    updatedFilters: {
      deep: true,
      handler() {
        this.unCheckFilters();
      },
    },
    showMobileFilter(newVal) {
      if (newVal) {
        this.closeMobileFilter();
      }
    },
  },
  methods: {
    toggleSection(section) {
      this.openSections[section] = !this.openSections[section];
    },
    filterMakes() {
      this.filteredMakes = this.filters.make.options.filter((option) =>
        option.label.toLowerCase().includes(this.makeSearch.toLowerCase())
      );
    },
    filterModels() {
      this.filteredModels = this.filters.model.options.filter((option) =>
        option.label.toLowerCase().includes(this.modelSearch.toLowerCase())
      );
    },
    applyFilters() {
      this.emitFilters();
      this.$emit('close-mobile-filter');
    },

    unCheckFilters() {
      for (const filterType in this.selectedFilters) {
        if (Array.isArray(this.selectedFilters[filterType])) {
          this.selectedFilters[filterType] = this.selectedFilters[
            filterType
          ].filter((value) => this.updatedFilters[filterType]?.includes(value));
        } else {
          if (!this.updatedFilters[filterType]) {
            this.selectedFilters[filterType] = "";
          }
        }
      }
      this.makeSearch = "";
      this.modelSearch = "";
      this.filteredMakes = [...this.filters.make.options];
      this.filteredModels = [...this.filters.model.options];
      this.filteredSaleDates = [...this.filters.saleDate.options];
    },

    emitFilters() {
      const selectedFilters = {
        type: this.selectedFilters.type,
        make: this.selectedFilters.make,
        model: this.selectedFilters.model,
        yearFrom: this.selectedFilters.yearFrom,
        yearTo: this.selectedFilters.yearTo,
        saleDate: this.selectedFilters.saleDate,
      };
      this.$emit("filters-applied", selectedFilters);
    },

    closeMobileFilter() {
      this.$emit("close-mobile-filter");
    },
  },
};
</script>
