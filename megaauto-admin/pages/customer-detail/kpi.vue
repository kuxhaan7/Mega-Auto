<template>
    <div v-for="(kpi, index) in kpis" :key="index">
      <KPI :kpiTitle="kpi.title" :kpiValue="kpi.value" :icon="kpi.icon" />
    </div>
</template>

<script>
import {
  BriefcaseIcon,
  ClockIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  XCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/24/outline";
import KPI from "../../components/dashboard/kpiComponent.vue";

export default {
  components: {
    KPI,
  },
  data() {
    return {
      kpis: [
        { title: "Total Bid", value: 25, icon: BriefcaseIcon },
        { title: "Bids In Process", value: 10, icon: ClockIcon },
        { title: "Won", value: 2, icon: CheckCircleIcon },
        { title: "To Be Paid", value: 4, icon: CurrencyDollarIcon },
        { title: "Not Won", value: 2, icon: XCircleIcon },
        { title: "Awaiting Approval", value: 5, icon: ExclamationCircleIcon },
      ],
    };
  },
};
</script>
