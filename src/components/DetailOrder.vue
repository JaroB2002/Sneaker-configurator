<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'; // Add this import statement


    const order = ref({
        id: 1,
        date: '2023-12-01',
        product: 'Example Product',
        quantity: 2,
        totalPrice: 50.0,
        status: 'pending',
    });



</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
     <div class="w-full max-w-md p-6 bg-white rounded-md shadow-md">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-green-500">Order Details</h1>
      </div>
      <div class="mt-4">
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Order ID:</span>
          <span class="font-bold text-gray-800">{{ order.id }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Date:</span>
          <span class="font-bold text-gray-800">{{ order.date }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Product:</span>
          <span class="font-bold text-gray-800">{{ order.product }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Quantity:</span>
          <span class="font-bold text-gray-800">{{ order.quantity }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Total Price:</span>
          <span class="font-bold text-green-500">€{{ order.totalPrice.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between mb-4">
          <span class="text-gray-700">Status:</span>
          <span
            :class="{
              'text-green-500': order.status === 'accepted',
              'text-yellow-500': order.status === 'pending',
              'text-red-500': order.status === 'denied',
            }"
            class="font-bold"
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
            class="w-full p-2 border border-green-500 rounded text-green-500"
          >
          <option value="pending" class="text-yellow-500">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="denied" class="text-red-500">Denied</option>
          </select>
          
        </div>
      </div>          
          <!-- Link to "/#/Orders/" with text "Go back" -->
          <router-link to="/Orders">Go back</router-link>

    </div>
  </div>
</template>

<style scoped>
</style>
