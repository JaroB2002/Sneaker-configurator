<script setup>
    import { ref } from 'vue'

</script>

<template>
    LOGIN KOMT HIER 
    <li class="text-white p-2 text sm" v-for="message in messages" :key="message">
            <router-link to="/login/">{{ message }}</router-link>
        </li>
</template>

<style scoped>
</style>
