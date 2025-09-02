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
            v-if="row.id"
            scope="row"
            class="px-6 py-4 font-medium whitespace-nowrap"
          >
            <div v-if="!row.editing">
              {{ row.id }}
            </div>
            <div v-else>
              <input
                type="number"
                v-model="row.id"
                class="py-1 px-2 border rounded w-16"
              />
            </div>
          </th>
          <td class="px-6 py-4 font-bold">{{ row.name }}</td>
          <td class="px-6 py-4">
            <div v-if="!(row.editing && from === 'auctionTiming')">
              {{ row.startTime }}
            </div>
            <div v-else>
              <input
                type="date"
                v-model="row.startTime"
                class="py-1 px-2 border rounded"
              />
            </div>
          </td>
          <td class="px-6 py-4">
            <div v-if="!(row.editing && from === 'auctionTiming')">
              {{ row.endTime }}
            </div>
            <div v-else>
              <input
                type="date"
                v-model="row.endTime"
                class="py-1 px-2 border rounded"
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
                class="py-1 px-2 border rounded w-full"
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
    from: {
      type: String,
      required: true,
    },
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
  },
};
</script>
