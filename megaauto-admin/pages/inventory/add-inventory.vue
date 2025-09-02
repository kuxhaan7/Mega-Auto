<template>
  <div class="mx-auto p-5 mt-3">
    <h2
      class=" text-primary font-bold text-xl"
    >
      Add Inventory
    </h2>
    <form class="mt-5 space-y-5" @submit.prevent="handleSubmit">
      <div class="bg-zinc-100 rounded-lg shadow">
        <h2 class="font-bold text-white bg-primary rounded-t-lg px-5 py-1 border-primary border">Auction Detail</h2>
        <div class="px-4 py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          <!-- CarType -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label for="carType" class="block text-xs font-medium text-gray-700"
              >Cars Type</label
            >
            <select
              id="carType"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select Type</option>
              <option v-for="cartType in cartTypes" :value="cartType.id">
                {{ cartType.name }}
              </option>
            </select>
          </div>

          <!-- VIN -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label for="vin" class="block text-xs font-medium text-gray-700"
              >Vin</label
            >
            <input
              type="text"
              id="vin"
              placeholder="Vin"
              class="mt-1 block w-full text-sm border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>

          <!-- Year -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label for="year" class="block text-xs font-medium text-gray-700"
              >Year</label
            >
            <select
              id="year"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select Year</option>
              <option v-for="year in years" :value="year">{{ year }}</option>
            </select>
          </div>

          <!-- Make -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label for="make" class="block text-xs font-medium text-gray-700"
              >Make</label
            >
            <select
              id="make"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select Make</option>
              <option v-for="make in makes" :value="make.id">
                {{ make.name }}
              </option>
            </select>
          </div>

          <!-- Model -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label for="model" class="block text-xs font-medium text-gray-700"
              >Model</label
            >
            <select
              id="model"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select Make</option>
              <option v-for="model in models" :value="model.id">
                {{ model.name }}
              </option>
            </select>
          </div>

          <!-- Body Type -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label for="model" class="block text-xs font-medium text-gray-700"
              >Body Type</label
            >
            <select
              id="model"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select Make</option>
              <option v-for="bodyType in bodyTypes" :value="bodyType.id">
                {{ bodyType.name }}
              </option>
            </select>
          </div>

          <!-- Engine Type -->
          <div class="col-span-1 sm:col-span-1 lg:col-span-2">
            <label
              for="engineType"
              class="block text-xs font-medium text-gray-700"
              >Engine Type</label
            >
            <select
              id="engineType"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select</option>
              <option v-for="engineType in engineTypes" :value="engineType.id">
                {{ engineType.name }}
              </option>
            </select>
          </div>

          <!-- Drive -->
          <div class="col-span-1 sm:col-span-1 lg:col-span-2">
            <label for="drive" class="block text-xs font-medium text-gray-700"
              >Drive</label
            >
            <select
              id="drive"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select</option>
              <option v-for="drive in drives" :value="drive.id">
                {{ drive.name }}
              </option>
            </select>
          </div>

          <!-- Fuel Type -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label
              for="fuelType"
              class="block text-xs font-medium text-gray-700"
              >Fuel Type</label
            >
            <select
              id="fuelType"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select Fuel</option>
              <option v-for="fuelType in fuelTypes" :value="fuelType.id">
                {{ fuelType.name }}
              </option>
            </select>
          </div>

          <!-- Transmission -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label
              for="transmission"
              class="block text-xs font-medium text-gray-700"
              >Transmission</label
            >
            <select
              id="transmission"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select Transmission</option>
              <option
                v-for="transmission in transmissions"
                :value="transmission.id"
              >
                {{ transmission.name }}
              </option>
            </select>
          </div>

          <!-- Mileage -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label for="mileage" class="block text-xs font-medium text-gray-700"
              >Mileage</label
            >
            <div class="relative rounded-md shadow-sm">
              <input
                type="number"
                name="mileage"
                id="milage"
                placeholder="0"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              />
              <div class="absolute inset-y-0 right-0 flex items-center">
                <label for="mileageType" class="sr-only">Mileage Type</label>
                <select
                  id="mileageType"
                  name="mileageType"
                  class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-primary focus:border-primary sm:text-sm"
                >
                  <option>KM</option>
                  <option>Mile</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Interior Color -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label
              for="interiorColor"
              class="block text-xs font-medium text-gray-700"
              >Interior Color</label
            >
            <select
              id="interiorColor"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select Interior Color</option>
              <option
                v-for="interiorColor in interiorColors"
                :value="interiorColor.id"
              >
                {{ interiorColor.name }}
              </option>
            </select>
          </div>

          <!-- Exterior Color -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label
              for="exteriorColor"
              class="block text-xs font-medium text-gray-700"
              >Exterior Color</label
            >
            <select
              id="exteriorColor"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select Interior Color</option>
              <option
                v-for="exteriorColor in exteriorColors"
                :value="exteriorColor.id"
              >
                {{ exteriorColor.name }}
              </option>
            </select>
          </div>

          <!-- Brand -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label for="brand" class="block text-xs font-medium text-gray-700"
              >Brand</label
            >
            <select
              id="brand"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="" selected>Select Brand</option>
              <option v-for="brand in brands" :value="brand">
                {{ brand }}
              </option>
            </select>
          </div>

          <!-- Stock No. -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label for="stockNo" class="block text-xs font-medium text-gray-700"
              >Stock No.</label
            >
            <input
              type="text"
              id="stockNo"
              placeholder="Stock No."
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>

          <!-- In Stock -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label for="inStock" class="block text-xs font-medium text-gray-700"
              >In Stock</label
            >
            <input
              type="number"
              id="inStock"
              placeholder="In Stock"
              class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>

          <!-- Keys -->
          <div class="col-span-2 sm:col-span-1 lg:col-span-2">
            <label for="keys" class="block text-xs font-medium text-gray-700"
              >Keys</label
            >
            <div class="grid grid-cols-2">
              <div class="flex items-center">
                <input
                  type="radio"
                  id="keysYes"
                  name="keys"
                  value="1"
                  class="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary"
                />
                <label
                  for="keysYes"
                  class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
                  >Yes</label
                >
              </div>
              <div class="flex items-center">
                <input
                  type="radio"
                  id="keysNo"
                  name="keys"
                  value="0"
                  class="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary"
                />
                <label
                  for="keysNo"
                  class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
                  >No</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Car Pirce -->
      <div
          class="bg-zinc-100 rounded-lg shadow"
        >
          <h2 class="font-bold text-white bg-primary rounded-t-lg px-5 py-1 border-primary border">Prices</h2>
          <div class="px-4 py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
            <!-- currencyType -->
            <div class="col-span-3 sm:col-span-1 lg:col-span-2">
              <label
                for="currencyType"
                class="block text-xs font-medium text-gray-700"
                >Currency</label
              >
              <select
                id="currencyType"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              >
                <option value="" selected>Select</option>
                <option value="usd">USD</option>
                <option value="cad">CAD</option>
              </select>
            </div>
  
            <!-- ACV -->
            <div class="col-span-3 sm:col-span-1 lg:col-span-2">
              <label for="acv" class="block text-xs font-medium text-gray-700"
                >ACV</label
              >
              <input
                type="number"
                id="acv"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              />
            </div>

            <!-- Minimum Bid -->
            <div class="col-span-3 sm:col-span-1 lg:col-span-2">
              <label for="minimunBid" class="block text-xs font-medium text-gray-700"
                >Minimum Bid</label
              >
              <input
                type="number"
                id="minimunBid"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              />
            </div>

            <!-- Buy Now -->
            <div class="col-span-3 sm:col-span-1 lg:col-span-2">
              <label for="buyNowPrice" class="block text-xs font-medium text-gray-700"
                >Buy Price</label
              >
              <input
                type="number"
                id="buyNowPrice"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              />
            </div>
  
            <!-- Profite Percentage -->
            <div class="col-span-3 sm:col-span-1 lg:col-span-2">
              <label
                for="percentageBuyNow"
                class="block text-xs font-medium text-gray-700"
                >Percentage</label
              >
              <input
                type="number"
                id="percentageBuyNow"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              />
            </div>
  
          </div>
        </div>

      <div class="grid sm:grid-cols-2 gap-5">
        <!-- Car Location -->
        <div
          class="bg-zinc-100 rounded-lg shadow"
        >
          <h2 class="font-bold text-white bg-primary rounded-t-lg px-5 py-1 border-primary border">Location</h2>
          <div class="px-4 py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
            <!-- Country -->
            <div class="col-span-4 sm:col-span-2 lg:col-span-4">
              <label
                for="country"
                class="block text-xs font-medium text-gray-700"
                >Country</label
              >
              <select
                id="country"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              >
                <option value="" selected>Select</option>
                <option v-for="country in countries" :value="country.id">
                  {{ country.name }}
                </option>
              </select>
            </div>
  
            <!-- State -->
            <div class="col-span-4 sm:col-span-2 lg:col-span-4">
              <label for="state" class="block text-xs font-medium text-gray-700"
                >State</label
              >
              <select
                id="state"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              >
                <option value="" selected>Select State</option>
                <option v-for="state in states" :value="state.id">
                  {{ state.name }}
                </option>
              </select>
            </div>
  
            <!-- City -->
            <div class="col-span-4 sm:col-span-2 lg:col-span-4">
              <label
                for="city"
                class="block text-xs font-medium text-gray-700"
                >City</label
              >
              <select
                id="city"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              >
                <option value="" selected>Select City</option>
                <option v-for="city in cities" :value="city.id">
                  {{ city.name }}
                </option>
              </select>
            </div>
  
          </div>
        </div>
  
        <!-- Auction Detail -->
        <div
          class="bg-zinc-100 rounded-lg shadow"
        >
          <h2 class="font-bold text-white bg-primary rounded-t-lg px-5 py-1 border-primary border">Auction Detail</h2>
          <div class="px-4 py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
            <!-- Auction Name -->
            <div class="col-span-3">
              <label
                for="auctionName"
                class="block text-xs font-medium text-gray-700"
                >Auction Name</label
              >
              <input
                type="text"
                id="auctionName"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              />
            </div>
  
            <!-- Run No. -->
            <div class="col-span-3">
              <label for="runNo" class="block text-xs font-medium text-gray-700"
                >Run No.</label
              >
              <input
                type="text"
                id="runNo"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              />
            </div>
  
            <!-- Date -->
            <div class="col-span-3">
              <label
                for="auctionDate"
                class="block text-xs font-medium text-gray-700"
                >Auction Date</label
              >
              <input
                type="date"
                id="auctionDate"
                class="mt-1 block w-full border text-sm border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
              />
            </div>
  
            <!-- Options -->
            <div class="col-span-3">
              <label
                for="bidOrBuy"
                class="block text-xs font-medium text-gray-700"
                >Options</label
              >
              <div class="grid grid-cols-2">
                <div class="flex items-center">
                  <input
                    type="radio"
                    id="bid"
                    name="keys"
                    value="1"
                    class="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary"
                  />
                  <label
                    for="bid"
                    class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
                    >Bid</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    type="radio"
                    id="buy"
                    name="keys"
                    value="0"
                    class="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary"
                  />
                  <label
                    for="buy"
                    class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
                    >Buy</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upload ID -->
      <div
          class="bg-zinc-100 rounded-lg shadow"
        >
          <h2 class="font-bold text-white bg-primary rounded-t-lg px-5 py-1 border-primary border">Upload Images</h2>
          <client-only>
            <file-pond
              name="vehicleImages"
              ref="pond"
              label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
              v-bind:allow-multiple="true"
              accepted-file-types="image/jpeg, image/png"
              v-bind:files="vehicleImages"
              v-on:init="handleFilePondInit"
              v-on:updatefiles="updateVehicleImages"
            />
          </client-only>
      </div>
      <div class="flex gap-5">
        <NuxtLink
          :to="`/customers`"
          class="w-full bg-slate-800 text-center text-white rounded-md py-2 px-3 hover:bg-primary transition-all duration-500"
        >
          Back
        </NuxtLink>
        <button
          type="submit"
          class="w-full bg-primary text-white rounded-md py-2 px-3 hover:bg-black transition-all duration-500"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

const FilePond = vueFilePond(
          FilePondPluginFileValidateType,
          FilePondPluginImagePreview
  );

export default {
  components: {
    FilePond,
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
  },
  data() {
    return {
      vehicleImages: [],
      years: ["2001", "2002"],
      cartTypes: [
        { id: "1", name: "ICBC" },
        { id: "2", name: "EDGE" },
        { id: "3", name: "COPART" },
      ],
      makes: [
        { id: "1", name: "Toyota" },
        { id: "2", name: "Kia" },
        { id: "3", name: "Nissan" },
      ],
      models: [
        { id: "1", name: "Corolla", make: "Toyota" },
        { id: "2", name: "k5", make: "Kia" },
        { id: "3", name: "GTR", make: "Nissan" },
      ],
      bodyTypes: [
        { id: "1", name: "Sedan" },
        { id: "2", name: "Coupe" },
        { id: "3", name: "Convertible" },
        { id: "4", name: "Hatchback" },
        { id: "5", name: "Compact" },
      ],
      engineTypes: [
        { id: "1", name: "1.3L" },
        { id: "2", name: "1.6L" },
        { id: "3", name: "1.8L" },
        { id: "4", name: "2.0L" },
        { id: "5", name: "2.5L" },
      ],
      drives: [
        { id: "1", name: "AWD" },
        { id: "2", name: "RWD" },
        { id: "3", name: "FWD" },
        { id: "4", name: "4WD" },
        { id: "5", name: "4X4" },
      ],
      fuelTypes: [
        { id: "1", name: "Gas" },
        { id: "2", name: "Diesel" },
        { id: "3", name: "Electric" },
        { id: "4", name: "Gasoline Hybrid" },
        { id: "5", name: "Other" },
      ],
      transmissions: [
        { id: "1", name: "Automatic" },
        { id: "2", name: "Manual" },
        { id: "3", name: "Sequential" },
        { id: "4", name: "CVT" },
        { id: "5", name: "1 Speed Automatic" },
      ],
      interiorColors: [
        { id: "1", name: "Black" },
        { id: "2", name: "Blue" },
        { id: "3", name: "Yellow" },
        { id: "4", name: "Whilte" },
        { id: "5", name: "Green" },
      ],
      exteriorColors: [
        { id: "1", name: "Black" },
        { id: "2", name: "Blue" },
        { id: "3", name: "Yellow" },
        { id: "4", name: "Whilte" },
        { id: "5", name: "Green" },
      ],
      brands: ["Clean", "Non Brand", "Used"],
      countries: [
        {id: "1", name:"USA"},
        {id: "2", name:"CA"},
      ],
      states: [
        {id:"1", name:"Ontario"},
        {id:"2", name:"Toronto"}
      ],
      cities: [
        {id:"1", name:"London"},
        {id:"2", name:"WoodLand"}
      ]
    };
  },
  methods: {
    handleFilePondInit() {
      console.log("FilePond has initialized");
    },
    updateVehicleImages(files) {
      this.vehicleImages = files.map(fileItem => fileItem.file);
      console.log("Updated vehicleImages:", this.vehicleImages);
    },
    handleSubmit() {
      const formData = new FormData();
      const inputs = [
        "carType",
        "vin",
        "year",
        "make",
        "model",
        "bodyType",
        "engineType",
        "drive",
        "fuelType",
        "transmission",
        "mileage",
        "interiorColor",
        "exteriorColor",
        "brand",
        "stockNo",
        "inStock",
        "keys",
        "currencyType",
        "acv",
        "minimunBid",
        "buyNowPrice",
        "percentageBuyNow",
        "country",
        "state",
        "city",
        "auctionName",
        "runNo",
        "auctionDate",
        "bidOrBuy"
      ];

      inputs.forEach((inputId) => {
        const input = document.getElementById(inputId);
        if (input) {
          formData.append(inputId, input.value);
        }
      });

      this.vehicleImages.forEach((file) => {
        formData.append("uploadedFiles", file);
      });

      // Log all form data
      const formDataObject = {};
      inputs.forEach((inputId) => {
        const input = document.getElementById(inputId);
        if (input) {
          formDataObject[inputId] = input.value;
        }
      });
      formDataObject.uploadedFiles = this.vehicleImages;

      console.log("Form Data:", formDataObject);
    console.log("Uploaded Files:", [...this.vehicleImages]);
    },
  },
};
</script>
