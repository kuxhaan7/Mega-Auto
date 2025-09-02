<template>
  <div>
    <auctionAutoFinder />
    <Main class="sm:py-5 px-0 sm:px-5" />
  </div>
</template>

<script>
import auctionAutoFinder from "~/components/auctionAutoFinder.vue";
import Main from "./main.vue";

export default {
  name: "Home",
  components: {
    auctionAutoFinder,
    Main,
  },
};
</script>
