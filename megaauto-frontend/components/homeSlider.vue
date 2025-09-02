<template>
  <Splide
    :options="{ perPage: 1, perMove: 1, type: 'loop' }"
    aria-labelledby="My Favorite Images"
  >
    <SplideSlide v-for="(section, index) in heroSections" :key="index">
      <div
        class="w-full h-64 flex items-center justify-center bg-gray-800 text-white sm:rounded"
      >
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-4">{{ section.title }}</h2>
          <p class="mb-4">{{ section.description }}</p>
          <button
              class="bg-white text-black hover:bg-gray-700 hover:text-white font-bold py-2 px-4 rounded"
            >
              {{ section.buttonText }}
            </button>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>

<script>
export default {
  setup() {
    const heroSections = ref([
      {
        title: "Hero Section 1",
        description: "This is the description for the first hero section.",
        buttonText: "Learn More",
      },
      {
        title: "Hero Section 2",
        description: "This is the description for the second hero section.",
        buttonText: "Get Started",
      },
      {
        title: "Hero Section 3",
        description: "This is the description for the third hero section.",
        buttonText: "Contact Us",
      },
      {
        title: "Hero Section 4",
        description: "This is the description for the fourth hero section.",
        buttonText: "More Info",
      },
      {
        title: "Hero Section 5",
        description: "This is the description for the fifth hero section.",
        buttonText: "Discover",
      },
    ]);

    return {
      heroSections,
    };
  },
};
</script>
