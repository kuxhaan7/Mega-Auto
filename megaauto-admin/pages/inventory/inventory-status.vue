<template>
  <div
    class="mt-5 py-3 px-5 bg-slate-200 border border-slate-200 rounded shadow"
  >
    <div class="grid sm:grid-cols-2 items-center gap-5">
      <div>
        <h2 class="font-bold text-xl">Inventory Status</h2>
      </div>
      <div class="flex justify-center sm:justify-end space-x-4">
        <input
          type="date"
          class="border border-slate-200 rounded p-2 w-60 sm:w-64"
          v-model="selectedDate"
        />
        <button
          class="bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </div>
    <!--  -->
    <div class="grid sm:grid-cols-4 gap-5 mt-5">
      <div
        class="bg-white border shadow-lg rounded-lg p-4"
        v-for="item in inventory"
        :key="item.id"
      >
        <h3 class="font-bold">{{ item.source }}</h3>
        <div class="mt-3 space-y-3">
          <div class="flex justify-between items-center">
            <span>Total</span>
            <span class="font-bold">{{ item.total }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span>Approved</span>
            <span class="font-bold">{{ item.approved }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span>unApproved</span>
            <span class="font-bold">{{ item.unApproved }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inventory-status",
  data() {
    return {
      inventory: [
        {
          id: "1",
          source: "PG",
          approved: "500",
          unApproved: "350",
          total: "850",
        },
        { id: "2", source: "ST", approved: "90", unApproved: "300" },
        { id: "3", source: "M", approved: "50", unApproved: "350" },
        { id: "4", source: "CPT", approved: "150", unApproved: "350" },
      ],
      selectedDate: null,
    };
  },
};
</script>

