import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import VueRouter
import * as VueRouter from 'vue-router'

// import Login & Signup from/components
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Overview from './components/Overview.vue'
import DetailOrder from './components/DetailOrder.vue'

const routes = [
    { path: '/', component: Login},
    { path: '/orders', component: Overview },
    { path: '/orders/:id', component: DetailOrder, props: true}, // zowat de get variabele, een dynamische route aangezien je niet op voorhand weet wat id is
    { path: '/signup', component: Signup },
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

const app = createApp(App) // Removed curly braces around App
app.use(router);
app.mount('#app');