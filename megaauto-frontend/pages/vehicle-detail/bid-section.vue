<template>
  <div>
    <!-- Section Header -->
    <div
      class="bg-primary p-2 rounded-t text-white flex justify-between items-center"
    >
      <div>
        <span class="font-bold">Bid Information</span>
      </div>
      <div>
        <button
          type="button"
          v-on:click="addToWatch(vehicle?.vin)"
          class="flex items-center py-0.5 px-4 font-bold bg-white text-black text-sm hover:bg-black hover:text-white rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 mx-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              v-if="!isWatched"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
              v-else
            />
          </svg>
          <span v-if="!isWatched">Watch</span>
          <span v-else>Added</span>
        </button>
      </div>
    </div>

    <!--Timer-->
    <div
      class="flex justify-between border-b border-x p-2 font-semibold text-sm"
    >
      <div>Time</div>
      <div :class="{ 'text-primary': true, 'blink-soft': isAuctionOver }">
        {{ auctionStatus }}
      </div>
    </div>

    <!-- ACV -->
    <div
      class="flex justify-between border-b border-x p-2 font-semibold text-sm"
    >
      <div>ACV</div>
      <div>{{ formatCurrency(vehicle?.actualCashValue, "CAD") }}</div>
    </div>

    <!-- Starting Bid -->
    <div
      class="flex justify-between border-b border-x p-2 font-semibold text-sm"
    >
      <div>Starting Bid</div>
      <div>{{ formatCurrency(vehicle?.minimumBid, "CAD") }}</div>
    </div>

    <!-- Bid -->
    <div class="border-b border-x p-2 font-semibold text-sm">
      <div class="flex justify-between font-semibold text-sm">
        <div>Your Bid</div>
        <div v-if="userBid" class="text-primary font-extrabold">{{ formatCurrency(userBid, "CAD") }}</div>
      </div>
      <div class="flex items-center my-2 space-x-2">
        <span class="text-gray-700">$</span>
        <input
          type="number"
          min="0"
          v-model="bidAmount"
          class="w-full text-center rounded-md border-gray-300 focus:border-primary focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <span class="text-gray-700">CAD</span>
      </div>

      <button
        class="p-2 w-full bg-primary text-white hover:bg-black rounded mt-1"
        v-on:click="bid()"
      >
        Bid
      </button>
    </div>

    <!-- Toaster for success or error message -->
    <div v-if="showToast">
      <Toaster :type="toastType" :bColor="border" :message="toastMessage" />
    </div>
  </div>
</template>

<script>
import Toaster from "../components/toaster.vue";
import { startAuctionCountdown } from "../utils/auctionUtils";

export default {
  props: {
    vehicle: {
      type: Object,
    },
  },
  components: {
    Toaster,
  },
  name: "BidSection",
  data() {
    return {
      bidAmount: "",
      userBid: "",
      isWatched: false,
      showToast: false,
      toastType: "success",
      border: "border-green-500",
      toastMessage: "",
      auctionStatus: "",
      isAuctionOver: false,
      intervalId: null,
    };
  },
  methods: {
    addToWatch(vin) {
      alert(`Vehicle with VIN: ${vin} added to watchlist.`);
      this.isWatched = true;
      this.toastMessage = "Added to Watchlist!";
      this.showToast = true;

      setTimeout(() => {
        this.showToast = false;
      }, 3000);
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
    bid() {
      if (this.bidAmount > this.vehicle.minimumBid) {
        this.userBid = this.bidAmount;
        this.bidAmount = "";
        this.showToast = true;
        this.toastType = "success";
        this.border = "border-green-500",
        this.toastMessage = "Bid Placed Successfully!";
      } else {
        this.bidAmount = '';
        this.showToast = true;
        this.toastMessage = "Bid should be higher then starting bid!";
        this.toastType = "danger";
        this.border = "border-red-500";
      }
      setTimeout(() => {
          this.showToast = false;
        }, 3000);
    },
  },
  mounted() {
    const { $dayjs } = useNuxtApp();

    this.intervalId = startAuctionCountdown(
      $dayjs,
      this.vehicle.saleDate,
      (countdownString) => {
        this.auctionStatus = countdownString;
        this.isAuctionOver = countdownString === "Auction Closed";
      },
      "details"
    );
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
};
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.blink-soft {
  animation: blink 0.5s linear infinite;
}
</style>
