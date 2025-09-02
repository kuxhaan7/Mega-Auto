<template>
  <div
    class="border-b-2 p-3 hover:rounded-lg border rounded bg-slate-100 hover:shadow"
  >
    <div class="grid grid-cols-1 gap-4 md:grid-cols-12">
      <div class="col-span-12 md:col-span-3">
        <NuxtLink :to="`/`">
          <img
            class="h-60 rounded w-full object-cover"
            :src="vehicleDetail.mainPictureURL"
          />
        </NuxtLink>
      </div>
      <div class="col-span-12 md:col-span-9 px-0 py-4 sm:py-0 sm:px-4">
        <div class="flex justify-between items-center mb-4">
          <NuxtLink :to="`/`">
            <h3
              class="text-xl font-bold text-primary tracking-tight text-nowrap mb-3 hover:text-black"
            >
              {{ vehicleDetail.year }} {{ vehicleDetail.make }}
              {{ vehicleDetail.model }}
            </h3>
          </NuxtLink>
          <button
            v-if="!isEdit"
            class="py-1 px-4 bg-primary text-white rounded-md transition-all duration-200 hover:bg-black"
            @click="toggleEdit"
          >
            Edit
          </button>
          <div v-else class="flex justify-end gap-4">
            <button
              class="py-1 px-4 bg-green-600 text-white rounded-md transition-all duration-200 hover:bg-black"
              @click="updateInventory"
            >
              Update
            </button>
            <button
              class="py-1 px-4 bg-black text-white rounded-md transition-all duration-200 hover:bg-slate-600"
              @click="toggleEdit"
            >
              Close
            </button>
          </div>
        </div>
        <div
          class="py-1 font-semibold grid grid-cols-1 md:grid-cols-3 gap-0 sm:gap-4"
        >
          <!-- Bids Page -->
          <div v-if="from === 'bids'">
            <!-- CustomerName -->
            <div class="mb-3 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Name:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>{{
                  vehicleDetail.customerName ? vehicleDetail.customerName : "-"
                }}</span>
              </div>
            </div>
            <!-- Email -->
            <div class="mb-3 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Email:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>{{
                  vehicleDetail.email ? vehicleDetail.email : "-"
                }}</span>
              </div>
            </div>
            <!-- Phone -->
            <div class="mb-3 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Contact:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>{{
                  vehicleDetail.contactNo ? vehicleDetail.contactNo : "-"
                }}</span>
              </div>
            </div>
          </div>
          <!-- col-2 -->
          <div>
            <!-- Vin -->
            <div class="mb-3 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">VIN:</span>
              </div>
              <div class="col-span-6 sm:col-span-7 text-primary">
                <span>{{ vehicleDetail.vin ? vehicleDetail.vin : "-" }}</span>
              </div>
            </div>
            <!-- Location -->
            <div class="mb-3 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Location:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>
                  {{ vehicleDetail.locationCity }}
                  {{ vehicleDetail.locationProvince }}
                  {{ vehicleDetail.locationCountry }}</span
                >
              </div>
            </div>
            <!-- SaleDate -->
            <div class="mb-3 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Sale Date:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>{{ vehicleDetail.saleDate }}</span>
              </div>
            </div>
            <!-- AuctionSource -->
            <div class="mb-3 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Auction Source:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>{{
                  vehicleDetail.auctionSource
                    ? vehicleDetail.auctionSource
                    : "-"
                }}</span>
              </div>
            </div>
            <!-- ACV -->
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">ACV:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <input
                  type="text"
                  v-model="vehicleDetail.actualCashValue"
                  class="w-full mt-1 text-sm px-3 py-1 rounded"
                  v-if="isEdit"
                />
                <span v-else>{{
                  formatCurrency(vehicleDetail.actualCashValue, "CAD")
                }}</span>
              </div>
            </div>
            <!-- Buy Now -->
            <div
              v-if="vehicleDetail.buyNowPrice"
              class="mb-2 grid grid-cols-12 text-sm"
            >
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Buy Now:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>
                  {{ formatCurrency(vehicleDetail.buyNowPrice, "CAD") }}
                </span>
              </div>
            </div>
          </div>
          <!-- Inventory Page -->
          <div v-if="from === 'inventory'">
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Engine Type:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>{{
                  vehicleDetail.liters ? vehicleDetail.liters : "-"
                }}</span>
              </div>
            </div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Drive:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>{{
                  vehicleDetail.driveLineType
                    ? vehicleDetail.driveLineType
                    : "-"
                }}</span>
              </div>
            </div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Cylinder:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>{{
                  vehicleDetail.nbrCylinders ? vehicleDetail.nbrCylinders : "-"
                }}</span>
              </div>
            </div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Fuel:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>{{
                  vehicleDetail.fuelType ? vehicleDetail.fuelType : "-"
                }}</span>
              </div>
            </div>
            <div class="grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Trim Level:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>{{
                  vehicleDetail.trimLevel ? vehicleDetail.trimLevel : "-"
                }}</span>
              </div>
            </div>
          </div>
          <!-- col-3 -->
          <div>
            <!-- Min Bid -->
            <div class="mb-3 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Min Bid:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <span>{{
                  formatCurrency(vehicleDetail.minimumBid, "CAD")
                }}</span>
              </div>
            </div>
            <!-- BidStatus -->
            <div class="mb-3 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Bid Status:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <select
                  v-model="vehicleDetail.bidStatus"
                  class="form-select w-full mt-1 text-sm px-3 py-1 rounded"
                  v-if="isEdit"
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <span v-else>{{
                  vehicleDetail.bidStatus ? vehicleDetail.bidStatus : "-"
                }}</span>
              </div>
            </div>
            <!-- customerBid -->
            <div class="mb-3 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Customer Bid:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <input
                  type="number"
                  v-model="vehicleDetail.customerBid"
                  class="w-full mt-1 text-sm px-3 py-1 rounded"
                  v-if="isEdit"
                />
                <span v-else>{{
                  formatCurrency(vehicleDetail.customerBid, "CAD")
                }}</span>
              </div>
            </div>
            <!-- Winning Bid -->
            <div class="mb-3 grid grid-cols-12 text-sm">
              <div class="col-span-6 sm:col-span-5">
                <span class="text-slate-500">Winning Bid:</span>
              </div>
              <div class="col-span-6 sm:col-span-7">
                <input
                  type="number"
                  v-model="vehicleDetail.winningAmount"
                  class="w-full mt-1 text-sm px-3 py-1 rounded"
                  v-if="isEdit"
                />
                <span v-else>{{
                  formatCurrency(vehicleDetail.winningAmount, "CAD")
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vehicleDetail: Object,
    from: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    formatCurrency(value, currency) {
      if (value === undefined || value === null) {
        return "N/A";
      }
      return new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency,
      }).format(value);
    },
    formatMileage(value) {
      if (value === undefined || value === null) {
        return "-";
      }
      return new Intl.NumberFormat("en-US").format(value) + " Km";
    },
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
    updateInventory() {
      console.log(
        "Updated values are: " +
          this.vehicleDetail.bidStatus +
          ", " +
          this.vehicleDetail.customerBid +
          ", " +
          this.vehicleDetail.winningAmount +
          ", " +
          this.vehicleDetail.actualCashValue
      );
      this.toggleEdit();
    },
  }
};
</script>
