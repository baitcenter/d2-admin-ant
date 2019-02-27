import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import d2Admin from '@/plugin/d2admin'

// 核心插件
Vue.use(d2Admin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
