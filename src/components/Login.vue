<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();
const email = ref('');
const password = ref('');
const feedbackMessage = ref('');
const isSuccess = ref(true);

const logIn = async () => {
  try {
    const response = await fetch('https://sneaker-api-4zoy.onrender.com/users/login', {
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
      feedbackMessage.value = "Successfully logged in";
      isSuccess.value = true;

      let token = json.data.token;
      localStorage.setItem('token', token);
      store.commit('setToken', token);
      router.push('/orders');
    } else {
      feedbackMessage.value = "Failed to login";
      isSuccess.value = false;
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
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

    <!-- Login Form -->
    <div class="bg-white p-8 rounded shadow-md w-96 text-black relative z-10">
      <h2 class="text-3xl font-bold mb-6">Log in with your account</h2>
      <div v-if="feedbackMessage" :style="{ color: isSuccess ? '#4AD22E' : '#FF0000' }" class="mb-4 font-bold">
        {{ feedbackMessage }}
      </div>

      <div class="alert hidden bg-white p-2 mb-4 font-bold" :style="{ color: '#FF0000' }">
        Here is some feedback
      </div>

      <div class="mb-8">
        <label for="email" class="block text-sm font-bold text-gray-700">Email</label>
        <input type="text" class="input--text w-full p-2 border rounded-none focus:outline-none focus:border-blue-500"
          name="email" id="email" v-model="email" />
      </div>

      <div class="mb-8">
        <label for="password" class="block text-sm font-bold text-gray-700">Password</label>
        <input type="password" class="input--text w-full p-2 border rounded-none focus:outline-none focus:border-blue-500"
          name="password" id="password" v-model="password" />
      </div>

      <button @click="logIn"
        class="btn btn--primary bg-blue-500 text-white font-bold p-4 rounded-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-#4AD22E hover:shadow-md w-full">
        Log in
      </button>


      <!-- Link to Signup -->
      <div class="mt-4 text-center text-sm text-gray-700">
        Don't have an account? <router-link to="/signup" class="text-white-500 font-bold hover:underline">Sign
          up</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Existing styles for the background animation */
.area {
  background: #1C1B1F;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
}

.alert {
  color: #FF0000;
  /* Set text color for the feedback message */
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

/* Additional styles for the login form */
/* You can modify these styles as needed */
.input--text {
  border-color: #69FF47;
  /* Border color for text fields */
}

.btn--primary {
  background-color: #69FF47;
  /* Background color for the login button */
}
</style>
