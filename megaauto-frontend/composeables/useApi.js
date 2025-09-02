// composables/useApi.js
import { useAxios } from "./axiosInstance";

export const useApi = () => {
  const api = useAxios();

  const getPGVehicles = async () => {
    try {
      const response = await fetch("https://pix.progi.com/admin/api/brokers/detailAction?code=Z2&api_key=2QV6L91p4BiLB1b04So2BPKE1w592ZruApTYDyP7");      
      return response.json();
    } catch (err) {
      console.error("Error fetching vehicles:", err);
      throw err;
    }
  };

  return {
    getPGVehicles,
  };
};
