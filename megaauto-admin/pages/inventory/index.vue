<template>
  <div class="mx-auto p-5">
    <!---->
    <div class="grid sm:grid-cols-2 gap-5 items-center">
      <!-- Approve -->
      <approveDisapprove :isFor="true" />

      <!-- DisApprove -->
      <approveDisapprove :isFor="false" />
    </div>

    <!-- Inventory Status -->
    <inventoryStatus />

    <!-- Filters -->
    <div class="mt-4 grid grid-cols-2 items-center">
      <div>
        <NuxtLink :to="{ name: 'inventory-add-inventory' }" class="px-4 py-2.5 bg-primary text-white rounded hover:bg-black transition-all duration-500">Add Inventory</NuxtLink>
      </div>
      <form @submit.prevent="logValues">
        <div class="flex flex-col sm:flex-row justify-end">
          <select
            v-model="selectedSource"
            name="Source"
            class="sm:py-2.5 text-sm font-medium text-center text-gray-900 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 mb-2 sm:mb-0 sm:mr-2"
          >
            <option value="" selected>All sources</option>
            <option v-for="source in sources" :value="source.id">
              {{ source.name }}
            </option>
          </select>
          <input
            type="date"
            v-model="selectedDate"
            class="text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary mb-2 sm:mb-0 sm:mr-2"
          />
          <div class="flex">
            <input
              type="search"
              id="search-dropdown"
              v-model="vin"
              class="p-2.5 mr-2 w-full sm:w-52 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
              placeholder="VIN"
            />
            <button
              type="submit"
              class="p-2.5 text-sm font-medium h-full text-white bg-primary rounded-lg border border-primary hover:bg-black focus:outline-none focus:ring-primary"
            >
              <Search class="w-4 h-4" />
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- Cards -->
    <div class="mt-5" v-for="vehicle in vehicles">
        <ListCard :vehicleDetail="vehicle" :from="from" />
    </div>
  </div>
</template>

<script>
import ListCard from "~/components/listing/list-card.vue";
import approveDisapprove from "./approve-disapprove.vue";
import inventoryStatus from "./inventory-status.vue";
import { ChevronDown, Search } from "lucide-vue-next";

export default {
  components: {
    approveDisapprove,
    inventoryStatus,
    ChevronDown,
    Search,
    ListCard
  },
  data() {
    return {
      from: "inventory",
      vehicles: [
        {
          vin: "1HGCM82633A123456",
          mainPictureURL:
            "https://via.placeholder.com/400x300.png?text=Vehicle+Image",
          year: 2020,
          make: "Toyota",
          model: "Camry",
          liters: "2.5 L",
          nbrCylinders: "4 Cyl",
          driveLineType: "RWD",
          fuelType: "Gas",
          trimLevel: "Base",
          locationCity: "Toronto",
          locationProvince: "ON",
          locationCountry: "Canada",
          saleDate: "2024-10-30",
          actualCashValue: 22000,
          minimumBid: 15000,
          customerBid: 18400,
          winningAmount: 400,
          bidStatus: "Bid In Process",
          bidOn: "2024-10-23 15:00:59",
          auctionSource: "Progi",
        },
        {
          vin: "1HGCM82633A123456",
          mainPictureURL:
            "https://via.placeholder.com/400x300.png?text=Vehicle+Image",
          year: 2020,
          make: "Toyota",
          model: "Camry",
          liters: "2.5 L",
          nbrCylinders: "4 Cyl",
          driveLineType: "RWD",
          fuelType: "Gas",
          trimLevel: "Base",
          locationCity: "Toronto",
          locationProvince: "ON",
          locationCountry: "Canada",
          saleDate: "2024-10-30",
          actualCashValue: 22000,
          minimumBid: 15000,
          customerBid: 18400,
          winningAmount: 400,
          bidStatus: "Bid In Process",
          bidOn: "2024-10-23 15:00:59",
          auctionSource: "Progi",
        },
        {
          vin: "1HGCM82633A123456",
          mainPictureURL:
            "https://via.placeholder.com/400x300.png?text=Vehicle+Image",
          year: 2020,
          make: "Toyota",
          model: "Camry",
          liters: "2.5 L",
          nbrCylinders: "4 Cyl",
          driveLineType: "RWD",
          fuelType: "Gas",
          trimLevel: "Base",
          locationCity: "Toronto",
          locationProvince: "ON",
          locationCountry: "Canada",
          saleDate: "2024-10-30",
          actualCashValue: 22000,
          minimumBid: 15000,
          customerBid: 18400,
          winningAmount: 400,
          bidStatus: "Bid In Process",
          bidOn: "2024-10-23 15:00:59",
          auctionSource: "Progi",
        },
        {
          vin: "1HGCM82633A123456",
          mainPictureURL:
            "https://via.placeholder.com/400x300.png?text=Vehicle+Image",
          year: 2020,
          make: "Toyota",
          model: "Camry",
          liters: "2.5 L",
          nbrCylinders: "4 Cyl",
          driveLineType: "RWD",
          fuelType: "Gas",
          trimLevel: "Base",
          locationCity: "Toronto",
          locationProvince: "ON",
          locationCountry: "Canada",
          saleDate: "2024-10-30",
          actualCashValue: 22000,
          minimumBid: 15000,
          customerBid: 18400,
          winningAmount: 400,
          bidStatus: "Bid In Process",
          bidOn: "2024-10-23 15:00:59",
          auctionSource: "Progi",
        },
        {
          vin: "1HGCM82633A123456",
          mainPictureURL:
            "https://via.placeholder.com/400x300.png?text=Vehicle+Image",
          year: 2020,
          make: "Toyota",
          model: "Camry",
          liters: "2.5 L",
          nbrCylinders: "4 Cyl",
          driveLineType: "RWD",
          fuelType: "Gas",
          trimLevel: "Base",
          locationCity: "Toronto",
          locationProvince: "ON",
          locationCountry: "Canada",
          saleDate: "2024-10-30",
          actualCashValue: 22000,
          minimumBid: 15000,
          customerBid: 18400,
          winningAmount: 400,
          bidStatus: "Bid In Process",
          bidOn: "2024-10-23 15:00:59",
          auctionSource: "Progi",
        },
        {
          vin: "1HGCM82633A123456",
          mainPictureURL:
            "https://via.placeholder.com/400x300.png?text=Vehicle+Image",
          year: 2020,
          make: "Toyota",
          model: "Camry",
          liters: "2.5 L",
          nbrCylinders: "4 Cyl",
          driveLineType: "RWD",
          fuelType: "Gas",
          trimLevel: "Base",
          locationCity: "Toronto",
          locationProvince: "ON",
          locationCountry: "Canada",
          saleDate: "2024-10-30",
          actualCashValue: 22000,
          minimumBid: 15000,
          customerBid: 18400,
          winningAmount: 400,
          bidStatus: "Bid In Process",
          bidOn: "2024-10-23 15:00:59",
          auctionSource: "Progi",
        },
        {
          vin: "1HGCM82633A123456",
          mainPictureURL:
            "https://via.placeholder.com/400x300.png?text=Vehicle+Image",
          year: 2020,
          make: "Toyota",
          model: "Camry",
          liters: "2.5 L",
          nbrCylinders: "4 Cyl",
          driveLineType: "RWD",
          fuelType: "Gas",
          trimLevel: "Base",
          locationCity: "Toronto",
          locationProvince: "ON",
          locationCountry: "Canada",
          saleDate: "2024-10-30",
          actualCashValue: 22000,
          minimumBid: 15000,
          customerBid: 18400,
          winningAmount: 400,
          bidStatus: "Bid In Process",
          bidOn: "2024-10-23 15:00:59",
          auctionSource: "Progi",
        },
        {
          vin: "1HGCM82633A123456",
          mainPictureURL:
            "https://via.placeholder.com/400x300.png?text=Vehicle+Image",
          year: 2020,
          make: "Toyota",
          model: "Camry",
          liters: "2.5 L",
          nbrCylinders: "4 Cyl",
          driveLineType: "RWD",
          fuelType: "Gas",
          trimLevel: "Base",
          locationCity: "Toronto",
          locationProvince: "ON",
          locationCountry: "Canada",
          saleDate: "2024-10-30",
          actualCashValue: 22000,
          minimumBid: 15000,
          customerBid: 18400,
          winningAmount: 400,
          bidStatus: "Bid In Process",
          bidOn: "2024-10-23 15:00:59",
          auctionSource: "Progi",
        },
        {
          vin: "1HGCM82633A123456",
          mainPictureURL:
            "https://via.placeholder.com/400x300.png?text=Vehicle+Image",
          year: 2020,
          make: "Toyota",
          model: "Camry",
          liters: "2.5 L",
          nbrCylinders: "4 Cyl",
          driveLineType: "RWD",
          fuelType: "Gas",
          trimLevel: "Base",
          locationCity: "Toronto",
          locationProvince: "ON",
          locationCountry: "Canada",
          saleDate: "2024-10-30",
          actualCashValue: 22000,
          minimumBid: 15000,
          customerBid: 18400,
          winningAmount: 400,
          bidStatus: "Bid In Process",
          bidOn: "2024-10-23 15:00:59",
          auctionSource: "Progi",
        },
        {
          vin: "1HGCM82633A123456",
          mainPictureURL:
            "https://via.placeholder.com/400x300.png?text=Vehicle+Image",
          year: 2020,
          make: "Toyota",
          model: "Camry",
          liters: "2.5 L",
          nbrCylinders: "4 Cyl",
          driveLineType: "RWD",
          fuelType: "Gas",
          trimLevel: "Base",
          locationCity: "Toronto",
          locationProvince: "ON",
          locationCountry: "Canada",
          saleDate: "2024-10-30",
          actualCashValue: 22000,
          minimumBid: 15000,
          customerBid: 18400,
          winningAmount: 400,
          bidStatus: "Bid In Process",
          bidOn: "2024-10-23 15:00:59",
          auctionSource: "Progi",
        }
      ],
      sources: [
        { id: "1", name: "PG" },
        { id: "2", name: "ST" },
        { id: "3", name: "M" },
        { id: "4", name: "CPT" },
      ],
      selectedSource: "",
      selectedDate: "",
      vin: "",
    };
  },
  methods: {
    logValues() {
      console.log("Source:", this.selectedSource);
      console.log("Date:", this.selectedDate);
      console.log("VIN:", this.vin);
    },

  },
};
</script>

