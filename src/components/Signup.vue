<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const signUp = async () => {
  try {
    const response = await fetch('https://sneaker-api-4zoy.onrender.com/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: email.value,
        password: password.value
      })
    });

    const json = await response.json();

    if (json.status === 'success') {
      let feedback = document.querySelector('.alert');
      feedback.textContent = "Account created successfully";
      feedback.classList.remove('hidden');
      let token = json.data.token;
      localStorage.setItem('token', token);
      window.location.href = "/";
    } else {
      let feedback = document.querySelector('.alert');
      feedback.textContent = "Account creation failed";
      feedback.classList.remove('hidden');
    }
  } catch (error) {
    console.error('Error during signup:', error);
  }
};
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h2 class="text-2xl font-semibold mb-6">Create an account</h2>

      <div class="alert hidden bg-blue-200 p-2 mb-4 text-blue-700">
        Here is some feedback
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
        <input
          type="text"
          class="input--text w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          name="email"
          id="email"
          v-model="email"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
        <input
          type="password"
          class="input--text w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          name="password"
          id="password"
          v-model="password"
        />
      </div>

      <button
        @click="signUp"
        class="btn btn--primary bg-blue-500 text-white font-bold p-2 rounded-full cursor-pointer"
      >
        Sign up
      </button>
    </div>
  </div>
</template>
