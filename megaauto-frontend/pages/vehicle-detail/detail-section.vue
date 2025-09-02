<template>
  <div>
    <!-- Section Header -->
    <div class="bg-primary p-2 rounded-t text-white">
      <span class="font-bold">Details</span>
    </div>

    <!-- Details Loop -->
    <div
      v-for="(item, index) in filteredDetails"
      :key="index"
      class="flex justify-between border-b border-x p-2 font-semibold text-sm"
    >
      <div>{{ item.label }}</div>
      <div :class="item.label ==='VIN #' ? 'text-primary' : ''">
        {{ item.label === "VIN #" ? maskedVin(item.value) : item.value }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: {
    vehicle: {
      type: Object
    },
  },
  name: "DetailSection",
  setup(props) {
    const details = ref([
      { label: "Brand", value: props.vehicle.brand },
      { label: "Type Of Wreck", value: props.vehicle.typeOfWreck },
      { label: "VIN #", value: props.vehicle.vin },
      { label: "Year", value: props.vehicle.year },
      { label: "Make", value: props.vehicle.make },
      { label: "Model Detail", value: props.vehicle.model },
      { label: "Mileage", value: props.vehicle.odometer + " " + props.vehicle.odometerType},
      { label: "Engine", value: props.vehicle.liters },
      { label: "Transmission", value: props.vehicle.transmission },
      { label: "Drive Type", value: props.vehicle.driveLineType },
      { label: "Fuel Type", value: props.vehicle.fuelType },
      { label: "Cylinder", value: props.vehicle.nbrCylinders },
      { label: "TrimLevel", value: props.vehicle.trimLevel },
      { label: "Keys", value: props.vehicle.isKeys ? "Yes" : "No" },
      { label: "Location", value: props.vehicle.locationCity + " " + props.vehicle.locationProvince + " " + props.vehicle.locationCountry},
    ]);

    const maskedVin = (vin) => {
      if (!vin) return "";
      return vin.slice(0, -6) + "******";
    };

    const filteredDetails = computed(() =>
      details.value.filter(
        (item) => item.value !== undefined && item.value !== null
      )
    );

    return {
      filteredDetails,
      maskedVin,
    };
  },
};
</script>
