
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import zxcvbn from 'zxcvbn';

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
      const passwordStrength = getPasswordStrength(newPassword.value);
console.log('Password Strength:', passwordStrength);
      errorMessage.value = "New password does not match the confirmed password";
      return;
    }

    const passwordStrength = getPasswordStrength(newPassword);
    if (passwordStrength.score < 3) {
      errorMessage.value = `Choose a stronger password: ${passwordStrength.feedback.suggestions.join(' ')}`;
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

    if (!response.ok) {
      throw new Error(`Password update failed with status: ${response.status}`);
    }

    const json = await response.json();

    if (json.status === 'success') {
      successMessage.value = "Password successfully changed!";
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } else {
      errorMessage.value = `Failed to update password: ${json.message}`;
    }
  } catch (error) {
    console.error('Error during password update:', error);
    errorMessage.value = 'An unexpected error occurred during the password update.';
  }
};

const logout = () => {
  logoutSuccessMessage.value = 'You have been successfully logged out. Redirecting...';
  setTimeout(() => {
    router.push('/');
  }, 2000);
};

const goBack = () => {
  router.push('/orders');
};

const getPasswordStrength = (password) => {
  return zxcvbn(String(password));
};

const getStrengthWidth = (passwordStrength) => {
  const percentage = (passwordStrength.score + 1) * 20; // Adjusted to a scale of 0-100
  return `${percentage}%`;
};

const getStrengthColorClass = (score) => {
  if (score < 2) return 'bg-red-500';
  if (score < 3) return 'bg-orange-500';
  return 'bg-green-500';
};

const getStrengthLabel = (score) => {
  if (score < 2) return 'Very Weak';
  if (score < 3) return 'Weak';
  if (score < 4) return 'Fair';
  if (score < 5) return 'Strong';
  return 'Very Strong';
};

const getStrengthLabelClass = (score) => {
  return score < 3 ? 'text-red-500' : (score < 4 ? 'text-orange-500' : 'text-green-500');
};

const hasSpecialCharacter = (password) => {
  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
  return specialCharacterRegex.test(password);
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
          <input v-model="oldPassword" type="password" id="oldPassword" name="oldPassword"
            class="w-full px-4 py-2 border">
        </div>
        <div class="mb-4">
          <label for="newPassword" class="block text-gray-700 text-sm font-bold mb-2">New Password:</label>
          <input v-model="newPassword" type="password" id="newPassword" name="newPassword"
            class="w-full px-4 py-2 border">
          <div v-if="newPassword" class="mt-2">
            <p>Password Strength:</p>
            <div class="flex items-center">
              <div class="w-1/4 pr-4">
                <div class="text-sm" :class="getStrengthLabelClass(getPasswordStrength(newPassword).score)">
                  {{ getStrengthLabel(getPasswordStrength(newPassword).score) }}
                </div>
              </div>
              <div class="w-3/4">
                <div class="relative">
                  <div :class="getStrengthColorClass(getPasswordStrength(newPassword).score)"
                    :style="{ width: getStrengthWidth(getPasswordStrength(newPassword)) }"></div>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <p class="text-sm font-semibold">Suggestions:</p>
              <ul v-if="getPasswordStrength(newPassword).feedback.suggestions.length">
                <li v-for="suggestion in getPasswordStrength(newPassword).feedback.suggestions" :key="suggestion">
                  {{ suggestion }}
                </li>
                <li v-if="!hasSpecialCharacter(newPassword)">Include at least one special character (e.g., @, #, $)</li>
              </ul>
              <p v-else>No specific suggestions.</p>
            </div>
          </div>
        </div>
        <div class="mb-6">
          <label for="confirmPassword" class="block text-gray-700 text-sm font-bold mb-2">Confirm New Password:</label>
          <input v-model="confirmPassword" type="password" id="confirmPassword" name="confirmPassword"
            class="w-full px-4 py-2 border">
          <p v-if="confirmPassword && newPassword !== confirmPassword" class="text-red-500 mt-2">
            Passwords do not match.
          </p>
        </div>
        <button type="submit"
          :disabled="getPasswordStrength(newPassword).score < 3"
          class="bg-[#69FF47] text-white w-full max-w-md px-4 py-2 transition duration-300 ease-in-out hover:shadow-md">Change
          Password</button>
      </form>
    </div>

    <div class="mt-8">
      <h2 class="text-2xl font-semibold mb-2">Log Out</h2>
      <p>Ready to leave? Click the button below to log out.</p>
      <div class="flex justify-between mt-4">
        <button @click="goBack" class="px-4 py-2 bg-blue-500 text-white -md">No, go back</button>
        <button @click.prevent="logout" class="px-4 py-2 bg-red-500 text-white -md">Yes, log Out</button>
      </div>
      <div v-if="logoutSuccessMessage" class="mt-4 text-green-500 font-bold">{{ logoutSuccessMessage }}</div>
    </div>
  </div>
</template>


<style scoped></style>
