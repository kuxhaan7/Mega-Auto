<template>
  <div
    v-if="isVisible"
    :id="`toast-${type}`"
    :class="`flex items-center w-full fixed z-10 right-0 top-36 max-w-xs p-3 mr-4 border-t-4 ${bColor} text-gray-500 bg-white rounded shadow-lg`"
    role="alert"
  >
    <div
      :class="[
        'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg',
        toastClasses[type].iconBg,
        toastClasses[type].iconColor,
      ]"
    >
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path :d="toastClasses[type].iconPath" />
      </svg>
      <span class="sr-only">{{ toastClasses[type].srLabel }} icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">{{ message }}</div>
    <button
      type="button"
      class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
      @click="closeToast"
      :data-dismiss-target="`#toast-${type}`"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ["success", "danger", "warning"].includes(value),
  },
  bColor : {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true,
  },
});

const isVisible = ref(true);

const toastClasses = {
  success: {
    iconBg: "bg-green-100 dark:bg-green-800",
    iconColor: "text-green-500 dark:text-green-200",
    iconPath:
      "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z",
    srLabel: "Check",
  },
  danger: {
    iconBg: "bg-red-100 dark:bg-red-800",
    iconColor: "text-red-500 dark:text-red-200",
    iconPath:
      "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z",
    srLabel: "Error",
  },
  warning: {
    iconBg: "bg-orange-100 dark:bg-orange-700",
    iconColor: "text-orange-500 dark:text-orange-200",
    iconPath:
      "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z",
    srLabel: "Warning",
  },
};

const closeToast = () => {
  isVisible.value = false;
};
</script>
