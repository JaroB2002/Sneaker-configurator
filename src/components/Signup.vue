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
      showFeedback("Account created successfully");
      let token = json.data.token;
      localStorage.setItem('token', token);
      window.location.href = "/";
    } else {
      showFeedback("Account creation failed");
    }
  } catch (error) {
    console.error('Error during signup:', error);
  }
};

const showFeedback = (message) => {
  let feedback = document.querySelector('.alert');
  feedback.textContent = message;
  feedback.classList.remove('hidden');
};
</script>

<template>
    <div class="relative flex items-center justify-center h-screen overflow-hidden">
      <!-- Background Animation -->
      <div class="area">
        <ul class="rectangles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
  
      <!-- Sign-up Form -->
      <div class="bg-white p-8 rounded shadow-md w-96 text-black relative z-10">
        <h2 class="text-3xl font-bold mb-6">Create an account</h2>
  
        <div class="alert hidden bg-gray-300 p-2 mb-4 font-bold">
          Here is some feedback
        </div>
  
        <div class="mb-8">
          <label for="email" class="block text-sm font-bold text-gray-700">Email</label>
          <input
            type="text"
            class="input--text w-full p-2 border rounded-none focus:outline-none focus:border-blue-500"
            name="email"
            id="email"
            v-model="email"
          />
        </div>
  
        <div class="mb-8">
          <label for="password" class="block text-sm font-bold text-gray-700">Password</label>
          <input
            type="password"
            class="input--text w-full p-2 border rounded-none focus:outline-none focus:border-blue-500"
            name="password"
            id="password"
            v-model="password"
          />
        </div>
  
        <button
          @click="signUp"
          class="btn btn--primary bg-green-500 text-white font-bold p-4 rounded-none cursor-pointer hover:bg-#4AD22E w-full"
        >
          Sign up
        </button>
  
        <!-- Link to Login -->
        <div class="mt-4 text-center text-sm text-gray-700">
  Already have an account? <router-link to="/" class="text-white-500 font-bold hover:underline">Login</router-link>
</div>

      </div>
    </div>
  </template>
  
  
  <style scoped>
    .input--text {
    border-color: #69FF47; /* Border color for text fields */
  }
  .btn--primary {
    background-color: #69FF47; /* Background color for the login button */
  }
  .area {
    background: #1C1B1F;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
  }

  .rectangles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .rectangles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: #69FF47;
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .rectangles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .rectangles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .rectangles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .rectangles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .rectangles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .rectangles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .rectangles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .rectangles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .rectangles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .rectangles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 15%;
    }
  }
</style>
