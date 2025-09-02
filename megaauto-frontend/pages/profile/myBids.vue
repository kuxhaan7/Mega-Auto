<template>
  <div class="flex justify-between items-center mb-5">
    <h1 class="text-2xl font-bold">My Bids</h1>
    <div>
      <form @submit.prevent="handleSubmit" class="flex">
        <input
          type="text"
          placeholder="Search By VIN"
          v-model="search"
          class="py-1 px-2 rounded focus:ring-0 focus:border-primary focus:shadow-primary"
        />
        <button
          type="submit"
          class="hidden py-0 px-2 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-black hover:border-black focus:ring-0 focus:outline-none"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </form>
    </div>
  </div>
  <!-- Pass headers and data to the table component -->
  <TableComponent :theadData="tableHeaders" :tableData="filteredRows" />
</template>

<script>
import TableComponent from "~/components/dashboard/tableComponent.vue";

export default {
  name: "MyBids",
  components: {
    TableComponent,
  },
  data() {
    return {
      search: "",
      tableHeaders: ["Vehicle", "VIN", "Auction", "Request Type", "Bid Amount", "Status", "Action"],
      tableRows: [
        {
          id: 1,
          vehicle: "2022 Mazda Mazda6",
          vin: "1212121212121212",
          auction: "PG",
          requestType: "Bid",
          bidAmount: "$2999",
          status: "Bid In Process",
        },
        {
          id: 2,
          vehicle: "2024 BMW X6",
          vin: "1212121212121213",
          auction: "EG",
          requestType: "Bid",
          bidAmount: "$199985",
          status: "Bid In Process",
        },
        {
          id: 3,
          vehicle: "2023 Honda Civic",
          vin: "1212121212121214",
          auction: "OR",
          requestType: "Bid",
          bidAmount: "$99778",
          status: "Bid In Process",
        },
      ],
    };
  },
  computed: {
    filteredRows() {
      if (this.search === "") {
        return this.tableRows;
      }
      return this.tableRows.filter(row => row.vin.includes(this.search));
    },
  },
  methods: {
    handleSubmit() {
      console.log("Search VIN:", this.search);
    },
  },
};
</script>
