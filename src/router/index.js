import Vue from 'vue'
import vueRouter from 'vue-router'
import routes from './routes'
Vue.use(vueRouter)

export default new vueRouter({
  mode:'history',
  routes,
  scrollBehavior () {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})