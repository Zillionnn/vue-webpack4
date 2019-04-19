import Vue from 'vue'
import Router from 'vue-router'
import echartDemo from '@/components/echartPage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'echartDemo',
      component: echartDemo
    }
  ]
})
