// plugins/dayjs.js
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default defineNuxtPlugin((nuxtApp) => {
  // Make Day.js available globally
  nuxtApp.provide("dayjs", dayjs);
});
