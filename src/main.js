import Vue from 'vue'

import './plugins'
import store from './store'
import router from './router'

import { sync } from 'vuex-router-sync'
sync(store,  router);

import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
