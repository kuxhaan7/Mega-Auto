<template>
  <div class="py-5 px-4 bg-green-100 rounded-lg shadow">
    <h2 class="font-bold">Auction Source</h2>
    <form @submit.prevent="addSource" class="mt-5">
      <div class="grid grid-cols-12 gap-4">
        <input
          type="text"
          placeholder="Name"
          v-model="name"
          class="col-span-5 py-2 px-3 rounded focus:ring-0 focus:border-primary focus:shadow-primary"
        />
        <input
          type="text"
          placeholder="Short Name"
          v-model="shortName"
          class="col-span-5 py-2 px-2 rounded focus:ring-0 focus:border-primary focus:shadow-primary"
        />
        <button
          type="submit"
          class="col-span-2 py-2 px-2 text-sm font-medium transition-all duration-200 text-white bg-primary rounded-lg border-primary hover:bg-black hover:border-black focus:ring-0 focus:outline-none"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AuctionSource",
  data() {
    return {
      name: "",
      shortName: "",
    };
  },
  methods: {
    addSource() {
      console.log("Name: " + this.name + ". ShortName: " + this.shortName);
    },
  },
};
</script>
