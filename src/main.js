import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import store from './store'
import '@/mock/mockServer'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
Vue.config.productionTip = false

Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)
new Vue({
  render: h => h(App),
  router,
  store,
  // 配置全局事件总线   在页面挂载之前绑定到vm原型对象上
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')