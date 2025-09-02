<template>
  <div class="py-5 px-4 bg-blue-100 rounded-lg shadow">
    <h2 class="font-bold">Auctions Analytics</h2>
    <div class="grid sm:grid-cols-3 mt-3 gap-5">
      <div class="bg-white rounded-lg shadow px-4 py-2">
        <h3 class="font-bold">Total</h3>
        <span>8</span>
      </div>
      <div class="bg-white rounded-lg shadow px-3 py-2">
        <h3 class="font-bold">Active</h3>
        <span>3</span>
      </div>
      <div class="bg-white rounded-lg shadow px-3 py-2">
        <h3 class="font-bold">Inactive</h3>
        <span>5</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuctionsAnalytics",
};
</script>
