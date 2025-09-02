<template>
  <div class="py-5 px-4 bg-slate-200 rounded-lg shadow">
    <div class="flex justify-center sm:justify-between flex-wrap gap-3 items-center mb-5">
      <h3 class="text-xl font-bold">Auction Page Structure</h3>
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
    <Table :theadData="tableHeaders" :tableData="filteredRows" :from="from" />
  </div>
</template>

<script>
import Table from "./table.vue";
import { Search } from "lucide-vue-next";

export default {
  components: {
    Table,
    Search,
  },
  data() {
    return {
      from: "auctionPage",
      search: "AAA - ",
      tableHeaders: [
        "Order #",
        "Name",
        "Start Time",
        "End Time",
        "Status",
        "Action",
      ],
      tableRows: [
        {
          id: 1,
          name: "AAA - CPT Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          status: "active",
        },
        {
          id: 2,
          name: "AAA - OR Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          status: "active",
        },
        {
          id: 3,
          name: "AAA - WE Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          status: "active",
        },
        {
          id: 4,
          name: "AAA - BC Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          status: "active",
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
