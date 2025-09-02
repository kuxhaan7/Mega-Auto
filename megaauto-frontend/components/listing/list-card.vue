<template>
  <div
    class="card-h border-b-2 p-3 hover:border-0 hover:rounded-lg hover:shadow-[18px_-5px_39px_10px_#1B2D7636]"
  >
    <div class="grid grid-cols-12">
      <div class="col-span-3">
        <NuxtLink :to="`/vehicle-detail/${vehicleDetail.vin}`">
          <img
            class="h-64 rounded w-full object-cover"
            :src="vehicleDetail.mainPictureURL"
          />
        </NuxtLink>
        <!-- Auction Countdown -->
        <div class="relative z-10">
          <div class="absolute left-2 top-[-30px]">
            <span
              class="bg-primary shadow px-[9px] py-[2px] text-xs text-white rounded-full flex items-center gap-1"
            >
              <AlarmClock class="size-3" />
              {{ auctionStatus }}
            </span>
          </div>
          <button
            @click.stop="addToWatch(`${vehicleDetail.vin}`)"
            class="bg-slate-200 hover:bg-white shadow-md px-2 py-1 rounded inline-flex items-center text-center absolute right-2 top-[-30px]"
          >
            <span v-if="!isWatched" class="text-primary"
              ><Heart class="size-4"
            /></span>
            <span v-else class="text-green-500"><Check class="size-4" /></span>
          </button>
        </div>
      </div>
      <div class="col-span-9 px-4">
        <NuxtLink :to="`/vehicle-detail/${vehicleDetail.vin}`">
          <h3
            class="text-xl font-bold text-primary tracking-tight text-nowrap mb-3 hover:text-black"
          >
            {{ vehicleDetail.year }} {{ vehicleDetail.make }}
            {{ vehicleDetail.model }}
          </h3>
        </NuxtLink>
        <div class="py-1 font-semibold grid grid-cols-2 gap-4">
          <!-- col-1 -->
          <div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-3">
                <span class="text-slate-500">Location:</span>
              </div>
              <div class="col-span-9">
                <span>
                  {{ vehicleDetail.locationCity }}
                  {{ vehicleDetail.locationProvince }}
                  {{ vehicleDetail.locationCountry }}</span
                >
              </div>
            </div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-3">
                <span class="text-slate-500">Brand:</span>
              </div>
              <div class="col-span-9">
                <span>{{
                  vehicleDetail.brand ? vehicleDetail.brand : "-"
                }}</span>
              </div>
            </div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-3">
                <span class="text-slate-500">Sale Date:</span>
              </div>
              <div class="col-span-9">
                <span>{{ vehicleDetail.saleDate }}</span>
              </div>
            </div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-3">
                <span class="text-slate-500">Transmission:</span>
              </div>
              <div class="col-span-9">
                <span>{{
                  vehicleDetail.transmission ? vehicleDetail.transmission : "-"
                }}</span>
              </div>
            </div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-3">
                <span class="text-slate-500">ACV:</span>
              </div>
              <div class="col-span-9">
                <span>{{
                  formatCurrency(vehicleDetail.actualCashValue, "CAD")
                }}</span>
              </div>
            </div>
            <div
              v-if="vehicleDetail.buyNowPrice"
              class="mb-2 grid grid-cols-12 text-sm"
            >
              <div class="col-span-3">
                <span class="text-slate-500">Buy Now:</span>
              </div>
              <div class="col-span-9">
                <span>
                  {{ formatCurrency(vehicleDetail.buyNowPrice, "CAD") }}
                </span>
              </div>
            </div>
          </div>
          <!-- col-2 -->
          <div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-3">
                <span class="text-slate-500">Engine Type:</span>
              </div>
              <div class="col-span-9">
                <span>{{
                  vehicleDetail.liters ? vehicleDetail.liters : "-"
                }}</span>
              </div>
            </div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-3">
                <span class="text-slate-500">Drive:</span>
              </div>
              <div class="col-span-9">
                <span>{{
                  vehicleDetail.driveLineType
                    ? vehicleDetail.driveLineType
                    : "-"
                }}</span>
              </div>
            </div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-3">
                <span class="text-slate-500">Cylinder:</span>
              </div>
              <div class="col-span-9">
                <span>{{
                  vehicleDetail.nbrCylinders ? vehicleDetail.nbrCylinders : "-"
                }}</span>
              </div>
            </div>
            <div class="mb-2 grid grid-cols-12 text-sm">
              <div class="col-span-3">
                <span class="text-slate-500">Fuel:</span>
              </div>
              <div class="col-span-9">
                <span>{{
                  vehicleDetail.fuelType ? vehicleDetail.fuelType : "-"
                }}</span>
              </div>
            </div>
            <div class="grid grid-cols-12 text-sm">
              <div class="col-span-3">
                <span class="text-slate-500">Trim Level:</span>
              </div>
              <div class="col-span-9">
                <span>{{
                  vehicleDetail.trimLevel ? vehicleDetail.trimLevel : "-"
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-3">
        <!-- Buttons -->
        <NuxtLink
          class="px-6 py-3 my-3 text-sm font-medium flex items-center justify-center text-primary bg-white border border-primary rounded-full transition duration-300 ease-in-out hover:bg-primary hover:text-white"
          :to="`/vehicle-detail/${vehicleDetail.vin}`"
        >
          <span>Bid Now</span>
        </NuxtLink>
      </div>
      <div class="col-span-9 px-4 my-3">
        <div class="text-slate-500 text-sm">Starting Bid:</div>
        <div class="text-black font-bold text-lg">
          {{ formatCurrency(vehicleDetail.minimumBid, "CAD") }}
        </div>
      </div>
    </div>
  </div>

  <!-- Toaster for success or error message -->
  <div v-if="showToast">
    <Toast :type="toastType" :bColor="border" :message="toastMessage" />
  </div>
</template>

<script>
import Toast from "../toaster.vue";
import { startAuctionCountdown } from "../../utils/auctionUtils";
import { AlarmClock, Heart, Check } from "lucide-vue-next";

export default {
  components: {
    Toast,
    AlarmClock,
    Heart,
    Check,
  },
  props: {
    vehicleDetail: Object,
  },
  data() {
    return {
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
      this.toastType = "success";
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
    formatMileage(value) {
      if (value === undefined || value === null) {
        return "-";
      }
      return new Intl.NumberFormat("en-US").format(value) + " Km";
    },
  },
  mounted() {
    const { $dayjs } = useNuxtApp();

    this.intervalId = startAuctionCountdown(
      $dayjs,
      this.vehicleDetail.saleDate,
      (countdownString) => {
        this.auctionStatus = countdownString;
        this.isAuctionOver = countdownString === "Auction Over";
      }
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
.card-h {
  height: 345px;
}
</style>
