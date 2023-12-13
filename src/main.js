import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import VueRouter
import * as VueRouter from 'vue-router'

// import Vuex
import { createStore } from 'vuex'

// import Login & Signup from/components
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Overview from './components/Overview.vue'
import DetailOrder from './components/DetailOrder.vue'

const store = createStore({
    state(){
        return {
            token: localStorage.getItem('token') || null,
        };   
    },
    mutations: {
        setToken(state, token) {
          state.token = token;
        },
      },
});

const routes = [
    { path: '/', component: Login},
    { path: '/orders', component: Overview, meta: {requiresAuth: true}},
    { path: '/orders/:id', component: DetailOrder, props: true}, // zowat de get variabele, een dynamische route aangezien je niet op voorhand weet wat id is
    { path: '/signup', component: Signup },
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      const token = localStorage.getItem('token');
  
      // Stuur een verzoek naar de server om de geldigheid van het token te controleren
      const response = await fetch('https://sneaker-api-4zoy.onrender.com/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (response.ok) {
        // Als het token geldig is, ga dan naar de volgende route
        next();
      } else {
        // Als het token ongeldig is, ga dan naar de loginpagina
        next({ path: '/' });
      }
    } else {
      next();
    }
  });

const app = createApp(App) // Removed curly braces around App
app.use(router);
app.use(store);
app.mount('#app');