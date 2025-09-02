<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

useHead({
  title: 'MX Auto Auctions',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
});
</script>
