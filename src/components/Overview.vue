<script setup>
import { ref, onMounted } from 'vue'


</script>

<template>
<h1 class="text-3xl font-bold mb-4">Overview orders of this week</h1>
        <div class="order" v-for="order in orders" :key="order.id">
            <h2>Order {{ order.id }}</h2>
            <p>Order date: {{ order.order_date }}</p>
            <p>Order status: {{ order.status }}</p>
            <p>Order price: {{ order.price }}</p>
            <p>Order user: {{ order.user_id }}</p>
            <p>Order sneaker: {{ order.sneaker_id }}</p>
            
    </div>

</template>

<style scoped>

</style>
