// plugins/axios.js
import axios from "axios";
import { defineNuxtPlugin } from "#app";
import { useRuntimeConfig } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  // Create a new Axios instance
  const api = axios.create({
    baseURL: config.public.baseUrl,
  });

  nuxtApp.provide("axios", api);
  nuxtApp.provide("api", api);
});
