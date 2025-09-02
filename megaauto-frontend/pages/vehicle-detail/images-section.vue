<template>
  <div>
    <!-- Main Img -->
    <Fancybox
      :options="{
        Carousel: {
          infinite: false,
        },
      }"
    >
      <img
        :src="vehicle.mainPictureURL"
        alt="Main Image"
        class="rounded image-size w-full object-cover"
        data-fancybox="gallery"
      />
      <Splide
        :options="{
          perPage: 4,
          perMove: 1,
          arrows: false,
          pagination: false,
          autoplay: true,
        }"
      >
        <SplideSlide
          v-for="(imageURL, index) in vehicle.picturesURL"
          :key="index"
        >
          <div class="flex items-center justify-center mt-2 ps-2 rounded">
            <img
              :src="imageURL"
              alt="Vehicle Image"
              class="rounded h-32 w-full object-cover"
              data-fancybox="gallery"
            />
          </div>
        </SplideSlide>
      </Splide>
    </Fancybox>
  </div>
</template>

<script>
import Fancybox from "../components/fancybox.vue";

export default {
  props: {
    vehicle: {
      type: Object,
    },
  },
  name: "ImagesSection",
  components: {
    Fancybox,
  },
};
</script>

<style scoped>
.image-size {
  height: 29rem;
}
</style>
