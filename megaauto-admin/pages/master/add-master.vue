<template>
  <div class="mx-auto">
    <h2 class="text-center font-bold rounded text-xl py-2">Add Master</h2>
    <form class="space-y-4 px-5" @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
        <!-- Master Type -->
        <div class="col-span-4 sm:col-span-2">
          <label
            for="masterType"
            class="block text-sm font-medium text-gray-700"
            >Master Type</label
          >
          <select
            id="masterType"
            v-model="masterType"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
          >
            <option value="" selected>Select Master Type</option>
            <option value="make">Make</option>
            <option value="modal">Modal</option>
            <option value="year">Year</option>
          </select>
        </div>
        <!-- Make if Master Type is modal -->
        <div v-if="masterType === 'modal'" class="col-span-4 sm:col-span-3">
          <label for="make" class="block text-sm font-medium text-gray-700"
            >Make</label
          >
          <select
            id="make"
            v-model="make"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
          >
            <option value="" selected>Select Make</option>
            <option value="corrola">Corolla</option>
            <option value="toyota">Toyota</option>
            <option value="kia">KIA</option>
          </select>
        </div>
        <!-- Name -->
        <div class="col-span-4 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Name"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
          />
        </div>
        <!-- Status -->
        <div class="col-span-4 sm:col-span-2">
          <label for="status" class="block text-sm font-medium text-gray-700"
            >Status</label
          >
          <select
            id="status"
            v-model="status"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
          >
            <option value="" selected>Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">In Active</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <!-- Submit -->
        <div class="col-span-4 sm:col-span-2">
          <button
            type="submit"
            class="w-full mt-0 sm:mt-6 bg-primary text-white rounded-md py-2 px-3 hover:bg-black transition-all duration-500"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      masterType: "",
      make: "",
      name: "",
      status: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Master Type:", this.masterType);
      console.log("Make:", this.make);
      console.log("Name:", this.name);
      console.log("Status:", this.status);
    },
  },
};
</script>
