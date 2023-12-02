<template>
    <div class="detail-order">
      <div class="dashboard-header">
        <h1>Detail Order</h1>
      </div>
      <div class="order-details">
        <div class="detail-item">
          <span class="label">Order ID:</span>
          <span class="value">{{ order.id }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Product:</span>
          <span class="value">{{ order.product }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Quantity:</span>
          <span class="value">{{ order.quantity }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Total Price:</span>
          <span class="value">{{ order.totalPrice }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const order = ref({
    id: 1,
    product: 'Example Product',
    quantity: 2,
    totalPrice: 50.0,
  });
  </script>
  
  <style scoped>
  .detail-order {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .dashboard-header {
    background-color: #3498db;
    color: #fff;
    padding: 20px;
    text-align: center;
  }
  
  .order-details {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 20px;
  }
  
  .detail-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .label {
    font-weight: bold;
  }
  
  /* Voeg hier je scoped stijlen toe indien nodig */
  </style>
  