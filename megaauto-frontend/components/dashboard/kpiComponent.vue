<template>
  <div
    class="bg-slate-200 text-black-500 mb-3 rounded shadow-xl p-2 sm:p-5 flex items-center text-center"
  >
    <div>
      <div class="flex">
        <div v-if="icon">
          <component :is="icon" class="w-6 h-6 text-primary" />
        </div>
        <h3 class="text-xs sm:text-sm font-semibold leading-tight flex-1 mb-2">
          {{ kpiTitle }}
        </h3>
      </div>
      <div class="relative overflow-hidden transition-all duration-500 w-32 sm:w-36">
        <div>
          <h4
            class="text-2xl lg:text-3xl text-black font-semibold leading-tight inline-block"
          >
            {{ totalIncome }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    kpiTitle: {
      type: String,
      required: true,
    },
    kpiValue: {
      type: Number,
      required: true,
    },
    icon: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      totalIncome: 0,
    };
  },
  methods: {
    animateCounters() {
      this.countUp(0, this.kpiValue, 2000, (value) => {
        this.totalIncome = value;
      });
    },
    countUp(startVal, endVal, duration, callback) {
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentVal = Math.floor(
          progress * (endVal - startVal) + startVal
        );
        callback(currentVal);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    },
  },
  mounted() {
    setTimeout(() => {
      this.animateCounters();
    }, 100);
  },
};
</script>
