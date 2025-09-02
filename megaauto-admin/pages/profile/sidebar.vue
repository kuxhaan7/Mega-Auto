<template>
  <div class="flex flex-col justify-start h-screen">
    <!-- Toggle Button -->
    <div class="sm:p-4 p-2">
      <button @click="$emit('toggleSidebar')" class="w-full text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 w-full"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>

    <!-- Sidebar Links -->
    <nav class="space-y-4 sm:p-4 p-2">
      <button
        @click="$emit('changeComponent', 'UpdateProfile')"
        class="w-full text-left sm:px-4 px-2 py-2 hover:bg-gray-700 flex items-center"
      >
        <UserIcon class="w-6 h-6" />
        <span v-if="!isCollapsed" class="ml-4">Update Profile</span>
      </button>
      <button
        @click="$emit('changeComponent', 'PasswordChange')"
        class="w-full text-left sm:px-4 px-2 py-2 hover:bg-gray-700 flex items-center"
      >
        <KeyIcon class="w-6 h-6" />
        <span v-if="!isCollapsed" class="ml-4">Password Change</span>
      </button>
    </nav>
  </div>
</template>

<script>
import {
  UserIcon,
  KeyIcon,
} from "@heroicons/vue/24/outline";

export default {
  name: "Sidebar",
  components: {
    UserIcon,
    KeyIcon,
  },
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
