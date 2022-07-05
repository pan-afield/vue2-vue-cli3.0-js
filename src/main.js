import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
// import './mixin/mixin.scss'
import 'xe-utils'
import VXETable, { v } from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.config.productionTip = false

Vue.use(VXETable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
