<template>
  <div class="mx-auto p-5 space-y-4">
    <div class="grid sm:grid-cols-2 gap-5">
      <!-- Auctions Analytics -->
      <AuctionAnalytics />

      <!-- Auction Source -->
      <AuctionSource />
    </div>

    <!-- Auction Timing -->
    <AuctionTiming />

    <!-- Auction Table -->
    <AuctionPage />
  </div>
</template>

<script>
import AuctionSource from "./auctionSource.vue";
import AuctionTiming from "./auctionTiming.vue";
import AuctionPage from "./auctionPage.vue";
import AuctionAnalytics from "./auctionsAnalytics.vue";
import { Search } from "lucide-vue-next";

export default {
  components: {
    AuctionSource,
    AuctionTiming,
    AuctionPage,
    AuctionAnalytics,
    Search,
  },
  data() {
    return {
      search: "AAA - ",
      tableHeaders: [
        "Order #",
        "Name",
        "Start Time",
        "End Time",
        "Status",
        "Action",
      ],
      tableRows: [
        {
          id: 1,
          name: "AAA - CPT Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          status: "active",
        },
        {
          id: 2,
          name: "AAA - OR Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          status: "active",
        },
        {
          id: 3,
          name: "AAA - WE Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          status: "active",
        },
        {
          id: 4,
          name: "AAA - BC Canada",
          startTime: "29-10-2024",
          endTime: "29-10-2024",
          status: "active",
        },
      ],
    };
  },
  computed: {
    filteredRows() {
      if (this.search === "") {
        return this.tableRows;
      }
      return this.tableRows.filter((row) => row.name.includes(this.search));
    },
  },
};
</script>
