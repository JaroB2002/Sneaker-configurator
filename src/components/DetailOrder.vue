<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const order = ref({});
const route = useRoute();
const router = useRouter();
const selectedStatus = ref('');
//make a new Primus connection
let primus = new Primus('https://sneaker-api-4zoy.onrender.com');

primus.on('open', () => {
  console.log('Connection is alive and kicking')});

const fetchOrder = async () => {
  const id = route.params.id;
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`https://sneaker-api-4zoy.onrender.com/api/v1/shoes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    order.value = data.data.shoe;
  } catch (error) {
    console.error('Error fetching order:', error);
    router.push('/error');
  }
};

//update function: when the status of the order is changed, the order is updated in the database
const updateOrderStatus = async () => {
  const id = route.params.id;
  const status = selectedStatus.value;
  console.log(status);
  try{
    const token = localStorage.getItem('token');
    const response = await fetch(`https://sneaker-api-4zoy.onrender.com/api/v1/shoes/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({status: status}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if(primus.readyState == Primus.OPEN){
        primus.write(JSON.stringify({action: 'updateStatus', response: response}));
      }

    console.log('Order updated:', id);
    router.push('/orders');
  } catch (error) {
    console.error('Error updating order:', error);
    router.push('/error');
  }
}

onMounted(fetchOrder);

const statusClass = computed(() => {
  return {
    'text-green-500': order.value.status === 'accepted',
    'text-yellow-500': order.value.status === 'in progress',
    'text-red-500': order.value.status === 'denied',
  };
});

const removeOrder = async () => {
  if (order.value) {
    const id = order.value._id;
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://sneaker-api-4zoy.onrender.com/api/v1/shoes/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      if(primus.readyState == Primus.OPEN){
        primus.write(JSON.stringify({action: 'delete'}));
      }

      console.log('Order deleted:', id);
      order.value = {};
      router.push('/orders');
    } catch (error) {
      console.error('Error removing order:', error);
      router.push('/error');
    }
  }
};

const confirmRemoveOrder = () => {
  const confirmMessage = 'Are you sure you want to remove this order?';
  if (confirm(confirmMessage)) {
    removeOrder();
  }
};

watch(() => selectedStatus.value, (newStatus, oldStatus) => {
  if (newStatus !== oldStatus) {
    updateOrderStatus();
  }
}, { immediate: false });
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
        <div class="mb-4" v-if="order.user">
      <div class="flex justify-between mb-2">
        <span class="text-gray-700">Client:</span>
        <span class="font-bold text-green-500">{{ order.user.username }}</span>
      </div>
      <div class="flex justify-between mb-2">
        <span class="text-gray-700">Email:</span>
        <a :href="'mailto:' + order.email" class="font-bold text-blue-500">{{ order.user.email }}</a>
      </div>
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
            v-model="selectedStatus"
            class="w-2/3 p-2 border rounded text-gray-800 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
          >
            <option value="in progress" class="text-yellow-500">In progress</option>
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
