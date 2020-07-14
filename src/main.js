import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/iconfont/iconfont.css'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)
// import axios from 'axios'
// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/n3'
// Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
