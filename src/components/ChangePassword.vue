<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const successMessage = ref('');
const errorMessage = ref('');
const logoutSuccessMessage = ref('');


const updatePassword = async () => {
  try {
    if (newPassword.value !== confirmPassword.value) {
      errorMessage.value = "New password does not match the confirmed password";
      return;
    }
    const response = await fetch('https://sneaker-api-4zoy.onrender.com/admin/change-password', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        oldPassword: oldPassword.value,
        newPassword: newPassword.value,
        confirmPassword: confirmPassword.value
      })
    });

    const json = await response.json();

    if (json.status === 'success') {
      successMessage.value = "Wachtwoord succesvol gewijzigd!";
      //console.log('Success message:', successMessage.value);

      // Add a delay before navigation (e.g., 2 seconds)
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } else {
      successMessage.value = '';
      //console.log("Failed to update password");
    }
  } catch (error) {
    //console.error('Error during password update:', error);
  }
};

const logout = () => {

  logoutSuccessMessage.value = 'You have been successfully logged out. Redirecting...';

  setTimeout(() => {
    router.push('/');
  }, 2000); // Redirect after 2 seconds (adjust the delay as needed)
};
const goBack = () => {
  router.push('/orders');
};
</script>

<template>
  <div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-md">
    <!-- Change Password Section -->
    <div>
      <h2 class="text-2xl font-semibold mb-6">Change Password</h2>
      <div v-if="successMessage" class="mb-4 text-green-500 font-bold">{{ successMessage }}</div>
      <div v-if="errorMessage" class="mb-4 text-red-500 font-bold">{{ errorMessage }}</div>
      <form @submit.prevent="updatePassword">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input v-model="username" type="text" id="username" name="username" class="w-full px-4 py-2 border">
        </div>
        <div class="mb-4">
          <label for="oldPassword" class="block text-gray-700 text-sm font-bold mb-2">Current Password:</label>
          <input v-model="oldPassword" type="password" id="oldPassword" name="oldPassword" class="w-full px-4 py-2 border">
        </div>
        <div class="mb-4">
          <label for="newPassword" class="block text-gray-700 text-sm font-bold mb-2">New Password:</label>
          <input v-model="newPassword" type="password" id="newPassword" name="newPassword" class="w-full px-4 py-2 border">
        </div>
        <div class="mb-6">
          <label for="confirmPassword" class="block text-gray-700 text-sm font-bold mb-2">Confirm New Password:</label>
          <input v-model="confirmPassword" type="password" id="confirmPassword" name="confirmPassword" class="w-full px-4 py-2 border">
        </div>
        <button type="submit" class="bg-[#69FF47] text-white w-full max-w-md px-4 py-2 transition duration-300 ease-in-out hover:shadow-md">Change Password</button>
      </form>
    </div>

    <div class="mt-8">
      <h2 class="text-2xl font-semibold mb-2">Log Out</h2>
      <p>Ready to leave? Click the button below to log out.</p>
      <div class="flex justify-between mt-4">
        <!-- Align the blue button to the left -->
        <button @click="goBack" class="px-4 py-2 bg-blue-500 text-white -md">No, go back</button>
        
        <button @click.prevent="logout" class="px-4 py-2 bg-red-500 text-white -md">Yes, log Out</button>
      </div>
      <div v-if="logoutSuccessMessage" class="mt-4 text-green-500 font-bold">{{ logoutSuccessMessage }}</div>
    </div>
  </div>
</template>

<style scoped>
</style>
