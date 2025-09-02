<template>
  <div class="mx-auto p-5 mt-3">
    <h2 class="text-center bg-zinc-100 border border-slate-500 text-primary font-bold rounded-lg text-xl py-3">
      Add Customer
    </h2>
    <form class="mt-5 space-y-5" @submit.prevent="handleSubmit">
      <div class="bg-zinc-100 border border-slate-500 rounded-lg shadow p-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          <!-- Lead -->
          <div class="col-span-2">
            <label for="lead" class="block text-sm font-medium text-gray-700"
              >Lead</label
            >
            <select
              id="lead"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            >
              <option selected>Select Lead</option>
              <option value="Muneeb">Muneeb</option>
              <option value="Mir">Mir</option>
              <option value="Aziz">Aziz</option>
            </select>
          </div>

          <!-- First Name -->
          <div class="col-span-2">
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
              >First Name</label
            >
            <input
              type="text"
              id="first-name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
          <!-- Last Name -->
          <div class="col-span-2">
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700"
              >Last Name</label
            >
            <input
              type="text"
              id="last-name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
          <!-- Company Name -->
          <div class="col-span-3">
            <label
              for="company-name"
              class="block text-sm font-medium text-gray-700"
              >Company Name</label
            >
            <input
              type="text"
              id="company-name"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
          <!-- Nationality -->
          <div class="col-span-3">
            <label
              for="nationality"
              class="block text-sm font-medium text-gray-700"
              >Nationality</label
            >
            <input
              type="text"
              id="nationality"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>

          <!-- Line 2 -->
          <!-- Mobile -->
          <div class="col-span-2">
            <label for="mobile" class="block text-sm font-medium text-gray-700"
              >Mobile No</label
            >
            <input
              type="tel"
              id="mobile"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
          <!-- Email -->
          <div class="col-span-3">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email Address</label
            >
            <input
              type="email"
              id="email"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
          <!-- Password -->
          <div class="col-span-3">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <input
              type="password"
              id="password"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
          <!-- ID Type -->
          <div class="col-span-2">
            <label for="id-type" class="block text-sm font-medium text-gray-700"
              >ID Type</label
            >
            <input
              type="text"
              id="id-type"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
          <!-- ID Number -->
          <div class="col-span-2">
            <label
              for="id-number"
              class="block text-sm font-medium text-gray-700"
              >ID Number</label
            >
            <input
              type="text"
              id="id-number"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
      </div>

      <!-- Upload ID -->
      <div class="bg-zinc-100 border border-slate-500 rounded-lg shadow p-5">
        <label class="block text-sm font-medium text-gray-700"
          >Upload ID and Address Proof</label
        >
        <file-pond
          class="filepond mt-1"
          ref="pond"
          allow-multiple="true"
          :files="myFiles"
          @:init="handleFilePondInit"
          name="filepond"
        />
      </div>

      <div class="bg-zinc-100 border border-slate-500 rounded-lg shadow p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
        <!-- Address -->
        <div class="col-span-12">
          <label for="address" class="block text-sm font-medium text-gray-700"
            >Address</label
          >
          <input
            type="text"
            id="address"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
          />
        </div>

        <!-- Last Line -->
          <!-- City -->
          <div class="col-span-4">
            <label for="city" class="block text-sm font-medium text-gray-700"
              >City</label
            >
            <input
              type="text"
              id="city"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
          <!-- State -->
          <div class="col-span-4">
            <label for="state" class="block text-sm font-medium text-gray-700"
              >State</label
            >
            <input
              type="text"
              id="state"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
          <!-- Country -->
          <div class="col-span-4">
            <label for="country" class="block text-sm font-medium text-gray-700"
              >Country</label
            >
            <input
              type="text"
              id="country"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary"
            />
          </div>
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

const FilePond = vueFilePond();

export default {
  components: {
    FilePond,
  },
  data() {
    return {
      myFiles: [],
    };
  },
  methods: {
    handleSubmit() {
      const formData = new FormData();
      const inputs = [
        "lead",
        "first-name",
        "last-name",
        "company-name",
        "nationality",
        "mobile",
        "email",
        "password",
        "id-type",
        "id-number",
        "address",
        "city",
        "state",
        "country",
      ];

      inputs.forEach((inputId) => {
        const input = document.getElementById(inputId);
        if (input) {
          formData.append(inputId, input.value);
        }
      });

      const files = document.getElementById("id-upload").files;
      for (let i = 0; i < files.length; i++) {
        formData.append("uploadedFiles", files[i]);
      }

      console.log("Form Data:", Object.fromEntries(formData));
    },
  },
};
</script>
