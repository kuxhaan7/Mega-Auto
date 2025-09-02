<template>
  <div class="w-full pb-8 mt-3">
    <h2 class="text-2xl font-bold mb-4">Your Profile</h2>
    <div class="grid mx-auto">
      <div class="items-center">
        <!-- Name - Username -->
        <div
          class="flex flex-col items-center mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6"
        >
          <div class="w-full">
            <label for="name" class="block mb-2 text-sm font-medium text-black">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="text-black text-sm rounded focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Your Name"
              required
            />
          </div>

          <div class="w-full">
            <label for="username" class="block mb-2 text-sm font-medium text-black">Username</label>
            <input
              type="text"
              id="username"
              v-model="formData.username"
              class="text-black text-sm rounded focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Your last name"
              required
            />
          </div>
        </div>

        <!-- Email - Phone -->
        <div
          class="flex flex-col items-center mb-2 space-x-0 space-y-2 mt-5 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6"
        >
          <div class="w-full">
            <label for="email" class="block mb-2 text-sm font-medium text-black">Email</label>
            <input
              type="text"
              id="email"
              v-model="formData.email"
              class="text-black text-sm rounded focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="user@mail.com"
              required
            />
          </div>

          <div class="w-full">
            <label for="phone" class="block mb-2 text-sm font-medium text-black">Phone</label>
            <input
              type="text"
              id="phone"
              v-model="formData.phone"
              class="text-black text-sm rounded focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="+971568386300"
              required
            />
          </div>
        </div>

        <!-- Address -->
        <div
          class="flex flex-col items-center mb-2 space-x-0 space-y-2 mt-5 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6"
        >
          <div class="w-full">
            <label for="address" class="block mb-2 text-sm font-medium text-black">Address</label>
            <input
              type="text"
              id="address"
              v-model="formData.address"
              class="text-black text-sm rounded focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Address"
              required
            />
          </div>
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            @click="handleSubmit"
            class="text-white px-9 py-2 focus:ring-0 hover:bg-black focus:outline-none bg-primary font-medium rounded text-sm w-full sm:w-auto text-center"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateProfile",
  data() {
    return {
      formData: {
        name: 'Muhammad Muneeb',
        username: 'muneebiftikhar',
        email: '',
        phone: '',
        address: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log("Form data:", this.formData);

      // Example: Send the data to an API (you can replace with actual API call)
      // axios.post('/api/update-profile', this.formData)
      //   .then(response => {
      //     // Handle success
      //     console.log('Profile updated', response.data);
      //   })
      //   .catch(error => {
      //     // Handle error
      //     console.error('There was an error updating the profile:', error);
      //   });
    }
  }
};
</script>
