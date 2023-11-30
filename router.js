// router.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import Configurator from './views/Configurator.vue'; // Zorg ervoor dat het pad correct is

Vue.use(VueRouter);

const routes = [
  {
    path: '/configurator',
    component: Configurator,
  },
  // Voeg hier eventuele andere routes toe
];

const router = new VueRouter({
  routes,
  mode: 'history', // Optioneel, gebruikt geschiedenis API voor "schone" URL's
});

export default router;
