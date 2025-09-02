<template>
  <!-- Search -->
  <div class="grid sm:grid-cols-2 gap-3 items-center mb-3">
    <div>
      <NuxtLink :to="{ name: 'customers-add-customer' }" class="px-4 py-1 bg-primary text-white rounded hover:bg-black transition-all duration-500">Add Customer</NuxtLink>
    </div>
    <div class="flex sm:justify-end">
      <input
      type="text"
      v-model="searchQuery"
      placeholder="Search customers..."
      class="border w-full sm:w-auto rounded px-2 py-1 mr-2 focus:ring-primary focus:border-primary"
    />
    <button @click="searchCustomers" class="px-4 py-1 bg-primary text-white rounded hover:bg-black transition-all duration-500">
      Search
    </button>
    </div>
  </div>
  <div class="overflow-x-auto">
    <table class="min-w-full text-sm text-left border border-collapse">
      <thead class="text-xs text-black uppercase bg-slate-100">
        <tr>
          <th scope="col" class="px-6 py-3">Lead</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Username</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Master</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Broker</th>
          <th scope="col" class="px-6 py-3">Additional Bidders</th>
          <th scope="col" class="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(customer, index) in customers"
          :key="index"
          class="border-b"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-black whitespace-nowrap"
          >
            {{ customer.lead }}
          </th>
          <td class="px-6 py-4">{{ customer.name }}</td>
          <td class="px-6 py-4">{{ customer.username }}</td>
          <td class="px-6 py-4">{{ customer.email }}</td>
          <td class="px-6 py-4">{{ customer.master }}</td>
          <td class="px-6 py-4">{{ customer.status }}</td>
          <td class="px-6 py-4">{{ customer.isBroker ? "Yes" : "No" }}</td>
          <td class="px-6 py-4">{{ customer.additionalBidders }}</td>
          <td class="px-6 py-4">
            <NuxtLink
              :to="`/customer-detail/${customer.id}`"
              class="bg-primary text-white px-2 py-1 rounded"
            >
              View
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Customers",
  data() {
    return {
      searchQuery: "",
      customers: [
        {
          id: 1,
          lead: "Lead 1",
          name: "John Doe",
          username: "johndoe",
          email: "john@example.com",
          master: "Master 1",
          status: "Active",
          isBroker: true,
          additionalBidders: 10,
        },
        {
          id: 2,
          lead: "Lead 2",
          username: "alice",
          name: "Alice Wonderland",
          email: "alice.wonderland@example.com",
          master: "Master 2",
          status: "Active",
          isBroker: true,
          additionalBidders: 10,
        },
        {
          id: 3,
          lead: "Lead 1",
          name: "Charlie Brown",
          email: "charlie.brown@example.com",
          username: "johndoe",
          master: "Master 3",
          status: "Active",
          isBroker: true,
          additionalBidders: 10,
        },
      ],
    };
  },
  methods: {
    searchCustomers() {
      alert(this.searchQuery);
    },
  },
};
</script>

