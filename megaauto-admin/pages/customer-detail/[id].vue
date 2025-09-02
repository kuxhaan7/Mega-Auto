<template>
  <div class="mx-auto p-5 mt-4">
    <div class="mt-2 flex justify-between items-center flex-wrap px-5">
      <KPI />
    </div>

    <!-- Customer Info -->
    <div class="mt-4">
      <CustomerInfo :id="customerId"/>
    </div>
  </div>
</template>

<script>
import KPI from "./kpi.vue";
import CustomerInfo from "./customer-info.vue";

export default {
  components: {
    KPI,
    CustomerInfo,
  },
  data() {
    return {
      customerId: this.$route.params.id
    };
  },
  name: "CustomerDetail",
};
</script>
