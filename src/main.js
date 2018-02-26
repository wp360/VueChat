import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs';

Vue.use(Vuex)

axios.defaults.transformRequest = [data => qs.stringify(data)]; //跨域

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
