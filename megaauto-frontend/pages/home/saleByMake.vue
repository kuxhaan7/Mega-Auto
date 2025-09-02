<template>
  <div>
    <h2 class="text-lg font-bold">Cars for Sale by Make</h2>
    <div
      class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 sm:gap-4 mt-3"
    >
      <div
        v-for="(make, index) in makes"
        :key="make.name"
        v-show="index < displayCount"
        class="bg-slate-100 hover:bg-white hover:shadow-lg transition-all duration-500 ease-in-out rounded-lg p-2 h-36"
        :class="{ 'slide-down': index >= initialDisplayCount }"
      >
        <a :href="make.url" class="flex flex-col justify-around items-center">
          <img
            :src="make.image"
            :alt="make.name"
            class="w-16 h-16 object-cover rounded-md mb-2"
          />
          <div class="text-center">
            <h3 class="text-base font-semibold text-primary">{{ make.name }}</h3>
            <span class="text-gray-600 font-light font-xs">{{
              make.count
            }}</span>
          </div>
        </a>
      </div>
    </div>

    <!-- View More/Less Button -->
    <div class="flex justify-center items-center mt-4">
      <button
        v-if="displayCount < makes.length"
        @click="showMore"
        class="text-primary font-semibold"
      >
        View More
      </button>
      <button
        v-else
        @click="showLess"
        class="text-primary font-semibold"
      >
        Show Less
      </button>
    </div>
  </div>
</template>

<script>
import acuraLogo from "~/assets/car-logo/acura-logo.webp";
import audiLogo from "~/assets/car-logo/audi-logo.webp";
import bmwLogo from "~/assets/car-logo/bmw-logo.webp";
import buickLogo from "~/assets/car-logo/buick-logo.webp";
import cadillacLogo from "~/assets/car-logo/cadillac-logo.webp";
import chevroletLogo from "~/assets/car-logo/chevrolet-logo.webp";
import chryslerLogo from "~/assets/car-logo/chrysler-logo.webp";
import dodgeLogo from "~/assets/car-logo/dodge-logo.webp";
import fordLogo from "~/assets/car-logo/ford-logo.webp";
import gmcLogo from "~/assets/car-logo/gmc-logo.webp";
import hondaLogo from "~/assets/car-logo/honda-logo.webp";
import hyundaiLogo from "~/assets/car-logo/hyundai-logo.webp";
import infinitiLogo from "~/assets/car-logo/infiniti-logo.webp";
import jeepLogo from "~/assets/car-logo/jeep-logo.webp";
import kiaLogo from "~/assets/car-logo/kia-logo.webp";
import lexusLogo from "~/assets/car-logo/lexus-logo.webp";
import mazdaLogo from "~/assets/car-logo/mazda-logo.webp";
import mercedesLogo from "~/assets/car-logo/mercedes-benz-logo.webp";
import nissanLogo from "~/assets/car-logo/nissan-logo.webp";
import ramLogo from "~/assets/car-logo/ram-logo.webp";
import subaruLogo from "~/assets/car-logo/subaru-logo.webp";
import toyotaLogo from "~/assets/car-logo/toyota-logo.webp";
import volkswagenLogo from "~/assets/car-logo/volkswagen-logo.webp";
import volvoLogo from "~/assets/car-logo/volvo-logo.webp";

export default {
  data() {
    return {
      initialDisplayCount: 6,
      displayCount: 6,
      desktopInitialCount: 16,
      makes: [
        {
          name: "Honda",
          count: "1,250",
          image: hondaLogo,
          url: "/cars/honda",
        },
        {
          name: "Toyota",
          count: "1,000",
          image: toyotaLogo,
          url: "/cars/toyota",
        },
        {
          name: "Nissan",
          count: "1,000",
          image: nissanLogo,
          url: "/cars/nissan",
        },
        {
          name: "Acura",
          count: "1,000",
          image: acuraLogo,
          url: "/cars/acura",
        },
        {
          name: "BMW",
          count: "1,000",
          image: bmwLogo,
          url: "/cars/bmw",
        },
        {
          name: "Mercedes Benz",
          count: "1,000",
          image: mercedesLogo,
          url: "/cars/mercedes",
        },
        {
          name: "Ford",
          count: "1,000",
          image: fordLogo,
          url: "/cars/ford",
        },
        {
          name: "Chevrolet",
          count: "1,000",
          image: chevroletLogo,
          url: "/cars/chevrolet",
        },
        {
          name: "Volkswagen",
          count: "1,000",
          image: volkswagenLogo,
          url: "/cars/volkswagen",
        },
        {
          name: "Hyundai",
          count: "1,000",
          image: hyundaiLogo,
          url: "/cars/hyundai",
        },
        {
          name: "Kia",
          count: "1,000",
          image: kiaLogo,
          url: "/cars/kia",
        },
        {
          name: "Lexus",
          count: "1,000",
          image: lexusLogo,
          url: "/cars/lexus",
        },
        {
          name: "Subaru",
          count: "1,000",
          image: subaruLogo,
          url: "/cars/subaru",
        },
        {
          name: "Volvo",  
          count: "1,000",
          image: volvoLogo,
          url: "/cars/volvo",
        },
        {
          name: "Jeep",
          count: "1,000",
          image: jeepLogo,
          url: "/cars/jeep",
        },
        {
          name: "Mazda",
          count: "1,000",
          image: mazdaLogo,
          url: "/cars/mazda",
        },
        {
          name: "Audi",
          count: "1,000",
          image: audiLogo,
          url: "/cars/audi", 
        },
        {
          name: "Buick",
          count: "1,000",
          image: buickLogo,
          url: "/cars/buick", 
        },
        {
          name: "Cadillac",
          count: "1,000",
          image: cadillacLogo,
          url: "/cars/cadillac", 
        },
        {
          name: "Chrysler",
          count: "1,000",
          image: chryslerLogo,
          url: "/cars/chrysler", 
        },
        {
          name: "Dodge",
          count: "1,000",
          image: dodgeLogo,
          url: "/cars/dodge", 
        },
        {
          name: "GMC",
          count: "1,000",
          image: gmcLogo,
          url: "/cars/gmc", 
        },
        {
          name: "Infiniti",
          count: "1,000",
          image: infinitiLogo,
          url: "/cars/infiniti", 
        },
        {
          name: "Ram",
          count: "1,000",
          image: ramLogo,
          url: "/cars/ram", 
        }
      ],
    };
  },
  computed: {
    isDesktop() {
      return window.innerWidth >= 1024;
    },
  },
  methods: {
    showMore() {
      if (this.isDesktop) {
        this.displayCount = this.displayCount + 16;
      } else {
        this.displayCount = this.displayCount + 6;
      }
    },
    showLess() {
      this.displayCount = this.isDesktop
        ? this.desktopInitialCount
        : this.initialDisplayCount;
    },
    handleResize() {
      if (this.isDesktop) {
        this.displayCount = this.desktopInitialCount;
      } else {
        this.displayCount = this.initialDisplayCount;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.slide-down {
  animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
