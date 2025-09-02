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

          <!-- Search -->
          <div class="w-full md:w-1/2 mt-4 md:mt-0">
            <form class="relative w-full">
              <label for="default-search" class="sr-only">Search</label>
              <div class="relative">
                <input
                  type="search"
                  id="default-search"
                  class="block w-full px-5 py-2 sm:p-4 text-sm text-gray-900 border border-gray-300 rounded-full [&::-webkit-search-cancel-button]:hidden bg-gray-50 focus:ring-primary focus:border-primary"
                  placeholder="I'm Shopping For... IE: Honda Civic"
                  required
                />
                <button
                  type="submit"
                  class="absolute right-2 top-2 bottom-2 me-2 text-gray-700 hover:text-primary"
                >
                  <SearchIcon class="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </form>
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
        <div class="ml-10 flex items-baseline space-x-4">
          <div
            v-for="item in navigation"
            :key="item.name"
            class="relative group"
            :aria-current="item.current ? 'page' : undefined"
          >
            <a
              :href="item.href"
              class="flex justify-between items-center px-3 py-2 text-sm font-medium"
              :class="
                item.current
                  ? 'text-primary'
                  : 'text-black hover:bg-primary hover:text-white'
              "
            >
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
  Search as SearchIcon,
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
    SearchIcon,
  },
  data() {
    return {
      sidebarOpen: false,
      user: {
        name: "John Doe",
        isLoggedIn: true,
      },
      navigation: [
        { name: "Home", href: "/", current: false },
        { name: "Auctions", href: "/auctions", current: false },
        {
          name: "Getting Started",
          href: "#",
          current: false,
          subMenu: [
            { name: "How to Buy Guide", href: "/" },
            { name: "FAQ", href: "/" },
          ],
        },
        {
          name: "Services",
          href: "#",
          current: false,
          subMenu: [
            { name: "Car Services", href: "/" },
            { name: "Truck Services", href: "/" },
          ],
        },
      ],
      userNavigation: [
        { name: "Your Profile", href: "/profile" },
        { name: "Sign out", href: "/" },
      ],
    };
  },
};
</script>
