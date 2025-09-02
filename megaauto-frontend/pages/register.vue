<template>
  <div>
    <div
      class="flex min-h-full flex-1 flex-col justify-center px-1 py-2 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Register your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div class="mt-2">
              <input
                id="name"
                v-model="name"
                name="name"
                type="text"
                autocomplete="name"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="username"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div class="mt-2">
              <input
                id="username"
                v-model="username"
                name="username"
                type="text"
                autocomplete="username"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div class="mt-2 relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="password"
                name="password"
                autocomplete="new-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
              <div
                class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                @click="togglePassword"
              >
                <component
                  :is="showPassword ? 'EyeIcon' : 'EyeSlashIcon'"
                  class="h-5 w-5 text-gray-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              for="confirmPassword"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div class="mt-2 relative">
              <input
                :type="showConfirmPassword ? 'text' : 'password'"
                id="confirmPassword"
                v-model="confirmPassword"
                name="confirmPassword"
                autocomplete="new-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
              <div
                class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                @click="toggleConfirmPassword"
              >
                <component
                  :is="showConfirmPassword ? 'EyeIcon' : 'EyeSlashIcon'"
                  class="h-5 w-5 text-gray-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              for="phone"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div class="mt-2">
              <input
                id="phone"
                v-model="phone"
                name="phone"
                type="text"
                autocomplete="tel"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="address"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div class="mt-2">
              <input
                id="address"
                v-model="address"
                name="address"
                type="text"
                autocomplete="street-address"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Register
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <nuxt-link
            to="/login"
            class="font-semibold leading-6 text-primary hover:text-black"
          >
            Sign in
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    EyeIcon,
    EyeSlashIcon,
  },
  data() {
    return {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // const config = useRuntimeConfig();

        // const response = await $fetch(`${config.public.baseUrl}/register`, {
        const response = await $fetch('http://localhost:3000/register', {

          method: 'POST',
          body: {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            confirmPassword: this.confirmPassword,
            phone: this.phone,
            address: this.address,
          }
        });

        console.log("User registered:", response);
        this.$router.push('/login'); // Redirect on success
      } catch (error) {
        console.error("Registration error:", error);
        alert("Registration failed: " + (error?.data?.message || "Please try again"));
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
  },
};
</script>


<style scoped>
/* Add any specific styles for the registration form here */
</style>
