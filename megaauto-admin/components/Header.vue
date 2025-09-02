<template>
  <div class="shadow-md sticky top-0 z-50">
    <!-- Main Navigation -->
    <nav class="bg-primary overflow-visible min-h-auto">
      <div class="mx-auto max-w-8xl px-4 py-2 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center gap-3">
            <!-- Sidebar Toggle Button for Mobile -->
            <div class="flex items-center md:hidden">
              <button @click="sidebarOpen = !sidebarOpen" class="text-white">
                <span class="sr-only">Open sidebar</span>
                <MenuIcon
                  v-if="!sidebarOpen"
                  class="block h-6 w-6"
                  aria-hidden="true"
                />
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Logo -->
            <div class="flex items-center">
              <div class="text-white font-extrabold">
                <a href="/" class="flex items-start sm:items-center flex-col">
                  <h2 class="text-lg sm:text-3xl m-0">MX</h2>
                  <h4 class="text-xs m-0">Auto Auctions</h4>
                </a>
              </div>
            </div>
          </div>

          <!-- User Profile Mobile -->
          <div class="flex items-center md:hidden">
            <Menu as="div" class="relative ml-3" v-if="user.isLoggedIn">
              <div>
                <MenuButton
                  class="relative flex max-w-xs items-center text-white text-sm focus:outline-none hover:underline"
                >
                  <span class="sr-only">Open user menu</span>
                  <span class="text-xs font-bold flex items-center"
                    >{{ user.name }}
                    <ChevronDownIcon class="w-5 h-5 ml-2" aria-hidden="true"
                  /></span>
                </MenuButton>
              </div>
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem
                  v-for="item in userNavigation"
                  :key="item.name"
                  v-slot="{ active }"
                >
                  <a
                    :href="item.href"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >{{ item.name }}</a
                  >
                </MenuItem>
              </MenuItems>
            </Menu>

            <div v-else class="ml-3 flex items-center">
              <nuxt-link
                to="/login"
                class="text-sm font-medium text-white hover:underline"
                >Login</nuxt-link
              >
              <span class="mx-2 text-white">|</span>
              <nuxt-link
                to="/register"
                class="text-sm font-medium text-white hover:underline"
                >Register</nuxt-link
              >
            </div>
          </div>

          <!-- User Profile for Desktop -->
          <div class="hidden md:flex items-center">
            <Menu as="div" class="relative ml-3" v-if="user.isLoggedIn">
              <div>
                <MenuButton
                  class="relative flex max-w-xs items-center text-white text-sm focus:outline-none hover:underline"
                >
                  <span class="sr-only">Open user menu</span>
                  <span class="text-base font-bold flex items-center"
                    >{{ user.name }}
                    <ChevronDownIcon class="w-5 h-5 ml-2" aria-hidden="true"
                  /></span>
                </MenuButton>
              </div>
              <MenuItems
                class="absolute rounded right-0 z-10 mt-2 w-48 origin-top-right bg-white shadow-lg focus:outline-none"
              >
                <MenuItem
                  v-for="item in userNavigation"
                  :key="item.name"
                  v-slot="{ active }"
                >
                  <a
                    :href="item.href"
                    class="block px-4 py-2 text-sm text-gray-700"
                    >{{ item.name }}</a
                  >
                </MenuItem>
              </MenuItems>
            </Menu>

            <div v-else class="ml-3 flex items-center">
              <nuxt-link
                to="/login"
                class="text-sm font-medium text-white hover:underline"
                >Login</nuxt-link
              >
              <span class="mx-2 text-white">|</span>
              <nuxt-link
                to="/register"
                class="text-sm font-medium text-white hover:underline"
                >Register</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar for Mobile -->
      <transition name="slide">
        <div v-if="sidebarOpen" class="fixed inset-0 flex z-40 md:hidden">
          <!-- Overlay -->
          <div
            class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <!-- Sidebar Panel -->
          <div class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-50">
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                @click="sidebarOpen = false"
                class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                <span class="sr-only">Close sidebar</span>
                <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <!-- Logo  -->
              <div class="flex items-center justify-center">
                <div class="text-primary font-extrabold">
                  <a href="/" class="flex items-center flex-col">
                    <h2 class="text-lg sm:text-3xl m-0">MX</h2>
                    <h4 class="text-xs m-0">Auto Auctions</h4>
                  </a>
                </div>
              </div>
              <!-- Navigation -->
              <nav class="mt-5 px-2 space-y-1">
                <div
                  v-for="item in navigation"
                  :key="item.name"
                  class="relative"
                  :aria-current="item.current ? 'page' : undefined"
                >
                  <a
                    @click="item.isOpen = !item.isOpen"
                    class="flex justify-between items-center w-full px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out"
                    :class="
                      item.current
                        ? 'text-primary'
                        : 'text-black hover:bg-primary hover:text-white'
                    "
                    :href="item.href"
                  >
                    {{ item.name }}
                    <ChevronDownIcon
                      v-if="item.subMenu"
                      class="w-3 h-3 ml-2 transform transition-transform duration-200"
                      :class="{ 'rotate-180': item.isOpen }"
                      aria-hidden="true"
                    />
                  </a>

                  <!-- Collapsible Menu -->
                  <div
                    v-if="item.subMenu"
                    class="mt-2 space-y-2"
                    :class="{ hidden: !item.isOpen }"
                  >
                    <a
                      v-for="subItem in item.subMenu"
                      :key="subItem.name"
                      :href="subItem.href"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                    >
                      {{ subItem.name }}
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </transition>
    </nav>

    <!-- Menu -->
    <header class="bg-white shadow">
      <div class="hidden md:block">
        <div class="ml-5 flex">
          <div
            v-for="item in navigation"
            :key="item.name"
            class="relative group border-l"
            :aria-current="item.current ? 'page' : undefined"
          >
            <a
              :href="item.href"
              class="flex justify-center items-center px-5 py-3 w-36 text-sm font-medium"
              :class="
                item.current
                  ? 'text-white bg-primary'
                  : 'text-black hover:bg-black hover:text-white'
              "
            >
              <component class="mr-2 h-4 w-4" :is="item.icon" v-if="item.icon" />
              {{ item.name }}
              <ChevronDownIcon
                v-if="item.subMenu"
                class="w-3 h-3 ml-2 transform transition-transform duration-500 group-hover:rotate-180"
                aria-hidden="true"
              />
            </a>
            
            <!-- Dropdown Menu -->
            <div
              v-if="item.subMenu"
              class="absolute z-10 hidden group-hover:block bg-white border shadow-lg"
            >
              <ul class="py-2 text-sm text-gray-700">
                <li v-for="subItem in item.subMenu" :key="subItem.name">
                  <a
                    :href="subItem.href"
                    class="block px-4 py-2 text-nowrap hover:bg-gray-100"
                    >{{ subItem.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  AlignLeft as MenuIcon,
  ChevronLeft as XIcon,
  ChevronDown,
  LayoutDashboard,
  Search as SearchIcon,
  Receipt,
  Car,
  Caravan,
  User,
  Asterisk,
  Cog,
  BadgePercent,
  Gavel,
} from "lucide-vue-next";

export default {
  name: "Header",
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuIcon,
    XIcon,
    ChevronDownIcon: ChevronDown,
    LayoutDashboard,
    Receipt,
    SearchIcon,
    Car,
    Caravan,
    User,
    Asterisk,
    Cog,
    BadgePercent,
    Gavel,
  },
  data() {
    return {
      sidebarOpen: false,
      user: {
        name: "John Doe",
        isLoggedIn: true,
      },
      navigation: [
        { name: "Dashboard", href: "/", current: false, icon: "LayoutDashboard" },
        {
          name: "Bids",
          href: "/bids",
          current: false,
          icon: "Gavel"
        },
        {
          name: "Customers",
          href: "/customers",
          current: false,
          icon: "User"
        },
        {
          name: "Inventory",
          href: "/inventory",
          current: false,
          icon: "Car"
        },
        {
          name: "Auctions",
          href: "/auctions",
          current: false,
          icon: "BadgePercent"
        },
        {
          name: "Bill Of Sale",
          href: "/bill-of-sale",
          current: false,
          icon: "Receipt"
        },
        {
          name: "Towing",
          href: "/towing",
          current: false,
          icon: "Caravan"
        },
        {
          name: "Master",
          href: "/master",
          current: false,
          icon: "Asterisk"
        },
        {
          name: "CRM",
          href: "/crm-dashboard",
          current: false,
          icon: "Cog"
        },
      ],
      userNavigation: [
        { name: "Profile", href: "/profile" },
        { name: "Sign out", href: "/" },
      ],
    };
  },
  methods: {
    updateCurrentNavigation() {
      const currentPath = this.$route.path;
      this.navigation.forEach(item => {
        item.current = item.href === currentPath;
      });
    },
  },
  mounted() {
    this.updateCurrentNavigation();
  },
};
</script>

