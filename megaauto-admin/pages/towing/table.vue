<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-nowrap text-gray-500">
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
            class="px-6 py-4 font-medium whitespace-nowrap"
          >
            {{ row.id }}
          </th>
          <td class="px-6 py-4 font-bold">{{ row.name }}</td>
          <td class="px-6 py-4">
            <div v-if="!row.editing">
              {{ row.startTime }}
            </div>
            <div v-else>
              <input
                type="date"
                v-model="row.startTime"
                class="w-full border border-gray-300 rounded-md shadow-sm py-2 px-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </td>
          <td class="px-6 py-4">
            <div v-if="!row.editing">
              {{ row.endTime }}
            </div>
            <div v-else>
              <input
                type="date"
                v-model="row.endTime"
                class="w-full border border-gray-300 rounded-md shadow-sm py-2 px-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </td>
          <td class="px-6 py-4">
            <div
              v-if="!row.editing"
              class="capitalize font-bold"
            >
              {{ formatCurrency(row.price, "CAD") }}
            </div>
            <div v-else>
              <input
                type="price"
                id="price"
                v-model="row.price"
                class="w-full border border-gray-300 rounded-md shadow-sm py-2 px-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </td>
          <td class="px-6 py-4">
            <div
              v-if="!row.editing"
              :class="{
                'text-green-600': row.status === 'active',
                'text-red-500': row.status === 'inactive',
              }"
              class="capitalize font-bold"
            >
              {{ row.status }}
            </div>
            <div v-else>
              <select
                v-model="row.status"
                class="w-full border border-gray-300 rounded-md shadow-sm py-2 px-2 focus:ring-primary focus:border-primary"
              >
                <option value="active">Approved</option>
                <option value="inactive">UnApproved</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </td>
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
  name: "Table",
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
    formatCurrency(value, currency) {
      if (value === undefined || value === null) {
        return "N/A";
      }
      return new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency,
      }).format(value);
    },
  },
};
</script>
