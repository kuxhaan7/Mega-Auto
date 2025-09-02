<template>
  <div class="p-4">
    <div class="grid grid-cols-1 gap-4" v-if="filteredCustomer">
      <!-- Customer Info Section -->
      <div class="border rounded-md">
        <div
          class="border-b py-3 px-5 bg-slate-200 flex justify-between items-center"
        >
          <h2 class="font-bold">Customer Detail</h2>

          <!-- Edit / Update Button Section -->
          <div class="flex justify-end">
            <button
              v-if="!isEditing"
              @click="toggleEdit"
              class="bg-primary text-white py-0.5 px-5 rounded hover:bg-black"
            >
              Edit
            </button>
            <div v-else class="space-x-2">
              <button
                @click="toggleEdit"
                class="bg-gray-500 text-white py-0.5 px-5 rounded hover:bg-gray-700"
              >
                Return
              </button>
              <button
                @click="updateCustomer"
                class="bg-green-500 text-white py-0.5 px-5 rounded hover:bg-green-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 mb-5 gap-5 p-5">
          <!-- Col -->
          <div class="col-span-8">
            <div class="grid grid-cols-2 gap-5">
              <!-- Name -->
              <div class="flex flex-col">
                <label class="mb-1 font-light">Name:</label>
                <span class="font-bold" v-if="!isEditing">{{
                  filteredCustomer.name
                }}</span>
                <input
                  v-else
                  v-model="filteredCustomer.name"
                  class="border rounded-md py-1 px-3"
                />
              </div>

              <!-- Username -->
              <div class="flex flex-col">
                <label class="mb-1 font-light">Username</label>
                <span class="font-bold" v-if="!isEditing">{{
                  filteredCustomer.username
                }}</span>
                <input
                  v-else
                  v-model="filteredCustomer.username"
                  class="border rounded-md py-1 px-3"
                />
              </div>

              <!-- Email -->
              <div class="flex flex-col">
                <label class="mb-1 font-light">Email</label>
                <span class="font-bold" v-if="!isEditing">{{
                  filteredCustomer.email
                }}</span>
                <input
                  v-else
                  v-model="filteredCustomer.email"
                  class="border rounded-md py-1 px-3"
                />
              </div>

              <!-- Contact -->
              <div class="flex flex-col">
                <label class="mb-1 font-light">Contact</label>
                <span class="font-bold" v-if="!isEditing">{{
                  filteredCustomer.contact
                }}</span>
                <input
                  v-else
                  v-model="filteredCustomer.contact"
                  class="border rounded-md py-1 px-3"
                />
              </div>
            </div>

            <!-- Address -->
            <div class="flex flex-col mt-5">
              <label class="mb-2 font-light">Address</label>
              <span class="font-bold" v-if="!isEditing">{{
                filteredCustomer.address
              }}</span>
              <input
                v-else
                v-model="filteredCustomer.address"
                class="border rounded-md py-1 px-3"
              />
            </div>
          </div>

          <!-- Col -->
          <div class="col-span-4">
            <!-- Account Status -->
            <div class="flex flex-col mb-6">
              <label class="mb-1 font-light">Account Status</label>
              <span
                :class="
                  filteredCustomer.accountStatus
                    ? 'text-green-600 font-bold'
                    : 'text-red-600 font-bold'
                "
                v-if="!isEditing"
              >
                <div
                  v-if="filteredCustomer.accountStatus"
                  class="flex items-center gap-2"
                >
                  <span
                    class="w-3 h-3 bg-green-500 rounded-full animation-pulse"
                  ></span>
                  Active
                </div>
                <div v-else class="flex items-center gap-2">
                  <span
                    class="w-3 h-3 bg-red-500 rounded-full shadow-glow"
                  ></span>
                  Inactive
                </div>
              </span>
              <select
                v-else
                v-model="filteredCustomer.accountStatus"
                class="border rounded-md py-1 px-3"
              >
                <option :value="1">Approve</option>
                <option :value="0">Unapprove</option>
              </select>
            </div>

            <!-- Broker Status -->
            <div class="flex flex-col mb-6">
              <label class="mb-1 font-light">Broker Status</label>
              <span
                :class="
                  filteredCustomer.brokerStatus
                    ? 'text-green-600 font-bold'
                    : 'text-red-600 font-bold'
                "
                v-if="!isEditing"
              >
                {{ filteredCustomer.brokerStatus ? "Approved" : "Unapproved" }}
              </span>
              <!-- Only allow editing broker status if account is approved -->
              <select
                v-else-if="filteredCustomer.accountStatus"
                v-model="filteredCustomer.brokerStatus"
                class="border rounded-md py-1 px-3"
              >
                <option :value="1">Approve</option>
                <option :value="0">Unapprove</option>
              </select>
              <span v-else>
                Account needs to be approved to edit broker status.
              </span>
            </div>

            <!-- Add Addtional Bidder -->
            <div class="flex flex-col">
              <label class="mb-1 font-light">Add Additional Bidders</label>
              <span
                :class="
                  filteredCustomer.canAddBidder
                    ? 'text-green-600 font-bold'
                    : 'text-red-600 font-bold'
                "
                v-if="!isEditing"
              >
                {{ filteredCustomer.canAddBidder ? "Approved" : "Unapproved" }}
              </span>
              <select
                v-else-if="filteredCustomer.brokerStatus"
                v-model="filteredCustomer.canAddBidder"
                class="border rounded-md py-1 px-3"
              >
                <option :value="1">Approve</option>
                <option :value="0">Unapprove</option>
              </select>
              <span v-else> Make Broker to Edit this </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Account Status Section -->
      <div class="border rounded-md" v-if="filteredCustomer.additionalBidders != ''">
        <div class="border-b px-5 py-3 bg-slate-200">
          <div class="flex justify-between items-center">
            <div class="font-bold">Additional Bidders</div>
            <div></div>
          </div>
        </div>

        <!-- Additional Bidders Section -->
        <div class="p-5 overflow-x-auto">
          <table
            class="min-w-full table-auto border-collapse border text-center"
          >
            <thead>
              <tr class="bg-slate-100">
                <th class="border px-4 py-2">Name</th>
                <th class="border px-4 py-2">Email</th>
                <th class="border px-4 py-2">Contact</th>
                <th class="border px-4 py-2">Total Bids</th>
                <th class="border px-4 py-2">Paid</th>
                <th class="border px-4 py-2">To Be Paid</th>
                <th class="border px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(bidder, index) in filteredCustomer.additionalBidders"
                :key="index"
              >
                <td class="border px-4 py-2">{{ bidder.name }}</td>
                <td class="border px-4 py-2">{{ bidder.email }}</td>
                <td class="border px-4 py-2">{{ bidder.contact }}</td>
                <td class="border px-4 py-2">{{ bidder.totalBids }}</td>
                <td class="border px-4 py-2">{{ bidder.paid }}</td>
                <td class="border px-4 py-2">{{ bidder.toBePaid }}</td>
                <td class="border px-4 py-2">
                  <NuxtLink
                    :to="`/customer-detail/${bidder.id}`"
                    class="bg-primary text-white px-2 py-1 rounded"
                  >
                    View
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- No customer found case -->
    <div v-else class="p-4 text-red-500">
      <p>Customer not found.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isEditing: false,
      customers: [
        {
          id: "1",
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "+971560000000",
          username: "john",
          address: "1234 Street, City, Country",
          accountStatus: 1,
          brokerStatus: 0,
          canAddBidder: 0,
          additionalBidders: [
            {
              id: "2",
              name: "Jane Smith",
              email: "jane.smith@example.com",
              contact: "+971560000001",
              totalBids: 150,
              paid: 80,
              toBePaid: 20,
            },
          ],
        },
        {
          id: "2",
          name: "Alice Wonderland",
          email: "alice.wonderland@example.com",
          contact: "+971560000003",
          username: "alice",
          address: "5678 Wonderland, City, Country",
          accountStatus: 1,
          brokerStatus: 1,
          canAddBidder: 1,
          additionalBidders: [
            {
              id: "3",
              name: "Bob Johnson",
              email: "bob.johnson@example.com",
              contact: "+971560000002",
              totalBids: 250,
              paid: 100,
              toBePaid: 30,
            },
          ],
        },
        {
          id: "3",
          name: "Charlie Brown",
          email: "charlie.brown@example.com",
          contact: "+971560000004",
          username: "charlie",
          address: "7890 Peanuts, City, Country",
          accountStatus: 0,
          brokerStatus: 0,
          canAddBidder: 0,
          additionalBidders: [],
        },
      ],
    };
  },
  computed: {
    filteredCustomer() {
      return this.customers.find((customer) => customer.id === this.id);
    },
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    updateCustomer() {
      this.toggleEdit();
    },
  },
};
</script>

<style scoped>
.animation-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    box-shadow: 0 0 0 0 rgb(46, 228, 1);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(229, 62, 62, 0);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
