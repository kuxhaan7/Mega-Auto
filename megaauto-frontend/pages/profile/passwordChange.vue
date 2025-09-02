<template>
  <div class="w-full pb-8 mt-3">
    <h2 class="text-2xl font-bold mb-4">Change Password</h2>
    <div class="grid mx-auto sm:w-1/2 w-full">
      <div class="items-center">
        <!-- Current Password -->
        <div v-if="!showNewPasswordFields" class="w-full mb-6 mt-10">
          <label for="current-password" class="block mb-2 text-sm font-medium text-black">Current Password</label>
          <input
            type="password"
            id="current-password"
            v-model="formData.currentPassword"
            class="text-black text-sm rounded focus:ring-primary focus:border-primary block w-full p-2.5"
            placeholder="Enter Current Password"
            required
          />
        </div>

        <!-- New Password & Confirm Password -->
        <div v-if="showNewPasswordFields">
          <div class="w-full mb-4">
            <label for="new-password" class="block mb-2 text-sm font-medium text-black">New Password</label>
            <input
              type="password"
              id="new-password"
              v-model="formData.newPassword"
              class="text-black text-sm rounded focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Enter New Password"
              required
            />
          </div>

          <div class="w-full mb-4">
            <label for="confirm-password" class="block mb-2 text-sm font-medium text-black">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              v-model="formData.confirmPassword"
              class="text-black text-sm rounded focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Confirm New Password"
              required
            />
          </div>
        </div>

        <!-- Button -->
        <div class="flex justify-center">
          <button
            v-if="!showNewPasswordFields"
            @click="validateCurrentPassword"
            class="text-white px-9 py-2 focus:ring-0 hover:bg-black focus:outline-none bg-primary font-medium rounded text-sm w-full sm:w-auto text-center"
          >
            Validate Current Password
          </button>
          
          <button
            v-if="showNewPasswordFields"
            @click="changePassword"
            class="text-white px-9 py-2 focus:ring-0 hover:bg-black focus:outline-none bg-primary font-medium rounded text-sm w-full sm:w-auto text-center"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "changePassword",
  data() {
    return {
      formData: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      showNewPasswordFields: false,
    };
  },
  methods: {
    validateCurrentPassword() {
      // Simulate password validation (replace with actual validation logic)
      if (this.formData.currentPassword === "correct-password") {
        this.showNewPasswordFields = true;
      } else {
        alert("Current password is incorrect");
      }
    },
    changePassword() {
      if (this.formData.newPassword !== this.formData.confirmPassword) {
        alert("New password and confirmation do not match");
        return;
      }

      console.log("Changing password to:", this.formData.newPassword);

      // Example: Send the data to an API (replace with actual API call)
      // axios.post('/api/change-password', this.formData)
      //   .then(response => {
      //     console.log('Password changed', response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error changing password:', error);
      //   });
    },
  },
};
</script>
