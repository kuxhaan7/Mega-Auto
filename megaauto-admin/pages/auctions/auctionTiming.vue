<template>
  <!-- Auction Table -->
  <div class="py-5 px-4 bg-slate-200 rounded-lg shadow">
    <div class="flex justify-center sm:justify-between flex-wrap gap-3 items-center mb-5">
      <h3 class="font-bold">Auction Timing</h3>
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
    <Table
      :theadData="tableHeaders"
      :tableData="filteredRows"
      :from="from"
    />
  </div>
</template>

<script>
import { Search } from "lucide-vue-next";
import Table from "./table.vue";

export default {
  name: "AuctionTiming",
  components: {
    Table,
    Search,
  },
  data() {
    return {
      from: "auctionTiming",
      search: "AAA - ",
      tableHeaders: ["Name", "Start Time", "End Time", "Status", "Action"],
      tableRows: [
        {
          name: "AAA - CPT Canada",
          startTime: "2024-10-22",
          endTime: "2024-10-22",
          status: "inactive",
        },
        {
          name: "AAA - OR Canada",
          startTime: "2024-10-22",
          endTime: "2024-10-22",
          status: "inactive",
        },
        {
          name: "AAA - WE Canada",
          startTime: "2024-10-22",
          endTime: "2024-10-22",
          status: "inactive",
        },
        {
          name: "AAA - BC Canada",
          startTime: "2024-10-22",
          endTime: "2024-10-22",
          status: "inactive",
        },
      ],
    };
  },
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
