<template>
  <div
    :class="isHome ? 'w-72' : 'card-h w-80 sm:w-72'"
    class="bg-slate-50 hover:bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:shadow-black-400'"
  >
    <div>
      <div>
        <NuxtLink :to="`/vehicle-detail/${vehicleDetail.vin}`">
          <img :class="isHome ? 'h-48' : 'h-64'" class="rounded-t w-full object-cover" :src="vehicleDetail.mainPictureURL" />
        </NuxtLink>
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
      <div class="p-3">
        <NuxtLink :to="`/vehicle-detail/${vehicleDetail.vin}`">
          <h5 class="mb-1 font-bold text-primary tracking-tight text-nowrap">
            {{ vehicleDetail.year }} {{ vehicleDetail.make }} {{ vehicleDetail.model }}
          </h5>
        </NuxtLink>
        <div v-if="isHome">
          <NuxtLink :to="`/vehicle-detail/${vehicleDetail.vin}`">
            <div class="py-1">
              <div class="text-slate-500 font-semibold text-xs">
                <span>{{ vehicleDetail.locationCity }} {{ vehicleDetail.locationProvince }} {{ vehicleDetail.locationCountry }}</span>
              </div>
              <div class="mt-2 flex justify-start gap-2">
                <div>
                  <div class="text-slate-500 text-xs">ACV:</div>
                  <div class="text-black font-semibold text-sm">
                    {{ formatCurrency(vehicleDetail.actualCashValue, "CAD") }}
                  </div>
                </div>
                <div
                  v-if="vehicleDetail.buyNowPrice"
                  class="border-l-2 border-slate-200 pl-2"
                >
                  <div class="text-slate-500 text-xs">Buy Now:</div>
                  <div class="text-black font-semibold text-sm">
                    {{ formatCurrency(vehicleDetail.buyNowPrice, "CAD") }}
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div v-else>
          <div class="py-1 font-semibold">
            <div class="text-black text-sm h-8">
              <span>{{ vehicleDetail.locationCity }} {{ vehicleDetail.locationProvince }} {{ vehicleDetail.locationCountry }}</span>
            </div>
            <div class="mb-2 flex justify-between align-center text-sm">
              <div>
                <span class="text-slate-500">Mileage:</span>
              </div>
              <div>
                <span>{{ formatMileage(vehicleDetail.odometer) }}</span>
              </div>
            </div>
            <div class="flex justify-between align-center text-sm">
              <div>
                <span class="text-slate-500">Brand:</span>
              </div>
              <div>
                <span>{{ vehicleDetail.brand ? vehicleDetail.brand : "-" }}</span>
              </div>
            </div>
            <div class="my-4 flex justify-start gap-2">
              <div>
                <div class="text-slate-500 text-xs">ACV:</div>
                <div class="text-black font-bold text-sm">
                  {{ formatCurrency(vehicleDetail.actualCashValue, "CAD") }}
                </div>
              </div>
              <div v-if="vehicleDetail.buyNowPrice" class="border-l-2 border-slate-200 pl-2">
                <div class="text-slate-500 text-xs">Buy Now:</div>
                <div class="text-black font-semibold text-sm">
                  {{ formatCurrency(vehicleDetail.buyNowPrice, "CAD") }}
                </div>
              </div>
            </div>
          </div>
          <!-- Buttons -->
          <NuxtLink
            class="px-6 py-2 mb-2 text-sm font-medium flex items-center justify-center text-primary bg-white border border-primary rounded-full transition duration-300 ease-in-out hover:bg-primary hover:text-white"
            :to="`/vehicle-detail/${vehicleDetail.vin}`"
          >
            <span>Bid Now</span>
          </NuxtLink>
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
    isHome: String,
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
  height: 500px;
}
</style>
