<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const successMessage = ref('');

const updatePassword = async () => {
  try {
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
  // Add your logout logic here
  //console.log('Logout clicked');
};
</script>

<template>
  <div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-md">
    <!-- Change Password Section -->
    <div>
      <h2 class="text-2xl font-semibold mb-6">Change Password</h2>
      <div v-if="successMessage" class="mb-4 text-green-500 font-bold">{{ successMessage }}</div>
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

    <!-- Log Out Section -->
    <div class="mt-8">
      <h2 class="text-2xl font-semibold mb-2">Log Out</h2>
      <p>Ready to leave? Click the button below to log out.</p>
      <div class="flex justify-end mt-4">
        <button @click="logout" class="px-4 py-2 bg-red-500 text-white rounded-md">Log Out</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
