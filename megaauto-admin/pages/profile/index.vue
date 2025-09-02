<template>
  <div>
    <div class="flex h-screen overflow-hidden">
      <!-- Sidebar -->
      <div
        class='bg-gray-800 text-white lg:relative h-full transition-all duration-300'
      >
        <Sidebar 
          :isCollapsed="!isSidebarOpen"
          @toggleSidebar="toggleSidebar" 
          @changeComponent="changeComponent" 
        />
      </div>

      <!-- Main Content -->
      <div 
        :class="['transition-all duration-300 flex-1 p-5 overflow-auto']"
      >
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./sidebar.vue";
import PasswordChange from "./passwordChange.vue";
import UpdateProfile from "./updateProfile.vue";

export default {
  components: {
    Sidebar,
    PasswordChange,
    UpdateProfile,
  },
  data() {
    return {
      currentComponent: "UpdateProfile",
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    changeComponent(componentName) {
      this.currentComponent = componentName;
    },
  },
};
</script>
