<template>
  <div class="container mx-auto p-5 my-4">
    <div>
      <h2 class="font-bold text-xl">Auction Events</h2>
    </div>
    <div class="mt-5">
      <div class="flex flex-wrap justify-between">
        <div
          v-for="(date, index) in dateRange"
          :key="index"
          :class="[
            'p-3 sm:w-auto',
            'rounded-md auction-w',
            isToday(date) ? 'bg-red-100' : 'bg-white',
          ]"
        >
          <div class="flex items-center justify-center h-12">
            <span
              v-if="isToday(date)"
              :class="{
                'text-primary font-bold text-red-600': true,
                'blink-soft': isAuctionOver,
              }"
            >
              {{ auctionStatus }}
            </span>
          </div>
          <h5
            class="text-center text-red-600 font-normal py-2 border-b-2 border-red-500"
          >
            {{ formatDay(date) }}
            <strong>({{ getTotalVehicles(date) }})</strong>
          </h5>
          <div class="p-4 space-y-4">
            <div
              v-if="getAuctionsForDate(date).length === 0"
              class="text-center text-gray-600"
            >
              No Event Now.
            </div>
            <div
              v-for="(event, idx) in getAuctionsForDate(date)"
              :key="idx"
              class="pt-4"
            >
              <a
                :href="`${domain}${event.url}`"
                class="text-red-600 font-semibold flex justify-between"
              >
                <div>{{ event.name }}</div>
                <div>
                  <img :src="getImage(event.flag)" class="h-5" />
                </div>
              </a>
              <div>
                <span class="text-gray-600 text-sm">{{ event.location }}</span>
                <div>
                  <span class="font-bold text-sm">Closing: </span>
                  <span
                    :id="`countdownTimer_${event.name}`"
                    class="font-bold text-sm text-red-600"
                    >05:00 PM (GST)</span
                  >
                </div>
                <a
                  :href="`${domain}${event.url}`"
                  class="text-red-600 border border-red-600 rounded px-2 py-1 text-xs mt-2 inline-block hover:bg-red-600 hover:text-white"
                  >View Listing
                  <strong>({{ getVehicleCount(event.name) }})</strong></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import CanadaImg from "~/assets/img/canada.png";
import USAImg from "~/assets/img/usa.png";
import { startAuctionCountdown } from "../utils/auctionUtils";

export default {
  data() {
    return {
      auctionStatus: "",
      isAuctionOver: false,
      intervalId: null,
      domain: "/",
      dateRange: this.getDateRange(),
      auctions: [
        {
          date: moment().add(1, "days").format("YYYY-MM-DD"),
          name: "Canada Auction",
          url: "vehicle-listing",
          location: "Toronto, Canada",
          flag: "canada.png",
        },
        {
          date: moment().add(2, "days").format("YYYY-MM-DD"),
          name: "Canada Auction",
          url: "vehicle-listing",
          location: "Toronto, Canada",
          flag: "canada.png",
        },
        {
          date: moment().add(3, "days").format("YYYY-MM-DD"),
          name: "Canada Auction",
          url: "vehicle-listing",
          location: "Toronto, Canada",
          flag: "canada.png",
        },
        {
          date: moment().add(4, "days").format("YYYY-MM-DD"),
          name: "USA Auction",
          url: "vehicle-listing",
          location: "New York, USA",
          flag: "usa.png",
        },
        {
          date: moment().add(5, "days").format("YYYY-MM-DD"),
          name: "E USA Auction",
          url: "vehicle-listing",
          location: "Miami, USA",
          flag: "usa.png",
        },
      ],
    };
  },
  methods: {
    getDateRange() {
      const today = moment();
      const days = [];
      for (let i = 0; i <= 6; i++) {
        const date = moment(today).add(i, "days");
        if (date.day() !== 0 && date.day() !== 6) {
          days.push(date.format("YYYY-MM-DD"));
        }
      }
      return days;
    },
    isToday(date) {
      return moment().isSame(moment(date, "YYYY-MM-DD"), "day");
    },
    formatDay(date) {
      return moment(date, "YYYY-MM-DD").format("ddd, MMMM D");
    },
    getAuctionsForDate(date) {
      const formattedDate = moment(date, "YYYY-MM-DD").format("YYYY-MM-DD");
      return this.auctions.filter((auction) => auction.date === formattedDate);
    },
    getTotalVehicles(date) {
      return this.getAuctionsForDate(date).length * 10;
    },
    getVehicleCount(auctionName) {
      return Math.floor(Math.random() * 100);
    },
    getImage(flag) {
      if (flag === "canada.png") {
        return CanadaImg;
      } else if (flag === "usa.png") {
        return USAImg;
      } else {
        return "";
      }
    },
  },
  mounted() {
    const { $dayjs } = useNuxtApp();
    const today = this.dateRange.find((date) => this.isToday(date));

    if (today) {
      this.intervalId = startAuctionCountdown(
        $dayjs,
        today,
        (countdownString) => {
          this.auctionStatus = countdownString;
          this.isAuctionOver =
            countdownString === "Auction Over" ||
            countdownString === "Auction Closed";
          this.isAuctionOver = countdownString === "Auction Closed";
        },
        "auctions"
      );
    }
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
};
</script>

<style scroped>
.auction-w {
  width: 270px;
}

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
