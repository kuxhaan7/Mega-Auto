// composables/axiosInstance.js
import axios from 'axios';
import { useRuntimeConfig } from '#imports';

export const useAxios = () => {
  const config = useRuntimeConfig();

  // Create an Axios instance
  const api = axios.create({
    baseURL: config.public.baseUrl,
  });

  return api;
};
