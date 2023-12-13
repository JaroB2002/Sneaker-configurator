<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const order = ref({});
const route = useRoute();
const router = useRouter();

const fetchOrder = async () => {
  const id = route.params.id;
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("https://sneaker-api-4zoy.onrender.com/api/v1/shoes/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      }});
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    order.value = data.data.shoe;
  } catch (error) {
    console.error(error);
    // Redirect to error page or show error message
    router.push('/error');
  }
};
console.log(order)
onMounted(fetchOrder);

const statusClass = computed(() => {
  return {
    'text-green-500': order.value.status === 'accepted',
    'text-yellow-500': order.value.status === 'pending',
    'text-red-500': order.value.status === 'denied',
  };
});

const removeOrder = () => {
  // Check if order.value is defined before accessing its properties
  if (order.value) {
    // Implement logic to remove the order from the system
    // For demonstration purposes, we'll just log a message here
    console.log('Order deleted:', order.value.id);

    // Reset the order to an empty object
    order.value = {};
  }
};

const confirmRemoveOrder = () => {
  // Implement a confirmation dialog before removing the order
  const confirmMessage = "Are you sure you want to remove this order?";
  if (confirm(confirmMessage)) {
    removeOrder();
  }
};
</script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white rounded-md shadow-md">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-black mb-4">Order Details</h1>
      </div>
      <div class="mb-4">
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Order ID:</span>
          <span class="font-bold text-green-500">{{ order._id }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">client:</span>
          <span class="font-bold text-green-500">{{ order._client }}</span>
        </div>
         <div class="flex justify-between mb-2">
          <span class="text-gray-700">email:</span>
          <a :href="'mailto:' + order.email" class="font-bold text-blue-500">{{ order.email }}</a>
        </div>

        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Date:</span>
          <span class="font-bold text-gray-800">{{ new Date(order.date).toLocaleDateString() }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Shoe Name:</span>
          <span class="font-bold text-gray-800">{{ order.name }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Size:</span>
          <span class="font-bold text-gray-800">{{ order.size }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Total Price:</span>
          <span v-if="order.price !== undefined" class="font-bold">
            €{{ order.price.toFixed(2) }}
          </span>
        </div>
        <div class="flex justify-between mb-4">
          <span class="text-gray-700">Status:</span>
          <span :class="statusClass" class="font-bold">{{ order.status }}</span>
        </div>
      </div>
      <div class="mb-4">
        <div class="flex items-center justify-between mb-4">
          <label for="status" class="block text-sm font-medium text-gray-700">
            Change Status:
          </label>
          <select
            id="status"
            v-model.trim="order.status"
            aria-labelledby="statusLabelId"
            class="w-2/3 p-2 border rounded text-gray-800 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
          >
            <option value="pending" class="text-yellow-500">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="denied" class="text-red-500">Denied</option>
          </select>
        </div>
      </div>
      <div class="flex justify-center space-x-4">
        <!-- Single button with confirmation dialog -->
        <button @click="confirmRemoveOrder" class="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600">
          Remove Order
        </button>

        <!-- Link to "/#/Orders/" with text "Go back" -->
        <router-link to="/orders" class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block text-center">Go back</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
