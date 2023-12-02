<template>
    <div class="detail-order min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <div class="text-center">
          <h1 class="text-2xl font-semibold text-gray-800">Order Details</h1>
        </div>
        <div class="mt-4">
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Order ID:</span>
            <span class="font-medium">{{ order.id }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Date:</span>
            <span class="font-medium">{{ order.date }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Product:</span>
            <span class="font-medium">{{ order.product }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Quantity:</span>
            <span class="font-medium">{{ order.quantity }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Total Price:</span>
            <span class="font-medium">€{{ order.totalPrice.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-gray-600">Status:</span>
            <span
              :class="{
                'text-green-500': order.status === 'accepted',
                'text-yellow-500': order.status === 'pending',
                'text-red-500': order.status === 'denied',
              }"
            >
              {{ order.status }}
            </span>
          </div>
          <div class="mt-4">
            <label
              for="status"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Change Status:
            </label>
            <select
              id="status"
              v-model="order.status"
              class="w-full p-2 border border-gray-300 rounded"
            >
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="denied">Denied</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const order = ref({
    id: 1,
    date: '2023-12-01',
    product: 'Example Product',
    quantity: 2,
    totalPrice: 50.0,
    status: 'pending',
  });
  </script>
  
  <style scoped>
  /* Voeg hier je scoped stijlen toe indien nodig */
  </style>
  