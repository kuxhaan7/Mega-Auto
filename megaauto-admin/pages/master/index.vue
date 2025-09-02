<template>
  <div class="mx-auto p-5 space-y-4">
    <!-- Search -->
    <div class="py-3 px-4 bg-slate-200 rounded-lg shadow">
      <div class="grid sm:grid-cols-2 gap-3 items-center">
        <div>
          <button
            @click="toggleAddMaster()"
            class="px-4 py-1 bg-primary text-white rounded hover:bg-black transition-all duration-500"
          >
            Add Master
          </button>
        </div>
        <div class="flex sm:justify-end">
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
    </div>

    <!-- Add Master  Form -->
    <div v-if="addMaster" class="py-3 px-4 bg-green-200 rounded-lg shadow">
      <AddMaster />
    </div>

    <!-- Master Table -->
    <div class="px-4 py-5 bg-slate-200 rounded-lg shadow">
      <Table :theadData="theadData" :tableData="filteredRows" />
    </div>
  </div>
</template>

<script>
import Table from "./table.vue";
import AddMaster from "./add-master.vue";
import { Search } from "lucide-vue-next";

export default {
  name: "master",
  components: {
    Table,
    AddMaster,
    Search
  },
  data() {
    return {
      search: "",
      theadData: ["Created At", "Master Type", "Name", "Status", "Action"],
      tableData: [
        {
          createdAt: "30-10-2024",
          categoryName: "Seltos",
          type: "Make",
          status: "active",
        },
        {
          createdAt: "30-10-2024",
          categoryName: "Corolla",
          type: "Make",
          status: "pending",
        },
      ],
      addMaster: false,
    };
  },
  methods: {
    toggleAddMaster() {
      this.addMaster = !this.addMaster;
    },
    searchCustomers() {
      alert(this.searchQuery);
    },
  },
  computed: {
    filteredRows() {
      if (this.search === "") {
        return this.tableData;
      }
      return this.tableData.filter((row) => row.type.includes(this.search));
    },
  },
};
</script>
