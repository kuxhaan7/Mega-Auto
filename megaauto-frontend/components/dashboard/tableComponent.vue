<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          <th
            v-for="(header, index) in theadData"
            :key="index"
            class="px-6 py-3"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in tableData"
          :key="row.id"
          v-show="!row.deleted"
          class="bg-white border-b hover:bg-gray-50"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {{ row.vehicle }}
          </th>
          <td class="px-6 py-4">{{ row.vin }}</td>
          <td class="px-6 py-4">{{ row.auction }}</td>
          <td class="px-6 py-4">{{ row.requestType }}</td>
          <td class="px-6 py-4">
            <div v-if="!row.editing">{{ row.bidAmount }}</div>
            <div v-else>
              <input
                type="text"
                v-model="row.editedBidAmount"
                class="py-1 px-2 border rounded"
              />
            </div>
          </td>
          <td class="px-6 py-4">{{ row.status }}</td>
          <td class="px-6 py-4 text-right">
            <!-- Action buttons -->
            <div v-if="!row.editing" class="flex justify-between">
              <button
                @click="editRow(row)"
                class="text-primary hover:underline"
              >
                Edit
              </button>
              <button
                @click="deleteRow(row)"
                class="text-primary hover:underline"
              >
                Delete
              </button>
            </div>
            <!-- Save/Cancel buttons -->
            <div v-else class="flex justify-between">
              <button
                @click="saveRow(row)"
                class="text-green-600 hover:underline"
              >
                Save
              </button>
              <button
                @click="cancelEdit(row)"
                class="text-red-600 hover:underline"
              >
                Cancel
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    theadData: Array,
    tableData: Array,
  },
  methods: {
    editRow(row) {
      row.editing = true;
      row.editedBidAmount = row.bidAmount;
    },
    saveRow(row) {
      row.bidAmount = row.editedBidAmount;
      row.editing = false;
    },
    cancelEdit(row) {
      row.editedBidAmount = row.bidAmount;
      row.editing = false;
    },
    deleteRow(row) {
      row.deleted = true;
    },
  },
};
</script>
