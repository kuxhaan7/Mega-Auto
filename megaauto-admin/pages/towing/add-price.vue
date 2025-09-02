<template>
    <div class="px-5 py-4 bg-green-100 rounded-lg shadow">
      <!-- Title -->
      <div>
        <h2 class="font-bold">Add Towing Price</h2>
      </div>
      <!-- Form -->
      <form @submit.prevent="addPrice" class="mt-3">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Country -->
          <div>
            <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
            <select
              id="country"
              v-model="formData.country"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="">Select Country</option>
              <option value="US">US</option>
              <option value="CANADA">Canada</option>
            </select>
          </div>
  
          <!-- State -->
          <div>
            <label for="state" class="block text-sm font-medium text-gray-700">State</label>
            <select
              id="state"
              v-model="formData.state"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="">Select State</option>
              <option value="Muneeb">Muneeb</option>
              <option value="Mir">Mir</option>
              <option value="Aziz">Aziz</option>
            </select>
          </div>
  
          <!-- City -->
          <div>
            <label for="city" class="block text-sm font-medium text-gray-700">City</label>
            <select
              id="city"
              v-model="formData.city"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option value="">Select City</option>
              <option value="Muneeb">Muneeb</option>
              <option value="Mir">Mir</option>
              <option value="Aziz">Aziz</option>
            </select>
          </div>
  
          <!-- Start Date -->
          <div>
            <label for="startDate" class="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              id="startDate"
              v-model="formData.startDate"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
  
          <!-- End Date -->
          <div>
            <label for="endDate" class="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              id="endDate"
              v-model="formData.endDate"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
  
          <!-- Price -->
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="price"
              v-model="formData.price"
              placeholder="Price"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
  
        <!-- Submit -->
        <div class="text-center">
          <button
            type="submit"
            class="mt-5 bg-primary text-white rounded-md py-1 px-10 hover:bg-black transition-all duration-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { Search } from "lucide-vue-next";
  
  export default {
    components: {
      Search,
    },
    data() {
      return {
        search: "",
        formData: {
          country: "",
          state: "",
          city: "",
          startDate: "",
          endDate: "",
          price: null,
        },
      };
    },
    methods: {
      addPrice() {
        console.log(this.formData);
      },
    },
  };
  </script>
  