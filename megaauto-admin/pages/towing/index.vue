<template>
  <div class="mx-auto p-5 space-y-5">
    <!-- Add Price -->
    <AddPrice />

    <div class="bg-slate-200 rounded-lg shadow p-5 space-y-3">
      <!-- Search -->
      <div
        class="flex justify-center sm:justify-between flex-wrap items-center"
      >
        <div>
          <h2 class="font-bold">Towing Prices</h2>
        </div>
        <div>
          <form @submit.prevent="filteredRows" class="flex">
            <input
              type="text"
              placeholder="Search By Name"
              v-model="search"
              class="py-1 px-2 rounded focus:ring-0 focus:border-primary focus:shadow-primary"
            />
            <button
              type="submit"
              class="py-0 px-2 ms-2 text-sm font-medium text-white bg-primary rounded-lg border-primary hover:bg-black hover:border-black focus:ring-0 focus:outline-none"
            >
              <Search class="h-4 w-4" />
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Table -->
      <Table :theadData="tableHeaders" :tableData="filteredRows" />
    </div>
  </div>
</template>

<script>
import AddPrice from "./add-price.vue";
import { Search } from "lucide-vue-next";
import Table from "./table.vue";

export default {
  components: {
    AddPrice,
    Search,
    Table,
  },
  data() {
    return {
      search: "",
      tableHeaders: [
        "#",
        "Location",
        "Start Time",
        "End Time",
        "Price",
        "Status",
        "Action",
      ],
      tableRows: [
        {
          id: 1,
          name: "AAA - CPT Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          price: "7400",
          status: "active",
        },
        {
          id: 2,
          name: "AAA - OR Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          price: "4400",
          status: "active",
        },
        {
          id: 3,
          name: "AAA - WE Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          price: "1400",
          status: "active",
        },
        {
          id: 4,
          name: "AAA - BC Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          price: "2400",
          status: "active",
        },
      ],
    };
  },
  methods: {},
  computed: {
    filteredRows() {
      if (this.search === "") {
        return this.tableRows;
      }
      return this.tableRows.filter((row) => row.name.includes(this.search));
    },
  },
};
</script>
